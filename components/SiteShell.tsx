import React, { useEffect, useRef, type ReactNode } from 'react';
import OuterHeader from './OuterHeader';
import { ScrollRootContext } from './scroll-root';
import { HERO_POSTER } from './hero-media';

type SiteShellProps = {
    children: ReactNode;
};

/** Fundo fixo (primeiro frame estático, leve blur) + moldura com scroll no meio. */
const SiteShell: React.FC<SiteShellProps> = ({ children }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.documentElement.classList.add('domu-framed', 'light-theme');
        document.documentElement.classList.remove('dark-theme', 'dark', 'hero-expanded', 'hero-docking');
        return () => {
            document.documentElement.classList.remove('domu-framed');
        };
    }, []);

    return (
        <ScrollRootContext.Provider value={scrollRef}>
            <div className="domu-shell">
                <div className="domu-shell__atmosphere" aria-hidden>
                    <img
                        className="domu-shell__poster"
                        src={HERO_POSTER}
                        alt=""
                        decoding="async"
                    />
                    <div className="domu-shell__poster-veil" />
                </div>

                <OuterHeader />

                <div className="domu-shell__frame">
                    <div className="domu-shell__scroll" ref={scrollRef} id="domu-scroll">
                        {children}
                    </div>
                </div>
            </div>
        </ScrollRootContext.Provider>
    );
};

export default SiteShell;
