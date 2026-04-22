
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAIN_SERVICES, COMPLEMENTARY_SERVICES } from '../constants';
import { CheckIcon, ArrowRightIcon, WhatsAppIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

const Services: React.FC = () => {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState(MAIN_SERVICES[0]);
    const buildWhatsAppLink = (serviceTitle?: string) => {
        const msg = serviceTitle
            ? `Olá! Tenho interesse em ${serviceTitle}. Poderiam me enviar um orçamento?`
            : 'Olá! Tenho interesse em seus serviços. Poderiam me ajudar?';
        return `https://wa.me/5511934430659?text=${encodeURIComponent(msg)}`;
    };

    const handleServiceClick = (service: typeof MAIN_SERVICES[0]) => {
        const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-');
        navigate(`/servico/${serviceSlug}`);
    };

    return (
        <section id="services" className="py-24 bg-gradient-to-b from-slate-300 to-slate-200 dark:from-neutral-950 dark:to-neutral-900/30">
            <div className="container mx-auto px-4">
                <AnimateOnScroll>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-200 mb-4">Soluções que Geram Resultado</h2>
                        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-700 dark:text-slate-400 px-4">
                            Cada serviço é uma oportunidade de transformar seu negócio. Estratégia, design e tecnologia combinados para gerar crescimento real e mensurável.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="relative mb-16">
                    <div className="absolute top-[3rem] left-0 right-0 h-0.5 bg-gradient-to-r from-violet-400 via-violet-500 to-violet-400 z-0"></div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {MAIN_SERVICES.map((service, index) => (
                            <AnimateOnScroll key={service.title} delay={index * 100}>
                                <div 
                                    className={`p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer text-center ${selectedService?.title === service.title ? 'shadow-violet-400/20' : ''}`}
                                    onClick={() => setSelectedService(service)}
                                >
                                    <div className={`p-3 rounded-full w-max mx-auto mb-3 border-2 ${selectedService?.title === service.title ? 'bg-violet-500 border-violet-500 text-white' : 'bg-white dark:bg-slate-800 border-violet-300 text-violet-500 dark:text-violet-400'}`}>
                                        <service.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">{service.title}</h3>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>

                {selectedService && (
                    <AnimateOnScroll>
                        <div className="p-8 rounded-2xl">
                            <div className={`grid ${selectedService.image ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-12 items-center`}>
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-violet-100 dark:bg-violet-900/30 p-3 rounded-lg text-violet-500 dark:text-violet-400">
                                            <selectedService.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200">{selectedService.title}</h3>
                                    </div>
                                    <p className="mb-6 text-slate-700 dark:text-slate-400">{selectedService.description}</p>
                                    <ul className="grid sm:grid-cols-2 gap-4 mb-6">
                                        {selectedService.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
                                                <CheckIcon className="w-5 h-5 text-violet-500" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 py-2">
                                        <div>
                                            <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">{selectedService.price}</div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                            <button
                                                onClick={() => handleServiceClick(selectedService)}
                                                className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 uppercase tracking-wide"
                                            >
                                                Saiba Mais
                                                <ArrowRightIcon className="w-4 h-4" />
                                            </button>
                                            <a
                                                href={buildWhatsAppLink(selectedService.title)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full sm:w-auto px-5 py-2 text-sm font-normal text-white bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg hover:from-violet-600 hover:to-purple-700 transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 uppercase tracking-wide"
                                            >
                                                <img src="/img/whatsapp-logo.png" alt="WhatsApp" className="w-5 h-5" decoding="async" />
                                                <span className="hidden xs:inline">Solicitar proposta personalizada</span><span className="xs:hidden">Orçamento</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {selectedService.image && (
                                    <div>
                                        <img src={selectedService.image} alt={selectedService.title} className="rounded-2xl w-full h-auto object-cover" loading="lazy" decoding="async" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </AnimateOnScroll>
                )}

                <div className="mt-24">
                    <AnimateOnScroll>
                        <h3 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-200 mb-12">Serviços Complementares</h3>
                    </AnimateOnScroll>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {COMPLEMENTARY_SERVICES.map((service, index) => (
                            <AnimateOnScroll key={service.title} delay={index * 100}>
                                <div 
                                    onClick={() => {
                                        const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-');
                                        navigate(`/servico/${serviceSlug}`);
                                    }}
                                    className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg border border-slate-300 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-400/10 h-full cursor-pointer"
                                >
                                    <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg text-teal-500 dark:text-teal-400 w-max mb-6">
                                        <service.icon className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">{service.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.items.map(item => (
                                            <li key={item} className="flex items-center gap-3 text-sm">
                                                <span className="text-teal-500">&#8226;</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;