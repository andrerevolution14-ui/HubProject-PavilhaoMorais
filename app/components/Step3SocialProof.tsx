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

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, scale: 0.6 },
        visible: {
            opacity: 1, scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen bg-premium-white flex items-center justify-center px-4 py-12 md:py-20">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl w-full"
            >
                <div className="text-center space-y-8 md:space-y-12">
                    <motion.div variants={itemVariants} className="space-y-4">
                        <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-xs md:text-sm font-black uppercase tracking-widest shadow-sm">
                            🔥 ZONA DE ALTA PROCURA
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-[#003366] leading-tight">
                            Quem já se <br />
                            <span className="text-blue-600">posicionou?</span>
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Thermal Map Logic */}
                        <motion.div variants={itemVariants} className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-tech-grid opacity-20" />
                            <div className="relative z-10 space-y-8 text-left">
                                <div>
                                    <p className="text-lg md:text-2xl text-gray-700 font-medium leading-relaxed mb-4">
                                        <span className="text-3xl md:text-5xl font-black text-[#003366]">{heatIntensity}%</span> dos lotes premium nesta zona já foram adquiridos por gigantes da Logística.
                                    </p>
                                    <div className="w-full bg-gray-100 h-6 rounded-full overflow-hidden shadow-inner p-1">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${heatIntensity}%` }}
                                            transition={{ duration: 2, ease: "circOut" }}
                                            className="h-full bg-gradient-to-r from-orange-400 to-red-600 rounded-full shadow-lg"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-sm font-black text-[#003366] uppercase tracking-widest opacity-60">Status de Ocupação</p>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full bg-red-500 shadow-sm" />
                                            <span className="text-xs font-bold text-gray-600">RESERVADO</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full bg-green-500 shadow-sm" />
                                            <span className="text-xs font-bold text-gray-600">DISPONÍVEL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Interactive Grid */}
                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4 p-4 md:p-8 bg-[#003366] rounded-[3rem] shadow-2xl"
                        >
                            {lots.map((lot) => (
                                <motion.div
                                    key={lot.id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1, rotate: 2 }}
                                    className={`aspect-square rounded-2xl flex items-center justify-center text-sm font-black transition-all ${lot.reserved
                                        ? 'bg-red-500/20 text-red-500 border-2 border-red-500/30 shadow-inner'
                                        : 'bg-green-500 text-white shadow-xl shadow-green-500/30 border-2 border-green-400'
                                        }`}
                                >
                                    {lot.company || (lot.reserved ? 'LOTE' : 'OK')}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="pt-8">
                        <button
                            onClick={onNext}
                            className="group bg-[#003366] text-white px-12 py-7 rounded-2xl font-black text-xl md:text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4 mx-auto cursor-pointer"
                        >
                            <span>Ver Detalhes do Pavilhão Disponível</span>
                            <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
