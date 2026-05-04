import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

const RAW_TESTIMONIALS = [
    {
        name: 'Ricardo Porcher',
        company: 'VERSI BR',
        text: 'Tivemos um projeto desafiador em termos de prazo já que a construção do site estava ligada a um rebranding da empresa. Durante todo o processo a comunicação com o time da Domu tech foi muito fluida, inclusive fazendo a entrega antes do previsto. O custo-benefício do projeto também foi um fator decisivo na escolha. Parabéns ao time pelo trabalho e profissionalismo.',
    },
    {
        name: 'Jaque Pivato',
        company: 'REFRISAT',
        text: 'A empresa é organizada e tem uma esquemática boa para criar sites. O sistema de revisões é bom e eles fazem tudo no tempo que se comprometeram a fazer. Não analisei ainda o impacto de resultado SEO mas da análise inicial também está tudo ok. Acho que a principal vantagem de ter um site feito pela Up é a confecção rápida e o design profissional de sites.',
    },
    {
        name: 'Flora Nicotero',
        company: 'EDUARDO VEÍCULOS ANTIGOS',
        text: 'Tivemos uma experiência incrível com a Domu tech. Apesar de não ser uma pessoa nada tecnológica, achei super fácil usar a ferramenta de feedback de cada página do site. É muito intuitivo. Eles até sugeriram uma foto linda e profissional que deixou o site com um look bem moderno. Tudo fluiu de forma muito profissional, suave e eficiente sem qualquer stress. O mais bacana é que o site ficou lindo, dinâmico e contemporâneo. Super recomendo! Experiência Nota 10!',
    },
    {
        name: 'Daniele Neves',
        company: 'ALDANTH',
        text: 'Com a Domu tech tivemos um upgrade incrível do nosso site. E o melhor: todo o processo de desenvolvimento do site foi extremamente simplificado, mas sem deixar de atender a todas as nossas demandas. Agradeço à gerente de projetos Thais Miranda que nos acompanhou durante o desenvolvimento web com toda a paciência do mundo.',
    },
    {
        name: 'Marco Castello',
        company: 'ESSENTIAL IDIOMAS',
        text: 'Estamos muito satisfeitos com todo o processo de desenvolvimento de site para a Essential. A equipe da Domu tech foi sempre muito atenciosa, com bons insights e muito dispostos a nos atender. O resultado final do site foi excelente. Tanto em termos de performance quanto em SEO, nossa empresa melhorou bastante.',
    },
];

const GAP = 24;

