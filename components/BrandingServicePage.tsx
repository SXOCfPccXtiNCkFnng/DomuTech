import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import CallToAction from './CallToAction';
import ReliableAgency from './ReliableAgency';
import Pricing from './Pricing';
import Process from './Process';
import { ArrowUpRightIcon, ArrowRightIcon, PaletteIcon, CheckIcon } from './icons';

const BRANDING_THEME_COLOR = '#ec4899'; // Rosa Vexel Branding

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
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
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

            {/* Design Value Section */}
            <section className="py-20 bg-[var(--domu-black)] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimateOnScroll>
                            <span className="text-[var(--domu-muted)] font-black text-xxs uppercase tracking-[0.3em] mb-4 block">
                                DESIGN COM PROPÓSITO
                            </span>
                            <h2 className="h2-domu text-white mb-8">
                                O design é o seu vendedor mais silencioso
                            </h2>
                            <p className="text-[var(--domu-muted)] text-lg leading-relaxed mb-10">
                                Uma marca forte reduz o custo de aquisição e permite que você cobre mais caro pelo seu serviço. Nós unimos estética premium com usabilidade de ponta.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    { title: "Naming & Logo", desc: "Nomes e marcas que grudam na mente." },
                                    { title: "UX/UI Design", desc: "Interfaces que encantam e convertem." },
                                    { title: "Brandbook", desc: "Guia completo de tom e voz da marca." },
                                    { title: "Social Design", desc: "Presença digital consistente e imponente." }
                                ].map((item, i) => (
                                    <div key={i} className="group">
                                        <h4 className="text-white font-black  tracking-tighter mb-2 group-hover:text-[var(--domu-accent)] transition-colors">{item.title}</h4>
                                        <p className="text-white/40 text-sm leading-snug">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={300}>
                             <div className="relative aspect-square">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--domu-accent)]/20 to-transparent rounded-full blur-3xl"></div>
                                <div className="relative h-full flex flex-col items-center justify-center p-12 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
                                    <PaletteIcon className="w-24 h-24 text-white mb-6" />
                                    <div className="text-center">
                                        <span className="block text-4xl font-black text-white mb-2 italic">Estética</span>
                                        <span className="block text-white/40 font-black tracking-[0.5em] text-xxs uppercase">Meets Performance</span>\n                                    </div>
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
