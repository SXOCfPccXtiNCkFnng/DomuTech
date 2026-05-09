import React, { useEffect } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { ExternalLinkIcon, ArrowUpRightIcon } from './icons';

const CASES = [
    { title: "KaBuM!", category: "E-commerce / Performance", img: "/img/fundo-web.png", link: "#" },
    { title: "Flow Games", category: "Plataforma Web", img: "/img/fundo-web.png", link: "#" },
    { title: "Unimed", category: "Sistema de Gestão", img: "/img/fundo-web.png", link: "#" },
    { title: "Asksuite", category: "Automação de IA", img: "/img/fundo-web.png", link: "#" },
    { title: "Controller BMS", category: "Dashboard BI", img: "/img/fundo-web.png", link: "#" },
    { title: "Confirp", category: "Portal Institucional", img: "/img/fundo-web.png", link: "#" },
];

const CasesPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--domu-bg)] font-sans text-white selection:bg-[var(--domu-accent)]">
            {/* Header */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6">
                    <AnimateOnScroll>
                        <span className="text-[var(--domu-muted)] font-black text-[11px] uppercase tracking-[0.4em] mb-6 block">
                            Projetos de Alta Performance
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic">
                            Nossos <span className="text-gradient">Cases de Sucesso</span>
                        </h1>
                        <p className="text-[var(--domu-muted)] text-lg max-w-2xl leading-relaxed">
                            Trabalhos desenvolvidos com foco em tecnologia de ponta e resultados mensuráveis. Explore nossa expertise.
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Grid de Cases */}
            <section className="pb-32">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {CASES.map((item, i) => (
                            <AnimateOnScroll key={i} delay={i * 100}>
                                <a 
                                    href={item.link} 
                                    className="group relative block aspect-[16/10] overflow-hidden rounded-[32px] border border-white/10 bg-[var(--domu-black)]"
                                >
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="h-full w-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--domu-bg)] via-transparent to-transparent opacity-80"></div>
                                    
                                    <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                                        <div>
                                            <span className="text-[var(--domu-accent)] font-black text-[10px] uppercase tracking-[0.2em] mb-2 block">{item.category}</span>
                                            <h3 className="text-2xl md:text-3xl font-black uppercase italic">{item.title}</h3>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md group-hover:bg-[var(--domu-accent)] group-hover:border-[var(--domu-accent)] transition-all duration-300">
                                            <ExternalLinkIcon className="w-5 h-5" />
                                        </div>
                                    </div>
                                </a>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[var(--domu-black)] text-center">
                <AnimateOnScroll>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-10 uppercase italic">
                        Seu projeto pode ser o próximo!
                    </h2>
                    <a href="/chatbot-placeholder" className="btn-budget mx-auto">
                        <ArrowUpRightIcon className="w-5 h-5" />
                        Iniciar meu Projeto
                    </a>
                </AnimateOnScroll>
            </section>
        </div>
    );
};

export default CasesPage;
