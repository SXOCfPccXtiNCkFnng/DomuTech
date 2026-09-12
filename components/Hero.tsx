import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HERO_POSTER, HERO_VIDEO } from './hero-media';
import { HOME_NAV } from '../constants';
import { scrollToHomeHref } from './scroll-root';

const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const play = () => {
            video.play().catch(() => {
                /* autoplay pode falhar sem interação; poster cobre */
            });
        };
        if (video.readyState >= 2) play();
        else video.addEventListener('loadeddata', play, { once: true });
    }, []);

    const onNavClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        if (!scrollToHomeHref(href)) return;
        event.preventDefault();
        window.history.pushState(null, '', href);
    };

    return (
        <section id="home" className="domu-hero" aria-label="Apresentação Domu Studio">
            <div className="domu-hero__media" aria-hidden>
                <video
                    ref={videoRef}
                    className="domu-hero__video"
                    src={HERO_VIDEO}
                    poster={HERO_POSTER}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="auto"
                />
                <div className="domu-hero__shade" />
            </div>

            <header className="domu-hero__chrome">
                <Link to="/" className="domu-hero__logo" aria-label="Domu Studio">
                    <span>Domu Studio</span>
                </Link>

                <div className="domu-hero__chrome-right">
                    <nav className="domu-hero__nav" aria-label="Seções">
                        {HOME_NAV.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="domu-hero__nav-link"
                                onClick={(event) => onNavClick(event, item.href)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>

            <div className="domu-hero__center">
                <h1 className="domu-hero__title">
                    Digital com direção.
                    <span>Sem cópia. Sem ruído.</span>
                </h1>
                <p className="domu-hero__lead">
                    A Domu Studio cria presença online com identidade própria:
                    sites claros, ritmos bem definidos e uma base pronta pra marca
                    lançar e crescer sem parecer genérica.
                </p>
                <Link to="/login" className="domu-hero__action">
                    Falar com a Domu
                </Link>
            </div>
        </section>
    );
};

export default Hero;
