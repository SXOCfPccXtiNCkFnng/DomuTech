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
const IconSecurity = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const FEATURES = [
    {
        Icon:  IconResponsivo,
        title: 'Ecossistema Multiplataforma',
        paragraphs: [
            'Sua marca presente e eficiente em todos os canais digitais de forma unificada. Garantimos que sua solução seja adaptável e entregue uma experiência de uso impecável, seja no mobile, tablet ou desktop.',
            'Através de um desenvolvimento agnóstico a dispositivos, maximizamos o alcance do seu negócio e garantimos que nenhum potencial cliente seja perdido por falhas de carregamento ou layouts quebrados em telas específicas.'
        ]
    },
    {
        Icon:  IconSEO,
        title: 'Visibilidade & Inteligência',
        paragraphs: [
            'Não basta existir no digital, é preciso ser encontrado pelo público que realmente consome seu produto ou serviço. Aplicamos inteligência de dados, análise de concorrência e as melhores práticas de posicionamento orgânico (SEO) para que sua empresa lidere as intenções de busca.',
            'Nosso foco é atrair tráfego qualificado de forma constante, transformando cada clique em uma jornada de valor que resulta em conversão e fidelização.'
        ]
    },
    {
        Icon:  IconTech,
        title: 'Tecnologia de Ponta',
        paragraphs: [
            'Utilizamos as stacks mais modernas e robustas do mercado, como React, Node.js e WordPress Avançado, para criar ferramentas rápidas, seguras e extremamente escaláveis.',
            'Nosso código é limpo e otimizado para acompanhar o crescimento acelerado da sua empresa sem limitações técnicas, evitando lentidões desnecessárias que prejudicam o ranqueamento no Google e a experiência fluida do usuário final.'
        ]
    },
    {
        Icon:  IconConversao,
        title: 'Foco Total em Conversão',
        paragraphs: [
            'Criamos jornadas de usuário milimetricamente focadas em resultados práticos e mensuráveis. Integramos ferramentas de automação, fluxos de vendas inteligentes e análises profundas de comportamento para entender o que faz seu cliente tomar a decisão de compra.',
            'Transformamos cada interação digital em uma oportunidade real de negócio, otimizando seu ROI e garantindo um crescimento sustentável para sua marca no longo prazo.'
        ]
    },
    {
        Icon:  IconLayout,
        title: 'Design Estratégico',
        paragraphs: [
            'Design que comunica, encanta e, acima de tudo, vende. Desenvolvemos interfaces exclusivas e intuitivas que fortalecem o posicionamento da sua marca em um mercado altamente competitivo.',
            'Através de estudos aprofundados de UX (User Experience) e UI (User Interface), criamos uma conexão imediata de profissionalismo e transmitimos a confiança necessária para que seu público-alvo escolha sua solução como a melhor opção disponível.'
        ]
    },
    {
        Icon:  IconSecurity,
        title: 'Segurança & Suporte Contínuo',
        paragraphs: [
            'Protegemos seu patrimônio digital com protocolos de segurança de nível bancário, certificados SSL avançados e backups automáticos periódicos.',
            'Além da entrega final, oferecemos um acompanhamento técnico próximo e consultivo para garantir que sua plataforma esteja sempre atualizada com as últimas patches de segurança, mantendo seu negócio online rápido, estável e totalmente protegido contra qualquer tipo de ameaça externa.'
        ]
    },
];

const Features: React.FC = () => {
    return (
        <section 
            id="features" 
            className="py-10 md:py-24 bg-[var(--domu-bg)] relative overflow-visible"
        >
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[25%_75%] gap-16 lg:gap-20 items-start">

                    {/* ── Coluna esquerda — Sticky Centralizado ─────────────────── */}
                    <div className="lg:sticky lg:top-0 lg:h-screen self-start flex flex-col items-center justify-center text-center">

                        {/* Mascote Branding */}
                        <div className="relative w-full max-w-[200px] md:max-w-[280px] mx-auto lg:mx-0 mb-10 md:mb-12">
                            <img
                                src="/logos/logobranca.png"
                                alt="Mascote Domu tech"
                                className="relative z-10 w-full h-auto opacity-100 animate-float"
                            />
                        </div>

                        {/* CTA below logo */}
                        <div className="px-2">
                            <h3 className="text-gradient font-black tracking-tight text-xl md:text-2xl leading-tight mb-8">
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
                    <div className="pt-10 lg:pt-4 w-full">
                        <AnimateOnScroll>
                            <div className="text-center lg:text-left mb-12">
                                <span className="tag-domu mb-4 block">
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

                                        <div className="max-w-full">
                                            <h4 className="text-white font-black text-lg mb-3 group-hover:text-white transition-colors duration-200 leading-snug tracking-tight">
                                                {item.title}
                                            </h4>
                                            <div className="p-domu opacity-70">
                                                {item.paragraphs.map((p, i) => (
                                                    <p key={i} className={i !== item.paragraphs.length - 1 ? "mb-4" : ""}>
                                                        {p}
                                                    </p>
                                                ))}
                                            </div>
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
