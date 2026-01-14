

import { Service, ComplementaryService, Metric, Value, Project, FAQItem, ServiceDetail } from './types';
import {
    CodeIcon, AutomationIcon, MobileIcon, MarketingIcon, BIIcon, TechConsultingIcon,
    UserGroupIcon, TrophyIcon, ClockIcon, TargetIcon, LightbulbIcon, ShieldCheckIcon,
    LightningBoltIcon, UsersIcon, CheckIcon, StarIcon, ArrowRightIcon, PaletteIcon, GlobeIcon
} from './components/icons';

export const NAV_LINKS = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#footer' },
];

export const MAIN_SERVICES: Service[] = [
    {
        icon: CodeIcon,
        title: 'Criação de Sites',
        description: 'Desenvolvemos websites modernos, responsivos e otimizados para conversão, elevando sua presença digital.',
        features: [
            'Sites Institucionais Profissionais',
            'E-commerce Completo',
            'Landing Pages de Alta Conversão',
            'Portfólios Criativos',
            'Aplicativos Web Progressivos (PWA)',
            'Otimização SEO'
        ],
        price: 'A partir de R$ 2.000',
        image: '/img/img-web.png',
        backgroundImage: '/img/fundo-web.png'
    },
    {
        icon: MarketingIcon,
        title: 'Marketing Digital',
        description: 'Estratégias completas de marketing digital para aumentar sua visibilidade e engajar seu público.',
        features: [
            'Gestão de Redes Sociais',
            'SEO e SEM',
            'Conteúdo Estratégico',
            'Análise de Performance',
            'Relatórios Mensais'
        ],
        price: 'A partir de R$ 1.000/mês',
        image: '/img/img-marketing.png',
        backgroundImage: '/img/fundo-marketing.png'
    },
    {
        icon: GlobeIcon,
        title: 'Registro de Domínio',
        description: 'Garanta a presença online da sua marca com o registro do domínio perfeito. Ajudamos você a escolher e registrar o melhor endereço web para seu negócio.',
        features: [
            'Pesquisa de Disponibilidade',
            'Registro de Domínio (.com, .br, etc)',
            'Configuração de DNS',
            'Proteção de Privacidade',
            'Renovação Automática',
            'Suporte Técnico'
        ],
        price: 'A partir de R$ 40/ano',
        image: '/img/img-marca.png',
        backgroundImage: '/img/fundo-dominio.jpg'
    },
    {
        icon: TargetIcon,
        title: 'Tráfego Pago',
        description: 'Campanhas de tráfego pago eficientes para direcionar visitantes qualificados ao seu site.',
        features: [
            'Google Ads',
            'Facebook Ads',
            'Instagram Ads',
            'Otimização de Lances',
            'Relatórios de ROI'
        ],
        price: 'A partir de R$ 700/mês',
        image: '/img/img-trafego.png',
        backgroundImage: '/img/fundo-trafego.jpg'
    }
];

export const COMPLEMENTARY_SERVICES: ComplementaryService[] = [
    {
        icon: PaletteIcon,
        title: 'Experiência do Usuário (UX)',
        description: 'Criamos interfaces intuitivas e experiências memoráveis que cativam os usuários, desde a prototipagem até o design final.',
        items: ['Design de Interface (UI)', 'Prototipagem com Figma', 'Jornada do Usuário']
    },
    {
        icon: PaletteIcon,
        title: 'Identidade Visual',
        description: 'Criação de identidade visual completa para sua marca.',
        items: ['Logotipo', 'Paleta de cores', 'Tipografia', 'Manual de marca']
    },
    {
        icon: BIIcon,
        title: 'Inteligência de negócios',
        description: 'Painéis e relatórios para tomada de decisão.',
        items: ['Power BI', 'Google Analytics', 'Métricas Personalizadas']
    },
    {
        icon: TechConsultingIcon,
        title: 'Consultoria Tech',
        description: 'Orientação estratégica para transformação digital.',
        items: ['Auditoria Técnica', 'Arquitetura de Software', 'Roteiro Tecnológico']
    }
];

export const ABOUT_METRICS: Metric[] = [
    { icon: UserGroupIcon, value: '50+', label: 'Clientes Satisfeitos' },
    { icon: TrophyIcon, value: '100+', label: 'Projetos Concluídos' },
    { icon: ClockIcon, value: '3+', label: 'Anos de Experiência' },
    { icon: TargetIcon, value: '95%', label: 'Taxa de Conversão' },
];

