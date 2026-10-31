import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    AddressBookIcon,
    ArrowRightIcon,
    ArrowsClockwiseIcon,
    CalendarCheckIcon,
    ChartLineUpIcon,
    ChatsCircleIcon,
    CheckIcon,
    ClockIcon,
    FileTextIcon,
    PaperPlaneTiltIcon,
    RobotIcon,
    SparkleIcon,
    StorefrontIcon,
    UsersThreeIcon,
} from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import FAQ from '../components/FAQ';
import Frame from '../components/mockups/Frame';
import PainelDashboard from '../components/mockups/PainelDashboard';
import {
    CampaignScreen,
    ChatScreen,
    ConnectScreen,
    InsightsScreen,
    ResultsScreen,
} from '../components/mockups/PainelScreens';
import { FAQ_PAINEL, LINKS, PAINEL_PLANS, WHATSAPP_MESSAGES, whatsappUrl } from '../constants';

const FLOW = [
    {
        title: 'Conecte o seu número',
        text: 'Cadastro oficial da Meta direto no painel. O número continua funcionando no celular.',
        screen: ConnectScreen,
    },
    {
        title: 'Monte a campanha',
        text: 'Escolha o modelo aprovado, o público e o horário. Imagem, botões e variáveis inclusos.',
        screen: CampaignScreen,
    },
    {
        title: 'A IA continua a conversa',
        text: 'Quem responde é atendido na hora, inclusive de madrugada, com agendamento automático.',
        screen: ChatScreen,
    },
    {
        title: 'Meça o resultado',
        text: 'Entregas, leituras, respostas, agendamentos e receita de cada campanha, em tempo real.',
        screen: ResultsScreen,
    },
    {
        title: 'Melhore com a IA',
        text: 'A inteligência analisa seus números e sugere o que mudar na próxima campanha.',
        screen: InsightsScreen,
    },
] as const;

const INSIGHT_POINTS = [
    'Melhor dia e horário para disparar para o seu público',
    'Contatos esfriando que merecem um follow-up',
    'Mensagens, botões e ofertas que mais convertem',
    'Alertas antes da qualidade do número cair',
] as const;

const FEATURES = [
    { icon: SparkleIcon, title: 'Insights com IA', text: 'Análise das suas campanhas com dicas práticas do que melhorar.' },
    { icon: StorefrontIcon, title: 'Catálogo para a IA', text: 'Cadastre produtos, imóveis ou serviços e a IA consulta para responder.' },
    { icon: UsersThreeIcon, title: 'Equipe no mesmo número', text: 'Vários atendentes no painel, cada um com o seu acesso.' },
    { icon: ChatsCircleIcon, title: 'Histórico de conversas', text: 'Todas as conversas e o histórico de cada cliente em um só lugar.' },
    { icon: PaperPlaneTiltIcon, title: 'Campanhas em massa', text: 'Assistente passo a passo com mídia, botões e variáveis, e progresso do envio em tempo real.' },
    { icon: FileTextIcon, title: 'Modelos de mensagem', text: 'Crie templates e envie para aprovação da Meta sem sair do painel.' },
    { icon: AddressBookIcon, title: 'Contatos e segmentação', text: 'Importe planilhas e separe por interesse, região ou faixa de preço.' },
    { icon: ClockIcon, title: 'Agendamento', text: 'Programe a campanha para o melhor horário e o painel dispara sozinho.' },
    { icon: ArrowsClockwiseIcon, title: 'Follow-up automático', text: 'Uma nova mensagem para quem não respondeu, no momento certo.' },
    { icon: RobotIcon, title: 'Atendente IA', text: 'Responde, apresenta serviços e agenda clientes 24 horas por dia.' },
    { icon: CalendarCheckIcon, title: 'Agenda e lembretes', text: 'Serviços, horários, capacidade e lembretes que reduzem faltas.' },
    { icon: ChartLineUpIcon, title: 'Métricas de ROI', text: 'Alcance, respostas, leads e agendamentos gerados por campanha.' },
] as const;

