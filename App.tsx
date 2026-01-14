import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import About from './components/About';
import Values from './components/Values';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import CookieBanner from './components/CookieBanner';

// Updated button texts - v2
const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Synchronize with the script in index.html. Default is dark.
      if (localStorage.getItem('theme') === 'light') {
        return 'light';
      }
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Handle preloader fade-out and removal
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      // Start fade-out after a short delay
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 500);
      // Remove from DOM after transition completes
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 1000); // Corresponds to the 0.5s transition
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Add smooth scroll for anchor links
  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');

      // Ensure it's a valid internal anchor link
      if (href && href.startsWith('#') && href.length > 1) {
        event.preventDefault();

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const header = document.querySelector('header');
          // Fallback to 80px if header isn't found, which is 5rem (h-20)
          const headerHeight = header ? header.offsetHeight : 80;
          
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll as EventListener));

    // Cleanup function to remove event listeners on component unmount
    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll as EventListener));
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const HomePage = () => (
    <>
      <Hero />
      <Services />
      <CallToAction 
        title="Não encontrou o que procurava?" 
        subtitle="Desenvolvemos soluções personalizadas para atender exatamente às suas necessidades específicas."
        primaryButtonText="FALE COM NOSSOS ESPECIALISTAS"
        primaryButtonLink="#faq"
      />
      <About />
      <Values />
      <CallToAction 
        title="Pronto para transformar sua visão em realidade?"
        subtitle="Junte-se a dezenas de empresas que já confiam em nossa expertise para impulsionar seus negócios."
        primaryButtonText="QUERO INICIAR MEU PROJETO"
        primaryButtonLink="#faq"
      />
      <Portfolio />
      <CallToAction 
        title="Gostou do que viu? Qual será o próximo caso de sucesso?"
        subtitle="Transforme sua ideia em realidade com a mesma qualidade e dedicação que aplicamos em todos os nossos projetos."
        primaryButtonText="SOLICITAR CONSULTA GRATUITA"
        primaryButtonLink="#faq"
      />
      <FAQ />
    </>
  );

  return (
    <div className="text-slate-700 dark:text-slate-400 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="bg-white dark:bg-neutral-950">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servico/:serviceId" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <CookieBanner />
    </div>
  );
};

export default App;