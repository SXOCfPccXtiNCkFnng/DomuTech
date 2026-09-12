import React, { useMemo } from 'react';
import {
  CaseIcon,
  CalendarMinimalisticIcon,
  GraphUpIcon,
  UsersGroupRoundedIcon,
  BoltIcon,
  VerifiedCheckIcon,
  HeadphonesRoundIcon,
  CodeSquareIcon,
} from './icons';
import AnimateOnScroll from './AnimateOnScroll';
import BrandGhosts from './BrandGhosts';
import { PH } from '../constants';

type Tone = 'light' | 'blue' | 'dark' | 'soft';

type StatItem = {
  value: string;
  label: string;
  desc: string;
  icon: typeof CaseIcon;
};

const STATS: StatItem[] = [
  {
    value: PH.value,
    label: PH.label,
    desc: PH.text,
    icon: CaseIcon,
  },
  {
    value: PH.value,
    label: PH.label,
    desc: PH.text,
    icon: CalendarMinimalisticIcon,
  },
  {
    value: PH.value,
    label: PH.label,
    desc: PH.text,
    icon: GraphUpIcon,
  },
  {
    value: PH.value,
    label: PH.label,
    desc: PH.text,
    icon: CodeSquareIcon,
  },
  {
    value: PH.value,
    label: PH.label,
    desc: PH.text,
    icon: UsersGroupRoundedIcon,
  },
  {
    value: PH.value,
    label: PH.label,
    desc: PH.text,
    icon: VerifiedCheckIcon,
  },
  {
    value: PH.value,
    label: PH.label,
    desc: PH.text,
    icon: HeadphonesRoundIcon,
  },
  {
    value: PH.value,
    label: PH.label,
    desc: PH.text,
    icon: BoltIcon,
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
    <section id="stats" className="section-domu tone-snow relative overflow-hidden">
      <BrandGhosts variant="corners" />

      <div className="mx-auto w-full max-w-[92rem] page-pad-x relative z-10">
        <AnimateOnScroll>
          <div className="text-center section-head-domu max-w-2xl mx-auto">
            <span className="tag-domu mb-4 block">{PH.tag}</span>
            <h2 className="h2-domu text-gradient">
              {PH.title}
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="stats-grid">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <AnimateOnScroll key={index} delay={60 + index * 55}>
                <article className={`stats-card stats-card--${tonePattern[index]}`}>
                  <div className="stats-card__top">
                    <span className="stats-card__icon" aria-hidden>
                      <Icon className="w-5 h-5" />
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
