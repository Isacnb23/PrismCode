import { motion } from 'framer-motion'
import logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'  // ⬅️ AGREGAR

function Hero() {
  const { t } = useTranslation()  // ⬅️ AGREGAR

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* Ondas decorativas */}
      <div
        className="absolute top-0 left-0 opacity-20"
        style={{
          width: '1100px',
          height: '500px',
          background:
            'radial-gradient(ellipse 800px 400px at 20% 20%, rgba(16,185,129,0.3), transparent)',
          transform: 'translateX(-15%) translateY(-10%) rotate(-10deg)',
        }}
      />

      <div
        className="absolute top-0 right-0 opacity-15"
        style={{
          width: '950px',
          height: '650px',
          background:
            'radial-gradient(ellipse 700px 500px at 100% -50%, rgba(5,150,105,0.3), transparent)',
          transform: 'translateX(15%) translateY(-5%) rotate(15deg)',
        }}
      />

      <div
        className="absolute top-0 right-0 opacity-20"
        style={{
          width: '1100px',
          height: '500px',
          background:
            'radial-gradient(ellipse 800px 400px at 90% 10%, rgba(20,184,166,0.3), transparent)',
          transform: 'translateX(15%) translateY(-10%) rotate(10deg)',
        }}
      />


      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">



        {/* Logo animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-8"
        >
          <img
            src={logo}
            alt="PrismCode Logo"
            className="w-32 h-32 drop-shadow-2xl"
          />
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">{t('hero.title1')}</span><br />  {/* ⬅️ CAMBIAR */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-1000">
            {t('hero.title2')}  {/* ⬅️ CAMBIAR */}
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
        >
          {t('hero.subtitle')}  {/* ⬅️ CAMBIAR */}
        </motion.p>

      
        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          

          <a
            href="#contacto"
            className="border-2 border-green-500 text-green-400 px-8 py-4 rounded-xl font-bold hover:bg-green-500/10 transition-all"
          >
            {t('hero.cta2')}  {/* ⬅️ CAMBIAR */}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="pt-8 bottom-8 "
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-sm">{t('hero.scroll')}</span>  {/* ⬅️ CAMBIAR */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero