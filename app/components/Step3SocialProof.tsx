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
                <div className="text-center space-y-8">
                    <div className="inline-block px-4 py-2 bg-[#F5F7FA] rounded-full text-sm font-medium text-[#003366]">
                        Análise de Mercado
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003366]">
                        Quem já se posicionou?
                    </h1>

                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        <span className="text-3xl font-bold text-[#003366]">85%</span> dos lotes premium nesta zona já foram adquiridos por empresas de Logística e Metalomecânica.
                    </p>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A janela de oportunidade para entrada a preços de 2024 está a fechar.
                    </p>

                    {/* Lots Grid */}
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
                        {lots.map((lot, index) => (
                            <motion.div
                                key={lot.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                                className={`aspect-square rounded-lg flex flex-col items-center justify-center font-semibold text-sm transition-all ${lot.reserved
                                    ? lot.company
                                        ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-xl border-2 border-yellow-700'
                                        : 'bg-[#003366] text-white shadow-lg'
                                    : 'bg-[#F5F7FA] text-[#003366] border-2 border-[#003366] border-dashed'
                                    }`}
                            >
                                {lot.company ? (
                                    <>
                                        <span className="text-xs mb-1">RESERVADO</span>
                                        <span className="text-lg font-bold">{lot.company}</span>
                                    </>
                                ) : (
                                    <span>{lot.reserved ? 'RESERVADO' : 'DISPONÍVEL'}</span>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Heatmap - CSS Based Occupation Visualization */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl mt-12">
                        <h3 className="text-xl font-bold text-[#003366] mb-4 text-center">
                            🗺️ Mapa de Ocupação - Zona Industrial Amoreira da Gândara
                        </h3>
                        <p className="text-sm text-gray-600 text-center mb-6">
                            Visualização da densidade de ocupação por setor
                        </p>

                        <div className="grid grid-cols-8 gap-2 max-w-2xl mx-auto">
                            {Array.from({ length: 64 }, (_, i) => {
                                const isHighDensity = i < 54; // 85% occupied
                                const isMediumDensity = i >= 54 && i < 60;
                                const isAvailable = i >= 60;

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.01 * i }}
                                        className={`aspect-square rounded-sm transition-all hover:scale-110 ${isHighDensity
                                            ? 'bg-red-500 hover:bg-red-600'
                                            : isMediumDensity
                                                ? 'bg-orange-400 hover:bg-orange-500'
                                                : 'bg-green-400 hover:bg-green-500'
                                            }`}
                                        title={
                                            isHighDensity
                                                ? 'Ocupado'
                                                : isMediumDensity
                                                    ? 'Ocupação Média'
                                                    : 'Disponível'
                                        }
                                    />
                                );
                            })}
                        </div>

                        <div className="flex items-center justify-center gap-6 mt-6 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-red-500 rounded"></div>
                                <span className="text-gray-700">Ocupado (85%)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-orange-400 rounded"></div>
                                <span className="text-gray-700">Ocupação Média (9%)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-green-400 rounded"></div>
                                <span className="text-gray-700">Disponível (6%)</span>
                            </div>
                        </div>

                        <p className="text-xs text-gray-500 text-center mt-4">
                            Fonte: Levantamento de mercado - Zona Industrial Amoreira da Gândara
                        </p>
                    </div>
                </div>

                {/* CTA Button at the very end */}
                <div className="mt-12 text-center">
                    <button
                        onClick={onNext}
                        className="group px-8 py-5 bg-[#003366] text-white font-bold text-lg rounded-xl hover:bg-[#004488] transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
                    >
                        <span>Ver Oportunidade Disponível (Off-Market)</span>
                        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
