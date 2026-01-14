import React, { useState, FormEvent, ChangeEvent } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { WhatsAppIcon } from './icons';

// Define types for form state and errors
interface FormData {
    name: string;
    email: string;
    whatsapp: string;
    company: string;
    serviceType: string;
    description: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    serviceType?: string;
    description?: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        whatsapp: '',
        company: '',
        serviceType: 'Selecione o tipo de projeto',
        description: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'O nome completo é obrigatório.';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'O e-mail é obrigatório.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'O formato do e-mail é inválido.';
        }
        if (!formData.serviceType || formData.serviceType === "Selecione o tipo de projeto") {
            newErrors.serviceType = 'Por favor, selecione um tipo de serviço.';
        }
        if (!formData.description.trim()) {
            newErrors.description = 'A descrição do projeto é obrigatória.';
        } else if (formData.description.trim().length < 20) {
            newErrors.description = 'A descrição deve ter pelo menos 20 caracteres.';
        }
        return newErrors;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        // Clear the error for the field being edited
        if (errors[id as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [id]: undefined }));
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }
        // Monta mensagem para WhatsApp com os dados do formulário
        const message = `Olá, VexelTech!%0A%0A` +
            `Nome: ${formData.name}%0A` +
            `E-mail: ${formData.email}%0A` +
            `WhatsApp: ${formData.whatsapp || 'Não informado'}%0A` +
            `Empresa/Negócio: ${formData.company || 'Não informado'}%0A` +
            `Tipo de Serviço: ${formData.serviceType}%0A%0A` +
            `Descrição do Projeto:%0A${formData.description}`;

        const whatsappUrl = `https://wa.me/5511934430659?text=${message}`;
        window.location.href = whatsappUrl;
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-slate-200 to-slate-100 dark:from-neutral-950 dark:to-neutral-900/50">
            <div className="container mx-auto px-4">
                <AnimateOnScroll>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-200 mb-4">Vamos Começar seu Projeto?</h2>
                        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 dark:text-slate-400 px-4">
                            Sua ideia merece ser transformada em sucesso. Compartilhe seu desafio conosco e vamos mostrar como podemos gerar resultados reais para seu negócio. Resposta garantida em até 2 horas via{' '}
                            <a href="mailto:vexeltech.contato@gmail.com" className="font-semibold text-violet-500 hover:underline break-all">
                                vexeltech.contato@gmail.com
                            </a>
                        </p>
                    </div>
                </AnimateOnScroll>
                
                <AnimateOnScroll>
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white dark:bg-neutral-900 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-2 border-slate-300 dark:border-slate-800 border-r-4 border-r-violet-500">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-200 mb-6 text-center">Envie sua Mensagem</h3>
                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Nome Completo *</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            value={formData.name} 
                                            onChange={handleChange}
                                            placeholder="Como devemos te chamar?" 
                                            className={`w-full px-4 py-2 bg-white dark:bg-slate-800 border rounded-none focus:ring-2 focus:ring-violet-500 focus:outline-none transition-colors text-slate-900 dark:text-slate-200 ${errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'}`}
                                            aria-invalid={!!errors.name}
                                            aria-describedby="name-error"
                                        />
                                        {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">E-mail Profissional *</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="seu@email.com" 
                                            className={`w-full px-4 py-2 bg-white dark:bg-slate-800 border rounded-none focus:ring-2 focus:ring-violet-500 focus:outline-none transition-colors text-slate-900 dark:text-slate-200 ${errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'}`}
                                            aria-invalid={!!errors.email}
                                            aria-describedby="email-error"
                                        />
                                        {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">WhatsApp</label>
                                        <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="(11) 99999-9999" className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-none focus:ring-2 focus:ring-violet-500 focus:outline-none text-slate-900 dark:text-slate-200" />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Empresa/Negócio</label>
                                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Nome da sua empresa" className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-none focus:ring-2 focus:ring-violet-500 focus:outline-none text-slate-900 dark:text-slate-200" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="serviceType" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Tipo de serviço *</label>
                                    <select 
                                        id="serviceType" 
                                        name="serviceType" 
                                        value={formData.serviceType} 
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 bg-white dark:bg-slate-800 border rounded-none focus:ring-2 focus:ring-violet-500 focus:outline-none transition-colors text-slate-900 dark:text-slate-200 ${errors.serviceType ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'}`}
                                        aria-invalid={!!errors.serviceType}
                                        aria-describedby="serviceType-error"
                                    >
                                        <option>Selecione o tipo de projeto</option>
                                        <option>Desenvolvimento Web</option>
                                        <option>Automação Inteligente</option>
                                        <option>Aplicativo Móvel</option>
                                        <option>Outro</option>
                                    </select>
                                    {errors.serviceType && <p id="serviceType-error" className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
                                </div>
                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Descreva seu Projeto *</label>
                                    <textarea 
                                        id="description" 
                                        name="description"
                                        rows={5} 
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Conte mais detalhes sobre seu projeto, objetivos, prazo desejado e qualquer informação relevante..." 
                                        className={`w-full px-4 py-2 bg-white dark:bg-slate-800 border rounded-none focus:ring-2 focus:ring-violet-500 focus:outline-none transition-colors text-slate-900 dark:text-slate-200 ${errors.description ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'}`}
                                        aria-invalid={!!errors.description}
                                        aria-describedby="description-error"
                                    ></textarea>
                                    {errors.description && <p id="description-error" className="text-red-500 text-sm mt-1">{errors.description}</p>}
                                </div>
                                <div>
                                    <button 
                                        type="submit" 
                                        className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-normal py-2 px-4 rounded-none shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 uppercase tracking-wide"
                                        style={{clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 100%, 0 100%)'}}
                                    >
                                        <img src="/img/whatsapp-logo.png" alt="WhatsApp" className="w-6 h-6" decoding="async" />
                                        Enviar mensagem agora
                                    </button>
                                </div>
                                <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                                    Ao clicar em Enviar, seu aplicativo de e-mail padrão será aberto.
                                </p>
                            </form>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default Contact;