'use client';

import { useState, type FormEvent } from 'react';
import {
  deleteUser,
  getAdditionalUserInfo,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type User,
} from '@firebase/auth';
import Google from '@mui/icons-material/Google';
import DeleteOutlineRounded from '@mui/icons-material/DeleteOutlineRounded';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControlLabel,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@/components/ui';
import { ThemeModeButton } from '@/components/ThemeModeButton';
import { apiRequest, type AdminProfile } from '@/lib/api';
import { accountDeletionAuth, isFirebaseConfigured } from '@/lib/firebase';

interface VerifiedAccount {
  user: User;
  profile: AdminProfile;
}

function errorMessage(error: unknown) {
  const code =
    typeof error === 'object' && error !== null && 'code' in error
      ? String(error.code)
      : '';
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'E-mail ou senha incorretos. Se você criou a conta com Google, use o botão Continuar com Google.';
    case 'auth/invalid-email':
      return 'Informe um endereço de e-mail válido.';
    case 'auth/too-many-requests':
      return 'Muitas tentativas. Aguarde alguns minutos e tente novamente.';
    case 'auth/popup-closed-by-user':
    case 'auth/cancelled-popup-request':
      return 'O login com Google foi cancelado. Tente novamente para continuar.';
    case 'auth/popup-blocked':
      return 'Seu navegador bloqueou a janela do Google. Permita pop-ups para este site e tente novamente.';
    case 'auth/account-exists-with-different-credential':
      return 'Use o mesmo método de login com que você criou a conta no ConectaPro.';
    case 'auth/network-request-failed':
      return 'Não foi possível conectar ao serviço de login. Verifique sua conexão.';
    case 'auth/unauthorized-domain':
      return 'O domínio deste site ainda não foi autorizado para login Google no Firebase. A equipe ConectaPro precisa adicioná-lo em Authentication → Settings → Authorized domains. Enquanto isso, use e-mail/senha ou o suporte abaixo.';
    case 'auth/operation-not-allowed':
      return 'O provedor Google está desativado no Firebase deste projeto. A equipe ConectaPro precisa ativá-lo em Authentication → Sign-in method → Google. Enquanto isso, use e-mail/senha ou o suporte abaixo.';
    case 'auth/user-disabled':
      return 'Esta conta está desativada. Solicite a exclusão pelo contato de suporte abaixo.';
    case 'auth/multi-factor-auth-required':
      return 'Esta conta exige autenticação em duas etapas. Use o contato de suporte abaixo para solicitar a exclusão com verificação de identidade.';
    default:
      if (code.startsWith('auth/')) {
        return 'Não foi possível autenticar sua conta. Tente novamente ou use o contato de suporte abaixo.';
      }
      return error instanceof Error ? error.message : 'Não foi possível concluir. Tente novamente ou contate o suporte.';
  }
}

