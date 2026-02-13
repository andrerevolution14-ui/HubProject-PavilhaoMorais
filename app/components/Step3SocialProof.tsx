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
            className="min-h-screen bg-white flex items-center justify-center px-4 py-12"
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
                                className={`aspect-square rounded-lg flex flex-col items-center justify-center font-semibold text-xs md:text-sm transition-all ${lot.reserved
                                    ? lot.company
                                        ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-xl border-2 border-yellow-700'
                                        : 'bg-[#003366] text-white shadow-lg'
                                    : 'bg-[#F5F7FA] text-[#003366] border-2 border-[#003366] border-dashed'
                                    }`}
                            >
                                {lot.company ? (
                                    <>
                                        <span className="text-[10px] md:text-xs mb-0.5 md:mb-1">RESERVADO</span>
                                        <span className="text-sm md:text-lg font-bold">{lot.company}</span>
                                    </>
                                ) : (
                                    <span>{lot.reserved ? 'RESERVADO' : 'DISPONÍVEL'}</span>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Heatmap - CSS Based Occupation Visualization */}
                    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl mt-6 md:mt-12">
                        <h3 className="text-lg md:text-xl font-bold text-[#003366] mb-3 md:mb-4 text-center">
                            📍 Taxa de Ocupação da Zona Industrial
                        </h3>

                        {/* Heatmap Bar */}
                        <div className="relative h-12 md:h-16 bg-gray-200 rounded-full overflow-hidden mb-4 md:mb-6">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${heatIntensity}%` }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-yellow-500 to-red-600 rounded-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-base md:text-xl font-bold text-white drop-shadow-lg z-10">
                                    {heatIntensity}% OCUPADO
                                </span>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 text-xs md:text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded"></div>
                                <span className="text-gray-700">0-30% (Disponível)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 md:w-5 md:h-5 bg-yellow-500 rounded"></div>
                                <span className="text-gray-700">30-70% (Moderado)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 md:w-5 md:h-5 bg-red-600 rounded"></div>
                                <span className="text-gray-700">70-100% (Saturado)</span>
                            </div>
                        </div>

                        <div className="mt-4 md:mt-6 p-3 md:p-4 bg-red-50 border-l-4 border-red-600 rounded">
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                <strong className="text-red-700">Alerta de Mercado:</strong> Com 85% de ocupação,
                                esta zona está oficialmente em <strong>saturação crítica</strong>.
                                Apenas <strong>2 lotes</strong> permanecem disponíveis para investimento direto.
                            </p>
                        </div>
                    </div>

                    {/* CTA Button at the very end */}
                    <div className="mt-8 md:mt-12 text-center px-4">
                        <button
                            onClick={onNext}
                            className="group w-full md:w-auto px-6 md:px-8 py-4 md:py-5 bg-[#003366] text-white font-bold text-base md:text-lg rounded-xl hover:bg-[#004488] transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2 md:gap-3"
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
