import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, CheckCircle, Clock, X } from '@phosphor-icons/react';

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
                        className="site-floating-action fixed bottom-[5.75rem] right-5 z-[999] w-14 h-14 rounded-full flex items-center justify-center bg-[var(--domu-accent)] shadow-[0_10px_28px_-8px_rgba(0,71,255,0.55)] border border-white/20 hover:bg-[var(--domu-accent-hover)] transition-colors"
                        aria-label="Ver calculadora de orçamento"
                    >
                        <Calculator className="w-7 h-7 text-white" weight="bold" color="#ffffff" />
                        <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5 z-10">
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--domu-accent)] opacity-60"
                            />
                            <span
                                className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[var(--domu-accent)] border-2 border-white shadow-sm"
                            />
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isVisible && (
                    <div className="auto-popup-layer fixed inset-0 z-[9999] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closePopup}
                            className="absolute inset-0 bg-[#101828]/20"
                        />

                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="calc-popup-title"
                            initial={{ opacity: 0, y: 16, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                            className="auto-popup-card relative w-full max-w-[440px]"
                        >
                            <button
                                type="button"
                                onClick={closePopup}
                                className="auto-popup-card__close"
                                aria-label="Fechar"
                            >
                                <X className="w-4 h-4" weight="bold" />
                            </button>

                            <div className="auto-popup-card__content">
                                <div className="auto-popup-card__intro">
                                    <div className="auto-popup-card__icon">
                                        <Calculator className="w-5 h-5" weight="duotone" />
                                    </div>
                                    <div>
                                        <p>Calculadora de orçamento</p>
                                        <span>Estimativa inicial gratuita</span>
                                    </div>
                                </div>

                                <h2
                                    id="calc-popup-title"
                                    className="auto-popup-card__title"
                                >
                                    Descubra quanto investir no seu{' '}
                                    <span>próximo projeto.</span>
                                </h2>

                                <p className="auto-popup-card__description">
                                    Responda algumas perguntas e receba uma estimativa adequada às necessidades da sua empresa.
                                </p>

                                <div className="auto-popup-card__benefits">
                                    <span>
                                        <Clock size={16} weight="duotone" />
                                        Leva menos de 2 minutos
                                    </span>
                                    <span>
                                        <CheckCircle size={16} weight="duotone" />
                                        Sem compromisso
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleAction}
                                    className="btn-budget w-full"
                                >
                                    Calcular meu projeto
                                    <Calculator className="w-3.5 h-3.5" weight="bold" />
                                </button>

                                <p className="auto-popup-card__support">
                                    Depois, nossa equipe pode ajudar você a refinar a estimativa.
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
