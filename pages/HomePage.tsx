import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, ArrowUpRightIcon, CheckIcon } from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import CountUp from '../components/CountUp';
import Frame from '../components/mockups/Frame';
import PainelDashboard from '../components/mockups/PainelDashboard';
import StudioEditor from '../components/mockups/StudioEditor';
import { ChatScreen } from '../components/mockups/PainelScreens';
import { SitePreview } from '../components/mockups/StudioEditor';
import { ROUTES, SEGMENTS, WHATSAPP_MESSAGES, whatsappUrl } from '../constants';

const SHOWCASE = [
    { id: 'painel', label: 'Vendas no WhatsApp', url: 'painel.domutech.digital' },
    { id: 'studio', label: 'Criação de sites', url: 'studio.domutech.digital' },
] as const;

const PRINCIPLES = [
    {
        title: 'Oficial por padrão',
        text: 'Trabalhamos com as plataformas oficiais, como a API do WhatsApp da Meta. Nada de atalhos que colocam o seu negócio em risco.',
    },
    {
        title: 'Um módulo para cada problema',
        text: 'Cada solução tem o seu próprio endereço e resolve uma parte da operação. Você contrata só o que precisa.',
    },
    {
        title: 'Resultado mensurável',
        text: 'Entregas, leituras, respostas e agendamentos. Se não dá para medir, não entra no produto.',
    },
    {
        title: 'Gente de verdade no suporte',
        text: 'A IA agiliza o atendimento dos seus clientes. O seu atendimento com a Domu é feito por pessoas.',
    },
] as const;

const NUMBERS = [
    { to: 100, suffix: '%', label: 'dos envios pela API oficial do WhatsApp' },
    { to: 24, suffix: '/7', label: 'atendimento com IA respondendo seus clientes' },
    { to: 8, suffix: '+', label: 'segmentos atendidos com modelos prontos' },
    { to: 3, suffix: '', label: 'jeitos de ter o seu site: editor, sob medida ou loja' },
] as const;

