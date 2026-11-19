import Link from 'next/link';
import type { LegalDocument } from '@/data/legal/types';
import styles from './LegalDocumentPage.module.css';

interface LegalDocumentPageProps {
  document: LegalDocument;
}

export function LegalDocumentPage({ document }: LegalDocumentPageProps) {
  const updatedAt = new Date(`${document.updatedAt}T12:00:00`).toLocaleDateString('pt-BR');

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="ConectaPro, página inicial">
          <span className={styles.brandMark} aria-hidden="true">c</span>
          <span>Conecta<span className={styles.brandAccent}>Pro</span></span>
        </Link>
        <nav className={styles.navigation} aria-label="Documentos legais">
          <Link href="/termos-de-uso" aria-current={document.id === 'terms' ? 'page' : undefined}>Termos de uso</Link>
          <Link href="/politica-de-privacidade" aria-current={document.id === 'privacy' ? 'page' : undefined}>Privacidade</Link>
          <Link href="/excluir-conta">Excluir conta</Link>
        </nav>
      </header>

      <article className={styles.document}>
        <Link className={styles.backLink} href="/">← Voltar para ConectaPro</Link>
        <p className={styles.eyebrow}>CONECTAPRO · INFORMAÇÕES LEGAIS</p>
        <h1>{document.title}</h1>
        <p className={styles.version}>Versão {document.version} · Atualizado em {updatedAt}</p>
        <p className={styles.intro}>{document.intro}</p>

        <div className={styles.sections}>
          {document.sections.map((section) => (
            <section key={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.id}-p-${index}`}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>

        <p className={styles.contact}>
          Dúvidas? Fale com a equipe pelo{' '}
          <a href="mailto:alejandrogomes23@hotmail.com">alejandrogomes23@hotmail.com</a>.
        </p>
      </article>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} ConectaPro · Alejandro Digital Solutions</span>
        <Link href="/">Página inicial</Link>
      </footer>
    </main>
  );
}
