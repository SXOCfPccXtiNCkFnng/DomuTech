
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const Values: React.FC = () => {
    return (
        <section id="values" className="py-10 md:py-16 bg-[var(--domu-bg)] relative overflow-hidden">
            {/* Branding Ghosts Constellation - Forced to Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.15] z-0">
                <img src="/logos/logo-glitch.png" className="absolute top-[5%] right-[5%] w-32 h-32 animate-float opacity-70" alt="" />
                <img src="/logos/logo-glitch.png" className="absolute top-[40%] left-0 w-48 h-48 animate-spin-slow opacity-40" style={{ animationDuration: '60s' }} alt="" />
                <img src="/logos/logo-glitch.png" className="absolute bottom-[10%] right-[10%] w-24 h-24 animate-float-delayed opacity-60" alt="" />
                <img src="/logos/logo-glitch.png" className="absolute top-[70%] left-[15%] w-16 h-16 animate-float opacity-30" alt="" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <AnimateOnScroll>
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="tag-domu mb-4 block">
                            Workflow Domu Tech
                        </span>
                        <h2 className="h2-domu text-gradient">
                            Como transformamos<br />
                            sua ideia em realidade
                        </h2>
                    </div>
                </AnimateOnScroll>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { 
                            title: 'Escolha do Projeto', 
                            desc: 'Definimos se seu negócio precisa de um Site Institucional, Landing Page de alta conversão ou Loja Virtual robusta.', 
                            icon: (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                                    <path d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z" strokeLinecap="round" />
                                    <path d="M8 21h8m-4-4v4" strokeLinecap="round" />
                                </svg>
                            )
                        },
                        { 
                            title: 'Definição de Recursos', 
                            desc: 'Escolha as funcionalidades: SEO avançado, Blogs, Multi-idioma, Dashboards Inteligentes e Integrações de Pagamento.', 
                            icon: (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                    <circle cx="12" cy="12" r="3" />
                                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                                </svg>
                            )
                        },
                        { 
                            title: 'Início e Execução', 
                            desc: 'Com briefing estratégico e contrato, nosso squad inicia o design e código para colocar sua visão no ar o quanto antes.', 
                            icon: (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )
                        }
                    ].map((step, index) => (
                        <AnimateOnScroll key={step.title} delay={index * 150}>
                            <div className="group bg-[var(--domu-surface-1)] hover:bg-[var(--domu-surface-2)] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col h-full shadow-2xl">
                                <div className="w-14 h-14 bg-[var(--domu-surface-2)] border border-white/5 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>

                                <h3 className="text-lg md:text-xl font-black text-white  tracking-tighter mb-4 leading-tight">
                                    {step.title}
                                </h3>
                                
                                <p className="text-[var(--domu-muted)] leading-relaxed font-medium text-sm md:text-base group-hover:text-white transition-colors duration-500">
                                    {step.desc}
                                </p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;