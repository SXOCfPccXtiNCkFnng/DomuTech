import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from './icons';

const ChatbotPlaceholder: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
            <div className="max-w-2xl text-center">
                <div className="w-24 h-24 bg-[#121212]/5 rounded-full flex items-center justify-center mx-auto mb-8 text-[#121212] animate-float">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-12 h-12">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        <circle cx="9" cy="9" r="1.5" fill="currentColor" />
                        <circle cx="15" cy="9" r="1.5" fill="currentColor" />
                    </svg>
                </div>
                
                <h1 className="text-[#121212] xxl md:text-5xl font-black uppercase tracking-tighter mb-6">
                    Futuro Orçamento via Chatbot
                </h1>
                
                <p className="text-[#4a4a4a] text-lg md:text-xl leading-relaxed mb-10 opacity-80">
                    Estamos desenvolvendo uma experiência de orçamento inteligente e automatizada. 
                    Em breve, você poderá calcular o valor do seu projeto em tempo real com nossa IA.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                        onClick={() => navigate('/')}
                        className="inline-flex items-center gap-3 border-2 border-[#121212] text-[#121212] px-8 py-4 rounded-full font-black text-[11px] tracking-widest hover:bg-[#121212] hover:text-white transition-all uppercase"
                    >
                        <ArrowRightIcon className="w-4 h-4 rotate-180" />
                        Voltar para Home
                    </button>
                    
                    <a 
                        href="https://wa.me/5511934430659"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 bg-[#121212] text-white px-8 py-4 rounded-full font-black text-[11px] tracking-widest hover:bg-transparent hover:text-[#121212] border-2 border-[#121212] transition-all uppercase shadow-lg shadow-black/10"
                    >
                        Falar com Humano Agora
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ChatbotPlaceholder;
