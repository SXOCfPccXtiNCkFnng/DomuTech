import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import ReliableAgency from './ReliableAgency';
import Pricing from './Pricing';
import Process from './Process';
import { ArrowUpRightIcon, ArrowRightIcon, CodeIcon, CheckIcon } from './icons';

const SOFTWARE_THEME_COLOR = '#3b82f6'; // Azul Domu Software

const SoftwareHouseServicePage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Define a cor de destaque da página
        const root = document.documentElement;
        const originalColor = getComputedStyle(root).getPropertyValue('--domu-accent');
        root.style.setProperty('--domu-accent', SOFTWARE_THEME_COLOR);

        return () => {
            // Restaura a cor original ao sair
            root.style.setProperty('--domu-accent', originalColor);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[var(--domu-bg)] font-sans text-white overflow-hidden selection:bg-[var(--domu-accent)] selection:text-white">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-[var(--domu-bg)]">
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
                    <CodeIcon className="absolute top-[10%] left-[5%] w-32 h-32 animate-float" />
                    <CodeIcon className="absolute top-[20%] right-[10%] w-48 h-48 animate-spin-slow" style={{ animationDuration: '55s' }} />
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
                        <span className="text-[var(--domu-muted)] font-black text-[11px] uppercase tracking-[0.4em] mb-6 block">
                            Software House & Sistemas
                        </span>
                        <h1 className="h1-domu text-white mb-8 italic">
                            Sistemas Complexos <br />
                            <span className="text-gradient">Construídos Sob Medida</span>
                        </h1>
                        <p className="p-domu text-[var(--domu-muted)] max-w-2xl mx-auto mb-12">
                            Transformamos ideias complexas em plataformas escaláveis, seguras e de alto desempenho técnico.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/chatbot-placeholder" className="btn-budget">
                                <ArrowUpRightIcon className="w-3.5 h-3.5" />
                                Orçar meu Software
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Dev Stack Section */}
            <section className="py-20 bg-[var(--domu-black)] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimateOnScroll delay={200} className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                {['FullStack', 'Cloud Native', 'API First', 'Mobile Native'].map((tech, i) => (
                                    <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[var(--domu-accent)] transition-colors">
                                        <span className="text-2xl font-black text-white/20 mb-4 block">0{i+1}</span>
                                        <h4 className="text-white font-black  tracking-tighter">{tech}</h4>
                                    </div>
                                ))}
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll className="order-1 lg:order-2">
                            <span className="text-[var(--domu-muted)] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">
                                ENGENHARIA DE SOFTWARE
                            </span>
                            <h2 className="h2-domu text-white mb-8">
                                Tecnologia que impulsiona o negócio
                            </h2>
                            <p className="text-[var(--domu-muted)] text-lg leading-relaxed mb-8">
                                Não apenas escrevemos código. Nós projetamos arquiteturas que suportam o crescimento da sua empresa, focando em segurança, performance e experiência do usuário final.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "SaaS (Software as a Service)",
                                    "Aplicativos iOS e Android",
                                    "Dashboards e BI Personalizados",
                                    "Integrações de APIs Complexas"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 bg-[var(--domu-accent)] rounded-full"></div>
                                        <span className="text-white/80 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Seção de ERPs & Automação */}
            <section className="py-24 bg-[var(--domu-bg)]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimateOnScroll>
                            <span className="text-[var(--domu-muted)] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Sistemas & Automação</span>
                            <h2 className="h2-domu text-white  italic mb-8">
                                Simplifique seus processos <br/>
                                <span className="text-gradient">com soluções ERP</span>
                            </h2>
                            <p className="text-white/40 text-lg leading-relaxed mb-8">
                                Implementação e gestão de sistemas de planejamento de recursos empresariais. Centralizamos seus processos para proporcionar controle total e otimização de recursos.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {["Bling", "Tiny ERP"].map((erp, i) => (
                                    <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold text-sm uppercase tracking-widest">
                                        {erp}
                                    </div>
                                ))}
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={300}>
                            <div className="p-10 bg-white/[0.02] border border-white/5 rounded-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--domu-accent)] opacity-10 blur-3xl"></div>
                                <h3 className="text-xl font-black text-white mb-6  italic tracking-tighter">O que entregamos:</h3>
                                <ul className="space-y-4">
                                    {[ 
                                        "Sincronização de Estoque em tempo real",
                                        "Sincronização de estoque em tempo real",
                                        "Emissão automatizada de notas fiscais",
                                        "Gestão financeira integrada",
                                        "Integração com principais marketplaces"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/60">
                                            <div className="w-1.5 h-1.5 bg-[var(--domu-accent)] rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
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
                        Pronto para construir algo grande?
                    </h2>
                    <a href="/chatbot-placeholder" className="btn-budget mx-auto">
                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                        Iniciar Consultoria Técnica
                    </a>
                </AnimateOnScroll>
            </section>
        </div>
    );
};

export default SoftwareHouseServicePage;
