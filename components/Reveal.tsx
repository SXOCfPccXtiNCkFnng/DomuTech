import React, { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type RevealProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
    as?: 'div' | 'li' | 'article' | 'section';
};

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className, as = 'div' }) => {
    const reduce = useReducedMotion();
    const Tag = motion[as];

    return (
        <Tag
            className={className}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </Tag>
    );
};

export default Reveal;
