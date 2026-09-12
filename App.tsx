import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import SiteShell from './components/SiteShell';
import Hero from './components/Hero';
import AboutBand from './components/AboutBand';
import ProfileSplit from './components/ProfileSplit';
import Values from './components/Values';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import MediaBanner from './components/MediaBanner';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import AboutPage from './components/AboutPage';
import CasesPage from './components/CasesPage';
import LayoutStorePage from './components/LayoutStorePage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';

/**
 * Home: hero → sobre → soluções → pilares → cases (carrossel) →
 * perfil split → avaliações → banner → FAQ (CTA vai no footer).
 */
const HomePage = () => (
    <>
        <Hero />
        <AboutBand />
        <Services />
        <Values />
        <Portfolio />
        <ProfileSplit />
        <Testimonials />
        <MediaBanner />
        <FAQ />
    </>
);

/** URLs antigas de agência: manda pro login da plataforma */
const LegacyToLogin = () => <Navigate to="/login" replace />;

const App: React.FC = () => {
    const location = useLocation();
    const isShellFree =
        location.pathname.startsWith('/login') ||
        location.pathname.startsWith('/painel');

    if (isShellFree) {
        return (
            <div className="bg-[var(--domu-bg)] selection:bg-[var(--domu-accent)] selection:text-white w-full relative">
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/painel" element={<DashboardPage />} />
                </Routes>
            </div>
        );
    }

    return (
        <SiteShell>
            <main className="domu-shell__main">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sobre" element={<AboutPage />} />
                    <Route path="/cases" element={<CasesPage />} />
                    <Route path="/layouts" element={<LayoutStorePage />} />
                    <Route path="/chatbot-placeholder" element={<LegacyToLogin />} />
                    <Route path="/servico/*" element={<LegacyToLogin />} />
                </Routes>
            </main>
            <Footer />
            <CookieBanner />
        </SiteShell>
    );
};

export default App;
