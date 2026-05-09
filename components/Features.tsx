import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';
import { ArrowUpRightIcon } from './icons';

/* ── Ícones SVG simples para cada feature ─────────────────────────────────── */
const IconResponsivo = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
);
const IconSEO = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
    </svg>
);
const IconTech = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconConversao = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconLayout = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" strokeLinecap="round" />
    </svg>
);

const FEATURES = [
    {
        Icon:  IconResponsivo,
        color: '#ffffff',
        bg:    'rgba(255,255,255,0.05)',
        title: 'Ecossistema Multiplataforma',
        desc:  'Sua marca presente e eficiente em todos os canais digitais. Garantimos que sua solução seja adaptável e entregue uma experiência de uso impecável, seja no mobile, tablet ou desktop, maximizando o alcance do seu negócio.',
    },
    {
        Icon:  IconSEO,
        color: '#ffffff',
        bg:    'rgba(255,255,255,0.05)',
        title: 'Visibilidade & Inteligência',
        desc:  'Não basta existir, é preciso ser encontrado. Aplicamos inteligência de dados e as melhores práticas de posicionamento orgânico para que sua empresa lidere as intenções de busca e atraia tráfego qualificado de forma constante.',
    },
    {
        Icon:  IconTech,
        color: '#ffffff',
        bg:    'rgba(255,255,255,0.05)',
        title: 'Tecnologia de Ponta',
        desc:  'Utilizamos stacks modernas e robustas (React, Node, WordPress Avançado) para criar ferramentas rápidas, seguras e escaláveis que acompanham o crescimento da sua empresa sem limitações técnicas.',
    },
    {
        Icon:  IconConversao,
        color: '#FFFFFF',
        bg:    'rgba(255,255,255,0.05)',
        title: 'Foco Total em Conversão',
        desc:  'Criamos jornadas de usuário focadas em resultados. Integramos ferramentas de automação, fluxos de vendas e análises de comportamento para transformar interações digitais em oportunidades reais de negócio.',
    },
    {
        Icon:  IconLayout,
        color: '#ffffff',
        bg:    'rgba(255,255,255,0.05)',
        title: 'Design Estratégico',
        desc:  'Design que comunica e vende. Desenvolvemos interfaces exclusivas que fortalecem o posicionamento da sua marca e criam uma conexão imediata de profissionalismo e confiança com seu público-alvo.',
    },
];

const Features: React.FC = () => {
    return (
        <section 
            id="features" 
            className="py-10 md:py-24 bg-[var(--domu-bg)] relative overflow-visible"
        >



            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[40%_60%] gap-16 lg:gap-20 items-start">

                    {/* ── Coluna esquerda — Sticky Restored ─────────────────── */}
                    <div className="lg:sticky lg:top-32 self-start flex flex-col items-center text-center">

                        {/* Mascote Branding - Pinned/Sticky */}
                        <div className="relative w-full max-w-[280px] md:max-w-sm mx-auto lg:mx-0 mb-10 md:mb-12">
                            <img
                                src="/logos/logobranca.png"
                                alt="Mascote Domu tech"
                                className="relative z-10 w-full h-auto opacity-100 animate-float"
                            />
                        </div>

                        {/* CTA below logo */}
                        <div className="px-2">
                            <h3 className="text-gradient font-black uppercase tracking-tight text-xl md:text-2xl leading-tight mb-8">
                                Pronto para decolar seu projeto digital?
                            </h3>
                            <a
                                href="/chatbot-placeholder"
                                className="btn-budget group w-full md:w-auto"
                            >
                                <ArrowUpRightIcon className="w-5 h-5 fill-current" />
                                Peça um Orçamento
                            </a>
                        </div>
                    </div>


                    {/* ── Coluna direita — Lista de funcionalidades ───────────── */}
                    <div className="pt-10 lg:pt-4">
                        <AnimateOnScroll>
                            <div className="text-center lg:text-left mb-12">
                                <span className="text-[var(--domu-muted)] font-bold text-[10px] uppercase tracking-[0.25em] mb-4 block">
                                    SOLUÇÕES DIGITAIS DE ALTO IMPACTO
                                </span>
                                <h2 className="h2-domu text-gradient">
                                    Expertise em crescimento
                                </h2>
                            </div>
                        </AnimateOnScroll>

                        <div className="divide-y divide-white/5">
                            {FEATURES.map((item, index) => (
                                <AnimateOnScroll key={index} delay={index * 60}>
                                    <div className="flex flex-col sm:flex-row gap-6 py-10 group items-center sm:items-start text-center sm:text-left">

                                        {/* Ícone quadrado - Clean Design */}
                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 shadow-2xl border border-white/10 bg-white/5 text-white"
                                        >
                                            <item.Icon />
                                        </div>

                                        <div className="min-w-0">
                                            <h4 className="text-white font-black text-lg mb-3 group-hover:text-white transition-colors duration-200 leading-snug uppercase tracking-tight">
                                                {item.title}
                                            </h4>
                                            <p className="text-[var(--domu-muted)] text-[14px] md:text-[15px] leading-relaxed font-medium opacity-70">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
