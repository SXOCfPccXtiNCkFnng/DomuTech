import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

type CountUpProps = {
    to: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
};

const CountUp: React.FC<CountUpProps> = ({ to, prefix = '', suffix = '', duration = 1.6 }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });
    const reduceMotion = useReducedMotion();
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return;
        if (reduceMotion) {
            setValue(to);
            return;
        }
        const controls = animate(0, to, {
            duration,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (latest) => setValue(Math.round(latest)),
        });
        return () => controls.stop();
    }, [inView, reduceMotion, to, duration]);

    return (
        <span ref={ref} aria-label={`${prefix}${to}${suffix}`}>
            {prefix}
            {value.toLocaleString('pt-BR')}
            {suffix}
        </span>
    );
};

export default CountUp;
