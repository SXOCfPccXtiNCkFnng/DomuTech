import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { ArrowUpRightIcon } from './icons';

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="on-dark relative overflow-hidden border-t border-white/[0.06]"
        >
            {/* Atmosphere - same blue tone as hero */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute top-[10%] left-[-12%] w-[520px] h-[520px] rounded-full bg-[var(--domu-accent)] opacity-15 blur-[150px]" />
                <div className="absolute bottom-[-10%] right-[-8%] w-[560px] h-[560px] rounded-full bg-[var(--domu-accent)] opacity-12 blur-[160px]" />
                <img
                    src="/Vector.png"
                    alt=""
                    className="absolute top-1/2 -translate-y-1/2 right-[-8%] w-[420px] opacity-[0.06] object-contain"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 py-20 md:py-28 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 xl:gap-32 items-center">
                    <AnimateOnScroll delay={180} className="order-2 lg:order-1">
                        <div className="relative flex items-center justify-center min-h-[280px] lg:pr-6">
                            <div
                                className="absolute w-[75%] aspect-square rounded-full bg-[var(--domu-accent)] opacity-20 blur-[120px]"
                                aria-hidden
                            />
                            <img
                                src="/logos/img-solucao.png?v=6"
                                alt="Painel e soluções digitais Domu Tech"
                                className="relative z-10 w-full max-w-[560px] h-auto"
                                loading="lazy"
                            />
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll className="order-1 lg:order-2">
                        <div className="max-w-[34rem] mx-auto lg:mx-0 text-center lg:text-left lg:pl-4 xl:pl-8">
                            <p className="tag-domu !text-white/40 mb-5">
                                Domu Tech
                            </p>

                            <h2 className="display-domu !text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] !leading-[1.12] !text-white mb-5">
                                Autonomia digital
                                <br />
                                <span className="text-[var(--domu-accent)]">sem complexidade</span>
                            </h2>

                            <p className="lead-domu !text-white/60 mb-8">
                                Ecossistemas sob medida para você controlar sites, dados e operação
                                em tempo real - com performance e clareza do primeiro dia.
                            </p>

                            <a
                                href="/chatbot-placeholder"
                                className="btn-budget group !text-white inline-flex"
                            >
                                <ArrowUpRightIcon className="w-4 h-4" />
                                Peça um orçamento
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

export default About;
