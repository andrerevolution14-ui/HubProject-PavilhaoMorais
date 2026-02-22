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

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
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
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start text-left">
          {/* Left: Direct Message to Investor */}
          <div className="space-y-4 md:space-y-6 text-left">
            <motion.div variants={itemVariants} className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-red-50 text-red-600 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider animate-pulse">
              ⚠️ Oportunidade em Fecho
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-[#003366] leading-tight text-left">
              Aveiro Centro <br />
              <span className="text-red-600">está esgotado.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-4 text-base md:text-xl text-gray-700 leading-relaxed font-medium text-left">
              <p>
                A procura por pavilhões industriais premium em Aveiro atingiu o ponto de rutura.
                Investidores que esperaram "pela oportunidade perfeita" no centro estão agora <strong className="text-red-500">fora do mercado</strong>.
              </p>
              <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl italic shadow-sm">
                "Quem não se posicionou a 15km do centro em 2023, hoje paga o dobro ou simplesmente não encontra nada."
              </p>
            </motion.div>

            {/* Market Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-4">
              {marketData.map((data, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 transition-all hover:border-[#003366]/20"
                >
                  <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase mb-1">{data.metric}</p>
                  <p className="text-xl md:text-2xl font-black text-[#003366]">{data.value}</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${data.trend === 'Crítico' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
                    }`}>
                    {data.trend}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Storytelling & Visual Proof */}
          <div className="space-y-6 md:space-y-8">
            <motion.div variants={itemVariants} className="bg-[#003366] bg-gradient-to-br from-[#003366] to-[#004488] p-6 md:p-10 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-white/10 transition-colors" />

              <h3 className="text-xl md:text-2xl font-black mb-6 flex items-center gap-3">
                <span className="bg-white/20 p-2 rounded-lg">📖</span>
                O Caso Real: João <br className="hidden sm:block" />
                (Investidor de Coimbra)
              </h3>

              <p className="text-base md:text-lg opacity-90 leading-relaxed mb-6 font-medium">
                <strong className="text-white">João, empresário de Coimbra</strong>, queria Aveiro Centro.
                Esperou 8 meses por uma oportunidade. Quando apareceu, o preço tinha subido <strong className="text-red-400">€280k</strong>.
                Decidiu investir numa <strong>alternativa estratégica</strong> a 15km de Aveiro.
                Poupou €895k, arrendou por €9.000/mês, e tem <strong className="text-green-400">yield de 8%</strong>.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#003366] bg-gray-200 overflow-hidden shadow-xl" />
                  ))}
                </div>
                <p className="text-xs md:text-sm font-bold text-blue-200">
                  +14 investidores já garantiram <br /> as últimas unidades na zona.
                </p>
              </div>
            </motion.div>

            {/* CTA para o próximo passo */}
            <motion.button
              variants={itemVariants}
              onClick={onNext}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,51,102,0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="group w-full bg-[#003366] bg-gradient-to-r from-[#003366] to-[#0055aa] text-white p-6 md:p-7 rounded-2xl shadow-xl flex items-center justify-center gap-4 transition-all overflow-hidden relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="text-left flex-1">
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] opacity-70 mb-1 leading-tight">Próxima Etapa</p>
                <p className="text-lg md:text-2xl font-black leading-tight">Descobrir a Alternativa Estratégica</p>
              </div>
              <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
