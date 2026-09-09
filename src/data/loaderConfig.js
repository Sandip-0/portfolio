/**
 * 🛠️ WELCOME LOADER CONFIGURATION
 * 5 distinct languages with language badges & step indicators
 */

export const LOADER_ITEMS = [
  { word: 'Hello',   lang: 'English', index: '01 / 05' },
  { word: 'Namaste', lang: 'Hindi',   index: '02 / 05' },
  { word: 'Bonjour', lang: 'French',  index: '03 / 05' },
  { word: 'Ciao',    lang: 'Italian', index: '04 / 05' },
  { word: 'Welcome', lang: 'Welcome', index: '05 / 05' },
];

// Time each word stays visible (in milliseconds)
// 270ms gives the human eye enough time to clearly register each language
export const MS_PER_WORD = 270;

// Brief hold on final "Welcome" before lifting curtain
export const FINAL_HOLD_MS = 250;

// Curtain slide duration (in seconds)
export const EXIT_SLIDE_SECONDS = 0.55;
