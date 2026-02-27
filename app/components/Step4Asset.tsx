'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp } from '../utils/animations';
import { trackMetaEvent } from '../utils/fb-events';

interface Step4Props {
    onNext: () => void;
}

export default function Step4Asset({ onNext }: Step4Props) {
    const handleWhatsAppClick = () => {
        trackMetaEvent('Contact', {
            content_category: 'Lead Generation',
            content_name: 'WhatsApp Asset Inquiry',
            value: 0.00,
            currency: 'EUR'
        });
    };

    const technicalSpecs = [
        { label: 'Área Bruta', value: '2.640 m²', icon: '📐', detail: '2.530 m² úteis' },
        { label: 'Terreno Total', value: '4.272 m²', icon: '🏗️', detail: 'Amplo espaço exterior' },
        { label: 'Ano Construção', value: '2006', icon: '📅', detail: 'Segunda mão / Bom estado' },
        { label: 'Casas de Banho', value: '4 WC', icon: '🚻', detail: 'Distribuídos por pisos' },
    ];

    const floors = [
        {
            label: 'Rés-do-Chão', icon: '🏭',
            features: ['2 amplos pavilhões conectados', '2 balneários completos', 'Refeitório equipado', 'Movimentação de viaturas pesadas'],
        },
        {
            label: '1º Andar', icon: '🏢',
            features: ['2 salas/escritórios', 'Espaço amplo para trabalho administrativo', '2 casas de banho', 'Sala de arquivo'],
        },
    ];

    // NOTE: Licença B (fire safety license category) and Segurança Contra Incêndios
    // (fire safety certification) are TWO separate items as corrected by user
    const highlights = [
        { text: 'Licença para Indústria aprovada', color: 'green' },
        { text: 'Pronto a escriturar', color: 'green' },
        { text: 'Licença B', color: 'green' },
        { text: 'Segurança Contra Incêndios certificada', color: 'green' },
        { text: 'PT 200-300A — Ponto de Transformação de Alta Potência', color: 'blue' },
        { text: 'Certificado energético: Propriedade isenta', color: 'blue' },
        { text: 'Construção sólida com boas áreas', color: 'blue' },
    ];

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24"
            style={{ backgroundColor: '#f8fafc', backgroundImage: 'linear-gradient(to right, rgba(0,51,102,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,51,102,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        >
            <div className="max-w-6xl w-full space-y-10 md:space-y-14">

                {/* ── Header ── */}
                <div className="text-center">
                    <motion.div {...fadeUp(0)}>
                        <span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                            style={{ background: '#ffffff', color: '#003366', border: '1px solid #d1d5db', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
                        >
                            📋 Análise Técnica Completa
                        </span>
                    </motion.div>

                    <motion.h1 {...fadeUp(0.07)} className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08]" style={{ color: '#003366' }}>
                        Pavilhão Industrial<br />N333-1, Amoreira da Gândara
                    </motion.h1>

                    <motion.p {...fadeUp(0.13)} className="mt-5 text-base md:text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#374151' }}>
                        Um ativo industrial <strong>pronto a gerar rendimento</strong>, com licenciamento aprovado e infraestruturas de qualidade superior.
                    </motion.p>

                    {/* ── Urgency Banner ── */}
                    <motion.div
                        {...fadeUp(0.19)}
                        className="mt-7 rounded-3xl p-6 md:p-9 max-w-4xl mx-auto"
                        style={{ background: 'linear-gradient(135deg, #fffbeb, #fff7ed)', border: '2px solid #f59e0b', boxShadow: '0 8px 32px rgba(245,158,11,0.15)' }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <span className="text-3xl">🎯</span>
                            <h2 className="text-xl md:text-2xl font-black uppercase" style={{ color: '#003366' }}>A ÚNICA SOLUÇÃO DISPONÍVEL</h2>
                            <span className="text-3xl">🎯</span>
                        </div>
                        <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: '#374151' }}>
                            Este é <strong style={{ color: '#003366' }}>o último pavilhão industrial premium</strong> disponível em Amoreira da Gândara
                            com <strong>licenciamento aprovado</strong> e <strong>pronto a escriturar</strong>.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {[
                                ['✓ Disponibilidade', 'Todos os outros lotes: RESERVADOS'],
                                ['✓ Timing', 'Próxima oportunidade: 12-18 meses'],
                                ['✓ Preço', 'Futuras construções: +30-40% mais caras'],
                            ].map(([title, desc]) => (
                                <div key={title} className="rounded-xl p-4 text-left" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid #fcd34d' }}>
                                    <p className="text-sm font-black mb-1" style={{ color: '#b45309' }}>{title}</p>
                                    <p className="text-xs" style={{ color: '#374151' }}>{desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 pt-4" style={{ borderTop: '1px solid #fcd34d' }}>
                            <p className="text-xs md:text-sm font-bold text-center" style={{ color: '#003366' }}>
                                💎 Para completar este investimento da melhor forma,{' '}
                                <span style={{ color: '#d97706' }}>esta é a sua única opção hoje</span>.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* ── Photo ── */}
                <motion.div {...fadeUp(0.28)} className="rounded-3xl overflow-hidden" style={{ boxShadow: '0 24px 60px -12px rgba(0,0,0,0.18)' }}>
                    <Image
                        src="/warehouse-interior.jpg"
                        alt="Interior do Pavilhão Industrial N333-1"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                        priority
                    />
                    <div
                        className="p-4 md:p-5 flex items-center justify-center gap-2"
                        style={{ background: 'linear-gradient(135deg, #003366, #004488)' }}
                    >
                        <span className="text-lg shrink-0">📸</span>
                        <p className="text-sm text-center font-medium text-white">
                            Vista interior real do pavilhão —{' '}
                            <strong className="text-white">2.530m² de área útil</strong>, pé-direito alto, iluminação natural, pronto a operar
                        </p>
                    </div>
                </motion.div>

                {/* ── Main Card ── */}
                <motion.div
                    {...fadeUp(0.34)}
                    className="rounded-3xl p-6 md:p-10"
                    style={{ background: '#ffffff', border: '1.5px solid #e5e7eb', boxShadow: '0 8px 40px rgba(0,0,0,0.07)' }}
                >

                    {/* Technical Specs */}
                    <h3 className="text-xl md:text-2xl font-black mb-6" style={{ color: '#003366' }}>🔍 Especificações Técnicas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        {technicalSpecs.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + i * 0.07, duration: 0.45, ease: 'easeOut' }}
                                className="flex items-start gap-4 rounded-2xl p-5"
                                style={{ background: '#f8fafc', border: '1px solid #e5e7eb' }}
                            >
                                <span className="text-3xl">{s.icon}</span>
                                <div>
                                    <p className="text-xs font-medium mb-0.5" style={{ color: '#6b7280' }}>{s.label}</p>
                                    <p className="text-2xl font-black" style={{ color: '#003366' }}>{s.value}</p>
                                    <p className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>{s.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Floor Distribution */}
                    <div style={{ borderTop: '1.5px solid #f3f4f6', paddingTop: '2rem', marginBottom: '2rem' }}>
                        <h3 className="text-xl md:text-2xl font-black mb-6" style={{ color: '#003366' }}>🏢 Distribuição dos Espaços</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {floors.map((floor, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.55 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                                    className="rounded-2xl p-6 relative overflow-hidden"
                                    style={{ background: 'linear-gradient(135deg, #002244 0%, #003366 50%, #004488 100%)', boxShadow: '0 8px 32px rgba(0,51,102,0.3)' }}
                                >
                                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10" style={{ background: 'white' }} />
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl p-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.15)' }}>{floor.icon}</span>
                                            <h4 className="font-black text-lg text-white">{floor.label}</h4>
                                        </div>
                                        <ul className="space-y-2.5">
                                            {floor.features.map((f, j) => (
                                                <li key={j} className="flex items-start gap-2.5 text-sm text-white/90">
                                                    <span className="mt-0.5 shrink-0 font-black" style={{ color: '#FFCC00' }}>▶</span>
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Highlights */}
                    <div style={{ borderTop: '1.5px solid #f3f4f6', paddingTop: '2rem' }}>
                        <h3 className="text-xl md:text-2xl font-black mb-6" style={{ color: '#003366' }}>⭐ Destaques do Imóvel</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {highlights.map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + i * 0.05, duration: 0.4, ease: 'easeOut' }}
                                    className="flex items-center gap-3 rounded-xl p-4"
                                    style={{
                                        background: h.color === 'green' ? '#f0fdf4' : '#eff6ff',
                                        border: `1.5px solid ${h.color === 'green' ? '#86efac' : '#bfdbfe'}`,
                                    }}
                                >
                                    <span className="text-lg font-black shrink-0" style={{ color: h.color === 'green' ? '#16a34a' : '#1d4ed8' }}>✓</span>
                                    <p className="font-bold text-sm leading-tight" style={{ color: h.color === 'green' ? '#14532d' : '#1e3a8a' }}>{h.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Investment Insight */}
                    <motion.div
                        {...fadeUp(1.05)}
                        className="mt-8 rounded-2xl p-6 md:p-8"
                        style={{ background: 'linear-gradient(135deg, #fffbeb, #fef3c7)', border: '2px solid #fcd34d', boxShadow: '0 4px 20px rgba(251,191,36,0.15)' }}
                    >
                        <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                            <div
                                className="text-4xl p-3 rounded-2xl shrink-0"
                                style={{ background: '#fcd34d', boxShadow: '0 4px 12px rgba(252,211,77,0.4)' }}
                            >
                                💡
                            </div>
                            <div>
                                <h4 className="font-black text-lg md:text-xl mb-2" style={{ color: '#003366' }}>Porque é que este ativo é a melhor oportunidade da região?</h4>
                                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#374151' }}>
                                    Com um valor por m² <strong>significativamente abaixo da média</strong> de Aveiro, este ativo é único.
                                    Com <strong>2.640m² de área bruta</strong> e <strong>4.272m² de terreno</strong>, tem capacidade para gerar{' '}
                                    <strong style={{ color: '#16a34a' }}>uma rentabilidade mensal acima do mercado</strong> —
                                    um <strong>yield bruto altamente competitivo</strong>. A futura ligação à A1 pode gerar{' '}
                                    <strong style={{ color: '#003366' }}>uma valorização patrimonial massiva</strong> nos próximos anos.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* ── CTA ── */}
                <motion.div {...fadeUp(1.1)} className="flex flex-col md:flex-row items-center justify-center gap-4 px-4">
                    <button
                        onClick={onNext}
                        className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 rounded-2xl font-black text-base md:text-lg text-white transition-all duration-300 hover:scale-[1.03]"
                        style={{
                            background: 'linear-gradient(135deg, #003366 0%, #0055aa 100%)',
                            boxShadow: '0 8px 32px -4px rgba(0,51,102,0.45)',
                        }}
                    >
                        <span>Ver Condições Financeiras e ROI</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>

                    <a
                        href="https://wa.link/2oghu8"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleWhatsAppClick}
                        className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 rounded-2xl font-black text-base md:text-lg transition-all duration-300 hover:scale-[1.03]"
                        style={{
                            background: '#ffffff',
                            color: '#003366',
                            border: '2px solid #003366',
                            boxShadow: '0 8px 24px -4px rgba(0,0,0,0.1)',
                        }}
                    >
                        <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <span>Saber Mais no WhatsApp</span>
                    </a>
                </motion.div>

            </div>
        </div>
    );
}
