
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, ArrowRightIcon, ChevronDownIcon, LightningBoltIcon, WhatsAppIcon } from './icons';

const SERVICES_LIST = [
    { name: 'Site Sob Medida', href: '/servico/site-sob-medida' },
    { name: 'Site WordPress', href: '/servico/wordpress' },
    { name: 'Site Expresso', href: '/servico/expresso' },
    { name: 'Loja Virtual', href: '/servico/ecommerce' },
    { name: 'Consultoria SEO', href: '/servico/seo' },
    { name: 'Chatbot', href: '/chatbot-placeholder' },
    { name: 'Software House', href: '/servico/software-house' },
    { name: 'Aviso de Cookies', href: '/servico/cookies' },
];

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] border-b border-white/5 py-3 relative z-50">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-[11px] md:text-[13px] text-white font-medium tracking-wide text-center">
                    <span className="opacity-80 uppercase tracking-widest font-bold">
                        Seu site está perdendo clientes?
                    </span>
                    <a 
                        href="/chatbot-placeholder" 
                        className="group flex items-center gap-2 text-white hover:text-white transition-all duration-300 relative"
                    >
                        <span className="border-b border-white/30 group-hover:border-white uppercase font-black tracking-tighter">
                            Análise de SEO grátis!
                        </span>
                        <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-white" />
                    </a>
                </div>
            </div>

            {/* Main Header */}
            <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[var(--domo-bg)]/95 backdrop-blur-md shadow-xl py-2 md:py-0' : 'bg-[var(--domo-bg)] py-3 md:py-4'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16 md:h-24">
                        
                        {/* Logo */}
                        <a href="/#home" className="flex items-center gap-3 group">
                            <img 
                                src="/logos/logoheaderfooter.png" 
                                alt="Domo Digital" 
                                className="h-8 md:h-12 w-auto transition-transform group-hover:scale-105"
                            />
                        </a>

                        {/* Navigation */}
                        <nav className="hidden lg:flex items-center gap-8 xl:gap-11">
                            <a href="/#home" className="text-[#a1a1a1] font-bold text-[10.5px] uppercase tracking-[0.18em] hover:text-[#FFFFFF] transition-all">Home</a>
                            
                            {/* Services Dropdown */}
                            <div 
                                className="group relative py-8"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <button className="text-[#a1a1a1] font-bold text-[10.5px] uppercase tracking-[0.18em] hover:text-[#FFFFFF] transition-all flex items-center gap-1">
                                    Serviços
                                    <ChevronDownIcon className={`w-2.5 h-2.5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                {/* Dropdown Menu */}
                                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 origin-top ${isServicesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                                    <div className="py-4">
                                        {SERVICES_LIST.map((svc) => (
                                            <a 
                                                key={svc.name}
                                                href={svc.href}
                                                className="block px-8 py-3 text-white/80 font-black text-[10.5px] uppercase tracking-widest hover:bg-black/10 hover:text-white transition-colors"
                                            >
                                                {svc.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <a href="/#portfolio" className="text-[#a1a1a1] font-bold text-[10.5px] uppercase tracking-[0.18em] hover:text-[#FFFFFF] transition-all">Portfólio</a>
                            <a href="/#pricing" className="text-[#a1a1a1] font-bold text-[10.5px] uppercase tracking-[0.18em] hover:text-[#FFFFFF] transition-all">Preços</a>
                            <a href="/chatbot-placeholder" className="text-[#a1a1a1] font-bold text-[10.5px] uppercase tracking-[0.18em] hover:text-[#FFFFFF] transition-all">Orçamento</a>
                        </nav>

                        {/* Phone Button */}
                        <div className="hidden lg:block">
                            <a 
                                href="tel:+5511934430659" 
                                className="btn-whatsapp !py-2.5 !px-8 !text-[12px]"
                            >
                                <WhatsAppIcon className="w-4 h-4 fill-current" />
                                Falar no WhatsApp
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button 
                            className="lg:hidden p-2 -mr-2 flex items-center justify-center" 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Menu"
                        >
                             <MenuIcon className="w-8 h-8 text-white" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-[#0a0a0a] z-[100] transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                   <div className="p-6 flex justify-between items-center border-b border-white/5 bg-[#0a0a0a]">
                        <div className="flex items-center gap-2">
                             <img src="/logos/logoheaderfooter.png" alt="Domo Digital" className="h-8 w-auto" />
                        </div>
                        <button 
                            onClick={() => setIsMenuOpen(false)}
                            className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full"
                        >
                            <XIcon className="w-6 h-6 text-white" />
                        </button>
                   </div>
                   
                   <div className="flex flex-col gap-8 pt-12 px-8 h-[calc(100vh-80px)] overflow-y-auto pb-20">
                        <div className="flex flex-col gap-4">
                            <span className="text-white/30 font-black text-[10px] uppercase tracking-[0.3em]">Navegação</span>
                            <nav className="flex flex-col gap-4">
                                <a href="/#home" className="text-white font-black text-4xl uppercase tracking-tighter" onClick={() => setIsMenuOpen(false)}>Home</a>
                                <a href="/#portfolio" className="text-white font-black text-4xl uppercase tracking-tighter" onClick={() => setIsMenuOpen(false)}>Portfólio</a>
                                <a href="/#pricing" className="text-white font-black text-4xl uppercase tracking-tighter" onClick={() => setIsMenuOpen(false)}>Preços</a>
                                <a href="/chatbot-placeholder" className="text-white font-black text-4xl uppercase tracking-tighter" onClick={() => setIsMenuOpen(false)}>Orçamento</a>
                            </nav>
                        </div>
                        
                        <div className="flex flex-col gap-4 mt-4">
                            <span className="text-white/30 font-black text-[10px] uppercase tracking-[0.3em]">Nossos Serviços</span>
                            <div className="grid grid-cols-1 gap-2">
                                {SERVICES_LIST.slice(0, 6).map(svc => (
                                    <a 
                                        key={svc.name} 
                                        href={svc.href} 
                                        className="text-white/60 hover:text-white font-bold text-lg uppercase tracking-tight py-1" 
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {svc.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                        <div className="mt-auto pt-8 border-t border-white/5">
                            <a 
                                href="/chatbot-placeholder" 
                                className="w-full btn-budget !py-5 flex items-center justify-center gap-3 text-sm"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <LightningBoltIcon className="w-5 h-5 fill-current" />
                                Solicitar Orçamento
                            </a>
                        </div>
                   </div>
                </div>
            </header>
        </>
    );
};

export default Header;