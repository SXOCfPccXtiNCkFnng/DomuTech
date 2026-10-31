import { FAQItem } from "./types";

export const ROUTES = {
  home: "/",
  painel: "/solucoes/painel",
  studio: "/solucoes/studio",
  empresa: "/empresa",
} as const;

export const LINKS = {
  painel: "https://painel.domutech.digital",
  studio: "https://studio.domutech.digital",
  instagram: "https://www.instagram.com/domu_tech/",
  email: "contato@domutech.digital",
} as const;

export const WHATSAPP_NUMBER = "5511921474360";
export const WHATSAPP_DISPLAY = "+55 11 92147-4360";

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const WHATSAPP_MESSAGES = {
  geral: "Olá! Quero conhecer as soluções da Domu Tech.",
  painel: "Olá! Quero uma demonstração do Domu Painel.",
  studio: "Olá! Quero criar o site da minha empresa com o Domu Studio.",
} as const;

export const SEGMENTS = [
  "Imobiliárias",
  "Clínicas e estética",
  "Barbearias e salões",
  "Restaurantes e delivery",
  "Lava rápidos",
  "E-commerce e varejo",
  "Escritórios e jurídico",
  "Prestadores de serviço",
] as const;

export type PainelPlan = {
  name: string;
  price: string;
  description: string;
  highlight?: boolean;
  features: string[];
};

export const PAINEL_PLANS: PainelPlan[] = [
  {
    name: "Starter",
    price: "150",
    description: "Para começar a divulgar no WhatsApp oficial.",
    features: [
      "500 disparos por mês",
      "2 usuários",
      "150 conversas com a IA por mês",
      "Templates aprovados pela Meta",
      "Follow-up automático",
    ],
  },
  {
    name: "Pro",
    price: "297",
    description: "Para quem já vende pelo WhatsApp e quer escalar.",
    highlight: true,
    features: [
      "2.000 disparos por mês",
      "5 usuários",
      "500 conversas com a IA por mês",
      "Métricas e relatórios de ROI",
      "Suporte prioritário",
    ],
  },
  {
    name: "Enterprise",
    price: "597",
    description: "Para operações com alto volume e equipe.",
    features: [
      "6.000 disparos por mês",
      "10 usuários",
      "1.200 conversas com a IA por mês",
      "API ou número dedicado",
      "Gerente de conta",
    ],
  },
];

export const FAQ_PAINEL: FAQItem[] = [
  {
    question: "O Domu Painel serve só para disparar mensagens?",
    answer:
      "Não. O disparo é só o começo: o painel reúne campanhas, atendente com IA, follow-up automático, agenda, contatos, métricas de cada envio e uma inteligência que analisa os seus resultados e sugere o que melhorar. É uma central de vendas completa no seu WhatsApp.",
  },
  {
    question: "Disparar pelo Domu Painel pode bloquear o meu WhatsApp?",
    answer:
      "O Domu Painel usa a API oficial do WhatsApp (Meta Cloud API), com templates aprovados pela própria Meta. O painel acompanha a qualidade do seu número, respeita os limites diários da Meta, pausa campanhas quando a qualidade cai e remove automaticamente quem pede para sair. Isso reduz drasticamente o risco de bloqueio em comparação com ferramentas não oficiais.",
  },
  {
    question: "Vou continuar usando o WhatsApp no celular?",
    answer:
      "Sim. O Domu Painel funciona em coexistência: o mesmo número continua ativo no aplicativo do celular e no painel ao mesmo tempo.",
  },
  {
    question: "Como conecto o meu número?",
    answer:
      "Pelo cadastro oficial da Meta, direto no painel, em poucos cliques. Depois é só criar seus templates, importar seus contatos e disparar.",
  },
  {
    question: "O atendente com IA substitui a minha equipe?",
    answer:
      "Ele trabalha junto com a sua equipe: responde dúvidas, apresenta serviços e faz agendamentos 24h por dia, inclusive fora do horário comercial. Sua equipe assume quando precisar.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "A assinatura é mensal e sem fidelidade, por PIX (com 5% de desconto) ou cartão. Os valores podem variar conforme o segmento do seu negócio.",
  },
];

export const FAQ_STUDIO: FAQItem[] = [
  {
    question: "Quanto tempo leva para o meu site ficar pronto?",
    answer:
      "Com um layout pronto, o site pode ir ao ar no mesmo dia. Projetos sob medida levam em média de 1 a 3 semanas, dependendo do tamanho e do conteúdo.",
  },
  {
    question: "Preciso saber programar?",
    answer:
      "Não. Você escolhe um layout e edita textos, cores, imagens e seções no editor visual. Se preferir, nossa equipe faz o projeto sob medida para você.",
  },
  {
    question: "Posso usar o meu próprio domínio?",
    answer:
      "Sim. O site pode ser publicado no domínio da sua empresa, com certificado de segurança (SSL) incluso.",
  },
  {
    question: "Dá para vender pelo site?",
    answer:
      "Sim. Além de sites institucionais e landing pages, o Domu Studio tem layouts de loja virtual com vitrine, carrinho e checkout.",
  },
];
