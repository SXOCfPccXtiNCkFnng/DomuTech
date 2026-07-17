import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    House,
    Briefcase,
    FolderSimple,
    UsersThree,
    Storefront,
} from '@phosphor-icons/react';
import {
    MenuIcon,
    XIcon,
    ArrowUpRightIcon,
    ChevronDownIcon,
    WhatsAppIcon,
    GlobeIcon,
    AutomationIcon,
    CodeIcon,
    TargetIcon,
    PaletteIcon,
} from './icons';

const SERVICES_LIST = [
    { name: 'Criação de Sites', href: '/servico/site-sob-medida', icon: GlobeIcon },
    { name: 'Software House', href: '/servico/software-house', icon: CodeIcon },
    { name: 'IA & Automação', href: '/servico/automacao-ia', icon: AutomationIcon },
    { name: 'Tráfego & Performance', href: '/servico/trafego-performance', icon: TargetIcon },
    { name: 'Branding & Design UX', href: '/servico/branding-design', icon: PaletteIcon },
];

const NAV_ITEMS = [
    { name: 'Home', href: '/', icon: House, type: 'link' as const },
    { name: 'Serviços', href: '#services', icon: Briefcase, type: 'services' as const },
    { name: 'Cases', href: '/cases', icon: FolderSimple, type: 'link' as const },
    { name: 'Sobre', href: '/sobre', icon: UsersThree, type: 'link' as const },
];

