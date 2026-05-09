
import React from 'react';
import { MAIN_SERVICES } from '../constants';
import { ArrowRightIcon, WhatsAppIcon, ArrowUpRightIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-10 md:py-16 bg-[var(--domu-bg)] relative overflow-hidden">
            {/* Background pattern similar to Domu tech */}
            <div className="absolute top-0 left-0 w-full h-[30%] bg-[var(--domu-black)]"></div>
            
            {/* Branding Ghosts Constellation - Forced to Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06] z-0">
                <img src="/logos/logobranca.png" className="absolute top-[20%] right-0 w-64 h-64 animate-spin-slow" style={{ animationDuration: '60s' }} alt="" />
                <img src="/logos/logobranca.png" className="absolute bottom-[10%] left-[5%] w-32 h-32 animate-float" alt="" />
                <img src="/logos/logobranca.png" className="absolute top-[60%] right-[15%] w-20 h-20 animate-float-delayed" alt="" />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <AnimateOnScroll>
                    <div className="text-center mb-24 text-white">
                        <span className="text-[var(--domu-muted)] font-black text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-6 block">
                            EXCELÊNCIA EM PERFORMANCE
                        </span>
                        <h2 className="h2-domu text-gradient mb-8">
                            NOSSOS SERVIÇOS
                        </h2>

                        <p className="max-w-2xl mx-auto text-white/50 font-medium text-lg leading-relaxed">
                            Desenvolvemos ecossistemas digitais de alta performance.<br />
                            Design exclusivo unido à tecnologia de ponta.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {MAIN_SERVICES.map((service, index) => (
                        <AnimateOnScroll key={service.title} delay={index * 100}>
                            <div className="group bg-[var(--domu-surface-1)] p-10 rounded-lg shadow-[0_30px_80px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all duration-500 border border-white/10 flex flex-col h-full transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center p-4 mb-8 group-hover:scale-110 transition-transform">
                                    <service.icon className="w-full h-full text-white" />
                                </div>
                                
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
                                    {service.title}
                                </h3>
                                
                                <p className="text-[var(--domu-muted)] text-sm leading-relaxed mb-8 flex-grow font-medium">
                                    {service.description}
                                </p>

                                <div className="pt-6 border-t border-white/10 mt-auto">
                                    <a 
                                        href="#contact" 
                                        className="inline-flex items-center gap-3 text-[var(--domu-white)] font-black text-xs uppercase tracking-widest group/link"
                                    >
                                        Saiba mais 
                                        <ArrowRightIcon className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-[var(--domu-muted)] font-bold text-sm uppercase tracking-widest mb-8">
                        PRECISA DE ALGO SOB MEDIDA?
                    </p>
                    <a href="/chatbot-placeholder" className="btn-budget">
                        <ArrowUpRightIcon className="w-5 h-5 fill-current" />
                        Peça um Orçamento
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;