export const COMPANY_VALUES: Value[] = [
    { icon: LightbulbIcon, title: 'Inovação', description: 'Sempre trazemos as melhores soluções e ideias criativas para seus projetos.' },
    { icon: ShieldCheckIcon, title: 'Confiabilidade', description: 'Código limpo, seguro e escalonável em todos os nossos projetos.' },
    { icon: LightningBoltIcon, title: 'Agilidade', description: 'Entregamos projetos no prazo com metodologias ágeis de desenvolvimento.' },
    { icon: UsersIcon, title: 'Colaboração', description: 'Trabalhamos lado a lado com nossos clientes para garantir o sucesso.' },
];

export const PORTFOLIO_PROJECTS: Project[] = [
    {
        tag: 'Criação de Sites',
        title: 'AlanX - Site Institucional',
        description: 'Site institucional moderno para a AlanX, com foco em apresentação clara de serviços, performance e conversão de visitantes.',
        image: '/img/img-AlanX.png',
        link: 'https://alanx.netlify.app/',
        stats: [
            { icon: CheckIcon, value: '+180% de conversões' },
            { icon: UsersIcon, value: 'Mais de 5 mil visitantes/mês' },
            { icon: StarIcon, value: 'R$ 500K+ Faturamento' },
        ],
        isFeatured: true,
    },
    {
        tag: 'Criação de Sites',
        title: 'PetLife - Landing Page',
        description: 'Landing page da PetLife com foco em conversão, layout moderno e navegação direta para apresentar serviços e benefícios.',
        image: '/img/img-petlife.png',
        link: 'https://alanfelipem.github.io/PetLife/',
        stats: [
            { icon: ArrowRightIcon, value: '+300% de engajamento' },
            { icon: UsersIcon, value: '50K+ seguidores conquistados' },
            { icon: StarIcon, value: 'ROI de 400%' },
        ],
        isFeatured: true,
    },
    {
        tag: 'Criação de Sites',
        title: 'Portfolio Alan Felipe',
        description: 'Criação de portfólio profissional sob medida, com foco em destacar projetos, habilidades e facilitar o contato.',
        image: '/img/img-portfolioalan.png',
        link: 'https://portfolio-alan-felipe.netlify.app/',
    },
    {
        tag: 'Criação de Sites',
        title: 'Landing Page - Mundo Invertido',
        description: 'Criação de landing page temática com foco em impacto visual, narrativa e conversão de visitantes.',
        image: '/img/img-mundoinvertido.png',
        link: 'https://alanfelipem.github.io/Landing-Page-no-Mundo-Invertido/',
        stats: [
            { icon: TargetIcon, value: 'CPC médio R$ 0,50' },
            { icon: UsersIcon, value: '2K+ leads gerados' },
        ],
    },
    {
        tag: 'Criação de Sites',
        title: 'Gestor de Estoque Web',
        description: 'Gestor de estoque web para controle de produtos, entradas e saídas com visão clara e organizada.',
        image: '/img/img-gestorestoque.png',
        link: 'https://gestor-estoque.netlify.app',
    },
    {
        tag: 'Página de destino',
        title: 'Site Advogada - Institucional',
        description: 'Projeto institucional para advocacia, reforçando credibilidade, serviços jurídicos e canais de contato eficientes, entre outros.',
    },
];

