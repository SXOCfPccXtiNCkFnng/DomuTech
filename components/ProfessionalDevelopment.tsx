import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const ProfessionalDevelopment: React.FC = () => {
  return (
    <section className="py-10 md:py-24 bg-[var(--domu-bg)] relative overflow-hidden border-t border-white/5">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Texto Esquerda */}
          <AnimateOnScroll>
            <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              <span className="text-[var(--domu-muted)] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">
                CRIAÇÃO DE SITES PARA EMPRESAS
              </span>
              <h2 className="h2-domu text-gradient mb-8 md:mb-12">
                Profissionais
                <br className="hidden md:block" /> Sob Medida
              </h2>
              <div className="space-y-4 text-[var(--domu-secondary)] text-[15px] md:text-[16px] leading-relaxed mb-8">
                <p>
                  A criação de sites profissionais é a construção de um ativo
                  estratégico capaz de gerar oportunidades reais. Focamos em
                  projetos personalizados com alta performance em SEO e
                  conversão.
                </p>
              </div>

              <h3 className="text-xl md:text-2xl font-black text-white  tracking-tighter mb-4 leading-tight">
                Desenvolvimento Gerenciável
              </h3>
              <div className="space-y-4 text-[var(--domu-muted)] text-[14px] md:text-[15px] leading-relaxed mb-8">
                <p>
                  Você tem autonomia total para atualizar seu site sem depender
                  de terceiros. Utilizamos tecnologias de ponta com um editor
                  intuitivo e estrutura robusta.
                </p>
              </div>

              {/* Cards de destaque inferiores */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                <div className="bg-[var(--domu-surface-1)] p-6 rounded-3xl border border-white/5 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left hover:border-white/10 transition-all duration-300">
                  <div className="w-10 h-10 bg-[var(--domu-surface-2)] border border-white/5 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="w-5 h-5"
                    >
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <path d="M17 20H7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-black text-[11px] uppercase tracking-tight mb-1">
                      Pagamento Fácil
                    </p>
                    <p className="text-[var(--domu-muted)] text-[11px] leading-snug">
                      Contrato e boleto/cartão.
                    </p>
                  </div>
                </div>

                <div className="bg-[var(--domu-surface-1)] p-6 rounded-3xl border border-white/5 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left hover:border-white/10 transition-all duration-300">
                  <div className="w-10 h-10 bg-[var(--domu-surface-2)] border border-white/5 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="w-5 h-5"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-black text-[11px] uppercase tracking-tight mb-1">
                      SEO & Speed
                    </p>
                    <p className="text-[var(--domu-muted)] text-[11px] leading-snug">
                      Otimizado para o Google.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Imagem Direita (Branding) */}
          <AnimateOnScroll delay={300}>
            <div className="relative flex items-center justify-center scale-90 lg:scale-100">
              <div className="absolute w-[70%] aspect-square bg-white/[0.02] rounded-full blur-[60px]" />
              <div className="relative z-10 w-full flex items-center justify-center">
                <img
                  src="/logos/mascote-site.png"
                  alt="Domu Tech"
                  className="w-[80%] md:w-[65%] h-auto opacity-100 drop-shadow-2xl"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDevelopment;
