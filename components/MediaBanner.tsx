import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightSolar } from './icons';
import AnimateOnScroll from './AnimateOnScroll';
import { HERO_POSTER } from './hero-media';
import { HOME_SECTION, homeSectionIndex } from '../constants';

/** Painel Bloom: imagem full + texto central + CTA. */
const MediaBanner: React.FC = () => {
    return (
        <section id="convite" className="bloom-media" aria-label="Convite Domu Studio">
            <div className="bloom-media__inner">
                <AnimateOnScroll from="tilt">
                    <div className="bloom-media__frame">
                        <img
                            className="bloom-media__img"
                            src={HERO_POSTER}
                            alt=""
                            decoding="async"
                        />
                        <div className="bloom-media__shade" aria-hidden />
                        <div className="bloom-media__meta">
                            <p className="bloom-band__label">Contato</p>
                            <span className="bloom-band__index">
                                {homeSectionIndex(HOME_SECTION.convite)}
                            </span>
                        </div>
                        <div className="bloom-media__content">
                            <AnimateOnScroll from="up" delay={180}>
                                <h2 className="bloom-media__title">
                                    Mais de 100 marcas prontas pra presença com direção.
                                    Comece hoje com a Domu.
                                </h2>
                            </AnimateOnScroll>
                            <AnimateOnScroll from="scale" delay={320}>
                                <Link to="/login" className="bloom-media__cta">
                                    <span className="bloom-media__cta-icon" aria-hidden>
                                        <ArrowRightSolar />
                                    </span>
                                    Falar com a Domu
                                </Link>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default MediaBanner;
