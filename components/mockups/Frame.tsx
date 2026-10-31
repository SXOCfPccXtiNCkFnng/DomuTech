import React, { type ReactNode } from 'react';
import { LockSimpleIcon } from '@phosphor-icons/react';

type FrameProps = {
    url: string;
    children: ReactNode;
    className?: string;
};

const Frame: React.FC<FrameProps> = ({ url, children, className = '' }) => (
    <div className={`frame ${className}`} aria-hidden>
        <div className="frame__bar">
            <span className="frame__dots">
                <i />
                <i />
                <i />
            </span>
            <span className="frame__url">
                <LockSimpleIcon weight="bold" /> {url}
            </span>
            <span className="frame__spacer" />
        </div>
        <div className="frame__body">{children}</div>
    </div>
);

export default Frame;
