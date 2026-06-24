import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import { ArrowRightIcon, ShoppingBagIcon, SparklesIcon, ZapIcon, LayoutIcon, CheckIcon } from './icons';

const LAYOUTS = [
    {
        id: '1',
        name: 'Glassmorphism',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-AlanX.png',
        features: ['Efeito de Vidro', 'Bordas Neon', 'Profundidade 3D'],
        description: 'Estética futurista com translucidez, desfoque de fundo (backdrop-blur) e bordas brilhantes.',
        isPopular: true
    },
    {
        id: '2',
        name: 'Skeuomorphism',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-projetoriosilveira.png',
        features: ['Texturas Realistas', 'Sombras Suaves', 'Estética Analógica'],
        description: 'Design realista que imita texturas, botões físicos e elementos tridimensionais do mundo real.',
        isPopular: false
    },
    {
        id: '3',
        name: 'Neo Brutalism',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-ladolcevita.png',
        features: ['Cores Vibrantes', 'Sombras Sólidas', 'Contraste Marcante'],
        description: 'Cores vibrantes de alto contraste, sombras pretas sólidas e tipografia pesada de forte impacto.',
        isPopular: false
    },
    {
        id: '4',
        name: 'Claymorphism',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-agbcampinas.png',
        features: ['Visual Amigável', 'Sombras Internas', 'Estilo 3D Soft'],
        description: 'Visual amigável com formas arredondadas infladas que lembram argila e ilustrações 3D.',
        isPopular: false
    },
    {
        id: '5',
        name: 'Minimalism',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-daraadv.png',
        features: ['Clean & Minimalista', 'Espaço Negativo', 'Tipografia Fina'],
        description: 'Foco total na essência, espaço em branco estratégico e elegância livre de distrações.',
        isPopular: false
    },
    {
        id: '6',
        name: 'Liquid Glass',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-portfolioalan.png',
        features: ['Textura Fluida', 'Cores Metalizadas', 'Animações Suaves'],
        description: 'Fluidez orgânica combinada com texturas de vidro líquido e gradientes metálicos cromados.',
        isPopular: false
    },
    {
        id: '7',
        name: 'Bento Grid',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-redeterritorios.png',
        features: ['Layout Modular', 'Visual Clean', 'Alta Usabilidade'],
        description: 'Organização modular inspirada nas caixas Bento japonesas, perfeita para dashboards e portfólios.',
        isPopular: false
    },
    {
        id: '8',
        name: 'Aurora UI',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-AlanX.png',
        features: ['Brilhos Orgânicos', 'Modo Escuro Premium', 'Fundo Dinâmico'],
        description: 'Fundos escuros elegantes com manchas brilhantes de luz e gradientes cósmicos em movimento.',
        isPopular: false
    },
    {
        id: '9',
        name: 'Brutalism Clássico',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-projetoriosilveira.png',
        features: ['Estilo Cru', 'Fontes Tecnológicas', 'Estrutura Direta'],
        description: 'Design cru e utilitário inspirado nas origens da web, com fontes monoespaçadas e bordas grossas.',
        isPopular: false
    },
    {
        id: '10',
        name: 'Dark Luxury',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-ladolcevita.png',
        features: ['Premium e Luxuoso', 'Detalhes Metálicos', 'Visual Imponente'],
        description: 'Estética refinada em tons pretos, detalhes dourados ou prateados e transições de alta classe.',
        isPopular: false
    },
    {
        id: '11',
        name: 'Retro/Y2K',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-agbcampinas.png',
        features: ['Nostalgia Y2K', 'Estética Cyber', 'Fontes Pixeladas'],
        description: 'Nostalgia dos anos 2000 com estéticas cibernéticas iniciais, glitters e elementos pixelados.',
        isPopular: false
    },
    {
        id: '12',
        name: 'Vaporwave',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-daraadv.png',
        features: ['Paleta Synthwave', 'Arte Retro', 'Gradientes Neon'],
        description: 'Cultura retro-futurista dos anos 80 e 90 com tons rosa, roxo, estátuas clássicas e neon.',
        isPopular: false
    },
    {
        id: '13',
        name: 'Swiss / International Style',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-portfolioalan.png',
        features: ['Foco Tipográfico', 'Grids Matemáticos', 'Design Suíço'],
        description: 'Precisão geométrica estruturada em grids rigorosos, foco absoluto na legibilidade e fontes sem serifa.',
        isPopular: false
    },
    {
        id: '14',
        name: 'Editorial',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-redeterritorios.png',
        features: ['Estilo Revista', 'Fontes Serifadas', 'Layout Elegante'],
        description: 'Visual que remete a revistas físicas de luxo e jornais premium, com tipografia serifada sofisticada.',
        isPopular: false
    },
    {
        id: '15',
        name: 'Organic/Handcrafted',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-AlanX.png',
        features: ['Tons Terrosos', 'Texturas Rústicas', 'Formas Orgânicas'],
        description: 'Formas naturais e imperfeitas, paleta de cores terrosas e texturas que lembram papel e artesanato.',
        isPopular: false
    },
    {
        id: '16',
        name: 'Tech/Futurista',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-projetoriosilveira.png',
        features: ['Painel Sci-Fi', 'Linhas de Circuito', 'Neon de Alta Tecnologia'],
        description: 'Interface cibernética avançada com lines de circuito, HUDs dinâmicos e estilo ficção científica.',
        isPopular: false
    },
    {
        id: '17',
        name: 'Japandi',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-ladolcevita.png',
        features: ['Simplicidade Japonesa', 'Aconchego Nórdico', 'Tons Neutros'],
        description: 'A união perfeita entre o minimalismo japonês e o aconchego rústico do design escandinavo.',
        isPopular: false
    },
    {
        id: '18',
        name: 'Memphis Design',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-agbcampinas.png',
        features: ['Geometria Divertida', 'Estilo Anos 80', 'Design Criativo'],
        description: 'Formas geométricas ousadas, padrões divertidos de bolinhas e linhas em paletas de cores alegres.',
        isPopular: false
    },
    {
        id: '19',
        name: 'Scroll Storytelling',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-daraadv.png',
        features: ['Scroll Interativo', 'Storytelling Visual', 'Forte Engajamento'],
        description: 'Narrativas interativas onde o conteúdo ganha vida e se transforma conforme o usuário rola a página.',
        isPopular: false
    },
    {
        id: '20',
        name: 'Cursor Personalizado',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-portfolioalan.png',
        features: ['Cursor Dinâmico', 'Micro-interações', 'Efeitos Magnéticos'],
        description: 'Experiência interativa onde o cursor do mouse se transforma e interage diretamente com o design do site.',
        isPopular: false
    },
    {
        id: '21',
        name: 'Morphic UI',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-redeterritorios.png',
        features: ['Botões Táteis', 'Sombras 3D', 'Transição Suave'],
        description: 'Evolução do Neomorfismo com transições suaves de profundidade física e botões táteis digitais.',
        isPopular: false
    },
    {
        id: '22',
        name: 'Glassmorphism Dark',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-AlanX.png',
        features: ['Modo Escuro', 'Vidro Fosco', 'Destaque Neon'],
        description: 'O estilo translúcido do Glassmorphism adaptado para um ambiente escuro profundo de alto contraste.',
        isPopular: false
    },
    {
        id: '23',
        name: 'Neon Noir',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-projetoriosilveira.png',
        features: ['Estética Noturna', 'Neon Brilhante', 'Contraste Profundo'],
        description: 'Cenário noturno futurista inspirado no estilo Noir e Cyberpunk com luzes neon vibrantes sob fundos pretos.',
        isPopular: false
    },
    {
        id: '24',
        name: 'Gradient Mesh',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-ladolcevita.png',
        features: ['Gradientes Fluídos', 'Cores Vibrantes', 'Estética Abstrata'],
        description: 'Misturas complexas e fluídas de cores que criam gradientes abstratos tridimensionais deslumbrantes.',
        isPopular: false
    },
    {
        id: '25',
        name: '3D Immersive',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-agbcampinas.png',
        features: ['Elementos 3D', 'Profundidade Espacial', 'Alta Interatividade'],
        description: 'Experiência tridimensional imersiva com elementos e animações 3D interativas no navegador.',
        isPopular: false
    },
    {
        id: '26',
        name: 'Kinetic Typography',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-daraadv.png',
        features: ['Tipografia Viva', 'Texto Animado', 'Design Arrojado'],
        description: 'Onde o texto é o protagonista do design, movendo-se e reagindo às interações do usuário.',
        isPopular: false
    },
    {
        id: '27',
        name: 'Maximalismo',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-portfolioalan.png',
        features: ['Estilo Ousado', 'Colagens Visuais', 'Riqueza de Detalhes'],
        description: "A filosofia do 'mais é mais', com colagens ricas, misturas de padrões e tipografias ousadas.",
        isPopular: false
    },
    {
        id: '28',
        name: 'Cottagecore',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-redeterritorios.png',
        features: ['Visual Bucólico', 'Ilustrações Florais', 'Cores Aconchegantes'],
        description: 'Visual bucólico e romântico inspirado na vida campestre, com ilustrações florais e tons pastéis quentes.',
        isPopular: false
    },
    {
        id: '29',
        name: 'Cyberpunk',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-AlanX.png',
        features: ['Efeito Glitch', 'Ciano e Magenta', 'Visual Cyber'],
        description: 'Distopia tecnológica com estética glitch, cores ciano e magenta intensas e visual de alta tecnologia.',
        isPopular: false
    },
    {
        id: '30',
        name: 'Art Déco Digital',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-projetoriosilveira.png',
        features: ['Simetria Luxuosa', 'Padrões Geométricos', 'Estética Gatsby'],
        description: 'Simetria luxuosa dos anos 1920 reimaginada para a web com linhas geométricas e dourados refinados.',
        isPopular: false
    },
    {
        id: '31',
        name: 'Frosted UI',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-ladolcevita.png',
        features: ['Acrílico Fosco', 'Minimalismo Clean', 'Leveza Visual'],
        description: 'Interface limpa com efeito de acrílico fosco e sombreamento minimalista para foco no conteúdo.',
        isPopular: false
    },
    {
        id: '32',
        name: 'Particle Design',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-agbcampinas.png',
        features: ['Fundo de Partículas', 'Física no Navegador', 'Interatividade Fluida'],
        description: 'Fundo interativo dinâmico composto por partículas flutuantes que reagem ao movimento do mouse.',
        isPopular: false
    },
    {
        id: '33',
        name: 'Isometric Design',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-daraadv.png',
        features: ['Perspectiva Isométrica', 'Profundidade 3D', 'Visual Explicativo'],
        description: 'Ilustrações e layouts em perspectiva isométrica que dão profundidade tridimensional aos elementos.',
        isPopular: false
    },
    {
        id: '34',
        name: 'Flat Design 2.0',
        category: '100% Adaptável (LP, E-commerce ou Site)',
        price: 'A partir de R$ 5.000',
        image: '/projeto/img-portfolioalan.png',
        features: ['Design Moderno', 'Gradientes Leves', 'Alta Legibilidade'],
        description: 'A evolução do design plano com gradientes sutis, sombras suaves e maior percepção de profundidade.',
        isPopular: false
    }
];

