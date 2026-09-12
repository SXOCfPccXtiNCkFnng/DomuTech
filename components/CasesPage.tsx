import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import { ExternalLinkIcon, ArrowUpRightIcon } from './icons';
import { PLACEHOLDER_IMG, PH } from '../constants';

const CASES = Array.from({ length: 5 }, (_, i) => ({
    title: `${PH.title} ${String(i + 1).padStart(2, '0')}`,
    category: PH.category,
    img: PLACEHOLDER_IMG,
    link: '#',
}));

const CasesPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-[var(--domu-primary)] selection:bg-[var(--domu-accent)] selection:text-white">
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6">
                    <AnimateOnScroll>
                        <span className="text-[var(--domu-muted)] font-black text-[11px] uppercase tracking-[0.4em] mb-6 block">
                            {PH.tag}
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black text-[var(--domu-primary)] mb-8 tracking-tighter italic">
                            {PH.title} <span className="text-gradient">placeholder</span>
                        </h1>
                        <p className="text-[var(--domu-muted)] text-lg max-w-2xl leading-relaxed">
                            {PH.text}
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            <section className="pb-32">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {CASES.map((item, i) => (
                            <AnimateOnScroll key={item.title} delay={i * 100}>
                                <a
                                    href={item.link}
                                    className="group relative block aspect-[16/10] overflow-hidden rounded-lg border border-[var(--domu-border)] bg-white"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="h-full w-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />

                                    <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                                        <div>
                                            <span className="text-[var(--domu-accent)] font-black text-[10px] uppercase tracking-[0.2em] mb-2 block">
                                                {item.category}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-black italic text-[var(--domu-primary)]">{item.title}</h3>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-[var(--domu-accent-soft)] flex items-center justify-center border border-[var(--domu-border)] group-hover:bg-[var(--domu-accent)] group-hover:border-[var(--domu-accent)] group-hover:text-white transition-all duration-300">
                                            <ExternalLinkIcon className="w-5 h-5" />
                                        </div>
                                    </div>
                                </a>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white text-center border-t border-[var(--domu-border)]">
                <AnimateOnScroll>
                    <h2 className="text-3xl md:text-5xl font-black text-[var(--domu-primary)] mb-4 italic">
                        {PH.title}
                    </h2>
                    <p className="text-[var(--domu-muted)] max-w-xl mx-auto mb-10">
                        {PH.text}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link to="/login" className="btn-budget">
                            <ArrowUpRightIcon className="w-3.5 h-3.5" />
                            {PH.button}
                        </Link>
                        <Link to="/painel" className="hero-text-link text-[var(--domu-muted)] hover:text-[var(--domu-primary)]">
                            {PH.button}
                        </Link>
                    </div>
                </AnimateOnScroll>
            </section>
        </div>
    );
};

export default CasesPage;
