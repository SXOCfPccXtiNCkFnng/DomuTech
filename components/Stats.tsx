import React, { useMemo } from 'react';
import {
  Briefcase,
  CalendarBlank,
  ChartLineUp,
  UsersThree,
  Lightning,
  SealCheck,
  Headset,
  CodeBlock,
} from '@phosphor-icons/react';
import AnimateOnScroll from './AnimateOnScroll';
import BrandGhosts from './BrandGhosts';

type Tone = 'light' | 'blue' | 'dark' | 'soft';

type StatItem = {
  value: string;
  label: string;
  desc: string;
  icon: typeof Briefcase;
};

const STATS: StatItem[] = [
  {
    value: '15+',
    label: 'Projetos Entregues',
    desc: 'Sites, sistemas e soluções digitais no ar com performance de ponta.',
    icon: Briefcase,
  },
  {
    value: '3+',
    label: 'Anos de Mercado',
    desc: 'Experiência contínua entregando tecnologia sob medida.',
    icon: CalendarBlank,
  },
  {
    value: '95+',
    label: 'Performance Média',
    desc: 'Velocidade, SEO e conversão em cada entrega.',
    icon: ChartLineUp,
  },
  {
    value: '12+',
    label: 'Tecnologias',
    desc: 'Stacks modernas para sites, apps e automações.',
    icon: CodeBlock,
  },
  {
    value: '40+',
    label: 'Clientes Atendidos',
    desc: 'Empresas que confiam na Domu para crescer no digital.',
    icon: UsersThree,
  },
  {
    value: '100%',
    label: 'Entrega Sob Medida',
    desc: 'Cada projeto pensado para o negócio, sem template genérico.',
    icon: SealCheck,
  },
  {
    value: '98%',
    label: 'Satisfação',
    desc: 'Clientes que recomendam a Domu após a entrega.',
    icon: Headset,
  },
  {
    value: '48h',
    label: 'Resposta Inicial',
    desc: 'Retorno rápido no primeiro contato.',
    icon: Lightning,
  },
];

const TONES: Tone[] = ['light', 'light', 'blue', 'blue', 'dark', 'dark', 'soft', 'soft'];
const FALLBACK_TONES: Tone[] = ['blue', 'light', 'soft', 'dark', 'dark', 'soft', 'blue', 'light'];

function tonesDoNotTouch(tones: Tone[], columns: number) {
  return tones.every((tone, index) => {
    const touchesLeft = index % columns !== 0 && tones[index - 1] === tone;
    const touchesAbove = index >= columns && tones[index - columns] === tone;
    return !touchesLeft && !touchesAbove;
  });
}

function createTonePattern() {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    const shuffled = [...TONES];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }

    if ([1, 2, 4].every((columns) => tonesDoNotTouch(shuffled, columns))) {
      return shuffled;
    }
  }

  return FALLBACK_TONES;
}

const Stats: React.FC = () => {
  const tonePattern = useMemo(createTonePattern, []);

  return (
    <section id="stats" className="section-domu bg-[var(--domu-bg)] relative overflow-hidden">
      <BrandGhosts variant="corners" />

      <div className="mx-auto w-full max-w-[92rem] page-pad-x relative z-10">
        <AnimateOnScroll>
          <div className="text-center section-head-domu max-w-2xl mx-auto">
            <span className="tag-domu mb-4 block">Números que falam</span>
            <h2 className="h2-domu text-gradient">
              Resultados que<br className="hidden sm:block" /> sustentam a entrega
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="stats-grid">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <AnimateOnScroll key={stat.label} delay={60 + index * 55}>
                <article className={`stats-card stats-card--${tonePattern[index]}`}>
                  <div className="stats-card__top">
                    <span className="stats-card__icon" aria-hidden>
                      <Icon className="w-5 h-5" weight="duotone" />
                    </span>
                    <span className="stats-card__idx">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="stats-card__value">{stat.value}</p>
                  <h3 className="stats-card__label">{stat.label}</h3>
                  <p className="stats-card__desc">{stat.desc}</p>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
