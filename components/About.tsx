import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import BrandGhosts from './BrandGhosts';
import { ArrowUpRightIcon } from './icons';

const STEPS = [
    {
        title: 'Descoberta',
        text: 'Entendemos seu negócio e definimos o desafio central.',
    },
    {
        title: 'Direção',
        text: 'Organizamos prioridades, escopo e o plano de ação.',
    },
    {
        title: 'Construção',
        text: 'Design e tecnologia dão forma à solução.',
    },
    {
        title: 'Evolução',
        text: 'Lançamos, medimos resultados e seguimos evoluindo.',
    },
] as const;

const About: React.FC = () => {
    return (
        <section id="about" className="about-pro relative overflow-hidden">
            <BrandGhosts variant="corners" opacity={0.05} />
            <div className="mx-auto w-full max-w-[92rem] page-pad-x relative z-10 py-8 md:py-12 lg:py-14">
                <div className="process-pro-card">
                    <BrandGhosts variant="spread" opacity={0.05} className="process-pro-card__ghosts" />

                    <AnimateOnScroll>
                        <div className="process-pro-card__header">
                            <p>Nosso método</p>
                            <h2>Da primeira conversa ao resultado.</h2>
                            <span>
                                Um caminho objetivo, com decisões claras em cada etapa.
                            </span>
                        </div>
                    </AnimateOnScroll>

                    <div className="process-flow">
                        {STEPS.map((step, index) => (
                            <AnimateOnScroll key={step.title} delay={index * 60}>
                                <div className={`process-flow__item ${index % 2 === 0 ? 'is-left' : 'is-right'}`}>
                                    <div className="process-flow__card">
                                        <div className="process-flow__card-top">
                                            <span className="process-flow__number">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <h3>{step.title}</h3>
                                        </div>
                                        <p>{step.text}</p>
                                    </div>
                                    <span className="process-flow__dot" aria-hidden />
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>

                    <AnimateOnScroll delay={220}>
                        <div className="process-pro-card__footer">
                            <p>Tem um desafio em mente?</p>
                            <a href="/chatbot-placeholder" className="btn-budget group">
                                Vamos conversar
                                <ArrowUpRightIcon className="w-4 h-4" />
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

export default About;
