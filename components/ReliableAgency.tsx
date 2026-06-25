import React from "react";
import { Check } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { ArrowUpRightIcon } from "./icons";

const FEATURES = [
  "Criação de sites personalizados para empresas",
  "Gerente de Projetos dedicado",
  "Layout de site profissional e responsivo",
  "Site otimizado para SEO e posicionamento no Google",
  "Direcionamento Consultivo do Projeto",
  "Ferramentas e Processos Profissionais",
  "Suporte técnico e manutenção contínua",
  "Estratégias de UX personalizadas",
  "Treinamento e vídeos tutoriais para gerenciar o site",
];

const ReliableAgency: React.FC = () => {
  return (
    <section className="py-10 md:py-24 bg-[var(--domu-black)] overflow-hidden relative border-t border-white/5">
      {/* Branding Ghosts Constellation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.15]">
        <img
          src="/logos/logo-glitch.png"
          className="absolute top-[10%] left-[-5%] w-56 h-56 animate-spin-slow opacity-40 object-contain"
          style={{ animationDuration: "70s" }}
          alt=""
        />
        <img
          src="/logos/logo-glitch.png"
          className="absolute bottom-[15%] right-[5%] w-32 h-32 animate-float opacity-70 object-contain"
          alt=""
        />
        <img
          src="/logos/logo-glitch.png"
          className="absolute top-[50%] right-[-10%] w-48 h-48 animate-spin-slow opacity-20 object-contain"
          style={{ animationDuration: "90s" }}
          alt=""
        />
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.01] -skew-x-12 translate-x-1/2 opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Coluna Esquerda - Texto Institucional */}
          <AnimateOnScroll>
            <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              <h2 className="h2-domu text-gradient mb-8 md:mb-12">
                A agência mais confiável
                <br className="hidden md:block" /> do Brasil
              </h2>
              <div className="space-y-8 text-[var(--domu-muted)] text-[15px] md:text-[17px] leading-relaxed">
                <p>
                  Desde 2016, a Domu Tech é uma empresa de criação de sites
                  profissionais reconhecida no Brasil, com{" "}
                  <span className="text-[var(--domu-white)] font-bold underline cursor-default">
                    mais de 10 avaliações positivas no Google
                  </span>
                  . Desenvolvemos sites personalizados com foco em SEO, geração
                  de leads e performance.
                </p>
                <p>
                  A criação de sites profissionais vai além do design. Envolve
                  estratégia, tecnologia e entendimento do negócio. Atuamos como
                  uma agência de desenvolvimento de sites que entrega projetos
                  rápidos, otimizados para o Google e preparados para converter
                  visitantes em clientes.
                </p>
                <p>
                  Cada projeto segue um processo consultivo, onde especialistas
                  em desenvolvimento de sites, UX e SEO trabalham juntos para
                  criar sites que atraem, engajam e geram vendas.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Coluna Direita - Checklist e CTA */}
          <AnimateOnScroll delay={200}>
            <div className="bg-white/[0.03] backdrop-blur-md p-6 md:p-12 rounded-xl md:rounded-lg border border-white/10">
              <span className="tag-domu mb-4 block">
                Desenvolvimento de sites sob medida
              </span>
              <h3 className="text-2xl md:text-3xl font-[900] text-white tracking-tighter mb-8">
                Criação de sites profissionais
              </h3>

              <ul className="space-y-4 mb-10">
                {FEATURES.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-black" strokeWidth={4} />
                    </div>
                    <span className="text-white/90 text-sm font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a href="/chatbot-placeholder" className="btn-budget w-full">
                <ArrowUpRightIcon className="w-5 h-5 fill-current" />
                Solicitar Orçamento
              </a>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Branding espiando no fundo */}
        <div className="absolute -bottom-10 right-1/4 w-32 h-32 opacity-20 animate-float pointer-events-none">
          <img src="/logos/logo-glitch.png" alt="" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default ReliableAgency;
