import type { Metadata } from 'next';
import { AccountDeletion } from './AccountDeletion';

export const metadata: Metadata = {
  title: 'Excluir conta e dados | ConectaPro',
  description:
    'Exclua sua conta e os dados associados ao ConectaPro pela web, sem precisar instalar o aplicativo.',
};

export default function DeleteAccountPage() {
  return <AccountDeletion />;
}
