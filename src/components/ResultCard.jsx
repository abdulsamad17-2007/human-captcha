import React, { forwardRef } from 'react';
import { ShieldCheck, Award, Sparkles, CheckCircle, Fingerprint } from 'lucide-react';

const ResultCard = forwardRef(({ name, score, persona, verificationId, verificationDate }, ref) => {
  const getBadgeColor = (color) => {
    switch (color) {
      case 'emerald':
        return 'border-emerald-500/50 bg-emerald-950/40 text-emerald-300';
      case 'cyan':
        return 'border-cyan-500/50 bg-cyan-950/40 text-cyan-300';
      case 'indigo':
        return 'border-indigo-500/50 bg-indigo-950/40 text-indigo-300';
      case 'amber':
        return 'border-amber-500/50 bg-amber-950/40 text-amber-300';
      case 'rose':
        return 'border-rose-500/50 bg-rose-950/40 text-rose-300';
      default:
        return 'border-cyan-500/50 bg-cyan-950/40 text-cyan-300';
    }
  };

  return (
    <div
      ref={ref}
      id="human-captcha-result-card"
      style={{
        backgroundColor: '#090d16',
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.12) 0%, rgba(15, 23, 42, 0.6) 50%, #090d16 100%)'
      }}
      className="w-full max-w-xl mx-auto rounded-3xl p-6 sm:p-8 text-white border-2 border-slate-700/80 shadow-2xl relative overflow-hidden text-left"
    >
      {/* Top Card Header */}
      <div className="flex items-center justify-between border-b border-slate-800/90 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
              OFFICIAL HUMAN CERTIFICATE
            </div>
            <div className="text-xs text-slate-400">
              Verified Real Human • Test Complete
            </div>
          </div>
        </div>

        <div className="text-right">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-800 border border-slate-700 text-slate-300">
            <Fingerprint className="w-3 h-3 text-cyan-400" />
            {verificationId}
          </span>
        </div>
      </div>

      {/* Main Subject & Big Score */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
        {/* Subject info */}
        <div>
          <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
            NAME
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-0.5 capitalize">
            {name || 'Anonymous Human'}
          </h3>
          <div className="mt-2.5 inline-flex items-center gap-2">
            <span className={`text-[11px] font-mono px-3 py-1 rounded-full border uppercase tracking-wider font-bold ${getBadgeColor(persona.badgeColor)}`}>
              {persona.badge}
            </span>
          </div>
        </div>

        {/* Score Badge */}
        <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/40 shadow-xl self-stretch sm:self-auto min-w-[140px] text-center">
          <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-widest">
            HUMAN SCORE
          </span>
          <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tighter my-0.5">
            {score}%
          </div>
          <span className="text-[10px] text-slate-400 font-medium">
            {score >= 60 ? '100% REAL HUMAN' : 'A BIT TOO LOGICAL'}
          </span>
        </div>
      </div>

      {/* Persona Title & Verdict */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 mb-6">
        <div className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider mb-1 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>YOUR PERSONALITY TYPE</span>
        </div>
        <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
          {persona.title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {persona.verdict}
        </p>
      </div>

      {/* Trait Meters Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">
          YOUR PERSONALITY TRAITS
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {persona.traits.map((trait, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-slate-300 font-medium">{trait.name}</span>
                <span className="font-mono text-cyan-300 font-semibold">{trait.value}%</span>
              </div>
              {/* Progress bar */}
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  style={{ width: `${trait.value}%` }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                />
              </div>
              <div className="text-[10px] text-slate-400 mt-1 font-mono">
                {trait.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="p-3 rounded-xl bg-slate-950/60 border-l-2 border-cyan-400 text-xs sm:text-sm text-slate-300 italic mb-6">
        {persona.quote}
      </div>

      {/* Card Footer: Timestamp & Verification Link */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
        <div className="flex items-center gap-1.5 font-mono">
          <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>Certified on {verificationDate}</span>
        </div>
        <div className="font-mono text-cyan-400 font-semibold tracking-wide">
           Stay Genuine • HUMAN CAPTCHA • Stay Real
        </div>
      </div>
    </div>
  );
});

ResultCard.displayName = 'ResultCard';
export default ResultCard;
