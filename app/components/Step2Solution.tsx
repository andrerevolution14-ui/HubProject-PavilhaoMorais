'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Step2Props {
    onNext: () => void;
}

export default function Step2Solution({ onNext }: Step2Props) {
    const locationAdvantages = [
        {
            icon: "📍",
            title: "Acesso EN1 + IC2",
            description: "Ligação direta às principais vias da Região Centro",
            impact: "Reduz custos logísticos em 25-30%"
        },
        {
            icon: "🛣️",
            title: "Futura Ligação A1",
            description: "Acesso facilitado à A1 em desenvolvimento",
            impact: "Valorização projetada: +40% pós-conclusão"
        },
        {
            icon: "🏭",
            title: "Zona Industrial em Expansão",
            description: "Cluster de empresas logísticas e metalomecânicas",
            impact: "Procura crescente por arrendamento"
        }
    ];

    const comparativeData = [
        { location: 'Aveiro Centro', pricePerM2: '€850/m²', availability: 'Esgotado', waitTime: '12-18 meses' },
        { location: 'Oia/Oliverinha do Bairro', pricePerM2: '€680/m²', availability: 'Crítico', waitTime: '8-12 meses' },
        { location: 'Amoreira da Gândara', pricePerM2: '€511/m²', availability: '✓ Disponível', waitTime: 'Imediato', highlight: true }
    ];

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.1 }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1, y: 0, scale: 1,
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
                <div className="space-y-10 md:space-y-16">
                    <motion.div variants={itemVariants} className="text-left max-w-4xl">
                        <div className="inline-block px-3 py-1.5 bg-blue-50 text-[#003366] rounded-full text-xs md:text-sm font-bold uppercase tracking-wider mb-6">
                            🏁 A Alternativa Inteligente
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-[#003366] leading-tight mb-6">
                            A Solução Está a <br />
                            <span className="text-blue-600">15 Minutos de Aveiro.</span>
                        </h2>
                        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed font-medium">
                            <strong className="text-[#003366]">Amoreira da Gândara</strong> dá-lhe acesso ao mesmo corredor logístico, às mesmas empresas, à mesma procura... mas poupa-lhe <strong className="text-green-600">€895.000</strong> na aquisição.
                        </p>
                    </motion.div>

                    {/* Location Advantages Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {locationAdvantages.map((adv, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-50 flex flex-col items-center text-center"
                            >
                                <div className="text-5xl mb-6 bg-blue-50 w-20 h-20 flex items-center justify-center rounded-2xl shadow-inner">
                                    {adv.icon}
                                </div>
                                <h3 className="text-xl font-black text-[#003366] mb-3">{adv.title}</h3>
                                <p className="text-gray-600 mb-4">{adv.description}</p>
                                <p className="mt-auto font-bold text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                                    {adv.impact}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Comparative Table */}
                    <motion.div variants={itemVariants} className="bg-[#003366] text-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/tech-grid-light.svg')] opacity-5 pointer-events-none" />
                        <h3 className="text-2xl md:text-3xl font-black mb-8 relative z-10">Análise Comparativa de Custo/m²</h3>

                        <div className="overflow-x-auto relative z-10">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="py-4 px-4 text-sm font-bold text-blue-200 uppercase tracking-widest">Localização</th>
                                        <th className="py-4 px-4 text-sm font-bold text-blue-200 uppercase tracking-widest text-center">Preço/m²</th>
                                        <th className="py-4 px-4 text-sm font-bold text-blue-200 uppercase tracking-widest text-center">Estado</th>
                                        <th className="py-4 px-4 text-sm font-bold text-blue-200 uppercase tracking-widest text-center">Tempo de Espera</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparativeData.map((row, index) => (
                                        <tr key={index} className={`border-b border-white/5 transition-colors ${row.highlight ? 'bg-white/10' : ''}`}>
                                            <td className="py-6 px-4 font-bold text-lg">{row.location}</td>
                                            <td className={`py-6 px-4 text-center font-black text-xl ${row.highlight ? 'text-green-400' : 'text-white'}`}>{row.pricePerM2}</td>
                                            <td className="py-6 px-4 text-center">
                                                <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase ${row.availability === '✓ Disponível' ? 'bg-green-500 text-white' : 'bg-red-500/20 text-red-300'
                                                    }`}>
                                                    {row.availability}
                                                </span>
                                            </td>
                                            <td className="py-6 px-4 text-center text-sm font-medium opacity-80">{row.waitTime}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <p className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-1">Potencial de Poupança Imediata</p>
                                <p className="text-3xl md:text-5xl font-black text-green-400">€339/m² <span className="text-xl md:text-2xl text-white opacity-60">vs Aveiro Centro</span></p>
                            </div>
                            <button
                                onClick={onNext}
                                className="w-full md:w-auto bg-white text-[#003366] px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-green-400 hover:text-white cursor-pointer"
                            >
                                Validar ROI do Ativo →
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
