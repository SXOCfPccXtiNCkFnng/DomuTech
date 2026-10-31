import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import FAQ from '../components/FAQ';
import Frame from '../components/mockups/Frame';
import StudioEditor from '../components/mockups/StudioEditor';
import { FAQ_STUDIO, ROUTES, WHATSAPP_MESSAGES, whatsappUrl } from '../constants';

const PATHS = [
    {
        title: 'Monte você mesmo',
        text: 'Escolha um layout, troque textos, cores e imagens no editor visual e publique quando quiser.',
        tag: 'Editor visual',
    },
    {
        title: 'Sob medida',
        text: 'Nossa equipe cria o site do zero com a identidade da sua marca e foco em conversão.',
        tag: 'Projeto Domu',
    },
    {
        title: 'Loja virtual',
        text: 'Vitrine, carrinho e checkout prontos para vender, com gestão de produtos simples.',
        tag: 'E-commerce',
    },
] as const;

const LAYOUTS = [
    { name: 'Restaurante', variant: 'food', title: 'Massa fresca todos os dias' },
    { name: 'Clínica', variant: 'clinic', title: 'Cuidado que se vê' },
    { name: 'Loja', variant: 'shop', title: 'Nova coleção' },
    { name: 'Escritório', variant: 'office', title: 'Advocacia empresarial' },
] as const;

const PILLARS = [
    ['Design profissional', 'Layouts pensados por designers, não gerados em série.'],
    ['Rápido de verdade', 'Páginas leves, que carregam rápido no celular e ajudam no Google.'],
    ['100% responsivo', 'Perfeito no celular, no tablet e no computador.'],
    ['Domínio e SSL', 'Publique no domínio da sua empresa com segurança inclusa.'],
    ['SEO desde o início', 'Títulos, descrições e estrutura prontos para buscadores.'],
    ['Hospedagem cuidada', 'Atualizações e infraestrutura por nossa conta.'],
] as const;

const LayoutThumb: React.FC<{ variant: string; title: string }> = ({ variant, title }) => (
    <div className={`thumb thumb--${variant}`}>
        <div className="thumb__nav">
            <i />
            <span />
            <span />
            <span />
        </div>
        <div className="thumb__hero">
            <div>
                <b>{title}</b>
                <span />
                <span className="short" />
                <em />
            </div>
            <div className="thumb__media" />
        </div>
        <div className="thumb__grid">
            <span />
            <span />
            <span />
        </div>
    </div>
);

const StudioPage: React.FC = () => (
    <>
        <section className="hero hero--page">
            <div className="container">
                <Reveal>
                    <p className="label">
                        Domu Studio · studio.domutech.digital
                    </p>
                    <h1 className="display">
                        Seu site pode ser
                        <span className="muted"> o seu melhor vendedor.</span>
                    </h1>
                </Reveal>
                <Reveal className="hero__foot" delay={0.08}>
                    <p className="lead">
                        Um site trabalha 24 horas por dia enquanto você cuida do negócio. O Domu
                        Studio reúne layouts profissionais, editor visual e projetos sob medida para
                        colocar a sua marca no ar.
                    </p>
                    <div className="actions">
                        <a
                            href={whatsappUrl(WHATSAPP_MESSAGES.studio)}
                            className="btn btn--primary btn--lg"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Quero meu site <ArrowRightIcon />
                        </a>
                        <a href="#layouts" className="btn btn--line btn--lg">
                            Ver layouts
                        </a>
                    </div>
                </Reveal>
                <Reveal className="showcase" delay={0.14}>
                    <Frame url="studio.domutech.digital">
                        <StudioEditor />
                    </Frame>
                </Reveal>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <Reveal className="head">
                    <p className="label">01 — Três caminhos</p>
                    <h2 className="title">
                        Do jeito que fizer
                        <span className="muted"> mais sentido para você.</span>
                    </h2>
                </Reveal>
                <div className="grid-3 grid-3--tall">
                    {PATHS.map((p, i) => (
                        <Reveal key={p.title} className="cell" delay={i * 0.06}>
                            <span className="tag">{p.tag}</span>
                            <h3>{p.title}</h3>
                            <p>{p.text}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        <section className="section section--alt" id="layouts">
            <div className="container">
                <Reveal className="head head--split">
                    <div>
                        <p className="label">02 — Layouts</p>
                        <h2 className="title">
                            Comece com um layout
                            <span className="muted"> feito para o seu ramo.</span>
                        </h2>
                    </div>
                    <p className="lead">
                        Cada layout já vem com as seções que o seu cliente procura. Você só ajusta
                        para a sua marca.
                    </p>
                </Reveal>
                <div className="layouts">
                    {LAYOUTS.map((l, i) => (
                        <Reveal key={l.name} className="layouts__item" delay={i * 0.05}>
                            <LayoutThumb variant={l.variant} title={l.title} />
                            <span className="layouts__name">
                                {l.name} <span className="mono">Layout {String(i + 1).padStart(2, '0')}</span>
                            </span>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <Reveal className="head">
                    <p className="label">03 — O que vem incluso</p>
                    <h2 className="title">
                        Profissional desde
                        <span className="muted"> a primeira página.</span>
                    </h2>
                </Reveal>
                <div className="rows">
                    {PILLARS.map(([name, text]) => (
                        <Reveal key={name} className="rows__item">
                            <strong>{name}</strong>
                            <p>{text}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        <section className="section section--inverse">
            <div className="container combo">
                <Reveal>
                    <p className="label">04 — Ecossistema Domu</p>
                    <h2 className="title">
                        Site e WhatsApp
                        <span className="muted"> trabalhando juntos.</span>
                    </h2>
                </Reveal>
                <Reveal className="combo__side" delay={0.08}>
                    <p className="lead">
                        Combine o Domu Studio com o Domu Painel: quem visita o site vira contato, e
                        quem vira contato recebe as suas campanhas no WhatsApp oficial.
                    </p>
                    <Link to={ROUTES.painel} className="btn btn--line-inverse">
                        Conhecer o Domu Painel <ArrowRightIcon />
                    </Link>
                </Reveal>
            </div>
        </section>

        <FAQ items={FAQ_STUDIO} index="05" />

        <CtaBand
            title="Vamos colocar"
            muted="a sua marca no ar."
            text="Conte sobre o seu negócio e a gente indica o melhor caminho: layout pronto, projeto sob medida ou loja virtual."
            primary={{ label: 'Quero meu site', href: whatsappUrl(WHATSAPP_MESSAGES.studio) }}        />
    </>
);

export default StudioPage;
