'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Step5Offer() {
    const [showPopup, setShowPopup] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > 50 && !hasTriggered) {
                setShowPopup(true);
                setHasTriggered(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasTriggered]);

    const investorWhatsAppLink = "https://wa.link/lkepbc";

    const financialBreakdown = [
        { label: 'Preço de Aquisição', value: '€1.350.000', type: 'primary' },
        { label: 'Preço por m²', value: '€511/m²', type: 'highlight', detail: '40% abaixo de Aveiro Centro' },
        { label: 'Renda Estimada (Mês)', value: '€7.000 - €9.000', type: 'normal' },
        { label: 'Yield Bruta Alvo', value: '6.2% - 8.0%', type: 'normal' }
    ];

    const targetScenarios = [
        {
            scenario: 'Cenário Conservador',
            monthlyRent: '€7.000',
            grossYield: '6.2%',
            netYield: '4.8%',
            description: 'Arrendamento a empresa local'
        },
        {
            scenario: 'Cenário Recomendado',
            monthlyRent: '€9.000',
            grossYield: '8.0%',
            netYield: '6.2%',
            description: 'Operador logístico nacional/internacional',
            recommended: true
        }
    ];

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const handleWhatsAppClick = () => {
        import('../utils/fb-events').then(({ trackMetaEvent }) => {
            trackMetaEvent('Contact', {
                content_name: 'Pavilhão N333-1 Amoreira da Gândara',
                content_category: 'Industrial Real Estate',
                value: 1350000,
                currency: 'EUR'
            });
        });
        window.open(investorWhatsAppLink, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen bg-premium-white flex items-center justify-center px-4 py-12 md:py-20">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-5xl w-full"
            >
                {/* MODAL POPUP (Sticky/Delayed) */}
                <AnimatePresence>
                    {showPopup && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setShowPopup(false)}
                                className="fixed inset-0 bg-[#003366]/60 backdrop-blur-md z-[110]"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="fixed left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 top-1/2 -translate-y-1/2 md:w-full md:max-w-lg bg-white rounded-[2.5rem] shadow-2xl z-[120] p-8 text-center border-4 border-[#003366]/5"
                            >
                                <div className="text-6xl mb-6">🎯</div>
                                <h3 className="text-3xl font-black text-[#003366] mb-4">Validar Proposta?</h3>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    Para validar os dados de rentabilidade ou agendar uma visita ao ativo, <strong className="text-[#003366]">fale diretamente comigo</strong>.
                                </p>
                                <div className="space-y-4">
                                    <button
                                        onClick={handleWhatsAppClick}
                                        className="w-full py-6 text-white font-black text-xl rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-3"
                                        style={{ background: 'linear-gradient(135deg, #1a6b38 0%, #25a244 100%)' }}
                                    >
                                        <span>WhatsApp Direto</span>
                                        <span className="text-2xl">⚡</span>
                                    </button>
                                    <button
                                        onClick={() => setShowPopup(false)}
                                        className="text-gray-400 font-bold hover:text-gray-600 transition-colors"
                                    >
                                        Voltarei mais tarde
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                <div className="space-y-12">
                    <motion.div variants={itemVariants} className="text-center space-y-4">
                        <div className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-xs md:text-sm font-black uppercase tracking-widest shadow-sm">
                            💎 Oportunidade de Investimento Industrial
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-[#003366] leading-tight text-center">
                            Proposta <br />
                            <span className="text-blue-600">Financeira.</span>
                        </h1>
                    </motion.div>

                    {/* Financial Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {financialBreakdown.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className={`p-6 rounded-3xl border-2 flex flex-col justify-center text-center transition-all ${item.type === 'primary' ? 'bg-[#003366] text-white border-[#003366] shadow-xl' :
                                    item.type === 'highlight' ? 'bg-yellow-400 text-[#003366] border-yellow-400 shadow-xl' :
                                        'bg-white border-gray-100 text-[#003366] shadow-md'
                                    }`}
                            >
                                <p className={`text-[10px] md:text-xs font-black uppercase tracking-widest mb-2 opacity-70`}>{item.label}</p>
                                <p className="text-2xl md:text-3xl font-black mb-1">{item.value}</p>
                                {item.detail && <p className="text-[10px] font-bold opacity-80">{item.detail}</p>}
                            </motion.div>
                        ))}
                    </div>

                    {/* Scenarios Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 overflow-visible">
                        {targetScenarios.map((target, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className={`relative p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center transition-all ${target.recommended ? 'bg-[#003366] text-white ring-4 ring-blue-500/20' : 'bg-white text-[#003366] border border-gray-100'
                                    }`}
                            >
                                {target.recommended && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                                        Recomendado
                                    </div>
                                )}
                                <h4 className="text-xl font-black mb-8 opacity-70 uppercase tracking-widest">{target.scenario}</h4>
                                <div className="space-y-4 mb-10">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold opacity-60">Renda Mensal</span>
                                        <span className="text-4xl md:text-6xl font-black">{target.monthlyRent}</span>
                                    </div>
                                    <div className="flex justify-center gap-10 mt-6">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold opacity-60 uppercase">Yield Bruta</span>
                                            <span className="text-2xl font-black text-green-400">{target.grossYield}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold opacity-60 uppercase">Yield Líquida</span>
                                            <span className="text-2xl font-black text-blue-400">{target.netYield}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm font-medium opacity-80 mb-8">{target.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Final CTA Area */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gray-100 text-center space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-[#003366]">Interessado em Avaliar o Dossier Completo?</h2>
                        <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto font-medium leading-relaxed">
                            Agende uma call técnica ou uma visita ao ativo diretamente com o proprietário.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <button
                                onClick={handleWhatsAppClick}
                                className="group w-full md:w-auto px-12 py-7 text-white font-black text-xl md:text-2xl rounded-2xl shadow-[0_15px_45px_rgba(37,162,68,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 cursor-pointer"
                                style={{ background: 'linear-gradient(135deg, #1a6b38 0%, #25a244 100%)' }}
                            >
                                <svg className="w-8 h-8 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span>Iniciar Conversa WhatsApp</span>
                            </button>
                        </div>
                        <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">Exclusivo para investidores qualificados</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
