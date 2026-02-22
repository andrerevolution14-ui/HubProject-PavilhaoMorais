'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
import Step1MarketProblem from './components/Step1MarketProblem';
import Step2Solution from './components/Step2Solution';
import Step3SocialProof from './components/Step3SocialProof';
import Step4Asset from './components/Step4Asset';
import Step5Offer from './components/Step5Offer';

const stepNames: Record<number, string> = {
  1: 'Mercado',
  2: 'Estratégia',
  3: 'Ocupação',
  4: 'O Ativo',
  5: 'ROI Final',
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  useEffect(() => {
    import('./utils/fb-events').then(({ trackMetaEvent }) => {
      trackMetaEvent('ViewContent', {
        step: currentStep,
        name: stepNames[currentStep]
      });
    });
  }, [currentStep]);

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <main className="relative bg-[#fcfcfd] min-h-screen">
      <LayoutGroup>
        {/* Header with Progress Bar */}
        <header className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 md:py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                {currentStep > 1 && (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={prevStep}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                )}
                <span className="text-sm font-black text-[#003366] tracking-tighter">
                  ANÁLISE DE INVESTIMENTO — {currentStep}/5
                </span>
              </div>
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
              >
                {stepNames[currentStep]}
              </motion.div>
            </div>

            {/* HIGH VISIBILITY PROGRESS BAR */}
            <div className="h-2.5 md:h-3.5 bg-gray-100 rounded-full overflow-hidden relative border border-gray-200 shadow-inner">
              <motion.div
                layoutId="progress-bar"
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#003366] via-[#0055aa] to-[#003366] bg-[length:200%_100%] z-10"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                initial={false}
                transition={{ type: "spring", stiffness: 35, damping: 10 }}
                animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
              />
              <motion.div
                className="absolute inset-x-0 inset-y-0 bg-gradient-to-r from-transparent via-white/30 to-transparent z-20"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="pt-28 md:pt-36">
          <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}
          >
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.03, y: -20 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1] // Apple-style fluid ease
              }}
              className="w-full"
            >
              {currentStep === 1 && <Step1MarketProblem onNext={nextStep} />}
              {currentStep === 2 && <Step2Solution onNext={nextStep} />}
              {currentStep === 3 && <Step3SocialProof onNext={nextStep} />}
              {currentStep === 4 && <Step4Asset onNext={nextStep} />}
              {currentStep === 5 && <Step5Offer />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 py-12 mt-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-400 text-sm font-bold tracking-widest uppercase">
              Documento Reservado © 2026 — Amoreira da Gândara
            </p>
          </div>
        </footer>
      </LayoutGroup>
    </main>
  );
}
