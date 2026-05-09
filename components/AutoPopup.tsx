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
                        initial={{ scale: 0, rotate: -20, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0, rotate: 20, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={showPopup}
                        className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[999] w-14 h-14 md:w-16 md:h-16 bg-white/[0.08] backdrop-blur-xl text-white rounded-full flex items-center justify-center shadow-2xl border border-white/10 group overflow-hidden"
                        aria-label="Ver calculadora de orçamento"
                    >
                        {/* Pulse effect background */}
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />

                        <div className="relative z-10 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-6 h-6 md:w-7 md:h-7 opacity-80 group-hover:opacity-100 transition-opacity">
                                <rect x="4" y="2" width="16" height="20" rx="2" />
                                <path d="M8 6h8M8 10h8M8 14h8M8 18h8" />
                            </svg>
                            {/* Pontinho de atenção - more refined */}
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] border-2 border-black/50" />
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
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="relative w-full max-w-[440px] bg-black/60 backdrop-blur-2xl rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                        >
                            {/* Subtle internal glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />

                            {/* Close Button */}
                            <button 
                                onClick={closePopup}
                                className="absolute top-8 right-8 text-white/20 hover:text-white transition-all z-50 hover:scale-110"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="p-8 md:p-14 relative z-10">
                                <h2 className="text-white font-black text-3xl md:text-4xl leading-[1.1]  tracking-[-0.02em] mb-6">
                                    QUANTO CUSTA <br />
                                    O SEU <span className="text-gradient">PRÓXIMO SITE?</span>
                                </h2>
                                
                                <p className="text-white/50 text-sm md:text-base leading-relaxed mb-10">
                                    Descubra o investimento ideal para o seu projeto com nossa calculadora de precisão.
                                </p>

                                <motion.button 
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleAction}
                                    className="w-full bg-[var(--domu-accent)] text-white py-5 rounded-2xl font-black uppercase text-[12px] tracking-[0.15em] transition-all flex items-center justify-center gap-4 shadow-[0_15px_30px_rgba(88,127,129,0.2)]"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                                        <rect x="4" y="2" width="16" height="20" rx="2" />
                                        <path d="M8 6h8M8 10h8M8 14h8M8 18h8" />
                                    </svg>
                                    <span>Calcular agora</span>
                                </motion.button>
                            </div>

                            {/* Ghost Logo Accent - Bem sutil */}
                            <div className="absolute bottom-[-5%] right-[-5%] w-48 h-48 rotate-[-15deg] opacity-[0.03] pointer-events-none">
                                <img src="/logos/logobranca.png" alt="" className="w-full h-auto" />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AutoPopup;
