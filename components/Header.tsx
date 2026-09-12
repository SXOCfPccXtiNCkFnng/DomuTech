import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCircleIcon, MenuIcon, XIcon } from './icons';
import { useScrollRoot } from './scroll-root';

const NAV_ITEMS = [
    { name: 'Soluções', href: '/#solucoes' },
    { name: 'Plataforma', href: '/#plataforma' },
    { name: 'Preços', href: '/#precos' },
    { name: 'Cases', href: '/cases' },
];

const Header: React.FC = () => {
    const location = useLocation();
    const headerRef = useRef<HTMLElement>(null);
    const scrollRoot = useScrollRoot();
    const isHome = location.pathname === '/';
    const [spacerH, setSpacerH] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('domu_theme', 'light');
        document.documentElement.classList.add('light-theme');
        document.documentElement.classList.remove('dark-theme', 'dark');
        document.documentElement.classList.remove('hero-expanded', 'hero-docking');
        document.documentElement.classList.add('domu-framed');
        return () => {
            document.documentElement.classList.remove('domu-framed');
        };
    }, []);

    useEffect(() => {
        const root = scrollRoot?.current;
        const onScroll = () => {
            const y = root ? root.scrollTop : window.scrollY;
            setIsScrolled(y > 24);
        };
        onScroll();
        root?.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            root?.removeEventListener('scroll', onScroll);
            window.removeEventListener('scroll', onScroll);
        };
    }, [scrollRoot, location.pathname]);

    useLayoutEffect(() => {
        const el = headerRef.current;
        if (!el) return;
        const syncSpacer = () => {
            setSpacerH(0);
            document.documentElement.style.setProperty('--site-chrome-h', '0px');
        };
        syncSpacer();
        const ro = new ResizeObserver(syncSpacer);
        ro.observe(el);
        return () => ro.disconnect();
    }, [isScrolled]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header
                ref={headerRef}
                className={[
                    'ns-header',
                    'is-framed',
                    isHome ? 'is-home' : 'is-inner',
                    isScrolled ? 'is-scrolled' : '',
                    isMenuOpen ? 'is-menu-open' : '',
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                <div className="ns-header__bar">
                    <div className="ns-header__inner">
                        <div className="ns-header__logo-slot is-visible">
                            <Link to="/" aria-label="Domu Studio" className="ns-header__logo-link">
                                <img src="/domu-mark.png" alt="DOMU STUDIO" className="ns-header__logo" />
                            </Link>
                        </div>

                        <div className="ns-header__actions">
                            <Link to="/login" className="ns-header__login">
                                <UserCircleIcon className="ns-header__login-icon" />
                                Login
                            </Link>
                            <Link to="/login" className="ns-header__cta">
                                Criar site grátis
                            </Link>

                            <button
                                type="button"
                                className="ns-header__menu-btn"
                                onClick={() => setIsMenuOpen((open) => !open)}
                                aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {spacerH > 0 && (
                <div className="site-header-spacer" style={{ height: spacerH }} aria-hidden />
            )}

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ns-header__drawer"
                    >
                        <button
                            type="button"
                            className="ns-header__drawer-backdrop"
                            aria-label="Fechar menu"
                            onClick={closeMenu}
                        />

                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-label="Menu Domu Studio"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="ns-header__drawer-panel"
                        >
                            <div className="ns-header__drawer-head">
                                <p className="ns-header__drawer-title">Domu Studio</p>
                                <button
                                    type="button"
                                    className="ns-header__drawer-close"
                                    onClick={closeMenu}
                                    aria-label="Fechar menu"
                                >
                                    <XIcon className="w-5 h-5" />
                                </button>
                            </div>

                            <nav className="ns-header__drawer-nav">
                                {NAV_ITEMS.map((item, index) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        onClick={closeMenu}
                                        className="ns-header__drawer-link"
                                    >
                                        <span className="ns-header__drawer-index">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="ns-header__drawer-label">{item.name}</span>
                                    </Link>
                                ))}
                            </nav>

                            <div className="ns-header__drawer-foot">
                                <Link
                                    to="/login"
                                    onClick={closeMenu}
                                    className="ns-header__drawer-login"
                                >
                                    <UserCircleIcon className="w-4 h-4" />
                                    Login
                                </Link>
                                <Link
                                    to="/login"
                                    onClick={closeMenu}
                                    className="ns-header__drawer-cta"
                                >
                                    Criar site grátis
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
