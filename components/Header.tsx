
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, ArrowRightIcon, ArrowUpRightIcon, ChevronDownIcon, LightningBoltIcon, WhatsAppIcon, GlobeIcon, AutomationIcon, CodeIcon, TargetIcon, PaletteIcon } from './icons';

const SERVICES_LIST = [
    { 
        name: 'Criação de Sites', 
        desc: 'Websites de alto padrão e performance',
        href: '/servico/site-sob-medida',
        icon: GlobeIcon,
        color: 'from-blue-500 to-cyan-400',
        iconColor: 'text-blue-400'
    },
    { 
        name: 'IA & Automação', 
        desc: 'Escalabilidade com inteligência artificial',
        href: '/servico/automacao-com-ia',
        icon: AutomationIcon,
        color: 'from-purple-500 to-pink-400',
        iconColor: 'text-purple-400'
    },
    { 
        name: 'Software House', 
        desc: 'Sistemas complexos sob medida',
        href: '/servico/software-house',
        icon: CodeIcon,
        color: 'from-emerald-500 to-teal-400',
        iconColor: 'text-emerald-400'
    },
    { 
        name: 'Tráfego & Performance', 
        desc: 'Gestão de mídia paga focada em ROI',
        href: '/servico/trafego-pago',
        icon: TargetIcon,
        color: 'from-orange-500 to-yellow-400',
        iconColor: 'text-orange-400'
    },
    { 
        name: 'Branding & Design UX', 
        desc: 'Experiências que conectam marcas',
        href: '/servico/experiencia-do-usuario',
        icon: PaletteIcon,
        color: 'from-pink-500 to-rose-400',
        iconColor: 'text-pink-400'
    },
];

