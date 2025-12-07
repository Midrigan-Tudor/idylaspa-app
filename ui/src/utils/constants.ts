// ============================================
// URLs
// ============================================
export const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1v3ukc6GdsO3nygSuMGY-VAai1xnM4INOGYaXp-la2gSPmmsh1XYGrGp_qbIrP5O8C6Ydw9_6T?gv=true";

export const SOCIAL_URLS = {
  instagram: "https://www.instagram.com/idyla_spa?igsh=dDV2cW0zaHlzYnk3",
  facebook: "https://www.facebook.com/share/1T92uV7iZD/?mibextid=wwXIfr",
  tiktok:
    "https://www.tiktok.com/@masaj.asiatic.idyla.spa?_r=1&_t=ZN-921FNcRr0R4",
} as const;

// ============================================
// Hero Images
// ============================================
export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=80",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&q=80",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80",
] as const;

// ============================================
// Solid Colors
// ============================================
export const COLORS = {
  // Dark backgrounds
  darkBg: "#0F1410",
  darkPaper: "#1A201C",
  darkCard: "#1A201C",

  // Light backgrounds
  lightBg: "#FAF7F2",
  lightPaper: "#FFFFFF",

  // Text colors
  darkText: "#1B1B1B",
  lightText: "#F5F0E8",
  darkTextPrimary: "#2C2416",

  // Primary (Warm gold/amber)
  primaryMain: "#C9A050",
  primaryLight: "#E0BE7A",
  primaryDark: "#9A7A3A",

  // Secondary (Warm gold/amber)
  secondaryMain: "#C9A050",
  secondaryLight: "#E0BE7A",
  secondaryDark: "#9A7A3A",

  // Accent (Terracotta)
  accentMain: "#B86F52",
  accentLight: "#D4937A",
  accentDark: "#8A4F38",
} as const;

// ============================================
// RGBA Colors - Dark Theme
// ============================================
export const DARK_RGBA = {
  // Backgrounds with transparency
  bg95: "rgba(15, 20, 16, 0.95)",
  bg85: "rgba(15, 20, 16, 0.85)",
  bg70: "rgba(15, 20, 16, 0.7)",

  // Card/Paper backgrounds
  card80: "rgba(26, 32, 28, 0.8)",
  card60: "rgba(26, 32, 28, 0.6)",
  card50: "rgba(26, 32, 28, 0.5)",

  // Gold/Secondary with transparency
  gold50: "rgba(201, 160, 80, 0.5)",
  gold30: "rgba(201, 160, 80, 0.3)",
  gold20: "rgba(201, 160, 80, 0.2)",
  gold15: "rgba(201, 160, 80, 0.15)",
  gold10: "rgba(201, 160, 80, 0.1)",
  gold05: "rgba(201, 160, 80, 0.05)",
  gold03: "rgba(201, 160, 80, 0.03)",

  // Black with transparency (shadows)
  shadow40: "rgba(0, 0, 0, 0.4)",
  shadow30: "rgba(0, 0, 0, 0.3)",
  shadow15: "rgba(0, 0, 0, 0.15)",
  shadow08: "rgba(0, 0, 0, 0.08)",
} as const;

// ============================================
// RGBA Colors - Light Theme
// ============================================
export const LIGHT_RGBA = {
  // Backgrounds with transparency
  bg95: "rgba(250, 247, 242, 0.95)",
  bg85: "rgba(250, 247, 242, 0.85)",
  bg80: "rgba(250, 247, 242, 0.8)",
  bg60: "rgba(250, 247, 242, 0.6)",

  // Card/Paper backgrounds
  card90: "rgba(255, 255, 255, 0.9)",
  card80: "rgba(255, 255, 255, 0.8)",
  card50: "rgba(255, 255, 255, 0.5)",

  // Gold/Primary with transparency
  gold50: "rgba(201, 160, 80, 0.5)",
  gold30: "rgba(201, 160, 80, 0.3)",
  gold20: "rgba(201, 160, 80, 0.2)",
  gold15: "rgba(201, 160, 80, 0.15)",
  gold10: "rgba(201, 160, 80, 0.1)",
  gold05: "rgba(201, 160, 80, 0.05)",
  gold03: "rgba(201, 160, 80, 0.03)",

  // Black with transparency (shadows - same as dark)
  shadow40: "rgba(0, 0, 0, 0.4)",
  shadow30: "rgba(0, 0, 0, 0.3)",
  shadow10: "rgba(0, 0, 0, 0.1)",
  shadow08: "rgba(0, 0, 0, 0.08)",
} as const;

// ============================================
// Fonts
// ============================================
export const FONTS = {
  playfair: '"Playfair Display", "Georgia", serif',
  cormorant: '"Cormorant Garamond", "Georgia", serif',
} as const;

// ============================================
// Scroll Threshold
// ============================================
export const SCROLL_THRESHOLD = 50;

// ============================================
// Slideshow Interval (ms)
// ============================================
export const SLIDESHOW_INTERVAL = 5000;
