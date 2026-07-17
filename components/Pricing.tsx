import React from "react";
import { DesktopTower, Star, Check } from "@phosphor-icons/react";
import AnimateOnScroll from "./AnimateOnScroll";
import { ArrowUpRightIcon, PhoneIcon, WhatsAppIcon } from "./icons";

const EXPRESSO_FEATURES = [
  "Criação de site barato com modelo de layout",
  "Sites responsivos (desktop, tablet, celular)",
  "One page ou Multipage",
  "Editor visual de arrasta e solta",
  "Google friendly",
  "Botões para gerar leads",
  "Formulários simples",
  "Integração com redes sociais",
  "Vídeos tutoriais para gestão do site",
  "Conformidade com a LGPD",
];

const CUSTOM_FEATURES = [
  "Criação de site profissional com layout sob medida",
  "Site Responsivo (desktop, tablet, celular)",
  "Todos os tipos de sites",
  "Integrações customizadas",
  "Otimização SEO para Google",
  "Botões para gerar leads",
  "Formulários Inteligentes",
  "Integração com redes sociais",
  "Treinamento para uso do site",
  "Conformidade com a LGPD",
];

const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="py-10 md:py-24 bg-[var(--domu-bg)] relative overflow-hidden lg:min-h-[90vh] flex items-center"
    >
      {/* Branding Ghosts Constellation - Forced to Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05] z-0">
        <img
          src="/fraucon.png"
          className="absolute bottom-[10%] left-0 w-64 h-64 animate-spin-slow object-contain"
          style={{ animationDuration: "55s" }}
          alt=""
        />
        <img
          src="/fraucon.png"
          className="absolute top-[15%] right-[10%] w-32 h-32 animate-float object-contain"
          alt=""
        />
        <img
          src="/fraucon.png"
          className="absolute top-[50%] left-[10%] w-20 h-20 animate-float-delayed object-contain"
          alt=""
        />
      </div>

      {/* Background elements - more subtle */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/[0.01] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr_1.2fr] gap-8 md:gap-10 items-stretch max-w-[1400px] mx-auto">
          {/* Card 1: Site Expresso */}
          <AnimateOnScroll>
            <div className="group bg-[var(--domu-surface-1)] rounded-3xl p-8 md:p-10 shadow-2xl border border-white/5 hover:border-white/10 transition-all duration-500 h-full flex flex-col hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-[var(--domu-surface-2)] border border-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  <DesktopTower className="w-7 h-7" weight="duotone" />
                </div>
                <h3 className="text-white font-black text-2xl  tracking-tight mb-2">
                  Site Expresso
                </h3>
                <p className="p-domu opacity-70 mx-auto">
                  Rapidez e investimento inteligente para sua empresa escalar.
                </p>
              </div>

              <div className="text-center mb-6 py-6 border-y border-white/5 relative bg-[var(--domu-surface-2)] border border-white/5 rounded-2xl flex flex-col items-center justify-center min-h-[140px]">
                <span className="tag-domu !text-white/40 mb-1">
                  A partir de
                </span>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-white/60 font-black text-2xl">R$</span>
                  <span className="stat-domu text-white">
                    609
                  </span>
                </div>
                <p className="tag-domu mt-1">
                  + HOSPEDAGEM E SUPORTE
                </p>
              </div>

              {/* Scrollable list */}
              <div className="flex-grow mb-8 max-h-[280px] overflow-y-auto pr-3 custom-scrollbar">
                <ul className="space-y-4">
                  {EXPRESSO_FEATURES.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-4 h-4 bg-[var(--domu-accent)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-2 h-2 text-white" weight="bold" />
                      </div>
                      <span className="p-domu !text-[var(--domu-secondary)] leading-tight">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="/chatbot-placeholder" className="btn-budget w-full">
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
                Peça um Orçamento
              </a>
            </div>
          </AnimateOnScroll>

          {/* Coluna Central: Info e Astro */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-8 order-first lg:order-none">
            <AnimateOnScroll>
              <span className="tag-domu mb-6 block">
                Planos e Preços
              </span>
              <h2 className="h2-domu text-gradient mb-8">
                Contrate um site
                <br />
                profissional
              </h2>
              <div className="relative w-48 h-48 mb-8 group mx-auto">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl scale-125"></div>
                <img
                  src="/fraucon.png"
                  alt="Domu Tech"
                  className="relative z-10 w-full h-full object-contain animate-float opacity-90"
                />
              </div>
              <p className="lead-domu mb-8 max-w-[280px] mx-auto">
                Soluções inteligentes para elevar sua presença digital ao
                próximo nível.
              </p>

              <a
                href="https://wa.me/5511934430659"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                Falar no WhatsApp
              </a>
            </AnimateOnScroll>
          </div>

          {/* Card 2: Site Sob Medida */}
          <AnimateOnScroll delay={300}>
            <div className="group bg-[var(--domu-surface-1)] rounded-3xl p-8 md:p-10 shadow-2xl border border-white/5 hover:border-white/10 transition-all duration-500 h-full flex flex-col hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-[var(--domu-surface-2)] border border-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  <Star className="w-7 h-7" weight="duotone" />
                </div>
                <h3 className="text-white font-black text-2xl  tracking-tight mb-2">
                  Site Sob Medida
                </h3>
                <p className="p-domu opacity-70 mx-auto">
                  UX/UI Design exclusiva para autoridade e conversão máxima.
                </p>
              </div>

              <div className="text-center mb-6 py-6 border-y border-white/5 relative bg-[var(--domu-surface-2)] border border-white/5 rounded-2xl flex flex-col items-center justify-center min-h-[140px]">
                <div className="flex items-center justify-center">
                  <span className="text-white font-black text-3xl tracking-tight">
                    Personalizado
                  </span>
                </div>
                <p className="tag-domu mt-1">
                  SOB ORÇAMENTO
                </p>
              </div>

              {/* Scrollable list */}
              <div className="flex-grow mb-8 max-h-[280px] overflow-y-auto pr-3 custom-scrollbar">
                <ul className="space-y-4">
                  {CUSTOM_FEATURES.map((f, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-0.5 w-4 h-4 bg-[var(--domu-accent)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-2 h-2 text-white" weight="bold" />
                      </div>
                      <span className="p-domu !text-[var(--domu-secondary)] leading-tight">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="/chatbot-placeholder" className="btn-budget w-full">
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
                Peça um Orçamento
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
