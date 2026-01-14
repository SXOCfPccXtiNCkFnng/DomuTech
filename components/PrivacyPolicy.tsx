import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <section id="privacy" className="py-20 bg-white dark:bg-neutral-950 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-200 mb-4">
                        Política de Privacidade e Cookies
                    </h2>
                    <p className="text-slate-700 dark:text-slate-400 mb-6">
                        Respeitamos sua privacidade. Esta política explica quais dados coletamos e como usamos essas informações.
                    </p>
                    <div className="space-y-6 text-sm sm:text-base text-slate-700 dark:text-slate-400">
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-slate-200 mb-2">1) Dados coletados</h3>
                            <p>
                                Podemos coletar dados de navegação (ex.: páginas acessadas, tempo no site e tipo de dispositivo) para melhorar a experiência e performance.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-slate-200 mb-2">2) Uso das informações</h3>
                            <p>
                                As informações são usadas para análise de desempenho, melhoria de conteúdo e segurança. Não vendemos seus dados.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-slate-200 mb-2">3) Cookies</h3>
                            <p>
                                Utilizamos cookies essenciais e analíticos. Você pode aceitar ou não os cookies analíticos no banner exibido.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-slate-200 mb-2">4) Contato</h3>
                            <p>
                                Em caso de dúvidas, fale conosco pelo e-mail disponível no rodapé do site.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
