
import React from 'react';
import { COMPANY_VALUES } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';

const Values: React.FC = () => {
    return (
        <section id="values" className="py-24 bg-gradient-to-b from-slate-200 to-slate-100 dark:from-neutral-950 dark:to-neutral-900/50">
            <div className="container mx-auto px-4">
                <AnimateOnScroll>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-200 mb-4">O Que Nos Move</h2>
                        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 px-4">
                            Nossos valores não são apenas palavras bonitas. São o DNA que guia cada decisão, cada projeto, cada resultado que entregamos aos nossos clientes.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {COMPANY_VALUES.map((value, index) => (
                        <AnimateOnScroll key={value.title} delay={index * 100}>
                            <div className="bg-white dark:bg-neutral-900/70 p-8 rounded-2xl shadow-lg dark:shadow-lg/20 border border-slate-200 dark:border-slate-800/50 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-violet-400/10 h-full">
                                <div className="inline-block bg-violet-100 dark:bg-violet-900/30 p-4 rounded-full mb-6">
                                    <value.icon className="w-10 h-10 text-violet-500 dark:text-violet-400" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">{value.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;