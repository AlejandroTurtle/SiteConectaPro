import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeModeProvider } from '@/providers/ThemeModeProvider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://conectapro.celemora.com.br'),
  title: 'ConectaPro | Conectando clientes e profissionais',
  description:
    'Encontre profissionais da sua região ou receba oportunidades compatíveis com os serviços que você oferece.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <AppRouterCacheProvider>
          <ThemeModeProvider>{children}</ThemeModeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
