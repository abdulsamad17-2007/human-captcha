import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Sparkles, Brain, CheckCircle2 } from 'lucide-react';
import { playSound } from '../utils/sound';

export default function TestView({
  questions,
  currentIndex,
  answers,
  onSelectOption,
  onPrev,
  isMuted
}) {
  const currentQuestion = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);
  const selectedAnswer = answers[currentIndex]?.option;
  const [direction, setDirection] = useState(1);

  // Keyboard shortcut support (1-4 or A-D)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!currentQuestion) return;
      const key = e.key.toUpperCase();
      let index = -1;

      if (['1', '2', '3', '4'].includes(key)) {
        index = parseInt(key, 10) - 1;
      } else if (['A', 'B', 'C', 'D'].includes(key)) {
        index = key.charCodeAt(0) - 65;
      }

      if (index >= 0 && index < currentQuestion.options.length) {
        handleOptionClick(currentQuestion.options[index]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentQuestion]);

  const handleOptionClick = (option) => {
    setDirection(1);
    playSound('select', isMuted);
    onSelectOption(currentQuestion, option);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      playSound('click', isMuted);
      onPrev();
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 sm:py-10 z-10 relative">
      {/* Top Status Bar: Progress & Step */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-[11px]">
              PROBE {currentIndex + 1} / {questions.length}
            </span>
            <span className="hidden sm:inline text-slate-400">
              Humanity Verification Sequence
            </span>
          </div>
          <div className="font-mono text-cyan-400">{progressPercent}% COMPLETE</div>
        </div>

        {/* Progress Bar with Cyan Glow */}
        <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]" />
          </motion.div>
        </div>
      </div>

      {/* Main Question Card with Smooth Framer Motion Slide */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ opacity: 0, x: direction * 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -24 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl shadow-black/50 relative overflow-hidden"
        >
          {/* Subtle Ambient Background Light */}
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Category Tag */}
          <div className="flex items-center gap-2 mb-4">
            <div className="px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-[11px] font-semibold text-cyan-300 tracking-wide flex items-center gap-1.5 shadow-sm">
              <Brain className="w-3 h-3 text-cyan-400" />
              <span>{currentQuestion.category}</span>
            </div>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              Select the option that feels closest to your real reaction
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-6 sm:mb-8 leading-snug">
            {currentQuestion.text}
          </h2>

          {/* 4 Interactive Answer Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isChosen = selectedAnswer?.text === option.text;

              return (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.008 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full text-left p-4 sm:p-4.5 rounded-xl border transition-all duration-200 flex items-start gap-3.5 group relative select-none ${
                    isChosen
                      ? 'bg-cyan-950/40 border-cyan-400/80 shadow-lg shadow-cyan-950/30'
                      : 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/50'
                  }`}
                >
                  {/* Option Letter Key Badge */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-mono text-xs sm:text-sm font-bold flex items-center justify-center shrink-0 transition-all ${
                      isChosen
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                        : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-cyan-300 border border-slate-700'
                    }`}
                  >
                    {letter}
                  </div>

                  {/* Option Text */}
                  <div className="flex-1 pt-0.5">
                    <p className={`text-sm sm:text-base leading-relaxed ${
                      isChosen ? 'text-cyan-100 font-medium' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {option.text}
                    </p>
                  </div>

                  {/* Active Indicator Icon */}
                  {isChosen && (
                    <div className="text-cyan-400 pt-0.5 shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Bottom Bar: Back Button */}
          <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between">
            {currentIndex > 0 ? (
              <button
                onClick={handlePrev}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors py-1 px-2.5 rounded-lg hover:bg-slate-800/60"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous question</span>
              </button>
            ) : (
              <div />
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
