import React from "react";
import { Link } from "react-router-dom";
import {
  SmartphoneIcon,
  MagnifierIcon,
  CodeSquareIcon,
  BoltIcon,
  Widget4Icon,
  ShieldCheckSolar,
  ArrowUpRightIcon,
} from "./icons";
import AnimateOnScroll from "./AnimateOnScroll";
import BrandGhosts from "./BrandGhosts";

const IconResponsivo = () => <SmartphoneIcon className="w-5 h-5" />;
const IconSEO = () => <MagnifierIcon className="w-5 h-5" />;
const IconTech = () => <CodeSquareIcon className="w-5 h-5" />;
const IconConversao = () => <BoltIcon className="w-5 h-5" />;
const IconLayout = () => <Widget4Icon className="w-5 h-5" />;
const IconSecurity = () => <ShieldCheckSolar className="w-5 h-5" />;

const FEATURES = [
  {
    Icon: IconResponsivo,
    title: "Título placeholder",
    paragraphs: [
      "Texto placeholder. Conteúdo temporário para layout e revisão visual.",
      "Texto placeholder. Conteúdo temporário para layout e revisão visual.",
    ],
  },
  {
    Icon: IconSEO,
    title: "Título placeholder",
    paragraphs: [
      "Texto placeholder. Conteúdo temporário para layout e revisão visual.",
      "Texto placeholder. Conteúdo temporário para layout e revisão visual.",
    ],
  },
  {
    Icon: IconTech,
    title: "Título placeholder",
    paragraphs: [
      "Texto placeholder. Conteúdo temporário para layout e revisão visual.",
      "Texto placeholder. Conteúdo temporário para layout e revisão visual.",
    ],
  },
  {
    Icon: IconConversao,
    title: "Título placeholder",
    paragraphs: [
      "Texto placeholder. Conteúdo temporário para layout e revisão visual.",
      "Texto placeholder. Conteúdo temporário para layout e revisão visual.",
    ],
  },
  {
    Icon: IconLayout,
    title: "Título placeholder",
    paragraphs: [
      "Texto placeholder. Conteúdo temporário para layout e revisão visual.",
      "Texto placeholder. Conteúdo temporário para layout e revisão visual.",
    ],
  },
  {
    Icon: IconSecurity,
    title: "Título placeholder",
    paragraphs: [
      "Texto placeholder. Conteúdo temporário para layout e revisão visual.",
      "Texto placeholder. Conteúdo temporário para layout e revisão visual.",
    ],
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="section-domu tone-mist relative overflow-visible"
    >
      <BrandGhosts variant="sides" />
      <div className="mx-auto max-w-[92rem] page-pad-x relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2.15fr)] gap-8 lg:gap-12 items-start">
          {/* ── Coluna esquerda - Sticky ─────────────────── */}
          <div className="lg:sticky lg:top-24 self-start flex flex-col items-center lg:items-start text-center lg:text-left min-w-0">
            {/* Placeholder media */}
            <div className="relative w-full max-w-[240px] md:max-w-[320px] mx-auto lg:mx-0 mb-2">
              <img
                src="/placeholder.svg"
                alt="Placeholder"
                className="w-full h-auto object-cover block rounded-xl"
              />
            </div>

            {/* CTA below logo */}
            <div className="px-2 w-full max-w-sm">
              <h3 className="type-card-title text-gradient mb-4">
                Título placeholder
              </h3>
              <Link to="/login" className="btn-budget group">
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
                Botão placeholder
              </Link>
            </div>
          </div>

          {/* ── Coluna direita - Lista de funcionalidades ───────────── */}
          <div className="pt-4 lg:pt-2 min-w-0 w-full overflow-hidden">
            <AnimateOnScroll>
              <div className="text-left section-head-domu">
                <span className="tag-domu mb-3 block">
                  TAG PLACEHOLDER
                </span>
                <h2 className="h2-domu text-gradient">
                  Título placeholder
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="divide-y divide-white/5">
              {FEATURES.map((item, index) => (
                <AnimateOnScroll key={index} delay={index * 60}>
                    <div className="flex flex-col sm:flex-row gap-5 py-5 md:py-6 group items-start text-left min-w-0">
                    {/* Ícone quadrado - Clean Design */}
                    <div className="icon-tile w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-[var(--domu-accent)]/15">
                      <item.Icon />
                    </div>

                    <div className="min-w-0 flex-1 w-full">
                      <h4 className="feature-item-title type-card-title text-[var(--domu-accent)] mb-2">
                        {item.title}
                      </h4>
                      <div className="type-card-desc opacity-95 text-justify">
                        {item.paragraphs.map((p, i) => (
                          <p
                            key={i}
                            className={
                              i !== item.paragraphs.length - 1 ? "mb-3" : ""
                            }
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
