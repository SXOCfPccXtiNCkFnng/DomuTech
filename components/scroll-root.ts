import { createContext, useContext, type RefObject } from 'react';

export type ScrollRootRef = RefObject<HTMLDivElement | null>;

export const ScrollRootContext = createContext<ScrollRootRef | null>(null);

export const useScrollRoot = () => useContext(ScrollRootContext);