const Header: React.FC = () => {
    const location = useLocation();
    const headerRef = useRef<HTMLElement>(null);
    const [spacerH, setSpacerH] = useState(68);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [closeTimeout, setCloseTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

    const applyChromeHeight = (h: number) => {
        setSpacerH(h);
        document.documentElement.style.setProperty('--site-chrome-h', `${h}px`);
    };

    const isActive = (href: string) => {
        if (href === '/') return location.pathname === '/';
        return location.pathname === href || location.pathname.startsWith(`${href}/`);
    };
    const servicesActive = location.pathname.startsWith('/servico');

    useEffect(() => {
        localStorage.setItem('domu_theme', 'light');
        document.documentElement.classList.add('light-theme');
        document.documentElement.classList.remove('dark-theme', 'dark');
    }, []);

    const handleMouseEnter = () => {
        if (closeTimeout) {
            clearTimeout(closeTimeout);
            setCloseTimeout(null);
        }
        setIsServicesOpen(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => setIsServicesOpen(false), 280);
        setCloseTimeout(timeout);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 16);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /* Spacer = altura real do header: conteúdo NUNCA fica por baixo do fixed */
    useLayoutEffect(() => {
        const el = headerRef.current;
        if (!el) return;

        const syncSpacer = () => {
            applyChromeHeight(Math.ceil(el.getBoundingClientRect().height));
        };

        syncSpacer();
        const ro = new ResizeObserver(syncSpacer);
        ro.observe(el);
        window.addEventListener('resize', syncSpacer);
        return () => {
            ro.disconnect();
            window.removeEventListener('resize', syncSpacer);
        };
    }, [isScrolled]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        document.body.classList.toggle('mobile-menu-open', isMenuOpen);

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsMenuOpen(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('mobile-menu-open');
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const navIdle = 'header-nav-chip';
    const navActive = 'header-nav-chip is-active';

    const menuBtn = 'bg-[var(--domu-accent)]/12 text-[var(--domu-accent)]';
    const dropIcon = 'text-[var(--domu-accent)]';

    return (
        <>
            <header ref={headerRef} className={`site-header ${isMenuOpen ? 'is-menu-open' : ''}`}>
                <div
                    className={`site-header-bar ${isScrolled ? 'is-scrolled' : ''}`}
                >
                    <div className="site-header-bar__inner mx-auto max-w-[92rem] flex items-center gap-3 md:gap-4 h-16 md:h-[4.25rem]">
                        <Link to="/" className="flex items-center shrink-0 group" aria-label="DomuTech">
                            <img
                                src="/frame-1.png"
                                alt="DOMU TECH"
                                className="site-logo h-11 md:h-[3.1rem] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                            />
                        </Link>

                        <nav className="hidden lg:flex flex-1 items-center justify-center gap-0.5 min-w-0">
                            {NAV_ITEMS.map((item) => {
                                if (item.type === 'services') {
                                    const active = isServicesOpen || servicesActive;
                                    return (
                                        <div
                                            key={item.name}
                                            className="relative"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <button
                                                type="button"
                                                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${
                                                    active ? navActive : navIdle
                                                }`}
                                            >
                                                <span className="header-nav-label text-current">{item.name}</span>
                                                <ChevronDownIcon
                                                    className={`w-3 h-3 opacity-60 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                                                />
                                            </button>

                                            <AnimatePresence>
                                                {isServicesOpen && (
                                                    <motion.div
                                                        onMouseEnter={handleMouseEnter}
                                                        onMouseLeave={handleMouseLeave}
                                                        initial={{ opacity: 0, y: 6, x: '-50%' }}
                                                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                                                        exit={{ opacity: 0, y: 4, x: '-50%' }}
                                                        transition={{ duration: 0.15 }}
                                                        className="absolute top-full left-1/2 pt-2 z-[120]"
                                                    >
                                                        <div className="site-header-dropdown min-w-[16.5rem] rounded-lg border overflow-hidden p-1.5 shadow-[0_12px_32px_-12px_rgba(10,15,24,0.35)]">
                                                            {SERVICES_LIST.map((svc) => (
                                                                <Link
                                                                    key={svc.name}
                                                                    to={svc.href}
                                                                    className="header-drop-item flex items-center gap-2.5 px-3 py-2 rounded-lg whitespace-nowrap"
                                                                >
                                                                    <svc.icon className={`w-3.5 h-3.5 shrink-0 ${dropIcon}`} />
                                                                    <span className="header-nav-label text-current">{svc.name}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                }

                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${
                                            active ? navActive : navIdle
                                        }`}
                                    >
                                        <span className="header-nav-label text-current">{item.name}</span>
                                    </Link>
                                );
                            })}

                            <Link
                                to="/layouts"
                                className={`header-capsule-btn inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${navIdle}`}
                                title="Loja de Layouts"
                            >
                                <span className="header-nav-label text-current">Layouts</span>
                            </Link>
                        </nav>

                        <div className="flex items-center gap-1.5 shrink-0 ml-auto lg:ml-0">
                            <Link
                                to="/chatbot-placeholder"
                                className="header-primary-cta hidden sm:inline-flex"
                            >
                                Fale com a Domu
                                <ArrowUpRightIcon className="w-3.5 h-3.5" />
                            </Link>

                            <button
                                type="button"
                                className={`header-capsule-btn lg:hidden w-11 h-11 flex items-center justify-center rounded-lg ${menuBtn}`}
                                onClick={() => setIsMenuOpen((open) => !open)}
                                aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Empurra o site pra baixo: header fixed fica em cima do spacer, não do Hero */}
            <div className="site-header-spacer" style={{ height: spacerH }} aria-hidden />

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 28 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                        className="mobile-menu-panel fixed inset-0 z-[10050] flex h-[100dvh] flex-col overflow-hidden"
                    >
                        <div className="mobile-menu-panel__header">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} aria-label="Domu Tech">
                                <img src="/frame-1.png" alt="DOMU TECH" className="site-logo h-11 w-auto object-contain" />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(false)}
                                className="mobile-menu-panel__close"
                                aria-label="Fechar menu"
                            >
                                <XIcon className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="mobile-menu-panel__scroll">
                            <div>
                                <p className="mobile-menu-panel__label">Navegação</p>
                                <nav className="mobile-menu-panel__primary">
                                {NAV_ITEMS.filter((i) => i.type === 'link').map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`mobile-menu-panel__nav-item ${isActive(item.href) ? 'is-active' : ''}`}
                                    >
                                        <span className="mobile-menu-panel__nav-icon">
                                            <item.icon className="w-5 h-5" weight="duotone" />
                                        </span>
                                        <span>{item.name}</span>
                                        <ArrowUpRightIcon className="mobile-menu-panel__arrow" />
                                    </Link>
                                ))}
                                <Link
                                    to="/layouts"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`mobile-menu-panel__nav-item ${isActive('/layouts') ? 'is-active' : ''}`}
                                >
                                    <span className="mobile-menu-panel__nav-icon">
                                        <Storefront className="w-5 h-5" weight="duotone" />
                                    </span>
                                    <span>Loja de Layouts</span>
                                    <ArrowUpRightIcon className="mobile-menu-panel__arrow" />
                                </Link>
                                </nav>
                            </div>

                            <div className="mobile-menu-panel__services">
                                <p className="mobile-menu-panel__label">Soluções</p>
                                <div className="mobile-menu-panel__service-grid">
                                    {SERVICES_LIST.map((svc) => (
                                        <Link
                                            key={svc.name}
                                            to={svc.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="mobile-menu-panel__service"
                                        >
                                            <svc.icon className="w-5 h-5" />
                                            <span>{svc.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="mobile-menu-panel__contact">
                                <div>
                                    <p>Pronto para começar?</p>
                                    <span>Conte sua ideia para a nossa equipe.</span>
                                </div>
                                <Link
                                    to="/chatbot-placeholder"
                                    className="btn-budget w-full"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Fale com a Domu
                                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                                </Link>
                                <a
                                    href="https://wa.me/5511934430659"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mobile-menu-panel__whatsapp"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <WhatsAppIcon className="w-4 h-4" />
                                    Conversar no WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
