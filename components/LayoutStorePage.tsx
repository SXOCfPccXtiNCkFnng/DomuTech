import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import { ArrowRightIcon, ShoppingBagIcon, SparklesIcon, ZapIcon, LayoutIcon, CheckIcon } from './icons';
import { PLACEHOLDER_IMG, PH } from '../constants';

const LAYOUTS = Array.from({ length: 34 }, (_, i) => ({
    id: String(i + 1),
    name: `${PH.title} ${String(i + 1).padStart(2, '0')}`,
    category: PH.category,
    price: 'R$ 0,00',
    image: PLACEHOLDER_IMG,
    features: [PH.label, PH.label, PH.label],
    description: PH.text,
    isPopular: i === 0,
}));

const LayoutStorePage: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <div className="min-h-screen bg-white pt-24 pb-20 overflow-hidden text-[var(--domu-primary)]">
            {/* Hero Section */}
            <section className="relative py-20 page-pad-x">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[var(--domu-accent)]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
                
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--domu-accent)]/10 border border-[var(--domu-accent)]/20 rounded-full mb-8"
                    >
                        <SparklesIcon className="w-4 h-4 text-[var(--domu-accent)]" />
                        <span className="text-[var(--domu-accent)] font-black text-[10px] uppercase tracking-[0.3em]">Tag placeholder</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="h1-domu text-[var(--domu-primary)] mb-8 italic"
                    >
                        Título placeholder <span className="text-gradient">placeholder</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-domu text-[var(--domu-muted)] max-w-3xl mx-auto"
                    >
                        Texto placeholder. Conteúdo temporário para layout e revisão visual.
                    </motion.p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="container mx-auto pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                    {LAYOUTS.slice(0, visibleCount).map((layout, index) => (
                        <AnimateOnScroll key={layout.id} delay={(index % 6) * 100}>
                            <div className="group relative flex flex-col bg-white border border-[var(--domu-border)] rounded-3xl overflow-hidden hover:border-[var(--domu-accent)]/30 transition-all duration-700">
                                
                                {/* Image Container / Placeholders "Em Breve" */}
                                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--domu-accent-soft)] flex flex-col items-center justify-center border-b border-[var(--domu-border)] transition-all duration-700">
                                    {/* Tech Grid Pattern */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(10,15,24,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(10,15,24,0.04)_1px,transparent_1px)] bg-[size:20px_20px] opacity-60"></div>
                                    
                                    {/* Glowing Aura */}
                                    <div className="absolute w-40 h-40 bg-[var(--domu-accent)]/10 rounded-full blur-[40px] group-hover:bg-[var(--domu-accent)]/20 group-hover:scale-125 transition-all duration-700"></div>
                                    
                                    {/* Styled glassmorphism display in center */}
                                    <div className="relative z-10 p-6 rounded-2xl bg-white border border-[var(--domu-border)] flex flex-col items-center gap-4 text-center max-w-[80%] shadow-sm group-hover:border-[var(--domu-accent)]/30 transition-all duration-700">
                                        <div className="w-12 h-12 bg-[var(--domu-accent)]/10 rounded-xl border border-[var(--domu-accent)]/20 flex items-center justify-center text-[var(--domu-accent)] group-hover:scale-110 transition-transform duration-500">
                                            <LayoutIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-[var(--domu-primary)] font-black text-xs uppercase tracking-[0.25em] mb-1">
                                                Placeholder
                                            </div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--domu-accent)]">
                                                PLACEHOLDER
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Overlay Buttons */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/70 backdrop-blur-sm">
                                        <Link to="/login" className="btn-budget">
                                            Botão placeholder
                                        </Link>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-10 flex-grow flex flex-col bg-white">
                                    <span className="inline-block px-3 py-1 rounded-full bg-[var(--domu-accent)]/10 text-[var(--domu-accent)] font-black text-[9px] uppercase tracking-[0.15em] mb-5 self-start">
                                        {layout.category}
                                    </span>
                                    <h3 className="text-[var(--domu-primary)] font-black text-2xl mb-4 group-hover:text-[var(--domu-accent)] transition-colors">
                                        {layout.name}
                                    </h3>
                                    
                                    <p className="text-[var(--domu-muted)] text-sm leading-relaxed mb-8 min-h-[48px]">
                                        {layout.description}
                                    </p>
                                    
                                    <div className="flex flex-col gap-3 mb-10">
                                        {layout.features.map((f, fi) => (
                                            <div key={fi} className="flex items-center gap-3">
                                                <div className="w-4 h-4 rounded-full bg-[var(--domu-accent)]/20 flex items-center justify-center">
                                                    <CheckIcon className="w-2.5 h-2.5 text-[var(--domu-accent)]" />
                                                </div>
                                                <span className="text-[var(--domu-muted)] text-sm font-medium">{f}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-[var(--domu-border)]">
                                        <div className="flex flex-col">
                                            <span className="text-[var(--domu-muted)] text-[9px] font-black uppercase tracking-widest">Label placeholder</span>
                                            <span className="text-[var(--domu-primary)] font-black text-lg tracking-tighter">{layout.price}</span>
                                        </div>
                                        <Link to="/login" className="flex items-center justify-center w-12 h-12 bg-white border border-[var(--domu-border)] rounded-2xl hover:bg-[var(--domu-accent)] hover:border-[var(--domu-accent)] text-[var(--domu-primary)] hover:text-white transition-all duration-500">
                                            <ShoppingBagIcon className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>

                {visibleCount < LAYOUTS.length && (
                    <div className="flex justify-center mt-16">
                        <button
                            onClick={handleLoadMore}
                            className="btn-domu-outline inline-flex items-center gap-2"
                        >
                            <span>Botão placeholder</span>
                            <ZapIcon className="w-4 h-4 text-[var(--domu-accent)] group-hover:text-white" />
                        </button>
                    </div>
                )}
            </section>

            {/* Benefits Section */}
            <section className="bg-white border-y border-[var(--domu-border)] py-32 page-pad-x">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                        {[
                            { icon: ZapIcon, title: 'Título placeholder', desc: 'Texto placeholder. Conteúdo temporário para layout e revisão visual.' },
                            { icon: LayoutIcon, title: 'Título placeholder', desc: 'Texto placeholder. Conteúdo temporário para layout e revisão visual.' },
                            { icon: SparklesIcon, title: 'Título placeholder', desc: 'Texto placeholder. Conteúdo temporário para layout e revisão visual.' },
                            { icon: CheckIcon, title: 'Título placeholder', desc: 'Texto placeholder. Conteúdo temporário para layout e revisão visual.' }
                        ].map((item, i) => (
                            <AnimateOnScroll key={i} delay={i * 100}>
                                <div className="flex flex-col gap-6">
                                    <div className="w-14 h-14 bg-[var(--domu-accent)]/10 rounded-2xl flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-[var(--domu-accent)]" />
                                    </div>
                                    <h4 className="text-[var(--domu-primary)] font-black text-xl tracking-wider">{item.title}</h4>
                                    <p className="text-[var(--domu-muted)] text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 page-pad-x bg-white">
                <div className="container mx-auto">
                    <div className="relative p-8 md:p-24 bg-white rounded-lg border border-[var(--domu-border)] overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--domu-accent-muted)]/5 blur-[120px] pointer-events-none" />
                        
                        <div className="relative z-10 max-w-3xl">
                             <h2 className="h1-domu text-2xl md:text-4xl text-[var(--domu-primary)] mb-8 italic">
                                Título placeholder <br />
                                <span className="text-gradient">placeholder</span>
                            </h2>
                            <p className="p-domu text-[var(--domu-muted)] text-lg mb-12">
                                Texto placeholder. Conteúdo temporário para layout e revisão visual.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    to="/login"
                                    className="btn-budget inline-flex items-center gap-2"
                                >
                                    Criar conta
                                    <ArrowRightIcon className="w-4 h-4" />
                                </Link>
                                <Link
                                    to="/painel"
                                    className="btn-domu-outline inline-flex items-center gap-2"
                                >
                                    Abrir painel (demo)
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LayoutStorePage;
