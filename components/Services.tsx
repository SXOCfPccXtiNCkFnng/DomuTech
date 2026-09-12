import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightSolar, ArrowUpRightSolar } from './icons';
import AnimateOnScroll from './AnimateOnScroll';
import { PH, HOME_SECTION, homeSectionIndex } from '../constants';

const SERVICES = [
    {
        title: 'Sites com identidade',
        text: PH.text,
    },
    {
        title: 'Presença de marca',
        text: PH.text,
    },
    {
        title: 'Automação e fluxos',
        text: PH.text,
    },
    {
        title: 'Layouts prontos',
        text: PH.text,
    },
] as const;

const TAGS = [
    'Sites',
    'Landing pages',
    'E-commerce',
    'Marca',
    'Automação',
    'Layouts',
    '+12',
];

/** Soluções em lista expansível (linha Bloom / Services). */
const Services: React.FC = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="solucoes" className="bloom-services">
            <div className="bloom-services__inner">
                <div className="bloom-services__side">
                    <AnimateOnScroll from="up-left">
                        <p className="bloom-band__label">Soluções</p>
                        <span className="bloom-band__index">{homeSectionIndex(HOME_SECTION.solucoes)}</span>
                    </AnimateOnScroll>
                    <AnimateOnScroll from="up" delay={120}>
                        <Link to="/layouts" className="bloom-services__cta">
                            <span className="bloom-services__cta-icon" aria-hidden>
                                <ArrowRightSolar />
                            </span>
                            Ver todas as soluções
                        </Link>
                    </AnimateOnScroll>
                </div>

                <div className="bloom-services__main">
                    <AnimateOnScroll from="right">
                        <h2 className="bloom-services__title">
                            Encontre o formato certo pra marca lançar e crescer
                            sem parecer genérica.
                        </h2>
                        <div className="bloom-services__tags" aria-label="Temas">
                            {TAGS.map((tag) => (
                                <span key={tag} className="bloom-services__tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </AnimateOnScroll>

                    <ul className="bloom-services__list">
                        {SERVICES.map((service, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <li key={service.title}>
                                    <AnimateOnScroll
                                        from={index % 2 === 0 ? 'left' : 'right'}
                                        delay={index * 70}
                                    >
                                        <button
                                            type="button"
                                            className={`bloom-services__item${isOpen ? ' is-open' : ''}`}
                                            onClick={() => setOpenIndex(index)}
                                            aria-expanded={isOpen}
                                        >
                                            <span className="bloom-services__item-title">
                                                {service.title}
                                            </span>
                                            {isOpen && (
                                                <span className="bloom-services__item-text">
                                                    {service.text}
                                                </span>
                                            )}
                                            <span className="bloom-services__item-arrow" aria-hidden>
                                                <ArrowUpRightSolar />
                                            </span>
                                        </button>
                                    </AnimateOnScroll>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Services;
