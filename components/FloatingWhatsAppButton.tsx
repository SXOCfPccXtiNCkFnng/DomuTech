import React from 'react';

const FloatingWhatsAppButton: React.FC = () => {
    const whatsappLink = "https://wa.me/5511934430659?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.";

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-1 sm:p-2 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-0 focus:ring-offset-0"
            aria-label="Contact us on WhatsApp"
        >
            <img src="/img/whatsapp-logo.png" alt="WhatsApp" className="w-9 h-9" decoding="async" />
        </a>
    );
};

export default FloatingWhatsAppButton;