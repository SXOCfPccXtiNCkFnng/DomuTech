
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, ArrowRightIcon, ArrowUpRightIcon, ChevronDownIcon, WhatsAppIcon, GlobeIcon, AutomationIcon, CodeIcon, TargetIcon, PaletteIcon } from './icons';

const SERVICES_LIST = [
    { 
        name: 'Criação de Sites', 
        desc: 'Desenvolvimento de sites institucionais, landing pages e e-commerces de alta conversão.',
        href: '/servico/site-sob-medida',
        icon: GlobeIcon,
        color: 'from-emerald-400 to-teal-500',
        iconColor: 'text-emerald-400',
        hoverBorder: 'group-hover:border-emerald-500/50',
        hoverGlow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
        hoverBg: 'group-hover:bg-emerald-500/10'
    },
    { 
        name: 'IA & Automação', 
        desc: 'Otimize processos e escale seu atendimento com integrações inteligentes de IA e chatbots.',
        href: '/servico/automacao-ia',
        icon: AutomationIcon,
        color: 'from-purple-500 to-pink-400',
        iconColor: 'text-purple-400',
        hoverBorder: 'group-hover:border-purple-500/50',
        hoverGlow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
        hoverBg: 'group-hover:bg-purple-500/10'
    },
    { 
        name: 'Software House', 
        desc: 'Engenharia de software para criação de sistemas robustos, apps e plataformas personalizadas.',
        href: '/servico/software-house',
        icon: CodeIcon,
        color: 'from-blue-500 to-indigo-600',
        iconColor: 'text-blue-400',
        hoverBorder: 'group-hover:border-blue-500/50',
        hoverGlow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
        hoverBg: 'group-hover:bg-blue-500/10'
    },
    { 
        name: 'Tráfego & Performance', 
        desc: 'Estratégias avançadas de tráfego pago (Google e Meta Ads) para maximizar o seu faturamento.',
        href: '/servico/trafego-performance',
        icon: TargetIcon,
        color: 'from-orange-500 to-red-600',
        iconColor: 'text-orange-400',
        hoverBorder: 'group-hover:border-orange-500/50',
        hoverGlow: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]',
        hoverBg: 'group-hover:bg-orange-500/10'
    },
    { 
        name: 'Branding & Design UX', 
        desc: 'Criação de identidades visuais impactantes e interfaces focadas na experiência do usuário (UX/UI).',
        href: '/servico/branding-design',
        icon: PaletteIcon,
        color: 'from-pink-500 to-rose-400',
        iconColor: 'text-pink-400',
        hoverBorder: 'group-hover:border-pink-500/50',
        hoverGlow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]',
        hoverBg: 'group-hover:bg-pink-500/10'
    },
];

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
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
        }, 300); // Aumentado para 300ms para evitar fechamentos acidentais
        setCloseTimeout(timeout);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (closeTimeout) clearTimeout(closeTimeout);
        };
    }, [closeTimeout]);

    return (
        <>

            {/* Main Header */}
            <header 
                className={`sticky top-0 left-0 right-0 z-50 border-b border-white/5 transition-all duration-500 ${isScrolled ? 'bg-[var(--domu-bg)] shadow-2xl py-2' : 'bg-[var(--domu-bg)] py-2'}`}
                style={{ '--domu-accent': '#587f81' } as React.CSSProperties}
            >
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex items-center justify-between h-14 md:h-16">
                        
                        {/* Logo */}
                        <a href="/#home" className="flex items-center gap-3 group relative z-10">
                            <img 
                                src="/logos/logoheaderfooter.png" 
                                alt="DomuTech" 
                                className="h-10 md:h-14 w-auto transition-all duration-500 group-hover:scale-105"
                            />
                        </a>

                        {/* Navigation */}
                        <nav className="hidden min-[1440px]:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 h-full">
                            <a href="/" className="group relative h-full flex items-center overflow-hidden">
                                <span className="text-[var(--domu-muted)] font-black text-[11px] uppercase tracking-[0.1em] group-hover:text-[#587f81] transition-all duration-300">Home</span>
                            </a>
                            
                            {/* Services Dropdown */}
                            <div 
                                className="group h-full flex items-center"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className={`font-black text-[11px] uppercase tracking-[0.1em] transition-all flex items-center gap-1.5 focus:outline-none py-2 ${isServicesOpen ? 'text-[#587f81]' : 'text-[var(--domu-muted)] hover:text-[#587f81]'}`}>
                                    Serviços
                                    <ChevronDownIcon className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-[#587f81]' : ''}`} />
                                </button>

                                {/* Mega Menu Restaurado na Hierarquia */}
                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div 
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                                            exit={{ opacity: 0, y: 0, x: "-50%" }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 w-screen max-w-5xl pt-0 z-[100] px-4"
                                        >
                                            <div className="absolute top-0 left-0 right-0 h-[40px] bg-transparent" />
                                            <div className="bg-[var(--domu-bg)] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden">
                                                <div className="p-10">
                                                    <div className="mb-8">
                                                        <span className="text-white/30 font-black text-[11px] uppercase tracking-[0.25em]">Confira as nossas soluções especializadas:</span>
                                                    </div>
                                                    
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {SERVICES_LIST.map((svc) => (
                                                            <a 
                                                                key={svc.name} 
                                                                href={svc.href}
                                                                className="group relative flex flex-col gap-3 p-6 bg-white/[0.01] border border-white/5 rounded-2xl hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 ease-out overflow-hidden"
                                                            >
                                                                {/* Ghost Icon Background */}
                                                                <div className={`absolute -top-4 -right-4 opacity-[0.07] transform scale-150 rotate-12 ${svc.iconColor}`}>
                                                                    <svc.icon className="w-24 h-24" />
                                                                </div>

                                                                <div className="flex items-center gap-4 relative z-10">
                                                                    <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 ${svc.iconColor}`}>
                                                                        <svc.icon className="w-5 h-5" />
                                                                    </div>
                                                                    <span className={`font-black text-[16px] uppercase tracking-wider ${svc.iconColor}`}>
                                                                        {svc.name}
                                                                    </span>
                                                                </div>
                                                                <p className="text-white/30 font-medium text-[14px] leading-relaxed relative z-10">
                                                                    {svc.desc}
                                                                </p>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <a href="/cases" className="group relative h-full flex items-center overflow-hidden">
                                <span className="text-[var(--domu-muted)] font-black text-[11px] uppercase tracking-[0.1em] group-hover:text-[#587f81] transition-all duration-300">Cases</span>
                            </a>
                            <a href="/sobre" className="group relative h-full flex items-center overflow-hidden">
                                <span className="text-[var(--domu-muted)] font-black text-[11px] uppercase tracking-[0.1em] group-hover:text-[#587f81] transition-all duration-300">Sobre Nós</span>
                            </a>
                            <a href="/chatbot-placeholder" className="group relative h-full flex items-center overflow-hidden">
                                <span className="text-[var(--domu-muted)] font-black text-[11px] uppercase tracking-[0.1em] group-hover:text-[#587f81] transition-all duration-300">Orçamento</span>
                            </a>
                            <a href="/layouts" className="group relative h-full flex items-center ml-2">
                                <span className="relative text-[#587f81] font-black text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 border border-[#587f81]/40 rounded-full hover:bg-[#587f81] hover:text-white transition-all duration-500">
                                    Loja de Layouts
                                </span>
                            </a>
                        </nav>


                        {/* Phone Button */}
                        <div className="hidden min-[1440px]:block relative z-10">
                            <a 
                                href="tel:+5511934430659" 
                                className="btn-whatsapp group overflow-hidden"
                            >
                                <div className="relative flex items-center gap-2">
                                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                                    <span>Falar no WhatsApp</span>
                                </div>
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button 
                            className="min-[1440px]:hidden p-2 -mr-2 flex items-center justify-center" 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Menu"
                        >
                             <MenuIcon className="w-8 h-8 text-white" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-[var(--domu-bg)] z-[100] transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                   <div className="p-6 flex justify-between items-center border-b border-white/5 bg-[var(--domu-bg)]">
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
                                <a href="/" className="text-white font-black text-4xl uppercase tracking-tighter" onClick={() => setIsMenuOpen(false)}>Home</a>
                                <a href="/cases" className="text-white font-black text-4xl uppercase tracking-tighter" onClick={() => setIsMenuOpen(false)}>Cases</a>
                                <a href="/sobre" className="text-white font-black text-4xl uppercase tracking-tighter" onClick={() => setIsMenuOpen(false)}>Sobre Nós</a>
                                <a href="/chatbot-placeholder" className="text-white font-black text-4xl uppercase tracking-tighter" onClick={() => setIsMenuOpen(false)}>Orçamento</a>
                                <a href="/layouts" className="text-[#587f81] font-black text-4xl uppercase tracking-tighter flex items-center gap-4" onClick={() => setIsMenuOpen(false)}>
                                    Loja de Layouts
                                    <span className="w-2 h-2 bg-[#587f81] rounded-full animate-ping" />
                                </a>
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
                                className="w-full btn-budget flex items-center justify-center gap-3"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <ArrowUpRightIcon className="w-5 h-5 fill-current" />
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