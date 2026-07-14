import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MAIN_SERVICES, COMPLEMENTARY_SERVICES, SERVICE_DETAILS } from '../constants';
import { CheckIcon, ArrowRightIcon, StarIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

const ServiceDetail: React.FC = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    const serviceSlug = serviceId?.toLowerCase().replace(/\s+/g, '-');
    const service = MAIN_SERVICES.find(s => 
        s.title.toLowerCase().replace(/\s+/g, '-') === serviceSlug
    );

    const complementaryService = COMPLEMENTARY_SERVICES.find(s => 
        s.title.toLowerCase().replace(/\s+/g, '-') === serviceSlug
    );

    const detailedInfo = SERVICE_DETAILS[serviceSlug || ''];

    if (!service && !complementaryService) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[var(--domu-bg)]">
                <div className="text-center">
                    <h2 className="text-whitexl font-bold text-white dark:text-white mb-4">
                        Serviço não encontrado
                    </h2>
                    <button
                        onClick={() => navigate('/')}
                        className="btn-budget"
                    >
                        Voltar para Home
                    </button>
                </div>
            </div>
        );
    }

    const currentService = service || complementaryService;
    const buildWhatsAppLink = (serviceTitle: string) => {
        const msg = `Olá! Tenho interesse em ${serviceTitle}. Poderiam me enviar um orçamento?`;
        return `https://wa.me/5511934430659?text=${encodeURIComponent(msg)}`;
    };

    return (
        <div className="bg-[var(--domu-bg)] min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-16 overflow-hidden">
                {/* Background image */}
                {service && (
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${service.backgroundImage})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/75 to-black/80"></div>
                    </div>
                )}
                
                <div className="container mx-auto px-4 relative z-10">
                    <button
                        onClick={() => navigate('/')}
                        className="text-white/90 hover:text-white mb-12 flex items-center gap-2 hover:gap-3 transition-all group"
                    >
                        <ArrowRightIcon className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Voltar para Home</span>
                    </button>
                    <AnimateOnScroll>
                        <div className="max-w-4xl">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
                                {currentService && (
                                    <currentService.icon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                                )}
                                <div>
                                    <h1 className="display-domu text-white mb-3 break-words">
                                        {currentService?.title}
                                    </h1>
                                    <div className="h-1.5 w-24 bg-black/50 rounded-full"></div>
                                </div>
                            </div>
                            <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed">
                                {currentService?.description}
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
                {serviceSlug === 'marketing-digital' ? (
                    <div className="absolute bottom-0 left-0 right-0 z-0">
                        <svg
                            className="w-full h-24 sm:h-28 md:h-32"
                            viewBox="0 0 1440 140"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M0,90 L1440,40 L1440,140 L0,140 Z"
                                className="fill-[var(--domu-black)]"
                            />
                            <path
                                d="M0,110 L1440,70 L1440,140 L0,140 Z"
                                className="fill-slate-100/70 dark:fill-neutral-900/40"
                            />
                        </svg>
                    </div>
                ) : serviceSlug === 'registro-de-domínio' ? (
                    <div className="absolute bottom-0 left-0 right-0 z-0">
                        <svg
                            className="w-full h-24 sm:h-28 md:h-32"
                            viewBox="0 0 1440 140"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M0,88 Q360,20 720,88 T1440,88 L1440,140 L0,140 Z"
                                className="fill-[var(--domu-black)]"
                            />
                            <path
                                d="M0,108 Q360,40 720,108 T1440,108 L1440,140 L0,140 Z"
                                className="fill-slate-100/70 dark:fill-neutral-900/40"
                            />
                        </svg>
                    </div>
                ) : serviceSlug === 'tráfego-pago' ? (
                    <div className="absolute bottom-0 left-0 right-0 z-0">
                        <svg
                            className="w-full h-24 sm:h-28 md:h-32"
                            viewBox="0 0 1440 140"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M0,100 C180,60 360,140 540,100 C720,60 900,140 1080,100 C1260,60 1350,90 1440,110 L1440,140 L0,140 Z"
                                className="fill-[var(--domu-black)]"
                            />
                            <path
                                d="M0,118 C180,88 360,140 540,118 C720,96 900,140 1080,118 C1260,96 1350,112 1440,126 L1440,140 L0,140 Z"
                                className="fill-slate-100/70 dark:fill-neutral-900/40"
                            />
                        </svg>
                    </div>
                ) : (
                    <div className="absolute bottom-0 left-0 right-0 z-0">
                        <svg
                            className="w-full h-20 sm:h-24 md:h-28"
                            viewBox="0 0 1440 120"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M0,64 C240,120 480,8 720,64 C960,120 1200,8 1440,64 L1440,120 L0,120 Z"
                                className="fill-slate-50 dark:fill-neutral-950"
                            />
                        </svg>
                    </div>
                )}
            </section>

            {/* Main Content */}
            <section className="py-12 bg-[var(--domu-bg)]">
                <div className="container mx-auto px-4">
                    {/* Detailed Information */}
                    {detailedInfo && (
                        <div className="space-y-16">
                            {/* Why Choose + What's Included */}
                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                <AnimateOnScroll>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white dark:text-white mb-6">
                                            Por que escolher este serviço?
                                        </h2>
                                        <p className="text-base md:text-lg text-[var(--domu-secondary)] leading-relaxed mb-10">
                                            {detailedInfo.whyChoose}
                                        </p>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll delay={200}>
                                    <div>
                                        {service && (
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="rounded-2xl w-full h-auto object-cover"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        )}
                                    </div>
                                </AnimateOnScroll>
                            </div>

                            {/* Benefits */}
                            <AnimateOnScroll>
                                <div>
                                    <div className="text-center mb-12">
                                        <h2 className="h2-domu !text-white mb-4">
                                            Benefícios
                                        </h2>
                                        <p className="text-lg text-[var(--domu-muted)]">
                                            Veja como este serviço pode transformar seu negócio
                                        </p>
                                    </div>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {detailedInfo.benefits.map((benefit, index) => (
                                            <div 
                                                key={index}
                                                className="group bg-[var(--domu-black)] p-8 rounded-2xl border-white/5 hover:border-[var(--domu-accent)] transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                                            >
                                                <div className="bg-gradient-to-br from-[#0047FF] to-[#3366FF] w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                                    <StarIcon className="w-7 h-7 text-white" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white dark:text-white mb-3">
                                                    {benefit.title}
                                                </h3>
                                                <p className="text-[var(--domu-muted)] leading-relaxed">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimateOnScroll>

                            {/* Process */}
                            <AnimateOnScroll>
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-neutral-900 dark:to-black p-10 md:p-16 rounded-3xl relative overflow-hidden">
                                    {/* Background decoration */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--domu-accent)] rounded-full blur-3xl"></div>
                                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--domu-accent)] rounded-full blur-3xl opacity-40"></div>
                                    </div>
                                    
                                    <div className="relative z-10">
                                        <div className="text-center mb-12">
                                            <h2 className="h2-domu !text-white mb-4">
                                                Como funciona nosso processo
                                            </h2>
                                            <p className="text-lg text-white/80">
                                                Do início ao resultado final, acompanhamos cada etapa
                                            </p>
                                        </div>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                            {detailedInfo.process.map((step, index) => (
                                                <div key={index} className="relative">
                                                    <div className="bg-black/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl h-full hover:bg-black/15 transition-all group">
                                                        <div className="bg-gradient-to-br from-[#0047FF] to-[#3366FF] text-white w-14 h-14 rounded-xl flex items-center justify-center font-bold text-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                                            {index + 1}
                                                        </div>
                                                        <h3 className="text-xl font-bold text-white mb-3">
                                                            {step.title}
                                                        </h3>
                                                        <p className="text-white/80 leading-relaxed">
                                                            {step.description}
                                                        </p>
                                                    </div>
                                                    {index < detailedInfo.process.length - 1 && (
                                                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                                                            <ArrowRightIcon className="w-8 h-8 text-white/40" />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    )}

                    {/* CTA Section */}
                    <AnimateOnScroll>
                        <div className="mt-20 relative bg-[var(--domu-surface-1)] p-8 md:p-12 rounded-3xl text-center overflow-hidden shadow-2xl border border-white/10">
                            {/* Background decoration */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--domu-accent)] rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--domu-accent)] rounded-full blur-3xl opacity-40"></div>
                            </div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-3xl font-bold text-white dark:text-white mb-3">
                                    Pronto para começar?
                                </h2>
                                <p className="text-base md:text-lg text-[var(--domu-muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
                                    Entre em contato conosco e receba um orçamento personalizado para o seu projeto.
                                </p>
                                {service && (
                                    <div className="inline-block bg-[var(--domu-black)] border-white/5 rounded-2xl px-6 py-3 mb-6">
                                        <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mb-0.5">A partir de</div>
                                        <div className="text-2xl md:text-3xl text-white dark:text-white font-bold">
                                            {service.price}
                                        </div>
                                    </div>
                                )}
                                <div className="mt-6">
                                    <a 
                                        href={buildWhatsAppLink(currentService?.title || '')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-budget inline-flex items-center gap-2"
                                    >
                                        <img src="/img/whatsapp-logo.png" alt="WhatsApp" className="w-6 h-6" />
                                        Solicitar Orçamento Agora
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
