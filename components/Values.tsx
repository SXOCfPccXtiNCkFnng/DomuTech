import React from 'react';
import { MonitorIcon, SettingsIcon, BoltIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';
import { PH, HOME_SECTION, homeSectionIndex } from '../constants';

const STEPS = [
    {
        title: 'Direção de marca',
        desc: PH.text,
        icon: MonitorIcon,
    },
    {
        title: 'Base pronta pra crescer',
        desc: PH.text,
        icon: SettingsIcon,
    },
    {
        title: 'Entrega com ritmo',
        desc: PH.text,
        icon: BoltIcon,
    },
] as const;

const CARD_FROM = ['up-left', 'up', 'up-right'] as const;

/** Três pilares — cards limpos no fluxo Bloom. */
const Values: React.FC = () => {
    return (
        <section id="pilares" className="bloom-values">
            <div className="bloom-values__inner">
                <AnimateOnScroll from="left">
                    <div className="bloom-values__head">
                        <div>
                            <p className="bloom-band__label">Pilares</p>
                            <span className="bloom-band__index">{homeSectionIndex(HOME_SECTION.pilares)}</span>
                        </div>
                        <AnimateOnScroll from="right" delay={100}>
                            <h2 className="bloom-values__title">
                                Três princípios que guiam cada entrega da Domu Studio.
                            </h2>
                        </AnimateOnScroll>
                    </div>
                </AnimateOnScroll>

                <div className="bloom-values__grid">
                    {STEPS.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <AnimateOnScroll
                                key={step.title}
                                from={CARD_FROM[index]}
                                delay={index * 110}
                            >
                                <article className="bloom-values__card">
                                    <div className="bloom-values__card-top">
                                        <span className="bloom-values__icon" aria-hidden>
                                            <Icon />
                                        </span>
                                        <span className="bloom-values__num">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
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
