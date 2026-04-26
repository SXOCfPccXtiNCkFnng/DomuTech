import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const NICHES = [
    {
        title: 'Site para Advogados',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
                <path d="M6 18h12M12 22V10m0 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        bgColor: 'bg-[#0a0a0a]',
        textColor: 'text-[#FFFFFF]'
    },
    {
        title: 'Site para Médicos',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        bgColor: 'bg-white/5',
        textColor: 'text-yellow-600'
    },
    {
        title: 'Site para Contabilidade',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <path d="M8 6h8M8 10h8M8 14h8M8 18h8" strokeLinecap="round" />
            </svg>
        ),
        bgColor: 'bg-white/5',
        textColor: 'text-white'
    },
    {
        title: 'Site para Empresas de Tecnologia',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" strokeLinecap="round" />
            </svg>
        ),
        bgColor: 'bg-[#0a0a0a]',
        textColor: 'text-[#FFFFFF]'
    },
];

const NicheServices: React.FC = () => {
    return (
        <section className="py-10 md:py-16 bg-[var(--domo-bg)]">
            <div className="container mx-auto px-4 text-center">
                
                <AnimateOnScroll>
                    <h2 className="h2-domo text-white mb-16 px-4">
                        Também criamos site para:
                    </h2>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
                    {NICHES.map((niche, i) => (
                        <AnimateOnScroll key={i} delay={i * 100}>
                            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 h-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl group cursor-default">
                                <div className={`bg-white/10 text-white w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {niche.icon}
                                </div>
                                <h3 className="text-white font-black text-[15px] uppercase tracking-tight leading-tight max-w-[140px] transition-colors group-hover:text-white">
                                    {niche.title}
                                </h3>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>

                <AnimateOnScroll delay={400}>
                    <a 
                        href="#services" 
                        className="btn-view-all"
                    >
                        Ver todos
                    </a>
                </AnimateOnScroll>

            </div>
        </section>
    );
};

export default NicheServices;
