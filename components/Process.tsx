import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const STEPS = [
    {
        number: '01',
        title: 'Imersão & Diagnóstico',
        description: 'Analisamos seus desafios e objetivos para construir uma estratégia personalizada focada em resultados reais.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <path d="M12 11c0 3.517-2.103 6.542-5.11 7.79l1.11 2.21H16v-2l1-1h4v-5h-9z" />
                <path d="M18 7c0-1.105-.895-2-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2z" />
            </svg>
        )
    },
    {
        number: '02',
        title: 'Design & UX',
        description: 'Projetamos experiências intuitivas e interfaces de alto impacto que conectam sua marca ao público certo.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
            </svg>
        )
    },
    {
        number: '03',
        title: 'Engenharia & Implementação',
        description: 'Transformamos o planejamento em soluções robustas e performáticas utilizando as melhores tecnologias do mercado.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
            </svg>
        )
    },
    {
        number: '04',
        title: 'Performance & Escala',
        description: 'Monitoramos, otimizamos e escalamos sua solução para garantir crescimento contínuo e sustentável no digital.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
        )
    }
];

const Process: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-[var(--domu-bg)] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <AnimateOnScroll>
                        <span className="text-white/40 font-black text-[11px] uppercase tracking-[0.3em] mb-4 block">
                            MÉTODO DOMU TECH
                        </span>
                        <h2 className="h2-domu text-white mb-6">
                            COMO TRANSFORMAMOS <br /> DESAFIOS EM RESULTADOS
                        </h2>
                        <p className="text-[#a1a1a1] text-lg">
                            Um fluxo de trabalho inteligente planejado para garantir excelência em cada entrega.
                        </p>
                    </AnimateOnScroll>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Linha conectora (Desktop) */}
                    <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

                    {STEPS.map((step, i) => (
                        <AnimateOnScroll key={i} delay={i * 150}>
                            <div className="relative z-10 group">
                                <div className="mb-8 relative">
                                    <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                        {step.icon}
                                    </div>
                                    <span className="absolute -top-4 -right-2 text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors uppercase italic tracking-tighter">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-[#a1a1a1] leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
