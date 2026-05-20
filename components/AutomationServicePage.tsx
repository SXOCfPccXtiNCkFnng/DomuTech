import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import CallToAction from './CallToAction';
import ReliableAgency from './ReliableAgency';
import Pricing from './Pricing';
import Process from './Process';
import { ArrowUpRightIcon, ArrowRightIcon, AutomationIcon, CheckIcon } from './icons';

const AUTOMATION_THEME_COLOR = '#a855f7'; // Roxo Domu Automação

const AutomationServicePage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Define a cor de destaque da página
        const root = document.documentElement;
        const originalColor = getComputedStyle(root).getPropertyValue('--domu-accent');
        root.style.setProperty('--domu-accent', AUTOMATION_THEME_COLOR);

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
                    <AutomationIcon className="absolute top-[10%] left-[5%] w-32 h-32 animate-float opacity-60" />
                    <AutomationIcon className="absolute top-[20%] right-[10%] w-48 h-48 animate-spin-slow opacity-40" style={{ animationDuration: '55s' }} />
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
                            IA & Automação Inteligente
                        </span>
                        <h1 className="h1-domu text-white mb-8 italic">
                            Escalabilidade <br />
                            <span className="text-gradient">Com Inteligência Artificial</span>
                        </h1>
                        <p className="p-domu text-[var(--domu-muted)] max-w-2xl mx-auto mb-12">
                            Elimine tarefas repetitivas e potencialize sua equipe com fluxos de trabalho automatizados e soluções de IA personalizadas.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/chatbot-placeholder" className="btn-budget">
                                <ArrowUpRightIcon className="w-5 h-5" />
                                Automatizar meu Negócio
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-[var(--domu-black)] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimateOnScroll>
                            <span className="text-[var(--domu-muted)] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">
                                EFICIÊNCIA OPERACIONAL
                            </span>
                            <h2 className="h2-domu text-white mb-8">
                                Por que investir em automação?
                            </h2>
                            <p className="text-[var(--domu-muted)] text-lg leading-relaxed mb-6">
                                O tempo da sua equipe é valioso demais para ser gasto com processos manuais que um robô faria em segundos. Nós criamos a ponte entre sua necessidade e a tecnologia.
                            </p>
                            <div className="space-y-6">
                                {[ 
                                    { title: "Redução de Custos", desc: "Diminua erros humanos e custos operacionais desnecessários." },
                                    { title: "Escalabilidade Real", desc: "Cresça seu volume de vendas sem precisar dobrar sua equipe." },
                                    { title: "IA Generativa", desc: "Implemente chatbots e assistentes que realmente entendem seu cliente." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 flex-shrink-0">
                                            <CheckIcon className="w-5 h-5 text-[var(--domu-accent)]" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                            <p className="text-white/50 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimateOnScroll>
                        
                        <AnimateOnScroll delay={200}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-[var(--domu-accent)]/20 blur-3xl rounded-full"></div>
                                <div className="relative bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
                                    <AutomationIcon className="w-16 h-16 text-[var(--domu-accent)] mb-6" />
                                    <h3 className="text-2xl font-black mb-4">Fluxos conectados</h3>
                                    <p className="text-white/60 mb-6 italic">"Automatizamos desde a entrada do lead no CRM até o pós-venda, garantindo que nada se perca no caminho."</p>
                                    <div className="flex items-center gap-4 p-4 bg-black/40 rounded-lg border border-white/5">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Sistema Ativo: IA Processando</span>
                                    </div>
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
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-8 italic">
                        Sua empresa está pronta para a IA?
                    </h2>
                    <a href="/chatbot-placeholder" className="btn-budget mx-auto">
                        <ArrowUpRightIcon className="w-5 h-5" />
                        Falar com Especialista
                    </a>
                </AnimateOnScroll>
            </section>
        </div>
    );
};

export default AutomationServicePage;
