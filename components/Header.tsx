import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRightIcon,
    ArrowUpRightIcon,
    BrowserIcon,
    CaretDownIcon,
    ListIcon,
    MoonIcon,
    PaperPlaneTiltIcon,
    SunIcon,
    XIcon,
} from '@phosphor-icons/react';
import Logo from './Logo';
import { useTheme } from './useTheme';
import { ROUTES, WHATSAPP_MESSAGES, whatsappUrl } from '../constants';

const PRODUCTS = [
    {
        name: 'Vendas no WhatsApp',
        desc: 'Domu Painel · campanhas, atendimento com IA, métricas e insights.',
        to: ROUTES.painel,
        icon: PaperPlaneTiltIcon,
    },
    {
        name: 'Criação de sites',
        desc: 'Domu Studio · sites, landing pages e lojas virtuais.',
        to: ROUTES.studio,
        icon: BrowserIcon,
    },
] as const;

const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
    const { theme, toggle } = useTheme();
    const isDark = theme === 'dark';
    return (
        <button
            type="button"
            className={`theme-toggle ${className}`}
            onClick={toggle}
            aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            title={isDark ? 'Tema claro' : 'Tema escuro'}
        >
            {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};

const Header: React.FC = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const closeTimer = useRef<number | undefined>(undefined);

    useEffect(() => {
        setMenuOpen(false);
        setSolutionsOpen(false);
    }, [location.pathname, location.hash]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
                setSolutionsOpen(false);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [menuOpen]);

    const openSolutions = () => {
        window.clearTimeout(closeTimer.current);
        setSolutionsOpen(true);
    };
    const closeSolutions = () => {
        closeTimer.current = window.setTimeout(() => setSolutionsOpen(false), 120);
    };

    const isSolutions = location.pathname.startsWith('/solucoes');

    return (
        <>
            <header className="nav-wrap">
                <nav className="nav" aria-label="Principal">
                    <Link to={ROUTES.home} className="nav__brand" aria-label="Domu Tech — início">
                        <Logo />
                    </Link>

                    <ul className="nav__links">
                        <li
                            className="nav__item"
                            onMouseEnter={openSolutions}
                            onMouseLeave={closeSolutions}
                        >
                            <button
                                type="button"
                                className={`nav__link${isSolutions ? ' is-active' : ''}`}
                                aria-expanded={solutionsOpen}
                                onClick={() => setSolutionsOpen((open) => !open)}
                            >
                                Soluções <CaretDownIcon weight="bold" className="nav__caret" />
                            </button>

                            <AnimatePresence>
                                {solutionsOpen && (
                                    <motion.div
                                        className="mega"
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: 0.16 }}
                                    >
                                        <div className="mega__col">
                                            <p className="mega__label">Produtos</p>
                                            {PRODUCTS.map(({ name, desc, to, icon: Icon }) => (
                                                <Link key={name} to={to} className="mega__product">
                                                    <span className="mega__icon">
                                                        <Icon />
                                                    </span>
                                                    <span>
                                                        <strong>{name}</strong>
                                                        <small>{desc}</small>
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="mega__col mega__col--links">
                                            <p className="mega__label">Acesso rápido</p>
                                            <Link to={`${ROUTES.painel}#inteligencia`}>Insights com IA</Link>
                                            <Link to={`${ROUTES.painel}#planos`}>Planos do Domu Painel</Link>
                                            <a href={whatsappUrl(WHATSAPP_MESSAGES.painel)} target="_blank" rel="noreferrer">
                                                Pedir demonstração <ArrowUpRightIcon />
                                            </a>
                                            <a href={whatsappUrl(WHATSAPP_MESSAGES.studio)} target="_blank" rel="noreferrer">
                                                Orçar um site <ArrowUpRightIcon />
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li>
                            <NavLink to={ROUTES.painel} className="nav__link">
                                Vendas no WhatsApp
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES.studio} className="nav__link">
                                Criação de sites
                            </NavLink>
                        </li>
                        <li>
                            <Link to={`${ROUTES.painel}#planos`} className="nav__link">
                                Planos
                            </Link>
                        </li>
                        <li>
                            <NavLink to={ROUTES.empresa} className="nav__link">
                                Empresa
                            </NavLink>
                        </li>
                    </ul>

                    <div className="nav__actions">
                        <ThemeToggle />
                        <a
                            href={whatsappUrl(WHATSAPP_MESSAGES.geral)}
                            className="nav__cta"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Fale conosco <ArrowRightIcon />
                        </a>
                        <button
                            type="button"
                            className="nav__toggle"
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? <XIcon /> : <ListIcon />}
                        </button>
                    </div>
                </nav>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="sheet"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <p className="mega__label">Produtos</p>
                        {PRODUCTS.map(({ name, desc, to }) => (
                            <Link key={name} to={to} className="sheet__product">
                                <strong>{name}</strong>
                                <small>{desc}</small>
                            </Link>
                        ))}
                        <p className="mega__label">Empresa</p>
                        <Link to={`${ROUTES.painel}#planos`} className="sheet__link">
                            Planos
                        </Link>
                        <Link to={ROUTES.empresa} className="sheet__link">
                            Sobre a Domu
                        </Link>
                        <div className="sheet__actions">
                            <a
                                href={whatsappUrl(WHATSAPP_MESSAGES.geral)}
                                className="btn btn--primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Fale conosco no WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
