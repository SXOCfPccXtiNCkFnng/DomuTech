
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import ReliableAgency from './ReliableAgency';
import Pricing from './Pricing';
import ProfessionalDevelopment from './ProfessionalDevelopment';
import Process from './Process';
import { LightningBoltIcon, ArrowRightIcon } from './icons';

const SiteServicePage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black dark:bg-neutral-950 min-h-screen pt-20">
            {/* Custom Hero for Sites */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-[var(--domu-bg)]">
                <div className="absolute inset-0 bg-[url('/img/fundo-web.png')] bg-cover bg-center opacity-10"></div>
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
                        <span className="text-[#a1a1a1] font-black text-[11px] uppercase tracking-[0.4em] mb-6 block">
                            Criação de Sites de Alta Performance
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight uppercase italic">
                            Site Sob Medida <br />
                            <span className="text-gradient">Para o Seu Negócio</span>
                        </h1>
                        <p className="text-[#a1a1a1] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                            Desenvolvemos plataformas exclusivas focadas em autoridade, performance técnica e conversão de visitantes em clientes reais.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/chatbot-placeholder" className="btn-budget">
                                <LightningBoltIcon className="w-5 h-5" />
                                Iniciar meu Projeto
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Injected Content */}
            <div className="relative space-y-0">
                <ProfessionalDevelopment />
                
                {/* About Content specifically for Sites */}
                <section className="py-20 bg-[#121212] border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <AnimateOnScroll>
                                <span className="text-[#a1a1a1] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">
                                    GESTÃO & AUTONOMIA
                                </span>
                                <h2 className="h2-domu text-white mb-8">
                                    SITES 100% GERENCIÁVEIS POR VOCÊ
                                </h2>
                                <p className="text-[#a1a1a1] text-lg leading-relaxed mb-6">
                                    Nada de ficar preso a programadores para trocar um simples texto ou foto. Entregamos seu site com um painel administrativo intuitivo onde você tem controle total.
                                </p>
                                <ul className="space-y-4 text-white/70">
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                        <span>Editor visual moderno e simples</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                        <span>Atualização de portfólio em segundos</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                        <span>Gestão de leads integrada</span>
                                    </li>
                                </ul>
                            </AnimateOnScroll>
                            <AnimateOnScroll delay={200}>
                                <div className="relative bg-white/5 p-4 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
                                    <img src="/img/fundo-web.png" alt="Gestão de Site" className="rounded-2xl opacity-50" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                                            <LightningBoltIcon className="w-8 h-8 text-white" />
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
            </div>

            {/* Final CTA */}
            <section className="py-24 bg-[var(--domu-bg)] text-center">
                <AnimateOnScroll>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase italic">
                        VAMOS TIRAR SUA IDÉIA DO PAPEL?
                    </h2>
                    <a href="/chatbot-placeholder" className="btn-budget mx-auto">
                        <LightningBoltIcon className="w-5 h-5" />
                        Solicitar Orçamento Agora
                    </a>
                </AnimateOnScroll>
            </section>
        </div>
    );
};

export default SiteServicePage;
