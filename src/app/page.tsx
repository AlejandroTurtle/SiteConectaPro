import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import BoltRounded from '@mui/icons-material/BoltRounded';
import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
import CheckCircleRounded from '@mui/icons-material/CheckCircleRounded';
import ChatBubbleOutlineRounded from '@mui/icons-material/ChatBubbleOutlineRounded';
import HandshakeRounded from '@mui/icons-material/HandshakeRounded';
import LocationOnRounded from '@mui/icons-material/LocationOnRounded';
import SearchRounded from '@mui/icons-material/SearchRounded';
import ShieldRounded from '@mui/icons-material/ShieldRounded';
import StarRounded from '@mui/icons-material/StarRounded';
import VerifiedUserRounded from '@mui/icons-material/VerifiedUserRounded';
import WorkOutlineRounded from '@mui/icons-material/WorkOutlineRounded';
import { ScrollEffects } from '@/components/ScrollEffects';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'ConectaPro | Profissionais e serviços perto de você',
  description:
    'Encontre profissionais por serviço e região ou publique uma solicitação para receber contatos compatíveis. Conheça o ConectaPro.',
};

const customerSteps = [
  {
    number: '01',
    title: 'Busque ou conte o que precisa',
    description:
      'Pesquise por serviço e região ou descreva sua necessidade com local, data e horário.',
  },
  {
    number: '02',
    title: 'Conheça os perfis e interesses',
    description:
      'Veja serviços, experiência, área de atendimento, portfólio e avaliações disponíveis.',
  },
  {
    number: '03',
    title: 'Converse e combine diretamente',
    description:
      'Negocie valores, prazo e execução com o profissional antes de decidir.',
  },
];

const professionalSteps = [
  {
    number: '01',
    title: 'Apresente seu trabalho',
    description:
      'Cadastre serviços, especialidades, experiência, área de atendimento, agenda e portfólio.',
  },
  {
    number: '02',
    title: 'Apareça para quem procura',
    description:
      'Clientes podem encontrar seu perfil por serviço, especialidade e região.',
  },
  {
    number: '03',
    title: 'Avalie cada oportunidade',
    description:
      'Veja os detalhes e o custo em créditos antes de liberar o contato de uma solicitação.',
  },
];

const matchingCriteria = [
  'Serviço e especialidade solicitados',
  'Região e distância de atendimento',
  'Data, horário e disponibilidade',
  'Perfil, avaliações e atividade recente',
];

const serviceExamples = [
  'Construção e reparos',
  'Limpeza e organização',
  'Beleza e bem-estar',
  'Cuidados com pets',
  'Tecnologia',
  'Mudanças e fretes',
];

const questions = [
  {
    question: 'Como encontro um profissional?',
    answer:
      'No app, você pode buscar por serviço, especialidade e região, comparar perfis públicos ou criar uma solicitação com os detalhes do que precisa.',
  },
  {
    question: 'O que acontece depois que publico uma solicitação?',
    answer:
      'A solicitação é comparada com profissionais elegíveis por serviço, região e disponibilidade. Os compatíveis recebem a oportunidade e podem decidir se querem liberar o contato.',
  },
  {
    question: 'Preciso usar créditos para pesquisar profissionais?',
    answer:
      'A busca direta por perfis não consome créditos. Na jornada de oportunidades, o profissional vê o custo em créditos antes de confirmar a liberação do contato.',
  },
  {
    question: 'O ConectaPro cobra comissão pelo serviço?',
    answer:
      'Não. O preço, o prazo e a forma de pagamento do serviço são combinados diretamente entre cliente e profissional. O ConectaPro não processa o pagamento do serviço.',
  },
  {
    question: 'A verificação garante a qualidade do serviço?',
    answer:
      'Não. A análise de identidade é uma etapa de elegibilidade do perfil profissional. Ela não é garantia de qualidade, resultado ou contratação.',
  },
  {
    question: 'O ConectaPro garante que vou contratar ou conseguir clientes?',
    answer:
      'Não. A plataforma aproxima pessoas e organiza oportunidades, mas a disponibilidade, a negociação e a contratação dependem das partes.',
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`${styles.brand} ${light ? styles.brandLight : ''}`}>
      <Image
        src="/conectapro-logo.svg"
        alt=""
        width={38}
        height={38}
        className={styles.brandLogo}
        aria-hidden="true"
      />
      <span>Conecta<span className={styles.brandEmphasis}>Pro</span></span>
    </span>
  );
}

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}

