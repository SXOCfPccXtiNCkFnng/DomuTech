import React, { useEffect, useRef } from 'react';

const COMPANIES = [
  'AGB Campinas',
  'Unicamp',
  'Rede Centro-Norte',
  'La Dolce Vita',
  'DaraADV',
  'CE Vita',
] as const;

/** Quantas voltas da lista por faixa - o suficiente pra cobrir telas largas sem gap. */
const LOOPS_PER_STRIP = 6;

function buildStrip(stripId: string) {
  const items: { name: string; key: string }[] = [];
  for (let loop = 0; loop < LOOPS_PER_STRIP; loop++) {
    COMPANIES.forEach((name, i) => {
      items.push({ name, key: `${stripId}-${loop}-${i}` });
    });
  }
  return items;
}

const LogoRow = ({
  stripId,
  ariaHidden = false,
}: {
  stripId: string;
  ariaHidden?: boolean;
}) => (
  <ul className="trusted-marquee__group" aria-hidden={ariaHidden || undefined}>
    {buildStrip(stripId).map((item) => (
      <li key={item.key} className="trusted-marquee__item">
        <span className="trusted-marquee__name">{item.name}</span>
      </li>
    ))}
  </ul>
);

const TrustedCompanies: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  const rampPlaybackRate = (targetRate: number, duration: number) => {
    const animation = trackRef.current?.getAnimations()[0];
    if (!animation) return;

    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);

    const startRate = animation.playbackRate;
    const startedAt = performance.now();
    animation.play();

    const update = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      animation.playbackRate = startRate + (targetRate - startRate) * eased;

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(update);
      } else {
        animation.playbackRate = targetRate;
        frameRef.current = null;
      }
    };

    frameRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="trusted-band">
      <p className="trusted-band__label">Empresas que confiam</p>

      <div
        className="trusted-marquee"
        aria-label="Empresas parceiras"
        onMouseEnter={() => rampPlaybackRate(0, 700)}
        onMouseLeave={() => rampPlaybackRate(1, 750)}
      >
        <div ref={trackRef} className="trusted-marquee__track">
          <LogoRow stripId="a" />
          <LogoRow stripId="b" ariaHidden />
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
