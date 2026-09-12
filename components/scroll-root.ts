import { createContext, useContext, type RefObject } from 'react';

export type ScrollRootRef = RefObject<HTMLDivElement | null>;

export const ScrollRootContext = createContext<ScrollRootRef | null>(null);

export const useScrollRoot = () => useContext(ScrollRootContext);

/** Scroll suave até a âncora dentro da moldura (#domu-scroll). */
export function scrollToHomeHref(href: string): boolean {
    const hashIdx = href.indexOf('#');
    if (hashIdx < 0) return false;

    const id = href.slice(hashIdx + 1);
    if (!id) return false;

    const root = document.getElementById('domu-scroll');
    const target = document.getElementById(id);
    if (!root || !target) return false;

    const top =
        target.getBoundingClientRect().top -
        root.getBoundingClientRect().top +
        root.scrollTop;

    root.scrollTo({ top, behavior: 'smooth' });
    return true;
}

