import { motion } from 'framer-motion'
import logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'  // ⬅️ AGREGAR

function Hero() {
  const { t } = useTranslation()  // ⬅️ AGREGAR

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        {/* Badge disponible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-medium text-sm">
            {t('hero.available')}  {/* ⬅️ CAMBIAR */}
          </span>
        </motion.div>

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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
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

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['React', 'Node.js', 'Flutter', 'MongoDB', 'ASP.NET'].map((tech, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg text-gray-300 text-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#proyectos"
            className="bg-emerald-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30 hover:scale-105"
          >
            {t('hero.cta1')}  {/* ⬅️ CAMBIAR */}
          </a>
          
          <a 
            href="#contacto"
            className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-xl font-bold hover:bg-emerald-500/10 transition-all"
          >
            {t('hero.cta2')}  {/* ⬅️ CAMBIAR */}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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