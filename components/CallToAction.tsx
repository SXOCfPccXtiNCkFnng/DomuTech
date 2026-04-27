
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { WhatsAppIcon, LightningBoltIcon } from './icons';

interface CallToActionProps {
    title: string;
    subtitle: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    variant?: 'whatsapp' | 'budget';
}

const CallToAction: React.FC<CallToActionProps> = ({ title, subtitle, primaryButtonText, primaryButtonLink, variant = 'whatsapp' }) => {
    return (
        <section className="py-16 bg-[var(--domu-bg)]">
            <div className="container mx-auto px-4">
                <AnimateOnScroll>
                    <div className="relative bg-[var(--domu-surface-1)] p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10">
                        <div className="relative z-10 grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
                            <div className="text-center lg:text-left">
                                <h2 className="h2-domu text-gradient mb-6 md:mb-8">
                                    {title}
                                </h2>
                                <p className="text-[#a1a1a1] text-base md:text-lg font-medium leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0">
                                    {subtitle}
                                </p>
                            </div>
                            
                            <div className="flex flex-col items-center lg:items-end">
                                <a 
                                    href={primaryButtonLink} 
                                    target={variant === 'whatsapp' ? "_blank" : undefined}
                                    rel={variant === 'whatsapp' ? "noopener noreferrer" : undefined}
                                    className={`${variant === 'whatsapp' ? 'btn-whatsapp' : 'btn-budget'} w-full md:w-auto`}
                                >
                                    {variant === 'whatsapp' ? (
                                        <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 fill-current transition-transform" />
                                    ) : (
                                        <LightningBoltIcon className="w-5 h-5 md:w-6 md:h-6 fill-current transition-transform" />
                                    )}
                                    {primaryButtonText}
                                </a>
                                <span className="mt-4 md:mt-6 text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-center">
                                    {variant === 'whatsapp' ? 'Resposta média em menos de 15 minutos' : 'Orçamento rápido e sem compromisso'}
                                </span>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}

export default CallToAction;