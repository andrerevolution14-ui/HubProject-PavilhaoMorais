'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Step5Props {
    onNext?: () => void;
}

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
});

export default function Step5Offer({ onNext }: Step5Props) {
    const [showPopup, setShowPopup] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (hasTriggered) return;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || window.pageYOffset;
            if (windowHeight + scrollTop >= documentHeight - 50) {
                setShowPopup(true);
                setHasTriggered(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasTriggered]);

    const investorWhatsAppLink = "https://wa.me/351XXXXXXXXX?text=Olá,%20sou%20investidor%20e%20gostaria%20de%20validar%20o%20yield%20e%20agendar%20visita%20ao%20pavilhão%20em%20Amoreira%20da%20Gândara.";
    const ownerWhatsAppLink = "https://wa.me/351XXXXXXXXX?text=Olá,%20sou%20proprietário/empresa%20e%20gostaria%20de%20receber%20a%20planta%20técnica%20do%20pavilhão%20N333-1.";

    const financialBreakdown = [
        { label: 'Preço de Aquisição', value: '€1.350.000', type: 'primary' },
        { label: 'Preço por m²', value: '€511/m²', type: 'highlight', detail: '40% abaixo de Aveiro Centro' },
        { label: 'Área Bruta', value: '2.640 m²', type: 'normal' },
        { label: 'Terreno Total', value: '4.272 m²', type: 'normal' }
    ];

    const roiScenarios = [
        {
            scenario: 'Arrendamento Conservador',
            monthlyRent: '€7.000',
            annualIncome: '€84.000',
            grossYield: '6.2%',
            netYield: '4.8%',
            description: 'Empresa de logística local'
        },
        {
            scenario: 'Arrendamento Otimista',
            monthlyRent: '€9.000',
            annualIncome: '€108.000',
            grossYield: '8.0%',
            netYield: '6.2%',
            description: 'Operador logístico nacional',
            recommended: true
        }
    ];

    return (
        <div className="min-h-screen bg-premium-white flex items-center justify-center px-4 py-12 md:py-20">
            <div className="max-w-5xl w-full">
                {/* CENTERED MODAL POPUP */}
                <AnimatePresence>
                    {showPopup && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setShowPopup(false)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
                            />

                            {/* Modal */}
                            <motion.div
                                initial={{ scale: 0.92, opacity: 0, y: 24 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.92, opacity: 0, y: 24 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="fixed inset-0 flex items-center justify-center z-[120] px-4 pointer-events-none"
                            >
                                <div className="bg-white text-[#003366] p-8 md:p-10 rounded-3xl shadow-2xl max-w-lg w-full relative pointer-events-auto border border-gray-100">
                                    <button
                                        onClick={() => setShowPopup(false)}
                                        className="absolute top-4 right-4 text-gray-400 hover:text-[#003366] transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-[#F5F7FA] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                                            💬
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-center">
                                            Ficou com alguma dúvida?
                                        </h3>

                                        <p className="text-gray-600 text-lg mb-8 leading-relaxed text-center">
                                            Para validar os dados de rentabilidade ou agendar uma visita ao ativo, <strong className="text-[#003366]">pode contactar-me</strong> diretamente através do WhatsApp.
                                        </p>

                                        <div className="space-y-3">
                                            <a
                                                href={investorWhatsAppLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full py-4 bg-[#003366] text-white font-bold text-lg rounded-xl hover:bg-[#004488] transition-all transform hover:scale-[1.02] shadow-xl text-center"
                                            >
                                                Iniciar Conversa no WhatsApp
                                            </a>
                                            <button
                                                onClick={() => setShowPopup(false)}
                                                className="block w-full py-3 text-gray-400 font-medium hover:text-[#003366] transition-colors"
                                            >
                                                Continuar a ler a análise
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                <div className="text-center space-y-6 md:space-y-8">
                    <motion.div {...fadeUp(0)} className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-full text-xs md:text-sm font-bold text-yellow-900">
                        💰 Oportunidade Exclusiva — Off-Market
                    </motion.div>

                    <motion.h1 {...fadeUp(0.08)} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#003366] leading-tight px-2">
                        Análise Financeira Completa
                    </motion.h1>

                    <motion.p {...fadeUp(0.14)} className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Todos os números, transparentes. Todos os cenários, calculados. Tome a decisão mais informada da sua vida.
                    </motion.p>

                    {/* Pricing Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-xl md:rounded-2xl p-4 md:p-8 lg:p-12 shadow-2xl border-2 border-[#003366]/10 mx-2 md:mx-0"
                    >
                        {/* Price Comparison */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8 text-center md:text-left">
                            <div className="px-2">
                                <p className="text-gray-500 text-xs md:text-sm mb-1 md:mb-2 uppercase tracking-wide">Valor de Avaliação Bancária:</p>
                                <p className="text-2xl md:text-3xl text-gray-400 line-through font-semibold mb-1 md:mb-2 text-center md:text-left">
                                    1.400.000€
                                </p>
                                <p className="text-[10px] md:text-xs text-gray-500">Avaliação independente — Dezembro 2025</p>
                            </div>

                            <div className="text-center md:text-right px-2">
                                <p className="text-[#003366] text-xs md:text-sm font-bold mb-1 md:mb-2 uppercase tracking-wide">Preço de Fecho Negociado:</p>
                                <motion.p
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003366] mb-2"
                                >
                                    1.350.000€
                                </motion.p>
                                <div className="inline-block bg-green-100 border border-green-300 rounded-lg px-3 md:px-4 py-1.5 md:py-2">
                                    <p className="text-green-800 font-semibold text-[10px] md:text-xs">
                                        💰 Poupança imediata: €50.000
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Financial Breakdown */}
                        <div className="bg-white rounded-xl p-4 md:p-6 mb-6 md:mb-8 border-2 border-gray-100 mx-2 md:mx-0">
                            <h3 className="text-base md:text-lg font-bold text-[#003366] mb-3 md:mb-4">📊 Breakdown Financeiro</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                {financialBreakdown.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                                        <div className="text-left">
                                            <p className="text-xs md:text-sm text-gray-600">{item.label}</p>
                                            {item.detail && <p className="text-[10px] md:text-xs text-green-600 font-semibold leading-tight">{item.detail}</p>}
                                        </div>
                                        <p className={`font-bold ml-2 text-right ${item.type === 'primary' ? 'text-lg md:text-2xl text-[#003366]' :
                                            item.type === 'highlight' ? 'text-base md:text-xl text-green-600' :
                                                'text-sm md:text-lg text-gray-700'
                                            }`}>
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ROI Scenarios */}
                        <div className="mb-6 md:mb-8 px-2">
                            <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 md:mb-6">📈 Cenários de Rentabilidade (ROI)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {roiScenarios.map((scenario, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className={`rounded-xl p-4 md:p-6 text-left ${scenario.recommended
                                            ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300'
                                            : 'bg-gray-50 border-2 border-gray-200'
                                            }`}
                                    >
                                        {scenario.recommended && (
                                            <span className="inline-block bg-green-600 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full mb-3">
                                                ⭐ MAIS PROVÁVEL
                                            </span>
                                        )}
                                        <h4 className="font-bold text-[#003366] text-sm md:text-base mb-3 md:mb-4">{scenario.scenario}</h4>
                                        <div className="space-y-1.5 md:space-y-2 mb-4">
                                            <div className="flex justify-between">
                                                <span className="text-xs md:text-sm text-gray-600">Renda Mensal:</span>
                                                <span className="text-xs md:text-sm font-bold text-[#003366]">{scenario.monthlyRent}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-xs md:text-sm text-gray-600">Receita Anual:</span>
                                                <span className="text-xs md:text-sm font-bold text-[#003366]">{scenario.annualIncome}</span>
                                            </div>
                                            <div className="flex justify-between pt-2 border-t border-gray-200">
                                                <span className="text-xs md:text-sm font-semibold text-gray-700">Yield Bruto:</span>
                                                <span className="font-bold text-green-600 text-base md:text-lg">{scenario.grossYield}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-xs md:text-sm font-semibold text-gray-700">Yield Líquido:</span>
                                                <span className="font-bold text-green-600 text-base md:text-lg">{scenario.netYield}</span>
                                            </div>
                                        </div>
                                        <p className="text-[10px] md:text-xs text-gray-600 italic leading-snug">{scenario.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Additional Value */}
                        <div className="bg-blue-50 border-l-4 border-[#003366] rounded-lg p-4 md:p-6 mb-6 md:mb-8 mx-2 md:mx-0 text-left">
                            <h4 className="font-bold text-[#003366] text-sm md:text-base mb-2 md:mb-3 flex items-center gap-2">
                                <span className="text-xl md:text-2xl">🚀</span>
                                Valorização Futura Projetada
                            </h4>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-3">
                                Com a conclusão da <strong>ligação à A1</strong> (prevista para 2027-2028),
                                pavilhões industriais em Amoreira da Gândara podem valorizar <strong>+35-45%</strong>.
                            </p>
                            <div className="bg-white rounded-lg p-3 md:p-4 border border-blue-200">
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-1">
                                    <span className="text-xs md:text-sm font-semibold text-gray-700">Valor Estimado em 2028:</span>
                                    <span className="text-lg md:text-2xl font-bold text-[#003366]">€1.82M - €1.96M</span>
                                </div>
                                <p className="text-[10px] md:text-xs text-green-600 font-semibold mt-1.5 md:mt-2 text-center sm:text-right">
                                    Ganho de capital potencial: +€470k - €610k
                                </p>
                            </div>
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-[#003366]/20 to-transparent my-6 md:my-8" />

                        {/* PROFESSIONAL DISCOUNT OFFER */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-gradient-to-br from-[#003366] to-[#004488] rounded-xl p-5 md:p-8 mb-6 shadow-2xl mx-2 md:mx-0 border-2 border-white/10"
                        >
                            <div className="text-center mb-6 md:mb-8 text-white">
                                <div className="inline-block px-4 py-2 bg-yellow-400 rounded-full mb-4 shadow-md">
                                    <p className="text-[#003366] text-xs md:text-sm font-black uppercase tracking-wider">
                                        Oferta Exclusiva Limitada
                                    </p>
                                </div>
                                <h3 className="text-2xl md:text-4xl font-black text-white mb-3 leading-tight tracking-tight">
                                    Desconto Imediato de €50.000
                                </h3>
                                <p className="text-white/90 text-sm md:text-xl max-w-2xl mx-auto px-2 font-medium">
                                    Beneficie de condições únicas ao contactar o proprietário diretamente através deste portal oficial.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-8 mb-6 md:mb-8 border border-white/20">
                                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 mb-6">
                                    <div className="text-center md:text-right">
                                        <p className="text-white/60 text-xs md:text-sm mb-1 uppercase font-bold tracking-widest">Preço de Mercado</p>
                                        <p className="text-2xl md:text-4xl text-white/50 line-through font-bold">€1.350.000</p>
                                    </div>
                                    <div className="hidden md:block text-yellow-400 text-4xl">➔</div>
                                    <div className="text-center md:text-left">
                                        <p className="text-yellow-400 text-xs md:text-sm mb-1 font-black uppercase tracking-widest">Preço com Acordo Direto</p>
                                        <p className="text-4xl md:text-6xl text-yellow-400 font-black drop-shadow-lg">€1.300.000</p>
                                    </div>
                                </div>
                                <div className="text-center pt-5 md:pt-6 border-t border-white/20">
                                    <p className="text-white font-black text-xl md:text-3xl">
                                        POUPANÇA TOTAL: <span className="text-yellow-400">€50.000</span>
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-xs md:text-base">
                                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/5">
                                    <p className="text-yellow-400 font-black mb-1">✓ Sem Intermediários</p>
                                    <p className="text-white/80 text-[10px] md:text-xs">Negócio direto com o proprietário</p>
                                </div>
                                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/5">
                                    <p className="text-yellow-400 font-black mb-1">✓ Escritura Imediata</p>
                                    <p className="text-white/80 text-[10px] md:text-xs">Documentação pronta a assinar</p>
                                </div>
                                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/5">
                                    <p className="text-yellow-400 font-black mb-1">✓ Válido via Portal</p>
                                    <p className="text-white/80 text-[10px] md:text-xs">Exclusivo para contactos deste site</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Single CTA */}
                        <motion.a
                            href={investorWhatsAppLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.75, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="group w-full px-6 md:px-8 py-5 md:py-6 bg-[#003366] text-white font-bold text-base md:text-xl rounded-xl hover:bg-[#004488] transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 md:gap-3 mx-2 md:mx-0"
                        >
                            <svg className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>Falar com o Proprietário</span>
                            <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </motion.a>
                    </motion.div>

                    <p className="text-[10px] md:text-sm text-gray-500 mt-6 md:mt-8 flex items-center justify-center gap-2 px-4">
                        <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-center">Informação confidencial. Partilha restrita para investidores qualificados.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
