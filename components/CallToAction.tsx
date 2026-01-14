
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { WhatsAppIcon } from './icons';

interface CallToActionProps {
    title: string;
    subtitle: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, subtitle, primaryButtonText, primaryButtonLink, secondaryButtonText, secondaryButtonLink }) => {
    const whatsappLink = `https://wa.me/5511934430659?text=${encodeURIComponent(`Olá! Tenho interesse: ${title}`)}`;
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <AnimateOnScroll>
                    <div className="max-w-4xl mx-auto text-center bg-slate-100 dark:bg-gradient-to-br dark:from-neutral-900 dark:to-slate-900 p-10 rounded-2xl shadow-lg border border-transparent dark:border-slate-800">
                        <h2 className="text-3xl font-extrabold text-slate-800 dark:text-slate-200 mb-4">{title}</h2>
                        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 mb-8">{subtitle}</p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gradient-to-r from-violet-500 to-purple-600 text-white font-normal px-8 py-2 rounded-none shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-violet-600 hover:to-purple-700 inline-flex items-center justify-center gap-2 uppercase tracking-wide" style={{clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 100%, 0 100%)'}}>
                                <img src="/img/whatsapp-logo.png" alt="WhatsApp" className="w-6 h-6" decoding="async" />
                                {primaryButtonText}
                            </a>
                            {secondaryButtonText && secondaryButtonLink && (
                                 <a href={secondaryButtonLink} className="w-full sm:w-auto border-2 border-teal-400 text-teal-400 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:text-white font-semibold px-8 py-2 rounded-none transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30 inline-flex items-center justify-center" style={{clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 100%, 0 100%)'}}>
                                    {secondaryButtonText}
                                </a>
                            )}
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}

export default CallToAction;