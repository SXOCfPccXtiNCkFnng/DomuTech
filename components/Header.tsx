import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    House,
    Briefcase,
    FolderSimple,
    UsersThree,
    Calculator,
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
    SunIcon,
    MoonIcon,
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
    { name: 'Orçamento', href: '/chatbot-placeholder', icon: Calculator, type: 'link' as const },
];

const ANNOUNCE_ITEMS = [
    { text: 'Orçamento sob medida para o seu negócio', cta: 'Pedir orçamento', href: '/chatbot-placeholder' },
    { text: 'Resposta rápida no WhatsApp', cta: 'Falar agora', href: '/chatbot-placeholder' },
    { text: 'Sites, e-commerces e apps sob medida', cta: 'Ver soluções', href: '/#services' },
    { text: 'Comece seu projeto digital hoje', cta: 'Solicitar proposta', href: '/chatbot-placeholder' },
] as const;

const ANNOUNCE_LOOPS = 4;

function buildAnnounceStrip(stripId: string) {
    const items: { text: string; cta: string; href: string; key: string }[] = [];
    for (let loop = 0; loop < ANNOUNCE_LOOPS; loop++) {
        ANNOUNCE_ITEMS.forEach((item, i) => {
            items.push({ ...item, key: `${stripId}-${loop}-${i}` });
        });
    }
    return items;
}

