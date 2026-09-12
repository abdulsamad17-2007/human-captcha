import React from 'react';
import { Volume2, VolumeX, RotateCcw, ShieldCheck } from 'lucide-react';
import { playSound } from '../utils/sound';

export default function Header({ isMuted, setIsMuted, onReset, currentStep }) {
  const toggleMute = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    if (!nextState) {
      playSound('click', false);
    }
  };

  return (
    <header className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between z-20 relative">
      {/* Brand logo & pixel font title */}
      <div 
        onClick={onReset}
        className="flex items-center gap-3 cursor-pointer group select-none"
        title="Go to Home"
      >
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105 transition-all">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          {/* ONLY this title uses the pixel font as specified in the prompt */}
          <h1 className="font-pixel text-base sm:text-lg text-white tracking-wider group-hover:text-cyan-400  transition-colors">
            HUMAN CAPTCHA
          </h1>
          <p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">
            Protocol V1.7 • Emotional Authenticator
          </p>
        </div>
      </div>

      {/* Control buttons */}
      <div className="flex items-center gap-2">
        {currentStep !== 'landing' && (
          <button
            onClick={() => {
              playSound('click', isMuted);
              onReset();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:text-white transition-colors"
            title="Start Over"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        )}

        <button
          onClick={toggleMute}
          className="p-2 rounded-lg text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:text-cyan-400 transition-colors"
          title={isMuted ? "Unmute sound effects" : "Mute sound effects"}
          aria-label={isMuted ? "Unmute sound effects" : "Mute sound effects"}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
        </button>
      </div>
    </header>
  );
}
