import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import BoltRounded from '@mui/icons-material/BoltRounded';
import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
import CheckCircleRounded from '@mui/icons-material/CheckCircleRounded';
import HandshakeRounded from '@mui/icons-material/HandshakeRounded';
import LocationOnRounded from '@mui/icons-material/LocationOnRounded';
import SearchRounded from '@mui/icons-material/SearchRounded';
import ShieldRounded from '@mui/icons-material/ShieldRounded';
import StarRounded from '@mui/icons-material/StarRounded';
import VerifiedUserRounded from '@mui/icons-material/VerifiedUserRounded';
import { ScrollEffects } from '@/components/ScrollEffects';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'ConectaPro | Encontre quem precisa do seu serviço',
  description:
    'Encontre profissionais da sua região ou receba oportunidades compatíveis com os serviços que você oferece.',
};

const categories = [
  'Diaristas e faxineiras',
  'Passadeiras',
  'Jardineiros',
  'Eletricistas',
  'Encanadores',
  'Pedreiros',
  'Pintores',
  'Montadores',
  'Técnicos',
  'Passeadores de cães',
  'Manutenção',
  'E outros serviços locais',
];

const customerSteps = [
  {
    number: '01',
    title: 'Conte o que você precisa',
    description: 'Escolha o serviço e informe local, data, horário e os detalhes importantes.',
  },
  {
    number: '02',
    title: 'Encontre pessoas compatíveis',
    description: 'Veja profissionais da sua região que atendem ao serviço e à sua disponibilidade.',
  },
  {
    number: '03',
    title: 'Converse e combine',
    description: 'Compare perfis e negocie preço, prazo e execução diretamente com o profissional.',
  },
];

const professionalSteps = [
  {
    number: '01',
    title: 'Monte seu perfil',
    description: 'Cadastre seus serviços, experiência, portfólio, regiões e disponibilidade.',
  },
  {
    number: '02',
    title: 'Receba oportunidades',
    description: 'Pedidos compatíveis com o seu perfil aparecem para você avaliar com calma.',
  },
  {
    number: '03',
    title: 'Escolha se quer conectar',
    description: 'Veja as informações da oportunidade e desbloqueie o contato se fizer sentido.',
  },
];

const matchingSignals = [
  'Categoria e especialidade do serviço',
  'Região de atendimento e distância',
  'Data, horário e disponibilidade',
  'Avaliações e taxa de resposta',
  'Qualidade e completude do perfil',
  'Atividade recente do profissional',
];

const professionalBenefits = [
  'Criar conta e perfil profissional',
  'Cadastrar serviços e especialidades',
  'Adicionar fotos e portfólio',
  'Definir regiões de atendimento',
  'Aparecer nas buscas',
  'Receber e visualizar oportunidades',
];

const questions = [
  {
    question: 'O ConectaPro cobra comissão sobre o serviço?',
    answer:
      'Não. A plataforma aproxima cliente e profissional. Preço, prazo e execução são combinados diretamente entre as partes.',
  },
  {
    question: 'O profissional paga para visualizar uma oportunidade?',
    answer:
      'Não. Visualizar as informações da oportunidade é gratuito. Os créditos só são consumidos quando o profissional confirma o desbloqueio do contato.',
  },
  {
    question: 'E se o cliente cancelar depois que eu desbloquear?',
    answer:
      'Se a solicitação já tiver sido encerrada antes do desbloqueio ou houver um erro da plataforma, o crédito é devolvido. Um cancelamento depois de um contato válido faz parte do risco comercial.',
  },
  {
    question: 'Preciso pagar para me cadastrar como profissional?',
    answer:
      'Não. Criar o perfil, cadastrar serviços, aparecer nas buscas e visualizar oportunidades é gratuito. Você compra créditos apenas quando quiser desbloquear um contato.',
  },
  {
    question: 'O ConectaPro garante que vou conseguir um cliente?',
    answer:
      'Não. A plataforma busca entregar oportunidades compatíveis, ativas e válidas. A decisão de contratar é sempre do cliente.',
  },
  {
    question: 'Como funciona a seleção de profissionais?',
    answer:
      'O sistema considera categoria, região, distância, disponibilidade e status. Também leva em conta avaliações, resposta, qualidade do perfil e atividade recente, com distribuição equilibrada entre profissionais compatíveis.',
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`${styles.brand} ${light ? styles.brandLight : ''}`}>
      <span className={styles.brandMark} aria-hidden="true">c</span>
      <span>Conecta<span className={styles.brandEmphasis}>Pro</span></span>
    </span>
  );
}

