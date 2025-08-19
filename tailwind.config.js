/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'void-black': '#000000',
        'deep-space': '#0a0a0a',
        'cosmic-gray': '#1a1a1a',
        'tech-gray': '#374151',
        'dark-gray': '#1f2937',
        'light-gray': '#6b7280',
        'steel-gray': '#4b5563',
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'void-pulse': 'voidPulse 6s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite',
        'aurora': 'aurora 15s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 1s ease-out',
        'slide-in-right': 'slideInRight 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'scale-in': 'scaleIn 0.8s ease-out',
        'spin-slow': 'spin 8s linear infinite',
        'reverse-spin': 'reverse-spin 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(220, 20, 60, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(220, 20, 60, 0.8)' },
        },
        voidPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(100px) translateY(-50px)' },
          '50%': { transform: 'translateX(-50px) translateY(-100px)' },
          '75%': { transform: 'translateX(-100px) translateY(50px)' },
        },
        aurora: {
          '0%, 100%': { 
            transform: 'translateX(0px) scaleX(1)',
            opacity: '0.3'
          },
          '33%': { 
            transform: 'translateX(100px) scaleX(1.2)',
            opacity: '0.6'
          },
          '66%': { 
            transform: 'translateX(-50px) scaleX(0.8)',
            opacity: '0.4'
          },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'reverse-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};