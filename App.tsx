
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import SiteServicePage from './components/SiteServicePage';
import About from './components/About';
import Values from './components/Values';
import Portfolio from './components/Portfolio';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ReliableAgency from './components/ReliableAgency';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import ProfessionalDevelopment from './components/ProfessionalDevelopment';
import Process from './components/Process';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import AutoPopup from './components/AutoPopup';
import CookieBanner from './components/CookieBanner';
import ChatbotPlaceholder from './components/ChatbotPlaceholder';

const App: React.FC = () => {
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 500);
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 1000);
    }
  }, []);

  const HomePage = () => (
    <>
      <Hero />
      <Values />
      <Portfolio />
      <Features />
      <About />
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

  return (
    <div className="bg-[var(--domu-bg)] selection:bg-[var(--domu-accent)] selection:text-white w-full relative">
      <Header />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servico/site-sob-medida" element={<SiteServicePage />} />
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