import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles, Check, ArrowRight, ShieldCheck, Heart, Coffee, Cpu } from 'lucide-react';
import { playSound } from '../utils/sound';

export default function LandingView({ name, setName, onStart, isMuted }) {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCheckboxClick = () => {
    if (!name.trim()) {
      setErrorMsg('Please enter your name to begin verification');
      playSound('error', isMuted);
      return;
    }

    setErrorMsg('');
    if (isChecked) {
      setIsChecked(false);
      return;
    }

    setIsVerifying(true);
    playSound('click', isMuted);

    // Simulate authentic micro-verification spinner before enabling start
    setTimeout(() => {
      setIsVerifying(false);
      setIsChecked(true);
      playSound('verified', isMuted);
    }, 650);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your name to begin verification.');
      playSound('error', isMuted);
      return;
    }
    playSound('verified', isMuted);
    onStart();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col items-center justify-center max-w-2xl mx-auto px-4 py-8 sm:py-14 text-center z-10 relative"
    >
      {/* Top Title: Pixel-art style ONLY for this title as requested */}
      <div className="mb-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6 tracking-wide shadow-lg shadow-cyan-950/40"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>OFFICIAL HUMANITY VERIFICATION PORTAL</span>
        </motion.div>

        {/* The Title with pixel font */}
        <h1 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-300 leading-tight drop-shadow-[0_4px_16px_rgba(6,182,212,0.25)] tracking-tight">
          HUMAN CAPTCHA
        </h1>
      </div>

      {/* Sub-header prompt */}
      <p className="text-slate-300 text-base sm:text-lg max-w-lg mb-8 font-normal leading-relaxed">
        Tired of selecting traffic lights and vehicles? It's time to test what makes <span className="text-cyan-300 font-semibold">you</span> actually human.
      </p>

      {/* Center Card: reCAPTCHA Inspired Box with Name Input & Verification */}
      <div className="w-full max-w-md glass-panel p-6 sm:p-7 rounded-2xl shadow-2xl shadow-black/60 relative overflow-hidden border border-slate-700/80">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {/* Name Input */}
          <div>
            <label htmlFor="user-name-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Enter your name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                id="user-name-input"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                maxLength={32}
                placeholder="e.g. Samad, Cristiano, Zidane"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all shadow-inner"
                autoFocus
              />
            </div>
            {errorMsg && (
              <motion.p 
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-rose-400 mt-2 font-medium"
              >
                {errorMsg}
              </motion.p>
            )}
          </div>

          {/* Interactive CAPTCHA Checkbox Box */}
          <div 
            onClick={handleCheckboxClick}
            className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
              isChecked 
                ? 'bg-cyan-950/30 border-cyan-500/50 shadow-md shadow-cyan-950/20' 
                : 'bg-slate-900/60 border-slate-700 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center gap-3.5">
              {/* Checkbox square */}
              <div 
                className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all ${
                  isChecked 
                    ? 'bg-cyan-500 border-cyan-400 text-slate-950' 
                    : isVerifying
                    ? 'border-cyan-400 bg-slate-900'
                    : 'border-slate-500 bg-slate-800 hover:border-slate-400'
                }`}
              >
                {isVerifying ? (
                  <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                ) : isChecked ? (
                  <Check className="w-5 h-5 stroke-[3]" />
                ) : null}
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Prove you're not a Robot
                </p>
                <p className="text-[11px] text-slate-400">
                  {isChecked ? 'Click "Start Test" below to begin' : 'Click to verify biological status'}
                </p>
              </div>
            </div>

            {/* Captcha badge mini logo */}
            <div className="flex flex-col items-center justify-center pl-3 border-l border-slate-800">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
              <span className="text-[8px] font-bold text-slate-400 tracking-tighter uppercase mt-0.5">
                CAPTCHA
              </span>
            </div>
          </div>

          {/* Start Test Button */}
          <button
            type="submit"
            className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg ${
              name.trim()
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.01] active:scale-[0.99]'
                : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
            }`}
          >
            <span>Start</span>
          </button>
        </form>

        {/* Under it: Tagline strictly as instructed */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 text-center">
          <p className="text-xs sm:text-sm text-slate-300 italic font-normal leading-relaxed">
            This isn't just a test to prove you're human, It's a chance to pause, reflect, and discover a little more about yourself. Stay genuine.
          </p>
        </div>
      </div>

      {/* The 3 Feature Boxes (excluding the result card box as instructed) */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-md sm:max-w-lg text-left">
        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-2.5">
          <Heart className="w-4 h-4 text-rose-400 shrink-0" />
          <div>
            <div className="text-xs font-semibold text-slate-200">100 Scenarios</div>
            <div className="text-[10px] text-slate-400">Random 10 selected</div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-2.5">
          <Coffee className="w-4 h-4 text-amber-400 shrink-0" />
          <div>
            <div className="text-xs font-semibold text-slate-200">Silly Little Habits</div>
            <div className="text-[10px] text-slate-400">Relatable & funny</div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-2.5">
          <Cpu className="w-4 h-4 text-indigo-400 shrink-0" />
          <div>
            <div className="text-xs font-semibold text-slate-200">0% - 100% Score</div>
            <div className="text-[10px] text-slate-400">Percentage scale</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
