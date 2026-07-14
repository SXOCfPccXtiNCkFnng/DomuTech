
import React from 'react';
import { DesktopTower, GearSix, Lightning } from '@phosphor-icons/react';
import AnimateOnScroll from './AnimateOnScroll';
import BrandGhosts from './BrandGhosts';

const STEPS = [
    {
        title: 'Escolha do Projeto',
        desc: 'Definimos se seu negócio precisa de um Site Institucional, Landing Page de alta conversão ou Loja Virtual robusta.',
        icon: DesktopTower,
    },
    {
        title: 'Definição de Recursos',
        desc: 'Escolha as funcionalidades: SEO avançado, Blogs, Multi-idioma, Dashboards Inteligentes e Integrações de Pagamento.',
        icon: GearSix,
    },
    {
        title: 'Início e Execução',
        desc: 'Com briefing estratégico e contrato, nosso squad inicia o design e código para colocar sua visão no ar o quanto antes.',
        icon: Lightning,
    },
] as const;

const Values: React.FC = () => {
    return (
        <section id="values" className="section-domu bg-[var(--domu-bg)] relative overflow-hidden">
            <BrandGhosts variant="spread" />
            <div className="container mx-auto px-4 relative z-10">
                <AnimateOnScroll>
                    <div className="text-center section-head-domu max-w-3xl mx-auto">
                        <span className="tag-domu mb-4 block">
                            Workflow Domu Tech
                        </span>
                        <h2 className="h2-domu text-gradient">
                            Como transformamos<br />
                            sua ideia em realidade
                        </h2>
                    </div>
                </AnimateOnScroll>

                <div className="grid md:grid-cols-3 gap-4 md:gap-5">
                    {STEPS.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <AnimateOnScroll key={step.title} delay={index * 120}>
                                <article className="group relative flex flex-col h-full rounded-2xl bg-[var(--domu-surface-1)] border border-[var(--domu-border)] p-6 md:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--domu-accent)]/40 hover:shadow-[0_28px_50px_-32px_rgba(0,71,255,0.35)]">
                                    <div className="absolute inset-x-0 top-0 h-[3px] bg-[var(--domu-accent)] -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                                    <div className="flex items-center justify-between gap-3 mb-6">
                                        <div className="icon-tile w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                                            <Icon className="w-5 h-5" weight="duotone" />
                                        </div>
                                        <span className="type-eyebrow !text-[var(--domu-accent)]/50 group-hover:!text-[var(--domu-accent)] transition-colors">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <h3 className="type-card-title text-[var(--domu-primary)] mb-2.5 group-hover:text-[var(--domu-accent)] transition-colors duration-300">
                                        {step.title}
                                    </h3>

                                    <p className="type-card-desc">
                                        {step.desc}
                                    </p>
                                </article>
                            </AnimateOnScroll>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Values;
