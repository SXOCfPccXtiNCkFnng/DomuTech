import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import { ArrowRightSolar } from './icons';
import { HERO_POSTER } from './hero-media';
import { PH, HOME_SECTION, homeSectionIndex } from '../constants';

const STATS = [
    { value: '120+', label: 'Projetos' },
    { value: '98%', label: 'Retenção' },
    { value: '5 anos', label: 'No mercado' },
] as const;

/**
 * Painel: texto + CTA + stats de um lado, imagem do outro.
 * Independente do AboutBand (pós-hero).
 */
const ProfileSplit: React.FC = () => {
    return (
        <section id="studio-perfil" className="bloom-profile" aria-label="Domu Studio em destaque">
            <div className="bloom-profile__inner">
                <AnimateOnScroll from="up">
                    <div className="bloom-split">
                        <div className="bloom-split__copy">
                            <div className="bloom-split__meta">
                                <p className="bloom-band__label">Estúdio</p>
                                <span className="bloom-band__index">
                                    {homeSectionIndex(HOME_SECTION.perfil)}
                                </span>
                            </div>

                            <AnimateOnScroll from="left" delay={80}>
                                <h2 className="bloom-split__title">
                                    Domu Studio
                                    <span>Presença digital</span>
                                    <span>com direção própria</span>
                                </h2>
                            </AnimateOnScroll>

                            <AnimateOnScroll from="up" delay={140}>
                                <p className="bloom-split__text">{PH.text}</p>
                            </AnimateOnScroll>

                            <AnimateOnScroll from="up" delay={200}>
                                <Link to="/login" className="bloom-split__cta">
                                    <span className="bloom-split__cta-icon" aria-hidden>
                                        <ArrowRightSolar />
                                    </span>
                                    Falar com a Domu
                                </Link>
                            </AnimateOnScroll>

                            <AnimateOnScroll from="up" delay={260}>
                                <dl className="bloom-split__stats">
                                    {STATS.map((stat) => (
                                        <div key={stat.value} className="bloom-split__stat">
                                            <dt className="bloom-split__stat-value">{stat.value}</dt>
                                            <dd className="bloom-split__stat-label">{stat.label}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </AnimateOnScroll>
                        </div>

                        <AnimateOnScroll from="right" delay={120} className="bloom-split__media-wrap">
                            <div className="bloom-split__media">
                                <img
                                    className="bloom-split__img"
                                    src={HERO_POSTER}
                                    alt="Ambiente de trabalho da Domu Studio"
                                    decoding="async"
                                />
                            </div>
                        </AnimateOnScroll>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default ProfileSplit;
