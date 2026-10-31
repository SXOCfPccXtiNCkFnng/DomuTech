import React from 'react';

type LogoProps = {
    className?: string;
};

const Logo: React.FC<LogoProps> = ({ className = '' }) => (
    <span className={`logo ${className}`}>
        <img src="/logos/logo.png" alt="" className="logo__mark" />
        <span className="logo__type">
            <span className="logo__name">DOMU</span>
            <span className="logo__sub">TECH</span>
        </span>
    </span>
);

export default Logo;
