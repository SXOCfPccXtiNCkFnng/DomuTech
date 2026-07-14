import React from 'react';
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
  tone: Tone;
};

const STATS: StatItem[] = [
  {
    value: '15+',
    label: 'Projetos Entregues',
    desc: 'Sites, sistemas e soluções digitais no ar com performance de ponta.',
    icon: Briefcase,
    tone: 'blue',
  },
  {
    value: '3+',
    label: 'Anos de Mercado',
    desc: 'Experiência contínua entregando tecnologia sob medida.',
    icon: CalendarBlank,
    tone: 'light',
  },
  {
    value: '95+',
    label: 'Performance Média',
    desc: 'Velocidade, SEO e conversão em cada entrega.',
    icon: ChartLineUp,
    tone: 'soft',
  },
  {
    value: '12+',
    label: 'Tecnologias',
    desc: 'Stacks modernas para sites, apps e automações.',
    icon: CodeBlock,
    tone: 'dark',
  },
  {
    value: '40+',
    label: 'Clientes Atendidos',
    desc: 'Empresas que confiam na Domu para crescer no digital.',
    icon: UsersThree,
    tone: 'dark',
  },
  {
    value: '100%',
    label: 'Entrega Sob Medida',
    desc: 'Cada projeto pensado para o negócio, sem template genérico.',
    icon: SealCheck,
    tone: 'soft',
  },
  {
    value: '98%',
    label: 'Satisfação',
    desc: 'Clientes que recomendam a Domu após a entrega.',
    icon: Headset,
    tone: 'blue',
  },
  {
    value: '48h',
    label: 'Resposta Inicial',
    desc: 'Retorno rápido no primeiro contato.',
    icon: Lightning,
    tone: 'light',
  },
];

const Stats: React.FC = () => {
  return (
    <section id="stats" className="section-domu bg-[var(--domu-bg)] relative overflow-hidden">
      <BrandGhosts variant="corners" />

      <div className="container mx-auto px-4 relative z-10">
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
                <article className={`stats-card stats-card--${stat.tone}`}>
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
