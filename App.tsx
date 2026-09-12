import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import SiteShell from './components/SiteShell';
import Hero from './components/Hero';
import AboutBand from './components/AboutBand';
import Values from './components/Values';
import Services from './components/Services';
import CasesStrip from './components/CasesStrip';
import MediaBanner from './components/MediaBanner';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import AboutPage from './components/AboutPage';
import CasesPage from './components/CasesPage';
import LayoutStorePage from './components/LayoutStorePage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';

/**
 * Home na linha Bloom: hero → sobre → pilares → soluções → cases →
 * banner imagem+CTA → avaliações → dúvidas → CTA.
 */
const HomePage = () => (
    <>
        <Hero />
        <AboutBand />
        <Values />
        <Services />
        <CasesStrip />
        <MediaBanner />
        <Testimonials />
        <FAQ />
        <div id="precos">
            <CallToAction
                title="Pronto pra presença com direção?"
                subtitle="Fale com a Domu e monte a base digital da sua marca sem parecer genérica."
                primaryButtonText="Falar com a Domu"
                primaryButtonLink="/login"
                variant="platform"
            />
        </div>
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
