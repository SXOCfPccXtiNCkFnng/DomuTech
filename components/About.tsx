import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import BrandGhosts from './BrandGhosts';
import { ArrowUpRightIcon } from './icons';
import { PH } from '../constants';

const STEPS = [
    {
        title: PH.title,
        text: PH.text,
    },
    {
        title: PH.title,
        text: PH.text,
    },
    {
        title: PH.title,
        text: PH.text,
    },
    {
        title: PH.title,
        text: PH.text,
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
                            <p>{PH.tag}</p>
                            <h2>{PH.title}</h2>
                            <span>{PH.text}</span>
                        </div>
                    </AnimateOnScroll>

                    <div className="process-flow">
                        {STEPS.map((step, index) => (
                            <AnimateOnScroll key={index} delay={index * 60}>
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
                            <p>{PH.subtitle}</p>
                            <Link to="/login" className="btn-budget group">
                                {PH.button}
                                <ArrowUpRightIcon className="w-4 h-4" />
                            </Link>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

export default About;
