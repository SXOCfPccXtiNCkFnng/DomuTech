import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon } from './icons';
import CallToAction from './CallToAction';

const CONTACT = {
    instagram: 'https://www.instagram.com/domu_tech/',
};

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer id="footer" className="domu-footer">
            <div id="precos" className="domu-footer__cta">
                <CallToAction
                    title="Pronto pra presença com direção?"
                    subtitle="Fale com a Domu e monte a base digital da sua marca sem parecer genérica."
                    primaryButtonText="Falar com a Domu"
                    primaryButtonLink="/login"
                    variant="platform"
                />
            </div>

            <div className="domu-footer__inner">
                <div className="domu-footer__top">
                    <div className="domu-footer__brand">
                        <Link to="/" className="domu-footer__logo" aria-label="Domu Studio">
                            <img src="/domu-mark.png" alt="Domu Studio" />
                        </Link>
                        <p className="domu-footer__tagline">
                            Presença digital com direção própria.
                        </p>
                        <a
                            href={CONTACT.instagram}
                            className="domu-footer__social"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram Domu"
                        >
                            <InstagramIcon className="w-4 h-4" />
                        </a>
                    </div>

                    <nav className="domu-footer__col" aria-label="Navegação">
                        <p className="domu-footer__heading">Navegação</p>
                        <Link to="/">Home</Link>
                        <Link to="/cases">Cases</Link>
                        <Link to="/sobre">Sobre</Link>
                        <Link to="/layouts">Layouts</Link>
                        <Link to="/login">Login</Link>
                    </nav>

                    <nav className="domu-footer__col" aria-label="Plataforma">
                        <p className="domu-footer__heading">Plataforma</p>
                        <Link to="/login">Criar conta</Link>
                        <Link to="/layouts">Layouts</Link>
                        <Link to="/cases">Cases</Link>
                        <Link to="/sobre">Sobre a Domu</Link>
                    </nav>

                    <div className="domu-footer__col">
                        <p className="domu-footer__heading">Contato</p>
                        <Link to="/login">Acessar plataforma</Link>
                        <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
                            @domu_tech
                        </a>
                        <p className="domu-footer__status">
                            <span aria-hidden />
                            Online 24h
                        </p>
                    </div>
                </div>

                <div className="domu-footer__bottom">
                    <p>© {year} Domu Studio</p>
                    <div className="domu-footer__legal">
                        <a href="#">Privacidade</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
