import type { LegalDocument } from './types';

export const termsOfUse: LegalDocument = {
  id: 'terms',
  title: 'Termos de Uso',
  version: '1.1',
  updatedAt: '2026-11-17',
  intro:
    'Estes Termos de Uso regulam o acesso e a utilização do aplicativo ConectaPro. Ao criar uma conta ou utilizar o aplicativo, você declara ter lido, compreendido e aceitado estes Termos.',
  sections: [
    {
      id: 'definicoes',
      title: '1. Definições',
      paragraphs: [
        '“ConectaPro” é a plataforma digital que conecta contratantes a profissionais autônomos prestadores de serviços.',
        '“Contratante” é a pessoa que busca e solicita serviços por meio do aplicativo.',
        '“Profissional” é a pessoa que cadastra perfil, oferece serviços e pode receber solicitações por meio do aplicativo.',
        '“Solicitação” é o pedido criado pelo contratante para encontrar profissionais compatíveis com uma necessidade de serviço.'
      ]
    },
    {
      id: 'aceite',
      title: '2. Aceite e elegibilidade',
      paragraphs: [
        'Para utilizar o ConectaPro, é necessário ter capacidade legal para contratar, fornecer informações verdadeiras e cumprir estas regras.',
        'O aceite destes Termos ocorre no momento do cadastro, do login ou da utilização dos recursos do aplicativo.'
      ]
    },
    {
      id: 'papel-plataforma',
      title: '3. Natureza do serviço',
      paragraphs: [
        'O ConectaPro atua como intermediador tecnológico entre contratantes e profissionais. A plataforma facilita a busca, o contato, a negociação e o acompanhamento de solicitações.',
        'Os profissionais são responsáveis pela veracidade das informações do próprio perfil, pela qualidade, segurança e execução dos serviços prestados.',
        'A existência de um perfil, selo, avaliação ou recomendação não constitui garantia, indicação ou responsabilidade do ConectaPro pela idoneidade, habilidade ou conduta do profissional.'
      ]
    },
    {
      id: 'cadastro',
      title: '4. Cadastro e informações',
      paragraphs: [
        'O usuário deve fornecer informações verdadeiras, completas e atualizadas.',
        'É responsabilidade do usuário manter a segurança de suas credenciais de acesso e não compartilhá-las com terceiros.',
        'O ConectaPro poderá solicitar verificações adicionais para prevenir fraudes, proteger usuários e cumprir obrigações legais.'
      ]
    },
    {
      id: 'uso-aceitavel',
      title: '5. Uso aceitável',
      paragraphs: [
        'É proibido utilizar o aplicativo para fins ilegais, fraudulentos, discriminatórios, abusivos, enganosos ou que violem direitos de terceiros.',
        'É proibido publicar informações falsas, conteúdo ofensivo, spam, dados pessoais de terceiros sem autorização ou conteúdo que exponha dados sensíveis.',
        'O ConectaPro poderá restringir, suspender ou encerrar contas que violem estes Termos, mediante análise e, quando aplicável, comunicação ao usuário.'
      ]
    },
    {
      id: 'solicitacoes',
      title: '6. Solicitações e contratação',
      paragraphs: [
        'A publicação de uma solicitação não garante que profissionais estarão disponíveis, interessados ou aptos a atender a demanda.',
        'Valores, prazos, condições, forma de execução e eventuais acordos entre contratante e profissional devem ser combinados diretamente entre as partes.',
        'O ConectaPro poderá disponibilizar recursos de comunicação, agendamento, pagamento ou avaliação em etapas futuras. As regras específicas desses recursos serão informadas quando forem ativados.'
      ]
    },
    {
      id: 'propriedade',
      title: '7. Propriedade intelectual',
      paragraphs: [
        'Marcas, nomes, layouts, códigos, textos, imagens, funcionalidades e demais elementos do ConectaPro pertencem à Alejandro Digital Solutions ou aos respectivos titulares.',
        'É proibido copiar, modificar, distribuir, revender ou utilizar o aplicativo e seus conteúdos sem autorização.'
      ]
    },
    {
      id: 'limitacao',
      title: '8. Limitação de responsabilidade',
      paragraphs: [
        'O ConectaPro envidará esforços comercialmente razoáveis para manter a disponibilidade e a segurança da plataforma, mas não garante funcionamento ininterrupto ou livre de falhas.',
        'O ConectaPro não responde por danos decorrentes de condutas de terceiros, informações falsas fornecidas por usuários, negociações fora da plataforma ou execução de serviços prestados por profissionais.',
        'Na medida permitida pela lei aplicável, a responsabilidade do ConectaPro será limitada ao valor efetivamente pago pelo usuário à plataforma nos últimos 12 meses, quando houver.'
      ]
    },
    {
      id: 'encerramento',
      title: '9. Suspensão e encerramento',
      paragraphs: [
        'O usuário pode encerrar sua conta a qualquer momento, respeitadas as obrigações eventualmente pendentes.',
        'O ConectaPro pode suspender ou encerrar o acesso em casos de violação destes Termos, risco a outros usuários, fraude, tentativa de burlar regras de segurança ou determinação legal.'
      ]
    },
    {
      id: 'alteracoes',
      title: '10. Alterações',
      paragraphs: [
        'Estes Termos podem ser atualizados. Alterações relevantes serão comunicadas por meios adequados dentro do aplicativo.',
        'O uso continuado após a publicação de uma nova versão implica ciência e aceite das alterações.'
      ]
    },
    {
      id: 'legislacao',
      title: '11. Legislação e foro',
      paragraphs: [
        'Estes Termos são regidos pelas leis brasileiras.',
        'Fica eleito o foro do domicílio do consumidor para resolver disputas, sem prejuízo de outras regras aplicáveis.'
      ]
    }
  ]
};
