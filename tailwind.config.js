/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['Instrument Serif', 'serif'],
      },
      colors: {
        bg: 'hsl(var(--bg))',
        surface: 'hsl(var(--surface))',
        'text-primary': 'hsl(var(--text))',
        muted: 'hsl(var(--muted))',
        stroke: 'hsl(var(--stroke))',
      }
    }
  },
  plugins: [],
  safelist: [
    // Dynamic classes jo JS se aati hain
    'opacity-0', 'opacity-100',
    'translate-y-0', 'translate-y-8', '-translate-y-8',
    'font-medium', 'bg-stroke/50',
    'text-text-primary', 'text-muted',
    'shadow-xl', 'shadow-black/20', 'border-white/20',
  ]
}