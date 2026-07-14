import React from 'react';
import { Link } from 'react-router-dom';
import {
    House,
    FolderSimple,
    UsersThree,
    Calculator,
    Storefront,
    Cookie,
    InstagramLogo,
    ShieldCheck,
    ChatCircleDots,
} from '@phosphor-icons/react';
import {
    WhatsAppIcon,
    ArrowUpRightIcon,
    GlobeIcon,
    AutomationIcon,
    CodeIcon,
    TargetIcon,
    PaletteIcon,
} from './icons';
import AnimateOnScroll from './AnimateOnScroll';

const CONTACT = {
    whatsapp: 'https://wa.me/5511934430659',
    instagram: 'https://www.instagram.com/domu_tech/',
};

type FooterLink = {
    name: string;
    href: string;
    icon: React.ReactNode;
    external?: boolean;
};

const ICON = 'site-footer__icon';

const EMPRESA: FooterLink[] = [
    { name: 'Home', href: '/', icon: <House className={ICON} weight="duotone" /> },
    { name: 'Cases', href: '/cases', icon: <FolderSimple className={ICON} weight="duotone" /> },
    { name: 'Sobre Nós', href: '/sobre', icon: <UsersThree className={ICON} weight="duotone" /> },
    { name: 'Orçamento', href: '/chatbot-placeholder', icon: <Calculator className={ICON} weight="duotone" /> },
    { name: 'Loja de Layouts', href: '/layouts', icon: <Storefront className={ICON} weight="duotone" /> },
    { name: 'Aviso de Cookies', href: '#', icon: <Cookie className={ICON} weight="duotone" /> },
];

const SERVICOS: FooterLink[] = [
    { name: 'Criação de Sites', href: '/servico/site-sob-medida', icon: <GlobeIcon className={ICON} /> },
    { name: 'IA & Automação', href: '/servico/automacao-ia', icon: <AutomationIcon className={ICON} /> },
    { name: 'Software House', href: '/servico/software-house', icon: <CodeIcon className={ICON} /> },
    { name: 'Tráfego & Performance', href: '/servico/trafego-performance', icon: <TargetIcon className={ICON} /> },
    { name: 'Branding & Design UX', href: '/servico/branding-design', icon: <PaletteIcon className={ICON} /> },
];

const CONECTE: FooterLink[] = [
    {
        name: 'Instagram',
        href: CONTACT.instagram,
        icon: <InstagramLogo className={ICON} weight="duotone" />,
        external: true,
    },
    {
        name: 'WhatsApp',
        href: CONTACT.whatsapp,
        icon: <WhatsAppIcon className={ICON} />,
        external: true,
    },
    { name: 'Loja de Layouts', href: '/layouts', icon: <Storefront className={ICON} weight="duotone" /> },
    { name: 'Privacidade', href: '#', icon: <ShieldCheck className={ICON} weight="duotone" /> },
];

function FooterNavLink({ link }: { link: FooterLink }) {
    const className = 'site-footer__link';
    const content = (
        <>
            {link.icon}
            <span>{link.name}</span>
        </>
    );

    if (link.external) {
        return (
            <a href={link.href} target="_blank" rel="noreferrer" className={className}>
                {content}
            </a>
        );
    }

    if (link.href.startsWith('#')) {
        return (
            <a href={link.href} className={className}>
                {content}
            </a>
        );
    }

    return (
        <Link to={link.href} className={className}>
            {content}
        </Link>
    );
}

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer id="footer" className="site-footer on-dark relative overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-[var(--domu-accent)]/12 blur-[120px] pointer-events-none" />
            <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '28px 28px',
                }}
            />

            <div className="relative mx-auto max-w-[92rem] page-pad-x pt-16 md:pt-20">
                <AnimateOnScroll>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 md:gap-10 pb-12 md:pb-14">
                        <div className="max-w-2xl">
                            <p className="site-footer__eyebrow mb-4">Domu Tech</p>
                            <h2 className="site-footer__headline mb-4">
                                Tecnologia com precisão.
                                <br />
                                <span className="site-footer__headline-muted">Design com intenção.</span>
                            </h2>
                            <p className="site-footer__copy max-w-md">
                                Sites, sistemas, automação e performance - estruturados para empresas que tratam
                                presença digital como ativo, não como improviso.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2.5 shrink-0">
                            <a
                                href={CONTACT.whatsapp}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-whatsapp-solid"
                            >
                                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                                WhatsApp Direto
                            </a>
                            <Link to="/chatbot-placeholder" className="btn-budget">
                                <ArrowUpRightIcon className="w-3.5 h-3.5" />
                                Pedir orçamento
                            </Link>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>

            <div className="site-footer__rule" aria-hidden />

            <div className="relative mx-auto max-w-[92rem] page-pad-x pt-12 md:pt-14 pb-12 md:pb-14">
                <AnimateOnScroll delay={100}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
                        <div className="sm:col-span-2 lg:col-span-4">
                            <Link to="/" className="inline-flex items-center mb-5 group">
                                <img
                                    src="/frame-1.png"
                                    alt="DOMU TECH"
                                    className="site-logo site-logo--white h-[4.25rem] md:h-[5rem] w-auto object-contain transition-transform group-hover:scale-[1.02]"
                                />
                            </Link>
                            <p className="site-footer__copy max-w-xs">
                                Engenharia, design e estratégia digital para acelerar o crescimento do seu negócio.
                            </p>
                            <div className="site-footer__meta">
                                <h4 className="site-footer__eyebrow">Atendimento</h4>
                                <a
                                    href={CONTACT.whatsapp}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="site-footer__link"
                                >
                                    <WhatsAppIcon className="site-footer__icon" />
                                    <span>WhatsApp comercial</span>
                                </a>
                                <p className="site-footer__meta-value">
                                    <ChatCircleDots className="site-footer__icon" weight="duotone" />
                                    Resposta rápida no primeiro contato
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-2 lg:col-start-6">
                            <h4 className="site-footer__eyebrow">Empresa</h4>
                            <ul className="site-footer__list">
                                {EMPRESA.map((link) => (
                                    <li key={link.name}>
                                        <FooterNavLink link={link} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:col-span-3">
                            <h4 className="site-footer__eyebrow">Serviços</h4>
                            <ul className="site-footer__list">
                                {SERVICOS.map((link) => (
                                    <li key={link.name}>
                                        <FooterNavLink link={link} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:col-span-2">
                            <h4 className="site-footer__eyebrow">Conecte-se</h4>
                            <ul className="site-footer__list">
                                {CONECTE.map((link) => (
                                    <li key={link.name}>
                                        <FooterNavLink link={link} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>

            <div className="site-footer__bar">
                <div className="mx-auto max-w-[92rem] page-pad-x py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <p className="site-footer__bar-text">
                        © {year} Domu Tech · Todos os direitos reservados
                    </p>
                    <p className="site-footer__bar-text">
                        Feito com precisão pela Domu Tech
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
