'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Step1MarketProblem from './components/Step1MarketProblem';
import Step2Solution from './components/Step2Solution';
import Step3SocialProof from './components/Step3SocialProof';
import Step4Asset from './components/Step4Asset';
import Step5Offer from './components/Step5Offer';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main className="relative">
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 md:gap-2">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="p-1.5 md:p-2 hover:bg-[#F5F7FA] rounded-lg transition-colors"
                  aria-label="Voltar"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              <span className="text-xs md:text-sm font-medium text-[#003366]">
                Passo {currentStep} de {totalSteps}
              </span>
            </div>
            <div className="text-xs md:text-sm text-gray-500 font-medium">
              {currentStep === 1 && 'O Problema'}
              {currentStep === 2 && 'A Solução'}
              {currentStep === 3 && 'Prova Social'}
              {currentStep === 4 && 'O Ativo'}
              {currentStep === 5 && 'A Oferta'}
            </div>
          </div>
          <div className="w-full bg-[#F5F7FA] rounded-full h-1.5 md:h-2 overflow-hidden">
            <div
              className="bg-[#003366] h-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 md:pt-24">
        <AnimatePresence mode="wait">
          {currentStep === 1 && <Step1MarketProblem key="step1" onNext={nextStep} />}
          {currentStep === 2 && <Step2Solution key="step2" onNext={nextStep} />}
          {currentStep === 3 && <Step3SocialProof key="step3" onNext={nextStep} />}
          {currentStep === 4 && <Step4Asset key="step4" onNext={nextStep} />}
          {currentStep === 5 && <Step5Offer key="step5" />}
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
