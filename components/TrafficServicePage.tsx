import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import ReliableAgency from './ReliableAgency';
import Pricing from './Pricing';
import Process from './Process';
import { ArrowUpRightIcon, ArrowRightIcon, TargetIcon, CheckIcon } from './icons';

const TRAFFIC_THEME_COLOR = '#f97316'; // Laranja Vexel Tráfego

const TrafficServicePage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Define a cor de destaque da página
        const root = document.documentElement;
        const originalColor = getComputedStyle(root).getPropertyValue('--domu-accent');
        root.style.setProperty('--domu-accent', TRAFFIC_THEME_COLOR);

        return () => {
            // Restaura a cor original ao sair
            root.style.setProperty('--domu-accent', originalColor);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[var(--domu-bg)] font-sans text-white overflow-hidden selection:bg-[var(--domu-accent)] selection:text-white">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-[var(--domu-bg)]">
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
                    <TargetIcon className="absolute top-[10%] left-[5%] w-32 h-32 animate-float opacity-60" />
                    <TargetIcon className="absolute top-[20%] right-[10%] w-48 h-48 animate-spin-slow opacity-40" style={{ animationDuration: '55s' }} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
                
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-white/60 hover:text-white mb-12 inline-flex items-center gap-2 group transition-all"
                    >
                        <ArrowRightIcon className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        <span>Voltar para Soluções</span>
                    </button>

                    <AnimateOnScroll>
                        <span className="text-[var(--domu-muted)] font-black text-[11px] uppercase tracking-[0.4em] mb-6 block">
                            Tráfego Pago & Performance
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight uppercase italic">
                            Escalando Vendas <br />
                            <span className="text-gradient">Com ROI Comprovado</span>
                        </h1>
                        <p className="text-[var(--domu-muted)] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                            Não gaste dinheiro com anúncios. Invista em estratégias de tráfego focadas em conversão e dados.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/chatbot-placeholder" className="btn-budget">
                                <ArrowUpRightIcon className="w-5 h-5" />
                                Escalar minhas Vendas
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Platforms Section */}
            <section className="py-20 bg-[var(--domu-black)] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimateOnScroll>
                            <span className="text-[var(--domu-muted)] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">
                                ESTRATÉGIA DATA-DRIVEN
                            </span>
                            <h2 className="h2-domu text-white mb-8">
                                ONDE SEU CLIENTE ESTÁ, NÓS ANUNCIAMOS
                            </h2>
                            <p className="text-[var(--domu-muted)] text-lg leading-relaxed mb-8">
                                Dominamos as principais plataformas de anúncios do mercado para garantir que sua mensagem chegue na pessoa certa, na hora certa e com o menor custo possível.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { name: "Google Ads", label: "Busca & Display" },
                                    { name: "Meta Ads", label: "Insta & Face" },
                                    { name: "LinkedIn Ads", label: "Foco B2B" },
                                    { name: "TikTok Ads", label: "Viralização" }
                                ].map((platform, i) => (
                                    <div key={i} className="p-4 border-l-2 border-white/10 hover:border-[var(--domu-accent)] transition-colors">
                                        <h4 className="text-white font-bold">{platform.name}</h4>
                                        <p className="text-[var(--domu-muted)] text-xs uppercase tracking-widest">{platform.label}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimateOnScroll>
                        
                        <AnimateOnScroll delay={200}>
                            <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-3xl">
                                <div className="bg-[var(--domu-bg)] p-8 rounded-[22px] border border-white/5">
                                    <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                        RELATÓRIO EM TEMPO REAL
                                    </h3>
                                    <div className="space-y-4">
                                        {[78, 92, 65].map((val, i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="flex justify-between text-[10px] uppercase font-bold opacity-60">
                                                    <span>Métrica 0{i+1}</span>
                                                    <span>{val}%</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-[var(--domu-accent)] rounded-full animate-scroll" style={{ width: `${val}%`, transitionDelay: `${i*200}ms` }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-8 text-sm text-[var(--domu-muted)] italic">
                                        "Transparência total: você acompanha cada centavo investido e o retorno gerado em dashboards exclusivos."\n                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            <Process />
            <ReliableAgency />
            <Pricing />

            {/* CTA */}
            <section className="py-24 bg-[var(--domu-bg)] text-center">
                <AnimateOnScroll>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase italic">
                        CANSADO DE QUEIMAR DINHEIRO COM ANÚNCIOS?
                    </h2>
                    <a href="/chatbot-placeholder" className="btn-budget mx-auto">
                        <ArrowUpRightIcon className="w-5 h-5" />
                        Analisar minha Conta Gratuitamente
                    </a>
                </AnimateOnScroll>
            </section>
        </div>
    );
};

export default TrafficServicePage;
