
import React from 'react';
import { PORTFOLIO_PROJECTS } from '../constants';
import { ExternalLinkIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-24 bg-gradient-to-b from-slate-200 to-slate-100 dark:from-neutral-900/50 dark:to-neutral-950">
            <div className="container mx-auto px-4">
                <AnimateOnScroll>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-200 mb-4">Histórias de Sucesso</h2>
                        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-700 dark:text-slate-400 px-4">
                            Veja como transformamos ideias em negócios digitais de alto desempenho. Cada projeto é uma prova de nosso compromisso com excelência e resultados extraordinários.
                        </p>
                    </div>
                </AnimateOnScroll>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PORTFOLIO_PROJECTS.map((project, index) => (
                        <AnimateOnScroll key={project.title} delay={index * 100}>
                            {index === PORTFOLIO_PROJECTS.length - 1 ? (
                                <div className="bg-white dark:bg-neutral-900/70 rounded-2xl shadow-lg dark:shadow-lg/20 border-2 border-violet-500/70 dark:border-violet-500/40 overflow-hidden flex flex-col h-full p-8 text-center">
                                    <h4 className="text-2xl sm:text-3xl font-extrabold text-violet-600 dark:text-violet-400 mb-4">
                                        Curtiu nosso trabalho?
                                    </h4>
                                    <p className="text-slate-700 dark:text-slate-400 mb-8 text-sm sm:text-base">
                                        Entre em contato para tirar dúvidas, receber uma proposta personalizada e iniciar seu projeto conosco.
                                    </p>
                                    <a
                                        href="#contact"
                                        className="mx-auto inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-violet-500 text-violet-600 dark:text-violet-400 font-semibold text-sm sm:text-base hover:bg-violet-500 hover:text-white transition-colors opacity-0 animate-fade-in-up duration-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950"
                                        style={{ animationDelay: '150ms' }}
                                    >
                                        ENTRAR EM CONTATO
                                    </a>
                                </div>
                            ) : (
                                <div className="bg-white dark:bg-neutral-900/70 rounded-2xl shadow-lg dark:shadow-lg/20 border border-slate-300 dark:border-slate-800/50 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-violet-500/10 h-full">
                                    <div className="bg-slate-100 dark:bg-slate-800/50 h-48 flex items-center justify-center">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <span className="text-teal-400 font-semibold text-sm">{project.tag}</span>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-slate-200 my-2">{project.title}</h4>
                                        <p className="text-slate-700 dark:text-slate-400 mb-6 text-sm flex-grow">{project.description}</p>
                                        <div className="flex items-center justify-between mt-auto">
                                            <a
                                                href={project.link ?? '#'}
                                                target={project.link ? '_blank' : undefined}
                                                rel={project.link ? 'noopener noreferrer' : undefined}
                                                className={`font-semibold ${project.link ? 'text-violet-500 hover:text-violet-600 dark:text-violet-400 dark:hover:text-violet-300' : 'text-slate-400 dark:text-slate-600 cursor-not-allowed'}`}
                                                aria-disabled={!project.link}
                                            >
                                                Ver Projeto
                                            </a>
                                            <a
                                                href={project.link ?? '#'}
                                                target={project.link ? '_blank' : undefined}
                                                rel={project.link ? 'noopener noreferrer' : undefined}
                                                className={project.link ? '' : 'pointer-events-none'}
                                                aria-disabled={!project.link}
                                            >
                                                <ExternalLinkIcon className={`w-5 h-5 ${project.link ? 'text-gray-500 hover:text-violet-500' : 'text-slate-400 dark:text-slate-600'}`} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;