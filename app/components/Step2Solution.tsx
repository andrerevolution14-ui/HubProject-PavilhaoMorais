'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp } from '../utils/animations';

interface Step2Props {
    onNext: () => void;
}

export default function Step2Solution({ onNext }: Step2Props) {
    const advantages = [
        {
            icon: '🛣️',
            title: 'Acesso EN1 + IC2',
            description: 'Ligação direta às principais vias da Região Centro',
            impact: 'Reduz custos logísticos em 25-30%',
        },
        {
            icon: '⚡',
            title: 'Futura Ligação A1',
            description: 'Acesso facilitado à A1 em desenvolvimento',
            impact: 'Valorização projetada: +40% pós-conclusão',
        },
        {
            icon: '🏭',
            title: 'Zona Industrial em Expansão',
            description: 'Cluster de empresas logísticas e metalomecânicas',
            impact: 'Procura crescente por arrendamento',
        },
    ];

    const comparativeData = [
        { location: 'Aveiro Centro', pricePerM2: 'Muito Elevado', availability: 'Esgotado', waitTime: '12-18 meses', highlight: false },
        { location: 'Oia / Oliveira do Bairro', pricePerM2: 'Elevado', availability: 'Crítico', waitTime: '8-12 meses', highlight: false },
        { location: 'Amoreira da Gândara', pricePerM2: 'Sob Consulta', availability: '✓ Disponível', waitTime: 'Imediato', highlight: true },
    ];

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24"
            style={{ backgroundColor: '#ffffff', backgroundImage: 'radial-gradient(rgba(0,51,102,0.07) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        >
            <div className="max-w-6xl w-full space-y-10 md:space-y-14">

                {/* ── Header ── */}
                <div>
                    <motion.div {...fadeUp(0)}>
                        <span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                            style={{ background: '#f0fdf4', color: '#15803d', border: '1px solid #bbf7d0' }}
                        >
                            ✅ A Alternativa Inteligente
                        </span>
                    </motion.div>

                    <motion.h1 {...fadeUp(0.07)} className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.08] tracking-tight mt-4">
                        <span style={{ color: '#003366' }}>Quer Aveiro?</span><br />
                        <span style={{ color: '#16a34a' }}>Damos-lhe Algo Melhor.</span>
                    </motion.h1>

                    <motion.p {...fadeUp(0.13)} className="mt-5 text-base md:text-xl leading-relaxed max-w-3xl" style={{ color: '#374151' }}>
                        <strong style={{ color: '#003366' }}>Amoreira da Gândara</strong> está a <strong>15 minutos de Aveiro</strong>.
                        Dá-lhe acesso ao mesmo corredor logístico, às mesmas empresas, à mesma procura...
                        mas permite-lhe <strong style={{ color: '#16a34a' }}>uma poupança massiva de capital</strong>.
                    </motion.p>

                    {/* Green highlight box */}
                    <motion.div
                        {...fadeUp(0.19)}
                        className="mt-6 rounded-2xl p-5 md:p-7"
                        style={{ background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)', borderLeft: '4px solid #16a34a' }}
                    >
                        <p className="font-black text-base md:text-lg mb-4" style={{ color: '#003366' }}>
                            🎯 Porque É Que Isto É MELHOR Que Aveiro Centro:
                        </p>
                        <ol className="space-y-3 text-sm md:text-base" style={{ color: '#374151' }}>
                            {[
                                ['Está disponível AGORA', ' — não precisa de esperar 12-18 meses'],
                                ['Valor/m² altamente competitivo', ' — Significativamente abaixo da média de Aveiro'],
                                ['Mesma procura logística', ' — empresas querem estar perto da A1/IC2'],
                                ['Valorização futura garantida', ' — nova ligação à A1 em construção'],
                            ].map(([bold, rest], i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white mt-0.5" style={{ background: '#16a34a' }}>{i + 1}</span>
                                    <span><strong>{bold}</strong>{rest}</span>
                                </li>
                            ))}
                        </ol>
                    </motion.div>
                </div>

                {/* ── Aerial Photo ── */}
                <motion.div {...fadeUp(0.26)} className="rounded-3xl overflow-hidden" style={{ boxShadow: '0 24px 60px -12px rgba(0,0,0,0.18)' }}>
                    <Image
                        src="/industrial-zone.png"
                        alt="Vista aérea da Zona Industrial de Amoreira da Gândara"
                        width={1200}
                        height={675}
                        className="w-full h-auto"
                        priority
                    />
                    <div className="p-4 text-center" style={{ background: '#f8fafc', borderTop: '1px solid #e5e7eb' }}>
                        <p className="text-sm" style={{ color: '#374151' }}>
                            <strong style={{ color: '#003366' }}>Vista aérea real</strong> da Zona Industrial de Amoreira da Gândara —
                            infraestruturas modernas, amplo espaço, e acesso privilegiado.
                        </p>
                    </div>
                </motion.div>

                {/* ── Advantage Cards ── */}
                <div>
                    <motion.h2 {...fadeUp(0.3)} className="text-2xl md:text-3xl font-black mb-7" style={{ color: '#003366' }}>
                        🚀 Vantagens Competitivas da Localização
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-5">
                        {advantages.map((a, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.36 + i * 0.09, duration: 0.5, ease: 'easeOut' }}
                                className="rounded-2xl p-6 flex flex-col gap-3 transition-shadow hover:shadow-xl"
                                style={{ background: '#ffffff', border: '1.5px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
                            >
                                <span className="text-3xl">{a.icon}</span>
                                <h3 className="font-black text-lg" style={{ color: '#003366' }}>{a.title}</h3>
                                <p className="text-sm leading-relaxed flex-1" style={{ color: '#6b7280' }}>{a.description}</p>
                                <div className="pt-3 mt-auto" style={{ borderTop: '1px solid #f3f4f6' }}>
                                    <p className="text-xs font-bold" style={{ color: '#16a34a' }}>💰 {a.impact}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Comparative Table ── */}
                <motion.div
                    {...fadeUp(0.48)}
                    className="rounded-3xl p-6 md:p-10"
                    style={{ background: '#ffffff', border: '1.5px solid #e5e7eb', boxShadow: '0 8px 40px rgba(0,0,0,0.07)' }}
                >
                    <h2 className="text-xl md:text-2xl font-black mb-6" style={{ color: '#003366' }}>📊 Análise Comparativa de Mercado</h2>

                    {/* Mobile cards */}
                    <div className="md:hidden space-y-3">
                        {comparativeData.map((row, i) => (
                            <div
                                key={i}
                                className="rounded-2xl p-4"
                                style={{
                                    background: row.highlight ? '#f0fdf4' : '#f8fafc',
                                    border: `1.5px solid ${row.highlight ? '#86efac' : '#e5e7eb'}`,
                                }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <p className="font-black text-base" style={{ color: '#003366' }}>{row.location}</p>
                                    {row.highlight && (
                                        <span className="text-[10px] font-black px-2 py-1 rounded-full text-white" style={{ background: '#16a34a' }}>RECOMENDADO</span>
                                    )}
                                </div>
                                <div className="grid grid-cols-3 gap-2 text-xs">
                                    {[['Preço/m²', row.pricePerM2], ['Disponível', row.availability], ['Espera', row.waitTime]].map(([l, v2]) => (
                                        <div key={l}>
                                            <p style={{ color: '#9ca3af' }}>{l}</p>
                                            <p className="font-bold mt-0.5" style={{ color: row.highlight && l === 'Disponível' ? '#16a34a' : '#003366' }}>{v2}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                                    {['Localização', 'Preço/m²', 'Disponibilidade', 'Tempo de Espera'].map(h => (
                                        <th key={h} className="pb-3 pr-6 text-sm font-bold uppercase tracking-wide" style={{ color: '#6b7280' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {comparativeData.map((row, i) => (
                                    <tr
                                        key={i}
                                        style={{
                                            borderBottom: '1px solid #f3f4f6',
                                            background: row.highlight ? '#f0fdf4' : 'transparent',
                                        }}
                                    >
                                        <td className="py-4 pr-6 font-bold" style={{ color: '#003366' }}>
                                            {row.location}
                                            {row.highlight && (
                                                <span className="ml-2 text-[10px] font-black px-2 py-0.5 rounded-full text-white" style={{ background: '#16a34a' }}>RECOMENDADO</span>
                                            )}
                                        </td>
                                        <td className="py-4 pr-6 font-medium" style={{ color: '#374151' }}>{row.pricePerM2}</td>
                                        <td className="py-4 pr-6">
                                            <span
                                                className="px-3 py-1 rounded-full text-xs font-bold"
                                                style={{
                                                    background: row.availability === '✓ Disponível' ? '#dcfce7' : '#fee2e2',
                                                    color: row.availability === '✓ Disponível' ? '#15803d' : '#dc2626',
                                                }}
                                            >
                                                {row.availability}
                                            </span>
                                        </td>
                                        <td className="py-4 font-medium" style={{ color: '#374151' }}>{row.waitTime}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div
                        className="mt-6 rounded-xl p-4"
                        style={{ background: '#eff6ff', borderLeft: '4px solid #003366' }}
                    >
                        <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
                            <strong style={{ color: '#003366' }}>Vantagem Competitiva:</strong> Com um valor por m² significativamente abaixo de Aveiro Centro, este ativo representa uma oportunidade única de aquisição.
                            Ao investir neste pavilhão, liberta capital para expansão ou melhorias operacionais imediatas.
                        </p>
                    </div>
                </motion.div>

                {/* ── CTA ── */}
                <motion.div {...fadeUp(0.56)} className="flex justify-center px-4">
                    <button
                        onClick={onNext}
                        className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 rounded-2xl font-black text-base md:text-lg text-white transition-all duration-300 hover:scale-[1.03]"
                        style={{
                            background: 'linear-gradient(135deg, #003366 0%, #0055aa 100%)',
                            boxShadow: '0 8px 32px -4px rgba(0,51,102,0.45)',
                        }}
                    >
                        <span>Ver Quem Já Investiu Aqui</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </motion.div>

            </div>
        </div>
    );
}
