'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Step1Props {
  onNext: () => void;
}

export default function Step1MarketProblem({ onNext }: Step1Props) {
  const marketData = [
    { metric: 'Taxa de Ocupação Aveiro Centro', value: '98.7%', trend: 'Crítico' },
    { metric: 'Tempo Médio de Venda', value: '< 45 dias', trend: 'Recorde' },
    { metric: 'Valorização 2024-2026', value: '+127%', trend: 'Explosivo' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white flex items-center justify-center px-4 py-12"
    >
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Direct Message to Investor */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-red-50 border border-red-200 rounded-full text-sm font-semibold text-red-700">
              🚨 Para Investidores em Aveiro Centro
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003366] leading-tight">
              Quer Investir em Aveiro Centro?<br />
              <span className="text-red-600">Tem Um Problema.</span>
            </h1>

            <div className="bg-[#F5F7FA] rounded-xl p-6 border-l-4 border-red-600">
              <p className="text-lg font-semibold text-[#003366] mb-2">
                A Verdade que Ninguém Lhe Diz:
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Aveiro Centro está esgotado.</strong> Não há espaço industrial disponível. Zero. E quando aparecer algo (daqui a 12-18 meses),
                vai pagar <strong className="text-red-600">+30-40% mais</strong> do que pagaria hoje... noutro sítio.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#003366]">📊 Os Números Que Precisa de Ver:</h3>

              {marketData.map((data, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-between bg-white border-2 border-[#F5F7FA] rounded-lg p-4 hover:border-[#003366] transition-colors"
                >
                  <div>
                    <p className="text-sm text-gray-600">{data.metric}</p>
                    <p className="text-2xl font-bold text-[#003366]">{data.value}</p>
                  </div>
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                    {data.trend}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5">
              <p className="text-sm font-bold text-yellow-900 mb-2">⚡ O Que Isto Significa Para Si:</p>
              <ul className="space-y-2 text-sm text-yellow-800">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">▸</span>
                  <span>Se quer Aveiro, <strong>já perdeu</strong> — está tudo reservado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">▸</span>
                  <span>Se esperar, vai pagar <strong>€200-300/m² a mais</strong> daqui a 1 ano</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">▸</span>
                  <span>Mas há <strong>1 alternativa</strong> que 99% dos investidores ainda não descobriu</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Visual Data */}
          <div className="space-y-6">
            {/* Real Chart Image */}
            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <div className="relative w-full" style={{ minHeight: '400px' }}>
                <Image
                  src="/aveiro-saturation-chart.png"
                  alt="Taxa de Ocupação Industrial - Aveiro 2020-2024"
                  width={600}
                  height={700}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#003366] to-[#004488] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">💡 Porque É Que Isto Aconteceu:</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>O e-commerce <strong>duplicou</strong> a procura por armazéns desde 2020</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Grandes operadores pagam <strong>yields de 7-9%</strong> — muito acima do residencial</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Aveiro tornou-se <strong>o hub logístico</strong> da Região Centro</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Resultado: <strong>procura 5x superior à oferta</strong></span>
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-[#003366] rounded-xl p-6">
              <p className="text-xs text-gray-500 mb-2">CASO REAL — INVESTIDOR COMO VOCÊ</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-[#003366]">João, empresário de Coimbra</strong>, queria Aveiro Centro.
                Esperou 8 meses por uma oportunidade. Quando apareceu, o preço tinha subido <strong className="text-red-600">€280k</strong>.
                Decidiu investir numa <strong>alternativa estratégica</strong> a 15km de Aveiro.
                Poupou €710k, arrendou por €9.000/mês, e tem <strong className="text-green-600">yield de 8%</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button at the very end */}
        <div className="mt-12 text-center">
          <button
            onClick={onNext}
            className="group px-8 py-5 bg-[#003366] text-white font-bold text-lg rounded-xl hover:bg-[#004488] transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
          >
            <span>Mostrar-me a Alternativa Estratégica</span>
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
