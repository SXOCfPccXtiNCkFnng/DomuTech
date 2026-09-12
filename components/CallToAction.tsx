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
    const resolvedSupport = supportText ?? 'Resposta em horário comercial';

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

    const button = isExternal ? (
        <a
            href={primaryButtonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bloom-cta__btn"
        >
            {buttonContent}
        </a>
    ) : (
        <Link to={primaryButtonLink} className="bloom-cta__btn">
            {buttonContent}
        </Link>
    );

    return (
        <section className="bloom-cta" aria-label="Chamada para ação">
            <div className="bloom-cta__inner">
                <AnimateOnScroll from="up">
                    <div className="bloom-cta__panel">
                        <div className="bloom-cta__copy">
                            <h2 className="bloom-cta__title">{title}</h2>
                            <p className="bloom-cta__text">{subtitle}</p>
                        </div>
                        <div className="bloom-cta__actions">
                            {button}
                            <span className="bloom-cta__support">{resolvedSupport}</span>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default CallToAction;
