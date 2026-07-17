import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramLogo } from '@phosphor-icons/react';
import { WhatsAppIcon, ArrowUpRightIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

const CONTACT = {
    whatsapp: 'https://wa.me/5511934430659',
    instagram: 'https://www.instagram.com/domu_tech/',
};

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer id="footer" className="site-footer site-footer--light">
            <div className="mx-auto max-w-[92rem] page-pad-x">
                <AnimateOnScroll>
                    <div className="footer-cta-pro">
                        <div>
                            <p className="footer-cta-pro__eyebrow">Vamos conversar</p>
                            <h2>Seu próximo projeto começa com uma boa ideia.</h2>
                            <p>Conte o que sua empresa precisa. Nós ajudamos a transformar em uma solução digital clara e eficiente.</p>
                        </div>
                        <div className="footer-cta-pro__actions">
                            <Link to="/chatbot-placeholder" className="btn-budget">
                                Solicitar proposta
                                <ArrowUpRightIcon className="w-3.5 h-3.5" />
                            </Link>
                            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="footer-whatsapp-link">
                                <WhatsAppIcon className="w-4 h-4" />
                                Conversar no WhatsApp
                            </a>
                        </div>
                    </div>
                </AnimateOnScroll>

                <div className="footer-main-pro">
                    <div className="footer-brand-pro">
                        <Link to="/" aria-label="Domu Tech">
                            <img src="/frame-1.png" alt="DOMU TECH" className="site-logo" />
                        </Link>
                        <p>Tecnologia, design e estratégia para empresas que querem crescer com consistência.</p>
                        <div className="footer-social-pro">
                            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                                <InstagramLogo size={19} weight="regular" />
                            </a>
                            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                                <WhatsAppIcon className="w-[18px] h-[18px]" />
                            </a>
                        </div>
                    </div>

                    <nav className="footer-column-pro" aria-label="Navegação institucional">
                        <h3>Navegação</h3>
                        <Link to="/">Home</Link>
                        <Link to="/cases">Cases</Link>
                        <Link to="/sobre">Sobre</Link>
                        <Link to="/layouts">Layouts</Link>
                    </nav>

                    <nav className="footer-column-pro" aria-label="Soluções">
                        <h3>Soluções</h3>
                        <Link to="/servico/site-sob-medida">Criação de Sites</Link>
                        <Link to="/servico/automacao-ia">IA & Automação</Link>
                        <Link to="/servico/software-house">Software House</Link>
                        <Link to="/servico/trafego-performance">Tráfego & Performance</Link>
                        <Link to="/servico/branding-design">Branding & Design UX</Link>
                    </nav>

                    <div className="footer-column-pro footer-contact-pro">
                        <h3>Contato</h3>
                        <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">WhatsApp comercial</a>
                        <a href={CONTACT.instagram} target="_blank" rel="noreferrer">@domu_tech</a>
                        <p>
                            <span />
                            Atendimento online
                        </p>
                    </div>
                </div>

                <div className="footer-bottom-pro">
                    <p>© {year} Domu Tech. Todos os direitos reservados.</p>
                    <div>
                        <a href="#">Privacidade</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
