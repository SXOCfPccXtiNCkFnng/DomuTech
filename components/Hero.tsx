import React from 'react';
import { ArrowUpRightIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';
import TrustedCompanies from './TrustedCompanies';

const Hero: React.FC = () => {
    return (
        <section 
            id="home" 
            className="hero-section on-dark relative overflow-hidden"
        >
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="absolute top-[15%] left-[-10%] w-[380px] h-[380px] bg-[var(--domu-accent)] opacity-20 blur-[130px] rounded-full" />
                <div className="absolute bottom-[5%] right-[-8%] w-[460px] h-[460px] bg-[var(--domu-accent)] opacity-15 blur-[150px] rounded-full" />
            </div>
            
            <div className="hero-section__inner container mx-auto px-6 relative z-10">
                <div className="hero-section__main grid lg:grid-cols-2 gap-10 lg:gap-10 items-center">
                    <div className="text-center lg:text-left">
                        <AnimateOnScroll immediate delay={160}>
                            <h1 className="display-domu text-[var(--domu-primary)] mb-4 md:mb-6 max-w-xl mx-auto lg:mx-0 lg:max-w-[28ch]">
                                Soluções digitais{' '}
                                <span className="text-[var(--domu-accent)]">que impulsionam</span>{' '}
                                o seu negócio.
                            </h1>
                        </AnimateOnScroll>

                        <AnimateOnScroll immediate delay={280}>
                            <p className="lead-domu !text-white/65 mb-7 md:mb-9 max-w-[560px] mx-auto lg:mx-0">
                                Sites modernos, e-commerces e aplicações sob medida para empresas que querem crescer com tecnologia.
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll immediate delay={400}>
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-2.5">
                                <a href="/chatbot-placeholder" className="btn-budget group">
                                    <ArrowUpRightIcon className="w-4 h-4" />
                                    Solicite um orçamento
                                </a>
                                <a href="#portfolio" className="btn-domu-outline group">
                                    Ver Portfólio
                                </a>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    <div className="hero-logo-orbit relative hidden lg:flex items-center justify-center">
                        <div
                            className="hero-logo-glow absolute rounded-full bg-[var(--domu-accent)] opacity-20 blur-[140px] pointer-events-none"
                            aria-hidden
                        />
                        <AnimateOnScroll immediate delay={320} className="w-full flex items-center justify-center">
                            <div className="hero-logo-orbit__path">
                                <img
                                    src="/3d.png"
                                    alt="DOMU TECH"
                                    className="hero-logo-mark h-auto object-contain select-none"
                                />
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>

                <AnimateOnScroll immediate delay={520}>
                    <TrustedCompanies />
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default Hero;
