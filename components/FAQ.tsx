import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AltArrowDownIcon } from './icons';
import { FAQ_DATA } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';

const FAQ: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    const midPoint = Math.ceil(FAQ_DATA.length / 2);
    const firstCol = FAQ_DATA.slice(0, midPoint);
    const secondCol = FAQ_DATA.slice(midPoint);

    const toggle = (id: string) => {
        setOpenId((current) => (current === id ? null : id));
    };

    return (
        <section id="faq" className="bloom-faq">
            <div className="bloom-faq__inner">
                <AnimateOnScroll from="left">
                    <div className="bloom-faq__head">
                        <div>
                            <p className="bloom-band__label">Dúvidas</p>
                            <span className="bloom-band__index">05</span>
                        </div>
                        <AnimateOnScroll from="right" delay={90}>
                            <h2 className="bloom-faq__title">
                                Perguntas frequentes antes de começar com a Domu.
                            </h2>
                        </AnimateOnScroll>
                    </div>
                </AnimateOnScroll>

                <div className="bloom-faq__grid">
                    <div className="bloom-faq__col">
                        {firstCol.map((item, i) => {
                            const id = `faq-${i}`;
                            return (
                                <AnimateOnScroll key={id} from="left" delay={i * 55}>
                                    <FAQItem
                                        id={id}
                                        question={item.question}
                                        answer={item.answer}
                                        isOpen={openId === id}
                                        onToggle={toggle}
                                    />
                                </AnimateOnScroll>
                            );
                        })}
                    </div>
                    <div className="bloom-faq__col">
                        {secondCol.map((item, i) => {
                            const id = `faq-${midPoint + i}`;
                            return (
                                <AnimateOnScroll key={id} from="right" delay={i * 55}>
                                    <FAQItem
                                        id={id}
                                        question={item.question}
                                        answer={item.answer}
                                        isOpen={openId === id}
                                        onToggle={toggle}
                                    />
                                </AnimateOnScroll>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQItem: React.FC<{
    id: string;
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: (id: string) => void;
}> = ({ id, question, answer, isOpen, onToggle }) => (
    <div className={`bloom-faq__item${isOpen ? ' is-open' : ''}`}>
        <button type="button" onClick={() => onToggle(id)} aria-expanded={isOpen}>
            <span>{question}</span>
            <span className="bloom-faq__chevron" aria-hidden>
                <AltArrowDownIcon />
            </span>
        </button>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="bloom-faq__answer"
                >
                    <p>{answer}</p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

export default FAQ;
