import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_LINKS, MAIN_SERVICES } from '../constants';
import { CodeIcon, SunIcon, MoonIcon, MenuIcon, XIcon, WhatsAppIcon, ChevronDownIcon } from './icons';

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const servicesRef = useRef<HTMLDivElement | null>(null);
    const whatsappLink = `https://wa.me/5511934430659?text=${encodeURIComponent('Olá! Quero iniciar um projeto com a VexelTech.')}`;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        
        // Check initial scroll position
        handleScroll();
        
        window.addEventListener('scroll', handleScroll);
        
        // Prevent body scroll when menu is open
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'unset'; // cleanup on unmount
        };
    }, [isMenuOpen]);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        
        // Se não estiver na home, navega para home primeiro
        if (window.location.pathname !== '/') {
            navigate('/');
            // Aguarda um momento para a página home carregar, depois faz o scroll
            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) {
                    const header = document.querySelector('header');
                    const headerHeight = header ? header.offsetHeight : 80;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });
                }
            }, 100);
        } else {
            // Se já está na home, apenas faz scroll
            const element = document.querySelector(href);
            if (element) {
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        }
        
        setIsMenuOpen(false);
    };

    const handleServiceClick = (serviceTitle: string) => {
        const serviceSlug = serviceTitle.toLowerCase().replace(/\s+/g, '-');
        navigate(`/servico/${serviceSlug}`);
        setIsServicesOpen(false);
        window.scrollTo(0, 0);
    };

    const handleServicesBlur = (event: React.FocusEvent<HTMLDivElement>) => {
        const nextFocused = event.relatedTarget as Node | null;
        if (servicesRef.current && !servicesRef.current.contains(nextFocused)) {
            setIsServicesOpen(false);
        }
    };

    const isOnHome = location.pathname === '/';

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen || !isOnHome ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <a href="#home" className={`flex items-center gap-2 text-xl font-bold transition-colors ${isScrolled || isMenuOpen || !isOnHome ? 'text-slate-800 dark:text-slate-200' : 'text-white'}`} onClick={(e) => handleNavClick(e, '#home')}>
                        <img src='/logos/logo-roxa.png' className="w-6 h-6 text-violet-500" loading="eager" decoding="async" fetchpriority="high" />
                        <span className="hidden sm:inline">VexelTech</span>
                        <span className="sm:hidden">VexelTech</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            link.name === 'Serviços' ? (
                                <div 
                                    key={link.name}
                                    className="relative group"
                                    ref={servicesRef}
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                    onFocus={() => setIsServicesOpen(true)}
                                    onBlur={handleServicesBlur}
                                >
                                    <a 
                                        href={link.href} 
                                        className={`flex items-center gap-1 transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 ${isScrolled || isMenuOpen || !isOnHome ? 'text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400' : 'text-white hover:text-violet-300'}`}
                                        aria-haspopup="menu"
                                        aria-expanded={isServicesOpen}
                                        onKeyDown={(event) => {
                                            if (event.key === 'Enter' || event.key === ' ') {
                                                event.preventDefault();
                                                setIsServicesOpen(prev => !prev);
                                            }
                                        }}
                                    >
                                        {link.name}
                                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                                    </a>
                                    
                                    {/* Dropdown Menu */}
                                    <div className={`absolute top-full left-0 mt-2 w-64 bg-white dark:bg-neutral-900 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                        {MAIN_SERVICES.map((service, index) => (
                                            <button
                                                key={service.title}
                                                onClick={() => handleServiceClick(service.title)}
                                                className="w-full flex items-center gap-3 px-4 py-3 text-left text-slate-700 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600 dark:hover:text-violet-400 transition-colors border-b border-slate-100 dark:border-slate-800 last:border-b-0"
                                            >
                                                <service.icon className="w-5 h-5 flex-shrink-0" />
                                                <span className="text-sm font-medium">{service.title}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={`relative group transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 ${isScrolled || isMenuOpen || !isOnHome ? 'text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400' : 'text-white hover:text-violet-300'}`}>
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                                </a>
                            )
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        <button onClick={toggleTheme} aria-label="Alternar tema" className={`p-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 ${isScrolled || isMenuOpen || !isOnHome ? 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'}`}>
                            {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
                        </button>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-normal px-5 py-2 rounded-none shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-violet-600 hover:to-purple-700 uppercase tracking-wide" style={{clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 0 100%)'}}>
                            <img src="/img/whatsapp-logo.png" alt="WhatsApp" className="w-6 h-6" decoding="async" />
                            Iniciar Projeto
                        </a>
                                <button className={`md:hidden p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 ${isScrolled || isMenuOpen || !isOnHome ? 'text-slate-800 dark:text-slate-200' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
                           {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 md:hidden ${isMenuOpen ? 'visible' : 'invisible'}`} aria-hidden={!isMenuOpen}>
                <div
                    className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMenuOpen(false)}
                />
                <div
                    className={`absolute right-0 top-0 h-full w-full max-w-sm bg-slate-950 text-white shadow-2xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="relative flex items-center justify-between px-6 py-5 border-b border-white/10">
                        <span className="text-lg font-bold text-white">Menu</span>
                        <button
                            className="p-2 rounded-full text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Fechar menu"
                        >
                            <XIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="relative px-6 py-8 bg-black/80">
                        <nav className="flex flex-col gap-5  rounded-2xl p-6">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-xl font-semibold text-white/90 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleLinkClick}
                            className="mt-10 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-normal px-7 py-2.5 rounded-none shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-violet-600 hover:to-purple-700 inline-flex items-center gap-2 uppercase tracking-wide"
                            style={{clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 0 100%)'}}
                        >
                            <img src="/img/whatsapp-logo.png" alt="WhatsApp" className="w-6 h-6" decoding="async" />
                            Iniciar Projeto
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;