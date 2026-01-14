
import React from 'react';
import { FAQ_DATA } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-24 bg-gradient-to-b from-slate-300 to-slate-200 dark:from-neutral-900/50 dark:to-neutral-950">
            <div className="container mx-auto px-4">
                <AnimateOnScroll>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-200 mb-4">Perguntas Frequentes</h2>
                    </div>
                </AnimateOnScroll>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {FAQ_DATA.map((item, index) => (
                        <AnimateOnScroll key={item.question} delay={index * 100}>
                            <div className="bg-white dark:bg-neutral-900/70 p-6 rounded-lg shadow-md hover:shadow-lg dark:shadow-lg/20 border-l-4 border-violet-500 transition-all duration-300 hover:-translate-y-1 dark:border-violet-500/60 h-full">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{item.question}</h3>
                                <p className="text-slate-700 dark:text-slate-300">{item.answer}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;