import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import { ArrowUpRightIcon } from './icons';
import { PLACEHOLDER_IMG, PH } from '../constants';

const AboutPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-[var(--domu-primary)] selection:bg-[var(--domu-accent)] selection:text-white">
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <AnimateOnScroll>
                        <span className="text-[var(--domu-muted)] font-black text-[11px] uppercase tracking-[0.4em] mb-6 block">
                            {PH.tag}
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black text-[var(--domu-primary)] mb-8 tracking-tighter leading-tight italic">
                            {PH.title} <br />
                            <span className="text-gradient">placeholder</span>
                        </h1>
                        <p className="text-[var(--domu-muted)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            {PH.text}
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            <section className="py-20 bg-white border-y border-[var(--domu-border)]">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[0, 1, 2].map((i) => (
                            <AnimateOnScroll key={i} delay={i * 200}>
                                <div className="p-8 bg-white border border-[var(--domu-border)] rounded-3xl hover:border-[var(--domu-accent)] transition-all group">
                                    <div className="w-12 h-12 bg-[var(--domu-accent)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <ArrowUpRightIcon className="w-6 h-6 text-[var(--domu-accent)]" />
                                    </div>
                                    <h3 className="text-xl font-black tracking-tighter mb-4 text-[var(--domu-primary)]">{PH.title}</h3>
                                    <p className="text-[var(--domu-muted)] leading-relaxed">{PH.text}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimateOnScroll>
                            <h2 className="h2-domu text-[var(--domu-primary)] mb-8">{PH.title}</h2>
                            <div className="space-y-6 text-[var(--domu-muted)]">
                                <p>{PH.text}</p>
                                <p>{PH.text}</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => navigate('/login')}
                                className="btn-budget mt-10"
                            >
                                <ArrowUpRightIcon className="w-3.5 h-3.5" />
                                {PH.button}
                            </button>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={300}>
                            <div className="relative rounded-lg overflow-hidden border border-[var(--domu-border)] bg-white">
                                <img
                                    src={PLACEHOLDER_IMG}
                                    alt="Placeholder"
                                    className="w-full"
                                />
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
