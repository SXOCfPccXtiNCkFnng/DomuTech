import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  DeviceMobileCamera,
  MagnifyingGlass,
  CodeBlock,
  Lightning,
  SquaresFour,
  ShieldCheck,
} from "@phosphor-icons/react";
import AnimateOnScroll from "./AnimateOnScroll";
import BrandGhosts from "./BrandGhosts";
import { ArrowUpRightIcon } from "./icons";

const IconResponsivo = () => <DeviceMobileCamera className="w-5 h-5" weight="duotone" />;
const IconSEO = () => <MagnifyingGlass className="w-5 h-5" weight="duotone" />;
const IconTech = () => <CodeBlock className="w-5 h-5" weight="duotone" />;
const IconConversao = () => <Lightning className="w-5 h-5" weight="duotone" />;
const IconLayout = () => <SquaresFour className="w-5 h-5" weight="duotone" />;
const IconSecurity = () => <ShieldCheck className="w-5 h-5" weight="duotone" />;

const FEATURES = [
  {
    Icon: IconResponsivo,
    title: "Ecossistema Multiplataforma",
    paragraphs: [
      "Sua marca presente e eficiente em todos os canais digitais de forma unificada. Garantimos que sua solução seja adaptável e entregue uma experiência de uso impecável, seja no mobile, tablet ou desktop.",
      "Através de um desenvolvimento agnóstico a dispositivos, maximizamos o alcance do seu negócio e garantimos que nenhum potencial cliente seja perdido por falhas de carregamento ou layouts quebrados em telas específicas.",
    ],
  },
  {
    Icon: IconSEO,
    title: "Visibilidade & Inteligência",
    paragraphs: [
      "Não basta existir no digital, é preciso ser encontrado pelo público que realmente consome seu produto ou serviço. Aplicamos inteligência de dados, análise de concorrência e as melhores práticas de posicionamento orgânico (SEO) para que sua empresa lidere as intenções de busca.",
      "Nosso foco é atrair tráfego qualificado de forma constante, transformando cada clique em uma jornada de valor que resulta em conversão e fidelização.",
    ],
  },
  {
    Icon: IconTech,
    title: "Tecnologia de Ponta",
    paragraphs: [
      "Utilizamos as stacks mais modernas e robustas do mercado, como React, Node.js e WordPress Avançado, para criar ferramentas rápidas, seguras e extremamente escaláveis.",
      "Nosso código é limpo e otimizado para acompanhar o crescimento acelerado da sua empresa sem limitações técnicas, evitando lentidões desnecessárias que prejudicam o ranqueamento no Google e a experiência fluida do usuário final.",
    ],
  },
  {
    Icon: IconConversao,
    title: "Foco Total em Conversão",
    paragraphs: [
      "Criamos jornadas de usuário milimetricamente focadas em resultados práticos e mensuráveis. Integramos ferramentas de automação, fluxos de vendas inteligentes e análises profundas de comportamento para entender o que faz seu cliente tomar a decisão de compra.",
      "Transformamos cada interação digital em uma oportunidade real de negócio, otimizando seu ROI e garantindo um crescimento sustentável para sua marca no longo prazo.",
    ],
  },
  {
    Icon: IconLayout,
    title: "Design Estratégico",
    paragraphs: [
      "Design que comunica, encanta e, acima de tudo, vende. Desenvolvemos interfaces exclusivas e intuitivas que fortalecem o posicionamento da sua marca em um mercado altamente competitivo.",
      "Através de estudos aprofundados de UX (User Experience) e UI (User Interface), criamos uma conexão imediata de profissionalismo e transmitimos a confiança necessária para que seu público-alvo escolha sua solução como a melhor opção disponível.",
    ],
  },
  {
    Icon: IconSecurity,
    title: "Segurança & Suporte Contínuo",
    paragraphs: [
      "Protegemos seu patrimônio digital com protocolos de segurança de nível bancário, certificados SSL avançados e backups automáticos periódicos.",
      "Além da entrega final, oferecemos um acompanhamento técnico próximo e consultivo para garantir que sua plataforma esteja sempre atualizada com as últimas patches de segurança, mantendo seu negócio online rápido, estável e totalmente protegido contra qualquer tipo de ameaça externa.",
    ],
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="section-domu bg-[var(--domu-bg)] relative overflow-visible"
    >
      <BrandGhosts variant="sides" />
      <div className="mx-auto max-w-[92rem] page-pad-x relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2.15fr)] gap-8 lg:gap-12 items-start">
          {/* ── Coluna esquerda - Sticky ─────────────────── */}
          <div className="lg:sticky lg:top-24 self-start flex flex-col items-center lg:items-start text-center lg:text-left min-w-0">
            {/* SVG Filter for Video Chroma Key (Luminance based background removal) */}
            <svg width="0" height="0" className="absolute pointer-events-none" style={{ position: "absolute", width: 0, height: 0 }}>
              <defs>
                <filter id="keyout-black" colorInterpolationFilters="sRGB">
                  <feColorMatrix
                    type="matrix"
                    values="1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            2 2 2 0 -0.15"
                  />
                </filter>
              </defs>
            </svg>

            {/* Mascote Branding Video */}
            <div className="relative w-full max-w-[240px] md:max-w-[320px] mx-auto lg:mx-0 mb-2">
              <video
                src="/img/video-domu.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover block"
                style={{ filter: "url(#keyout-black) saturate(1.2)" }}
              />
            </div>

            {/* CTA below logo */}
            <div className="px-2 w-full max-w-sm">
              <h3 className="type-card-title text-gradient mb-4">
                Pronto para decolar seu projeto digital?
              </h3>
              <a
                href="/chatbot-placeholder"
                className="btn-budget group"
              >
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
                Peça um Orçamento
              </a>
            </div>
          </div>

          {/* ── Coluna direita - Lista de funcionalidades ───────────── */}
          <div className="pt-4 lg:pt-2 min-w-0 w-full overflow-hidden">
            <AnimateOnScroll>
              <div className="text-left section-head-domu">
                <span className="tag-domu mb-3 block">
                  SOLUÇÕES DIGITAIS DE ALTO IMPACTO
                </span>
                <h2 className="h2-domu text-gradient">
                  Expertise em crescimento
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