export function AccountDeletion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [account, setAccount] = useState<VerifiedAccount | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [acknowledged, setAcknowledged] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);

  async function verifyAccount(user: User) {
    const profile = await apiRequest<AdminProfile>(
      '/auth/profile',
      await user.getIdToken(true)
    );
    setAccount({ user, profile });
    setPassword('');
    setAcknowledged(false);
  }

  async function handleEmailSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!accountDeletionAuth) {
      setError('O login está indisponível. Use o contato de suporte abaixo.');
      return;
    }
    setBusy(true);
    setError('');
    setNotice('');
    try {
      const credential = await signInWithEmailAndPassword(accountDeletionAuth, email.trim(), password);
      await verifyAccount(credential.user);
    } catch (signInError) {
      setError(errorMessage(signInError));
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogleSignIn() {
    if (!accountDeletionAuth) {
      setError('O login está indisponível. Use o contato de suporte abaixo.');
      return;
    }
    setBusy(true);
    setError('');
    setNotice('');
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const credential = await signInWithPopup(accountDeletionAuth, provider);
      // Firebase can create an identity during Google login; this page never registers accounts.
      if (getAdditionalUserInfo(credential)?.isNewUser) {
        await deleteUser(credential.user);
        throw new Error('Esta conta Google não tem cadastro no ConectaPro. Escolha a conta usada no aplicativo ou entre em contato com o suporte.');
      }
      await verifyAccount(credential.user);
    } catch (signInError) {
      setError(errorMessage(signInError));
    } finally {
      setBusy(false);
    }
  }

  async function handlePasswordReset() {
    if (!accountDeletionAuth || !email.trim()) {
      setError('Informe seu e-mail acima para receber as instruções de recuperação.');
      return;
    }
    setBusy(true);
    setError('');
    setNotice('');
    try {
      await sendPasswordResetEmail(accountDeletionAuth, email.trim());
      setNotice('Se houver uma conta elegível, você receberá as instruções para redefinir a senha. Confira também o spam.');
    } catch (resetError) {
      setError(errorMessage(resetError));
    } finally {
      setBusy(false);
    }
  }

  async function handleSwitchAccount() {
    setBusy(true);
    setError('');
    try {
      if (accountDeletionAuth) await signOut(accountDeletionAuth);
      setAccount(null);
      setAcknowledged(false);
    } catch (signOutError) {
      setError(errorMessage(signOutError));
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete() {
    if (!account || !acknowledged) return;
    setBusy(true);
    setError('');
    try {
      if (accountDeletionAuth?.currentUser?.uid !== account.user.uid) {
        setAccount(null);
        setAcknowledged(false);
        throw new Error('Sua sessão mudou. Entre novamente na conta que deseja excluir.');
      }
      const result = await apiRequest<{ deleted: boolean }>(
        '/auth/account',
        await account.user.getIdToken(true),
        { method: 'DELETE' }
      );
      if (result.deleted !== true) {
        throw new Error('A API não confirmou a exclusão. Entre em contato com o suporte antes de tentar novamente.');
      }
      setDeleted(true);
      setAccount(null);
      setPassword('');
      setAcknowledged(false);
      await signOut(accountDeletionAuth);
    } catch (deleteError) {
      setError(errorMessage(deleteError));
    } finally {
      setConfirmOpen(false);
      setBusy(false);
    }
  }

  return (
    <Container component="main" maxWidth="md" sx={{ py: { xs: 3, sm: 6 } }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h2" component="p" color="primary">ConectaPro</Typography>
        <ThemeModeButton />
      </Stack>
      <Paper variant="outlined" sx={{ p: { xs: 3, sm: 5 }, borderRadius: 3 }}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h1" sx={{ mb: 2 }}>Excluir conta e dados</Typography>
            <Typography color="text.secondary">
              Exclua sua conta do ConectaPro e os dados associados por aqui, sem instalar ou abrir o aplicativo.
              Este serviço está disponível para profissionais e contratantes, sem acesso administrativo.
            </Typography>
          </Box>

          <Box component="section" aria-labelledby="deletion-steps">
            <Typography id="deletion-steps" variant="h3" component="h2" gutterBottom>Como funciona</Typography>
            <Box component="ol" sx={{ pl: 3, m: 0, '& li': { mb: 1 } }}>
              <li>Entre com o mesmo e-mail e senha do aplicativo, ou com a conta Google usada no cadastro.</li>
              <li>Confira a conta identificada e leia o que acontece com seus dados.</li>
              <li>Confirme a exclusão permanente. O processamento ocorre ao confirmar; aguarde a mensagem de conclusão nesta página.</li>
            </Box>
          </Box>

          <Box component="section" aria-labelledby="deleted-data">
            <Typography id="deleted-data" variant="h3" component="h2" gutterBottom>O que é excluído ou anonimizado</Typography>
            <Typography color="text.secondary">
              Dados pessoais do cadastro (nome, e-mail, CPF, telefone, data de nascimento e foto),
              endereços e localização do perfil, documentos de identidade, portfólio, preferências,
              dispositivos e notificações. O conteúdo das mensagens enviadas é removido; solicitações
              e convites são cancelados e têm seus dados pessoais removidos. A conta de acesso do
              ConectaPro é excluída e o perfil deixa de ficar disponível.
            </Typography>
          </Box>

          <Box component="section" aria-labelledby="retained-data">
            <Typography id="retained-data" variant="h3" component="h2" gutterBottom>Registros que podem ser mantidos</Typography>
            <Typography color="text.secondary">
              Registros operacionais, de transações, denúncias e segurança podem ser preservados para
              obrigações legais, prevenção a fraudes e resolução de disputas, com a remoção ou
              anonimização dos dados do cadastro. A retenção segue o prazo legal aplicável ou o tempo
              necessário para essas finalidades, conforme a Política de Privacidade do ConectaPro.
              Para consultar os registros e prazos aplicáveis ao seu caso, utilize o contato abaixo.
            </Typography>
          </Box>

          <Alert severity="warning">
            A exclusão é permanente e não pode ser desfeita. Não é apenas sair da conta ou
            desinstalar o app. Se você entra com Google, somente a conta no ConectaPro é excluída:
            sua conta Google e os demais serviços Google não são apagados.
          </Alert>
          <Divider />

          {error && <Alert severity="error">{error}</Alert>}
          {notice && <Alert severity="info">{notice}</Alert>}

          {deleted ? (
            <Alert severity="success">
              Sua conta ConectaPro foi excluída. Você não precisa abrir o aplicativo nem realizar
              outra etapa. As exceções de retenção estão descritas acima.
            </Alert>
          ) : account ? (
            <Stack spacing={2} component="section" aria-label="Confirmar conta para exclusão">
              <Typography variant="h3" component="h2">Confira a conta que será excluída</Typography>
              <Typography sx={{ overflowWrap: 'anywhere' }}>
                {account.profile.fullName}<br />{account.profile.email}
              </Typography>
              <FormControlLabel
                control={<Checkbox checked={acknowledged} disabled={busy} onChange={(event) => setAcknowledged(event.target.checked)} />}
                label="Entendo que minha conta e os dados indicados acima serão excluídos permanentemente, observadas as exceções de retenção."
              />
              <Button variant="contained" color="error" startIcon={<DeleteOutlineRounded />} disabled={busy || !acknowledged} onClick={() => setConfirmOpen(true)}>
                Excluir minha conta e dados
              </Button>
              <Button disabled={busy} onClick={handleSwitchAccount}>Sair e usar outra conta</Button>
            </Stack>
          ) : (
            <Stack spacing={2}>
              <Typography variant="h3" component="h2">Identifique sua conta</Typography>
              <Typography color="text.secondary">
                Por segurança, confirme seu login mesmo que já tenha uma sessão aberta.
                Nenhuma conta nova será cadastrada nesta página.
              </Typography>
              {!isFirebaseConfigured && <Alert severity="error">Login indisponível. Solicite a exclusão pelo suporte abaixo.</Alert>}
              <form onSubmit={handleEmailSignIn}>
                <Stack spacing={2}>
                  <TextField label="E-mail da conta" type="email" autoComplete="username" required value={email} onChange={(event) => setEmail(event.target.value)} disabled={busy || !isFirebaseConfigured} />
                  <TextField label="Senha" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} disabled={busy || !isFirebaseConfigured} />
                  <Button type="submit" variant="contained" disabled={busy || !isFirebaseConfigured}>{busy ? 'Aguarde…' : 'Entrar para continuar'}</Button>
                  <Button type="button" onClick={handlePasswordReset} disabled={busy || !isFirebaseConfigured}>Esqueci minha senha</Button>
                </Stack>
              </form>
              <Divider>ou</Divider>
              <Button variant="outlined" startIcon={<Google />} disabled={busy || !isFirebaseConfigured} onClick={handleGoogleSignIn}>Continuar com Google</Button>
            </Stack>
          )}

          <Divider />
          <Box component="section" aria-labelledby="deletion-support">
            <Typography id="deletion-support" variant="h3" component="h2" gutterBottom>Não consegue acessar a conta?</Typography>
            <Typography color="text.secondary">
              Você também pode solicitar a exclusão ou esclarecer dúvidas sobre os dados retidos pelo e-mail{' '}
              <Link href="mailto:alejandrogomes23@hotmail.com?subject=Exclus%C3%A3o%20de%20conta%20e%20dados%20-%20ConectaPro" sx={{ overflowWrap: 'anywhere' }}>
                alejandrogomes23@hotmail.com
              </Link>.
              {' '}Informe o e-mail cadastrado e que deseja excluir sua conta ConectaPro.
              Poderemos pedir uma verificação de identidade para proteger seus dados; nunca envie sua senha.
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }} aria-label="Documentos legais">
            <Link href="/termos-de-uso">Termos de Uso</Link>
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
          </Stack>
          <Typography variant="body2" color="text.secondary">ConectaPro · Alejandro Digital Solutions</Typography>
        </Stack>
      </Paper>
      <Dialog
        open={confirmOpen}
        onClose={() => { if (!busy) setConfirmOpen(false); }}
        aria-labelledby="confirm-deletion-title"
        aria-describedby="confirm-deletion-description"
      >
        <DialogTitle id="confirm-deletion-title">Excluir definitivamente?</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-deletion-description" sx={{ overflowWrap: 'anywhere' }}>
            A conta {account?.profile.email} será excluída do ConectaPro. Você perderá acesso ao perfil e
            aos dados descritos nesta página. Esta ação não pode ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button disabled={busy} onClick={() => setConfirmOpen(false)} autoFocus>Cancelar</Button>
          <Button color="error" variant="contained" disabled={busy} onClick={handleDelete}>
            {busy ? 'Excluindo…' : 'Sim, excluir permanentemente'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
