import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AutoPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasClosedManually, setHasClosedManually] = useState(false);

    const showPopup = () => {
        setIsVisible(true);
        setHasClosedManually(false);
    };

    const closePopup = () => {
        setIsVisible(false);
        setHasClosedManually(true);
        // Salva o timestamp do fechamento para evitar incomodar o usuário
        localStorage.setItem('domu_popup_last_closed', Date.now().toString());
    };

    useEffect(() => {
        const checkCooldown = () => {
            const lastClosed = localStorage.getItem('domu_popup_last_closed');
            const COOLDOWN_TIME = 60 * 60 * 1000; // 1 hora de paz

            if (lastClosed) {
                const timePassed = Date.now() - parseInt(lastClosed);
                if (timePassed < COOLDOWN_TIME) return false;
            }
            return true;
        };

        // Aparece no load inicial (após delay) se não estiver no cooldown
        const timer = setTimeout(() => {
            if (checkCooldown()) {
                showPopup();
            }
        }, 10000); // 10 segundos para não ser agressivo

        // Lógica de Reaparecer ao voltar para a guia (com cautela)
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible' && checkCooldown()) {
                // Pequeno delay ao voltar para a aba
                setTimeout(showPopup, 3000);
            }
        };

        window.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    const handleAction = () => {
        setIsVisible(false);
        localStorage.setItem('domo_popup_last_closed', Date.now().toString());
        window.location.href = '/chatbot-placeholder'; 
    };

    return (
        <>
            {/* Botão Flutuante Esquerdo (Toggle) - Sempre visível se o modal estiver fechado */}
            <AnimatePresence>
                {!isVisible && (
                    <motion.button
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={showPopup}
                        className="fixed bottom-10 left-10 z-[999] w-14 h-14 bg-gradient-to-br from-[#121212] to-[#1a1a1a] text-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.4)] border border-white/10 group overflow-hidden"
                        aria-label="Ver calculadora de orçamento"
                    >
                        {/* Shimmer premium for toggle button */}
                        <div className="absolute top-0 left-[-120px] w-[120px] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-30deg] pointer-events-none group-hover:animate-shimmer-premium-slow" />

                        <div className="relative">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-6 h-6">
                                <rect x="4" y="2" width="16" height="20" rx="2" />
                                <path d="M8 6h8M8 10h8M8 14h8M8 18h8" />
                            </svg>
                            {/* Pontinho de atenção */}
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] border border-black/20" />
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute left-16 bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-xl shadow-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap text-[10px] font-black uppercase tracking-widest -translate-x-2 group-hover:translate-x-0">
                            Calculadora de Orçamento
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Modal de Pop-up */}
            <AnimatePresence>
                {isVisible && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                        {/* Overlay */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closePopup}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />

                        {/* Popup Card */}
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 40 }}
                            className="relative w-full max-w-[500px] bg-[#0a0a0a] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/10"
                        >
                            {/* Background Gloss */}
                            <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-white/[0.03] rounded-full blur-[80px] pointer-events-none" />
                            <div className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] bg-white/[0.02] rounded-full blur-[60px] pointer-events-none" />

                            {/* Botão Fechar */}
                            <button 
                                onClick={closePopup}
                                className="absolute top-8 right-8 text-white/20 hover:text-white hover:rotate-90 transition-all duration-300 z-50 p-2 bg-white/5 rounded-full backdrop-blur-md border border-white/5"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="p-10 md:p-14 relative z-10">
                                <div className="flex flex-col gap-2 mb-8">
                                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 w-fit px-4 py-1.5 rounded-full mb-2">
                                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" />
                                        <span className="text-white/40 font-black text-[9px] uppercase tracking-[0.2em]">Oportunidade Única</span>
                                    </div>
                                    <h2 className="text-white font-[950] text-3xl md:text-4xl leading-[1.05] uppercase tracking-[-0.03em] max-w-[12ch]">
                                        QUANTO CUSTA O SEU <span className="text-gradient">PRÓXIMO SITE?</span>
                                    </h2>
                                </div>
                                
                                <p className="text-white/50 text-[13px] md:text-sm leading-relaxed mb-10 max-w-[320px] font-medium">
                                    Não perca tempo com orçamentos lentos. Use nossa <span className="text-white">Calculadora Inteligente</span> e receba um valor estimado em segundos.
                                </p>

                                <motion.button 
                                    whileHover={{ scale: 1.02, y: -4 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleAction}
                                    className="relative w-full bg-white text-black py-6 rounded-2xl font-[950] uppercase text-[12px] tracking-[0.2em] shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-4 group overflow-hidden"
                                >
                                    {/* Inner Shimmer Premium */}
                                    <div className="absolute top-0 left-[-120px] w-[120px] h-full bg-gradient-to-r from-transparent via-black/[0.15] to-transparent skew-x-[-30deg] pointer-events-none group-hover:animate-shimmer-premium-slow" />

                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="w-5 h-5">
                                        <rect x="4" y="2" width="16" height="20" rx="2" />
                                        <path d="M8 6h8M8 10h8M8 14h8M8 18h8" />
                                    </svg>
                                    Calcular agora
                                </motion.button>

                                <p className="text-center mt-8 text-[9px] text-white/20 uppercase tracking-[0.3em] font-black">
                                    Grátis • Instantâneo • Profissional
                                </p>
                            </div>

                            {/* Ilustração Branding peek - more visible but elegant */}
                            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 rotate-[-15deg] opacity-[0.07] pointer-events-none hidden md:block">
                                <img src="/logos/logobranca.png" alt="" className="w-full h-auto object-contain blur-[1px]" />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AutoPopup;