export const FAQ_DATA: FAQItem[] = [
    {
        question: 'Qual o prazo médio de entrega?',
        answer: 'Locais: 15-30 dias | Automações: 7-15 dias | Sistemas: 30-60 dias. O prazo pode variar dependendo da complexidade do projeto.'
    },
    {
        question: 'Oferecem suporte pós-entrega?',
        answer: 'Sim! 30 dias de suporte gratuito + planos de manutenção mensais para garantir que sua aplicação continue funcionando perfeitamente.'
    },
    {
        question: 'Como funciona o pagamento?',
        answer: '50% na aprovação do projeto + 50% na entrega. Parcelamento disponível via cartão de crédito ou boleto bancário.'
    },
    {
        question: 'Posso acompanhar o desenvolvimento?',
        answer: 'Claro! Atualizações semanais + acesso ao painel de desenvolvimento para que você possa acompanhar o progresso em tempo real.'
    }
];

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
    'criação-de-sites': {
        whyChoose: 'Seu site é a primeira impressão que seus clientes têm da sua marca. Sabemos o quanto é importante causar um impacto positivo. Criamos websites que não apenas impressionam visualmente, mas também convertem visitantes em clientes. Cada pixel, cada clique é pensado para oferecer a melhor experiência possível e impulsionar o crescimento do seu negócio.',
        benefits: [
            {
                title: 'Design Responsivo',
                description: 'Seu site funcionará perfeitamente em todos os dispositivos: desktop, tablet e smartphone.'
            },
            {
                title: 'SEO Otimizado',
                description: 'Implementamos as melhores práticas de SEO para garantir que seu site seja encontrado nos mecanismos de busca.'
            },
            {
                title: 'Alta Performance',
                description: 'Sites rápidos e otimizados que proporcionam uma excelente experiência ao usuário.'
            },
            {
                title: 'Integração de Ferramentas',
                description: 'Conectamos seu site com as principais ferramentas de marketing, analytics e pagamento.'
            },
            {
                title: 'Segurança Garantida',
                description: 'Implementamos certificados SSL e as melhores práticas de segurança para proteger seus dados.'
            },
            {
                title: 'Suporte Contínuo',
                description: 'Oferecemos suporte técnico e manutenção para manter seu site sempre atualizado.'
            }
        ],
        process: [
            {
                title: 'Briefing',
                description: 'Entendemos seu negócio, objetivos e público-alvo para criar a estratégia perfeita.'
            },
            {
                title: 'Design',
                description: 'Criamos protótipos e layouts personalizados alinhados com sua identidade visual.'
            },
            {
                title: 'Desenvolvimento',
                description: 'Transformamos o design em um site funcional com a melhor qualidade possível.'
            },
            {
                title: 'Lançamento',
                description: 'Testamos tudo e colocamos seu site no ar com acompanhamento completo.'
            }
        ]
    },
    'marketing-digital': {
        whyChoose: 'Você trabalha duro para oferecer um serviço ou produto de qualidade. Merece ser conhecido por quem realmente pode aproveitar. Nossas estratégias de marketing digital conectam você com seu público certo, no momento certo. Aumentamos sua visibilidade, criamos engajamento genuíno e transformamos seguidores em clientes fiéis que recomendam seu trabalho.',
        benefits: [
            {
                title: 'Aumento de Visibilidade',
                description: 'Sua marca será vista por mais pessoas através de campanhas estratégicas nas redes sociais.'
            },
            {
                title: 'Engajamento Real',
                description: 'Criamos conteúdo relevante que gera interação genuína com seu público.'
            },
            {
                title: 'ROI Comprovado',
                description: 'Acompanhamos métricas detalhadas para garantir retorno sobre o investimento.'
            },
            {
                title: 'Gestão Profissional',
                description: 'Equipe dedicada para gerenciar todas as suas redes sociais com excelência.'
            },
            {
                title: 'Conteúdo de Qualidade',
                description: 'Posts, stories e vídeos produzidos profissionalmente para sua marca.'
            },
            {
                title: 'Análise Constante',
                description: 'Relatórios mensais com insights para otimizar continuamente as campanhas.'
            }
        ],
        process: [
            {
                title: 'Análise',
                description: 'Estudamos seu mercado, concorrência e público para criar uma estratégia vencedora.'
            },
            {
                title: 'Planejamento',
                description: 'Desenvolvemos calendário editorial e estratégia de conteúdo personalizada.'
            },
            {
                title: 'Execução',
                description: 'Criamos e publicamos conteúdo de alta qualidade em suas redes sociais.'
            },
            {
                title: 'Otimização',
                description: 'Analisamos resultados e ajustamos a estratégia para maximizar performance.'
            }
        ]
    },
    'registro-de-domínio': {
        whyChoose: 'Seu domínio é o endereço digital da sua marca. É aquele que seus clientes digitam na barra de navegação, o que aparece no seu cartão de visita, no seu e-mail profissional. Queremos garantir que você tenha um domínio que reflita perfeitamente quem você é. Ajudamos você a encontrar o domínio ideal e cuidamos de toda a configuração técnica para que você possa focar no que realmente importa: seu negócio.',
        benefits: [
            {
                title: 'Identidade Profissional',
                description: 'Um domínio próprio transmite credibilidade e profissionalismo para seus clientes.'
            },
            {
                title: 'Fácil de Lembrar',
                description: 'Escolhemos domínios curtos e memoráveis que facilitam o acesso ao seu site.'
            },
            {
                title: 'Proteção de Dados',
                description: 'Seus dados pessoais ficam protegidos com o serviço de privacidade WHOIS.'
            },
            {
                title: 'Configuração Completa',
                description: 'Configuramos DNS, e-mail e redirecionamentos para você.'
            },
            {
                title: 'Suporte Contínuo',
                description: 'Ajudamos com qualquer dúvida ou problema relacionado ao seu domínio.'
            },
            {
                title: 'Renovação Automática',
                description: 'Seu domínio nunca expira com a renovação automática ativada.'
            }
        ],
        process: [
            {
                title: 'Pesquisa',
                description: 'Verificamos a disponibilidade do domínio desejado e sugerimos alternativas.'
            },
            {
                title: 'Registro',
                description: 'Realizamos o registro do domínio na extensão escolhida (.com, .br, etc).'
            },
            {
                title: 'Configuração',
                description: 'Configuramos DNS, e-mail profissional e todas as definições necessárias.'
            },
            {
                title: 'Entrega',
                description: 'Você recebe acesso completo ao painel de controle do seu domínio.'
            }
        ]
    },
    'tráfego-pago': {
        whyChoose: 'Publicar anúncios aleatoriamente na internet é desperdiçar dinheiro. Mas anúncios bem planejados? Isso transforma seu investimento em clientes reais. Nós estruturamos campanhas que colocam seu produto ou serviço exatamente diante das pessoas que estão procurando por aquilo que você oferece. Resultados mensuráveis, cada centavo investido gerando retorno concreto.',
        benefits: [
            {
                title: 'Resultados Rápidos',
                description: 'Comece a receber visitantes qualificados logo nos primeiros dias de campanha.'
            },
            {
                title: 'Público Segmentado',
                description: 'Direcionamos seus anúncios para pessoas realmente interessadas em seu produto.'
            },
            {
                title: 'Controle de Orçamento',
                description: 'Você define quanto quer investir e otimizamos para máximo retorno.'
            },
            {
                title: 'Métricas Transparentes',
                description: 'Acompanhe em tempo real o desempenho de todas as suas campanhas.'
            },
            {
                title: 'Otimização Contínua',
                description: 'Ajustamos constantemente as campanhas para melhorar os resultados.'
            },
            {
                title: 'Múltiplas Plataformas',
                description: 'Campanhas integradas no Google, Facebook, Instagram e outras plataformas.'
            }
        ],
        process: [
            {
                title: 'Estratégia',
                description: 'Definimos objetivos, público-alvo e orçamento ideal para suas campanhas.'
            },
            {
                title: 'Criação',
                description: 'Desenvolvemos anúncios atrativos com copy persuasivo e imagens impactantes.'
            },
            {
                title: 'Lançamento',
                description: 'Configuramos e ativamos as campanhas nas plataformas selecionadas.'
            },
            {
                title: 'Gestão',
                description: 'Monitoramos e otimizamos diariamente para maximizar resultados.'
            }
        ]
    },
    'experiência-do-usuário-(ux)': {
        whyChoose: 'Uma ótima experiência do usuário é fundamental para o sucesso de qualquer produto digital. Criamos interfaces intuitivas e agradáveis que facilitam a navegação e aumentam a satisfação dos usuários.',
        benefits: [
            {
                title: 'Maior Conversão',
                description: 'Interfaces bem projetadas aumentam significativamente as taxas de conversão.'
            },
            {
                title: 'Satisfação do Usuário',
                description: 'Proporcione experiências memoráveis que fidelizam clientes.'
            },
            {
                title: 'Redução de Custos',
                description: 'Menos problemas de usabilidade significam menos suporte necessário.'
            },
            {
                title: 'Design Profissional',
                description: 'Interfaces modernas e atraentes que transmitem credibilidade.'
            },
            {
                title: 'Testes de Usabilidade',
                description: 'Validamos o design com usuários reais antes do desenvolvimento.'
            },
            {
                title: 'Prototipagem Rápida',
                description: 'Visualize e teste conceitos antes de investir no desenvolvimento completo.'
            }
        ],
        process: [
            {
                title: 'Pesquisa',
                description: 'Entendemos seu público e identificamos necessidades e comportamentos.'
            },
            {
                title: 'Wireframes',
                description: 'Criamos estruturas básicas para definir layout e fluxo de navegação.'
            },
            {
                title: 'Protótipo',
                description: 'Desenvolvemos protótipos interativos para testes e validação.'
            },
            {
                title: 'Design Final',
                description: 'Refinamos todos os detalhes visuais e entregamos os arquivos finais.'
            }
        ]
    },
    'identidade-visual': {
        whyChoose: 'Uma identidade visual forte é essencial para destacar sua marca no mercado. Criamos logotipos únicos e manuais de marca completos que transmitem os valores do seu negócio.',
        benefits: [
            {
                title: 'Marca Memorável',
                description: 'Logotipo único e impactante que fica na memória dos clientes.'
            },
            {
                title: 'Consistência Visual',
                description: 'Manual de marca garante aplicação correta em todos os materiais.'
            },
            {
                title: 'Profissionalismo',
                description: 'Identidade visual forte transmite credibilidade e confiança.'
            },
            {
                title: 'Diferenciação',
                description: 'Destaque-se da concorrência com uma marca única e autêntica.'
            },
            {
                title: 'Arquivos Completos',
                description: 'Receba todos os formatos necessários para uso digital e impresso.'
            },
            {
                title: 'Consultoria Especializada',
                description: 'Orientação sobre como aplicar corretamente sua identidade visual.'
            }
        ],
        process: [
            {
                title: 'Briefing',
                description: 'Entendemos os valores, missão e visão da sua marca.'
            },
            {
                title: 'Conceitos',
                description: 'Apresentamos diferentes propostas de identidade visual.'
            },
            {
                title: 'Refinamento',
                description: 'Aprimoramos o conceito escolhido até a perfeição.'
            },
            {
                title: 'Entrega',
                description: 'Fornecemos manual de marca e todos os arquivos necessários.'
            }
        ]
    },
    'inteligência-de-negócios': {
        whyChoose: 'Decisões baseadas em dados são fundamentais para o crescimento do seu negócio. Criamos dashboards e relatórios personalizados que transformam dados brutos em insights acionáveis.',
        benefits: [
            {
                title: 'Decisões Embasadas',
                description: 'Tome decisões estratégicas baseadas em dados concretos e análises precisas.'
            },
            {
                title: 'Visualização Clara',
                description: 'Dashboards intuitivos que facilitam a compreensão de métricas complexas.'
            },
            {
                title: 'Economia de Tempo',
                description: 'Automatize a coleta e análise de dados para focar no que importa.'
            },
            {
                title: 'Identificação de Oportunidades',
                description: 'Descubra tendências e oportunidades ocultas nos seus dados.'
            },
            {
                title: 'Acompanhamento em Tempo Real',
                description: 'Monitore KPIs importantes e reaja rapidamente a mudanças.'
            },
            {
                title: 'Integração de Fontes',
                description: 'Conectamos múltiplas fontes de dados em um único painel.'
            }
        ],
        process: [
            {
                title: 'Levantamento',
                description: 'Identificamos quais dados são importantes para seu negócio.'
            },
            {
                title: 'Estruturação',
                description: 'Organizamos e preparamos os dados para análise.'
            },
            {
                title: 'Desenvolvimento',
                description: 'Criamos dashboards personalizados com visualizações relevantes.'
            },
            {
                title: 'Treinamento',
                description: 'Capacitamos sua equipe para usar as ferramentas de BI.'
            }
        ]
    },
    'consultoria-tech': {
        whyChoose: 'A transformação digital requer orientação estratégica e expertise técnica. Nossa consultoria ajuda empresas a tomar decisões tecnológicas acertadas e implementar soluções eficientes.',
        benefits: [
            {
                title: 'Expertise Especializada',
                description: 'Acesso a profissionais experientes em diversas áreas e metodologias.'
            },
            {
                title: 'Economia de Recursos',
                description: 'Evite investimentos errados e retrabalho com orientação estratégica.'
            },
            {
                title: 'Visão Externa',
                description: 'Análise imparcial e objetiva dos seus desafios tecnológicos.'
            },
            {
                title: 'Roadmap Tecnológico',
                description: 'Planejamento estruturado para evolução da infraestrutura do seu negócio.'
            },
            {
                title: 'Melhores Práticas',
                description: 'Implementação de padrões e metodologias comprovadas no mercado.'
            },
            {
                title: 'Redução de Riscos',
                description: 'Identificação e mitigação de riscos técnicos antes que se tornem problemas.'
            }
        ],
        process: [
            {
                title: 'Diagnóstico',
                description: 'Auditoria completa da infraestrutura e processos tecnológicos atuais.'
            },
            {
                title: 'Análise',
                description: 'Identificação de gargalos, oportunidades e pontos de melhoria.'
            },
            {
                title: 'Planejamento',
                description: 'Elaboração de roadmap tecnológico com priorização de ações.'
            },
            {
                title: 'Implementação',
                description: 'Acompanhamento e suporte na execução das recomendações.'
            }
        ]
    }
};