import React from 'react';
import { ChevronDownDoubleIcon, WhatsAppIcon } from './icons';

const Hero: React.FC = () => {
    const whatsappLink = `https://wa.me/5511934430659?text=${encodeURIComponent('Olá! Quero transformar minha visão em realidade com a VexelTech.')}`;
    return (
        <section 
            id="home" 
            className="relative text-white h-screen flex items-center py-20 overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/img/img-hero.png')" }}
        >
            <div className="absolute inset-0 bg-neutral-900/30"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="max-w-2xl">
                        <h1 
                            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight opacity-0 animate-fade-in-up"
                            style={{ animationDelay: '200ms' }}
                        >
                            Sua <span className="text-violet-400">visão em código</span>, nosso <span className="text-violet-400">resultado em números</span>
                        </h1>
                        <p 
                            className="text-sm xs:text-base md:text-lg text-slate-300 mb-8 opacity-0 animate-fade-in-up"
                            style={{ animationDelay: '400ms' }}
                        >
                            Combinamos criatividade estratégica, design inovador e tecnologia de ponta para transformar sua presença digital em lucro real e crescimento mensurável.
                        </p>
                        <div 
                            className="flex opacity-0 animate-fade-in-up"
                            style={{ animationDelay: '600ms' }}
                        >
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-violet-500 to-purple-600 text-white font-normal px-4 sm:px-6 py-2.5 rounded-none shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-violet-600 hover:to-purple-700 flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wide" style={{clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 100%, 0 100%)'}}>
                                <img src="/img/whatsapp-logo.png" alt="WhatsApp" className="w-5 h-5" decoding="async" /> <span className="hidden xs:inline">Quero crescer meu negócio online</span><span className="xs:hidden">Começar Agora</span>
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:flex justify-center items-center opacity-0 animate-fade-in-up mt-20" style={{ animationDelay: '800ms' }}>
                        <img 
                            src="/img/img-astro.png" 
                            alt="Astronauta" 
                            className="max-w-2x1 w-full animate-float drop-shadow-2xl"
                            loading="eager"
                            decoding="async"
                            fetchpriority="high"
                        />
                    </div>
                </div>
            </div>
            <a 
                href="#services" 
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-fade-in-up"
                style={{ animationDelay: '1000ms' }}
                aria-label="Rolar para a próxima seção"
            >
                <ChevronDownDoubleIcon className="w-10 h-10 text-white/70 animate-bounce-subtle" />
            </a>
            
            {/* Smooth transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-slate-300/30 to-slate-300 dark:from-transparent dark:via-neutral-900/40 dark:to-neutral-950 pointer-events-none"></div>
        </section>
    );
};

export default Hero;