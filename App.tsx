import React, { useEffect } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PainelPage from './pages/PainelPage';
import StudioPage from './pages/StudioPage';
import EmpresaPage from './pages/EmpresaPage';
import { ROUTES } from './constants';

const TITLES: Record<string, string> = {
    [ROUTES.home]: 'Domu Tech | Vendas no WhatsApp oficial e criação de sites',
    [ROUTES.painel]: 'Domu Painel | Central de vendas e atendimento no WhatsApp oficial',
    [ROUTES.studio]: 'Domu Studio | Criação de sites e lojas virtuais',
    [ROUTES.empresa]: 'Empresa | Domu Tech',
};

const ScrollManager: React.FC = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        document.title = TITLES[pathname] ?? TITLES[ROUTES.home];
    }, [pathname]);

    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
            return;
        }
        const timer = window.setTimeout(() => {
            document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
        }, 60);
        return () => window.clearTimeout(timer);
    }, [pathname, hash]);

    return null;
};

const Layout: React.FC = () => (
    <>
        <ScrollManager />
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
);

const App: React.FC = () => (
    <Routes>
        <Route element={<Layout />}>
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path={ROUTES.painel} element={<PainelPage />} />
            <Route path={ROUTES.studio} element={<StudioPage />} />
            <Route path={ROUTES.empresa} element={<EmpresaPage />} />
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
    </Routes>
);

export default App;
