import React, { useEffect, useState } from 'react';

const COOKIE_KEY = 'cookie-consent';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(COOKIE_KEY);
        if (!stored) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_KEY, 'accepted');
        setIsVisible(false);
    };

    const handleTogglePolicy = () => {
        setIsExpanded(prev => !prev);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-4 left-4 z-[9999] max-w-xs sm:max-w-sm">
            <div className={`bg-white/95 dark:bg-neutral-950/95 border border-violet-200/60 dark:border-violet-400/20 shadow-2xl rounded-2xl p-4 backdrop-blur transition-all duration-300 ${isExpanded ? 'pb-5' : ''}`}>
                <div className="flex items-start gap-3">
                    <div className="mt-1 flex items-center">
                        <span className="text-lg" aria-hidden="true">🍪</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-xs uppercase tracking-wide text-violet-600 dark:text-violet-400 font-semibold">
                            Cookies
                        </p>
                        <p className="mt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            Usamos cookies para melhorar sua experiência.
                        </p>
                        <div className="mt-3 flex items-center gap-3">
                            <button
                                onClick={handleAccept}
                                className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-violet-600 text-white font-semibold text-xs sm:text-sm hover:bg-violet-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950"
                            >
                                ACEITAR
                            </button>
                            <button
                                type="button"
                                onClick={handleTogglePolicy}
                                className="text-xs sm:text-sm text-violet-600 dark:text-violet-400 font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950"
                                aria-expanded={isExpanded}
                            >
                                {isExpanded ? 'Ocultar política' : 'Ver política'}
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`mt-4 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-3">
                        <p className="font-semibold text-slate-900 dark:text-slate-200">Política de Privacidade e Cookies</p>
                        <p>
                            Respeitamos sua privacidade. Esta política explica quais dados coletamos e como usamos essas informações.
                        </p>
                        <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-200">1) Dados coletados</p>
                            <p>
                                Podemos coletar dados de navegação (ex.: páginas acessadas, tempo no site e tipo de dispositivo) para melhorar a experiência e performance.
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-200">2) Uso das informações</p>
                            <p>
                                As informações são usadas para análise de desempenho, melhoria de conteúdo e segurança. Não vendemos seus dados.
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-200">3) Cookies</p>
                            <p>
                                Utilizamos cookies essenciais e analíticos. Você pode aceitar ou não os cookies analíticos no banner exibido.
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-200">4) Contato</p>
                            <p>
                                Em caso de dúvidas, fale conosco pelo e-mail disponível no rodapé do site.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
