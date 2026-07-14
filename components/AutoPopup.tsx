import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, X } from '@phosphor-icons/react';

const AutoPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const showPopup = () => setIsVisible(true);

    const closePopup = () => {
        setIsVisible(false);
        localStorage.setItem('domu_popup_last_closed', Date.now().toString());
    };

    useEffect(() => {
        const checkCooldown = () => {
            const lastClosed = localStorage.getItem('domu_popup_last_closed');
            const COOLDOWN_TIME = 60 * 60 * 1000;
            if (lastClosed) {
                const timePassed = Date.now() - parseInt(lastClosed, 10);
                if (timePassed < COOLDOWN_TIME) return false;
            }
            return true;
        };

        const timer = setTimeout(() => {
            if (checkCooldown()) showPopup();
        }, 10000);

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible' && checkCooldown()) {
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
        closePopup();
        window.location.href = '/chatbot-placeholder';
    };

    return (
        <>
            <AnimatePresence>
                {!isVisible && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={showPopup}
                        className="fixed bottom-[5.75rem] right-5 z-[999] w-14 h-14 rounded-full flex items-center justify-center bg-[var(--domu-accent)] shadow-[0_10px_28px_-8px_rgba(0,71,255,0.55)] border border-white/20 hover:bg-[var(--domu-accent-hover)] transition-colors"
                        aria-label="Ver calculadora de orçamento"
                    >
                        <Calculator className="w-7 h-7 text-white" weight="bold" color="#ffffff" />
                        <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5 z-10">
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70"
                                style={{ backgroundColor: '#ffffff' }}
                            />
                            <span
                                className="relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-[var(--domu-accent)] shadow-sm"
                                style={{ backgroundColor: '#ffffff' }}
                            />
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isVisible && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closePopup}
                            className="absolute inset-0 bg-[var(--domu-dark-bg)]/40 backdrop-blur-[2px]"
                        />

                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="calc-popup-title"
                            initial={{ opacity: 0, y: 16, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                            className="relative w-full max-w-[420px] overflow-hidden rounded-lg border border-white/12 bg-[var(--domu-dark-bg)] shadow-[0_24px_64px_-24px_rgba(0,0,0,0.65)]"
                        >
                            <div className="absolute -top-20 -right-16 w-56 h-56 rounded-full bg-[var(--domu-accent)]/25 blur-[90px] pointer-events-none" />
                            <div className="absolute -bottom-24 -left-16 w-56 h-56 rounded-full bg-[var(--domu-accent)]/15 blur-[90px] pointer-events-none" />

                            <button
                                type="button"
                                onClick={closePopup}
                                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-lg flex items-center justify-center hover:brightness-95 transition-all shadow-sm"
                                style={{ backgroundColor: '#ffffff' }}
                                aria-label="Fechar"
                            >
                                <X className="w-4 h-4" weight="bold" color="#0047FF" />
                            </button>

                            <div className="relative z-10 p-7 md:p-8">
                                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 bg-[var(--domu-accent)]">
                                    <Calculator className="w-5 h-5" weight="bold" color="#ffffff" />
                                </div>

                                <p className="type-eyebrow mb-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
                                    Calculadora de orçamento
                                </p>

                                <h2
                                    id="calc-popup-title"
                                    className="font-black text-[1.5rem] md:text-[1.75rem] leading-tight tracking-tight mb-3"
                                    style={{ color: '#ffffff' }}
                                >
                                    Quanto custa o seu{' '}
                                    <span style={{ color: '#4D7CFF' }}>próximo site?</span>
                                </h2>

                                <p
                                    className="type-body mb-7 max-w-[34ch]"
                                    style={{ color: 'rgba(255,255,255,0.65)' }}
                                >
                                    Descubra o investimento ideal para o seu projeto com nossa estimativa rápida e sem compromisso.
                                </p>

                                <button
                                    type="button"
                                    onClick={handleAction}
                                    className="btn-budget w-full !text-white"
                                >
                                    <Calculator className="w-3.5 h-3.5" weight="bold" color="#ffffff" />
                                    Calcular agora
                                </button>

                                <p
                                    className="type-eyebrow text-center mt-4"
                                    style={{ color: 'rgba(255,255,255,0.35)' }}
                                >
                                    Resposta em poucos minutos
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AutoPopup;