const ANNOUNCEMENT_MESSAGES = [
    { text: "Sua empresa está crescendo no digital?", linkText: "Diagnóstico gratuito!", href: "/chatbot-placeholder" },
    { text: "Sites de alta performance e conversão", linkText: "Falar com especialista", href: "https://wa.me/5511934430659" },
    { text: "Transforme visitantes em clientes reais", linkText: "Ver portfólio", href: "/#portfolio" },
    { text: "Soluções inteligentes em IA e Automação", linkText: "Saiba mais", href: "/servico/automacao-com-ia" },
];

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [currentMessage, setCurrentMessage] = useState(0);
    const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (closeTimeout) {
            clearTimeout(closeTimeout);
            setCloseTimeout(null);
        }
        setIsServicesOpen(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsServicesOpen(false);
        }, 200);
        setCloseTimeout(timeout);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        const messageInterval = setInterval(() => {
            setCurrentMessage((prev) => (prev + 1) % ANNOUNCEMENT_MESSAGES.length);
        }, 5000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(messageInterval);
            if (closeTimeout) clearTimeout(closeTimeout);
        };
    }, [closeTimeout]);

    return (
        <>
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-[var(--domu-black)] via-[var(--domu-surface-1)] to-[var(--domu-black)] border-b border-white/5 py-3 relative z-[60] overflow-hidden">
                <div className="container mx-auto px-4 h-5 md:h-6 flex justify-center items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentMessage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-[11px] md:text-[13px] text-white font-medium tracking-wide text-center w-full"
                        >
                            <span className="opacity-80 uppercase tracking-widest font-bold">
                                {ANNOUNCEMENT_MESSAGES[currentMessage].text}
                            </span>
                            <a 
                                href={ANNOUNCEMENT_MESSAGES[currentMessage].href}
                                className="group flex items-center gap-1 text-white hover:text-white transition-all duration-300 relative"
                            >
                                <span className="border-b border-white/30 group-hover:border-white uppercase font-black tracking-tighter">
                                    {ANNOUNCEMENT_MESSAGES[currentMessage].linkText}
                                </span>
                                <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform duration-700 ease-in-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px] text-white" />
                            </a>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Main Header */}
            <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[var(--domu-bg)]/95 backdrop-blur-xl shadow-xl py-2' : 'bg-[var(--domu-bg)] py-4'}`}>
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        
                        {/* Logo */}
                        <a href="/#home" className="flex items-center gap-3 group relative z-10">
                            <img 
                                src="/logos/logoheaderfooter.png" 
                                alt="Domu tech" 
                                className="h-10 md:h-14 w-auto transition-all duration-500 group-hover:scale-105"
                            />
                        </a>

                        {/* Navigation */}
                        <nav className="hidden lg:flex items-center gap-10 xl:gap-14 absolute left-1/2 -translate-x-1/2 h-full">
                            <a href="/#home" className="group relative h-full flex items-center overflow-hidden">
                                <span className="text-[var(--domu-muted)] font-black text-[11px] uppercase tracking-[0.1em] group-hover:text-[var(--domu-white)] transition-all duration-300">Home</span>
                                <span className="absolute bottom-[22px] left-0 w-full h-[2px] bg-white transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </a>
                            
                            {/* Services Dropdown */}
                            <div 
                                className="group relative h-full flex items-center"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="text-[var(--domu-muted)] font-black text-[11px] uppercase tracking-[0.1em] hover:text-[var(--domu-white)] transition-all flex items-center gap-1.5 focus:outline-none py-2">
                                    Serviços
                                    <ChevronDownIcon className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div 
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            initial={{ opacity: 0, y: 15, x: "-50%" }}
                                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                                            exit={{ opacity: 0, y: 15, x: "-50%" }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-[100%] left-1/2 w-[500px] pt-0 z-[100]"
                                        >
                                            <div className="bg-[var(--domu-bg)] backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden">
                                            <div className="grid grid-cols-2 gap-1 p-2">
                                                {SERVICES_LIST.map((svc) => (
                                                    <a 
                                                        key={svc.name}
                                                        href={svc.href}
                                                        className="group flex items-center gap-4 p-4 hover:bg-white/[0.04] rounded-xl transition-all duration-500 ease-out"
                                                    >
                                                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                                                            <svc.icon className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-300" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-white/90 font-black text-[11px] uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                                                                {svc.name}
                                                            </span>
                                                            <span className="text-white/30 font-medium text-[9px] uppercase tracking-widest group-hover:text-white/50 transition-colors duration-300">
                                                                {svc.desc}
                                                            </span>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <a href="/#portfolio" className="group relative h-full flex items-center overflow-hidden">
                                <span className="text-[var(--domu-muted)] font-black text-[11px] uppercase tracking-[0.1em] group-hover:text-[var(--domu-white)] transition-all duration-300">Portfólio</span>
                                <span className="absolute bottom-[22px] left-0 w-full h-[2px] bg-white transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </a>
                            <a href="/chatbot-placeholder" className="group relative h-full flex items-center overflow-hidden">
                                <span className="text-[var(--domu-muted)] font-black text-[11px] uppercase tracking-[0.1em] group-hover:text-[var(--domu-white)] transition-all duration-300">Orçamento</span>
                                <span className="absolute bottom-[22px] left-0 w-full h-[2px] bg-white transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </a>
                        </nav>

                        {/* Phone Button */}
                        <div className="hidden lg:block relative z-10">
                            <a 
                                href="tel:+5511934430659" 
                                className="btn-whatsapp !py-3 !px-7 !text-[11px] !border-white/10 hover:!border-white/40 group overflow-hidden"
                            >
                                <div className="relative flex items-center gap-2">
                                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                                    <span>Falar no WhatsApp</span>
                                </div>
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
                <div className={`fixed inset-0 bg-[var(--domu-black)] z-[100] transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                   <div className="p-6 flex justify-between items-center border-b border-white/5 bg-[var(--domu-black)]">
                        <div className="flex items-center gap-2">
                             <img src="/logos/logoheaderfooter.png" alt="DOMU TECH" className="h-8 w-auto" />
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