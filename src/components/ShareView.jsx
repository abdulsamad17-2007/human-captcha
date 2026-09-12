import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Share2, ArrowLeft, RotateCcw, Sparkles } from 'lucide-react';
import ResultCard from './ResultCard';
import { playSound } from '../utils/sound';

export default function ShareView({
  name,
  score,
  persona,
  onBack,
  onRestart,
  isMuted
}) {
  const cardRef = useRef(null);
  const [toastMessage, setToastMessage] = useState('');

  const [meta] = useState(() => ({
    id: `HC-${Math.floor(10000 + Math.random() * 90000)}`,
    date: new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }));

  // Trigger celebration confetti on mount
  useEffect(() => {
    playSound('fanfare', isMuted);
    
    if (score >= 50) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#818cf8', '#34d399', '#f472b6']
        });
      } catch (e) {
        // Safe fallback
      }
    }
  }, [score, isMuted]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  // Web Share API or Clipboard Copy
  const handleShare = async () => {
    playSound('click', isMuted);
    const shareText = `I just scored ${score}% on the HUMAN CAPTCHA test! 🤖➡️👤\nPersona: ${persona.title}\n"${persona.quote}"\nProve your humanity here:`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My HUMAN CAPTCHA Score',
          text: shareText,
          url: shareUrl
        });
        showToast('Shared successfully!');
        return;
      } catch (err) {
        if (err.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      showToast('📋 Copied result & link to clipboard!');
    } catch (err) {
      showToast('Score: ' + score + '% - ' + persona.title);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto px-4 py-8 sm:py-12 text-center z-10 relative"
    >
      {/* Toast Notification */}
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-cyan-950 border border-cyan-400/80 text-cyan-200 text-xs font-semibold shadow-2xl shadow-cyan-950/80 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>{toastMessage}</span>
        </motion.div>
      )}

      {/* Screen Header */}
      <div className="mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono font-semibold text-cyan-400 mb-3">
          <Share2 className="w-3.5 h-3.5" />
          <span>OFFICIAL SHAREABLE CERTIFICATE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          Share Your Humanity Certificate
        </h2>
        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          Your official biological certificate is verified. Share your score and certificate with friends.
        </p>
      </div>

      {/* The Styled Printable Certificate Card */}
      <div className="mb-8">
        <ResultCard
          ref={cardRef}
          name={name}
          score={score}
          persona={persona}
          verificationId={meta.id}
          verificationDate={meta.date}
        />
      </div>

      {/* Only Keep Share Option As Requested */}
      <div className="flex items-center justify-center max-w-md mx-auto mb-8">
        <button
          onClick={handleShare}
          className="w-full py-4 px-8 rounded-xl font-bold text-base bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 flex items-center justify-center gap-2.5 shadow-xl shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
        >
          <Share2 className="w-5 h-5 stroke-[2.5]" />
          <span>Share Result</span>
        </button>
      </div>

      {/* Navigation Options: Back to Score & Retake */}
      <div className="flex items-center justify-center gap-4 text-xs font-medium text-slate-400">
        <button
          onClick={() => {
            playSound('click', isMuted);
            onBack();
          }}
          className="flex items-center gap-1.5 hover:text-white py-1.5 px-3 rounded-lg hover:bg-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Score</span>
        </button>

        <span>•</span>

        <button
          onClick={() => {
            playSound('click', isMuted);
            onRestart();
          }}
          className="flex items-center gap-1.5 hover:text-cyan-300 py-1.5 px-3 rounded-lg hover:bg-slate-900 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Retake Test (New 10 Questions)</span>
        </button>
      </div>
    </motion.div>
  );
}
