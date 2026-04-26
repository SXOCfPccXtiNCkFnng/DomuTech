
import React from 'react';
import { LightningBoltIcon, WhatsAppIcon } from './icons';

const Hero: React.FC = () => {
    return (
        <section 
            id="home" 
            className="relative bg-[var(--domo-bg)] pt-4 pb-10 md:pt-20 md:pb-32 overflow-hidden"
        >
            {/* ── Background High-End Glows ────────────────────────────────── */}
            <div className="absolute left-[-10%] top-[-10%] w-[50%] h-[50%] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute right-[-5%] bottom-[-10%] w-[40%] h-[40%] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[30%] bg-white/[0.01] rounded-full blur-[150px] pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                
                {/* 100% Fidelity Tagline - Refined Glassmorphism */}
                <div className="flex justify-center mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 md:gap-4 bg-white/[0.03] border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.02)]">
                        <span className="text-white font-black text-[9px] md:text-[11px] uppercase tracking-[0.3em] opacity-70">Estúdio de Alta Performance</span> 
                        <div className="w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse"></div> 
                        <span className="text-white font-black text-[9px] md:text-[11px] uppercase tracking-[0.3em] flex items-center gap-2">
                             ★ 4.9 no Google
                        </span>
                    </div>
                </div>
 
                {/* Main Title - Extreme Impact */}
                <h1 className="h1-domo text-white mb-10 md:mb-16 max-w-5xl mx-auto px-2 leading-[1.02] tracking-[-0.05em] drop-shadow-2xl">
                    Criamos sites que<br className="hidden md:block" /> 
                    <span className="md:inline text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40"> aceleram negócios</span>
                </h1>
 
                {/* Subtitle - More readable and elegant */}
                <p className="text-[#a1a1a1] text-[16px] md:text-[20px] mb-14 md:mb-20 max-w-[680px] mx-auto leading-relaxed font-medium px-4 opacity-90">
                    A DOMO Digital transforma sua presença online com soluções de <span className="text-white">alto impacto</span>, SEO avançado e design exclusivo.
                </p>
 
                {/* Button Group - Premium Sizing */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-28 md:mb-40 relative z-20 px-4">
                    <a 
                        href="/chatbot-placeholder" 
                        className="btn-budget group w-full sm:w-auto shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]"
                    >
                        <LightningBoltIcon className="w-5 h-5" />
                        Peça um Orçamento
                    </a>
                    <a 
                        href="#portfolio" 
                        className="btn-domo-outline group w-full sm:w-auto !border-white/10 hover:!border-white/30 backdrop-blur-md"
                    >
                        Ver Portfólio
                    </a>
                </div>
 
                {/* Illustrations - Re-illuminated Mascot */}
                <div className="absolute left-[2%] top-[55%] w-24 md:w-44 opacity-[0.08] animate-float select-none pointer-events-none">
                    <img src="/logos/logobranca.png" alt="" className="w-full h-auto blur-[1.5px]" />
                </div>
                
                <div className="absolute right-[-3%] top-[5%] md:top-[8%] w-72 md:w-[560px] opacity-[0.8] animate-float-delayed select-none pointer-events-none transition-all duration-1000">
                    <div className="absolute inset-0 bg-white/5 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
                    <img 
                        src="/logos/roboprincipal.png" 
                        alt="Mascote Domo Digital Animado" 
                        className="relative z-10 w-full h-auto drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]"
                    />
                </div>
 
                {/* Infinite Logo Carousel - Clean and Premium */}
                <div className="mt-8 md:mt-16 overflow-hidden relative py-8 mx-0 md:mx-[-1.5rem] px-6">
                    <div className="flex whitespace-nowrap animate-infinite-scroll items-center gap-16 md:gap-32 w-max grayscale opacity-[0.12] transition-opacity hover:opacity-[0.25]">
                        {[
                            'KaBuM!', 'FLOW GAMES', 'Unimed', 'unesp', 'asksuite', 'Confirp', 'CONTROLLER BMS',
                            'KaBuM!', 'FLOW GAMES', 'Unimed', 'unesp', 'asksuite', 'Confirp', 'CONTROLLER BMS'
                        ].map((logo, i) => (
                            <span key={i} className="text-xl md:text-3xl font-black text-white tracking-[0.2em] uppercase italic">{logo}</span>
                        ))}
                    </div>
                </div>
            </div>
 
            {/* Background floating decor elements */}
            <div className="absolute top-1/4 right-[20%] w-6 h-6 bg-white/10 rounded-full blur-[3px] opacity-10 animate-float"></div>
            <div className="absolute top-[15%] left-[15%] w-8 h-8 bg-white/10 rounded-full blur-[2px] opacity-5 animate-float-delayed"></div>
        </section>
    );
};

export default Hero;