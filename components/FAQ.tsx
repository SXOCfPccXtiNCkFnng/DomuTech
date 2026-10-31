import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from '@phosphor-icons/react';
import Reveal from './Reveal';
import type { FAQItem } from '../types';

type FAQProps = {
    items: FAQItem[];
    index?: string;
};

const FAQ: React.FC<FAQProps> = ({ items, index }) => {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="section" id="duvidas">
            <div className="container faq">
                <Reveal className="faq__side">
                    <p className="label">{index ? `${index} — ` : ''}Dúvidas frequentes</p>
                    <h2 className="title">Perguntas que sempre chegam pra gente.</h2>
                </Reveal>

                <div className="faq__list">
                    {items.map((item, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={item.question} className={`faq__item${isOpen ? ' is-open' : ''}`}>
                                <button
                                    type="button"
                                    className="faq__question"
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                >
                                    {item.question}
                                    <PlusIcon aria-hidden />
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                                            className="faq__answer"
                                        >
                                            <p>{item.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
