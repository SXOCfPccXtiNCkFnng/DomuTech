import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import ReliableAgency from './ReliableAgency';
import { ArrowUpRightIcon, ArrowRightIcon } from './icons';

const AboutPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--domu-bg)] font-sans text-white selection:bg-[var(--domu-accent)]">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <AnimateOnScroll>
                        <span className="text-[var(--domu-muted)] font-black text-[11px] uppercase tracking-[0.4em] mb-6 block">
                            Nossa História & Missão
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight uppercase italic">
                            Transformando <br />
                            <span className="text-gradient">Ideias em Impacto Real</span>
                        </h1>
                        <p className="text-[var(--domu-muted)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            A VexelTech nasceu da paixão por engenharia de software e design de alta performance. Somos focados em entregar resultados que escalam negócios.
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Vision & Values */}
            <section className="py-20 bg-[var(--domu-black)]">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[ 
                            { title: "Excelência Técnica", desc: "Código limpo e arquitetura escalável são a base de tudo que fazemos." },
                            { title: "Design Premium", desc: "Acreditamos que a estética é a primeira camada de confiança do cliente." },
                            { title: "Foco no Resultado", desc: "Não entregamos apenas arquivos, entregamos soluções que geram lucro." }
                        ].map((item, i) => (
                            <AnimateOnScroll key={i} delay={i * 200}>
                                <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-[var(--domu-accent)] transition-all group">
                                    <div className="w-12 h-12 bg-[var(--domu-accent)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <ArrowUpRightIcon className="w-6 h-6 text-[var(--domu-accent)]" />
                                    </div>
                                    <h3 className="text-xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
                                    <p className="text-white/40 leading-relaxed">{item.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team/Process Highlight */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimateOnScroll>
                            <h2 className="h2-domu text-white mb-8">
                                POR QUE ESCOLHER A VEXELTECH?
                            </h2>
                            <div className="space-y-6 text-white/60">
                                <p>Combinamos a agilidade de um estúdio boutique com a robustez técnica de uma grande software house.</p>
                                <p>Cada projeto é tratado como único. Não usamos templates prontos; construímos cada linha de código e cada pixel do design para atender aos seus objetivos específicos.</p>
                            </div>
                            <button 
                                onClick={() => navigate('/chatbot-placeholder')}
                                className="btn-budget mt-10"
                            >
                                <ArrowUpRightIcon className="w-5 h-5" />
                                Vamos Conversar?
                            </button>
                        </AnimateOnScroll>
                        
                        <AnimateOnScroll delay={300}>
                            <div className="relative rounded-[40px] overflow-hidden border border-white/10">
                                <img src="/img/fundo-web.png" alt="Processo VexelTech" className="w-full opacity-60" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--domu-bg)] to-transparent"></div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            <ReliableAgency />
        </div>
    );
};

export default AboutPage;
