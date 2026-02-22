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
        <header className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">

            {/* Top row: back button + step label + step badge */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                {currentStep > 1 && (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={prevStep}
                    className="p-1.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                )}
                <span className="text-xs md:text-sm font-black text-[#003366] tracking-tight">
                  ANÁLISE — {currentStep}/{totalSteps}
                </span>
              </div>
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100"
              >
                {stepNames[currentStep]}
              </motion.div>
            </div>

            {/* Progress bar with fill */}
            <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden mb-3 border border-gray-200">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: 'linear-gradient(90deg, #003366, #0055aa)' }}
                initial={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              {/* Shine sweep */}
              <motion.div
                className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ['-4rem', '110vw'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
              />
            </div>

            {/* Step dots */}
            <div className="flex items-center justify-between px-0.5">
              {Array.from({ length: totalSteps }, (_, i) => {
                const step = i + 1;
                const done = step < currentStep;
                const active = step === currentStep;
                return (
                  <div key={step} className="flex flex-col items-center gap-1">
                    <motion.div
                      animate={{
                        background: done ? '#003366' : active ? '#0055aa' : '#e5e7eb',
                        scale: active ? 1.15 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[9px] md:text-[10px] font-black"
                      style={{ color: done || active ? '#ffffff' : '#9ca3af' }}
                    >
                      {done ? (
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : step}
                    </motion.div>
                    <span
                      className="hidden md:block text-[8px] font-bold uppercase tracking-wide"
                      style={{ color: active ? '#003366' : '#9ca3af' }}
                    >
                      {stepNames[step]}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </header>


        {/* Content Area */}
        <div className="pt-36 md:pt-44">
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
