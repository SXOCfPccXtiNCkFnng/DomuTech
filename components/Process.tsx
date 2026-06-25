import React from 'react';
import { Search, Paintbrush, Code, TrendingUp } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const STEPS = [
    {
        number: '01',
        title: 'Imersão & Diagnóstico',
        description: 'Analisamos seus desafios and objetivos para construir uma estratégia personalizada focada em resultados reais.',
        icon: <Search className="w-6 h-6" strokeWidth={2} />
    },
    {
        number: '02',
        title: 'Design & UX',
        description: 'Projetamos experiências intuitivas e interfaces de alto impacto que conectam sua marca ao público certo.',
        icon: <Paintbrush className="w-6 h-6" strokeWidth={2} />
    },
    {
        number: '03',
        title: 'Engenharia & Implementação',
        description: 'Transformamos o planejamento em soluções robustas e performáticas utilizando as melhores tecnologias do mercado.',
        icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
        number: '04',
        title: 'Performance & Escala',
        description: 'Monitoramos, otimizamos e escalamos sua solução para garantir crescimento contínuo e sustentável no digital.',
        icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />
    }
];

const Process: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-[var(--domu-bg)] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <AnimateOnScroll>
                        <span className="tag-domu mb-4 block">
                            Método Domu Tech
                        </span>
                        <h2 className="h2-domu text-white mb-6">
                            Como transformamos <br /> desafios em resultados
                        </h2>
                        <p className="text-[var(--domu-muted)] text-lg">
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
                                <h3 className="text-white font-black text-xl mb-4 group-hover:text-[var(--domu-accent)] transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-[var(--domu-muted)] leading-relaxed text-sm">
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
