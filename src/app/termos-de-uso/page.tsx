import type { Metadata } from 'next';
import { LegalDocumentPage } from '@/components/LegalDocumentPage';
import { termsOfUse } from '@/data/legal/termsOfUse';

export const metadata: Metadata = {
  title: 'Termos de Uso | ConectaPro',
  description: 'Leia os Termos de Uso da plataforma ConectaPro.',
};

export default function TermsOfUsePage() {
  return <LegalDocumentPage document={termsOfUse} />;
}
