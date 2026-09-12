import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightSolar, StarFillIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';
import { PH } from '../constants';

const REVIEWS = [
    {
        name: 'Ana',
        date: 'Mar 2026',
        text: PH.text,
        tags: ['Site', 'Marca'],
    },
    {
        name: 'Rafael',
        date: 'Fev 2026',
        text: PH.text,
        tags: ['Landing', 'Automação'],
    },
    {
        name: 'Lia',
        date: 'Jan 2026',
        text: PH.text,
        tags: ['E-commerce'],
    },
] as const;

const CARD_FROM = ['up', 'up-right', 'right'] as const;

/** Avaliações no formato Bloom: score + cards. */
const Testimonials: React.FC = () => {
    const [active, setActive] = useState(0);

    return (
        <section id="avaliacoes" className="bloom-reviews">
            <div className="bloom-reviews__inner">
                <AnimateOnScroll from="left">
                    <div className="bloom-reviews__head">
                        <div>
                            <p className="bloom-band__label">Avaliações</p>
                            <span className="bloom-band__index">04</span>
                        </div>
                        <AnimateOnScroll from="right" delay={100}>
                            <h2 className="bloom-reviews__title">
                                Como marcas usam a Domu pra sair do genérico e
                                ganhar presença com direção.
                            </h2>
                        </AnimateOnScroll>
                    </div>
                </AnimateOnScroll>

                <div className="bloom-reviews__row">
                    <AnimateOnScroll from="up-left">
                        <aside className="bloom-reviews__score">
                            <p className="bloom-reviews__score-value">4.9 / 5</p>
                            <p className="bloom-reviews__score-note">
                                Confiança de clientes em projetos reais
                            </p>
                            <Link to="/cases" className="bloom-services__cta bloom-reviews__score-cta">
                                <span className="bloom-services__cta-icon" aria-hidden>
                                    <ArrowRightSolar />
                                </span>
                                Ver cases
                            </Link>
                        </aside>
                    </AnimateOnScroll>

                    {REVIEWS.map((review, index) => (
                        <AnimateOnScroll
                            key={review.name}
                            from={CARD_FROM[index]}
                            delay={(index + 1) * 90}
                        >
                            <article
                                className={`bloom-reviews__card${active === index ? ' is-active' : ''}`}
                                onMouseEnter={() => setActive(index)}
                            >
                                <header className="bloom-reviews__card-head">
                                    <div>
                                        <h3>{review.name}</h3>
                                        <span>{review.date}</span>
                                    </div>
                                    <div className="bloom-reviews__stars" aria-label="5 estrelas">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <StarFillIcon key={i} className="w-4 h-4" />
                                        ))}
                                    </div>
                                </header>
                                <p>“{review.text}”</p>
                                <div className="bloom-reviews__tags">
                                    {review.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </article>
                        </AnimateOnScroll>
                    ))}
                </div>

                <div className="bloom-reviews__dots" role="tablist" aria-label="Avaliações">
                    {REVIEWS.map((review, index) => (
                        <button
                            key={review.name}
                            type="button"
                            role="tab"
                            aria-selected={active === index}
                            className={active === index ? 'is-active' : undefined}
                            onClick={() => setActive(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