const PROTECTION = [
    ['API oficial da Meta', 'Envio pela Cloud API do WhatsApp, só com número verificado e modelos aprovados.'],
    ['Monitor de qualidade', 'Qualidade amarela gera aviso. Vermelha pausa as campanhas antes de qualquer bloqueio.'],
    ['Limite diário respeitado', 'O painel soma campanhas e follow-ups e nunca passa do limite de 24h da sua conta.'],
    ['Envio em lotes', 'Mensagens enviadas em lotes, sem duplicidade e com contas isoladas entre si.'],
    ['Opt-out automático', 'Quem responde "sair", "parar" ou "cancelar" deixa de receber na hora.'],
    ['Coexistência', 'O mesmo número no app do celular e no painel, sem trocar de chip.'],
] as const;

const SEGMENT_FIT = [
    ['Imobiliário', 'Catálogo de imóveis consultado pela IA, leads e pedidos de visita.'],
    ['Saúde e beleza', 'Agenda, serviços, horários e lembretes automáticos.'],
    ['Alimentação', 'Promoções do dia e cardápio direto no WhatsApp do cliente.'],
    ['Automotivo', 'Agendamento de lavagem e estética com lembrete.'],
    ['E-commerce e varejo', 'Campanhas de oferta, lançamentos e reativação de clientes.'],
    ['Serviços e jurídico', 'Atendimento inicial, qualificação e agendamento de reuniões.'],
] as const;