const LayoutStorePage: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <div className="min-h-screen bg-[var(--domu-bg)] pt-24 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 px-4 md:px-8">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#005BFF]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
                
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#005BFF]/10 border border-[#005BFF]/20 rounded-full mb-8"
                    >
                        <SparklesIcon className="w-4 h-4 text-[#005BFF]" />
                        <span className="text-[#005BFF] font-black text-[10px] uppercase tracking-[0.3em]">Catálogo Exclusivo Domu</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="h1-domu text-white mb-8 italic"
                    >
                        Layouts <span className="text-gradient">profissionais</span> <br />
                        de alta performance
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-domu text-white/50 max-w-3xl mx-auto"
                    >
                        Explore nossa coleção de layouts premium prontos para implementação. Design impecável aliado à tecnologia de ponta para converter visitantes em clientes.
                    </motion.p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="container mx-auto px-4 md:px-8 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                    {LAYOUTS.slice(0, visibleCount).map((layout, index) => (
                        <AnimateOnScroll key={layout.id} delay={(index % 6) * 100}>
                            <div className="group relative flex flex-col bg-[var(--domu-surface-1)] border border-white/5 rounded-3xl overflow-hidden hover:border-[#005BFF]/30 transition-all duration-700">
                                
                                {/* Image Container / Placeholders "Em Breve" */}
                                <div className="relative aspect-[4/5] overflow-hidden bg-black/40 flex flex-col items-center justify-center border-b border-white/5 group-hover:bg-black/60 transition-all duration-700">
                                    {/* Tech Grid Pattern */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
                                    
                                    {/* Glowing Aura */}
                                    <div className="absolute w-40 h-40 bg-[#005BFF]/10 rounded-full blur-[40px] group-hover:bg-[#005BFF]/20 group-hover:scale-125 transition-all duration-700"></div>
                                    
                                    {/* Styled glassmorphism display in center */}
                                    <div className="relative z-10 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col items-center gap-4 text-center max-w-[80%] shadow-2xl group-hover:border-[#005BFF]/20 transition-all duration-700">
                                        <div className="w-12 h-12 bg-[#005BFF]/10 rounded-xl border border-[#005BFF]/20 flex items-center justify-center text-[#005BFF] group-hover:scale-110 transition-transform duration-500">
                                            <LayoutIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-white font-black text-xs uppercase tracking-[0.25em] mb-1">
                                                Design Concept
                                            </div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#005BFF] drop-shadow-[0_0_8px_rgba(0,91,255,0.5)]">
                                                EM BREVE
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Overlay Buttons */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
                                        <Link to="/chatbot-placeholder" className="px-6 py-3 bg-white text-black font-black text-[11px] uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
                                            Tenho Interesse
                                        </Link>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-10 flex-grow flex flex-col">
                                    <span className="inline-block px-3 py-1 rounded-full bg-[#005BFF]/10 text-[#005BFF] font-black text-[9px] uppercase tracking-[0.15em] mb-5 self-start">
                                        {layout.category}
                                    </span>
                                    <h3 className="text-white font-black text-2xl mb-4 group-hover:text-[#005BFF] transition-colors">
                                        {layout.name}
                                    </h3>
                                    
                                    <p className="text-white/40 text-sm leading-relaxed mb-8 min-h-[48px]">
                                        {layout.description}
                                    </p>
                                    
                                    <div className="flex flex-col gap-3 mb-10">
                                        {layout.features.map(f => (
                                            <div key={f} className="flex items-center gap-3">
                                                <div className="w-4 h-4 rounded-full bg-[#005BFF]/20 flex items-center justify-center">
                                                    <CheckIcon className="w-2.5 h-2.5 text-[#005BFF]" />
                                                </div>
                                                <span className="text-white/40 text-sm font-medium">{f}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                                        <div className="flex flex-col">
                                            <span className="text-white/20 text-[9px] font-black uppercase tracking-widest">Investimento</span>
                                            <span className="text-white font-black text-lg tracking-tighter">{layout.price}</span>
                                        </div>
                                        <Link to="/chatbot-placeholder" className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#005BFF] hover:border-[#005BFF] text-white transition-all duration-500">
                                            <ShoppingBagIcon className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>

                {visibleCount < LAYOUTS.length && (
                    <div className="flex justify-center mt-16">
                        <button
                            onClick={handleLoadMore}
                            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:border-[#005BFF]/50 text-white px-8 py-4 rounded-full font-black uppercase text-[11px] tracking-widest hover:bg-[#005BFF] transition-all duration-500"
                        >
                            <span>Ver Mais Modelos</span>
                            <ZapIcon className="w-4 h-4 text-[#005BFF] group-hover:text-white" />
                        </button>
                    </div>
                )}
            </section>

            {/* Benefits Section */}
            <section className="bg-white/[0.01] border-y border-white/5 py-32 px-4 md:px-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                        {[
                            { icon: ZapIcon, title: 'Performance', desc: 'Pontuação máxima no PageSpeed.' },
                            { icon: LayoutIcon, title: 'Design UX', desc: 'Foco total na jornada do usuário.' },
                            { icon: SparklesIcon, title: 'Premium', desc: 'Acabamento visual de alto padrão.' },
                            { icon: CheckIcon, title: 'Pronto', desc: 'Deploy em tempo recorde.' }
                        ].map((item, i) => (
                            <AnimateOnScroll key={i} delay={i * 100}>
                                <div className="flex flex-col gap-6">
                                    <div className="w-14 h-14 bg-[#005BFF]/10 rounded-2xl flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-[#005BFF]" />
                                    </div>
                                    <h4 className="text-white font-black text-xl  tracking-wider">{item.title}</h4>
                                    <p className="text-white/30 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 md:px-8">
                <div className="container mx-auto">
                    <div className="relative p-8 md:p-24 bg-gradient-to-br from-white/[0.03] to-transparent rounded-[40px] md:rounded-[60px] border border-white/10 overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#7B61FF]/5 blur-[120px] pointer-events-none" />
                        
                        <div className="relative z-10 max-w-3xl">
                             <h2 className="h1-domu text-2xl md:text-4xl text-white mb-8 italic">
                                Quer um projeto <br />
                                <span className="text-gradient">totalmente exclusivo?</span>
                            </h2>
                            <p className="p-domu text-white/50 text-lg mb-12">
                                Se nenhum de nossos layouts prontos atende sua visão, nossa equipe de design pode criar algo do absoluto zero para sua marca.
                            </p>
                            <a 
                                href="/chatbot-placeholder"
                                className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-black uppercase text-[12px] tracking-[0.2em] hover:bg-[#005BFF] hover:text-white transition-all duration-500"
                            >
                                Solicitar Orçamento Customizado
                                <ArrowRightIcon className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LayoutStorePage;
