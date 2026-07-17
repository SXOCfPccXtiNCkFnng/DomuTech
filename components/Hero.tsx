import React from 'react';
import { ChatCircleDots, CheckCircle, PaperPlaneTilt, Sparkle } from '@phosphor-icons/react';
import { ArrowUpRightIcon, WhatsAppIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';
import BrandGhosts from './BrandGhosts';
import TrustedCompanies from './TrustedCompanies';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero-section hero-professional relative overflow-hidden">
            <BrandGhosts variant="sides" opacity={0.05} />
            <div className="hero-section__inner mx-auto w-full max-w-[92rem] page-pad-x relative z-10">
                <div className="hero-section__main grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-16 items-center">
                    <div className="text-center lg:text-left max-w-[650px] mx-auto lg:mx-0">
                        <AnimateOnScroll immediate delay={160}>
                            <h1 className="hero-professional__title">
                                Tecnologia que{' '}
                                <span>impulsiona resultados.</span>
                            </h1>
                        </AnimateOnScroll>

                        <AnimateOnScroll immediate delay={280}>
                            <p className="hero-professional__lead">
                                Sites, automações e sistemas pensados para gerar valor real,
                                simplificar processos e acelerar o crescimento do seu negócio.
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll immediate delay={400}>
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3">
                                <a href="/chatbot-placeholder" className="btn-budget group">
                                    Conheça nossas soluções
                                    <ArrowUpRightIcon className="w-4 h-4" />
                                </a>
                                <a href="https://wa.me/5511934430659" className="hero-text-link">
                                    <WhatsAppIcon className="w-4 h-4" />
                                    Fale com um especialista
                                </a>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    <AnimateOnScroll immediate delay={260} className="w-full">
                        <div className="hero-product">
                            <div className="hero-product__browser">
                                <span />
                                <span />
                                <span />
                                <div className="hero-product__address">domutech.digital</div>
                            </div>

                            <div className="hero-product__body">
                                <div className="hero-product__intro">
                                    <div className="hero-product__icon">
                                        <ChatCircleDots size={22} weight="duotone" />
                                    </div>
                                    <div>
                                        <p>Atendimento inteligente</p>
                                        <span>Online agora</span>
                                    </div>
                                </div>

                                <div className="hero-chat">
                                    <div className="hero-chat__message hero-chat__message--bot">
                                        <Sparkle size={15} weight="fill" />
                                        Olá! Como podemos ajudar seu negócio hoje?
                                    </div>
                                    <div className="hero-chat__message hero-chat__message--user">
                                        Quero automatizar meu atendimento.
                                    </div>
                                    <div className="hero-chat__status">
                                        <CheckCircle size={15} weight="fill" />
                                        Entendido. Temos a solução ideal para você.
                                    </div>
                                </div>

                                <div className="hero-chat__input">
                                    <span>Digite sua mensagem...</span>
                                    <button type="button" aria-label="Enviar mensagem">
                                        <PaperPlaneTilt size={17} weight="fill" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>

                <AnimateOnScroll immediate delay={520} className="hero-trusted">
                    <TrustedCompanies />
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default Hero;