const Header: React.FC = () => {
    const location = useLocation();
    const headerRef = useRef<HTMLElement>(null);
    const [spacerH, setSpacerH] = useState(112);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [closeTimeout, setCloseTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [theme, setTheme] = useState<'dark' | 'light'>('light');

    const applyChromeHeight = (h: number) => {
        setSpacerH(h);
        document.documentElement.style.setProperty('--site-chrome-h', `${h}px`);
    };

    const isActive = (href: string) => {
        if (href === '/') return location.pathname === '/';
        return location.pathname === href || location.pathname.startsWith(`${href}/`);
    };
    const servicesActive = location.pathname.startsWith('/servico');

    const applyTheme = (next: 'dark' | 'light') => {
        setTheme(next);
        localStorage.setItem('domu_theme', next);
        if (next === 'light') {
            document.documentElement.classList.add('light-theme');
            document.documentElement.classList.remove('dark-theme', 'dark');
        } else {
            document.documentElement.classList.add('dark-theme', 'dark');
            document.documentElement.classList.remove('light-theme');
        }
    };

    const toggleTheme = () => applyTheme(theme === 'dark' ? 'light' : 'dark');

    useEffect(() => {
        if (localStorage.getItem('domu_palette') !== 'domu_clean_v2') {
            localStorage.setItem('domu_palette', 'domu_clean_v2');
            localStorage.setItem('domu_theme', 'light');
            localStorage.removeItem('theme');
        }
        applyTheme(localStorage.getItem('domu_theme') === 'dark' ? 'dark' : 'light');
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
        /* Histerese + snap suave: barra colapsa/expande sem loop */
        const HIDE_AT = 80;
        const SHOW_AT = 10;
        const SNAP_ZONE = 64;

        let announceHidden = window.scrollY > HIDE_AT;
        let lastY = window.scrollY;
        let snapping = false;
        let snapTimer: ReturnType<typeof setTimeout> | null = null;

        setIsScrolled(announceHidden);

        const revealAnnounce = () => {
            if (!announceHidden) return;
            announceHidden = false;
            setIsScrolled(false);
        };

        const hideAnnounce = () => {
            if (announceHidden) return;
            announceHidden = true;
            setIsScrolled(true);
        };

        const finishSnap = () => {
            snapping = false;
            if (snapTimer) {
                clearTimeout(snapTimer);
                snapTimer = null;
            }
            if (window.scrollY <= SHOW_AT) revealAnnounce();
        };

        const handleScroll = () => {
            if (snapping) {
                if (window.scrollY <= SHOW_AT) finishSnap();
                lastY = window.scrollY;
                return;
            }

            const y = window.scrollY;
            const goingUp = y < lastY - 0.5;

            if (goingUp && y > 0 && y < SNAP_ZONE) {
                snapping = true;
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                snapTimer = setTimeout(finishSnap, 700);
                lastY = y;
                return;
            }

            if (!announceHidden && y >= HIDE_AT) {
                hideAnnounce();
            } else if (announceHidden && y <= SHOW_AT) {
                revealAnnounce();
            }

            lastY = window.scrollY;
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (snapTimer) clearTimeout(snapTimer);
            if (closeTimeout) clearTimeout(closeTimeout);
        };
    }, [closeTimeout]);

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
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const navIdle = 'header-nav-chip';
    const navActive = 'header-nav-chip is-active';

    const menuBtn =
        theme === 'light'
            ? 'bg-[var(--domu-accent)]/12 text-[var(--domu-accent)]'
            : 'bg-white/10 text-white';
    const dropIcon = theme === 'light' ? 'text-[var(--domu-accent)]' : 'text-white';

    return (
        <>
            <header ref={headerRef} className="site-header">
                <div
                    className={`site-announce-slot ${isScrolled ? 'is-collapsed' : ''}`}
                    aria-hidden={isScrolled}
                >
                    <div className="site-announce-slot__inner">
                        <div className="site-announce">
                            <div className="announce-marquee" aria-label="Avisos">
                                <div className="announce-marquee__track">
                                    <ul className="announce-marquee__group">
                                        {buildAnnounceStrip('a').map((item) => (
                                            <li key={item.key} className="announce-marquee__item">
                                                <span className="announce-marquee__text">{item.text}</span>
                                                <Link to={item.href} className="announce-marquee__cta">
                                                    {item.cta}
                                                    <ArrowUpRightIcon className="w-3 h-3" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="announce-marquee__group" aria-hidden>
                                        {buildAnnounceStrip('b').map((item) => (
                                            <li key={item.key} className="announce-marquee__item">
                                                <span className="announce-marquee__text">{item.text}</span>
                                                <Link to={item.href} className="announce-marquee__cta" tabIndex={-1}>
                                                    {item.cta}
                                                    <ArrowUpRightIcon className="w-3 h-3" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`site-header-bar ${isScrolled ? 'is-scrolled' : ''}`}
                >
                    <div className="site-header-bar__inner mx-auto max-w-[92rem] flex items-center gap-3 md:gap-4 h-16 md:h-[4.25rem]">
                        <Link to="/" className="flex items-center shrink-0 group" aria-label="DomuTech">
                            <img
                                src="/frame-1.png"
                                alt="DOMU TECH"
                                className="site-logo h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
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
                                                <item.icon className="w-3.5 h-3.5" weight={active ? 'fill' : 'regular'} />
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
                                                        <div className="site-header-dropdown min-w-[13.5rem] rounded-lg border overflow-hidden p-1.5 shadow-[0_12px_32px_-12px_rgba(10,15,24,0.35)]">
                                                            {SERVICES_LIST.map((svc) => (
                                                                <Link
                                                                    key={svc.name}
                                                                    to={svc.href}
                                                                    className="header-drop-item flex items-center gap-2.5 px-3 py-2 rounded-lg"
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
                                        <item.icon className="w-3.5 h-3.5" weight={active ? 'fill' : 'regular'} />
                                        <span className="header-nav-label text-current">{item.name}</span>
                                    </Link>
                                );
                            })}

                            <Link
                                to="/layouts"
                                className={`header-capsule-btn inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${navIdle}`}
                                title="Loja de Layouts"
                            >
                                <Storefront className="w-3.5 h-3.5" weight="regular" />
                                <span className="header-nav-label text-current">Layouts</span>
                            </Link>
                        </nav>

                        <div className="flex items-center gap-1.5 shrink-0 ml-auto lg:ml-0">
                            <button
                                type="button"
                                onClick={toggleTheme}
                                className="header-capsule-btn header-theme-toggle w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
                                aria-label="Alternar tema"
                            >
                                {theme === 'light' ? (
                                    <MoonIcon className="w-4 h-4" />
                                ) : (
                                    <SunIcon className="w-4 h-4" />
                                )}
                            </button>

                            <a
                                href="https://wa.me/5511934430659"
                                target="_blank"
                                rel="noreferrer"
                                className="hidden sm:inline-flex items-center gap-1.5 h-8 px-2.5 rounded-lg text-[0.75rem] font-semibold text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/35 hover:bg-[#25D366]/15 hover:border-[#25D366]/50 transition-colors"
                            >
                                <WhatsAppIcon className="w-4 h-4 shrink-0 text-[#25D366]" />
                                <span className="text-[#25D366]">WhatsApp</span>
                            </a>

                            <button
                                type="button"
                                className={`header-capsule-btn lg:hidden w-9 h-9 flex items-center justify-center rounded-lg ${menuBtn}`}
                                onClick={() => setIsMenuOpen(true)}
                                aria-label="Abrir menu"
                            >
                                <MenuIcon className="w-5 h-5" />
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="on-dark fixed inset-0 z-[100]"
                        style={{ backgroundColor: 'var(--domu-dark-bg)' }}
                    >
                        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10">
                            <img src="/frame-1.png" alt="DOMU TECH" className="site-logo site-logo--white h-11 w-auto object-contain" />
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
                                aria-label="Fechar menu"
                            >
                                <XIcon className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="page-pad-x pt-8 pb-10 h-[calc(100vh-5rem)] overflow-y-auto flex flex-col gap-8">
                            <nav className="flex flex-col gap-1">
                                {NAV_ITEMS.filter((i) => i.type === 'link').map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center gap-3 rounded-xl px-3 py-3 text-white hover:bg-white/[0.05] transition-colors"
                                    >
                                        <item.icon className="w-5 h-5 text-[var(--domu-accent-light)]" weight="duotone" />
                                        <span className="type-card-title !text-white">{item.name}</span>
                                    </Link>
                                ))}
                                <Link
                                    to="/layouts"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-[var(--domu-accent-light)] hover:bg-white/[0.05] transition-colors"
                                >
                                    <Storefront className="w-5 h-5" weight="duotone" />
                                    <span className="type-card-title !text-[var(--domu-accent-light)]">Loja de Layouts</span>
                                </Link>
                            </nav>

                            <div>
                                <p className="type-eyebrow mb-3 px-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                                    Serviços
                                </p>
                                <div className="flex flex-col gap-1">
                                    {SERVICES_LIST.map((svc) => (
                                        <Link
                                            key={svc.name}
                                            to={svc.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-xl px-3 py-2.5 type-link text-white/70 hover:text-white hover:bg-white/[0.05] transition-colors"
                                        >
                                            {svc.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto pt-6 border-t border-white/10 space-y-3">
                                <a
                                    href="https://wa.me/5511934430659"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full btn-whatsapp-solid"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                                    WhatsApp
                                </a>
                                <Link
                                    to="/chatbot-placeholder"
                                    className="btn-budget w-full"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                                    Solicitar Orçamento
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
