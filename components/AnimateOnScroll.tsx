import React, { useRef, useState, useEffect, ReactNode, CSSProperties } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
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
  delay = 0,
  threshold = 0.08,
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
        /* margem positiva evita sumir conteúdo no final da página */
        rootMargin: '48px 0px 48px 0px',
      }
    );

    observer.observe(el);

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh * 0.98 && rect.bottom > 0) {
      reveal();
      if (triggerOnce) observer.unobserve(el);
    }

    return () => observer.disconnect();
  }, [threshold, triggerOnce, immediate]);

  return (
    <div
      ref={ref}
      className={`animate-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
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
