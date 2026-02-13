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
        { label: 'Ano Construção', value: '2006', icon: '📅', detail: 'Segunda mão / Bom estado' },
        { label: 'Casas de Banho', value: '4 WC', icon: '🚻', detail: 'Distribuídos por pisos' }
    ];

    const floorDistribution = [
        {
            floor: 'Rés-do-Chão',
            features: [
                '2 amplos pavilhões conectados',
                '2 balneários completos',
                'Refeitório equipado',
                'Movimentação de viaturas pesadas'
            ]
        },
        {
            floor: '1º Andar',
            features: [
                '2 salas/escritórios',
                'Espaço amplo para trabalho administrativo',
                '2 casas de banho',
                'Sala de arquivo'
            ]
        }
    ];

    const keyHighlights = [
        { icon: '✓', text: 'Licença para Indústria aprovada', color: 'green' },
        { icon: '✓', text: 'Pronto a escriturar', color: 'green' },
        { icon: '✓', text: 'Certificado energético: Propriedade isenta', color: 'blue' },
        { icon: '✓', text: 'Construção sólida com boas áreas', color: 'blue' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-4 py-12"
        >
            <div className="max-w-6xl w-full">
                <div className="space-y-6 md:space-y-8">
                    <div className="text-center">
                        <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-full text-xs md:text-sm font-medium text-[#003366] shadow-sm mb-4 md:mb-6">
                            📋 Análise Técnica Completa
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#003366] mb-4 leading-tight">
                            Pavilhão Industrial<br />N333-1, Amoreira da Gândara
                        </h1>

                        <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto mb-6 md:mb-8">
                            Um ativo industrial <strong>pronto a gerar rendimento</strong>, com licenciamento aprovado e infraestruturas de qualidade superior.
                        </p>

                        {/* ÚNICA SOLUÇÃO Banner */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 border-2 border-orange-400 rounded-xl md:rounded-2xl p-4 md:p-8 max-w-4xl mx-auto mb-6 md:mb-8 shadow-xl"
                        >
                            <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 text-center">
                                <span className="text-2xl md:text-4xl">🎯</span>
                                <h2 className="text-lg md:text-3xl font-bold text-[#003366] uppercase">
                                    A ÚNICA SOLUÇÃO DISPONÍVEL
                                </h2>
                                <span className="text-2xl md:text-4xl">🎯</span>
                            </div>
                            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                                Este é <strong className="text-[#003366]">o último pavilhão industrial premium</strong> disponível em Amoreira da Gândara
                                com <strong>licenciamento aprovado</strong> e <strong>pronto a escriturar</strong>.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-left">
                                <div className="bg-white/80 rounded-lg p-3 md:p-4 border border-orange-200">
                                    <p className="text-sm font-semibold text-orange-700 mb-1">✓ Disponibilidade</p>
                                    <p className="text-xs text-gray-700">Todos os outros lotes: <strong>RESERVADOS</strong></p>
                                </div>
                                <div className="bg-white/80 rounded-lg p-3 md:p-4 border border-orange-200">
                                    <p className="text-sm font-semibold text-orange-700 mb-1">✓ Timing</p>
                                    <p className="text-xs text-gray-700">Próxima oportunidade: <strong>12-18 meses</strong></p>
                                </div>
                                <div className="bg-white/80 rounded-lg p-3 md:p-4 border border-orange-200">
                                    <p className="text-sm font-semibold text-orange-700 mb-1">✓ Preço</p>
                                    <p className="text-xs text-gray-700">Futuras construções: <strong>+30-40% mais caras</strong></p>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-6 pt-4 border-t-2 border-orange-200">
                                <p className="text-xs md:text-sm font-bold text-[#003366] text-center">
                                    💎 Para completar este investimento da melhor forma, <span className="text-orange-600">esta é a sua única opção hoje</span>.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Real Warehouse Photos */}
                    <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/warehouse-interior.jpg"
                            alt="Interior do Pavilhão Industrial N333-1"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            priority
                        />
                        <div className="p-4 md:p-6 bg-gradient-to-r from-[#003366] to-[#004488] text-white">
                            <p className="text-center font-semibold text-sm md:text-base leading-snug">
                                <span className="text-xl md:text-yellow-300">📸</span> Vista interior real do pavilhão —
                                <strong> 2.640m² de área útil</strong>, pé-direito alto, iluminação natural, pronto a operar
                            </p>
                        </div>
                    </div>

                    {/* Premium Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 lg:p-12 shadow-2xl"
                    >
                        {/* Technical Grid */}
                        <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 md:mb-6">🔍 Especificações Técnicas</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                            {technicalSpecs.map((spec, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="bg-[#F5F7FA] rounded-xl p-4 md:p-6 text-left hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-3xl md:text-4xl">{spec.icon}</span>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs md:text-sm text-gray-600 font-medium mb-0.5 md:mb-1">{spec.label}</p>
                                            <p className="text-xl md:text-2xl font-bold text-[#003366] mb-0.5 md:mb-1">{spec.value}</p>
                                            <p className="text-[10px] md:text-xs text-gray-500">{spec.detail}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Floor Distribution */}
                        <div className="border-t-2 border-gray-100 pt-6 md:pt-8 mb-6 md:mb-8">
                            <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 md:mb-6">🏢 Distribuição dos Espaços</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {floorDistribution.map((floor, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        className="bg-gradient-to-br from-[#003366] to-[#004488] rounded-xl p-4 md:p-6 text-white"
                                    >
                                        <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2">
                                            <span className="text-xl md:text-2xl">{index === 0 ? '🏭' : '🏢'}</span>
                                            {floor.floor}
                                        </h4>
                                        <ul className="space-y-1.5 md:space-y-2">
                                            {floor.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                                                    <span className="text-yellow-300 mt-0.5 flex-shrink-0">▸</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Key Highlights */}
                        <div className="border-t-2 border-gray-100 pt-6 md:pt-8">
                            <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 md:mb-6">⭐ Destaques do Imóvel</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                {keyHighlights.map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.7 + index * 0.05 }}
                                        className={`flex items-center gap-3 p-3 md:p-4 rounded-lg border-2 ${highlight.color === 'green'
                                            ? 'bg-green-50 border-green-200'
                                            : 'bg-blue-50 border-blue-200'
                                            }`}
                                    >
                                        <span className={`text-xl md:text-2xl flex-shrink-0 ${highlight.color === 'green' ? 'text-green-600' : 'text-blue-600'
                                            }`}>
                                            {highlight.icon}
                                        </span>
                                        <p className={`font-semibold text-xs md:text-sm leading-tight ${highlight.color === 'green' ? 'text-green-800' : 'text-blue-800'
                                            }`}>
                                            {highlight.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Investment Insight */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="mt-6 md:mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-xl p-4 md:p-6"
                        >
                            <div className="flex items-start gap-4">
                                <span className="text-2xl md:text-3xl flex-shrink-0">💡</span>
                                <div>
                                    <h4 className="font-bold text-[#003366] text-sm md:text-base mb-1 md:mb-2">Porque é que este pavilhão vale €1.35M?</h4>
                                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                        A <strong>€511/m²</strong>, está <strong>34% abaixo</strong> do preço médio de Aveiro.
                                        Com <strong>2.640m² de área bruta</strong> e <strong>4.272m² de terreno</strong>, tem capacidade para gerar
                                        <strong className="text-green-600"> €7.000-9.000/mês</strong> em arrendamento a empresas logísticas —
                                        um <strong>yield bruto de 6.2-8.0%</strong>. Mais: a futura ligação à A1 pode valorizar o imóvel em
                                        <strong className="text-[#003366]"> +€400-500k</strong> nos próximos 3-5 anos.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* CTA Button at the very end */}
                <div className="mt-8 md:mt-12 text-center px-4">
                    <button
                        onClick={onNext}
                        className="group w-full md:w-auto px-6 md:px-8 py-4 md:py-5 bg-[#003366] text-white font-bold text-base md:text-lg rounded-xl hover:bg-[#004488] transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2 md:gap-3"
                    >
                        <span>Ver Condições Financeiras e ROI</span>
                        <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
