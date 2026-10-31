import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'domu_theme';

const readTheme = (): Theme =>
    document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(readTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            /* modo privado sem storage */
        }
    }, [theme]);

    const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

    return { theme, toggle };
};
