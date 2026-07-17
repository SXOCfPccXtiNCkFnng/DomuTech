import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import ReliableAgency from './ReliableAgency';
import Pricing from './Pricing';
import ProfessionalDevelopment from './ProfessionalDevelopment';
import Process from './Process';
import { ArrowUpRightIcon, ArrowRightIcon } from './icons';

const SITE_THEME_COLOR = '#34d399'; // Verde-Esmeralda

const SiteServicePage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        // Define a cor de destaque da página
        const root = document.documentElement;
        const originalColor = getComputedStyle(root).getPropertyValue('--domu-accent');
        root.style.setProperty('--domu-accent', SITE_THEME_COLOR);

        return () => {
            // Restaura a cor original ao sair
            root.style.setProperty('--domu-accent', originalColor);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[var(--domu-bg)] font-sans text-white overflow-hidden selection:bg-[var(--domu-accent)] selection:text-white">
            {/* Custom Hero for Sites */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-[var(--domu-bg)]">
                {/* Branding Ghosts Constellation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
                    <img src="/fraucon.png" className="absolute top-[10%] left-[5%] w-32 h-32 animate-float object-contain" alt="" />
                    <img src="/fraucon.png" className="absolute top-[20%] right-[10%] w-48 h-48 animate-spin-slow object-contain" style={{ animationDuration: '55s' }} alt="" />
                    <img src="/fraucon.png" className="absolute bottom-[10%] left-[20%] w-24 h-24 animate-float-delayed object-contain" alt="" />
                </div>
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
                        <span className="text-[var(--domu-muted)] font-black text-[11px] uppercase tracking-[0.4em] mb-6 block">
                            Criação de Sites de Alta Performance
                        </span>
                        <h1 className="h1-domu text-white mb-8 italic">
                            Site Sob Medida <br />
                            <span className="text-gradient">Para o Seu Negócio</span>
                        </h1>
                        <p className="p-domu text-[var(--domu-muted)] max-w-2xl mx-auto mb-12">
                            Desenvolvemos plataformas exclusivas focadas em autoridade, performance técnica e conversão de visitantes em clientes reais.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/chatbot-placeholder" className="btn-budget">
                                <ArrowUpRightIcon className="w-3.5 h-3.5" />
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
                <section className="py-20 bg-[var(--domu-black)] border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <AnimateOnScroll>
                                <span className="text-[var(--domu-muted)] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">
                                    GESTÃO & AUTONOMIA
                                </span>
                                <h2 className="h2-domu text-white mb-8">
                                    Sites 100% gerenciáveis por você
                                </h2>
                                <p className="text-[var(--domu-muted)] text-lg leading-relaxed mb-6">
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
                                <div className="relative flex items-center justify-center rounded-2xl overflow-hidden">
                                    {/* Brilho difuso de fundo integrado (Integrated Ambient Glow) */}
                                    <div className="absolute w-[80%] h-[80%] bg-[var(--domu-accent)]/10 rounded-full blur-[60px] pointer-events-none"></div>
                                    
                                    <img 
                                        src="/logos/img-seusite.png" 
                                        alt="Gestão de Site" 
                                        className="w-full h-auto relative z-10 rounded-2xl" 
                                    />
                                    
                                    {/* Sombra interna retangular para sumir com as bordas da imagem */}
                                    <div className="absolute inset-0 z-20 shadow-[inset_0_0_35px_15px_#060A10] pointer-events-none rounded-2xl"></div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </section>

                {/* Seção de Evolução & Estratégia */}
            <section className="py-24 bg-[var(--domu-bg)]">
                <div className="container mx-auto px-6">
                    <AnimateOnScroll className="text-center mb-16">
                        <span className="text-[var(--domu-muted)] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Evolução Digital</span>
                        <h2 className="h2-domu text-white  italic">Não fique estagnado, <br/><span className="text-gradient">invista em evolução</span></h2>
                    </AnimateOnScroll>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[ 
                            { title: "SEO", desc: "Otimização para motores de busca, visando aumentar o tráfego orgânico." },
                            { title: "CRO", desc: "Otimização da taxa de conversão, transformando visitantes em clientes." },
                            { title: "UI/UX", desc: "Interfaces intuitivas e experiências que encantam o usuário." },
                            { title: "Recursos", desc: "Desenvolvimento de novas funcionalidades sob demanda." }
                        ].map((item, i) => (
                            <AnimateOnScroll key={i} delay={i * 100}>
                                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-lg hover:border-[var(--domu-accent)] transition-all group">
                                    <h3 className="text-lg font-black text-white mb-4  italic group-hover:text-[var(--domu-accent)] transition-colors">{item.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ecossistema de Plataformas */}
            <section className="py-24 bg-[var(--domu-black)] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <AnimateOnScroll className="max-w-2xl">
                            <span className="text-[var(--domu-muted)] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Tecnologias & Parceiros</span>
                            <h2 className="h2-domu text-white  italic leading-none">Desenvolvimento Ágil com <br/><span className="text-gradient">Plataformas Líderes</span></h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={200}>
                            <a href="/chatbot-placeholder" className="btn-domu-outline mb-2">Preciso de um novo site</a>
                        </AnimateOnScroll>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[ 
                            { name: "deco.cx", desc: "Headless & 90+ PageSpeed" },
                            { name: "VTEX", desc: "Escalabilidade & Enterprise" },
                            { name: "Shopify", desc: "Global & Plugins Ilimitados" },
                            { name: "Nuvemshop", desc: "Melhor Custo-Benefício" },
                            { name: "WooCommerce", desc: "Flexibilidade WordPress" },
                            { name: "Webflow", desc: "Design Visual de Elite" }
                        ].map((plat, i) => (
                            <AnimateOnScroll key={i} delay={i * 50}>
                                <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl text-center group hover:bg-[var(--domu-accent)] transition-all duration-500">
                                    <div className="text-white font-black text-sm uppercase mb-2 group-hover:scale-110 transition-transform">{plat.name}</div>
                                    <div className="text-[9px] text-white/30 uppercase tracking-widest leading-tight group-hover:text-white/80">{plat.desc}</div>
                                </div>
                            </AnimateOnScroll>
                        ))}
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
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-8 italic">
                        Vamos tirar sua ideia do papel?
                    </h2>
                    <a href="/chatbot-placeholder" className="btn-budget mx-auto">
                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                        Solicitar Orçamento Agora
                    </a>
                </AnimateOnScroll>
            </section>
        </div>
    );
};

export default SiteServicePage;
