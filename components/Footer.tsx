
import React from 'react';
import { FOOTER_INSTITUCIONAL, FOOTER_SERVICOS, FOOTER_SEGMENTOS } from '../constants';
import { WhatsAppIcon } from './icons';

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="bg-[var(--domu-bg)] pt-10 md:pt-24 pb-8 md:pb-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
                    
                    {/* Column 1: Info */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <a href="/#home" className="flex items-center mb-8 group">
                            <img 
                                src="/logos/logoheaderfooter.png" 
                                alt="VexelTech" 
                                className="h-12 md:h-16 w-auto transition-transform group-hover:scale-105"
                            />
                        </a>
                        <p className="text-[var(--domu-muted)] text-[13px] leading-relaxed mb-10 max-w-xs font-medium opacity-70">
                            A VEXELTECH impulsiona sua marca com engenharia de software de elite, design de alto impacto e estratégias digitais focadas em escala.
                        </p>
                        
                        <div className="flex flex-col items-center md:items-start gap-4 w-full">
                            <a 
                                href="https://wa.me/5511934430659" 
                                target="_blank"
                                rel="noreferrer"
                                className="btn-whatsapp !py-3.5 !px-8 !text-[11px] whitespace-nowrap"
                            >
                                <WhatsAppIcon className="w-5 h-5 fill-current" />
                                WhatsApp Direto
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Institucional */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-black text-[13px] md:text-[15px] uppercase tracking-[0.25em] mb-8 md:mb-10 opacity-60">Institucional</h4>
                        <ul className="space-y-4 md:space-y-6">
                            {FOOTER_INSTITUCIONAL.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-[var(--domu-muted)] hover:text-[var(--domu-white)] font-black text-[12px] uppercase tracking-tighter transition-colors">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Serviços */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-black text-[13px] md:text-[15px] uppercase tracking-[0.25em] mb-8 md:mb-10 opacity-60">Serviços</h4>
                        <ul className="space-y-4 md:space-y-6">
                            {FOOTER_SERVICOS.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-[var(--domu-muted)] hover:text-[var(--domu-white)] font-bold text-[13px] transition-colors">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Segmentos */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-black text-[13px] md:text-[15px] uppercase tracking-[0.25em] mb-8 md:mb-10 opacity-60">Segmentos</h4>
                        <ul className="space-y-4 md:space-y-6">
                            {FOOTER_SEGMENTOS.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-[var(--domu-muted)] hover:text-[var(--domu-white)] font-bold text-[13px] transition-colors leading-tight block">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            {/* Social & Address Area - Full Width Border */}
            <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex gap-6">
                        {['instagram', 'linkedin', 'twitter'].map(social => (
                            <a 
                                key={social} 
                                href={`#${social}`} 
                                className="text-[var(--domu-muted)] hover:text-[var(--domu-white)] transition-colors"
                            >
                                <span className="uppercase text-[10px] font-black tracking-widest">{social}</span>
                            </a>
                        ))}
                    </div>
                    
                    <p className="text-[var(--domu-muted)] text-[12px] font-black uppercase tracking-widest opacity-40">
                        São Paulo - SP • Brasil
                    </p>
                </div>
            </div>

            {/* Bottom Bar - Full Width Border */}
            <div className="mt-12 md:mt-16 border-t border-white/5 pt-10">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
                    <p className="text-[var(--domu-muted)] text-[10px] font-black uppercase tracking-[0.2em] opacity-30">
                        © {new Date().getFullYear()} VEXELTECH • CNPJ: 54.123.884/0001-50
                    </p>
                    <a href="#" className="text-[var(--domu-muted)] text-[10px] font-black uppercase tracking-[0.2em] hover:text-[var(--domu-white)] opacity-30 hover:opacity-100 transition-opacity">
                        Privacidade
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;