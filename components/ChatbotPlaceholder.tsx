import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, ArrowUpRightIcon, CheckIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

type Step = {
    question: string;
    options: { label: string; value: string; price?: number }[];
};

const STEPS: Step[] = [
    {
        question: "Qual o seu objetivo principal?",
        options: [
            { label: "Criação de Site/LP", value: "site", price: 3000 },
            { label: "Sistemas/Apps", value: "software", price: 8000 },
            { label: "IA & Automação", value: "automation", price: 5000 },
            { label: "Tráfego & Branding", value: "marketing", price: 2500 },
        ]
    },
    {
        question: "Qual o tamanho da sua operação?",
        options: [
            { label: "Estou começando agora", value: "startup", price: 0 },
            { label: "Empresa média (até 20 pessoas)", value: "medium", price: 2000 },
            { label: "Grande empresa / Indústria", value: "enterprise", price: 5000 },
        ]
    },
    {
        question: "Qual o prazo desejado?",
        options: [
            { label: "O mais rápido possível (Urgente)", value: "urgent", price: 2000 },
            { label: "Padrão (30 a 60 dias)", value: "normal", price: 0 },
            { label: "Não tenho pressa", value: "relaxed", price: -500 },
        ]
    }
];

const ChatbotPlaceholder: React.FC = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleOptionSelect = (option: { label: string; value: string; price?: number }) => {
        const newAnswers = [...answers, option.label];
        setAnswers(newAnswers);
        setTotalPrice(prev => prev + (option.price || 0));

        if (currentStep < STEPS.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    const generateWhatsAppLink = () => {
        const message = encodeURIComponent(
            `Olá DomuTech! Acabei de fazer uma simulação no site.\n\n` +
            `*Objetivo:* ${answers[0]}\n` +
            `*Tamanho:* ${answers[1]}\n` +
            `*Prazo:* ${answers[2]}\n` +
            `*Estimativa:* R$ ${totalPrice.toLocaleString('pt-BR')},00\n\n` +
            `Gostaria de validar esses valores com um especialista.`
        );
        return `https://wa.me/5511934430659?text=${message}`;
    };

    return (
        <div className="min-h-screen bg-[var(--domu-bg)] py-20 px-6 flex items-center justify-center">
            <div className="max-w-3xl w-full">
                {!isFinished ? (
                    <AnimateOnScroll className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[32px] backdrop-blur-xl">
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-[var(--domu-accent)] font-black text-xs uppercase tracking-[0.3em]">
                                Passo {currentStep + 1} de {STEPS.length}
                            </span>
                            <div className="flex gap-1">
                                {STEPS.map((_, i) => (
                                    <div key={i} className={`h-1 w-8 rounded-full transition-all ${i <= currentStep ? 'bg-[var(--domu-accent)]' : 'bg-white/10'}`} />
                                ))}
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tighter  italic leading-none">
                            {STEPS[currentStep].question}
                        </h2>

                        <div className="grid gap-4">
                            {STEPS[currentStep].options.map((option, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleOptionSelect(option)}
                                    className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-[var(--domu-accent)] hover:border-[var(--domu-accent)] transition-all duration-300"
                                >
                                    <span className="text-lg font-bold group-hover:text-white transition-colors">{option.label}</span>
                                    <ArrowRightIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </button>
                            ))}
                        </div>
                    </AnimateOnScroll>
                ) : (
                    <AnimateOnScroll className="text-center bg-white/5 border border-white/10 p-8 md:p-12 rounded-[32px] backdrop-blur-xl">
                        <div className="w-20 h-20 bg-[var(--domu-accent)] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(88,127,129,0.4)]">
                            <CheckIcon className="w-10 h-10 text-white" />
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter  italic">
                            Estimativa Pronta!
                        </h2>
                        
                        <p className="text-[var(--domu-muted)] text-lg mb-10">
                            Com base nas suas respostas, o investimento estimado para o seu projeto é de:
                        </p>

                        <div className="text-5xl md:text-7xl font-black text-gradient mb-12">
                            R$ {totalPrice.toLocaleString('pt-BR')},00*
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <button 
                                onClick={() => { setIsFinished(false); setCurrentStep(0); setAnswers([]); setTotalPrice(0); }}
                                className="btn-domu-outline"
                            >
                                Refazer Simulação
                            </button>
                            <a 
                                href={generateWhatsAppLink()}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-budget"
                            >
                                <ArrowUpRightIcon className="w-5 h-5" />
                                Validar no WhatsApp
                            </a>
                        </div>

                        <p className="mt-12 text-[10px] uppercase tracking-widest text-white/30">
                            *Valores baseados em médias de mercado. O orçamento final depende de análise técnica.
                        </p>
                    </AnimateOnScroll>
                )}
            </div>
        </div>
    );
};

export default ChatbotPlaceholder;
