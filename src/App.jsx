import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LandingView from './components/LandingView';
import TestView from './components/TestView';
import AnalyzingView from './components/AnalyzingView';
import ShareView from './components/ShareView';
import ParallaxBackground from './components/ParallaxBackground';
import { getRandomSessionQuestions } from './data/questions';
import { calculateHumanScore, getPersonaForScore } from './data/results';

export default function App() {
  const [step, setStep] = useState('landing'); // 'landing' | 'test' | 'analyzing' | 'share'
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finalScore, setFinalScore] = useState(0);
  const [persona, setPersona] = useState(null);
  
  const [isMuted, setIsMuted] = useState(() => {
    try {
      return localStorage.getItem('hc_muted') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('hc_muted', isMuted ? 'true' : 'false');
    } catch {
      // ignore
    }
  }, [isMuted]);

  // Start a new test session (picks 10 random questions from the 100-question bank)
  const startTest = () => {
    const selected10 = getRandomSessionQuestions(10);
    setQuestions(selected10);
    setCurrentIndex(0);
    setAnswers([]);
    setStep('test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // User selects an option
  const handleSelectOption = (question, option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = { question, option };
    setAnswers(updatedAnswers);

    if (currentIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 180);
    } else {
      // 10th question completed! Compute score and transition to Percentage/Analyzing Screen
      const score = calculateHumanScore(updatedAnswers);
      const matchedPersona = getPersonaForScore(score);
      setFinalScore(score);
      setPersona(matchedPersona);
      
      setTimeout(() => {
        setStep('analyzing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 200);
    }
  };

  // User goes back to previous question
  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Reset entirely back to landing page
  const handleReset = () => {
    setStep('landing');
    setCurrentIndex(0);
    setAnswers([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Restart test with 10 new random questions
  const handleRestart = () => {
    startTest();
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col justify-between relative selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Dynamic 3D / Parallax interactive background responsive to cursor */}
      <ParallaxBackground />

      {/* Persistent App Header */}
      <Header
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        onReset={handleReset}
        currentStep={step}
      />

      {/* Main Content Router */}
      <main className="flex-1 flex flex-col justify-center relative z-10 w-full">
        {step === 'landing' && (
          <LandingView
            name={name}
            setName={setName}
            onStart={startTest}
            isMuted={isMuted}
          />
        )}

        {step === 'test' && (
          <TestView
            questions={questions}
            currentIndex={currentIndex}
            answers={answers}
            onSelectOption={handleSelectOption}
            onPrev={handlePrevQuestion}
            isMuted={isMuted}
          />
        )}

        {/* 1. Percentage / Analyzing Screen */}
        {step === 'analyzing' && (
          <AnalyzingView
            finalScore={finalScore}
            onDone={() => {
              setStep('share');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            isMuted={isMuted}
          />
        )}

        {/* 2. Share Screen (Directly after DONE on Percentage Screen) */}
        {step === 'share' && persona && (
          <ShareView
            name={name}
            score={finalScore}
            persona={persona}
            onBack={() => {
              setStep('analyzing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRestart={handleRestart}
            isMuted={isMuted}
          />
        )}
      </main>

      {/* Modern Minimalist Footer */}
      <footer className="w-full max-w-5xl mx-auto px-4 py-6 border-t border-slate-900/90 text-center text-xs text-slate-400 z-10 relative flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>HUMAN CAPTCHA Neural Authenticator</span>
        </div>
        <div className="font-mono text-slate-400 text-[11px]">
          All verifications are 100% client-side & private. Stay genuine.
        </div>
      </footer>
    </div>
  );
}
