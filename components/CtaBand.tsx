import React from 'react';
import { ArrowRightIcon } from '@phosphor-icons/react';
import Reveal from './Reveal';
import SmartLink from './SmartLink';

type CtaAction = { label: string; href: string };

type CtaBandProps = {
    title: string;
    muted?: string;
    text?: string;
    primary: CtaAction;
    secondary?: CtaAction;
};

const CtaBand: React.FC<CtaBandProps> = ({ title, muted, text, primary, secondary }) => (
    <section className="cta-band">
        <div className="container">
            <Reveal className="cta-band__inner">
                <h2 className="display display--md">
                    {title}
                    {muted && <span className="muted"> {muted}</span>}
                </h2>
                <div className="cta-band__side">
                    {text && <p>{text}</p>}
                    <div className="actions">
                        <SmartLink href={primary.href} className="btn btn--primary btn--lg">
                            {primary.label} <ArrowRightIcon />
                        </SmartLink>
                        {secondary && (
                            <SmartLink href={secondary.href} className="btn btn--line btn--lg">
                                {secondary.label}
                            </SmartLink>
                        )}
                    </div>
                </div>
            </Reveal>
        </div>
    </section>
);

export default CtaBand;
