import React, { useRef, useState, useEffect, ReactNode, CSSProperties } from 'react';
import { useScrollRoot } from './scroll-root';

export type RevealFrom =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'up-left'
  | 'up-right'
  | 'fade'
  | 'scale'
  | 'tilt';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Direção / estilo de entrada (varia pra não ficar monótono) */
  from?: RevealFrom;
  /** Atraso da transição após o trigger (ms) */
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  /**
   * Dispara no mount (primeira dobra / cascata de load).
   * Ideal para header, hero e qualquer coisa já na tela.
   */
  immediate?: boolean;
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = '',
  style,
  from = 'up',
  delay = 0,
  threshold = 0.18,
  triggerOnce = true,
  immediate = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRoot = useScrollRoot();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setIsVisible(true);
      return;
    }

    if (immediate) {
      const id = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(id);
    }

    const root = scrollRoot?.current ?? null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        root,
        threshold,
        /* Dispara um pouco depois, quando o bloco já entrou na moldura */
        rootMargin: '0px 0px -18% 0px',
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, triggerOnce, immediate, scrollRoot]);

  return (
    <div
      ref={ref}
      className={`animate-scroll reveal-${from} ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{
        ...style,
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
