'use client';

import { motion } from 'framer-motion';

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
      className="min-h-screen bg-premium-white flex items-center justify-center px-4 py-12 md:py-20"
    >
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Direct Message to Investor */}
          <div className="space-y-4 md:space-y-6">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-red-50 border border-red-200 rounded-full text-xs md:text-sm font-semibold text-red-700">
              🚨 Para Investidores em Aveiro Centro
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#003366] leading-tight">
              Quer Investir em Aveiro Centro?<br />
              <span className="text-red-600">Tem Um Problema.</span>
            </h1>

            <div className="bg-[#F5F7FA] rounded-xl p-4 md:p-6 border-l-4 border-red-600">
              <p className="text-base md:text-lg font-semibold text-[#003366] mb-2">
                A Verdade que Ninguém Lhe Diz:
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                <strong>Aveiro Centro está esgotado.</strong> Não há espaço industrial disponível. Zero. E quando aparecer algo (daqui a 12-18 meses),
                vai pagar <strong className="text-red-600">+30-40% mais</strong> do que pagaria hoje... noutro sítio.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-[#003366]">📊 Os Números Que Precisa de Ver:</h3>

              {marketData.map((data, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-between bg-white border-2 border-[#F5F7FA] rounded-lg p-3 md:p-4 hover:border-[#003366] transition-colors gap-2"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-gray-600 truncate">{data.metric}</p>
                    <p className="text-xl md:text-2xl font-bold text-[#003366]">{data.value}</p>
                  </div>
                  <span className="px-2 md:px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full whitespace-nowrap">
                    {data.trend}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 md:p-5">
              <p className="text-sm font-bold text-yellow-900 mb-2">⚡ O Que Isto Significa Para Si:</p>
              <ul className="space-y-2 text-xs md:text-sm text-yellow-800">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5 flex-shrink-0">▸</span>
                  <span>Se quer Aveiro, <strong>já perdeu</strong> — está tudo reservado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5 flex-shrink-0">▸</span>
                  <span>Se esperar, vai pagar <strong>€200-300/m² a mais</strong> daqui a 1 ano</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5 flex-shrink-0">▸</span>
                  <span>Mas há <strong>1 alternativa</strong> que 99% dos investidores ainda não descobriu</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Visual Data */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-[#002244] bg-premium-blue rounded-2xl md:rounded-3xl p-6 md:p-10 text-white shadow-2xl relative overflow-hidden border border-white/10">
              <div className="relative z-10">
                <h3 className="text-xl md:text-3xl font-black mb-4 md:mb-6 tracking-tight flex items-center gap-3">
                  <span className="text-2xl md:text-4xl">💡</span>
                  <span>Porque É Que Isto Aconteceu:</span>
                </h3>
                <div className="space-y-4 md:space-y-5 text-sm md:text-lg">
                  <p className="flex items-start gap-2">
                    <span className="text-yellow-300 flex-shrink-0">✓</span>
                    <span>O e-commerce <strong>duplicou</strong> a procura por armazéns desde 2020</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-yellow-300 flex-shrink-0">✓</span>
                    <span>Grandes operadores pagam <strong>yields de 7-9%</strong> — muito acima do residencial</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-yellow-300 flex-shrink-0">✓</span>
                    <span>Aveiro tornou-se <strong>o hub logístico</strong> da Região Centro</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-yellow-300 flex-shrink-0">✓</span>
                    <span>Resultado: <strong>procura 5x superior à oferta</strong></span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#003366] rounded-xl p-4 md:p-6">
              <p className="text-xs text-gray-500 mb-2">CASO REAL — INVESTIDOR COMO VOCÊ</p>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                <strong className="text-[#003366]">João, empresário de Coimbra</strong>, queria Aveiro Centro.
                Esperou 8 meses por uma oportunidade. Quando apareceu, o preço tinha subido <strong className="text-red-600">€280k</strong>.
                Decidiu investir numa <strong>alternativa estratégica</strong> a 15km de Aveiro.
                Poupou €895k, arrendou por €9.000/mês, e tem <strong className="text-green-600">yield de 8%</strong>.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-xl p-4 md:p-6">
              <h4 className="font-bold text-[#003366] mb-2 md:mb-3 flex items-center gap-2 text-base md:text-lg">
                <span className="text-xl md:text-2xl">📈</span>
                Dados de Mercado 2024
              </h4>
              <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-700">
                <p className="flex justify-between gap-2">
                  <span>Taxa de Ocupação Aveiro:</span>
                  <strong className="text-red-600">98.7%</strong>
                </p>
                <p className="flex justify-between gap-2">
                  <span>Tempo Médio de Venda:</span>
                  <strong className="text-[#003366]">&lt; 45 dias</strong>
                </p>
                <p className="flex justify-between gap-2">
                  <span>Valorização 2024-2026:</span>
                  <strong className="text-green-600">+127%</strong>
                </p>
              </div>
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
            <span className="text-sm md:text-base">Mostrar-me a Alternativa Estratégica</span>
            <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