function ArrowLink({ href, children, secondary = false }: ArrowLinkProps) {
  return (
    <a className={`${styles.button} ${secondary ? styles.buttonSecondary : ''}`} href={href}>
      {children}<ArrowForwardRounded aria-hidden="true" />
    </a>
  );
}

export default function HomePage() {
  return (
    <div className={styles.page}>
      <ScrollEffects />
      <header id="topo" className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" aria-label="ConectaPro, página inicial" className={styles.brandLink}>
            <Brand />
          </Link>
          <nav className={styles.nav} aria-label="Navegação principal">
            <a href="#como-funciona">Como funciona</a>
            <a href="#para-clientes">Para clientes</a>
            <a href="#para-profissionais">Para profissionais</a>
            <a href="#seguranca">Segurança</a>
          </nav>
          <div className={styles.headerActions}>
            <Link href="https://painel.conectapro.celemora.com.br/login" className={styles.adminLink}>
              Acesso administrativo
            </Link>
            <a className={styles.headerCta} href="#como-funciona">Conheça o app</a>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy} data-reveal="left">
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} /> SERVIÇOS LOCAIS, CONEXÕES DIRETAS
              </div>
              <h1>Um serviço para resolver. <span>Um profissional para encontrar.</span></h1>
              <p className={styles.heroLead}>
                Busque perfis por serviço e região ou conte o que precisa para receber o interesse de profissionais compatíveis. A conversa e a negociação acontecem entre vocês.
              </p>
              <div className={styles.heroActions}>
                <ArrowLink href="#para-clientes">Preciso de um serviço</ArrowLink>
                <ArrowLink href="#para-profissionais" secondary>Ofereço serviços</ArrowLink>
              </div>
              <div className={styles.heroNotes}>
                <span><CheckCircleRounded aria-hidden="true" /> Busca direta sem créditos</span>
                <span><CheckCircleRounded aria-hidden="true" /> Sem comissão sobre o serviço</span>
              </div>
            </div>

            <div className={styles.heroVisual} data-reveal="right" aria-label="Ilustração de uma profissional e uma oportunidade local">
              <div className={styles.heroOrb} data-parallax="0.08" />
              <div className={styles.heroPhotoWrap} data-parallax="0.035">
                <Image
                  className={styles.heroPhoto}
                  src="/conecta-professional.png"
                  alt="Profissional de serviços locais"
                  width={340}
                  height={340}
                  priority
                />
                <div className={styles.photoCaption}>
                  <span className={styles.captionIcon}><WorkOutlineRounded aria-hidden="true" /></span>
                  <span><strong>Um perfil que mostra seu trabalho</strong><small>Serviços, região e portfólio</small></span>
                </div>
              </div>
              <div className={`${styles.floatingCard} ${styles.opportunityCard}`}>
                <div className={styles.floatingIcon}><BoltRounded aria-hidden="true" /></div>
                <div>
                  <small>EXEMPLO DE OPORTUNIDADE</small>
                  <strong>Instalação elétrica</strong>
                  <span><LocationOnRounded aria-hidden="true" /> Região de atendimento</span>
                </div>
              </div>
              <div className={`${styles.floatingCard} ${styles.requestCard}`}>
                <span className={styles.requestIcon}><SearchRounded aria-hidden="true" /></span>
                <span><small>BUSCA DIRETA</small><strong>Compare perfis e serviços</strong></span>
                <span className={styles.requestArrow}><ArrowForwardRounded aria-hidden="true" /></span>
              </div>
              <div className={styles.visualFootnote}><span /> A contratação é combinada diretamente.</div>
            </div>
          </div>
          <div className={styles.heroBottomLine} />
        </section>

        <section className={styles.trustStrip} aria-label="Características do ConectaPro">
          <div className={`${styles.container} ${styles.trustInner}`}>
            <span><SearchRounded aria-hidden="true" /> Busca por serviço e região</span>
            <span><CalendarMonthRounded aria-hidden="true" /> Oportunidades com data e horário</span>
            <span><ChatBubbleOutlineRounded aria-hidden="true" /> Conversa entre as partes</span>
            <span><ShieldRounded aria-hidden="true" /> Dados pessoais fora da busca pública</span>
          </div>
        </section>

        <section className={`${styles.section} ${styles.flowSection}`} id="como-funciona">
          <div className={styles.container}>
            <div className={styles.sectionHeading} data-reveal="up">
              <span className={styles.kicker}>DO PRIMEIRO PASSO À CONVERSA</span>
              <h2>Uma plataforma. <em>Dois caminhos para se conectar.</em></h2>
              <p>Cliente e profissional usam o ConectaPro pelo app, cada um com ferramentas para encontrar uma combinação que faça sentido.</p>
            </div>
            <div className={styles.flowGrid}>
              <article className={`${styles.flowCard} ${styles.clientFlowCard}`} id="para-clientes" data-reveal="up">
                <div className={styles.flowCardHeader}>
                  <span className={styles.flowIcon}><SearchRounded aria-hidden="true" /></span>
                  <span className={styles.flowLabel}>PARA CLIENTES</span>
                </div>
                <h3>Encontre alguém para o que você precisa.</h3>
                <div className={styles.stepList}>
                  {customerSteps.map((step) => (
                    <div className={styles.step} key={step.number}>
                      <span>{step.number}</span>
                      <div><strong>{step.title}</strong><p>{step.description}</p></div>
                    </div>
                  ))}
                </div>
                <a href="#buscar-profissionais" className={styles.textLink}>Conheça as opções para clientes <ArrowForwardRounded aria-hidden="true" /></a>
              </article>

              <article className={`${styles.flowCard} ${styles.proFlowCard}`} id="para-profissionais" data-reveal="up" data-reveal-delay="1">
                <div className={styles.flowCardHeader}>
                  <span className={styles.flowIcon}><WorkOutlineRounded aria-hidden="true" /></span>
                  <span className={styles.flowLabel}>PARA PROFISSIONAIS</span>
                </div>
                <h3>Mostre seu trabalho a quem está procurando.</h3>
                <div className={styles.stepList}>
                  {professionalSteps.map((step) => (
                    <div className={styles.step} key={step.number}>
                      <span>{step.number}</span>
                      <div><strong>{step.title}</strong><p>{step.description}</p></div>
                    </div>
                  ))}
                </div>
                <a href="#perfil-profissional" className={styles.textLink}>Veja como funciona para profissionais <ArrowForwardRounded aria-hidden="true" /></a>
              </article>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.discoverySection}`} id="buscar-profissionais">
          <div className={`${styles.container} ${styles.discoveryGrid}`}>
            <div className={styles.discoveryCopy} data-reveal="left">
              <span className={styles.kicker}>PARA QUEM JÁ SABE O QUE PROCURA</span>
              <h2>Pesquise profissionais do seu jeito.</h2>
              <p>Filtre por serviço, especialidade, cidade, faixa de preço e disponibilidade. Abra os perfis para conhecer melhor a experiência de cada profissional.</p>
              <ul className={styles.checkList}>
                <li><CheckCircleRounded aria-hidden="true" /> Veja serviços e especialidades cadastrados</li>
                <li><CheckCircleRounded aria-hidden="true" /> Compare preço informado e área de atendimento</li>
                <li><CheckCircleRounded aria-hidden="true" /> Consulte portfólio e avaliações quando disponíveis</li>
                <li><CheckCircleRounded aria-hidden="true" /> Inicie uma conversa sem consumir créditos</li>
              </ul>
            </div>
            <div className={styles.searchMock} data-reveal="right" aria-label="Exemplo ilustrativo de filtros de busca">
              <div className={styles.mockTopbar}><span /><span /><span /><small>BUSCAR PROFISSIONAIS</small></div>
              <div className={styles.mockSearchField}><SearchRounded aria-hidden="true" /><span>O que você precisa?</span><b>Buscar</b></div>
              <div className={styles.mockFilters}><span>Serviço <b>Elétrica</b></span><span>Região <b>Sua cidade</b></span><span>Agenda <b>Ver opções</b></span></div>
              <div className={styles.mockResultLabel}>PERFIS QUE ATENDEM AOS FILTROS</div>
              <div className={styles.mockProfile}>
                <span className={styles.mockAvatar}><WorkOutlineRounded aria-hidden="true" /></span>
                <div className={styles.mockProfileCopy}><strong>Perfil profissional</strong><span>Serviços · experiência · região</span><small><StarRounded aria-hidden="true" /> Avaliações exibidas no perfil</small></div>
                <ArrowForwardRounded className={styles.mockArrow} aria-hidden="true" />
              </div>
              <div className={styles.mockPrivacy}><ShieldRounded aria-hidden="true" /><span>Endereço completo e telefone não aparecem na busca pública.</span></div>
              <p className={styles.mockCaption}>Exemplo ilustrativo da busca no aplicativo.</p>
            </div>
          </div>
        </section>

        <section className={styles.professionalSection} id="perfil-profissional">
          <div className={`${styles.container} ${styles.professionalGrid}`}>
            <div className={styles.professionalIntro} data-reveal="left">
              <span className={styles.kicker}>PARA QUEM PRESTA SERVIÇOS</span>
              <h2>Seu perfil reúne o que o cliente precisa conhecer.</h2>
              <p>Organize suas informações uma vez e deixe claro quais serviços você oferece, onde atende e quando tem disponibilidade.</p>
              <div className={styles.profileFacts}>
                <span><CheckCircleRounded aria-hidden="true" /> Serviços e especialidades</span>
                <span><CheckCircleRounded aria-hidden="true" /> Área e agenda de atendimento</span>
                <span><CheckCircleRounded aria-hidden="true" /> Experiência, preço e portfólio</span>
              </div>
              <div className={styles.verificationNote}>
                <VerifiedUserRounded aria-hidden="true" />
                <p><strong>Análise de identidade para perfis profissionais.</strong> A aprovação é necessária para aparecer na busca pública e não representa garantia de qualidade ou contratação.</p>
              </div>
            </div>
            <div className={styles.profileVisual} data-reveal="right">
              <div className={styles.profileVisualGlow} />
              <div className={styles.profileCard}>
                <div className={styles.profileCardTop}><span>PERFIL PROFISSIONAL</span><VerifiedUserRounded aria-label="Identidade analisada" /></div>
                <div className={styles.profileCardPerson}>
                  <Image src="/conecta-professional.png" alt="Exemplo visual de perfil profissional" width={78} height={78} />
                  <div><strong>Seu nome profissional</strong><span>Área de atendimento</span><small>Perfil demonstrativo</small></div>
                </div>
                <div className={styles.profileCardDivider} />
                <div className={styles.profileCardServices}><span>SEUS SERVIÇOS</span><div>{serviceExamples.slice(0, 3).map((service) => <b key={service}>{service}</b>)}</div></div>
                <div className={styles.profileCardBottom}><span><CalendarMonthRounded aria-hidden="true" /> Agenda informada</span><span><StarRounded aria-hidden="true" /> Avaliações disponíveis</span></div>
              </div>
              <div className={styles.portfolioNote}><span><WorkOutlineRounded aria-hidden="true" /></span><div><strong>Portfólio</strong><small>Imagens aprovadas no perfil público</small></div></div>
            </div>
          </div>
          <div className={`${styles.container} ${styles.serviceExamples}`} aria-label="Exemplos de áreas de serviço">
            <span>ALGUMAS ÁREAS DO CATÁLOGO</span>
            <div>{serviceExamples.map((service) => <b key={service}>{service}</b>)}<b>E outras categorias</b></div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.matchingSection}`} id="oportunidades">
          <div className={`${styles.container} ${styles.matchingGrid}`}>
            <div className={styles.matchingCopy} data-reveal="left">
              <span className={styles.kicker}>ENCONTRAR PARA MIM</span>
              <h2>Descreva o serviço. O app procura combinações compatíveis.</h2>
              <p>Ao publicar uma solicitação, o ConectaPro considera a categoria, a região e a disponibilidade para avisar profissionais que podem atender.</p>
              <div className={styles.matchingNote}><span><ShieldRounded aria-hidden="true" /></span><p><strong>Seus dados de contato ficam protegidos.</strong><br />O contato só é liberado quando o profissional confirma o desbloqueio.</p></div>
            </div>
            <div className={styles.matchingPanel} data-reveal="right">
              <div className={styles.matchingPanelHeader}><span><BoltRounded aria-hidden="true" /></span><div><small>COMBINAÇÕES DA SOLICITAÇÃO</small><strong>O que entra na análise</strong></div></div>
              <div className={styles.matchingList}>
                {matchingCriteria.map((criterion, index) => (
                  <div className={styles.matchingItem} key={criterion}><span>0{index + 1}</span><strong>{criterion}</strong><CheckCircleRounded aria-hidden="true" /></div>
                ))}
              </div>
              <div className={styles.creditNotice}><span><BoltRounded aria-hidden="true" /></span><p><strong>O profissional decide se quer liberar.</strong><br />O custo em créditos aparece antes da confirmação. A busca direta de perfis não usa créditos.</p></div>
            </div>
          </div>
        </section>

        <section className={styles.connectionSection} id="seguranca">
          <div className={`${styles.container} ${styles.connectionLayout}`}>
            <div className={styles.connectionIntro} data-reveal="left">
              <span className={styles.kicker}>UMA CONEXÃO COM REGRAS CLARAS</span>
              <h2>O ConectaPro aproxima. A decisão fica com vocês.</h2>
              <p>A plataforma ajuda a encontrar perfis e organizar solicitações. O serviço, o pagamento e os termos da contratação são tratados diretamente entre cliente e profissional.</p>
            </div>
            <div className={styles.connectionCards}>
              <article data-reveal="up"><span><LocationOnRounded aria-hidden="true" /></span><h3>Localização protegida</h3><p>A busca pública mostra a área de atendimento, sem expor o endereço completo do cliente.</p></article>
              <article data-reveal="up" data-reveal-delay="1"><span><ChatBubbleOutlineRounded aria-hidden="true" /></span><h3>Conversa entre as partes</h3><p>Use a conversa vinculada à busca ou à solicitação para combinar os próximos passos.</p></article>
              <article data-reveal="up" data-reveal-delay="2"><span><HandshakeRounded aria-hidden="true" /></span><h3>Negociação direta</h3><p>Preço, prazo, execução e pagamento do serviço são combinados fora da intermediação da plataforma.</p></article>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.reviewSection}`}>
          <div className={`${styles.container} ${styles.reviewGrid}`}>
            <div className={styles.reviewMark} data-reveal="left"><StarRounded aria-hidden="true" /><span>DEPOIS DO SERVIÇO</span></div>
            <div data-reveal="right"><span className={styles.kicker}>EXPERIÊNCIAS QUE AJUDAM OUTRAS PESSOAS</span><h2>Concluiu o serviço? O cliente pode avaliar o profissional.</h2><p>A avaliação fica vinculada à solicitação concluída e pode aparecer no perfil público do profissional.</p></div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.faqSection}`} id="faq">
          <div className={`${styles.container} ${styles.faqLayout}`}>
            <div className={styles.faqIntro} data-reveal="left">
              <span className={styles.kicker}>PERGUNTAS FREQUENTES</span>
              <h2>Antes de começar.</h2>
              <p>Entenda o papel do ConectaPro e o que acontece em cada etapa.</p>
              <a className={styles.textLink} href="#topo">Voltar ao início <ArrowForwardRounded aria-hidden="true" /></a>
            </div>
            <div className={styles.faqList}>
              {questions.map((item) => (
                <details className={styles.faqItem} key={item.question} data-reveal="up">
                  <summary>{item.question}<span aria-hidden="true" /></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.finalCta} id="contato">
          <div className={`${styles.container} ${styles.finalCtaInner}`} data-reveal="up">
            <span className={styles.finalSpark} aria-hidden="true">✳</span>
            <span className={styles.finalKicker}>CONECTAPRO</span>
            <h2>Seu próximo serviço pode começar com uma conversa.</h2>
            <p>Conheça os caminhos para quem procura um profissional e para quem quer apresentar o próprio trabalho.</p>
            <div className={styles.finalActions}>
              <ArrowLink href="#para-clientes">Sou cliente</ArrowLink>
              <ArrowLink href="#para-profissionais" secondary>Sou profissional</ArrowLink>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <div className={styles.footerBrand}><Link href="/" className={styles.brandLink}><Brand light /></Link><p>Conectando clientes e profissionais locais.</p><a href="mailto:alejandrogomes23@hotmail.com">Fale com a equipe</a></div>
          <nav className={styles.footerLinks} aria-label="Links do site"><a href="#como-funciona">Como funciona</a><a href="#para-clientes">Para clientes</a><a href="#para-profissionais">Para profissionais</a><a href="#faq">Dúvidas</a><Link href="/termos-de-uso">Termos de Uso</Link><Link href="/politica-de-privacidade">Privacidade</Link><Link href="/excluir-conta">Excluir conta</Link></nav>
          <div className={styles.footerAdmin}><Link href="https://painel.conectapro.celemora.com.br/login">Acesso administrativo <ArrowForwardRounded aria-hidden="true" /></Link><small>© {new Date().getFullYear()} ConectaPro · Alejandro Digital Solutions</small></div>
        </div>
      </footer>
    </div>
  );
}
