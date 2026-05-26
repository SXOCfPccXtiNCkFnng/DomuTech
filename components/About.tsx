import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { ArrowUpRightIcon, LayoutIcon, MobileIcon, CodeIcon } from './icons';

const ABOUT_METRICS = [
    { label: 'Projetos Entregues', value: '15+' },
    { label: 'Anos de Mercado', value: '3+' },
    { label: 'Performance Média', value: '95+' },
];

const CHIPS = [
    { label: 'Fotos', icon: <LayoutIcon className="w-5 h-5" /> },
    { label: 'Vídeos', icon: <MobileIcon className="w-5 h-5" /> },
    { label: 'Textos', icon: <CodeIcon className="w-5 h-5" /> },
];

const MetricItem = ({ metric }: { metric: typeof ABOUT_METRICS[0] }) => (
    <div className="text-center lg:text-left">
        <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">
            {metric.value}
        </div>
        <div className="text-[var(--domu-muted)] text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-black">
            {metric.label}
        </div>
    </div>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-[var(--domu-bg)] relative overflow-hidden border-t border-white/5">
            {/* Ambient Background Lights */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--domu-accent)] opacity-5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7B61FF] opacity-5 blur-[120px] pointer-events-none" />

            {/* Branding Ghosts Constellation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.15]">
                <img src="/logos/logo-glitch.png" className="absolute top-[15%] right-[-5%] w-64 h-64 animate-spin-slow opacity-40" style={{ animationDuration: '80s' }} alt="" />
                <img src="/logos/logo-glitch.png" className="absolute bottom-[20%] left-[-10%] w-96 h-96 animate-float opacity-30" alt="" />
            </div>

            <div className="container mx-auto px-4 relative z-10">

                <div className="grid lg:grid-cols-[75%_25%] gap-12 lg:gap-16 items-center mb-16">

                    {/* Left Column - Content */}
                    <AnimateOnScroll>
                        <div className="max-w-full mx-auto lg:mx-0">
                            <span className="tag-domu mb-4 block">
                                SOLUÇÕES DIGITAIS INTELIGENTES
                            </span>
                            <h2 className="h2-domu text-gradient mb-6">
                                Sua Empresa Com total<br />Autonomia no Digital
                            </h2>

                            <div className="space-y-4 text-[var(--domu-muted)] text-base leading-relaxed mb-8">
                                <p>
                                    Na DOMU TECH, desenvolvemos ecossistemas profissionais preparados para escala.<br />
                                    Você ganha controle total para gerenciar seus ativos digitais e dados em tempo real, sem burocracia.
                                </p>
                            </div>

                            {/* Service Chips */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {CHIPS.map(chip => (
                                    <div
                                        key={chip.label}
                                        className="flex items-center gap-3 bg-white/[0.03] backdrop-blur-sm rounded-xl px-6 py-3.5 transition-all hover:bg-white/10 border border-white/5 group cursor-default"
                                    >
                                        <div className="text-white/40 group-hover:text-white transition-colors">
                                            {chip.icon}
                                        </div>
                                        <span className="text-white font-black text-xs uppercase tracking-wider">{chip.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <div className="mb-10">
                                <a
                                    href="/chatbot-placeholder"
                                    className="btn-budget group"
                                >
                                    <ArrowUpRightIcon className="w-5 h-5 fill-current transition-transform " />
                                    Peça um Orçamento
                                </a>
                            </div>

                            {/* Mission Card */}
                            <div className="flex items-start gap-5 p-6 bg-white/[0.02] rounded-lg border border-white/5 hover:border-white/10 transition-colors max-w-[440px]">
                                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 text-white shadow-xl border border-white/5">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-black text-xs uppercase tracking-tight mb-1">
                                        Foco em Resultados Reais
                                    </p>
                                    <p className="text-[var(--domu-muted)] text-xs leading-snug font-medium">
                                        Nossa missão é construir seu braço direito no mundo digital com performance e total autonomia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Right Column - Image with 3D Float Effect */}
                    <AnimateOnScroll delay={300}>
                        <div className="relative flex items-center justify-center lg:scale-110">
                            {/* Main Mascot Visual */}
                            <div className="relative z-10 w-full group">
                                <img 
                                    src="/logos/mascote.png" 
                                    alt="Mascote DOMU TECH" 
                                    className="w-full h-auto drop-shadow-2xl"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 border-t border-white/10">
                    {ABOUT_METRICS.map((metric, index) => (
                        <AnimateOnScroll key={metric.label} delay={index * 100}>
                            <MetricItem metric={metric} />
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;