import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCircleIcon, XIcon, MenuIcon } from './icons';

const NAV_ITEMS = [
    { name: 'Soluções', href: '/#solucoes' },
    { name: 'Cases', href: '/cases' },
    { name: 'Avaliações', href: '/#avaliacoes' },
    { name: 'Dúvidas', href: '/#faq' },
];

/** Cabeçalho do fundo: marca + Login (desktop) / menu (mobile). */
const OuterHeader: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className="domu-outer-header">
                <Link to="/" className="domu-outer-header__brand" aria-label="Domu Studio">
                    <img
                        src="/domu-mark.png"
                        alt=""
                        className="domu-outer-header__mark"
                    />
                </Link>

                <div className="domu-outer-header__actions">
                    <Link to="/login" className="domu-outer-header__login">
                        <UserCircleIcon className="domu-outer-header__login-icon" />
                        Login
                    </Link>

                    <button
                        type="button"
                        className="domu-outer-header__menu"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
                    </button>
                </div>
            </header>

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
                                <Link to="/login" onClick={closeMenu} className="ns-header__drawer-login">
                                    <UserCircleIcon className="w-4 h-4" />
                                    Login
                                </Link>
                                <Link to="/login" onClick={closeMenu} className="ns-header__drawer-cta">
                                    Criar conta
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default OuterHeader;
