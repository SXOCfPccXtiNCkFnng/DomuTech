import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { LinkIcon, ArrowUpRightIcon, ArrowRightIcon } from './icons';
import { PORTFOLIO_PROJECTS, HOME_SECTION, homeSectionIndex } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';

/* ─────────────────────────────────────────────────────────────────────────────
   Carrossel infinito: 9 dobras + passo ±1 na trilha
   · Várias voltas completas sem teleporte (sem “flip” de retorno)
   · Só recentraliza nas pontas do buffer, e sem animar
───────────────────────────────────────────────────────────────────────────── */
const GAP           = 20;
const AUTO_PLAY_MS  = 6000;
const FOLDS         = 9;

/* ── Componente isolado para o Card (Evita erro de Hooks) ──────────────── */
const PortfolioCard = ({ project, index, STEP, slideW, containerW, trackX, isMobile, isActive, onClick }: any) => {
    const [showAccess, setShowAccess] = useState(false);
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

    useEffect(() => {
        if (!isActive) setShowAccess(false);
    }, [isActive]);

    useEffect(() => {
        if (!showAccess) return;
        const timer = window.setTimeout(() => setShowAccess(false), 2600);
        return () => window.clearTimeout(timer);
    }, [showAccess]);

    return (
        <motion.div
            style={{
                width:           slideW,
                flexShrink:      0,
                opacity,
                scale,
                transformOrigin: 'center center',
            }}
            className={`portfolio-slide cursor-pointer ${isActive ? 'is-active' : ''}`}
            onClick={onClick}
            onPointerUp={(event) => {
                if (
                    isMobile &&
                    isActive &&
                    !(event.target as HTMLElement).closest('.portfolio-access')
                ) {
                    setShowAccess(true);
                }
            }}
        >
            <div className="portfolio-slide__media w-full rounded-xl overflow-hidden shadow-2xl relative group/card">
                <img
                    src={project.image}
                    alt={project.title}
                    draggable={false}
                    className="w-full h-full object-cover block pointer-events-none"
                />
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button
                        type="button"
                        className={`portfolio-access group/btn ${showAccess ? 'is-visible-touch' : ''}`}
                        onClick={handleAccessClick}
                        aria-label={`Acessar projeto ${project.title}`}
                    >
                        <LinkIcon className="w-4 h-4 mb-1" />
                        <span>
                            Placeholder
                        </span>
                    </button>
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

    /* Slides reais e com dobras extras (loop + buffer pra clique rápido) */
    const N         = rawSlides.length;
    if (N === 0) return null;
    
    const shouldLoop = N >= 3;
    const extSlides = shouldLoop
        ? Array.from({ length: FOLDS }, () => rawSlides).flat()
        : rawSlides;
    const startIndex = shouldLoop ? N * 4 : 0;

    const centerRatio = isMobile ? 0.90 : 0.62; 
    const slideW  = Math.round(containerW * centerRatio);
    const STEP    = slideW + GAP;
    const sidePad = Math.round((containerW - slideW) / 2);

    const [current, setCurrent] = useState(startIndex);
    const currentRef  = useRef(startIndex);
    const animRef     = useRef<{ stop: () => void } | null>(null);
    const animTokenRef = useRef(0);
    const isPaused    = useRef(false);

    const trackX = useMotionValue(sidePad - startIndex * STEP);

    const realIndex = shouldLoop ? (((current % N) + N) % N) : current;
    const active    = rawSlides[realIndex] ?? rawSlides[0];

    const xFor = useCallback(
        (idx: number) => sidePad - idx * STEP,
        [sidePad, STEP],
    );

    const toHomeFold = useCallback(
        (idx: number) => {
            if (!shouldLoop) return idx;
            let n = idx;
            while (n < N * 4) n += N;
            while (n >= N * 5) n -= N;
            return n;
        },
        [N, shouldLoop],
    );

    const jumpTo = useCallback(
        (idx: number) => {
            animRef.current?.stop();
            currentRef.current = idx;
            setCurrent(idx);
            const x = xFor(idx);
            if (typeof (trackX as { jump?: (v: number) => void }).jump === 'function') {
                (trackX as { jump: (v: number) => void }).jump(x);
            } else {
                trackX.set(x);
            }
        },
        [trackX, xFor],
    );

    const inTravelZone = useCallback(
        (idx: number) => idx >= N * 2 && idx < N * (FOLDS - 2),
        [N],
    );

    const ensureBuffer = useCallback(
        (idx: number) => {
            if (!shouldLoop || inTravelZone(idx)) return idx;
            const home = toHomeFold(idx);
            jumpTo(home);
            return home;
        },
        [shouldLoop, inTravelZone, toHomeFold, jumpTo],
    );

    const runTo = useCallback(
        (target: number) => {
            animRef.current?.stop();
            const token = ++animTokenRef.current;

            currentRef.current = target;
            setCurrent(target);

            animRef.current = animate(trackX, xFor(target), {
                type:      'spring',
                stiffness: 280,
                damping:   34,
                mass:      0.9,
                onComplete: () => {
                    if (token !== animTokenRef.current) return;
                    animRef.current = null;
                    if (!shouldLoop) return;
                    const idx = currentRef.current;
                    if (!inTravelZone(idx)) jumpTo(toHomeFold(idx));
                },
            });
        },
        [shouldLoop, trackX, xFor, inTravelZone, toHomeFold, jumpTo],
    );

    const goTo = useCallback(
        (idx: number) => {
            if (!shouldLoop) {
                runTo(Math.max(0, Math.min(N - 1, idx)));
                return;
            }
            ensureBuffer(currentRef.current);
            runTo(idx);
        },
        [shouldLoop, N, ensureBuffer, runTo],
    );

    const goBy = useCallback(
        (delta: number) => {
            if (!shouldLoop) {
                runTo(Math.max(0, Math.min(N - 1, currentRef.current + delta)));
                return;
            }
            const from = ensureBuffer(currentRef.current);
            runTo(from + delta);
        },
        [shouldLoop, N, ensureBuffer, runTo],
    );

    useEffect(() => {
        const measure = () => {
            if (containerRef.current) setContainerW(containerRef.current.offsetWidth);
        };
        measure();
        const ro = new ResizeObserver(measure);
        if (containerRef.current) ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, []);

    useEffect(() => {
        trackX.set(xFor(currentRef.current));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerW, sidePad, STEP]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isPaused.current) goBy(1);
        }, AUTO_PLAY_MS);
        return () => clearInterval(timer);
    }, [goBy]);

    const dragLeft  = sidePad - (extSlides.length - 1) * STEP;
    const dragRight = sidePad;

    const onDragEnd = (_: unknown, info: { velocity: { x: number } }) => {
        isPaused.current = false;
        animRef.current?.stop();
        animTokenRef.current += 1;
        const v   = info.velocity.x;
        const x   = trackX.get();
        const raw = -(x - sidePad) / STEP + (v < -250 ? 0.5 : v > 250 ? -0.5 : 0);
        const snapped = Math.round(raw);
        currentRef.current = snapped;
        runTo(snapped);
    };

    /* ── Render ─────────────────────────────────────────────────────────────── */

    return (
        <section id="cases-home" className="bloom-cases">
            <div className="bloom-cases__inner">
                <AnimateOnScroll from="left">
                    <div className="bloom-cases__head">
                        <div>
                            <p className="bloom-band__label">Cases</p>
                            <span className="bloom-band__index">
                                {homeSectionIndex(HOME_SECTION.cases)}
                            </span>
                        </div>
                        <AnimateOnScroll from="right" delay={90}>
                            <h2 className="bloom-cases__title">
                                Trabalhos com direção clara — sem ruído visual.
                            </h2>
                        </AnimateOnScroll>
                    </div>
                </AnimateOnScroll>

                <div
                    ref={containerRef}
                    className="bloom-cases__carousel relative overflow-visible cursor-grab active:cursor-grabbing select-none"
                    onMouseEnter={() => { isPaused.current = true; }}
                    onMouseLeave={() => { isPaused.current = false; }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ left: dragLeft, right: dragRight }}
                        dragElastic={0.04}
                        style={{ x: trackX, display: 'flex', gap: GAP }}
                        onDragStart={() => {
                            isPaused.current = true;
                            animRef.current?.stop();
                            animTokenRef.current += 1;
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
                                isActive={(index % N + N) % N === realIndex}
                                onClick={() => {
                                    if (current !== index) goTo(index);
                                }}
                            />
                        ))}
                    </motion.div>
                </div>

                <div className="bloom-cases__meta flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="portfolio-carousel-nav order-1 md:order-2 flex items-center justify-center gap-3.5 md:flex-shrink-0">
                        <button
                            id="portfolio-prev"
                            onClick={() => goBy(-1)}
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
                            onClick={() => goBy(1)}
                            className="portfolio-carousel-nav__btn"
                            aria-label="Próximo"
                        >
                            <ArrowRightIcon className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    <div className="order-2 md:order-1 min-w-0 md:flex-1">
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
                            <h3 className="type-card-title text-[var(--domu-primary)] leading-tight">
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
                                        Placeholder
                                    </span>
                                    <span className="portfolio-online-link__url truncate">
                                        {active.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                                    </span>
                                </a>
                            )}
                        </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="bloom-cases__foot">
                    <a href="/cases" className="btn-domu-primary group">
                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                        Ver todo o portfólio
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;