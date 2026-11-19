export interface LegalDocumentSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalDocument {
  id: 'terms' | 'privacy';
  title: string;
  version: string;
  updatedAt: string;
  intro: string;
  sections: LegalDocumentSection[];
}

export type FaqCategory =
  | 'Conta'
  | 'Solicitações'
  | 'Privacidade'
  | 'Pagamento'
  | 'Suporte';

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}
