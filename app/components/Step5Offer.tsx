'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { fadeUp } from '../utils/animations';
import { trackMetaEvent } from '../utils/fb-events';


export default function Step5Offer() {
    const [showPopup, setShowPopup] = useState(false);
    const [triggered, setTriggered] = useState(false);

    const handleWhatsAppClick = (location: string) => {
        trackMetaEvent('Contact', {
            content_category: 'Lead Generation',
            content_name: `WhatsApp Offer Inquiry (${location})`,
            value: 0.00,
            currency: 'EUR'
        });
    };

    useEffect(() => {
        const handle = () => {
            if (triggered) return;
            const { scrollY, innerHeight } = window;
            const docH = document.documentElement.scrollHeight;
            if (scrollY + innerHeight >= docH - 60) {
                setShowPopup(true);
                setTriggered(true);
            }
        };
        window.addEventListener('scroll', handle);
        return () => window.removeEventListener('scroll', handle);
    }, [triggered]);

    const waLink = "https://wa.link/2oghu8";

    const financialBreakdown = [
        { label: 'Preço de Aquisição', value: 'Sob Consulta', size: 'lg', color: '#003366' },
        { label: 'Preço por m²', value: 'Incrível', size: 'md', color: '#16a34a', note: 'Significativamente abaixo de Aveiro Centro' },
        { label: 'Área Bruta', value: '2.640 m²', size: 'sm', color: '#003366' },
        { label: 'Terreno Total', value: '4.272 m²', size: 'sm', color: '#003366' },
    ];

    const roiScenarios = [
        {
            scenario: 'Arrendamento Conservador',
            monthlyRent: 'Sob Consulta',
            annualIncome: 'Sob Consulta',
            grossYield: '6.2%',
            netYield: '4.8%',
            description: 'Empresa de logística local',
            recommended: false,
        },
        {
            scenario: 'Arrendamento Otimista',
            monthlyRent: 'Sob Consulta',
            annualIncome: 'Sob Consulta',
            grossYield: '8.0%',
            netYield: '6.2%',
            description: 'Operador logístico nacional',
            recommended: true,
        },
    ];

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24"
            style={{ backgroundColor: '#ffffff', backgroundImage: 'radial-gradient(rgba(0,51,102,0.07) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        >
            <div className="max-w-5xl w-full">

                {/* ── Scroll Popup ── */}
                <AnimatePresence>
                    {showPopup && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setShowPopup(false)}
                                className="fixed inset-0 z-[110]"
                                style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
                            />
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 24 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 24 }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                                className="fixed inset-0 flex items-center justify-center z-[120] px-4 pointer-events-none"
                            >
                                <div
                                    className="rounded-3xl p-8 md:p-10 max-w-lg w-full relative pointer-events-auto"
                                    style={{ background: '#ffffff', boxShadow: '0 32px 80px rgba(0,0,0,0.25)', border: '1px solid #e5e7eb' }}
                                >
                                    <button
                                        onClick={() => setShowPopup(false)}
                                        className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                                        style={{ background: '#f3f4f6', color: '#6b7280' }}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <div className="text-center">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5" style={{ background: '#f0f9ff', border: '1px solid #bae6fd' }}>
                                            💬
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black mb-3" style={{ color: '#003366' }}>Quer ver o preço e mais fotos?</h3>
                                        <p className="text-base leading-relaxed mb-7" style={{ color: '#6b7280' }}>
                                            Para aceder ao dossier completo (preço, fotos, vídeos) e validar os dados de rentabilidade,{' '}
                                            <strong style={{ color: '#003366' }}>contacte-me agora</strong> via WhatsApp.
                                        </p>
                                        <a
                                            href={waLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => handleWhatsAppClick('Popup')}
                                            className="block w-full py-4 rounded-xl font-black text-lg text-white transition-all hover:scale-[1.02]"
                                            style={{ background: 'linear-gradient(135deg, #003366, #0055aa)', boxShadow: '0 8px 24px rgba(0,51,102,0.35)' }}
                                        >
                                            Ver Preço e Fotos via WhatsApp
                                        </a>
                                        <button
                                            onClick={() => setShowPopup(false)}
                                            className="block w-full py-3 mt-2 font-medium transition-colors"
                                            style={{ color: '#9ca3af' }}
                                        >
                                            Continuar a ler a análise
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* ── Page Content ── */}
                <div className="space-y-10 md:space-y-14">

                    {/* Header */}
                    <div className="text-center">
                        <motion.div {...fadeUp(0)}>
                            <span
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                                style={{ background: 'linear-gradient(135deg, #fffbeb, #fff7ed)', color: '#92400e', border: '1.5px solid #fcd34d' }}
                            >
                                💰 Oportunidade Exclusiva — Off-Market
                            </span>
                        </motion.div>
                        <motion.h1 {...fadeUp(0.07)} className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08]" style={{ color: '#003366' }}>
                            Análise Financeira Completa
                        </motion.h1>
                        <motion.p {...fadeUp(0.13)} className="mt-4 text-base md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6b7280' }}>
                            Todos os cenários, calculados. Para ver o preço de fecho e fotos exclusivas, solicite o dossier completo.
                        </motion.p>
                    </div>

                    {/* ── Main Financial Card ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.18, duration: 0.55, ease: 'easeOut' }}
                        className="rounded-3xl p-6 md:p-10"
                        style={{ background: '#ffffff', border: '1.5px solid #e5e7eb', boxShadow: '0 16px 60px rgba(0,0,0,0.08)' }}
                    >

                        {/* Price Comparison */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-8 pb-8" style={{ borderBottom: '1.5px solid #f3f4f6' }}>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#9ca3af' }}>Valor de Avaliação Bancária:</p>
                                <p className="text-3xl md:text-4xl font-black blur-sm select-none" style={{ color: '#d1d5db' }}>1.400.000€</p>
                                <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>Avaliação independente — Dezembro 2025</p>
                            </div>
                            <div className="md:text-right">
                                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#003366' }}>Preço de Fecho Negociado:</p>
                                <motion.div
                                    initial={{ scale: 0.85, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 200 }}
                                    className="text-2xl md:text-3xl font-black px-6 py-2 rounded-xl inline-block"
                                    style={{ background: '#003366', color: '#ffffff' }}
                                >
                                    Sob Consulta
                                </motion.div>
                                <div
                                    className="block md:inline-block mt-3 px-4 py-1.5 rounded-full text-xs font-bold"
                                    style={{ background: '#dcfce7', color: '#15803d', border: '1px solid #86efac' }}
                                >
                                    💰 Poupança imediata via portal: €100.000
                                </div>
                            </div>
                        </div>

                        {/* Breakdown */}
                        <h3 className="text-lg md:text-xl font-black mb-5" style={{ color: '#003366' }}>📊 Breakdown Financeiro</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                            {financialBreakdown.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center rounded-xl p-4"
                                    style={{ background: '#f8fafc', border: '1px solid #e5e7eb' }}
                                >
                                    <div>
                                        <p className="text-xs font-medium" style={{ color: '#6b7280' }}>{item.label}</p>
                                        {item.note && <p className="text-[10px] font-bold mt-0.5" style={{ color: '#16a34a' }}>{item.note}</p>}
                                    </div>
                                    <p
                                        className="font-black ml-3 text-right"
                                        style={{
                                            color: item.color,
                                            fontSize: item.size === 'lg' ? '1.5rem' : item.size === 'md' ? '1.2rem' : '1rem',
                                        }}
                                    >
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* ROI Scenarios */}
                        <h3 className="text-xl md:text-2xl font-black mb-6" style={{ color: '#003366' }}>📈 Cenários de Rentabilidade (ROI)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                            {roiScenarios.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                                    className="rounded-2xl p-6"
                                    style={{
                                        background: s.recommended ? 'linear-gradient(135deg, #f0fdf4, #ecfdf5)' : '#f8fafc',
                                        border: `2px solid ${s.recommended ? '#86efac' : '#e5e7eb'}`,
                                    }}
                                >
                                    {s.recommended && (
                                        <span
                                            className="inline-block text-[10px] font-black px-3 py-1 rounded-full text-white mb-3"
                                            style={{ background: '#16a34a' }}
                                        >
                                            ⭐ MAIS PROVÁVEL
                                        </span>
                                    )}
                                    <h4 className="font-black text-base mb-4" style={{ color: '#003366' }}>{s.scenario}</h4>
                                    <div className="space-y-2 mb-4">
                                        {[['Renda Mensal', s.monthlyRent], ['Receita Anual', s.annualIncome]].map(([l, val]) => (
                                            <div key={l} className="flex justify-between text-sm">
                                                <span style={{ color: '#6b7280' }}>{l}:</span>
                                                <strong style={{ color: '#003366' }}>{val}</strong>
                                            </div>
                                        ))}
                                        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '0.5rem' }}>
                                            {[['Yield Bruto', s.grossYield], ['Yield Líquido', s.netYield]].map(([l, val]) => (
                                                <div key={l} className="flex justify-between text-sm mt-1">
                                                    <span className="font-semibold" style={{ color: '#374151' }}>{l}:</span>
                                                    <strong className="text-lg" style={{ color: '#16a34a' }}>{val}</strong>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-xs italic" style={{ color: '#6b7280' }}>{s.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Future Value */}
                        <div
                            className="rounded-2xl p-5 md:p-7 mb-10"
                            style={{ background: '#eff6ff', borderLeft: '4px solid #003366' }}
                        >
                            <h4 className="font-black text-base md:text-lg mb-2 flex items-center gap-2" style={{ color: '#003366' }}>
                                <span className="text-2xl">🚀</span> Valorização Futura Projetada
                            </h4>
                            <p className="text-sm leading-relaxed mb-4" style={{ color: '#374151' }}>
                                Com a conclusão da <strong>ligação à A1</strong> (prevista para 2027-2028),
                                pavilhões industriais em Amoreira da Gândara podem ter uma valorização massiva.
                            </p>
                            <div className="rounded-xl p-4 flex flex-col sm:flex-row justify-between items-center gap-2" style={{ background: '#ffffff', border: '1px solid #bfdbfe' }}>
                                <span className="text-sm font-semibold" style={{ color: '#374151' }}>Valor Estimado em 2028:</span>
                                <span className="text-2xl md:text-3xl font-black" style={{ color: '#003366' }}>Sob Consulta</span>
                            </div>
                            <p className="text-xs font-bold mt-2 text-right" style={{ color: '#16a34a' }}>Ganho de capital potencial: Significativo</p>
                        </div>

                        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #e5e7eb, transparent)', marginBottom: '2rem' }} />

                        {/* Discount Banner */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65, duration: 0.55, ease: 'easeOut' }}
                            className="rounded-3xl p-6 md:p-10 mb-8 relative overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, #002244 0%, #003366 50%, #004488 100%)', boxShadow: '0 16px 60px rgba(0,51,102,0.4)' }}
                        >
                            {/* Decorative backgrounds */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #0066cc, transparent)' }} />
                            <div className="absolute -bottom-14 -left-14 w-48 h-48 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #FFCC00, transparent)' }} />

                            <div className="relative z-10 text-center mb-8">
                                <div
                                    className="inline-block px-5 py-2 rounded-full mb-4 text-xs font-black uppercase tracking-widest"
                                    style={{ background: '#FFCC00', color: '#003366' }}
                                >
                                    Oferta Exclusiva Limitada
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-white mb-3">Poupança Imediata de €100.000</h3>
                                <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
                                    Beneficie de condições únicas e poupe 100k ao contactar o proprietário diretamente através deste portal oficial.
                                </p>
                            </div>

                            {/* Price comparison */}
                            <div
                                className="relative z-10 rounded-2xl p-6 md:p-8 mb-8"
                                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
                            >
                                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-6">
                                    <div className="text-center">
                                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Preço de Mercado</p>
                                        <p className="text-3xl md:text-4xl font-black blur-sm select-none" style={{ color: 'rgba(255,255,255,0.4)' }}>VALOR X</p>
                                    </div>
                                    <svg className="hidden md:block w-8 h-8 shrink-0" fill="none" stroke="#FFCC00" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <div className="text-center">
                                        <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#FFCC00' }}>Preço com Acordo Direto</p>
                                        <p className="text-4xl md:text-5xl font-black" style={{ color: '#FFCC00' }}>Sob Consulta</p>
                                    </div>
                                </div>
                                <div className="text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.5rem' }}>
                                    <p className="text-xl md:text-2xl font-black text-white">
                                        POUPANÇA TOTAL: <span style={{ color: '#FFCC00' }}>€100.000</span>
                                    </p>
                                </div>
                            </div>

                            {/* 3 benefits */}
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3">
                                {[
                                    ['✓ Yield até 8%', 'ROI superior ao residencial'],
                                    ['✓ Escritura Imediata', 'Documentação 100% pronta'],
                                    ['✓ Arrendatário Garantido', 'Rede de operadores logísticos'],
                                ].map(([title, desc]) => (
                                    <div
                                        key={title}
                                        className="rounded-xl p-4 text-center"
                                        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                                    >
                                        <p className="font-black mb-1 text-sm" style={{ color: '#FFCC00' }}>{title}</p>
                                        <p className="text-white/70 text-xs">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleWhatsAppClick('Bottom')}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.75, duration: 0.45, ease: 'easeOut' }}
                            className="group flex w-full items-center justify-center gap-3 rounded-2xl py-5 md:py-6 font-black text-base md:text-xl text-white transition-all duration-300 hover:scale-[1.02]"
                            style={{
                                background: 'linear-gradient(135deg, #003366 0%, #0055aa 100%)',
                                boxShadow: '0 8px 32px -4px rgba(0,51,102,0.5)',
                            }}
                        >
                            <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>Falar com o Proprietário</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </motion.a>
                    </motion.div>

                    <p className="flex items-center justify-center gap-2 text-xs text-center" style={{ color: '#9ca3af' }}>
                        <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        Informação confidencial. Partilha restrita para investidores qualificados.
                    </p>

                </div>
            </div>
        </div>
    );
}
