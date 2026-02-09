/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🎓 ANIMACIONES - Nombres que usamos en className
      animation: {
        'blob': 'blob 7s infinite',
        'gradient': 'gradient 8s linear infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        
        // ⭐ NUEVAS ANIMACIONES para las ondas
        'wave-slow': 'wave 20s ease-in-out infinite',    // 20 segundos, suave, infinito
        'wave-medium': 'wave 15s ease-in-out infinite',  // 15 segundos
        'wave-fast': 'wave 10s ease-in-out infinite',    // 10 segundos
        
        // ⭐ ANIMACIONES para las líneas
        'dash': 'dash 3s linear infinite',          // Línea se mueve cada 3 segundos
        'dash-slow': 'dash 4s linear infinite',     // Más lenta
        'dash-fast': 'dash 2s linear infinite',     // Más rápida
      },
      
      // 🎓 KEYFRAMES - Definen QUÉ HACE cada animación
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        
        // ⭐ NUEVA: Animación de ondas
        // 🎓 0% = estado inicial, 25% = primer cuarto, 50% = mitad, etc.
        wave: {
          '0%, 100%': {
            transform: 'translate(0, 0) rotate(0deg)',  // Posición original
          },
          '25%': {
            transform: 'translate(50px, 50px) rotate(5deg)',  // Se mueve 50px a la derecha y abajo, rota 5°
          },
          '50%': {
            transform: 'translate(0, 100px) rotate(0deg)',  // Baja 100px
          },
          '75%': {
            transform: 'translate(-50px, 50px) rotate(-5deg)',  // Izquierda 50px, rota -5°
          },
        },
        
        // ⭐ NUEVA: Animación de líneas (dash)
        // 🎓 strokeDashoffset = mueve la línea discontinua
        dash: {
          '0%': {
            strokeDashoffset: '0',      // Posición inicial
          },
          '100%': {
            strokeDashoffset: '1000',   // Se mueve 1000px (crea efecto de movimiento)
          },
        },
      },
    },
  },
  plugins: [],
}