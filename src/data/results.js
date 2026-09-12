// Results, personas, and diagnostic messages for HUMAN CAPTCHA
// Written in simple, easy-to-medium English for clear understanding.

export const DIAGNOSTIC_MESSAGES = [
  "Starting the human check...",
  "Checking how much tea and coffee is in your body...",
  "Searching brain memory for funny and awkward moments...",
  "Measuring how often you check your phone for no reason...",
  "Calculating your empathy and kindness level...",
  "Checking if you say 'thank you' when someone holds the door...",
  "Measuring reaction to rainy days and hot snacks...",
  "Checking late-night overthinking frequency...",
  "Finalizing your genuine human score..."
];

export const PERSONAS = [
  {
    minScore: 90,
    maxScore: 100,
    title: "100% Pure Human Heart",
    badge: "SUPER EMOTIONAL & KIND",
    badgeColor: "emerald",
    verdict: "Very kind, very emotional, and 100% genuine. You feel everything deeply and care about everyone around you.",
    description: "You have a big and soft heart. You feel bad when someone else is sad, you overthink small awkward moments, and you are always ready to help. In a world full of phone screens and cold logic, you are a rare, warm, and beautiful human being.",
    quote: "“I feel all emotions deeply, and I care about people with my whole heart.”",
    traits: [
      { name: "Heart & Empathy", value: 96, label: "Super Caring" },
      { name: "Awkward Moments", value: 88, label: "Funny & Sweet" },
      { name: "Fun & Mischief", value: 75, label: "Full of Life" },
      { name: "Phone Dependence", value: 28, label: "Lives in Real Life" }
    ]
  },
  {
    minScore: 78,
    maxScore: 89,
    title: "Certified Natural Human",
    badge: "BALANCED & WARM",
    badgeColor: "cyan",
    verdict: "The perfect human balance. You have a kind heart, funny awkward habits, and genuine warmth.",
    description: "You have the best human balance. You sometimes wave at the wrong person by mistake, you love quiet weekends at home, but when a friend needs help, you are the first to show up with snacks and a warm smile. Fully verified!",
    quote: "“I have survived many awkward moments, but my heart is always in the right place.”",
    traits: [
      { name: "Heart & Empathy", value: 85, label: "Very Helpful" },
      { name: "Awkward Moments", value: 70, label: "Charming Mistakes" },
      { name: "Fun & Mischief", value: 65, label: "Friendly Energy" },
      { name: "Phone Dependence", value: 45, label: "Normal Screen Time" }
    ]
  },
  {
    minScore: 62,
    maxScore: 77,
    title: "Half-Human, Half-Phone",
    badge: "MODERN HYBRID",
    badgeColor: "indigo",
    verdict: "50% beating heart, 50% smartphone screen. You scroll a lot, but you still love your friends and family deeply.",
    description: "You are the typical modern person. You check your phone often and get lost watching reels, but deep inside you still love a nice cup of tea, laughing with close friends, and peaceful evenings. You just need to step outside and enjoy nature more often!",
    quote: "“I spend too much time on my phone, but I still love real human connection.”",
    traits: [
      { name: "Heart & Empathy", value: 70, label: "Warm When Present" },
      { name: "Awkward Moments", value: 58, label: "Avoids Eye Contact" },
      { name: "Fun & Mischief", value: 60, label: "Loves Memes" },
      { name: "Phone Dependence", value: 72, label: "High Screen Time" }
    ]
  },
  {
    minScore: 45,
    maxScore: 61,
    title: "Smartphone with Legs",
    badge: "SCREEN ADDICT",
    badgeColor: "amber",
    verdict: "Your daily screen time is very high. You think in notifications and sometimes forget to look up at the sky.",
    description: "You spend almost your whole day looking at a glowing glass screen. You find it hard to sit quietly without checking your phone. But don't worry—the fact that you smiled during this test shows your real human heart is still alive inside you!",
    quote: "“I unlocked my phone to check the time and spent 40 minutes watching cooking videos instead.”",
    traits: [
      { name: "Heart & Empathy", value: 50, label: "Battery Saver Mode" },
      { name: "Awkward Moments", value: 82, label: "Social Lag" },
      { name: "Fun & Mischief", value: 72, label: "Fast Scroller" },
      { name: "Phone Dependence", value: 90, label: "Glued to Screen" }
    ]
  },
  {
    minScore: 0,
    maxScore: 44,
    title: "Are You a Robot in Disguise?",
    badge: "CAPTCHA CONFUSED",
    badgeColor: "rose",
    verdict: "You answered so logically that even the CAPTCHA is confused. Are you secretly a computer program?",
    description: "You don't get embarrassed easily, you make quick logical decisions, and you rarely show emotions. You might need to eat some good food with friends, watch a funny movie, and let yourself be a little silly!",
    quote: "“I make decisions with pure logic, not with emotions.”",
    traits: [
      { name: "Heart & Empathy", value: 25, label: "Low Emotion" },
      { name: "Awkward Moments", value: 18, label: "Zero Cringe" },
      { name: "Fun & Mischief", value: 40, label: "Straight Line" },
      { name: "Phone Dependence", value: 95, label: "Digital Mind" }
    ]
  }
];

export function calculateHumanScore(answers) {
  if (!answers || answers.length === 0) return 0;
  
  const totalScore = answers.reduce((sum, item) => sum + (item.option.score || 7), 0);
  const maxPossible = answers.length * 10;
  const minPossible = answers.length * 3;
  
  const normalized = Math.round(((totalScore - minPossible) / (maxPossible - minPossible)) * 100);
  const clamped = Math.max(15, Math.min(99, normalized));
  return clamped;
}

export function getPersonaForScore(score) {
  return PERSONAS.find(p => score >= p.minScore && score <= p.maxScore) || PERSONAS[1];
}
