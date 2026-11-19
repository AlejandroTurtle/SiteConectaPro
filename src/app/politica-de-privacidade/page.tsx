import type { Metadata } from 'next';
import { LegalDocumentPage } from '@/components/LegalDocumentPage';
import { privacyPolicy } from '@/data/legal/privacyPolicy';

export const metadata: Metadata = {
  title: 'Política de Privacidade | ConectaPro',
  description: 'Saiba como o ConectaPro trata e protege seus dados pessoais.',
};

export default function PrivacyPolicyPage() {
  return <LegalDocumentPage document={privacyPolicy} />;
}
