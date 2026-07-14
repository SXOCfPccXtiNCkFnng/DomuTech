import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { LinkSimple } from '@phosphor-icons/react';
import { PORTFOLIO_PROJECTS } from '../constants';
import { ArrowUpRightIcon, ArrowRightIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

/* ─────────────────────────────────────────────────────────────────────────────
   Carrossel infinito - técnica de triplicação de slides
   · extSlides = [...slides, ...slides, ...slides]  (3 cópias)
   · startIndex = N  (primeira posição na cópia do meio)
   · Quando passa de 2N ou fica abaixo de N → reposiciona silenciosamente
     para a cópia do meio sem nenhuma animação (loop seamless).
───────────────────────────────────────────────────────────────────────────── */
const GAP           = 20;     // px entre cards (ajustado de 28)
const AUTO_PLAY_MS  = 6000;   // intervalo do autoplay (ms)

/* ── Componente isolado para o Card (Evita erro de Hooks) ──────────────── */
const PortfolioCard = ({ project, index, STEP, slideW, containerW, trackX, isMobile, isActive, onClick }: any) => {
    const slideCenter = useTransform(
        trackX,
        (v: any) => v + index * STEP + slideW / 2,
    );
    const viewCenter = containerW / 2;

    const opacity = useTransform(
        slideCenter,
        [viewCenter - STEP, viewCenter, viewCenter + STEP],
        [0.32, 1, 0.32],
    );
    const scale = useTransform(
        slideCenter,
        [viewCenter - STEP, viewCenter, viewCenter + STEP],
        [0.86, 1, 0.86],
    );

    const handleAccessClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (project.link && project.link !== '#') {
            window.open(project.link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <motion.div
            style={{
                width:           slideW,
                flexShrink:      0,
                opacity,
                scale,
                transformOrigin: 'center center',
            }}
            className="cursor-pointer"
            onClick={onClick}
        >
            <div className="w-full aspect-[1904/932] rounded-xl overflow-hidden shadow-2xl relative group/card">
                <img
                    src={project.image}
                    alt={project.title}
                    draggable={false}
                    className="w-full h-full object-cover block pointer-events-none"
                />
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div 
                        className={`w-[5.25rem] h-[5.25rem] bg-white/95 backdrop-blur-md border-2 border-[var(--domu-accent)] rounded-full shadow-[0_12px_32px_-8px_rgba(0,71,255,0.45)] flex flex-col items-center justify-center transition-all duration-300 ease-out pointer-events-auto cursor-pointer hover:bg-[var(--domu-accent)] hover:shadow-[0_14px_36px_-8px_rgba(0,71,255,0.55)] group/btn ${isActive ? (isMobile ? 'opacity-90 scale-100' : 'opacity-0 scale-50 group-hover/card:opacity-100 group-hover/card:scale-100') : 'opacity-0 pointer-events-none'}`}
                        onClick={handleAccessClick}
                    >
                        <LinkSimple className="w-5 h-5 mb-1 text-[var(--domu-accent)] group-hover/btn:text-white transition-colors" weight="bold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest leading-none text-[var(--domu-accent)] group-hover/btn:text-white transition-colors">
                            Acessar
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Portfolio: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerW, setContainerW] = useState(1200);
    const [isMobile, setIsMobile] = useState(false);

    /* Geometria dinâmica baseada no viewport */
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    /* Slides reais (limitados a 6 para performance) */
    const rawSlides = PORTFOLIO_PROJECTS.filter(p => p.image).slice(0, 6);

    /* Slides reais e triplicados (Só triplica se tiver 3 ou mais pra fazer o loop infinito) */
    const N         = rawSlides.length;
    if (N === 0) return null; // Trava de segurança: não renderiza se não tiver projeto
    
    const shouldLoop = N >= 3;
    const extSlides = shouldLoop ? [...rawSlides, ...rawSlides, ...rawSlides] : rawSlides;
    const startIndex = shouldLoop ? N : 0;

    /* Geometria dinâmica */
    const centerRatio = isMobile ? 0.90 : 0.64; 
    const slideW  = Math.round(containerW * centerRatio);
    const STEP    = slideW + GAP;
    const sidePad = Math.round((containerW - slideW) / 2); // centra qualquer slide

    /* Estado: começa na cópia do meio (index N) → sangria dos dois lados desde o início */
    const [current, setCurrent] = useState(startIndex);
    const currentRef  = useRef(startIndex);     // ref para acesso síncrono dentro de callbacks
    const isAnimating = useRef(false);
    const isPaused    = useRef(false);  // pausa o autoplay ao hover / drag

    const trackX = useMotionValue(sidePad - startIndex * STEP); // posição inicial


    /* Real index para a info-bar (0..N-1) */
    const realIndex = shouldLoop ? (((current % N) + N) % N) : current;
    const active    = rawSlides[realIndex] ?? rawSlides[0];

    /* ── goTo ─────────────────────────────────────────────────────────────── */
    const goTo = useCallback(
        (idx: number) => {
            if (isAnimating.current) return;
            isAnimating.current = true;
            currentRef.current  = idx;
            setCurrent(idx);

            animate(trackX, sidePad - idx * STEP, {
                type:      'spring',
                stiffness: 280,
                damping:   34,
                mass:      0.9,
                onComplete: () => {
                    isAnimating.current = false;

                    /* Loop seamless: só acontece se estivermos no modo "shouldLoop" */
                    if (!shouldLoop) {
                        isAnimating.current = false;
                        return;
                    }

                    let normalized = idx;
                    if (idx >= N * 2) normalized = idx - N;
                    else if (idx < N) normalized = idx + N;

                    if (normalized !== idx) {
                        currentRef.current = normalized;
                        setCurrent(normalized);
                        trackX.set(sidePad - normalized * STEP);
                    }
                },
            });
        },
        [N, sidePad, STEP, trackX, shouldLoop, startIndex],
    );

    /* ── Medir container ──────────────────────────────────────────────────── */
    useEffect(() => {
        const measure = () => {
            if (containerRef.current) setContainerW(containerRef.current.offsetWidth);
        };
        measure();
        const ro = new ResizeObserver(measure);
        if (containerRef.current) ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, []);

    /* Reposiciona sem animação quando o container muda de tamanho */
    useEffect(() => {
        trackX.set(sidePad - currentRef.current * STEP);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerW, sidePad, STEP]);

    /* ── Auto-play ────────────────────────────────────────────────────────── */
    useEffect(() => {
        const timer = setInterval(() => {
            if (!isPaused.current) goTo(currentRef.current + 1);
        }, AUTO_PLAY_MS);
        return () => clearInterval(timer);
    }, [goTo]);

    /* ── Drag ─────────────────────────────────────────────────────────────── */
    const dragLeft  = sidePad - (extSlides.length - 1) * STEP;
    const dragRight = sidePad;

    const onDragEnd = (_: unknown, info: { velocity: { x: number } }) => {
        isPaused.current    = false;
        isAnimating.current = false;
        const v   = info.velocity.x;
        const x   = trackX.get();
        const raw = -(x - sidePad) / STEP + (v < -250 ? 0.5 : v > 250 ? -0.5 : 0);
        goTo(Math.round(raw));
    };

    /* ── Render ─────────────────────────────────────────────────────────────── */

    return (
        <section id="portfolio" className="section-domu bg-[var(--domu-bg)] overflow-hidden relative">
            {/* Branding Ghosts Constellation - Forced to Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.15] z-0">
                <img src="/fraucon.png" className="absolute top-[15%] left-[5%] w-32 h-32 animate-float object-contain" alt="" />
                <img src="/fraucon.png" className="absolute top-[40%] right-0 w-64 h-64 animate-spin-slow object-contain" style={{ animationDuration: '70s' }} alt="" />
                <img src="/fraucon.png" className="absolute bottom-[10%] left-[10%] w-24 h-24 animate-float-delayed object-contain" alt="" />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">

                {/* ── Header ─────────────────────────────────────────────── */}
                <AnimateOnScroll>
                    <div className="text-center section-head-domu">
                        <span className="tag-domu mb-3 block">
                            Projetos de alta performance
                        </span>
                        <h2 className="h2-domu text-gradient">
                            Nosso Portfólio
                        </h2>

                    </div>
                </AnimateOnScroll>

                {/* ── CARROSSEL ──────────────────────────────────────────── */}
                <div
                    ref={containerRef}
                    className="relative overflow-visible cursor-grab active:cursor-grabbing select-none"
                    onMouseEnter={() => { isPaused.current = true; }}
                    onMouseLeave={() => { isPaused.current = false; }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ left: dragLeft, right: dragRight }}
                        dragElastic={0.04}
                        style={{ x: trackX, display: 'flex', gap: GAP }}
                        onDragStart={() => {
                            isPaused.current    = true;
                            isAnimating.current = false;
                        }}
                        onDragEnd={onDragEnd}
                    >
                        {extSlides.map((project, index) => (
                            <PortfolioCard
                                key={`${project.title}-${index}`}
                                project={project}
                                index={index}
                                STEP={STEP}
                                slideW={slideW}
                                containerW={containerW}
                                trackX={trackX}
                                isMobile={isMobile}
                                isActive={current === index}
                                onClick={() => {
                                    if (current !== index) {
                                        isAnimating.current = false;
                                        goTo(index);
                                    }
                                }}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* ── Info Bar ───────────────────────────────────────────── */}
                <div className="flex items-center justify-between gap-4 mt-6 px-1">

                    <div className="flex-1 min-w-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active.title}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col gap-1.5"
                            >
                                <span className="type-eyebrow !text-[var(--domu-accent)]">
                                    {active.tag}
                                </span>
                                <h3 className="type-card-title text-[var(--domu-primary)] truncate leading-tight">
                                    {active.title.split(' - ')[0]}
                                </h3>
                                {active.link && (
                                    <a
                                        href={active.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="portfolio-online-link hidden md:inline-flex items-center gap-1.5 w-fit max-w-full"
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <span className="portfolio-online-link__label shrink-0">
                                            Veja online
                                        </span>
                                        <span className="portfolio-online-link__url truncate">
                                            {active.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                                        </span>
                                    </a>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="portfolio-carousel-nav flex items-center gap-3.5 flex-shrink-0">
                        <button
                            id="portfolio-prev"
                            onClick={() => { isAnimating.current = false; goTo(currentRef.current - 1); }}
                            className="portfolio-carousel-nav__btn"
                            aria-label="Anterior"
                        >
                            <ArrowRightIcon className="w-3.5 h-3.5 rotate-180" />
                        </button>

                        <span className="portfolio-carousel-nav__count tabular-nums whitespace-nowrap select-none">
                            <span className="portfolio-carousel-nav__current">
                                {String(realIndex + 1).padStart(2, '0')}
                            </span>
                            <span className="portfolio-carousel-nav__sep">/</span>
                            <span className="portfolio-carousel-nav__total">
                                {String(N).padStart(2, '0')}
                            </span>
                        </span>

                        <button
                            id="portfolio-next"
                            onClick={() => { isAnimating.current = false; goTo(currentRef.current + 1); }}
                            className="portfolio-carousel-nav__btn"
                            aria-label="Próximo"
                        >
                            <ArrowRightIcon className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                {/* ── Divisor ────────────────────────────────────────────── */}
                <div className="h-px w-full bg-[var(--domu-border)] my-10 md:my-12" />

                {/* ── Grid 3 cards ─────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {rawSlides.slice(0, 3).map((project, index) => (
                        <AnimateOnScroll key={`g${index}`} delay={index * 100}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex flex-col h-full rounded-2xl overflow-hidden bg-[var(--domu-surface-1)] border border-[var(--domu-border)] shadow-[0_16px_40px_-28px_rgba(10,15,24,0.2)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--domu-accent)]/35 hover:shadow-[0_24px_48px_-28px_rgba(0,71,255,0.28)]"
                            >
                                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--domu-surface-2)]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--domu-primary)]/35 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                    <span className="absolute top-3 left-3 type-eyebrow !text-white bg-[var(--domu-primary)]/70 backdrop-blur-sm px-2.5 py-1 rounded-md tracking-widest">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                <div className="flex flex-col flex-1 p-5 md:p-6">
                                    <span className="type-eyebrow !text-[var(--domu-accent)] block mb-2">
                                        {project.tag}
                                    </span>

                                    <h4 className="type-card-title text-[var(--domu-primary)] mb-2 group-hover:text-[var(--domu-accent)] transition-colors duration-300">
                                        {project.title.split(' - ')[0]}
                                    </h4>

                                    {project.description && (
                                        <p
                                            className="type-card-desc mb-5 flex-1"
                                            style={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {project.description}
                                        </p>
                                    )}

                                    <span className="inline-flex items-center gap-1.5 type-eyebrow !text-[var(--domu-accent)] mt-auto">
                                        Ver projeto
                                        <ArrowRightIcon className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </a>
                        </AnimateOnScroll>
                    ))}
                </div>

                {/* ── CTA ────────────────────────────────────────────────── */}
                <div className="mt-8 md:mt-10 text-center">
                    <a
                        href="#contact"
                        className="btn-domu-primary group"
                    >
                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                        Ver todo o portfólio
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;