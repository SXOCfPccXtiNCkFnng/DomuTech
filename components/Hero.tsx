
import React from 'react';
import { LightningBoltIcon } from './icons';

const Hero: React.FC = () => {
    return (
        <section 
            id="home" 
            className="relative bg-[var(--domu-bg)] pt-10 pb-16 md:pt-28 md:pb-40 overflow-hidden"
        >
            {/* ── Background Layer ─────────────────────────────────────────── */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Clean dark background with only floating elements */}
                
                {/* Subtle Floating Logo Particles */}
                <img src="/logos/logobranca.png" className="absolute top-[5%] left-[-5%] w-48 h-48 opacity-[0.03] animate-spin-slow" style={{ animationDuration: '45s' }} alt="" />
                <img src="/logos/logobranca.png" className="absolute top-[15%] left-[20%] w-24 h-24 opacity-[0.05] animate-float rotate-12" alt="" />
                <img src="/logos/logobranca.png" className="absolute top-[50%] left-[-10%] w-[300px] h-[300px] opacity-[0.02] animate-spin-slow" style={{ animationDuration: '80s' }} alt="" />
                <img src="/logos/logobranca.png" className="absolute top-[20%] right-[10%] w-32 h-32 opacity-[0.04] animate-float-delayed" alt="" />
                <img src="/logos/logobranca.png" className="absolute bottom-[20%] left-[30%] w-20 h-20 opacity-[0.05] animate-float" style={{ animationDuration: '9s' }} alt="" />
                <img src="/logos/logobranca.png" className="absolute top-[35%] right-[-5%] w-[250px] h-[250px] opacity-[0.02] animate-spin-slow rotate-45" style={{ animationDuration: '60s' }} alt="" />
                <img src="/logos/logobranca.png" className="absolute bottom-[5%] right-[20%] w-40 h-40 opacity-[0.03] animate-float-delayed" alt="" />
                <img src="/logos/logobranca.png" className="absolute top-[60%] right-[15%] w-16 h-16 opacity-[0.05] animate-float" style={{ animationDuration: '12s' }} alt="" />
                <img src="/logos/logobranca.png" className="absolute top-[5%] right-[40%] w-12 h-12 opacity-[0.04] animate-spin-slow" style={{ animationDuration: '5s' }} alt="" />
                <img src="/logos/logobranca.png" className="absolute bottom-[15%] left-[10%] w-[180px] h-[180px] opacity-[0.02] animate-float" alt="" />

                {/* Subtle Grid Overlay for Tech Vibe */}
                <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" 
                     style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    
                    {/* 1. Tagline: Estúdio de Alta Performance */}
                    <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-xl shadow-[0_5px_15px_rgba(0,0,0,0.2)] mb-8 md:mb-12 animate-fade-in">
                        <span className="text-white/60 font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em]">
                            Estúdio de Alta Performance
                        </span> 
                        <div className="w-1 h-1 bg-white/40 rounded-full"></div> 
                        <span className="text-white font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] flex items-center gap-2">
                             ★ 4.9 no Google
                        </span>
                    </div>

                    {/* 2. Main Title */}
                    <h1 className="h1-domu text-white mb-8 md:mb-12 max-w-5xl mx-auto leading-[1.05] tracking-[-0.04em] drop-shadow-2xl">
                        Soluções digitais que<br className="hidden md:block" /> 
                        <span className="text-gradient"> transformam resultados</span>
                    </h1>

                    {/* 3. Subtitle */}
                    <p className="text-secondary text-[16px] md:text-[20px] mb-12 md:mb-16 max-w-[720px] mx-auto leading-relaxed font-medium opacity-90">
                        A <span className="text-white font-bold tracking-tight">DOMU TECH</span> impulsiona sua marca com estratégias de alto impacto e tecnologia de ponta.
                    </p>

                    {/* 4. Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12 md:mb-16 w-full sm:w-auto">
                        <a 
                            href="/chatbot-placeholder" 
                            className="btn-budget group w-full sm:w-auto min-w-[240px]"
                        >
                            <LightningBoltIcon className="w-5 h-5" />
                            Peça um Orçamento
                        </a>
                        <a 
                            href="#portfolio" 
                            className="btn-domu-outline group w-full sm:w-auto min-w-[240px]"
                        >
                            Ver Portfólio
                        </a>
                    </div>
                </div>

                {/* 5. Mascot (Robot) - Placed in the Green Box Area */}
                <div className="absolute right-[0%] md:right-[2%] lg:right-[4%] top-[30%] md:top-[28%] w-32 md:w-[320px] lg:w-[420px] opacity-[0.2] md:opacity-[1] animate-float-delayed select-none pointer-events-none transition-all duration-1000 z-0">
                    <div className="absolute inset-0 bg-white/5 rounded-full blur-[60px] md:blur-[80px] opacity-20 animate-pulse"></div>
                    <img 
                        src="/logos/roboprincipal.png" 
                        alt="Mascote DOMU TECH" 
                        className="relative z-10 w-full h-auto drop-shadow-[0_0_80px_rgba(255,255,255,0.1)]"
                    />
                </div>

                {/* 6. Logo Carousel */}
                <div className="mt-8 md:mt-10 border-t border-white/[0.05] pt-12">
                    <p className="text-center text-white/30 text-[10px] uppercase tracking-[0.4em] font-black mb-8">Empresas que confiam</p>
                    <div className="overflow-hidden relative mask-fade-sides">
                        <div className="flex whitespace-nowrap animate-infinite-scroll items-center gap-20 md:gap-40 w-max grayscale opacity-[0.15] hover:opacity-[0.4] transition-all duration-500">
                            {[
                                'KaBuM!', 'FLOW GAMES', 'Unimed', 'unesp', 'asksuite', 'Confirp', 'CONTROLLER BMS',
                                'KaBuM!', 'FLOW GAMES', 'Unimed', 'unesp', 'asksuite', 'Confirp', 'CONTROLLER BMS'
                            ].map((logo, i) => (
                                <span key={i} className="text-2xl md:text-4xl font-black text-white tracking-[0.1em] uppercase italic opacity-70 hover:opacity-100 cursor-default transition-opacity">{logo}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Floating Dots */}
            <div className="absolute top-1/4 right-[20%] w-4 h-4 bg-white/10 rounded-full blur-[2px] opacity-10 animate-float"></div>
            <div className="absolute top-[15%] left-[15%] w-6 h-6 bg-white/10 rounded-full blur-[3px] opacity-10 animate-float-delayed"></div>
        </section>
    );
};

export default Hero;