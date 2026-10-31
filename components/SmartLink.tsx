import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type SmartLinkProps = {
    href: string;
    className?: string;
    children: ReactNode;
};

const SmartLink: React.FC<SmartLinkProps> = ({ href, className, children }) =>
    /^(https?:|mailto:)/.test(href) ? (
        <a href={href} className={className} target="_blank" rel="noreferrer">
            {children}
        </a>
    ) : (
        <Link to={href} className={className}>
            {children}
        </Link>
    );

export default SmartLink;
