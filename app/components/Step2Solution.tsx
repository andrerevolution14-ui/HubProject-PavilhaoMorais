'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Step2Props {
    onNext: () => void;
}

export default function Step2Solution({ onNext }: Step2Props) {
    const locationAdvantages = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            ),
            title: "Acesso EN1 + IC2",
            description: "Ligação direta às principais vias da Região Centro",
            impact: "Reduz custos logísticos em 25-30%"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Futura Ligação A1",
            description: "Acesso facilitado à A1 em desenvolvimento",
            impact: "Valorização projetada: +40% pós-conclusão"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
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

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-premium-white flex items-center justify-center px-4 py-12 md:py-20"
        >
            <div className="max-w-6xl w-full">
                <div className="space-y-6 md:space-y-8">
                    <div className="text-left">
                        <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-green-50 border border-green-200 rounded-full text-xs md:text-sm font-semibold text-green-700 mb-4 md:mb-6">
                            ✅ A Alternativa Inteligente
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#003366] mb-4 md:mb-6 leading-tight">
                            Quer Aveiro?<br />
                            <span className="text-green-600">Damos-lhe Algo Melhor.</span>
                        </h1>

                        <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-4">
                            <strong className="text-[#003366]">Amoreira da Gândara</strong> está a <strong>15 minutos de Aveiro</strong>.
                            Dá-lhe acesso ao mesmo corredor logístico, às mesmas empresas, à mesma procura...
                            mas poupa-lhe <strong className="text-green-600">€895.000</strong>.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
                            <p className="text-base md:text-lg font-bold text-[#003366] mb-2 md:mb-3">
                                🎯 Porque É Que Isto É MELHOR Que Aveiro Centro:
                            </p>
                            <ul className="space-y-2 text-sm md:text-base text-gray-700">
                                <li className="flex items-start gap-2 md:gap-3">
                                    <span className="text-green-600 text-lg md:text-xl font-bold flex-shrink-0">1.</span>
                                    <span><strong>Está disponível AGORA</strong> — não precisa de esperar 12-18 meses</span>
                                </li>
                                <li className="flex items-start gap-2 md:gap-3">
                                    <span className="text-green-600 text-lg md:text-xl font-bold flex-shrink-0">2.</span>
                                    <span><strong>Poupa €339/m²</strong> vs. Aveiro Centro (€511 vs €850)</span>
                                </li>
                                <li className="flex items-start gap-2 md:gap-3">
                                    <span className="text-green-600 text-lg md:text-xl font-bold flex-shrink-0">3.</span>
                                    <span><strong>Mesma procura logística</strong> — empresas querem estar perto da A1/IC2</span>
                                </li>
                                <li className="flex items-start gap-2 md:gap-3">
                                    <span className="text-green-600 text-lg md:text-xl font-bold flex-shrink-0">4.</span>
                                    <span><strong>Valorização futura garantida</strong> — nova ligação à A1 em construção</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Aerial Photo */}
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/industrial-zone.png"
                            alt="Vista aérea da Zona Industrial de Amoreira da Gândara"
                            width={1200}
                            height={675}
                            className="w-full h-auto"
                            priority
                        />
                        <div className="bg-white p-4 text-center">
                            <p className="text-sm text-gray-600">
                                <strong className="text-[#003366]">Vista aérea real</strong> da Zona Industrial de Amoreira da Gândara —
                                infraestruturas modernas, amplo espaço, e acesso privilegiado.
                            </p>
                        </div>
                    </div>

                    {/* Location Advantages */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#003366] mb-6 text-left">🚀 Vantagens Competitivas da Localização</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {locationAdvantages.map((advantage, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left"
                                >
                                    <div className="text-[#003366] mb-4">
                                        {advantage.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#003366] mb-2">
                                        {advantage.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        {advantage.description}
                                    </p>
                                    <div className="pt-3 border-t border-gray-100">
                                        <p className="text-xs font-semibold text-green-600">
                                            💰 {advantage.impact}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Comparative Analysis - RESPONSIVE TABLE */}
                    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl">
                        <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 md:mb-6 text-left">📊 Análise Comparativa de Mercado</h3>

                        {/* Mobile: Cards */}
                        <div className="md:hidden space-y-3">
                            {comparativeData.map((row, index) => (
                                <div
                                    key={index}
                                    className={`rounded-lg p-3 border-2 ${row.highlight
                                        ? 'bg-green-50 border-green-300'
                                        : 'bg-gray-50 border-gray-200'
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-bold text-[#003366] text-base">{row.location}</h4>
                                        {row.highlight && (
                                            <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded font-semibold whitespace-nowrap">
                                                RECOMENDADO
                                            </span>
                                        )}
                                    </div>
                                    <div className="space-y-1.5 text-xs">
                                        <div className="flex justify-between gap-2">
                                            <span className="text-gray-600">Preço/m²:</span>
                                            <span className="font-semibold text-gray-900">{row.pricePerM2}</span>
                                        </div>
                                        <div className="flex justify-between gap-2">
                                            <span className="text-gray-600">Disponibilidade:</span>
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap ${row.availability === '✓ Disponível'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-700'
                                                }`}>
                                                {row.availability}
                                            </span>
                                        </div>
                                        <div className="flex justify-between gap-2">
                                            <span className="text-gray-600">Tempo de Espera:</span>
                                            <span className="font-semibold text-gray-900">{row.waitTime}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop: Table */}
                        <div className="hidden md:block">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b-2 border-gray-200">
                                        <th className="pb-3 text-sm font-semibold text-gray-600 pr-4">Localização</th>
                                        <th className="pb-3 text-sm font-semibold text-gray-600 pr-4">Preço/m²</th>
                                        <th className="pb-3 text-sm font-semibold text-gray-600 pr-4">Disponibilidade</th>
                                        <th className="pb-3 text-sm font-semibold text-gray-600">Tempo de Espera</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparativeData.map((row, index) => (
                                        <tr
                                            key={index}
                                            className={`border-b border-gray-100 ${row.highlight ? 'bg-green-50' : ''}`}
                                        >
                                            <td className="py-4 font-semibold text-[#003366] pr-4">
                                                {row.location}
                                                {row.highlight && (
                                                    <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded">
                                                        RECOMENDADO
                                                    </span>
                                                )}
                                            </td>
                                            <td className="py-4 text-gray-700 pr-4">{row.pricePerM2}</td>
                                            <td className="py-4 pr-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${row.availability === '✓ Disponível'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-red-100 text-red-700'
                                                    }`}>
                                                    {row.availability}
                                                </span>
                                            </td>
                                            <td className="py-4 text-gray-700">{row.waitTime}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 bg-blue-50 border-l-4 border-[#003366] p-4 rounded text-left">
                            <p className="text-sm text-gray-700 leading-relaxed">
                                <strong className="text-[#003366]">Vantagem Competitiva:</strong> Ao preço de €511/m², está a poupar <strong>€339/m²</strong> vs. Aveiro Centro.
                                Num pavilhão de 2.640m², isso representa uma poupança de <strong>€894.960</strong> — capital que pode reinvestir ou usar para melhorias.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Button at the very end */}
                <div className="mt-8 md:mt-12 text-center px-4">
                    <button
                        onClick={onNext}
                        className="group relative w-full md:w-auto px-8 md:px-12 py-5 md:py-6 bg-gradient-to-r from-[#003366] to-[#0055aa] text-white font-black text-base md:text-xl rounded-2xl shadow-2xl hover:shadow-[0_20px_60px_-10px_rgba(0,51,102,0.6)] hover:scale-[1.03] transition-all duration-300 inline-flex items-center justify-center gap-3 overflow-hidden border border-white/10"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        <span>Ver Quem Já Investiu Aqui</span>
                        <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
