import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { client } from '../lib/contentful';
import { LightningBoltIcon, ArrowRightIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

/* ─────────────────────────────────────────────────────────────────────────────
   Carrossel infinito — técnica de triplicação de slides
   · extSlides = [...slides, ...slides, ...slides]  (3 cópias)
   · startIndex = N  (primeira posição na cópia do meio)
   · Quando passa de 2N ou fica abaixo de N → reposiciona silenciosamente
     para a cópia do meio sem nenhuma animação (loop seamless).
───────────────────────────────────────────────────────────────────────────── */
const GAP           = 20;     // px entre cards (ajustado de 28)
const AUTO_PLAY_MS  = 6000;   // intervalo do autoplay (ms)

/* ── Componente isolado para o Card (Evita erro de Hooks) ──────────────── */
const PortfolioCard = ({ project, index, STEP, slideW, containerW, trackX, isMobile, onClick }: any) => {
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

    return (
        <motion.div
            style={{
                width:           slideW,
                flexShrink:      0,
                opacity,
                scale,
                transformOrigin: 'center center',
            }}
            onClick={onClick}
        >
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl relative group/card">
                <img
                    src={project.image}
                    alt={project.title}
                    draggable={false}
                    className="w-full h-auto block pointer-events-none"
                />
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className={`w-20 h-20 bg-black/60 backdrop-blur-md border border-white/10 rounded-full shadow-2xl flex flex-col items-center justify-center text-white transition-all duration-300 ease-out ${isMobile ? 'opacity-80 scale-100' : 'opacity-0 scale-50 group-hover/card:opacity-100 group-hover/card:scale-100'}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5 mb-1">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                        <span className="text-[8px] font-black uppercase tracking-widest leading-none">Acessar</span>
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
    const [rawSlides, setRawSlides] = useState<any[]>([]); // Dados do CMS
    const [loading, setLoading] = useState(true);

    /* Busca dados no Contentful */
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await client.getEntries({
                    content_type: 'domuTech', 
                    order: ['-sys.createdAt'],
                    limit: 15, // Sensei diz: 91 projetos travam o navegador. 15-20 é o ideal para performance.
                });

                const formatted = response.items.map((item: any) => ({
                    title: item.fields.title,
                    image: (item.fields.image as any)?.fields?.file?.url ? `https:${(item.fields.image as any).fields.file.url}` : '',
                    tag: item.fields.category || 'Criação de Sites',
                    link: item.fields.link || '#',
                }));

                setRawSlides(formatted);
            } catch (error) {
                console.error('ERRO CRÍTICO NO CONTENTFUL:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    /* Geometria dinâmica baseada no viewport */
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    /* Slides reais e triplicados (Só triplica se tiver 3 ou mais pra fazer o loop infinito) */
    const N         = rawSlides.length;
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

    /* Sincroniza o índice real e a posição do track quando os slides carregam */
    useEffect(() => {
        if (rawSlides.length > 0) {
            const start = rawSlides.length >= 3 ? rawSlides.length : 0;
            setCurrent(start);
            currentRef.current = start;
            trackX.set(sidePad - start * STEP);
        }
    }, [rawSlides.length, sidePad, STEP, trackX]);

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
        [N, sidePad, STEP, trackX],
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
    if (loading || rawSlides.length === 0) {
        return <div className="py-20 text-center text-white/20">Carregando portfólio profissional...</div>;
    }

    return (
        <section id="portfolio" className="py-10 md:py-32 bg-[var(--domo-bg)] overflow-hidden">
            <div className="container mx-auto px-4">

                {/* ── Header ─────────────────────────────────────────────── */}
                <AnimateOnScroll>
                    <div className="text-center mb-12 md:mb-20">
                        <span className="text-[#a1a1a1] font-black text-[9px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">
                            PROJETOS DE ALTA PERFORMANCE
                        </span>
                        <h2 className="h2-domo text-gradient mb-6 md:mb-8">
                            NOSSO PORTFÓLIO
                        </h2>
                        <div className="w-16 h-1 bg-white/10 mx-auto rounded-full"></div>
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
                                onClick={() => {
                                    if (currentRef.current !== index) {
                                        isAnimating.current = false;
                                        goTo(index);
                                    }
                                }}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* ── Info Bar ───────────────────────────────────────────── */}
                <div className="flex items-center justify-between gap-4 mt-7 px-1">

                    {/* LEFT: nome + tag + veja online (empilhados, sem samba) */}
                    <div className="flex-1 min-w-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active.title}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col gap-0.5"
                            >
                                <h3 className="text-base font-black text-white uppercase tracking-tight truncate leading-tight">
                                    {active.title.split(' - ')[0]}
                                </h3>
                                <span className="text-[#FFFFFF] font-bold text-[10px] uppercase tracking-[0.18em] block">
                                    {active.tag === 'Criação de Sites'
                                        ? 'Soluções para o seu negócio'
                                        : active.tag}
                                </span>
                                {active.link && (
                                    <a
                                        href={active.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hidden md:inline-flex items-center gap-1.5 mt-1 group w-fit"
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <span className="text-white/40 font-bold text-[9px] uppercase tracking-widest group-hover:text-white/70 transition-colors">
                                            Veja Online
                                        </span>
                                        <span className="text-[#FFFFFF] font-black text-[9px] uppercase tracking-widest group-hover:text-[#FFFFFF] transition-colors truncate max-w-[260px]">
                                            {active.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                                        </span>
                                    </a>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT: setas + contador — sempre no mesmo lugar */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <button
                            id="portfolio-prev"
                            onClick={() => { isAnimating.current = false; goTo(currentRef.current - 1); }}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/15 text-white hover:border-[#FFFFFF] hover:text-[#FFFFFF] transition-all"
                            aria-label="Anterior"
                        >
                            <ArrowRightIcon className="w-3 h-3 fill-current rotate-180" />
                        </button>

                        <span className="font-black text-[11px] tracking-widest whitespace-nowrap select-none">
                            <span className="text-white">
                                {String(realIndex + 1).padStart(2, '0')}
                            </span>
                            <span className="text-white/30 mx-1">/</span>
                            <span className="text-white/40">
                                {String(N).padStart(2, '0')}
                            </span>
                        </span>

                        <button
                            id="portfolio-next"
                            onClick={() => { isAnimating.current = false; goTo(currentRef.current + 1); }}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/15 text-white hover:border-[#FFFFFF] hover:text-[#FFFFFF] transition-all"
                            aria-label="Próximo"
                        >
                            <ArrowRightIcon className="w-3 h-3 fill-current" />
                        </button>
                    </div>
                </div>

                {/* ── Divisor ────────────────────────────────────────────── */}
                <div className="h-px w-full bg-white/10 my-24" />

                {/* ── Grid 3 cards ─────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {rawSlides.slice(0, 3).map((project, index) => (
                        <AnimateOnScroll key={`g${index}`} delay={index * 100}>
                            <div className="group bg-[var(--domo-surface-1)] rounded-2xl overflow-hidden shadow-md border border-white/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">

                                {/* Imagem na proporção natural — sem corte */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto block opacity-80 group-hover:opacity-100 transition-opacity"
                                />

                                {/* Área de texto */}
                                <div className="p-5">
                                    {/* Badge */}
                                    <span
                                        className="inline-block px-3 py-1 mb-2 rounded-full font-black text-[9px] uppercase tracking-widest bg-white/10 text-white"
                                    >
                                        {['Financeiro', 'Serviços', 'Tecnologia'][index]}
                                    </span>

                                    <p className="text-white/60 font-bold text-[9px] uppercase tracking-widest mb-1">
                                        {['Soluções Contábeis', 'Gestão Empresarial', 'Gestão de Frotas'][index]}
                                    </p>

                                    <h4 className="text-sm font-black text-white uppercase tracking-tight leading-tight mb-3">
                                        {project.title.split(' - ')[0]}
                                    </h4>

                                    {/* "Ver projeto" só aparece no hover */}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-white font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-250"
                                    >
                                        Ver projeto
                                        <ArrowRightIcon className="w-3 h-3 fill-current" />
                                    </a>
                                </div>

                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>

                {/* ── CTA ────────────────────────────────────────────────── */}
                <div className="mt-20 text-center">
                    <a
                        href="#contact"
                        className="btn-domo-primary group"
                    >
                        <LightningBoltIcon className="w-4 h-4 fill-current" />
                        Ver todo o portfólio
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;