import React from 'react';
import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';
import { ArrowRightIcon, ShoppingBagIcon, SparklesIcon, ZapIcon, LayoutIcon, CheckIcon } from './icons';

const LAYOUTS = [
    {
        id: '1',
        name: 'Domu Elite - E-commerce',
        category: 'E-commerce',
        price: 'R$ 11.999,99',
        image: '/projeto/img-AlanX.png',
        features: ['Carregamento Instantâneo', 'Checkout Otimizado', 'Mobile First'],
        isPopular: true
    },
    {
        id: '2',
        name: 'Domu Tech - SaaS',
        category: 'Software House',
        price: 'R$ 9.850,00',
        image: '/projeto/img-petlife.png',
        features: ['Painel Administrativo', 'Dark Mode Nativo', 'Escalável'],
        isPopular: false
    },
    {
        id: '3',
        name: 'Domu Health - Clinic',
        category: 'Landing Page',
        price: 'R$ 8.400,00',
        image: '/projeto/img-mundoinvertido.png',
        features: ['Agendamento Online', 'SEO Otimizado', 'Design Zen'],
        isPopular: false
    },
    {
        id: '4',
        name: 'Domu Ads - Performance',
        category: 'Tráfego & Performance',
        price: 'Consultar Projeto',
        image: '/projeto/img-agbcampinas.png',
        features: ['Dashboard em Tempo Real', 'Otimização de ROI', 'Integração Meta/Google'],
        isPopular: false
    }
];

const LayoutStorePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[var(--domu-bg)] pt-24 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 px-4 md:px-8">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#587f81]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
                
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#587f81]/10 border border-[#587f81]/20 rounded-full mb-8"
                    >
                        <SparklesIcon className="w-4 h-4 text-[#587f81]" />
                        <span className="text-[#587f81] font-black text-[10px] uppercase tracking-[0.3em]">Catálogo Exclusivo Domu</span>
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
                    {LAYOUTS.map((layout, index) => (
                        <AnimateOnScroll key={layout.id} delay={index * 100}>
                            <div className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-[40px] overflow-hidden hover:border-[#587f81]/30 transition-all duration-700">
                                
                                {layout.isPopular && (
                                    <div className="absolute top-6 right-6 z-20 bg-[#587f81] text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                                        Mais Vendido
                                    </div>
                                )}

                                {/* Image Container */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <img 
                                        src={layout.image} 
                                        alt={layout.name} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--domu-bg)] via-transparent to-transparent opacity-60" />
                                    
                                    {/* Overlay Buttons */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
                                        <button className="px-6 py-3 bg-white text-black font-black text-[11px] uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
                                            Ver Demo
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-10">
                                    <span className={`inline-block px-3 py-1 rounded-full font-black text-[9px] uppercase tracking-[0.15em] mb-5 ${
                                        layout.category === 'E-commerce' || layout.category === 'Landing Page' ? 'bg-yellow-500/10 text-yellow-500' :
                                        layout.category === 'Software House' ? 'bg-blue-500/10 text-blue-500' :
                                        layout.category === 'IA & Chatbot' ? 'bg-purple-500/10 text-purple-500' :
                                        layout.category === 'Tráfego & Performance' ? 'bg-orange-500/10 text-orange-500' :
                                        layout.category === 'Branding & Design' ? 'bg-pink-500/10 text-pink-500' :
                                        'bg-[#587f81]/10 text-[#587f81]'
                                    }`}>
                                        {layout.category}
                                    </span>
                                    <h3 className="text-white font-black text-2xl  mb-6 group-hover:text-[#587f81] transition-colors">
                                        {layout.name}
                                    </h3>
                                    
                                    <div className="flex flex-col gap-3 mb-10">
                                        {layout.features.map(f => (
                                            <div key={f} className="flex items-center gap-3">
                                                <div className="w-4 h-4 rounded-full bg-[#587f81]/20 flex items-center justify-center">
                                                    <CheckIcon className="w-2.5 h-2.5 text-[#587f81]" />
                                                </div>
                                                <span className="text-white/40 text-sm font-medium">{f}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                                        <div className="flex flex-col">
                                            <span className="text-white/20 text-[9px] font-black uppercase tracking-widest">Investimento</span>
                                            <span className="text-white font-black text-xl tracking-tighter">{layout.price}</span>
                                        </div>
                                        <button className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#587f81] hover:border-[#587f81] text-white transition-all duration-500">
                                            <ShoppingBagIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
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
                                    <div className="w-14 h-14 bg-[#587f81]/10 rounded-2xl flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-[#587f81]" />
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
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#587f81]/5 blur-[120px] pointer-events-none" />
                        
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
                                className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-black uppercase text-[12px] tracking-[0.2em] hover:bg-[#587f81] hover:text-white transition-all duration-500"
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
