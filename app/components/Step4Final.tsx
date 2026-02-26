'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

export default function Step4Final() {
    const waLink = "https://wa.link/2oghu8";

    const features = [
        "Fotos reais (Interior e Exterior)",
        "Localização e acessos logísticos (A1/A17)",
        "Agendamento de visita imediata",
    ];

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24 relative overflow-hidden"
            style={{ backgroundColor: '#f8fafc' }}
        >
            {/* ── Blurred Background Detail ── */}
            <div
                className="absolute inset-0 z-0 opacity-20 blur-2xl"
                style={{
                    backgroundImage: 'url("/warehouse-interior.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <div className="max-w-4xl w-full relative z-10 text-center">
                <div
                    className="rounded-[2.5rem] p-8 md:p-16 border border-white/40 shadow-2xl backdrop-blur-xl"
                    style={{ background: 'rgba(255, 255, 255, 0.8)' }}
                >
                    {/* ── Badge ── */}
                    <motion.div {...fadeUp(0)}>
                        <span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                            style={{ background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0' }}
                        >
                            Dossier de Investimento
                        </span>
                    </motion.div>

                    {/* ── Heading ── */}
                    <motion.h1
                        {...fadeUp(0.1)}
                        className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-8"
                        style={{ color: '#003366' }}
                    >
                        Quer analisar as fotos e a localização?
                    </motion.h1>

                    {/* ── Description ── */}
                    <motion.p
                        {...fadeUp(0.2)}
                        className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
                        style={{ color: '#4b5563' }}
                    >
                        Por questões de discrição e exclusividade da operação, partilhamos o dossier de fotos, a localização exata e as condições de venda apenas de forma direta.
                    </motion.p>

                    {/* ── Technical Summary Card ── */}
                    <motion.div
                        {...fadeUp(0.25)}
                        className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 text-left"
                    >
                        {[
                            { label: 'Área Bruta', value: '2.640 m²' },
                            { label: 'Terreno', value: '4.272 m²' },
                            { label: 'Licença', value: 'Industrial B' },
                            { label: 'Energia', value: 'PT Próprio' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/50 backdrop-blur-sm p-3 rounded-2xl border border-gray-200">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">{item.label}</p>
                                <p className="text-sm md:text-base font-black text-[#003366]">{item.value}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* ── Checklist ── */}
                    <motion.div
                        {...fadeUp(0.3)}
                        className="flex flex-col items-start max-w-sm mx-auto gap-4 mb-12"
                    >
                        {[
                            ...features,
                            "Zonas de Escritório e Refeitório",
                            "Balneários e WC equipados",
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-4 text-left">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: '#16a34a' }}>
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="font-bold text-base md:text-lg" style={{ color: '#003366' }}>{feature}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* ── WhatsApp CTA ── */}
                    <motion.div
                        {...fadeUp(0.4)}
                        className="flex justify-center"
                    >
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full md:w-auto inline-flex items-center justify-center gap-4 px-8 md:px-12 py-6 md:py-8 rounded-3xl font-black text-lg md:text-2xl text-white transition-all duration-300 hover:scale-[1.05] shadow-[0_20px_50px_rgba(37,211,102,0.3)] hover:shadow-[0_25px_60px_rgba(37,211,102,0.4)]"
                            style={{
                                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                            }}
                        >
                            <svg className="w-8 h-8 md:w-10 md:h-10 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span className="uppercase tracking-tight">Receber Fotos e Localização no WhatsApp</span>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* ── Bottom disclaimer ── */}
            <motion.div
                {...fadeUp(0.5)}
                className="absolute bottom-8 left-0 right-0 text-center px-4"
            >
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                    Documento Reservado © 2026 — Amoreira da Gândara
                </p>
            </motion.div>
        </div>
    );
}
