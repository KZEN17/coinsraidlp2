import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-page': '#190536',
        'bg-page-deep': '#0C031C',
        'bg-footer': '#120328',
        gray: {
          DEFAULT: '#A09AA9',
          light: '#9D9D9D',
        },
        'glow-purple-1': '#6900D9',
        'glow-purple-2': '#AD39D9',
        'glow-purple-3': '#AD39E6',
        'glow-orange': '#FF6200',
        'glow-pink': '#E433FF',
      },
      backgroundImage: {
        'gradient-page': 'linear-gradient(180deg, #19063C, #390567)',
        'gradient-card-glass': 'linear-gradient(180deg, rgba(25,6,60,0.72) 0%, rgba(57,5,103,0.72) 100%)',
        'gradient-panel-glass-64': 'linear-gradient(180deg, rgba(25,6,60,0.64) 0%, rgba(57,5,103,0.64) 100%)',
        'gradient-glass-btn': 'linear-gradient(180deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.15) 100%)',
        'gradient-ribbon-text': 'linear-gradient(180deg, #FFFFFF 0%, #CFA8E9 100%)',
        'gradient-accent-purple-text': 'linear-gradient(180deg, #8F06C4 0%, #4C0568 100%)',
        'gradient-gold-headline':
          'linear-gradient(98.08deg, rgba(239,138,38,0) 13.54%, rgba(255,249,136,0.9) 53.6%, rgba(255,249,136,0.9) 58.05%, rgba(255,249,136,0.9) 62.51%, rgba(255,244,30,0) 102.56%), radial-gradient(49.53% 60.74% at 50.56% 38.56%, #FFCC00 0%, rgba(255,153,0,0) 100%), linear-gradient(180deg, #EF8B26 38.56%, #FFF41E 249.87%)',
        'gradient-gold-text': 'linear-gradient(180deg, #EF8B26 0%, #FFF41E 100%)',
        'gradient-gold-step-title':
          'linear-gradient(99.88deg, rgba(239,138,38,0) 22.66%, rgba(255,249,136,0.3) 45.27%, rgba(255,249,136,0.3) 47.79%, rgba(255,249,136,0.3) 50.3%, rgba(255,244,30,0) 72.91%), radial-gradient(28.75% 28.75% at 50.15% 0%, #FFCC00 0%, rgba(255,153,0,0) 100%), linear-gradient(180deg, #EF8B26 0%, #FFF41E 100%)',
        'gradient-cta-hero': 'linear-gradient(180deg, #30D467 0%, #02964C 100%)',
        'gradient-cta-join': 'linear-gradient(180deg, #30D467 0%, #02964C 100%)',
        'glow-magenta': 'radial-gradient(50% 50% at 50% 50%, #962DFF 0%, #D000FF 100%)',
      },
      boxShadow: {
        'purple-card': '0px 0px 40px #DA31FE, inset 0px 5px 10px rgba(19,2,48,0.6), inset 0px -5px 10px rgba(19,2,48,0.6)',
        'gold-headline': '0px 5.27px 0px 0px #724600, inset 0.82px 0.82px 1.65px 0px #FFEC53, inset 0px -1.76px 0px 0px #EBB72F, inset 0px -1.76px 0px 0px #350947',
        'cta-hero': 'inset 0px -1.76px 0px 0px #006B32',
        'cta-join': 'inset 0px -2px 0px #006B32',
      },
      borderRadius: {
        'glass-card': '16px',
        pill: '300px',
        cta: '14.05px',
        'cta-sm': '16px',
        panel: '21px',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        // Stand-ins for the licensed Stolzl / Burbank Big Condensed (not on
        // Google Fonts, no font files on hand) — both loaded from Google Fonts.
        stolzl: ['Manrope', 'sans-serif'],
        burbank: ['Barlow Condensed', 'sans-serif'],
      },
      maxWidth: {
        content: '1316px',
      },
    },
  },
  plugins: [],
} satisfies Config;
