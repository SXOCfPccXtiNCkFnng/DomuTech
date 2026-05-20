import {
  Service,
  ComplementaryService,
  Metric,
  Value,
  Project,
  FAQItem,
  ServiceDetail,
} from "./types";
import {
  CodeIcon,
  AutomationIcon,
  MobileIcon,
  MarketingIcon,
  BIIcon,
  TechConsultingIcon,
  UserGroupIcon,
  TrophyIcon,
  ClockIcon,
  TargetIcon,
  LightbulbIcon,
  ShieldCheckIcon,
  ArrowUpRightIcon,
  UsersIcon,
  CheckIcon,
  StarIcon,
  ArrowRightIcon,
  PaletteIcon,
  GlobeIcon,
} from "./components/icons";

export const NAV_LINKS = [
  { name: "Home", href: "/#home" },
  { name: "Serviços", href: "/#services" },
  { name: "Portfólio", href: "/#portfolio" },
  { name: "Orçamento", href: "/chatbot-placeholder" },
];

export const FOOTER_INSTITUCIONAL = [
  { name: "Home", href: "/" },
  { name: "Cases", href: "/cases" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Orçamento", href: "/chatbot-placeholder" },
  { name: "Loja de Layouts", href: "/layouts" },
  { name: "Aviso de Cookies", href: "#" },
];

export const FOOTER_SERVICOS = [
  { name: "Criação de Sites", href: "/servico/site-sob-medida" },
  { name: "IA & Automação", href: "/servico/automacao-ia" },
  { name: "Software House", href: "/servico/software-house" },
  { name: "Tráfego & Performance", href: "/servico/trafego-performance" },
  { name: "Branding & Design UX", href: "/servico/branding-design" },
];

// Segmentos removidos conforme solicitado

export const MAIN_SERVICES: Service[] = [
  {
    icon: CodeIcon,
    title: "Criação de Sites",
    description:
      "Desenvolvemos websites modernos, responsivos e otimizados para conversão, elevando sua presença digital.",
    features: [
      "Sites Institucionais Profissionais",
      "E-commerce Completo",
      "Landing Pages de Alta Conversão",
      "Portfólios Criativos",
      "Aplicativos Web Progressivos (PWA)",
      "Otimização SEO",
    ],
    price: "A partir de R$ 2.000",
    image: "",
    backgroundImage: "/projeto/fundo-web.png",
  },
  {
    icon: AutomationIcon,
    title: "Automação com IA",
    description:
      "Sistemas inteligentes que automatizam tarefas repetitivas e otimizam processos de negócio.",
    features: [
      "Atendimento Inteligente 24/7",
      "Agendamento Automático",
      "Agentes de IA Personalizados",
      "Automação de Workflow",
      "Integração com CRMs",
    ],
    price: "Consultar Projeto",
    image: "/projeto/img-automacao.png",
    backgroundImage: "/projeto/img-fundo-automacao.png",
  },
  {
    icon: GlobeIcon,
    title: "Registro de Domínio",
    description:
      "Garanta a presença online da sua marca com o registro do domínio perfeito. Ajudamos você a escolher e registrar o melhor endereço web para seu negócio.",
    features: [
      "Pesquisa de Disponibilidade",
      "Registro de Domínio (.com, .br, etc)",
      "Configuração de DNS",
      "Proteção de Privacidade",
      "Renovação Automática",
      "Suporte Técnico",
    ],
    price: "A partir de R$ 40/ano",
    image: "/projeto/img-marca.png",
    backgroundImage: "/projeto/fundo-dominio.jpg",
  },
  {
    icon: TechConsultingIcon,
    title: "Integrações Inteligentes",
    description:
      "Conectamos suas ferramentas favoritas com o poder da IA para criar um ecossistema digital sem falhas.",
    features: [
      "Integrações Personalizadas",
      "Sincronização de Dados",
      "Bots para WhatsApp/Telegram",
      "Dashboard de Resultados IA",
      "Suporte Técnico Dedicado",
    ],
    price: "A partir de R$ 1.500",
    image: "/projeto/img-integracoes.png",
    backgroundImage: "/projeto/img-fundo-integracao.png",
  },
];

export const COMPLEMENTARY_SERVICES: ComplementaryService[] = [
  {
    icon: PaletteIcon,
    title: "Experiência do Usuário (UX)",
    description:
      "Criamos interfaces intuitivas e experiências memoráveis que cativam os usuários, desde a prototipagem até o design final.",
    items: [
      "Design de Interface (UI)",
      "Prototipagem com Figma",
      "Jornada do Usuário",
    ],
  },
  {
    icon: PaletteIcon,
    title: "Identidade Visual",
    description: "Criação de identidade visual completa para sua marca.",
    items: ["Logotipo", "Paleta de cores", "Tipografia", "Manual de marca"],
  },
  {
    icon: BIIcon,
    title: "Inteligência de negócios",
    description: "Painéis e relatórios para tomada de decisão.",
    items: ["Power BI", "Google Analytics", "Métricas Personalizadas"],
  },
  {
    icon: TechConsultingIcon,
    title: "Consultoria Tech",
    description: "Orientação estratégica para transformação digital.",
    items: [
      "Auditoria Técnica",
      "Arquitetura de Software",
      "Roteiro Tecnológico",
    ],
  },
];

export const ABOUT_METRICS: Metric[] = [
  { icon: UserGroupIcon, value: "10+", label: "Clientes Satisfeitos" },
  { icon: TrophyIcon, value: "20+", label: "Projetos Concluídos" },
  { icon: ClockIcon, value: "2+", label: "Anos de Experiência" },
  { icon: TargetIcon, value: "95%", label: "Satisfação" },
];

export const COMPANY_VALUES: Value[] = [
  {
    icon: LightbulbIcon,
    title: "Inovação",
    description:
      "Sempre trazemos as melhores soluções e ideias criativas para seus projetos.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Confiabilidade",
    description:
      "Código limpo, seguro e escalonável em todos os nossos projetos.",
  },
  {
    icon: ArrowUpRightIcon,
    title: "Agilidade",
    description:
      "Entregamos projetos no prazo com metodologias ágeis de desenvolvimento.",
  },
  {
    icon: UsersIcon,
    title: "Colaboração",
    description:
      "Trabalhamos lado a lado com nossos clientes para garantir o sucesso.",
  },
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    tag: "Criação de Sites",
    title: "Domu Tech - Site Institucional",
    description:
      "Site institutional moderno para a Domu Tech, com foco em apresentação clara de serviços, performance e conversão de visitantes.",
    image: "/projeto/img-AlanX.png",
    link: "https://alanx.netlify.app/",
    isFeatured: true,
  },
  {
    tag: "Criação de Sites",
    title: "PetLife - Landing Page",
    description:
      "Landing page da PetLife com foco em conversão, layout moderno e navegação direta para apresentar serviços e benefícios.",
    image: "/projeto/img-petlife.png",
    link: "https://alanfelipem.github.io/PetLife/",
    isFeatured: true,
  },
  {
    tag: "Criação de Sites",
    title: "Portfolio Alan Felipe",
    description:
      "Criação de portfólio profissional sob medida, com foco em destacar projetos, habilidades e facilitar o contato.",
    image: "/projeto/img-portfolioalan.png",
    link: "https://portfolio-alan-felipe.netlify.app/",
  },
  {
    tag: "Criação de Sites",
    title: "Landing Page - Mundo Invertido",
    description:
      "Criação de landing page temática com foco em impacto visual, narrativa e conversão de visitantes.",
    image: "/projeto/img-mundoinvertido.png",
    link: "https://alanfelipem.github.io/Landing-Page-no-Mundo-Invertido/",
  },
  {
    tag: "Criação de Sites",
    title: "Gestor de Estoque Web",
    description:
      "Gestor de estoque web para controle de produtos, entradas e saídas com visão clara e organizada.",
    image: "/projeto/img-gestorestoque.png",
    link: "https://gestor-estoque.netlify.app",
  },
  {
    tag: "Página de destino",
    title: "Site Advogada - Institucional",
    description:
      "Projeto institucional para advocacia, reforçando credibilidade, serviços jurídicos e canais de contato eficientes, entre outros.",
    image: "",
    link: "#",
  },
  {
    tag: "Criação de Sites",
    title: "AGB Campinas - Site Institucional",
    description:
      "Desenvolvimento de site moderno para a AGB Campinas, com foco em performance, acessibilidade e design profissional.",
    image: "/projeto/img-agbcampinas.png",
    link: "https://agbcampinas.com.br/",
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Qual o prazo médio de entrega?",
    answer:
      "Tráfego & IA: 7-15 dias | Sites & Landing Pages: 15-30 dias | Sistemas: 30-60 dias. O prazo varia conforme a complexidade da solução.",
  },
  {
    question: "Oferecem suporte pós-entrega?",
    answer:
      "Sim! Garantimos suporte completo após a publicação + planos de manutenção para garantir que sua solução continue performando.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "50% na aprovação do projeto + 50% na entrega. Parcelamento disponível via cartão de crédito ou boleto para facilitar seu investimento.",
  },
  {
    question: "Posso acompanhar o desenvolvimento?",
    answer:
      "Com certeza! Você recebe atualizações constantes e acesso ao ambiente de homologação para validar cada etapa em tempo real.",
  },
  {
    question: "As soluções são otimizadas?",
    answer:
      "Sim, todos os nossos projetos seguem as melhores práticas de performance, SEO e segurança para garantir máxima visibilidade.",
  },
  {
    question: "Os projetos são responsivos?",
    answer:
      "Sim. Todas as interfaces que desenvolvemos se adaptam perfeitamente a qualquer tamanho de tela: celulares, tablets e desktops.",
  },
  {
    question: "Consigo gerenciar o conteúdo sozinho?",
    answer:
      "Sim! Nossas soluções incluem painéis administrativos intuitivos para que você tenha autonomia total sobre seus ativos digitais.",
  },
  {
    question: "Trabalham com projetos sob medida?",
    answer:
      "Sim, somos especialistas em desenvolver ferramentas personalizadas que resolvem dores específicas do seu modelo de negócio.",
  },
  {
    question: "Como é feita a hospedagem?",
    answer:
      "Oferecemos infraestrutura de alta performance ou configuramos no servidor da sua preferência com total apoio técnico.",
  },
  {
    question: "Atendem e-commerce e vendas online?",
    answer:
      "Sim! Implementamos ecossistemas completos de vendas com gestão de estoque, pagamentos e logística integrada.",
  },
];

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "criação-de-sites": {
    whyChoose:
      "Seu site é a primeira impressão que seus clientes têm da sua marca. Sabemos o quanto é importante causar um impacto positivo. Criamos websites que não apenas impressionam visualmente, mas também convertem visitantes em clientes. Cada pixel, cada clique é pensado para oferecer a melhor experiência possível e impulsionar o crescimento do seu negócio.",
    benefits: [
      {
        title: "Design Responsivo",
        description:
          "Seu site funcionará perfeitamente em todos os dispositivos: desktop, tablet e smartphone.",
      },
      {
        title: "SEO Otimizado",
        description:
          "Implementamos as melhores práticas de SEO para garantir que seu site seja encontrado nos mecanismos de busca.",
      },
      {
        title: "Alta Performance",
        description:
          "Sites rápidos e otimizados que proporcionam uma excelente experiência ao usuário.",
      },
      {
        title: "Integração de Ferramentas",
        description:
          "Conectamos seu site com as principais ferramentas de marketing, analytics e pagamento.",
      },
      {
        title: "Segurança Garantida",
        description:
          "Implementamos certificados SSL e as melhores práticas de segurança para proteger seus dados.",
      },
      {
        title: "Suporte Contínuo",
        description:
          "Oferecemos suporte técnico e manutenção para manter seu site sempre atualizado.",
      },
    ],
    process: [
      {
        title: "Briefing",
        description:
          "Entendemos seu negócio, objetivos e público-alvo para criar a estratégia perfeita.",
      },
      {
        title: "Design",
        description:
          "Criamos protótipos e layouts personalizados alinhados com sua identidade visual.",
      },
      {
        title: "Desenvolvimento",
        description:
          "Transformamos o design em um site funcional com a melhor qualidade possível.",
      },
      {
        title: "Lançamento",
        description:
          "Testamos tudo e colocamos seu site no ar com acompanhamento completo.",
      },
    ],
  },
  "automação-com-ia": {
    whyChoose:
      "A eficiência operacional é o segredo das empresas que escalam. Nossas soluções de Automação com IA eliminam o trabalho manual repetitivo, permitindo que sua equipe foque no que realmente importa. Criamos sistemas que trabalham para você 24 horas por dia, 7 dias por semana, garantindo que nenhum cliente fique sem resposta e nenhum processo fique parado.",
    benefits: [
      {
        title: "Atendimento 24/7",
        description:
          "Seus clientes são atendidos instantaneamente em qualquer horário, com a inteligência e tom de voz da sua marca.",
      },
      {
        title: "Redução de Custos",
        description:
          "Automatize tarefas que levariam horas humanas, reduzindo drasticamente o custo operacional.",
      },
      {
        title: "Agendamento Sem Erros",
        description:
          "Sistema de agendamento automático que sincroniza com seu calendário e evita conflitos.",
      },
      {
        title: "Escalabilidade Real",
        description:
          "Atenda centenas de pessoas simultaneamente sem perder a qualidade ou precisar contratar mais pessoal.",
      },
      {
        title: "Personalização Extrema",
        description:
          "IA treinada especificamente com os dados e processos da sua empresa para resultados precisos.",
      },
      {
        title: "Integração Total",
        description:
          "Conectamos a IA com suas ferramentas atuais: WhatsApp, CRM, E-mail e muito mais.",
      },
    ],
    process: [
      {
        title: "Diagnóstico",
        description:
          "Analisamos seus processos atuais para identificar as maiores oportunidades de automação.",
      },
      {
        title: "Desenvolvimento",
        description:
          "Treinamos os modelos de IA e criamos as integrações necessárias para sua operação.",
      },
      {
        title: "Testes e Refinamento",
        description:
          "Validamos as automações em ambiente controlado para garantir precisão e segurança.",
      },
      {
        title: "Implementação",
        description:
          "Colocamos os sistemas no ar e acompanhamos os resultados iniciais de perto.",
      },
    ],
  },
  "registro-de-domínio": {
    whyChoose:
      "Seu domínio é o endereço digital da sua marca. É aquele que seus clientes digitam na barra de navegação, o que aparece no seu cartão de visita, no seu e-mail profissional. Queremos garantir que você tenha um domínio que reflita perfeitamente quem você é. Ajudamos você a encontrar o domínio ideal e cuidamos de toda a configuração técnica para que você possa focar no que realmente importa: seu negócio.",
    benefits: [
      {
        title: "Identidade Profissional",
        description:
          "Um domínio próprio transmite credibilidade e profissionalismo para seus clientes.",
      },
      {
        title: "Fácil de Lembrar",
        description:
          "Escolhemos domínios curtos e memoráveis que facilitam o acesso ao seu site.",
      },
      {
        title: "Proteção de Dados",
        description:
          "Seus dados pessoais ficam protegidos com o serviço de privacidade WHOIS.",
      },
      {
        title: "Configuração Completa",
        description: "Configuramos DNS, e-mail e redirecionamentos para você.",
      },
      {
        title: "Suporte Contínuo",
        description:
          "Ajudamos com qualquer dúvida ou problema relacionado ao seu domínio.",
      },
      {
        title: "Renovação Automática",
        description:
          "Seu domínio nunca expira com a renovação automática ativada.",
      },
    ],
    process: [
      {
        title: "Pesquisa",
        description:
          "Verificamos a disponibilidade do domínio desejado e sugerimos alternativas.",
      },
      {
        title: "Registro",
        description:
          "Realizamos o registro do domínio na extensão escolhida (.com, .br, etc).",
      },
      {
        title: "Configuração",
        description:
          "Configuramos DNS, e-mail profissional e todas as definições necessárias.",
      },
      {
        title: "Entrega",
        description:
          "Você recebe acesso completo ao painel de controle do seu domínio.",
      },
    ],
  },
  "integrações-inteligentes": {
    whyChoose:
      "O verdadeiro poder da tecnologia aparece quando todas as suas ferramentas conversam entre si. Nossas integrações inteligentes eliminam silos de dados e criam fluxos de trabalho fluidos. Seja conectando seu site ao seu CRM ou criando bots que processam pedidos automaticamente, nós construímos a ponte que faltava para seu sucesso digital.",
    benefits: [
      {
        title: "Fluxo de Dados Contínuo",
        description:
          "Informações circulam automaticamente entre suas plataformas sem necessidade de redigitação.",
      },
      {
        title: "Agilidade Decisória",
        description:
          "Dados atualizados em tempo real em dashboards integrados para decisões mais rápidas.",
      },
      {
        title: "Experiência do Cliente",
        description:
          "Processos integrados significam respostas mais rápidas e precisas para seus clientes.",
      },
      {
        title: "Automação de Vendas",
        description:
          "Leads do site caem direto no CRM e já recebem a primeira mensagem via bot.",
      },
      {
        title: "Segurança de Dados",
        description:
          "Integrações construídas com protocolos de segurança modernos para proteger seu negócio.",
      },
      {
        title: "Suporte Especializado",
        description:
          "Nossa equipe garante que as integrações continuem funcionando mesmo com atualizações de terceiros.",
      },
    ],
    process: [
      {
        title: "Mapeamento",
        description:
          "Mapeamos todas as ferramentas e o fluxo de informações necessário para o projeto.",
      },
      {
        title: "Arquitetura",
        description:
          "Desenhamos a melhor estrutura de conexão, priorizando estabilidade e segurança.",
      },
      {
        title: "Configuração",
        description:
          "Desenvolvemos as APIs e conectores que farão as ferramentas trabalharem juntas.",
      },
      {
        title: "Monitoramento",
        description:
          "Implementamos sistemas de log e alerta para garantir que nada pare de funcionar.",
      },
    ],
  },
  "experiência-do-usuário-(ux)": {
    whyChoose:
      "Uma ótima experiência do usuário é fundamental para o sucesso de qualquer produto digital. Criamos interfaces intuitivas e agradáveis que facilitam a navegação e aumentam a satisfação dos usuários.",
    benefits: [
      {
        title: "Maior Conversão",
        description:
          "Interfaces bem projetadas aumentam significativamente as taxas de conversão.",
      },
      {
        title: "Satisfação do Usuário",
        description:
          "Proporcione experiências memoráveis que fidelizam clientes.",
      },
      {
        title: "Redução de Custos",
        description:
          "Menos problemas de usabilidade significam menos suporte necessário.",
      },
      {
        title: "Design Profissional",
        description:
          "Interfaces modernas e atraentes que transmitem credibilidade.",
      },
      {
        title: "Testes de Usabilidade",
        description:
          "Validamos o design com usuários reais antes do desenvolvimento.",
      },
      {
        title: "Prototipagem Rápida",
        description:
          "Visualize e teste conceitos antes de investir no desenvolvimento completo.",
      },
    ],
    process: [
      {
        title: "Pesquisa",
        description:
          "Entendemos seu público e identificamos necessidades e comportamentos.",
      },
      {
        title: "Wireframes",
        description:
          "Criamos estruturas básicas para definir layout e fluxo de navegação.",
      },
      {
        title: "Protótipo",
        description:
          "Desenvolvemos protótipos interativos para testes e validação.",
      },
      {
        title: "Design Final",
        description:
          "Refinamos todos os detalhes visuais e entregamos os arquivos finais.",
      },
    ],
  },
  "identidade-visual": {
    whyChoose:
      "Uma identidade visual forte é essencial para destacar sua marca no mercado. Criamos logotipos únicos e manuais de marca completos que transmitem os valores do seu negócio.",
    benefits: [
      {
        title: "Marca Memorável",
        description:
          "Logotipo único e impactante que fica na memória dos clientes.",
      },
      {
        title: "Consistência Visual",
        description:
          "Manual de marca garante aplicação correta em todos os materiais.",
      },
      {
        title: "Profissionalismo",
        description:
          "Identidade visual forte transmite credibilidade e confiança.",
      },
      {
        title: "Diferenciação",
        description:
          "Destaque-se da concorrência com uma marca única e autêntica.",
      },
      {
        title: "Arquivos Completos",
        description:
          "Receba todos os formatos necessários para uso digital e impresso.",
      },
      {
        title: "Consultoria Especializada",
        description:
          "Orientação sobre como aplicar corretamente sua identidade visual.",
      },
    ],
    process: [
      {
        title: "Briefing",
        description: "Entendemos os valores, missão e visão da sua marca.",
      },
      {
        title: "Conceitos",
        description: "Apresentamos diferentes propostas de identidade visual.",
      },
      {
        title: "Refinamento",
        description: "Aprimoramos o conceito escolhido até a perfeição.",
      },
      {
        title: "Entrega",
        description:
          "Fornecemos manual de marca e todos os arquivos necessários.",
      },
    ],
  },
  "inteligência-de-negócios": {
    whyChoose:
      "Decisões baseadas em dados são fundamentais para o crescimento do seu negócio. Criamos dashboards e relatórios personalizados que transformam dados brutos em insights acionáveis.",
    benefits: [
      {
        title: "Decisões Embasadas",
        description:
          "Tome decisões estratégicas baseadas em dados concretos e análises precisas.",
      },
      {
        title: "Visualização Clara",
        description:
          "Dashboards intuitivos que facilitam a compreensão de métricas complexas.",
      },
      {
        title: "Economia de Tempo",
        description:
          "Automatize a coleta e análise de dados para focar no que importa.",
      },
      {
        title: "Identificação de Oportunidades",
        description:
          "Descubra tendências e oportunidades ocultas nos seus dados.",
      },
      {
        title: "Acompanhamento em Tempo Real",
        description:
          "Monitore KPIs importantes e reaja rapidamente a mudanças.",
      },
      {
        title: "Integração de Fontes",
        description: "Conectamos múltiplas fontes de dados em um único painel.",
      },
    ],
    process: [
      {
        title: "Levantamento",
        description:
          "Identificamos quais dados são importantes para seu negócio.",
      },
      {
        title: "Estruturação",
        description: "Organizamos e preparamos os dados para análise.",
      },
      {
        title: "Desenvolvimento",
        description:
          "Criamos dashboards personalizados com visualizações relevantes.",
      },
      {
        title: "Treinamento",
        description: "Capacitamos sua equipe para usar as ferramentas de BI.",
      },
    ],
  },
  "consultoria-tech": {
    whyChoose:
      "A transformação digital requer orientação estratégica e expertise técnica. Nossa consultoria ajuda empresas a tomar decisões tecnológicas acertadas e implementar soluções eficientes.",
    benefits: [
      {
        title: "Expertise Especializada",
        description:
          "Acesso a profissionais experientes em diversas áreas e metodologias.",
      },
      {
        title: "Economia de Recursos",
        description:
          "Evite investimentos errados e retrabalho com orientação estratégica.",
      },
      {
        title: "Visão Externa",
        description:
          "Análise imparcial e objetiva dos seus desafios tecnológicos.",
      },
      {
        title: "Roadmap Tecnológico",
        description:
          "Planejamento estruturado para evolução da infraestrutura do seu negócio.",
      },
      {
        title: "Melhores Práticas",
        description:
          "Implementação de padrões e metodologias comprovadas no mercado.",
      },
      {
        title: "Redução de Riscos",
        description:
          "Identificação e mitigação de riscos técnicos antes que se tornem problemas.",
      },
    ],
    process: [
      {
        title: "Diagnóstico",
        description:
          "Auditoria completa da infraestrutura e processos tecnológicos atuais.",
      },
      {
        title: "Análise",
        description:
          "Identificação de gargalos, oportunidades e pontos de melhoria.",
      },
      {
        title: "Planejamento",
        description:
          "Elaboração de roadmap tecnológico com priorização de ações.",
      },
      {
        title: "Implementação",
        description: "Acompanhamento e suporte na execução das recomendações.",
      },
    ],
  },
};
