import React, { useRef, useState, useEffect, ReactNode, CSSProperties } from 'react';

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
  threshold = 0.12,
  triggerOnce = true,
  immediate = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
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

    const reveal = () => setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, triggerOnce, immediate]);

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
