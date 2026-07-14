import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceDetail from './components/ServiceDetail';
import SiteServicePage from './components/SiteServicePage';
import AutomationServicePage from './components/AutomationServicePage';
import SoftwareHouseServicePage from './components/SoftwareHouseServicePage';
import TrafficServicePage from './components/TrafficServicePage';
import BrandingServicePage from './components/BrandingServicePage';
import AboutPage from './components/AboutPage';
import CasesPage from './components/CasesPage';
import About from './components/About';
import Stats from './components/Stats';
import Values from './components/Values';
import Portfolio from './components/Portfolio';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import AutoPopup from './components/AutoPopup';
import CookieBanner from './components/CookieBanner';
import ChatbotPlaceholder from './components/ChatbotPlaceholder';
import LayoutStorePage from './components/LayoutStorePage';

const HomePage = () => (
  <>
    <Hero />
    <Values />
    <Portfolio />
    <Features />
    <About />
    <Stats />
    <CallToAction
      title="Não encontrou o que procurava?"
      subtitle="Desenvolvemos soluções personalizadas para atender exatamente às suas necessidades específicas."
      primaryButtonText="Peça um Orçamento"
      primaryButtonLink="/chatbot-placeholder"
      variant="budget"
    />
    <Testimonials />
    <FAQ />
    <CallToAction
      title="Pronto para transformar sua visão em realidade?"
      subtitle="Junte-se a dezenas de empresas que já confiam em nossa expertise para impulsionar seus negócios."
      primaryButtonText="Peça um Orçamento"
      primaryButtonLink="/chatbot-placeholder"
      variant="budget"
    />
  </>
);

const App: React.FC = () => {
  return (
    <div className="bg-[var(--domu-bg)] selection:bg-[var(--domu-accent)] selection:text-white w-full relative">
      <Header />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servico/site-sob-medida" element={<SiteServicePage />} />
          <Route path="/servico/automacao-ia" element={<AutomationServicePage />} />
          <Route path="/servico/software-house" element={<SoftwareHouseServicePage />} />
          <Route path="/servico/trafego-performance" element={<TrafficServicePage />} />
          <Route path="/servico/branding-design" element={<BrandingServicePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/layouts" element={<LayoutStorePage />} />
          <Route path="/servico/:serviceId" element={<ServiceDetail />} />
          <Route path="/chatbot-placeholder" element={<ChatbotPlaceholder />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <AutoPopup />
      <CookieBanner />
    </div>
  );
};

export default App;
