import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DIAGNOSTIC_MESSAGES } from '../data/results';
import { playSound } from '../utils/sound';

export default function AnalyzingView({ finalScore, onDone, isMuted }) {
  const [currentScoreDisplay, setCurrentScoreDisplay] = useState(0);
  const [statusMessageIndex, setStatusMessageIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Total duration of analysis animation: ~3.6 seconds
    const totalDurationMs = 3600;
    const intervalTime = 30; // update counter every 30ms
    const totalSteps = totalDurationMs / intervalTime;
    let step = 0;
    let soundTickCounter = 0;

    const counterInterval = setInterval(() => {
      step++;
      const progressRatio = step / totalSteps;
      
      // Easing curve (ease-out cubic) for smooth suspense
      const easedProgress = 1 - Math.pow(1 - progressRatio, 3);
      const scoreNow = Math.min(finalScore, Math.round(easedProgress * finalScore));
      setCurrentScoreDisplay(scoreNow);

      soundTickCounter++;
      if (soundTickCounter % 4 === 0) {
        playSound('scan', isMuted);
      }

      if (step >= totalSteps) {
        clearInterval(counterInterval);
        setCurrentScoreDisplay(finalScore);
        setIsFinished(true);
        playSound('verified', isMuted);
        // Do NOT auto-navigate! Stay on screen until user clicks DONE as requested.
      }
    }, intervalTime);

    // Rotate diagnostic messages every 420ms until finished
    const msgInterval = setInterval(() => {
      setStatusMessageIndex((prev) => (prev + 1) % DIAGNOSTIC_MESSAGES.length);
    }, 420);

    return () => {
      clearInterval(counterInterval);
      clearInterval(msgInterval);
    };
  }, [finalScore, isMuted]);

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-10 sm:py-14 flex flex-col items-center justify-center text-center z-10 relative">
      {/* Top Tagline strictly placed on analyzing screen */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono font-semibold text-cyan-400 mb-3.5">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>CALCULATING HUMANITY INDEX</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white max-w-lg mx-auto leading-relaxed">
          More soul, or more screen time? Let's find out .
        </h2>
      </motion.div>

      {/* Biometric Radar Scanner Rings */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8 flex items-center justify-center">
        {/* Outer pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border border-cyan-500/30"
        />

        {/* Rotating dash ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute inset-3 rounded-full border-2 border-dashed border-cyan-400/40"
        />

        {/* Counter-rotating subtle ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-full border border-blue-500/30"
        />

        {/* Center glowing core with score counter */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-slate-900/90 border border-cyan-500/50 shadow-2xl shadow-cyan-500/30 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md">
          {/* Scanning sweep bar (stops when finished) */}
          {!isFinished && (
            <motion.div
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]"
            />
          )}

          <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight drop-shadow-[0_2px_8px_rgba(34,211,238,0.5)]">
            {currentScoreDisplay}%
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mt-1 flex items-center gap-1">
            {isFinished ? (
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            ) : (
              <Activity className="w-2.5 h-2.5 animate-pulse text-cyan-300" />
            )}
            <span>{isFinished ? 'SCORE VERIFIED' : 'HUMAN SCORE'}</span>
          </div>
        </div>
      </div>

      {/* Rotating Diagnostic Telemetry Terminal */}
      <div className="w-full max-w-md p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 shadow-inner flex items-center gap-3 text-left mb-6">
        <div className={`w-2 h-2 rounded-full shrink-0 ${isFinished ? 'bg-emerald-400' : 'bg-cyan-400 animate-ping'}`} />
        <p className="text-xs font-mono text-cyan-300 truncate">
          {isFinished 
            ? `Biometric Signal Synchronized! Final score locked : ${finalScore}%`
            : DIAGNOSTIC_MESSAGES[statusMessageIndex]
          }
        </p>
      </div>

      {/* DONE Button at bottom of Percentage/Analyzing Screen */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <button
          onClick={() => {
            playSound('click', isMuted);
            onDone();
          }}
          disabled={!isFinished}
          className={`w-full py-4 px-8 rounded-xl font-bold text-base flex items-center justify-center gap-2.5 transition-all shadow-xl duration-200 ${
            isFinished
              ? 'bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
              : 'bg-slate-800/80 text-slate-500 border border-slate-700/80 cursor-not-allowed opacity-60'
          }`}
        >
          <span>{isFinished ? 'DONE' : 'ANALYZING...'}</span>
          <ArrowRight className={`w-5 h-5 stroke-[2.5] ${isFinished ? 'translate-x-0.5' : ''}`} />
        </button>

        <p className="text-slate-400 text-xs mt-4">
          {isFinished 
            ? 'Click DONE to view and share your official certificate' 
            : 'Analyzing empathy, emotional depth, awkward moments, and screen dependence...'
          }
        </p>
      </motion.div>
    </div>
  );
}
