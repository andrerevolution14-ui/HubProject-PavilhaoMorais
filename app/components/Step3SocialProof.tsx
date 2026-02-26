'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

interface Step3Props {
    onNext: () => void;
}

const lots = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    reserved: i < 10,
    isIkea: i === 0,
}));

export default function Step3SocialProof({ onNext }: Step3Props) {
    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24"
            style={{ backgroundColor: '#f8fafc', backgroundImage: 'radial-gradient(rgba(0,51,102,0.07) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        >
            <div className="max-w-6xl w-full">
                <div className="text-center space-y-8 md:space-y-12">

                    {/* ── Badge ── */}
                    <motion.div {...fadeUp(0)}>
                        <span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                            style={{ background: '#f0f9ff', color: '#0369a1', border: '1px solid #bae6fd' }}
                        >
                            Análise de Mercado
                        </span>
                    </motion.div>

                    {/* ── Heading ── */}
                    <motion.h1 {...fadeUp(0.07)} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08]" style={{ color: '#003366' }}>
                        Quem já se posicionou?
                    </motion.h1>

                    {/* ── Stat highlight ── */}
                    <motion.p {...fadeUp(0.13)} className="text-base md:text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#374151' }}>
                        <span className="text-4xl md:text-5xl font-black" style={{ color: '#003366' }}>85%</span>
                        {' '}dos lotes premium nesta zona já foram adquiridos por empresas de Logística e Metalomecânica.
                    </motion.p>

                    <motion.p {...fadeUp(0.17)} className="text-sm md:text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
                        A janela de oportunidade para entrada a preços de 2024 está a fechar.
                    </motion.p>

                    {/* ── Lots Grid ── */}
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
                        {lots.map((lot, i) => (
                            <motion.div
                                key={lot.id}
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.22 + i * 0.06, duration: 0.4, ease: 'easeOut' }}
                                className="aspect-square rounded-2xl flex flex-col items-center justify-center text-xs font-black relative overflow-hidden"
                                style={{
                                    background: lot.isIkea
                                        ? '#FFCC00'
                                        : lot.reserved
                                            ? 'linear-gradient(135deg, #003366, #004488)'
                                            : '#ffffff',
                                    border: lot.reserved ? 'none' : '2px dashed #003366',
                                    boxShadow: lot.reserved ? '0 4px 16px rgba(0,51,102,0.25)' : '0 2px 8px rgba(0,0,0,0.06)',
                                    color: lot.isIkea ? '#003366' : lot.reserved ? '#ffffff' : '#003366',
                                }}
                            >
                                {/* Reserved decorative ring */}
                                {lot.reserved && !lot.isIkea && (
                                    <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at top right, #ffffff, transparent)' }} />
                                )}

                                {lot.isIkea ? (
                                    <div className="flex flex-col items-center z-10">
                                        <span className="text-[11px] font-black" style={{ color: '#003399' }}>IKEA</span>
                                        <span className="text-[9px] mt-0.5" style={{ color: '#003399' }}>RESERVADO</span>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center z-10">
                                        <span className="text-[10px] mb-0.5">{lot.reserved ? 'RESERVADO' : 'DISPONÍVEL'}</span>
                                        <span className="text-[9px] opacity-70">Lote {lot.id}</span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* ── Legend ── */}
                    <motion.div {...fadeUp(0.42)} className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium" style={{ color: '#374151' }}>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded" style={{ background: 'linear-gradient(135deg, #003366, #004488)' }} />
                            <span>Pavilhão Reservado</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded" style={{ background: '#FFCC00' }} />
                            <span>IKEA (Reservado)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded border-2" style={{ borderColor: '#003366', borderStyle: 'dashed', background: '#fff' }} />
                            <span>Disponível</span>
                        </div>
                    </motion.div>

                    {/* ── Occupation card ── */}
                    <motion.div
                        {...fadeUp(0.46)}
                        className="rounded-3xl p-6 md:p-10 text-left"
                        style={{ background: '#ffffff', border: '1.5px solid #e5e7eb', boxShadow: '0 8px 40px rgba(0,0,0,0.07)' }}
                    >
                        <h3 className="text-lg md:text-xl font-black mb-5 text-center" style={{ color: '#003366' }}>
                            📍 Taxa de Ocupação da Zona Industrial
                        </h3>

                        {/* Bar */}
                        <div className="relative h-14 md:h-16 rounded-2xl overflow-hidden mb-6" style={{ background: '#e5e7eb' }}>
                            <motion.div
                                initial={{ width: '0%' }}
                                animate={{ width: '85%' }}
                                transition={{ duration: 1.6, ease: 'easeOut', delay: 0.5 }}
                                className="absolute inset-y-0 left-0 rounded-2xl"
                                style={{ background: 'linear-gradient(90deg, #22c55e 0%, #eab308 55%, #dc2626 100%)' }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-black text-lg md:text-2xl text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                                    85% OCUPADO
                                </span>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 text-xs font-medium">
                            {[
                                ['#22c55e', '0-30% (Disponível)'],
                                ['#eab308', '30-70% (Moderado)'],
                                ['#dc2626', '70-100% (Saturado)'],
                            ].map(([color, label]) => (
                                <div key={label} className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded" style={{ background: color }} />
                                    <span style={{ color: '#6b7280' }}>{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Alert */}
                        <div className="rounded-xl p-4" style={{ background: '#fff1f2', borderLeft: '4px solid #dc2626' }}>
                            <p className="text-sm md:text-base leading-relaxed" style={{ color: '#374151' }}>
                                <strong style={{ color: '#dc2626' }}>🚨 Alerta de Mercado:</strong> Com 85% de ocupação,
                                esta zona está oficialmente em <strong>saturação crítica</strong>.
                                Apenas <strong>2 pavilhões premium</strong> permanecem para investimento.
                            </p>
                        </div>
                    </motion.div>

                    {/* ── Transition Text ── */}
                    <motion.div {...fadeUp(0.5)} className="max-w-2xl mx-auto">
                        <p className="text-lg md:text-xl font-bold leading-relaxed" style={{ color: '#003366' }}>
                            Esta tese de valorização materializa-se num ativo logístico de 2.500m² disponível na região, com um custo de entrada altamente competitivo face à média do mercado.
                        </p>
                    </motion.div>

                    {/* ── CTA ── */}
                    <motion.div {...fadeUp(0.55)} className="flex justify-center px-4">
                        <button
                            onClick={onNext}
                            className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 rounded-2xl font-black text-base md:text-lg text-white transition-all duration-300 hover:scale-[1.03]"
                            style={{
                                background: 'linear-gradient(135deg, #003366 0%, #0055aa 100%)',
                                boxShadow: '0 8px 32px -4px rgba(0,51,102,0.45)',
                            }}
                        >
                            <span>Ver Oportunidade Disponível (Off-Market)</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