const Testimonials: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerW, setContainerW] = useState(1200);

    const N = RAW_TESTIMONIALS.length;
    const items = [...RAW_TESTIMONIALS, ...RAW_TESTIMONIALS, ...RAW_TESTIMONIALS];

    const isMobile = containerW < 768;
    const visibleCards = isMobile ? 1 : 3;
    
    // Matemátega precisa com margem de segurança para evitar o "vazamento" do próximo card
    // Matématica exata para caber exatamente N cards na tela
    const slideW = (containerW - (GAP * (visibleCards - 1))) / visibleCards;
    const STEP = slideW + GAP;

    const [current, setCurrent] = useState(N);
    const currentRef = useRef(N);
    const isAnimating = useRef(false);
    
    const trackX = useMotionValue(-N * STEP);

    /* ── goTo ─────────────────────────────────────────────────────────────── */
    const goTo = useCallback((idx: number) => {
        if (isAnimating.current) return;
        isAnimating.current = true;
        currentRef.current = idx;
        setCurrent(idx);

        animate(trackX, -idx * STEP, {
            type: 'spring',
            stiffness: 250,
            damping: 30,
            mass: 1,
            onComplete: () => {
                isAnimating.current = false;
                
                let normalized = idx;
                if (idx >= N * 2) normalized = idx - N;
                else if (idx < N) normalized = idx + N;

                if (normalized !== idx) {
                    currentRef.current = normalized;
                    setCurrent(normalized);
                    trackX.set(-normalized * STEP);
                }
            }
        });
    }, [N, STEP, trackX]);

    /* ── Medições ─────────────────────────────────────────────────────────── */
    useEffect(() => {
        const measure = () => {
            if (containerRef.current) setContainerW(containerRef.current.clientWidth);
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    useEffect(() => {
        trackX.set(-currentRef.current * STEP);
    }, [containerW, STEP, trackX]);

    /* ── Drag ─────────────────────────────────────────────────────────────── */
    const onDragEnd = (_: any, info: { velocity: { x: number } }) => {
        isAnimating.current = false;
        const v = info.velocity.x;
        const x = trackX.get();
        // Ajuste de "snap" baseado na velocidade e posição
        const raw = -x / STEP + (v < -300 ? 0.5 : v > 300 ? -0.5 : 0);
        goTo(Math.round(raw));
    };

    return (
        <section id="testimonials" className="py-10 md:py-16 bg-[var(--domu-bg)] relative overflow-hidden">
            {/* Branding Ghosts Constellation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06]">
                <img src="/logos/logobranca.png" className="absolute top-[10%] right-[10%] w-32 h-32 animate-float" alt="" />
                <img src="/logos/logobranca.png" className="absolute bottom-[10%] left-[-5%] w-56 h-56 animate-spin-slow" style={{ animationDuration: '45s' }} alt="" />
            </div>


            <div className="container mx-auto px-4 relative z-10">
                
                <AnimateOnScroll>
                    <div className="text-center mb-20 text-white">
                        <span className="text-[var(--domu-muted)] font-black text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-6 block">
                            FEEDBACK DOS CLIENTES
                        </span>
                        <h2 className="h2-domu text-gradient mb-8">
                            CLIENTES E AVALIAÇÕES
                        </h2>

                    </div>
                </AnimateOnScroll>

                <div className="relative max-w-7xl mx-auto px-2 md:px-0">
                    {/* Botões - Hidden on very small mobile, visible from sm upwards */}
                    <button 
                        onClick={() => goTo(currentRef.current - 1)}
                        className="absolute left-[-10px] md:left-[-10px] lg:left-[-60px] top-[50%] -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-white/5 text-white bg-white/5 backdrop-blur-md hover:bg-white hover:text-black transition-all z-30 shadow-2xl hidden sm:flex"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="w-5 h-5 md:w-6 md:h-6 rotate-180">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                    
                    <button 
                        onClick={() => goTo(currentRef.current + 1)}
                        className="absolute right-[-10px] md:right-[-10px] lg:right-[-60px] top-[50%] -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-white/5 text-white bg-white/5 backdrop-blur-md hover:bg-white hover:text-black transition-all z-30 shadow-2xl hidden sm:flex"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="w-5 h-5 md:w-6 md:h-6">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>

                    <div 
                        ref={containerRef}
                        className="overflow-hidden py-10 cursor-grab active:cursor-grabbing"
                    >
                        <motion.div 
                            drag="x"
                            dragElastic={0.1}
                            onDragEnd={onDragEnd}
                            style={{ x: trackX, display: 'flex', gap: GAP }}
                        >
                            {items.map((item, i) => (
                                <div 
                                    key={i} 
                                    style={{ 
                                        minWidth: slideW, 
                                        width: slideW 
                                    }}
                                    className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 flex flex-col min-h-[420px] md:h-[380px] flex-shrink-0"
                                >
                                    {/* Quote Icon */}
                                    <div className="text-white opacity-10 mb-6 md:mb-8">
                                        <svg width="34" height="24" viewBox="0 0 34 24" fill="currentColor">
                                            <path d="M0 24V11.232C0 7.824 0.768 4.944 2.304 2.592C3.84 0.24 6.24 -0.528 9.504 0.288L11.088 2.88C8.592 3.84 7.248 5.472 7.056 7.776H11.376V24H0ZM19.296 24V11.232C19.296 7.824 20.064 4.944 21.6 2.592C23.136 0.24 25.536 -0.528 28.8 0.288L30.384 2.88C27.888 3.84 26.544 5.472 26.352 7.776H30.672V24H19.296Z" />
                                        </svg>
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-[var(--domu-white)]/80 text-[14px] md:text-[16px] leading-[1.6] mb-8 overflow-hidden font-medium italic">
                                        "{item.text}"
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-white/10">
                                        <h4 className="text-white font-black text-lg md:text-xl uppercase tracking-tighter mb-1">
                                            {item.name}
                                        </h4>
                                        <span className="text-[var(--domu-muted)] font-bold text-[10px] uppercase tracking-widest">
                                            {item.company}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Google Stats Bar */}
                <div className="mt-8 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-white/5 shadow-lg rounded-lg flex items-center justify-center border border-white/10">
                            <svg viewBox="0 0 24 24" className="w-6 h-6">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-white font-black text-sm uppercase tracking-tight">TOP #1 no Google</p>
                            <div className="flex items-center gap-2">
                                <span className="text-white font-bold text-xs">4.9</span>
                                <div className="flex text-yellow-500 font-bold">★★★★★</div>
                                <span className="text-[var(--domu-muted)] text-[10px] font-bold uppercase tracking-widest pl-1">310+ avaliações</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-[var(--domu-muted)] text-[13px] font-bold opacity-60 uppercase tracking-widest max-w-sm text-center md:text-right">
                        Domu tech • Agência de sites em São Paulo
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
