import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ArrowUpRightIcon } from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import {
    LINKS,
    ROUTES,
    WHATSAPP_DISPLAY,
    WHATSAPP_MESSAGES,
    whatsappUrl,
} from '../constants';

const VALUES = [
    ['Simples de usar', 'Ferramenta boa é a que o dono do negócio usa sozinho, sem manual.'],
    ['Oficial e transparente', 'Plataformas oficiais, preço claro e nada escondido no contrato.'],
    ['Feito no Brasil', 'Pensado para a realidade de quem vende pelo WhatsApp todos os dias.'],
] as const;

const MODULES = [
    {
        name: 'Domu Painel',
        domain: 'painel.domutech.digital',
        status: 'Disponível',
        text: 'Disparos e atendimento com IA no WhatsApp oficial.',
        to: ROUTES.painel,
    },
    {
        name: 'Domu Studio',
        domain: 'studio.domutech.digital',
        status: 'Disponível',
        text: 'Criação de sites, landing pages e lojas virtuais.',
        to: ROUTES.studio,
    },
] as const;

const EmpresaPage: React.FC = () => (
    <>
        <section className="hero hero--page hero--text">
            <div className="container">
                <Reveal>
                    <p className="label">Empresa</p>
                    <h1 className="display">
                        Tecnologia de empresa grande
                        <span className="muted"> para quem toca o negócio no dia a dia.</span>
                    </h1>
                </Reveal>
                <Reveal className="hero__foot" delay={0.08}>
                    <p className="lead">
                        A Domu Tech é um ecossistema de soluções digitais. Cada módulo resolve uma
                        parte da operação, com o seu próprio endereço, e todos seguem o mesmo
                        princípio: tecnologia que conecta e gera resultado.
                    </p>
                </Reveal>
            </div>
        </section>

        <section className="section section--alt">
            <div className="container">
                <Reveal className="head">
                    <p className="label">01 — No que acreditamos</p>
                    <h2 className="title">Três coisas que não negociamos.</h2>
                </Reveal>
                <div className="grid-3">
                    {VALUES.map(([title, text], i) => (
                        <Reveal key={title} className="cell" delay={i * 0.05}>
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
                    <p className="label">02 — Ecossistema</p>
                    <h2 className="title">
                        Os módulos da Domu.
                        <span className="muted"> Por enquanto, dois.</span>
                    </h2>
                </Reveal>
                <div className="modules-list">
                    {MODULES.map((m) => (
                        <Reveal key={m.name}>
                            <Link to={m.to} className="modules-list__item">
                                <span className="mono">{m.domain}</span>
                                <strong>{m.name}</strong>
                                <p>{m.text}</p>
                                <span className={`tag${m.status === 'Disponível' ? ' tag--ok' : ''}`}>{m.status}</span>
                                <ArrowRightIcon className="modules-list__arrow" />
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        <section className="section section--alt" id="contato">
            <div className="container">
                <Reveal className="head">
                    <p className="label">03 — Contato</p>
                    <h2 className="title">Fale com a gente.</h2>
                </Reveal>
                <div className="grid-3">
                    <a className="cell cell--link" href={whatsappUrl(WHATSAPP_MESSAGES.geral)} target="_blank" rel="noreferrer">
                        <span className="mono">WhatsApp</span>
                        <h3>{WHATSAPP_DISPLAY}</h3>
                        <p>Resposta de uma pessoa, em horário comercial.</p>
                        <ArrowUpRightIcon className="cell__arrow" />
                    </a>
                    <a className="cell cell--link" href={`mailto:${LINKS.email}`}>
                        <span className="mono">E-mail</span>
                        <h3>{LINKS.email}</h3>
                        <p>Para propostas, parcerias e assuntos financeiros.</p>
                        <ArrowUpRightIcon className="cell__arrow" />
                    </a>
                    <a className="cell cell--link" href={LINKS.instagram} target="_blank" rel="noreferrer">
                        <span className="mono">Instagram</span>
                        <h3>@domu_tech</h3>
                        <p>Novidades, dicas e bastidores da Domu.</p>
                        <ArrowUpRightIcon className="cell__arrow" />
                    </a>
                </div>
            </div>
        </section>

        <CtaBand
            title="Vamos conversar"
            muted="sobre o seu negócio?"
            primary={{ label: 'Chamar no WhatsApp', href: whatsappUrl(WHATSAPP_MESSAGES.geral) }}
            secondary={{ label: 'Conhecer o Domu Painel', href: ROUTES.painel }}
        />
    </>
);

export default EmpresaPage;
