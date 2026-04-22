import React, { useEffect, useRef, useState } from 'react';
import { ABOUT_METRICS } from '../constants';
import { CheckIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

const About: React.FC = () => {
    const aboutPoints = [
        'Mais de 50 projetos de sites e automações inteligentes entregues',
        'Especialistas em criação de sites, IA e Automação',
        'Sistemas de Atendimento Inteligente com IA',
        'Integrações personalizadas de alto impacto',
        'Foco total no sucesso e na satisfação do cliente',
        'Metodologia Ágil com entregas pontuais',
        'Suporte contínuo para todos os clientes',
    ];

    return (
        <section id="about" className="py-24 bg-gradient-to-b from-slate-200 to-slate-100 dark:from-neutral-950 dark:to-neutral-900/50">
            <div className="container mx-auto px-4">
                <AnimateOnScroll>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-200 mb-4">Quem Somos</h2>
                        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 dark:text-slate-400 px-4">
                            Somos obsessionados por transformar ideias em negócios digitais de sucesso. Com expertise em estratégia, design e tecnologia, ajudamos empresas a crescerem além do esperado.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-24">
                    <AnimateOnScroll>
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-200 mb-4">Nossa Missão</h3>
                            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-400 mb-6">
                               A VexelTech existe para uma missão simples: transformar sua visão em código que gera lucro. Acreditamos que todo negócio merece uma presença digital estratégica e impactante, capaz de gerar resultados reais e sustentáveis.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {aboutPoints.map(point => (
                                    <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 dark:text-slate-200">
                                        <div className="bg-violet-100 dark:bg-violet-900/30 p-1 rounded-full flex-shrink-0 mt-1">
                                            <CheckIcon className="w-4 h-4 text-violet-500 dark:text-violet-400" />
                                        </div>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={200}>
                        <div className="relative">
                            <img src="/img/img-historia.png" alt="Nossa Equipe" className="rounded-2xl w-full h-auto object-cover" loading="lazy" decoding="async" />
                        </div>
                    </AnimateOnScroll>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {ABOUT_METRICS.map((metric, index) => (
                        <AnimateOnScroll key={metric.label} delay={index * 100}>
                            <MetricItem metric={metric} />
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

// Animated metric item: counts up when comes into view.
const MetricItem: React.FC<{ metric: typeof ABOUT_METRICS[number] }> = ({ metric }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [value, setValue] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    const target = parseInt(metric.value.replace(/\D/g, ''), 10) || 0;
    const suffix = metric.value.replace(/[0-9]/g, '').trim();

    useEffect(() => {
        if (!ref.current || hasAnimated) return;

        const el = ref.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setHasAnimated(true);
                        observer.disconnect();

                        const duration = 1200; // ms
                        const start = performance.now();

                        const step = (now: number) => {
                            const progress = Math.min((now - start) / duration, 1);
                            const current = Math.floor(target * progress);
                            setValue(current);
                            if (progress < 1) requestAnimationFrame(step);
                        };

                        requestAnimationFrame(step);
                    }
                });
            },
            { threshold: 0.4 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, hasAnimated]);

    return (
        <div ref={ref} className="flex flex-col items-center gap-2 py-6">
            <metric.icon className="w-12 h-12 text-violet-500" />
            <p className="text-4xl font-extrabold text-slate-900 dark:text-slate-200">
                {hasAnimated ? value : 0}
                {suffix}
            </p>
            <p className="text-slate-700 dark:text-slate-400 text-sm md:text-base">{metric.label}</p>
        </div>
    );
};