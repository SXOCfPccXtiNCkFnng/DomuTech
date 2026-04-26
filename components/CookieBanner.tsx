import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COOKIE_KEY = 'cookie-consent';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(COOKIE_KEY);
        if (!stored) {
            // Pequeno delay para não assustar o usuário assim que abre o site
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_KEY, 'accepted');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    initial={{ y: 100, opacity: 0, x: '-50%' }}
                    animate={{ y: 0, opacity: 1, x: '-50%' }}
                    exit={{ y: 100, opacity: 0, x: '-50%' }}
                    className="fixed bottom-6 md:bottom-10 left-1/2 z-[9999] w-[95%] max-w-3xl"
                >
                    <div className="bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.4)] rounded-3xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group">
                        {/* Shimmer effect on border hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />

                        <div className="flex items-center gap-5 relative z-10 px-2 lg:px-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/5">
                                <span className="text-xl md:text-2xl">🍪</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-white font-[950] text-[10px] md:text-[11px] uppercase tracking-[0.2em]">Controle de Cookies</h4>
                                <p className="text-[10px] md:text-[11px] text-[#a1a1a1] font-medium leading-relaxed max-w-lg uppercase">
                                    Utilizamos cookies para personalizar sua experiência e melhorar nosso desempenho. 
                                    Ao continuar, você concorda com nossos <a href="#" className="text-white underline decoration-white/30 hover:decoration-white transition-all underline-offset-4">Termos e Privacidade</a>.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4 relative z-10 pr-2">
                            <button
                                onClick={handleAccept}
                                className="bg-white text-black px-8 py-3.5 rounded-2xl font-[950] text-[10px] uppercase tracking-[0.15em] hover:scale-[1.03] active:scale-95 transition-all whitespace-nowrap shadow-lg shadow-white/10 hover:shadow-white/20"
                            >
                                Aceitar Tudo
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
