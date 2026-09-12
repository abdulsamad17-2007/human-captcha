// Web Audio API synthesized sound generator - no external asset dependencies
let audioCtx = null

function getAudioContext() {
  if (typeof window === 'undefined') return null
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {})
  }
  return audioCtx
}

export const playSound = (type = 'click', isMuted = false) => {
  if (isMuted) return

  try {
    const ctx = getAudioContext()
    if (!ctx) return

    const now = ctx.currentTime

    switch (type) {
      case 'click': {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(440, now)
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.05)
        gain.gain.setValueAtTime(0.12, now)
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(now)
        osc.stop(now + 0.05)
        break
      }

      case 'select': {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'triangle'
        osc.frequency.setValueAtTime(523.25, now) // C5
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.08) // E5
        gain.gain.setValueAtTime(0.15, now)
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(now)
        osc.stop(now + 0.09)
        break
      }

      case 'verified': {
        // High-pitched pleasant dual chime
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
          const osc = ctx.createOscillator()
          const gain = ctx.createGain()
          osc.type = 'sine'
          const startTime = now + i * 0.07
          osc.frequency.setValueAtTime(freq, startTime)
          gain.gain.setValueAtTime(0.12, startTime)
          gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3)
          osc.connect(gain)
          gain.connect(ctx.destination)
          osc.start(startTime)
          osc.stop(startTime + 0.35)
        })
        break
      }

      case 'scan': {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sawtooth'
        osc.frequency.setValueAtTime(300 + Math.random() * 400, now)
        gain.gain.setValueAtTime(0.04, now)
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(now)
        osc.stop(now + 0.06)
        break
      }

      case 'fanfare': {
        // Glorious arpeggio for final result
        const notes = [440, 554.37, 659.25, 880, 1108.73]
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator()
          const gain = ctx.createGain()
          osc.type = 'sine'
          const start = now + idx * 0.1
          osc.frequency.setValueAtTime(freq, start)
          gain.gain.setValueAtTime(0.18, start)
          gain.gain.exponentialRampToValueAtTime(0.001, start + 0.5)
          osc.connect(gain)
          gain.connect(ctx.destination)
          osc.start(start)
          osc.stop(start + 0.55)
        })
        break
      }

      case 'error': {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'square'
        osc.frequency.setValueAtTime(160, now)
        osc.frequency.setValueAtTime(120, now + 0.08)
        gain.gain.setValueAtTime(0.15, now)
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(now)
        osc.stop(now + 0.2)
        break
      }

      default:
        break
    }
  } catch (err) {
    // Audio contexts might be blocked until user gesture, safely ignore
  }
}
