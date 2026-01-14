import React from 'react';
import { CodeIcon } from './icons';
import { NAV_LINKS, MAIN_SERVICES } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="bg-neutral-900 dark:bg-neutral-950 text-slate-400">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center sm:text-left">
                    <div className="lg:col-span-1 sm:col-span-2 flex flex-col items-center sm:items-start">
                        <a href="#home" className="flex items-center gap-2 text-xl font-bold text-slate-200 mb-4">
                            <CodeIcon className="w-8 h-8 text-violet-400" />
                            <span>VexelTech</span>
                        </a>
                        <p className="text-xs sm:text-sm text-slate-400 max-w-xs mb-4">
                            Agência completa para soluções digitais: criação de sites, marketing digital, registro de domínio e tráfego pago.
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <a
                                href="https://www.instagram.com/vexel_tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="transition-transform hover:scale-110"
                            >
                                <img src="/img/intagram-logo.png" alt="Instagram" className="w-10 h-10" loading="lazy" decoding="async" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-200 mb-4">Serviços</h4>
                        <ul className="space-y-2 text-sm">
                            {MAIN_SERVICES.map(service => (
                                <li key={service.title}><a href="#services" className="hover:text-violet-400 transition-colors">{service.title}</a></li>
                            ))}
                            <li><a href="#services" className="hover:text-violet-400 transition-colors">Experiência do Usuário (UX)</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-200 mb-4">Navegação</h4>
                        <ul className="space-y-2 text-sm">
                            {NAV_LINKS.map(link => (
                                <li key={link.name}><a href={link.href} className="hover:text-violet-400 transition-colors">{link.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-200 mb-4">Contato</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="mailto:vexeltech.contato@gmail.com" className="hover:text-violet-400 transition-colors">vexeltech.contato@gmail.com</a></li>
                            <li><a href="tel:+5511934430659" className="hover:text-violet-400 transition-colors">+55 (11) 93443-0659</a></li>
                            <li><span>São Paulo, SP - Brasil</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-800 dark:bg-black/30 py-4 text-center">
                <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} VexelTech. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;