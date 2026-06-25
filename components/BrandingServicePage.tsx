import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PenTool, Layers, Book, Share2 } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import CallToAction from './CallToAction';
import ReliableAgency from './ReliableAgency';
import Pricing from './Pricing';
import Process from './Process';
import { ArrowUpRightIcon, ArrowRightIcon, PaletteIcon, CheckIcon } from './icons';

const BRANDING_THEME_COLOR = '#ec4899'; // Rosa Domu Branding

const BrandingServicePage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        // Define a cor de destaque da página
        const root = document.documentElement;
        const originalColor = getComputedStyle(root).getPropertyValue('--domu-accent');
        root.style.setProperty('--domu-accent', BRANDING_THEME_COLOR);

        return () => {
            // Restaura a cor original ao sair
            root.style.setProperty('--domu-accent', originalColor);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[var(--domu-bg)] font-sans text-white overflow-hidden selection:bg-[var(--domu-accent)] selection:text-white">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-[var(--domu-bg)]">
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.15]">
                    <PaletteIcon className="absolute top-[10%] left-[5%] w-32 h-32 animate-float opacity-60" />
                    <PaletteIcon className="absolute top-[20%] right-[10%] w-48 h-48 animate-spin-slow opacity-40" style={{ animationDuration: '55s' }} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
                
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-white/60 hover:text-white mb-12 inline-flex items-center gap-2 group transition-all"
                    >
                        <ArrowRightIcon className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        <span>Voltar para Soluções</span>
                    </button>

                    <AnimateOnScroll>
                        <span className="text-[var(--domu-muted)] font-black text-xs uppercase tracking-[0.4em] mb-6 block">
                            Branding & Design de Experiência
                        </span>
                        <h1 className="h1-domu text-white mb-8 italic">
                            Identidades Que <br />
                            <span className="text-gradient">Conectam Marcas e Pessoas</span>
                        </h1>
                        <p className="p-domu text-[var(--domu-muted)] max-w-2xl mx-auto mb-12">
                            Não é só sobre cores e fontes. É sobre criar uma percepção de valor inabalável no mercado.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/chatbot-placeholder" className="btn-budget">
                                <ArrowUpRightIcon className="w-5 h-5" />
                                Criar minha Marca de Elite
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            <section className="py-24 bg-[var(--domu-black)] border-y border-white/5 relative overflow-hidden">
                {/* Subtle section background decorative grid/blur */}
                <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[var(--domu-accent)]/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <AnimateOnScroll>
                            <span className="px-3 py-1 rounded-full border border-[var(--domu-accent)]/20 bg-[var(--domu-accent)]/[0.04] text-[var(--domu-accent-light)] font-black text-[10px] uppercase tracking-[0.25em] mb-6 inline-block">
                                DESIGN COM PROPÓSITO
                            </span>
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight tracking-tight italic">
                                O design é o seu <br />
                                <span className="text-gradient">vendedor mais silencioso</span>
                            </h2>
                            <p className="text-[var(--domu-secondary)] text-[15px] leading-relaxed mb-10 max-w-xl">
                                Uma marca forte reduz o custo de aquisição e permite que você cobre mais caro pelo seu serviço. Nós unimos estética premium com usabilidade de ponta.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { 
                                        title: "Naming & Logo", 
                                        desc: "Nomes impactantes e identidades memoráveis que grudam na mente do seu cliente.",
                                        icon: <PenTool className="w-5 h-5 text-[var(--domu-accent-light)]" strokeWidth={1.5} />
                                    },
                                    { 
                                        title: "UX/UI Design", 
                                        desc: "Interfaces digitais ultra-intuitivas e sofisticadas focadas em conversão.",
                                        icon: <Layers className="w-5 h-5 text-[var(--domu-accent-light)]" strokeWidth={1.5} />
                                    },
                                    { 
                                        title: "Brandbook", 
                                        desc: "Guia completo de tom de voz, regras visuais e posicionamento estratégico de marca.",
                                        icon: <Book className="w-5 h-5 text-[var(--domu-accent-light)]" strokeWidth={1.5} />
                                    },
                                    { 
                                        title: "Social Design", 
                                        desc: "Presença digital imponente e de alta autoridade em todos os pontos de contato.",
                                        icon: <Share2 className="w-5 h-5 text-[var(--domu-accent-light)]" strokeWidth={1.5} />
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="relative group p-6 rounded-[24px] bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-[var(--domu-accent)]/30 transition-all duration-500 shadow-md hover:shadow-[0_20px_40px_-20px_rgba(0,91,255,0.25)] overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--domu-accent)]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative z-10">
                                            <div className="w-10 h-10 bg-[var(--domu-accent)]/10 border border-[var(--domu-accent)]/20 rounded-xl flex items-center justify-center text-[var(--domu-accent-light)] group-hover:text-white group-hover:bg-gradient-premium transition-all duration-500 mb-6 shadow-inner">
                                                {item.icon}
                                            </div>
                                            <h4 className="text-white font-black tracking-tight text-[16px] mb-2 group-hover:text-[var(--domu-accent-light)] transition-colors">{item.title}</h4>
                                            <p className="text-[var(--domu-secondary)] text-[13px] leading-relaxed group-hover:text-white/80 transition-colors pr-2">{item.desc}</p>
                                        </div>
                                        <div className="absolute bottom-6 right-6 text-white/20 group-hover:text-[var(--domu-accent-light)] group-hover:translate-x-1 transition-all duration-300">
                                            <ArrowRightIcon className="w-4 h-4" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={300}>
                            <div className="relative w-full max-w-[460px] mx-auto">
                                {/* Glowing backdrop elements */}
                                <div className="absolute -top-12 -right-12 w-64 h-64 bg-gradient-to-br from-[var(--domu-accent-muted)]/30 to-[var(--domu-accent-light)]/20 rounded-full blur-[70px] pointer-events-none transition-transform duration-700 group-hover:scale-125"></div>
                                <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-tr from-[var(--domu-accent)]/20 to-transparent rounded-full blur-[60px] pointer-events-none"></div>

                                {/* Main mockup card container */}
                                <div className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10 rounded-[32px] p-8 shadow-2xl backdrop-blur-xl overflow-hidden group hover:border-[var(--domu-accent)]/30 transition-all duration-500">
                                    {/* Subtle interactive overlay grid */}
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity"></div>

                                    {/* Mockup Header Row */}
                                    <div className="flex justify-between items-center mb-8 relative z-10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-premium flex items-center justify-center text-white shadow-md">
                                                <PaletteIcon className="w-4.5 h-4.5" />
                                            </div>
                                            <div>
                                                <span className="block text-[10px] font-black text-white/50 tracking-[0.25em] leading-none uppercase">DOMU SYSTEM</span>
                                                <span className="text-[8px] font-mono text-white/30 leading-none">IDENTITY & STYLE GUIDE</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--domu-accent-light)] animate-pulse"></span>
                                            <span className="text-[8px] font-mono text-[var(--domu-accent-light)] bg-[var(--domu-accent)]/10 border border-[var(--domu-accent-light)]/20 px-2 py-0.5 rounded-full tracking-wider font-bold">V.2.0 ACTIVE</span>
                                        </div>
                                    </div>

                                    {/* Main Typography & Layout Grid Blueprint (Showcase Center) */}
                                    <div className="relative p-6 rounded-2xl bg-black/40 border border-white/5 mb-8 overflow-hidden group/blueprint">
                                        {/* Alignment guides overlay */}
                                        <div className="absolute inset-0 pointer-events-none border border-dashed border-[var(--domu-accent)]/10 scale-95 opacity-50 group-hover/blueprint:opacity-100 transition-opacity"></div>
                                        <div className="absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-[var(--domu-accent)]/10 pointer-events-none"></div>
                                        <div className="absolute left-1/2 top-0 h-full w-[1px] border-l border-dashed border-[var(--domu-accent)]/10 pointer-events-none"></div>

                                        <div className="flex items-center justify-between relative z-10">
                                            {/* Creative Serif Spec */}
                                            <div className="flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 rounded-xl px-6 py-4 relative">
                                                <span className="absolute -top-2 -left-2 text-[7px] font-mono text-white/30">[ANCHOR_PT]</span>
                                                <span className="text-6xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 select-none italic font-semibold leading-none">D</span>
                                                <span className="text-[8px] font-mono text-white/40 mt-2">SERIF ITALIC</span>
                                            </div>

                                            {/* Design Spec Specs */}
                                            <div className="text-right space-y-2">
                                                <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest block">[GRID_SPECS]</span>
                                                <div className="space-y-2">
                                                    <div className="text-[11px] text-white/60 font-medium leading-normal">Font: <span className="text-white font-bold font-serif italic">Playfair</span></div>
                                                    <div className="text-[11px] text-white/60 font-medium leading-normal">Body: <span className="text-white font-bold font-mono">Jakarta Sans</span></div>
                                                    <div className="text-[11px] text-white/60 font-medium leading-normal">Line-Height: <span className="text-white font-bold font-mono">1.25em</span></div>
                                                    <div className="text-[11px] text-white/60 font-medium leading-normal">Letter-Spacing: <span className="text-[var(--domu-accent-light)] font-bold font-mono">-0.03em</span></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Blueprint coordinates label */}
                                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5 text-[8px] font-mono text-white/30">
                                            <span>POS: X: 489.12 / Y: 120.40</span>
                                            <span className="text-[var(--domu-accent-light)]/50">GRID: 8PX COHESIVE</span>
                                        </div>
                                    </div>

                                    {/* Brand Color Swatches (Pantone Cards) */}
                                    <div>
                                        <span className="text-[9px] font-black text-white/40 tracking-[0.2em] uppercase mb-4 block">System Swatches</span>
                                        <div className="grid grid-cols-4 gap-3">
                                            {[
                                                { name: "Accent Blue", hex: "#005BFF", bg: "bg-[#005BFF]" },
                                                { name: "Royal Purple", hex: "#7B61FF", bg: "bg-[#7B61FF]" },
                                                { name: "Cyan Light", hex: "#00D4FF", bg: "bg-[#00D4FF]" },
                                                { name: "Deep Dark", hex: "#0A0F18", bg: "bg-[#0A0F18] border border-white/10" }
                                            ].map((color, idx) => (
                                                <div key={idx} className="bg-black/30 border border-white/5 rounded-xl p-2 flex flex-col gap-2 hover:translate-y-[-4px] hover:border-white/10 transition-all duration-300">
                                                    <div className={`aspect-square w-full rounded-lg ${color.bg} shadow-md`}></div>
                                                    <div className="text-[8px]">
                                                        <span className="block text-white/70 font-bold truncate leading-tight">{color.name}</span>
                                                        <span className="text-white/30 font-mono mt-0.5 block leading-none">{color.hex}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Corner Decorative elements */}
                                    <div className="absolute top-0 right-0 p-2 text-[7px] font-mono text-white/20 select-none">
                                        SYSTEM_REF_09A8
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            <Process />
            <ReliableAgency />
            <Pricing />

            {/* CTA */}
            <section className="py-24 bg-[var(--domu-bg)] text-center">
                <AnimateOnScroll>
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-8 italic">
                        Sua marca transmite o valor que você cobra?
                    </h2>
                    <a href="/chatbot-placeholder" className="btn-budget mx-auto">
                        <ArrowUpRightIcon className="w-5 h-5" />
                        Transformar minha Marca
                    </a>
                </AnimateOnScroll>
            </section>
        </div>
    );
};

export default BrandingServicePage;