function ArrowLink({ href, children, secondary = false }: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
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
          <Link href="/" aria-label="ConectaPro, início" className={styles.brandLink}>
            <Brand />
          </Link>
          <nav className={styles.nav} aria-label="Navegação principal">
            <a href="#como-funciona">Como funciona</a>
            <a href="#para-clientes">Para clientes</a>
            <a href="#para-profissionais">Para profissionais</a>
            <a href="#seguranca">Segurança</a>
          </nav>
          <div className={styles.headerActions}>
            <Link href="https://painel.conectapro.celemora.com.br/login" className={styles.adminLink}>Acesso admin</Link>
            <a className={styles.headerCta} href="#como-funciona">Conheça a plataforma</a>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy} data-reveal="left">
              <div className={styles.eyebrow}><span className={styles.eyebrowDot} /> CONECTANDO QUEM PRECISA A QUEM FAZ</div>
              <h1>Encontre quem precisa do <span>seu serviço.</span></h1>
              <p className={styles.heroLead}>
                O ConectaPro aproxima clientes e profissionais da mesma região. Você explica o que precisa ou mostra o que sabe fazer — e a conexão começa por aí.
              </p>
              <div className={styles.heroActions}>
                <ArrowLink href="#para-clientes">Quero contratar um profissional</ArrowLink>
                <ArrowLink href="#para-profissionais" secondary>Sou profissional</ArrowLink>
              </div>
              <div className={styles.heroNotes}>
                <span><CheckCircleRounded aria-hidden="true" /> Negociação direta</span>
                <span><CheckCircleRounded aria-hidden="true" /> Sem comissão sobre o serviço</span>
              </div>
            </div>

            <div className={styles.heroVisual} data-reveal="right" aria-label="Exemplo de conexão entre cliente e profissional">
              <div className={styles.heroOrb} data-parallax="0.1" />
              <div className={styles.heroPhotoWrap} data-parallax="0.045">
                <Image
                  className={styles.heroPhoto}
                  src="/conecta-professional.png"
                  alt="Profissional sorrindo, pronta para atender novos clientes"
                  width={340}
                  height={340}
                  priority
                />
                <div className={styles.photoCaption}>
                  <span className={styles.captionIcon}><VerifiedUserRounded aria-hidden="true" /></span>
                  <span><strong>Seu trabalho merece ser encontrado</strong><small>Um perfil para mostrar o que você faz</small></span>
                </div>
              </div>
              <div className={`${styles.floatingCard} ${styles.opportunityCard}`}>
                <div className={styles.floatingIcon}><BoltRounded aria-hidden="true" /></div>
                <div><small>OPORTUNIDADE COMPATÍVEL</small><strong>Serviço na sua região</strong><span><LocationOnRounded aria-hidden="true" /> Distância aproximada</span></div>
              </div>
              <div className={`${styles.floatingCard} ${styles.requestCard}`}>
                <span className={styles.requestIcon}><SearchRounded aria-hidden="true" /></span>
                <span><small>CLIENTE PROCURANDO</small><strong>Um profissional como você</strong></span>
                <span className={styles.requestArrow}><ArrowForwardRounded aria-hidden="true" /></span>
              </div>
              <div className={styles.visualFootnote}><span /> Feito para serviços locais, de verdade.</div>
            </div>
          </div>
          <div className={styles.heroBottomLine} />
        </section>

        <section className={styles.trustStrip} aria-label="Como o ConectaPro funciona">
          <div className={`${styles.container} ${styles.trustInner}`}>
            <span>Uma plataforma para aproximar</span>
            <div data-reveal="up" data-reveal-delay="1"><SearchRounded aria-hidden="true" /><strong>Busca local</strong><small>por categoria e região</small></div>
            <div data-reveal="up" data-reveal-delay="2"><HandshakeRounded aria-hidden="true" /><strong>Conexão direta</strong><small>sem comissão</small></div>
            <div data-reveal="up" data-reveal-delay="3"><ShieldRounded aria-hidden="true" /><strong>Mais clareza</strong><small>antes de desbloquear</small></div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.howSection}`} id="como-funciona">
          <div className={styles.container}>
            <div className={styles.sectionHeading} data-reveal="up">
              <span className={styles.kicker}>SIMPLES PARA OS DOIS LADOS</span>
              <h2>Uma conexão melhor começa com <em>informação clara.</em></h2>
              <p>Clientes encontram opções. Profissionais escolhem oportunidades que combinam com seu trabalho.</p>
            </div>
            <div className={styles.stepsGrid}>
              <article className={`${styles.stepPanel} ${styles.customerPanel}`} data-reveal="up" data-reveal-delay="1">
                <div className={styles.panelHeading}><span className={styles.panelIcon}><SearchRounded aria-hidden="true" /></span><div><small>PARA QUEM PRECISA</small><h3>Encontre o profissional certo</h3></div></div>
                <div className={styles.stepList}>
                  {customerSteps.map((step) => (
                    <div className={styles.step} key={step.number}>
                      <span className={styles.stepNumber}>{step.number}</span>
                      <div><h4>{step.title}</h4><p>{step.description}</p></div>
                    </div>
                  ))}
                </div>
                <a className={styles.textLink} href="#para-clientes">Conheça a experiência do cliente <ArrowForwardRounded aria-hidden="true" /></a>
              </article>
              <article className={`${styles.stepPanel} ${styles.professionalPanel}`} data-reveal="up" data-reveal-delay="2">
                <div className={styles.panelHeading}><span className={`${styles.panelIcon} ${styles.panelIconGold}`}><BoltRounded aria-hidden="true" /></span><div><small>PARA QUEM OFERECE</small><h3>Receba pedidos compatíveis</h3></div></div>
                <div className={styles.stepList}>
                  {professionalSteps.map((step) => (
                    <div className={styles.step} key={step.number}>
                      <span className={styles.stepNumber}>{step.number}</span>
                      <div><h4>{step.title}</h4><p>{step.description}</p></div>
                    </div>
                  ))}
                </div>
                <a className={styles.textLink} href="#para-profissionais">Veja como funciona para profissionais <ArrowForwardRounded aria-hidden="true" /></a>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.categoryBand}>
          <div className={`${styles.container} ${styles.categoryLayout}`}>
            <div className={styles.categoryIntro}>
              <span className={styles.kicker}>SERVIÇOS DA SUA REGIÃO</span>
              <h2>Tem muita coisa boa que pode ser <em>encontrada.</em></h2>
              <p>De pequenos reparos aos cuidados do dia a dia, descubra profissionais locais para diferentes necessidades.</p>
            </div>
            <div className={styles.categoryGrid}>
              {categories.map((category, index) => (
                <span className={styles.categoryPill} key={category} data-reveal="up" data-reveal-delay={index % 5}>
                  <span className={styles.categoryDot}>{index < 4 ? '✳' : '·'}</span>{category}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.discoverySection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeading} data-reveal="up">
              <span className={styles.kicker}>DO SEU JEITO</span>
              <h2>Você procura. Ou deixa o ConectaPro <em>encontrar.</em></h2>
            </div>
            <div className={styles.discoveryGrid}>
              <article className={styles.discoveryCard} data-reveal="up" data-reveal-delay="1">
                <div className={styles.discoveryIcon}><SearchRounded aria-hidden="true" /></div>
                <div className={styles.discoveryBody}>
                  <span className={styles.cardLabel}>BUSCA DIRETA</span>
                  <h3>Compare profissionais</h3>
                  <p>Pesquise por categoria, cidade, bairro, distância, disponibilidade, avaliações e faixa de preço. Veja perfis e portfólios antes de conversar.</p>
                  <div className={styles.miniFilters}><span>Categoria</span><span>Região</span><span>Disponibilidade</span></div>
                </div>
                <a className={styles.cardLink} href="#para-clientes" aria-label="Saiba mais sobre buscar profissionais"><ArrowForwardRounded aria-hidden="true" /></a>
              </article>
              <article className={`${styles.discoveryCard} ${styles.discoveryCardAccent}`} data-reveal="up" data-reveal-delay="2">
                <div className={`${styles.discoveryIcon} ${styles.discoveryIconAccent}`}><BoltRounded aria-hidden="true" /></div>
                <div className={styles.discoveryBody}>
                  <span className={styles.cardLabel}>ENCONTRE PARA MIM</span>
                  <h3>Explique em uma frase</h3>
                  <p>“Preciso de uma diarista sexta-feira de manhã no Centro.” A necessidade vira um pedido organizado para encontrar quem está disponível.</p>
                  <div className={styles.sampleRequest}><span>“Preciso de ajuda com...”</span><ArrowForwardRounded aria-hidden="true" /></div>
                </div>
                <a className={styles.cardLink} href="#para-clientes" aria-label="Saiba mais sobre encontrar um profissional"><ArrowForwardRounded aria-hidden="true" /></a>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.matchingSection}>
          <div className={`${styles.container} ${styles.matchingGrid}`}>
            <div className={styles.matchingCopy} data-reveal="left">
              <span className={styles.kicker}>COMPATIBILIDADE EM PRIMEIRO LUGAR</span>
              <h2>Oportunidades que fazem sentido para <em>cada profissional.</em></h2>
              <p>O sistema cruza os detalhes do pedido com o perfil de quem atende. A ordem considera compatibilidade e distribuição justa entre profissionais qualificados.</p>
              <div className={styles.matchingNote}><span><CheckCircleRounded aria-hidden="true" /></span><p>O resultado não é “quem paga mais aparece primeiro”. É quem tem mais aderência àquela oportunidade.</p></div>
            </div>
            <div className={styles.matchingList}>
              {matchingSignals.map((signal, index) => (
                <div className={styles.matchingItem} key={signal} data-reveal="up" data-reveal-delay={index % 4}><span>0{index + 1}</span><strong>{signal}</strong><CheckCircleRounded aria-hidden="true" /></div>
              ))}
              <div className={styles.distributionNote}><span className={styles.distributionIcon}><CalendarMonthRounded aria-hidden="true" /></span><p><strong>Distribuição equilibrada</strong><br />Quantidade de pedidos recebidos, resposta, atividade e disponibilidade também entram na conta.</p></div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.audienceSection}`} id="para-clientes">
          <div className={`${styles.container} ${styles.audienceGrid}`}>
            <div className={styles.audienceCopy} data-reveal="left">
              <span className={styles.kicker}>PARA CLIENTES</span>
              <h2>Resolva o que precisa com <em>menos procura.</em></h2>
              <p>Encontre profissionais que atendem sua necessidade e sua região. Compare experiência, portfólio e avaliações antes de conversar.</p>
              <ul className={styles.checkList}>
                <li><CheckCircleRounded aria-hidden="true" /> Pesquise ou descreva o serviço</li>
                <li><CheckCircleRounded aria-hidden="true" /> Veja perfis compatíveis perto de você</li>
                <li><CheckCircleRounded aria-hidden="true" /> Combine tudo diretamente</li>
                <li><CheckCircleRounded aria-hidden="true" /> Sem comissão sobre o serviço</li>
              </ul>
              <ArrowLink href="#como-funciona">Veja como contratar</ArrowLink>
            </div>
            <div className={styles.customerVisual} data-reveal="right">
              <div className={styles.visualGridPattern} />
              <div className={styles.customerQuoteCard}>
              <div className={styles.quoteTop}><span className={styles.quoteAvatar}>M</span><span><strong>Uma busca, várias opções</strong><small>Escolha com mais contexto</small></span><span className={styles.quoteTag}>PERFIL</span></div>
                <div className={styles.quoteDivider} />
                <div className={styles.quoteService}><span className={styles.serviceIcon}><SearchRounded aria-hidden="true" /></span><span><small>SERVIÇO</small><strong>Profissional para sua necessidade</strong></span><ArrowForwardRounded aria-hidden="true" /></div>
                <div className={styles.quoteService}><span className={`${styles.serviceIcon} ${styles.serviceIconGold}`}><LocationOnRounded aria-hidden="true" /></span><span><small>LOCAL</small><strong>Sua região, com endereço protegido</strong></span><ShieldRounded aria-hidden="true" /></div>
              </div>
              <div className={styles.customerVisualCaption}><span>01</span><strong>Mais clareza para escolher.</strong></div>
            </div>
          </div>
        </section>

        <section className={styles.proSection} id="para-profissionais">
          <div className={`${styles.container} ${styles.proLayout}`}>
            <div className={styles.proIntro} data-reveal="left">
              <span className={styles.kicker}>PARA PROFISSIONAIS</span>
              <h2>Seu trabalho merece chegar a mais pessoas.</h2>
              <p>Cadastre seu perfil uma vez e receba pedidos compatíveis com seus serviços, região e disponibilidade. Sem caçar cliente em grupo de mensagem.</p>
              <div className={styles.proTrust}><ShieldRounded aria-hidden="true" /><span><strong>Você escolhe se quer desbloquear.</strong><small>Veja as informações e o custo antes de confirmar.</small></span></div>
            </div>
            <div className={styles.proPlanCard} data-reveal="right">
              <div className={styles.planHeader}><div><span className={styles.planEyebrow}>COMECE SEM CUSTO</span><h3>Plano gratuito</h3></div><span className={styles.planBadge}>R$ 0</span></div>
              <p className={styles.planDescription}>Crie seu perfil e comece a aparecer para clientes da sua região.</p>
              <ul className={styles.planBenefits}>
                {professionalBenefits.map((benefit) => <li key={benefit}><CheckCircleRounded aria-hidden="true" />{benefit}</li>)}
              </ul>
              <div className={styles.creditBlock}>
                <div className={styles.creditTitle}><span><BoltRounded aria-hidden="true" /></span><div><strong>Créditos para desbloquear contatos</strong><small>Você só compra quando quiser falar com o cliente.</small></div></div>
                <div className={styles.priceGrid}>
                  <div><strong>10</strong><span>créditos</span><b>R$ 19,90</b></div>
                  <div className={styles.priceFeatured}><strong>30</strong><span>créditos</span><b>R$ 49,90</b></div>
                  <div><strong>60</strong><span>créditos</span><b>R$ 89,90</b></div>
                </div>
                <p className={styles.priceFootnote}>Valores iniciais, sujeitos a ajuste conforme validação de mercado.</p>
              </div>
              <div className={styles.creditRules}>
                <p><CheckCircleRounded aria-hidden="true" /> Ver oportunidades é gratuito.</p>
                <p><CheckCircleRounded aria-hidden="true" /> O custo varia de 1 a 4 créditos conforme o pedido.</p>
                <p><CheckCircleRounded aria-hidden="true" /> O valor aparece antes da confirmação.</p>
              </div>
              <a href="#protecao" className={styles.planLink}>Entenda a proteção dos créditos <ArrowForwardRounded aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.protectionSection}`} id="protecao">
          <div className={styles.container}>
            <div className={styles.sectionHeading} data-reveal="up">
              <span className={styles.kicker}>REGRAS CLARAS</span>
              <h2>Seu crédito tem uma política de proteção <em>transparente.</em></h2>
              <p>Crédito volta quando o problema está na oportunidade ou na plataforma. Contato válido não garante contratação.</p>
            </div>
            <div className={styles.refundGrid}>
              <article className={`${styles.refundCard} ${styles.refundYes}`} data-reveal="up" data-reveal-delay="1">
                <div className={styles.refundHeading}><span><CheckCircleRounded aria-hidden="true" /></span><div><small>CRÉDITO DEVOLVIDO</small><h3>Quando há problema na conexão</h3></div></div>
                <ul>
                  <li>Telefone inválido ou contato inexistente</li>
                  <li>Solicitação duplicada, encerrada ou cancelada antes do desbloqueio</li>
                  <li>Erro de categorização ou liberação incorreta pela plataforma</li>
                  <li>Fraude comprovada ou dados essenciais inválidos</li>
                </ul>
              </article>
              <article className={`${styles.refundCard} ${styles.refundNo}`} data-reveal="up" data-reveal-delay="2">
                <div className={styles.refundHeading}><span><HandshakeRounded aria-hidden="true" /></span><div><small>CRÉDITO NÃO DEVOLVIDO</small><h3>Quando o contato é válido</h3></div></div>
                <ul>
                  <li>O cliente escolheu outro profissional ou desistiu</li>
                  <li>As partes não chegaram a um acordo de preço</li>
                  <li>O profissional não tinha disponibilidade</li>
                  <li>A conversa aconteceu, mas o serviço não foi fechado</li>
                </ul>
              </article>
            </div>
            <p className={styles.refundFootnote}>A plataforma entrega uma oportunidade de conexão — não uma garantia de contratação.</p>
          </div>
        </section>

        <section className={styles.securitySection} id="seguranca">
          <div className={`${styles.container} ${styles.securityLayout}`}>
            <div className={styles.securityCopy} data-reveal="left">
              <span className={styles.kicker}>CONFIANÇA EM CADA CONEXÃO</span>
              <h2>Mais segurança para conversar e escolher.</h2>
              <p>Ferramentas e critérios para proteger a privacidade do cliente e manter as oportunidades mais confiáveis.</p>
              <a className={styles.textLink} href="#reputacao">Como funciona a reputação <ArrowForwardRounded aria-hidden="true" /></a>
            </div>
            <div className={styles.securityFeatures}>
              <div data-reveal="up" data-reveal-delay="1"><span><VerifiedUserRounded aria-hidden="true" /></span><strong>Dados validados</strong><p>Telefone, e-mail e status da solicitação conferidos antes do envio.</p></div>
              <div data-reveal="up" data-reveal-delay="2"><span><ShieldRounded aria-hidden="true" /></span><strong>Privacidade preservada</strong><p>O endereço exato do cliente não fica exposto publicamente.</p></div>
              <div data-reveal="up" data-reveal-delay="1"><span><HandshakeRounded aria-hidden="true" /></span><strong>Menos contatos em excesso</strong><p>Um limite de profissionais por oportunidade reduz abordagens repetidas.</p></div>
              <div data-reveal="up" data-reveal-delay="2"><span><CheckCircleRounded aria-hidden="true" /></span><strong>Proteção contra abuso</strong><p>Medidas contra pedidos duplicados, contas falsas e atividade automatizada.</p></div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.reputationSection}`} id="reputacao">
          <div className={`${styles.container} ${styles.reputationLayout}`}>
            <div data-reveal="left">
              <span className={styles.kicker}>REPUTAÇÃO CONSTRUÍDA NA PRÁTICA</span>
              <h2>Boas conexões também deixam <em>história.</em></h2>
              <p>Depois de uma conexão, cliente e profissional podem avaliar comunicação, pontualidade, profissionalismo e qualidade do serviço.</p>
            </div>
            <div className={styles.rankingCard} data-reveal="right">
              <div className={styles.rankingHeading}><span className={styles.rankingStar}><StarRounded aria-hidden="true" /></span><div><strong>O que ajuda a compor o ranking</strong><small>Compatibilidade para cada solicitação</small></div></div>
              <div className={styles.rankingTags}><span>Compatibilidade</span><span>Distância</span><span>Disponibilidade</span><span>Avaliações</span><span>Taxa de resposta</span><span>Qualidade do perfil</span><span>Atividade recente</span></div>
              <p><strong>Destaques pagos, quando disponíveis, serão identificados como publicidade.</strong> Eles não garantem contratação ou posição orgânica no ranking.</p>
            </div>
          </div>
        </section>

        <section className={styles.transparencySection}>
          <div className={`${styles.container} ${styles.transparencyLayout}`}>
            <div className={styles.transparencyIntro} data-reveal="left"><span className={styles.kicker}>SEM SURPRESAS</span><h2>O que o ConectaPro faz — e o que fica entre vocês.</h2></div>
            <div className={styles.transparencyCard} data-reveal="right">
              <div><span className={styles.transparencyCheck}><CheckCircleRounded aria-hidden="true" /></span><strong>Conecta cliente e profissional</strong></div>
              <div><span className={styles.transparencyCheck}><CheckCircleRounded aria-hidden="true" /></span><strong>Ajuda a encontrar oportunidades compatíveis</strong></div>
              <div><span className={styles.transparencyCross}>×</span><strong>Não define o preço nem recebe pelo serviço</strong></div>
              <div><span className={styles.transparencyCross}>×</span><strong>Não cobra comissão nem garante contratação</strong></div>
              <div><span className={styles.transparencyCross}>×</span><strong>Não participa da execução nem cria vínculo de emprego</strong></div>
              <p>O ConectaPro é a infraestrutura de conexão. A negociação é sempre direta entre cliente e profissional.</p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.faqSection}`} id="faq">
          <div className={`${styles.container} ${styles.faqLayout}`}>
            <div className={styles.faqIntro} data-reveal="left">
              <span className={styles.kicker}>PERGUNTAS FREQUENTES</span>
              <h2>Ficou com alguma dúvida?</h2>
              <p>As regras são simples e estão aqui para todo mundo saber o que esperar.</p>
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

        <section className={styles.finalCta}>
          <div className={`${styles.container} ${styles.finalCtaInner}`} data-reveal="up">
            <span className={styles.finalSpark} aria-hidden="true">✳</span>
            <span className={styles.finalKicker}>PRONTO PARA CONECTAR?</span>
            <h2>O próximo bom serviço pode começar <em>aqui.</em></h2>
            <p>Escolha o seu caminho e descubra uma forma mais simples de encontrar ou oferecer serviços locais.</p>
            <div className={styles.finalActions}>
              <ArrowLink href="#para-clientes">Quero contratar um profissional</ArrowLink>
              <ArrowLink href="#para-profissionais" secondary>Quero receber oportunidades</ArrowLink>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <div><Link href="/" className={styles.brandLink}><Brand light /></Link><p>Encontre quem precisa do seu serviço.</p></div>
          <div className={styles.footerLinks}><a href="#como-funciona">Como funciona</a><a href="#para-clientes">Clientes</a><a href="#para-profissionais">Profissionais</a><a href="#seguranca">Segurança</a><a href="#faq">FAQ</a><Link href="/termos-de-uso">Termos de uso</Link><Link href="/politica-de-privacidade">Privacidade</Link><Link href="/excluir-conta">Excluir conta</Link></div>
          <div className={styles.footerAdmin}><Link href="https://painel.conectapro.celemora.com.br/login">Acesso administrativo <ArrowForwardRounded aria-hidden="true" /></Link><small>© {new Date().getFullYear()} ConectaPro</small></div>
        </div>
      </footer>
    </div>
  );
}
