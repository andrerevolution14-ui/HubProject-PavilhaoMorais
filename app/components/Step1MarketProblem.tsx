'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

interface Step1Props {
  onNext: () => void;
}

export default function Step1MarketProblem({ onNext }: Step1Props) {
  const marketData = [
    { metric: 'Taxa de Ocupação Aveiro Centro', value: '98.7%', trend: 'Crítico', color: '#dc2626' },
    { metric: 'Tempo Médio de Venda', value: '< 45 dias', trend: 'Recorde', color: '#d97706' },
    { metric: 'Valorização 2024-2026', value: '+127%', trend: 'Explosivo', color: '#dc2626' },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24"
      style={{ backgroundColor: '#ffffff', backgroundImage: 'radial-gradient(rgba(0,51,102,0.07) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
    >
      <div className="max-w-7xl w-full">

        {/* ── Grid Layout ── */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* ── LEFT ── */}
          <div className="space-y-5 md:space-y-7">

            {/* Badge */}
            <motion.div {...fadeUp(0)}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: '#fff1f2', color: '#991b1b', border: '1px solid #fecaca' }}
              >
                🚨 Para Investidores em Aveiro Centro
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 {...fadeUp(0.07)} className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.08] tracking-tight">
              <span style={{ color: '#003366' }}>Quer Investir em<br />Aveiro Centro?</span><br />
              <span style={{ color: '#dc2626' }}>Tem Um Problema.</span>
            </motion.h1>

            {/* Alert box */}
            <motion.div
              {...fadeUp(0.14)}
              className="rounded-2xl p-5 md:p-6"
              style={{ background: '#f8fafc', borderLeft: '4px solid #dc2626' }}
            >
              <p className="text-base font-bold mb-2" style={{ color: '#003366' }}>A Verdade que Ninguém Lhe Diz:</p>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: '#374151' }}>
                <strong>Aveiro Centro está esgotado.</strong> Não há espaço industrial disponível. Zero. E quando aparecer algo (daqui a 12-18 meses),
                vai pagar <strong style={{ color: '#dc2626' }}>+30-40% mais</strong> do que pagaria hoje... noutro sítio.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.2)}>
              <h3 className="text-lg font-black mb-4 uppercase tracking-wide" style={{ color: '#003366' }}>📊 Os Números Que Precisa de Ver:</h3>
              <div className="space-y-3">
                {marketData.map((d, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.28 + i * 0.09, duration: 0.45, ease: 'easeOut' }}
                    className="flex items-center justify-between rounded-xl p-4 gap-3"
                    style={{ background: '#ffffff', border: '1.5px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}
                  >
                    <div>
                      <p className="text-xs font-medium mb-0.5" style={{ color: '#6b7280' }}>{d.metric}</p>
                      <p className="text-2xl font-black" style={{ color: '#003366' }}>{d.value}</p>
                    </div>
                    <span
                      className="shrink-0 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wide"
                      style={{ background: '#fff1f2', color: d.color }}
                    >
                      {d.trend}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Warning block */}
            <motion.div
              {...fadeUp(0.5)}
              className="rounded-2xl p-5 md:p-6"
              style={{ background: '#fffbeb', border: '1.5px solid #fcd34d' }}
            >
              <p className="text-sm font-black mb-3" style={{ color: '#92400e' }}>⚡ O Que Isto Significa Para Si:</p>
              <ul className="space-y-2 text-sm" style={{ color: '#78350f' }}>
                {[
                  ['Se quer Aveiro, ', 'já perdeu', ' — está tudo reservado'],
                  ['Se esperar, vai pagar ', '€200-300/m² a mais', ' daqui a 1 ano'],
                  ['Mas há ', '1 alternativa', ' que 99% dos investidores ainda não descobriu'],
                ].map(([a, b, c], i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0" style={{ color: '#d97706' }}>▸</span>
                    <span>{a}<strong>{b}</strong>{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ── RIGHT ── */}
          <div className="space-y-5 md:space-y-6">

            {/* Dark card */}
            <motion.div
              {...fadeUp(0.18)}
              className="rounded-3xl p-7 md:p-10 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #002244 0%, #003366 50%, #004488 100%)', boxShadow: '0 24px 60px -12px rgba(0,51,102,0.45)' }}
            >
              {/* decorative circles */}
              <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #0066cc, transparent)' }} />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #FFCC00, transparent)' }} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">💡</span>
                  <h3 className="text-xl md:text-2xl font-black text-white">Porque É Que Isto Aconteceu:</h3>
                </div>
                <div className="space-y-4 text-sm md:text-base">
                  {[
                    'O e-commerce <strong>duplicou</strong> a procura por armazéns desde 2020',
                    'Grandes operadores pagam <strong>yields de 7-9%</strong> — muito acima do residencial',
                    'Aveiro tornou-se <strong>o hub logístico</strong> da Região Centro',
                    'Resultado: <strong>procura 5x superior à oferta</strong>',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1 text-xs font-black" style={{ color: '#FFCC00' }}>✓</span>
                      <p className="text-white/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Case study */}
            <motion.div
              {...fadeUp(0.26)}
              className="rounded-2xl p-5 md:p-6"
              style={{ background: '#ffffff', border: '1.5px solid #003366', boxShadow: '0 4px 20px rgba(0,51,102,0.08)' }}
            >
              <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: '#9ca3af' }}>Caso Real — Investidor Como Você</p>
              <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
                <strong style={{ color: '#003366' }}>João, empresário de Coimbra</strong>, queria Aveiro Centro.
                Esperou 8 meses por uma oportunidade. Quando apareceu, o preço tinha subido{' '}
                <strong style={{ color: '#dc2626' }}>€280k</strong>.
                Decidiu investir numa <strong>alternativa estratégica</strong> a 15km de Aveiro.
                Poupou €895k, arrendou por €9.000/mês, e tem{' '}
                <strong style={{ color: '#16a34a' }}>yield de 8%</strong>.
              </p>
            </motion.div>

            {/* Data table */}
            <motion.div
              {...fadeUp(0.34)}
              className="rounded-2xl p-5 md:p-6"
              style={{ background: 'linear-gradient(135deg, #fffbeb, #fff7ed)', border: '1.5px solid #fcd34d' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">📈</span>
                <h4 className="font-black text-sm uppercase tracking-wide" style={{ color: '#003366' }}>Dados de Mercado 2024</h4>
              </div>
              <div className="space-y-2.5">
                {[
                  ['Taxa de Ocupação Aveiro:', '98.7%', '#dc2626'],
                  ['Tempo Médio de Venda:', '< 45 dias', '#003366'],
                  ['Valorização 2024-2026:', '+127%', '#16a34a'],
                ].map(([label, val, color], i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span style={{ color: '#374151' }}>{label}</span>
                    <strong style={{ color }}>{val}</strong>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── CTA ── */}
        <motion.div {...fadeUp(0.55)} className="mt-12 md:mt-16 flex justify-center px-4">
          <button
            onClick={onNext}
            className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 rounded-2xl font-black text-base md:text-lg text-white transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(135deg, #003366 0%, #0055aa 100%)',
              boxShadow: '0 8px 32px -4px rgba(0,51,102,0.45)',
            }}
          >
            <span>Mostrar-me a Alternativa Estratégica</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>

      </div>
    </div>
  );
}
