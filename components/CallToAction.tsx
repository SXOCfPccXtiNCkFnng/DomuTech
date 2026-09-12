import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import { WhatsAppIcon, ArrowUpRightIcon } from './icons';

interface CallToActionProps {
    title: string;
    subtitle: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    variant?: 'whatsapp' | 'budget' | 'platform';
    supportText?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
    title,
    subtitle,
    primaryButtonText,
    primaryButtonLink,
    variant = 'platform',
    supportText,
}) => {
    const isExternal = primaryButtonLink.startsWith('http');
    const resolvedSupport =
        supportText ??
        (variant === 'whatsapp'
            ? 'Texto placeholder'
            : variant === 'budget'
              ? 'Texto placeholder'
              : 'Texto placeholder');

    const buttonClass = variant === 'whatsapp' ? 'btn-whatsapp' : 'btn-budget';

    const buttonContent = (
        <>
            {variant === 'whatsapp' ? (
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
            ) : (
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
            )}
            {primaryButtonText}
        </>
    );

    return (
        <section className="bloom-cta">
            <div className="bloom-cta__inner">
                <AnimateOnScroll from="up">
                    <div className="cta-panel relative p-7 md:p-12 lg:p-14 rounded-lg overflow-hidden border border-[var(--domu-border)] bg-white">
                        <div className="relative z-10 grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
                            <AnimateOnScroll from="left" delay={80}>
                            <div className="text-center lg:text-left">
                                <h2 className="cta-title text-[var(--domu-primary)] mb-3 md:mb-4">{title}</h2>
                                <p className="type-card-desc text-[var(--domu-muted)] mb-2 max-w-lg mx-auto lg:mx-0">
                                    {subtitle}
                                </p>
                            </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll from="right" delay={160}>
                            <div className="flex flex-col items-center lg:items-end">
                                <div className="flex flex-col items-center">
                                    {isExternal ? (
                                        <a
                                            href={primaryButtonLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={buttonClass}
                                        >
                                            {buttonContent}
                                        </a>
                                    ) : (
                                        <Link to={primaryButtonLink} className={buttonClass}>
                                            {buttonContent}
                                        </Link>
                                    )}
                                    <span className="cta-support cta-support--light mt-3.5 md:mt-4 text-center">
                                        {resolvedSupport}
                                    </span>
                                </div>
                            </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default CallToAction;
