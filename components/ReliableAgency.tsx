import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { LightningBoltIcon, WhatsAppIcon } from './icons';

const FEATURES = [
    'Criação de sites personalizados para empresas',
    'Gerente de Projetos dedicado',
    'Layout de site profissional e responsivo',
    'Site otimizado para SEO e posicionamento no Google',
    'Direcionamento Consultivo do Projeto',
    'Ferramentas e Processos Profissionais',
    'Suporte técnico e manutenção contínua',
    'Estratégias de UX personalizadas',
    'Treinamento e vídeos tutoriais para gerenciar o site',
];

const ReliableAgency: React.FC = () => {
    return (
        <section className="py-10 md:py-24 bg-[#121212] overflow-hidden relative border-y border-white/5">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.01] -skew-x-12 translate-x-1/2 opacity-30"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Coluna Esquerda - Texto Institucional */}
                    <AnimateOnScroll>
                        <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                            <h2 className="h2-domo text-gradient mb-8 md:mb-12">
                                A AGÊNCIA MAIS CONFIÁVEL<br className="hidden md:block" /> DO BRASIL
                            </h2>
                            <div className="space-y-8 text-[#a1a1a1] text-[15px] md:text-[17px] leading-relaxed">
                                <p>
                                    Desde 2016, a DOMO Digital é uma empresa de criação de sites profissionais reconhecida no Brasil, com <span className="text-[#FFFFFF] font-bold underline cursor-default">mais de 10 avaliações positivas no Google</span>. Desenvolvemos sites personalizados com foco em SEO, geração de leads e performance.
                                </p>
                                <p>
                                    A criação de sites profissionais vai além do design. Envolve estratégia, tecnologia e entendimento do negócio. Atuamos como uma agência de desenvolvimento de sites que entrega projetos rápidos, otimizados para o Google e preparados para converter visitantes em clientes.
                                </p>
                                <p>
                                    Cada projeto segue um processo consultivo, onde especialistas em desenvolvimento de sites, UX e SEO trabalham juntos para criar sites que atraem, engajam e geram vendas.
                                </p>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Coluna Direita - Checklist e CTA */}
                    <AnimateOnScroll delay={200}>
                        <div className="bg-white/[0.03] backdrop-blur-md p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/10">
                            <span className="text-[#FFFFFF] font-black text-[10px] md:text-[11px] uppercase tracking-[0.25em] mb-4 block">
                                DESENVOLVIMENTO DE SITES SOB MEDIDA
                            </span>
                            <h3 className="text-2xl md:text-3xl font-[900] text-white uppercase tracking-tighter mb-8">
                                Criação de sites profissionais
                            </h3>

                            <ul className="space-y-4 mb-10">
                                {FEATURES.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 w-4 h-4 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={4} className="w-2.5 h-2.5">
                                                <path d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-white/90 text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a 
                                href="/chatbot-placeholder" 
                                className="btn-budget w-full"
                            >
                                <LightningBoltIcon className="w-5 h-5 fill-current" />
                                Solicitar Orçamento
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
                
                {/* Branding espiando no fundo */}
                <div className="absolute -bottom-10 right-1/4 w-32 h-32 opacity-20 animate-float pointer-events-none">
                    <img src="/logos/logobranca.png" alt="" className="w-full h-auto" />
                </div>
            </div>
        </section>
    );
};

export default ReliableAgency;