const HomePage: React.FC = () => {
    const [tab, setTab] = useState<(typeof SHOWCASE)[number]['id']>('painel');
    const active = SHOWCASE.find((s) => s.id === tab)!;

    return (
        <>
            <section className="hero">
                <div className="container">
                    <Reveal>
                        <p className="label">Domu Tech — ecossistema digital</p>
                        <h1 className="display">
                            Tecnologia que conecta.
                            <span className="muted"> Soluções que geram resultado.</span>
                        </h1>
                    </Reveal>
                    <Reveal className="hero__foot" delay={0.08}>
                        <p className="lead">
                            Vendas e atendimento no WhatsApp oficial, com IA e métricas, e criação de
                            sites profissionais. Ferramentas para pequenas e médias empresas
                            venderem mais.
                        </p>
                        <div className="actions">
                            <Link to={ROUTES.painel} className="btn btn--primary btn--lg">
                                Conhecer o Domu Painel <ArrowRightIcon />
                            </Link>
                            <a
                                href={whatsappUrl(WHATSAPP_MESSAGES.geral)}
                                className="btn btn--line btn--lg"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Falar com especialista
                            </a>
                        </div>
                    </Reveal>

                    <Reveal className="showcase" delay={0.14}>
                        <div className="showcase__tabs" role="tablist" aria-label="Produtos">
                            {SHOWCASE.map((s) => (
                                <button
                                    key={s.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={tab === s.id}
                                    className={tab === s.id ? 'is-on' : ''}
                                    onClick={() => setTab(s.id)}
                                >
                                    {s.label}
                                </button>
                            ))}
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active.id}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                            >
                                <Frame url={active.url}>
                                    {active.id === 'painel' ? <PainelDashboard /> : <StudioEditor />}
                                </Frame>
                            </motion.div>
                        </AnimatePresence>
                    </Reveal>
                </div>
            </section>

            <section className="strip" aria-label="Segmentos atendidos">
                <div className="strip__track">
                    {[...SEGMENTS, ...SEGMENTS].map((s, i) => (
                        <span key={i} aria-hidden={i >= SEGMENTS.length}>
                            {s}
                        </span>
                    ))}
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <Reveal className="head">
                        <p className="label">01 — Produtos</p>
                        <h2 className="title">
                            Duas soluções. <span className="muted">Um só ecossistema.</span>
                        </h2>
                    </Reveal>

                    <div className="product">
                        <Reveal className="product__copy">
                            <p className="label label--accent">Vendas no WhatsApp · Domu Painel</p>
                            <h3 className="title title--sm">
                                Muito mais que disparo: uma central de vendas no seu WhatsApp.
                            </h3>
                            <p className="lead">
                                Campanhas pela API oficial da Meta, atendente com IA que responde e
                                agenda 24 horas por dia, follow-up automático, métricas de cada envio e
                                uma inteligência que mostra o que melhorar.
                            </p>
                            <ul className="checks">
                                <li><CheckIcon /> Disparos oficiais, sem risco de bloqueio</li>
                                <li><CheckIcon /> Atendente IA que responde e agenda</li>
                                <li><CheckIcon /> Métricas de cada campanha, da entrega à venda</li>
                                <li><CheckIcon /> Dicas da IA para vender mais</li>
                            </ul>
                            <div className="actions">
                                <Link to={ROUTES.painel} className="btn btn--primary">
                                    Ver o Domu Painel <ArrowRightIcon />
                                </Link>
                                <a
                                    href={whatsappUrl(WHATSAPP_MESSAGES.painel)}
                                    className="btn btn--ghost"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Pedir demonstração <ArrowUpRightIcon />
                                </a>
                            </div>
                        </Reveal>
                        <Reveal className="product__visual" delay={0.08}>
                            <div className="panel-surface">
                                <ChatScreen />
                            </div>
                        </Reveal>
                    </div>

                    <div className="product product--reverse">
                        <Reveal className="product__copy">
                            <p className="label label--accent">Criação de sites · Domu Studio</p>
                            <h3 className="title title--sm">
                                O site da sua empresa, no ar sem precisar de programador.
                            </h3>
                            <p className="lead">
                                Layouts profissionais, editor visual e projetos sob medida para sites,
                                landing pages e lojas virtuais. Rápido, seguro e pronto para o Google.
                            </p>
                            <ul className="checks">
                                <li><CheckIcon /> Editor visual, sem código</li>
                                <li><CheckIcon /> Domínio próprio com SSL</li>
                                <li><CheckIcon /> Loja virtual com checkout</li>
                            </ul>
                            <div className="actions">
                                <Link to={ROUTES.studio} className="btn btn--primary">
                                    Ver o Domu Studio <ArrowRightIcon />
                                </Link>
                                <a
                                    href={whatsappUrl(WHATSAPP_MESSAGES.studio)}
                                    className="btn btn--ghost"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Orçar meu site <ArrowUpRightIcon />
                                </a>
                            </div>
                        </Reveal>
                        <Reveal className="product__visual" delay={0.08}>
                            <div className="panel-surface panel-surface--site">
                                <SitePreview selected={false} />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="section section--alt">
                <div className="container">
                    <Reveal className="head head--split">
                        <div>
                            <p className="label">02 — Como trabalhamos</p>
                            <h2 className="title">
                                Tecnologia com propósito.
                                <span className="muted"> Resultado que faz diferença.</span>
                            </h2>
                        </div>
                        <p className="lead">
                            A Domu Tech nasceu para colocar ferramentas de empresa grande nas mãos de
                            quem toca o negócio no dia a dia.
                        </p>
                    </Reveal>
                    <div className="grid-4">
                        {PRINCIPLES.map((p, i) => (
                            <Reveal key={p.title} className="cell" delay={i * 0.05}>
                                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                                <h3>{p.title}</h3>
                                <p>{p.text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="numbers">
                        {NUMBERS.map((n, i) => (
                            <Reveal key={n.label} className="numbers__item" delay={i * 0.05}>
                                <strong>
                                    <CountUp to={n.to} suffix={n.suffix} />
                                </strong>
                                <span>{n.label}</span>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBand
                title="Pronto para começar?"
                muted="A gente indica o módulo certo."
                text="Conte como funciona o seu negócio e montamos o melhor caminho com você."
                primary={{ label: 'Falar com a Domu', href: whatsappUrl(WHATSAPP_MESSAGES.geral) }}
                secondary={{ label: 'Conhecer o Domu Studio', href: ROUTES.studio }}
            />
        </>
    );
};

export default HomePage;
