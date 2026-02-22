'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Step4Props {
    onNext: () => void;
}

export default function Step4Asset({ onNext }: Step4Props) {
    const technicalSpecs = [
        { label: 'Área Bruta', value: '2.640 m²', icon: '📐', detail: '2.530 m² úteis' },
        { label: 'Terreno Total', value: '4.272 m²', icon: '🏗️', detail: 'Amplo espaço exterior' },
        { label: 'Energia (PT)', value: '200-300A', icon: '⚡', detail: 'PT dedicado (Expansível)' },
        { label: 'Licenciamento', value: 'Classe B', icon: '📜', detail: 'Indústria Aprovada' }
    ];

    const floorDistribution = [
        {
            floor: 'Rés-do-Chão (Operacional)',
            features: [
                '2 pavilhões amplos conectados',
                '2 balneários + Refeitório',
                'Acesso a pesados facilitado',
                'Pé-direito industrial padrão'
            ],
            icon: '🏭'
        },
        {
            floor: '1º Andar (Administrativo)',
            features: [
                'Escritórios equipados',
                'Salas de reuniões e arquivo',
                '2 casas de banho dedicadas',
                'Luz natural em todo o piso'
            ],
            icon: '🏢'
        }
    ];

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, scale: 0.98, y: 20 },
        visible: {
            opacity: 1, scale: 1, y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen bg-tech-grid flex items-center justify-center px-4 py-12 md:py-20">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl w-full"
            >
                <div className="space-y-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-white rounded-full text-xs md:text-sm font-black text-[#003366] shadow-md mb-8 ring-1 ring-gray-100">
                            🔍 ANÁLISE TÉCNICA DO ATIVO
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-black text-[#003366] mb-6 leading-tight">
                            Pavilhão N333-1 <br />
                            <span className="text-blue-600">Amoreira da Gândara.</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg md:text-2xl text-gray-700 leading-relaxed font-medium">
                            Um ativo industrial de <strong className="text-[#003366]">qualidade superior</strong>, pronto a operar imediatamente e focado em logística moderna.
                        </motion.p>
                    </div>

                    {/* Main Image with Reveal Effect */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl relative group"
                    >
                        <Image
                            src="/warehouse-interior.jpg"
                            alt="Interior do Pavilhão Industrial"
                            width={1200}
                            height={800}
                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                            <p className="text-xl md:text-3xl font-black mb-2 flex items-center gap-3">
                                <span className="bg-yellow-400 text-[#003366] p-2 rounded-lg text-lg">📸</span>
                                Vista Real do Pavilhão
                            </p>
                            <p className="text-sm md:text-lg opacity-90 font-bold tracking-wide">
                                2.640m² de área útil • Segurança contra incêndios • Pronto a operar
                            </p>
                        </div>
                    </motion.div>

                    {/* Technical Specs & Distribution */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Specs Grid */}
                        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 md:gap-6">
                            {technicalSpecs.map((spec, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5, borderColor: '#0055aa' }}
                                    className="bg-white p-6 rounded-3xl shadow-xl border-2 border-transparent transition-all"
                                >
                                    <span className="text-4xl block mb-4">{spec.icon}</span>
                                    <p className="text-xs text-gray-400 font-black uppercase tracking-widest mb-1">{spec.label}</p>
                                    <p className="text-xl md:text-2xl font-black text-[#003366]">{spec.value}</p>
                                    <p className="text-[10px] md:text-xs text-gray-500 font-bold mt-1">{spec.detail}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Distribution Cards */}
                        <div className="space-y-6">
                            {floorDistribution.map((floor, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-[#003366] rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/10 transition-colors" />
                                    <h4 className="text-xl md:text-2xl font-black mb-6 flex items-center gap-4">
                                        <span className="bg-white/10 p-3 rounded-2xl text-3xl">{floor.icon}</span>
                                        {floor.floor}
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {floor.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm md:text-base font-bold text-blue-100">
                                                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Final Rational Banner */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-yellow-400 rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 border-4 border-[#003366]/5"
                    >
                        <div className="text-7xl md:text-8xl animate-bounce drop-shadow-lg">💡</div>
                        <div className="text-left flex-1">
                            <h4 className="text-2xl md:text-4xl font-black text-[#003366] mb-4">A Lógica do Investimento</h4>
                            <p className="text-lg md:text-2xl text-[#003366] font-bold leading-relaxed opacity-90">
                                A €511/m², este ativo está <span className="underline decoration-4 decoration-[#003366]/20">40% abaixo da média de Aveiro</span>.
                                Com a futura ligação à A1, o potencial de valorização é de centenas de milhares de euros só pelo terreno e localização.
                            </p>
                        </div>
                        <button
                            onClick={onNext}
                            className="w-full md:w-auto bg-[#003366] text-white px-12 py-6 rounded-[1.5rem] font-black text-xl md:text-2xl shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                        >
                            Ver Proposta Financeira →
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
