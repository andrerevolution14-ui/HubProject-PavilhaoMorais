'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Step1MarketProblem from './components/Step1MarketProblem';
import Step2Solution from './components/Step2Solution';
import Step3SocialProof from './components/Step3SocialProof';
import Step4Asset from './components/Step4Asset';
import Step5Offer from './components/Step5Offer';

// Nomes dos passos para Analytics e Pixel
const stepNames: Record<number, string> = {
  1: 'O Problema de Mercado',
  2: 'A Alternativa Estratégica',
  3: 'Prova Social — Lotes',
  4: 'O Ativo Industrial',
  5: 'Análise Financeira — Oferta',
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Disparar ViewContent (Pixel + CAPI) sempre que o passo muda
  useEffect(() => {
    import('./utils/fb-events').then(({ trackMetaEvent }) => {
      trackMetaEvent('ViewContent', {
        content_name: stepNames[currentStep],
        content_category: 'Funnel Step',
        content_ids: [`step_${currentStep}`],
        value: currentStep === 5 ? 1350000 : 0,
        currency: 'EUR',
      });
    });
  }, [currentStep]);

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <main className="relative">
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 md:gap-2">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="p-1.5 md:p-2 hover:bg-[#F5F7FA] rounded-lg transition-colors cursor-pointer"
                  aria-label="Voltar"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              <span className="text-xs md:text-sm font-bold text-[#003366]">
                PASSO {currentStep} DE {totalSteps}
              </span>
            </div>
            <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">
              {currentStep === 1 && 'O Problema'}
              {currentStep === 2 && 'A Solução'}
              {currentStep === 3 && 'Prova Social'}
              {currentStep === 4 && 'O Ativo'}
              {currentStep === 5 && 'A Oferta'}
            </div>
          </div>
          <div className="w-full bg-[#F5F7FA] rounded-full h-1.5 md:h-2 overflow-hidden shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-[#003366] to-[#005599] h-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.8, ease: "circOut" }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 md:pt-24 overflow-x-hidden">
        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
        >
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Step1MarketProblem onNext={nextStep} />
            </motion.div>
          )}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Step2Solution onNext={nextStep} />
            </motion.div>
          )}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Step3SocialProof onNext={nextStep} />
            </motion.div>
          )}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Step4Asset onNext={nextStep} />
            </motion.div>
          )}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Step5Offer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-6 md:py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm opacity-80">
            © 2026 - Informação Confidencial | Pavilhão Industrial Amoreira da Gândara
          </p>
        </div>
      </footer>
    </main>
  );
}
