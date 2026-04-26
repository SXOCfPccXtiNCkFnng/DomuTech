import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';

const FAQ: React.FC = () => {
    // FAQ_DATA dividido em duas colunas pra match perfeito com DOMO Digital
    const midPoint = Math.ceil(FAQ_DATA.length / 2);
    const firstCol = FAQ_DATA.slice(0, midPoint);
    const secondCol = FAQ_DATA.slice(midPoint);

    return (
        <section id="faq" className="py-10 md:py-16 bg-[var(--domo-bg)]">
            <div className="container mx-auto px-4">
                
                {/* Header Style DOMO Digital */}
                <AnimateOnScroll>
                    <div className="text-center mb-16">
                        <span className="text-[#a1a1a1] font-black text-[10px] md:text-[11px] uppercase tracking-[0.25em] mb-4 block">
                            EMPRESA DE CRIAÇÃO DE SITES
                        </span>
                        <h2 className="h2-domo text-white mb-4">
                            Perguntas Frequentes
                        </h2>
                    </div>
                </AnimateOnScroll>

                {/* Grid de Duas Colunas */}
                <div className="grid lg:grid-cols-2 gap-x-8 max-w-7xl mx-auto">
                    <div className="space-y-4">
                        {firstCol.map((item, i) => (
                            <FAQItem key={i} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                    <div className="space-y-4">
                        {secondCol.map((item, i) => (
                            <FAQItem key={i} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ── Item individual (Accordion) ────────────────────────────────────────── */
const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl group"
        >
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className="text-white font-bold text-[15px] md:text-[16px] leading-snug group-hover:text-white transition-colors pr-8">
                    {question}
                </span>
                
                {/* Icone Chevron Style DOMO Digital */}
                <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} className="w-4 h-4">
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-[#a1a1a1] text-[14px] md:text-[15px] leading-relaxed border-t border-white/5 pt-4 font-medium">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQ;