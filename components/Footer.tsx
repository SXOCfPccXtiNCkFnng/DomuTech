import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import Logo from './Logo';
import { LINKS, ROUTES, WHATSAPP_DISPLAY, WHATSAPP_MESSAGES, whatsappUrl } from '../constants';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <Logo />
                        <p>
                            A central de soluções digitais do seu negócio. Tecnologia que conecta,
                            soluções que geram resultados.
                        </p>
                    </div>

                    <nav className="footer__col" aria-label="Produtos">
                        <p className="label">Produtos</p>
                        <Link to={ROUTES.painel}>Vendas no WhatsApp</Link>
                        <Link to={ROUTES.studio}>Criação de sites</Link>
                        <Link to={`${ROUTES.painel}#planos`}>Planos e preços</Link>
                    </nav>

                    <nav className="footer__col" aria-label="Empresa">
                        <p className="label">Empresa</p>
                        <Link to={ROUTES.empresa}>Sobre a Domu</Link>
                        <a href={LINKS.painel} target="_blank" rel="noreferrer">
                            Área do cliente <ArrowUpRightIcon />
                        </a>
                        <a href={whatsappUrl(WHATSAPP_MESSAGES.painel)} target="_blank" rel="noreferrer">
                            Pedir demonstração <ArrowUpRightIcon />
                        </a>
                    </nav>

                    <div className="footer__col">
                        <p className="label">Contato</p>
                        <a href={whatsappUrl(WHATSAPP_MESSAGES.geral)} target="_blank" rel="noreferrer">
                            WhatsApp {WHATSAPP_DISPLAY}
                        </a>
                        <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
                        <a href={LINKS.instagram} target="_blank" rel="noreferrer">
                            Instagram @domu_tech
                        </a>
                    </div>
                </div>

                <div className="footer__word" aria-hidden>
                    domutech
                </div>

                <div className="footer__bottom">
                    <span>© {year} Domu Tech. Todos os direitos reservados.</span>
                    <span className="mono">painel.domutech.digital · studio.domutech.digital</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
