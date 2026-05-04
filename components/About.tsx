import React, { useEffect, useRef, useState } from 'react';
import { ABOUT_METRICS } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';
import { LightningBoltIcon, WhatsAppIcon } from './icons';

/* ── Chips de serviço (Fidelity to DOMU TECH: Fotos / Vídeos / Textos) ─────────── */
const CHIPS = [
    {
        label: 'Fotos',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
            </svg>
        ),
    },
    {
        label: 'Vídeos',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
            </svg>
        ),
    },
    {
        label: 'Textos',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <polyline points="4 7 4 4 20 4 20 7" />
                <line x1="9" y1="20" x2="15" y2="20" />
                <line x1="12" y1="4" x2="12" y2="20" />
            </svg>
        ),
    },
];

const About: React.FC = () => {
    return (
        <section id="about" className="py-10 md:py-12 bg-[var(--domu-bg)] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Branding Ghosts Constellation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06]">
                <img src="/logos/logobranca.png" className="absolute top-[10%] left-[5%] w-24 h-24 animate-float" alt="" />
                <img src="/logos/logobranca.png" className="absolute bottom-[20%] right-[10%] w-32 h-32 animate-spin-slow" style={{ animationDuration: '40s' }} alt="" />
                <img src="/logos/logobranca.png" className="absolute top-[60%] left-[15%] w-16 h-16 animate-float-delayed" alt="" />
            </div>

            <div className="container mx-auto px-4 relative z-10">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">

                    {/* Left Column - Content */}
                    <AnimateOnScroll>
                        <div className="max-w-xl mx-auto lg:mx-0">
                            <span className="text-[var(--domu-muted)] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">
                                SOLUÇÕES DIGITAIS INTELIGENTES
                            </span>
                            <h2 className="h2-domu text-gradient mb-6">
                                Sua Empresa Com total<br />Autonomia no Digital
                            </h2>

                            <div className="space-y-4 text-[var(--domu-muted)] text-[15px] md:text-[16px] leading-relaxed mb-8">
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
                                        <span className="text-white font-black text-[12px] uppercase tracking-wider">{chip.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <div className="mb-10">
                                <a
                                    href="/chatbot-placeholder"
                                    className="btn-budget group !px-8 !py-4 !text-[12px]"
                                >
                                    <LightningBoltIcon className="w-5 h-5 fill-current transition-transform " />
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
                                    <p className="text-white font-black text-[13px] uppercase tracking-tight mb-1">
                                        Foco em Resultados Reais
                                    </p>
                                    <p className="text-[var(--domu-muted)] text-[12px] leading-snug font-medium">
                                        Nossa missão é construir seu braço direito no mundo digital com performance e total autonomia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Right Column - Image with 3D Float Effect */}
                    <AnimateOnScroll delay={300}>
                        <div className="relative flex items-center justify-center scale-110 lg:scale-140">
                            {/* Main Mascot Visual */}
                            <div className="relative z-10 w-full group">
                                <img 
                                    src="/logos/roboprincipal.png" 
                                    alt="Mascote DOMU TECH" 
                                    className="w-full h-auto max-w-md mx-auto drop-shadow-2xl animate-float"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-white/10">
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

const MetricItem: React.FC<{ metric: typeof ABOUT_METRICS[number] }> = ({ metric }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [value, setValue] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    const target = parseInt(metric.value.replace(/\D/g, ''), 10) || 0;
    const suffix = metric.value.replace(/[0-9]/g, '').trim();

    useEffect(() => {
        if (!ref.current || hasAnimated) return;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setHasAnimated(true);
                let start = 0;
                const end = target;
                const duration = 1500;
                const startTime = performance.now();
                const animate = (currentTime: number) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    setValue(Math.floor(progress * end));
                    if (progress < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
            }
        }, { threshold: 0.5 });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, hasAnimated]);

    return (
        <div ref={ref} className="text-center group">
            <div className="flex flex-col items-center">
                <div className="text-white font-black text-5xl md:text-6xl tracking-tighter mb-2 group-hover:text-white transition-colors">
                    {value}{suffix}
                </div>
                <div className="w-10 h-[2px] bg-white mb-4"></div>
                <span className="text-[var(--domu-muted)] font-bold text-[10px] uppercase tracking-[0.2em]">
                    {metric.label}
                </span>
            </div>
        </div>
    );
};

export default About;