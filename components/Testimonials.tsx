import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { animate, motion, useMotionValue } from 'framer-motion';
import { ArrowRightIcon, ArrowRightSolar, StarFillIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';
import { PH, HOME_SECTION, homeSectionIndex } from '../constants';

const GAP = 16;
const VISIBLE = 2.35; /* 2 cheios + pedaço do 3º */
/* Muitas dobras: dá pra dar várias voltas sem teleporte. Só recentraliza nas pontas. */
const FOLDS = 9;

const REVIEWS = [
    {
        name: 'Ana',
        date: 'Mar 2026',
        text: PH.text,
        tags: ['Site', 'Marca'],
    },
    {
        name: 'Rafael',
        date: 'Fev 2026',
        text: PH.text,
        tags: ['Landing', 'Automação'],
    },
    {
        name: 'Lia',
        date: 'Jan 2026',
        text: PH.text,
        tags: ['E-commerce'],
    },
    {
        name: 'Bruno',
        date: 'Dez 2025',
        text: PH.text,
        tags: ['Marca', 'Site'],
    },
    {
        name: 'Carla',
        date: 'Nov 2025',
        text: PH.text,
        tags: ['Landing'],
    },
] as const;

/** Avaliações: score fixo + carrossel infinito com peek + fade. */
const Testimonials: React.FC = () => {
    const viewportRef = useRef<HTMLDivElement>(null);
    const [containerW, setContainerW] = useState(720);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 768);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const N = REVIEWS.length;
    const shouldLoop = N >= 3;
    const extSlides = shouldLoop
        ? Array.from({ length: FOLDS }, () => REVIEWS).flat()
        : [...REVIEWS];
    /* Começa no centro das 9 dobras */
    const startIndex = shouldLoop ? N * 4 : 0;

    const visible = isMobile ? 1.15 : VISIBLE;
    const slideW = Math.max(
        220,
        Math.round((containerW - GAP * (visible - 1)) / visible),
    );
    const STEP = slideW + GAP;

    const [current, setCurrent] = useState(startIndex);
    const currentRef = useRef(startIndex);
    const animRef = useRef<{ stop: () => void } | null>(null);
    const animTokenRef = useRef(0);
    const trackX = useMotionValue(-startIndex * STEP);

    const realIndex = shouldLoop ? (((current % N) + N) % N) : current;

    const xFor = useCallback((idx: number) => -idx * STEP, [STEP]);

    /** Dobra “casa” [4N, 5N). Só usada quando o índice chega perto da ponta. */
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

    /** Zona larga [2N, 7N): ~5 voltas sem nenhum teleporte. */
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
                type: 'spring',
                stiffness: 260,
                damping: 36,
                mass: 0.95,
                onComplete: () => {
                    if (token !== animTokenRef.current) return;
                    animRef.current = null;
                    if (!shouldLoop) return;
                    /* NÃO recentraliza a cada volta: só se encostou na ponta */
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
            if (viewportRef.current) setContainerW(viewportRef.current.offsetWidth);
        };
        measure();
        const ro = new ResizeObserver(measure);
        if (viewportRef.current) ro.observe(viewportRef.current);
        return () => ro.disconnect();
    }, []);

    useEffect(() => {
        trackX.set(xFor(currentRef.current));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerW, STEP]);

    const onDragEnd = (_: unknown, info: { velocity: { x: number } }) => {
        animRef.current?.stop();
        animTokenRef.current += 1;
        const v = info.velocity.x;
        const raw = -trackX.get() / STEP + (v < -250 ? 0.5 : v > 250 ? -0.5 : 0);
        const snapped = Math.round(raw);
        currentRef.current = snapped;
        runTo(snapped);
    };

    const dragLeft = -(extSlides.length - 1) * STEP;
    const dragRight = 0;

    return (
        <section id="avaliacoes" className="bloom-reviews">
            <div className="bloom-reviews__inner">
                <AnimateOnScroll from="left">
                    <div className="bloom-reviews__head">
                        <div>
                            <p className="bloom-band__label">Avaliações</p>
                            <span className="bloom-band__index">
                                {homeSectionIndex(HOME_SECTION.avaliacoes)}
                            </span>
                        </div>
                        <AnimateOnScroll from="right" delay={100}>
                            <h2 className="bloom-reviews__title">
                                Como marcas usam a Domu pra sair do genérico e
                                ganhar presença com direção.
                            </h2>
                        </AnimateOnScroll>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll from="up" delay={120}>
                    <div className="bloom-reviews__stage">
                        <aside className="bloom-reviews__score">
                            <div>
                                <p className="bloom-reviews__score-value">4.9 / 5</p>
                                <p className="bloom-reviews__score-note">
                                    Confiança de clientes em projetos reais
                                </p>
                            </div>
                            <Link to="/cases" className="bloom-services__cta bloom-reviews__score-cta">
                                <span className="bloom-services__cta-icon" aria-hidden>
                                    <ArrowRightSolar />
                                </span>
                                Ver cases
                            </Link>
                        </aside>

                        <div className="bloom-reviews__viewport" ref={viewportRef}>
                            <motion.div
                                className="bloom-reviews__track"
                                drag="x"
                                dragConstraints={{ left: dragLeft, right: dragRight }}
                                dragElastic={0.04}
                                style={{ x: trackX, gap: GAP }}
                                onDragStart={() => {
                                    animRef.current?.stop();
                                    animTokenRef.current += 1;
                                }}
                                onDragEnd={onDragEnd}
                            >
                                {extSlides.map((review, index) => (
                                    <article
                                        key={`${review.name}-${index}`}
                                        className={`bloom-reviews__card${
                                            realIndex === index % N ? ' is-active' : ''
                                        }`}
                                        style={{ width: slideW, flexShrink: 0 }}
                                        onClick={() => {
                                            if (current !== index) goTo(index);
                                        }}
                                    >
                                        <header className="bloom-reviews__card-head">
                                            <div>
                                                <h3>{review.name}</h3>
                                                <span>{review.date}</span>
                                            </div>
                                            <div className="bloom-reviews__stars" aria-label="5 estrelas">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <StarFillIcon key={i} className="w-4 h-4" />
                                                ))}
                                            </div>
                                        </header>
                                        <p>“{review.text}”</p>
                                        <div className="bloom-reviews__tags">
                                            {review.tags.map((tag) => (
                                                <span key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </article>
                                ))}
                            </motion.div>
                            <div className="bloom-reviews__fade" aria-hidden />
                        </div>

                        <div className="bloom-reviews__controls">
                            <button
                                type="button"
                                className="bloom-reviews__nav"
                                aria-label="Anterior"
                                onClick={() => goBy(-1)}
                            >
                                <ArrowRightIcon className="w-3.5 h-3.5 rotate-180" />
                            </button>

                            <span className="bloom-reviews__count tabular-nums" aria-live="polite">
                                <span className="bloom-reviews__count-current">
                                    {String(realIndex + 1).padStart(2, '0')}
                                </span>
                                <span className="bloom-reviews__count-sep"> / </span>
                                <span className="bloom-reviews__count-total">
                                    {String(N).padStart(2, '0')}
                                </span>
                            </span>

                            <button
                                type="button"
                                className="bloom-reviews__nav"
                                aria-label="Próximo"
                                onClick={() => goBy(1)}
                            >
                                <ArrowRightIcon className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default Testimonials;
