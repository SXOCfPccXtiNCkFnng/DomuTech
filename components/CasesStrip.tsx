import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import { PORTFOLIO_PROJECTS, PH } from '../constants';

const CARD_FROM = ['up-left', 'up', 'up-right'] as const;

/** Grade simples de cases — sem carrossel. */
const CasesStrip: React.FC = () => {
    const cases = PORTFOLIO_PROJECTS.slice(0, 3);

    return (
        <section id="cases-home" className="bloom-cases">
            <div className="bloom-cases__inner">
                <AnimateOnScroll from="left">
                    <div className="bloom-cases__head">
                        <div>
                            <p className="bloom-band__label">Cases</p>
                            <span className="bloom-band__index">03</span>
                        </div>
                        <AnimateOnScroll from="right" delay={90}>
                            <h2 className="bloom-cases__title">
                                Trabalhos com direção clara — sem ruído visual.
                            </h2>
                        </AnimateOnScroll>
                    </div>
                </AnimateOnScroll>

                <div className="bloom-cases__grid">
                    {cases.map((item, index) => (
                        <AnimateOnScroll
                            key={item.title}
                            from={CARD_FROM[index]}
                            delay={index * 100}
                        >
                            <article className="bloom-cases__card">
                                <div className="bloom-cases__thumb">
                                    <img src={item.image} alt="" />
                                    <span>{String(index + 1).padStart(2, '0')}</span>
                                </div>
                                <p className="bloom-cases__tag">{item.tag}</p>
                                <h3 className="bloom-cases__name">{item.title}</h3>
                                <p className="bloom-cases__desc">{item.description}</p>
                            </article>
                        </AnimateOnScroll>
                    ))}
                </div>

                <AnimateOnScroll from="up" delay={180}>
                    <div className="bloom-cases__foot">
                        <Link to="/cases" className="btn-budget">
                            {PH.button}
                        </Link>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default CasesStrip;
