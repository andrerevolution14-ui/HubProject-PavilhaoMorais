'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Step3Props {
    onNext: () => void;
}

export default function Step3SocialProof({ onNext }: Step3Props) {
    const [heatIntensity, setHeatIntensity] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHeatIntensity(85);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const lots = [
        { id: 1, reserved: true, company: 'IKEA' },
        { id: 2, reserved: true },
        { id: 3, reserved: true },
        { id: 4, reserved: true },
        { id: 5, reserved: true },
        { id: 6, reserved: true },
        { id: 7, reserved: true },
        { id: 8, reserved: true },
        { id: 9, reserved: true },
        { id: 10, reserved: true },
        { id: 11, reserved: false },
        { id: 12, reserved: false }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-isometric-light flex items-center justify-center px-4 py-12"
        >
            <div className="max-w-6xl w-full">
                <div className="text-center space-y-6 md:space-y-8">
                    <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-[#F5F7FA] rounded-full text-xs md:text-sm font-medium text-[#003366]">
                        Análise de Mercado
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#003366] leading-tight">
                        Quem já se posicionou?
                    </h1>

                    <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        <span className="text-2xl md:text-3xl font-bold text-[#003366]">85%</span> dos lotes premium nesta zona já foram adquiridos por empresas de Logística e Metalomecânica.
                    </p>

                    <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                        A janela de oportunidade para entrada a preços de 2024 está a fechar.
                    </p>

                    {/* Lots Grid */}
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12 max-w-4xl mx-auto">
                        {lots.map((lot, index) => (
                            <motion.div
                                key={lot.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                                className={`aspect-square rounded-lg flex flex-col items-center justify-center font-semibold text-xs md:text-sm transition-all overflow-hidden ${lot.reserved
                                    ? lot.company
                                        ? 'bg-[#FFCC00] text-[#003399] shadow-xl border-2 border-[#003399]'
                                        : 'bg-[#003366] text-white shadow-lg'
                                    : 'bg-[#F5F7FA] text-[#003366] border-2 border-[#003366] border-dashed'
                                    }`}
                            >
                                {lot.company === 'IKEA' ? (
                                    <div className="flex flex-col items-center px-1">
                                        <div className="w-full max-w-[50px] md:max-w-[70px] bg-[#003399] rounded-full p-1 mb-1">
                                            <svg viewBox="0 0 24 12" className="w-full h-auto fill-white">
                                                <path d="M0 6c0-3.314 5.373-6 12-6s12 2.686 12 6-5.373 6-12 6S0 9.314 0 6z" />
                                                <text x="12" y="8.5" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#FFCC00" style={{ fontFamily: 'Arial, sans-serif' }}>IKEA</text>
                                            </svg>
                                        </div>
                                        <span className="text-[8px] md:text-[10px] font-black text-[#003399]">RESERVADO</span>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] md:text-xs mb-0.5 md:mb-1">{lot.reserved ? 'RESERVADO' : 'LOTE'}</span>
                                        <span className="text-[9px] md:text-[11px] opacity-70">Pavilhão {lot.id}</span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Heatmap - CSS Based Occupation Visualization */}
                    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl mt-6 md:mt-12 border border-gray-100">
                        <h3 className="text-lg md:text-xl font-bold text-[#003366] mb-3 md:mb-4 text-center">
                            📍 Taxa de Ocupação da Zona Industrial
                        </h3>

                        {/* Heatmap Bar */}
                        <div className="relative h-12 md:h-16 bg-gray-200 rounded-full overflow-hidden mb-4 md:mb-6 border border-gray-300">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "85%" }}
                                transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                                className="absolute inset-y-0 left-0 bg-[#003366] rounded-full z-0"
                                style={{
                                    background: 'linear-gradient(90deg, #22c55e 0%, #eab308 50%, #dc2626 100%)'
                                }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <span className="text-lg md:text-2xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                    85% OCUPADO
                                </span>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-[10px] md:text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 md:w-5 md:h-5 bg-green-500 rounded shadow-sm"></div>
                                <span className="text-gray-700 font-medium">0-30% (Disponível)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 md:w-5 md:h-5 bg-yellow-500 rounded shadow-sm"></div>
                                <span className="text-gray-700 font-medium">30-70% (Moderado)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 md:w-5 md:h-5 bg-red-600 rounded shadow-sm"></div>
                                <span className="text-gray-700 font-medium">70-100% (Saturado)</span>
                            </div>
                        </div>

                        <div className="mt-4 md:mt-6 p-4 bg-red-50 border-l-4 border-red-600 rounded shadow-sm">
                            <p className="text-xs md:text-base text-gray-700 leading-relaxed text-left md:text-center">
                                <strong className="text-red-700">Alerta de Mercado:</strong> Com 85% de ocupação,
                                esta zona está oficialmente em <strong>saturação crítica</strong>.
                                Apenas <strong>2 pavilhões premium</strong> permanecem para investimento.
                            </p>
                        </div>
                    </div>

                    {/* CTA Button at the very end */}
                    <div className="mt-8 md:mt-12 text-center px-4">
                        <button
                            onClick={onNext}
                            className="group w-full md:w-auto px-6 md:px-8 py-4 md:py-5 bg-[#1a365d] text-white font-bold text-base md:text-lg rounded-xl hover:bg-[#004488] transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2 md:gap-3"
                        >
                            <span>Ver Oportunidade Disponível (Off-Market)</span>
                            <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
