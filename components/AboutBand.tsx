import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { PH, HOME_SECTION, homeSectionIndex } from '../constants';

const STATS = [
    { value: '120+', label: PH.label, desc: PH.text },
    { value: '98%', label: PH.label, desc: PH.text },
    { value: '40+', label: PH.label, desc: PH.text },
] as const;

const STAT_FROM = ['up-left', 'up', 'up-right'] as const;

/** Primeira dobra pós-hero: sobre + 3 números (linha Bloom). */
const AboutBand: React.FC = () => {
    return (
        <section id="sobre-studio" className="bloom-band">
            <div className="bloom-band__inner">
                <AnimateOnScroll from="left">
                    <div className="bloom-band__head">
                        <div>
                            <p className="bloom-band__label">Sobre a Domu</p>
                            <span className="bloom-band__index">{homeSectionIndex(HOME_SECTION.sobre)}</span>
                        </div>
                        <AnimateOnScroll from="right" delay={120}>
                            <h2 className="bloom-band__title">
                                Estúdio digital com direção própria: presença online
                                clara, sem cópia e sem ruído.
                            </h2>
                        </AnimateOnScroll>
                    </div>
                </AnimateOnScroll>

                <div className="bloom-band__stats">
                    {STATS.map((stat, index) => (
                        <AnimateOnScroll
                            key={stat.value}
                            from={STAT_FROM[index]}
                            delay={index * 100}
                        >
                            <article className="bloom-band__stat">
                                <p className="bloom-band__stat-value">{stat.value}</p>
                                <h3 className="bloom-band__stat-label">{stat.label}</h3>
                                <p className="bloom-band__stat-desc">{stat.desc}</p>
                            </article>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutBand;
