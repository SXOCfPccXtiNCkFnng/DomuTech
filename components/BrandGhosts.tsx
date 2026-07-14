import React from 'react';

type GhostVariant = 'default' | 'spread' | 'sides' | 'corners';

const LAYOUTS: Record<
  GhostVariant,
  { pos: string; size: string; motion: string; duration?: string }[]
> = {
  default: [
    { pos: 'absolute bottom-[-2%] right-[-2%]', size: 'w-64 h-64', motion: 'animate-spin-slow', duration: '24s' },
    { pos: 'absolute top-[10%] left-0', size: 'w-40 h-40', motion: 'animate-float', duration: '16s' },
    { pos: 'absolute top-[40%] right-[10%]', size: 'w-24 h-24', motion: 'animate-float-delayed', duration: '20s' },
  ],
  spread: [
    { pos: 'absolute top-[8%] right-[4%]', size: 'w-36 h-36', motion: 'animate-float', duration: '15s' },
    { pos: 'absolute top-[42%] left-[-2%]', size: 'w-52 h-52', motion: 'animate-spin-slow', duration: '22s' },
    { pos: 'absolute bottom-[6%] right-[12%]', size: 'w-28 h-28', motion: 'animate-float-delayed', duration: '18s' },
  ],
  sides: [
    { pos: 'absolute top-[12%] left-[-4%]', size: 'w-48 h-48', motion: 'animate-spin-slow', duration: '26s' },
    { pos: 'absolute top-[35%] right-[-3%]', size: 'w-56 h-56', motion: 'animate-float', duration: '17s' },
    { pos: 'absolute bottom-[8%] left-[18%]', size: 'w-28 h-28', motion: 'animate-float-delayed', duration: '21s' },
  ],
  corners: [
    { pos: 'absolute top-[10%] right-[6%]', size: 'w-32 h-32', motion: 'animate-float', duration: '14s' },
    { pos: 'absolute bottom-[6%] left-[2%]', size: 'w-44 h-44', motion: 'animate-spin-slow', duration: '23s' },
    { pos: 'absolute top-[55%] right-[14%]', size: 'w-24 h-24', motion: 'animate-float-delayed', duration: '19s' },
  ],
};

interface BrandGhostsProps {
  variant?: GhostVariant;
  /** Wrapper opacity - FAQ usa ~0.15 pra ficar visível no fundo claro */
  opacity?: number;
  className?: string;
}

/** Logos Domu flutuando no fundo da seção, com órbita suave. */
const BrandGhosts: React.FC<BrandGhostsProps> = ({
  variant = 'default',
  opacity = 0.15,
  className = '',
}) => (
  <div
    className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
    style={{ opacity }}
    aria-hidden
  >
    {LAYOUTS[variant].map((item, i) => (
      <div key={i} className={`${item.pos} ${item.size}`}>
        <img
          src="/fraucon.png"
          alt=""
          className={`brand-ghost-orbit ${item.motion} w-full h-full object-contain`}
          style={item.duration ? { animationDuration: item.duration } : undefined}
        />
      </div>
    ))}
  </div>
);

export default BrandGhosts;