const PainelPage: React.FC = () => {
    const [step, setStep] = useState(0);
    const Screen = FLOW[step].screen;

    return (
        <>
            <section className="hero hero--page">
                <div className="container">
                    <Reveal>
                        <p className="label">Domu Painel · Vendas e atendimento no WhatsApp</p>
                        <h1 className="display">
                            Muito mais que disparo.
                            <span className="muted"> Uma central de vendas no WhatsApp.</span>
                        </h1>
                    </Reveal>
                    <Reveal className="hero__foot" delay={0.08}>
                        <p className="lead">
                            Campanhas pela API oficial da Meta, atendente com IA, follow-up, agenda,
                            métricas e uma inteligência que analisa seus resultados e mostra o que
                            melhorar. Tudo no mesmo número, sem risco de bloqueio.
                        </p>
                        <div className="actions">
                            <a href={LINKS.painel} className="btn btn--primary btn--lg" target="_blank" rel="noreferrer">
                                Começar agora <ArrowRightIcon />
                            </a>
                            <a
                                href={whatsappUrl(WHATSAPP_MESSAGES.painel)}
                                className="btn btn--line btn--lg"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Pedir demonstração
                            </a>
                        </div>
                    </Reveal>
                    <Reveal className="showcase" delay={0.14}>
                        <Frame url="painel.domutech.digital">
                            <PainelDashboard />
                        </Frame>
                    </Reveal>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <Reveal className="head">
                        <p className="label">01 — Como funciona</p>
                        <h2 className="title">
                            Do número conectado <span className="muted">à próxima venda.</span>
                        </h2>
                    </Reveal>

                    <div className="flow">
                        <ol className="flow__steps">
                            {FLOW.map((f, i) => (
                                <li key={f.title}>
                                    <button
                                        type="button"
                                        className={i === step ? 'is-on' : ''}
                                        onClick={() => setStep(i)}
                                        aria-pressed={i === step}
                                    >
                                        <span className="mono">
                                            {String(i + 1).padStart(2, '0')} / {String(FLOW.length).padStart(2, '0')}
                                        </span>
                                        <strong>{f.title}</strong>
                                        <span className="flow__text">{f.text}</span>
                                    </button>
                                </li>
                            ))}
                        </ol>
                        <div className="flow__stage panel-surface">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <Screen />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section--alt">
                <div className="container">
                    <Reveal className="head head--split">
                        <div>
                            <p className="label">02 — Recursos</p>
                            <h2 className="title">
                                Tudo o que o seu WhatsApp precisa
                                <span className="muted"> para vender.</span>
                            </h2>
                        </div>
                        <p className="lead">
                            Divulgação, atendimento, agenda, métricas e inteligência no mesmo lugar,
                            com a sua equipe operando o mesmo número.
                        </p>
                    </Reveal>
                    <div className="grid-4">
                        {FEATURES.map(({ icon: Icon, title, text }, i) => (
                            <Reveal key={title} className="cell" delay={(i % 4) * 0.05}>
                                <Icon className="cell__icon" />
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" id="inteligencia">
                <div className="container">
                    <div className="product product--flush">
                        <Reveal className="product__copy">
                            <p className="label">03 — Inteligência</p>
                            <h2 className="title">
                                Uma IA que olha seus números
                                <span className="muted"> e diz o que melhorar.</span>
                            </h2>
                            <p className="lead">
                                Não é só ver gráfico. O Domu Painel cruza os dados das suas campanhas e
                                conversas e transforma em sugestões práticas, que você aplica com um
                                clique.
                            </p>
                            <ul className="checks">
                                {INSIGHT_POINTS.map((point) => (
                                    <li key={point}>
                                        <CheckIcon /> {point}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                        <Reveal className="product__visual" delay={0.08}>
                            <div className="panel-surface">
                                <InsightsScreen />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="section section--inverse">
                <div className="container">
                    <Reveal className="head head--split">
                        <div>
                            <p className="label">04 — Proteção do número</p>
                            <h2 className="title">
                                Feito para o seu WhatsApp
                                <span className="muted"> não cair.</span>
                            </h2>
                        </div>
                        <p className="lead">
                            Ferramenta não oficial é o caminho mais rápido para perder o número. No
                            Domu Painel, cada envio passa por travas de segurança.
                        </p>
                    </Reveal>
                    <div className="grid-3">
                        {PROTECTION.map(([title, text], i) => (
                            <Reveal key={title} className="cell" delay={(i % 3) * 0.05}>
                                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <Reveal className="head">
                        <p className="label">05 — Para o seu ramo</p>
                        <h2 className="title">
                            Um painel que se adapta
                            <span className="muted"> ao seu negócio.</span>
                        </h2>
                    </Reveal>
                    <div className="rows">
                        {SEGMENT_FIT.map(([name, text]) => (
                            <Reveal key={name} className="rows__item">
                                <strong>{name}</strong>
                                <p>{text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--alt" id="planos">
                <div className="container">
                    <Reveal className="head head--split">
                        <div>
                            <p className="label">06 — Planos</p>
                            <h2 className="title">
                                Escolha o plano
                                <span className="muted"> do seu momento.</span>
                            </h2>
                        </div>
                        <p className="lead">
                            Assinatura mensal, sem fidelidade. No PIX você ganha 5% de desconto.
                        </p>
                    </Reveal>
                    <div className="plans">
                        {PAINEL_PLANS.map((plan, i) => (
                            <Reveal
                                key={plan.name}
                                as="article"
                                className={`plan${plan.highlight ? ' plan--highlight' : ''}`}
                                delay={i * 0.06}
                            >
                                <div className="plan__head">
                                    <h3>{plan.name}</h3>
                                    {plan.highlight && <span className="tag tag--accent">Mais escolhido</span>}
                                </div>
                                <p className="plan__desc">{plan.description}</p>
                                <p className="plan__price">
                                    <small>R$</small>
                                    {plan.price}
                                    <span>/mês</span>
                                </p>
                                <a
                                    href={LINKS.painel}
                                    className={`btn ${plan.highlight ? 'btn--primary' : 'btn--line'} btn--block`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Assinar o {plan.name}
                                </a>
                                <ul className="plan__list">
                                    {plan.features.map((feature) => (
                                        <li key={feature}>
                                            <CheckIcon /> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        ))}
                    </div>
                    <p className="note">Os valores podem variar de acordo com o segmento do seu negócio.</p>
                </div>
            </section>

            <FAQ items={FAQ_PAINEL} index="07" />

            <CtaBand
                title="Seu WhatsApp vendendo"
                muted="com estratégia e sem risco."
                text="Crie a sua conta, conecte o número em poucos minutos e deixe a IA mostrar o caminho."
                primary={{ label: 'Começar no Domu Painel', href: LINKS.painel }}
                secondary={{ label: 'Pedir demonstração', href: whatsappUrl(WHATSAPP_MESSAGES.painel) }}
            />
        </>
    );
};

export default PainelPage;
