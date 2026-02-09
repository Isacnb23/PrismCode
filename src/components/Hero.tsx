import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Contenedor animado */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Badge animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 text-sm font-medium">Disponible para proyectos</span>
        </motion.div>

        {/* Logo animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <img 
            src={logo} 
            alt="PrismCode Logo" 
            className="w-32 h-32 mx-auto drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]"
          />
        </motion.div>

        {/* Título principal animado */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-white">Construyendo el</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
            futuro digital
          </span>
        </motion.h1>

        {/* Subtítulo animado */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl text-gray-400 mb-4 max-w-2xl mx-auto"
        >
          Desarrollo web full-stack y aplicaciones móviles de alto rendimiento.
        </motion.p>

        {/* Tech stack animado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center gap-4 text-emerald-400 mb-12"
        >
          <span>React</span>
          <span>•</span>
          <span>Node.js</span>
          <span>•</span>
          <span>ASP.NET</span>
          <span>•</span>
          <span>Flutter</span>
        </motion.div>

        {/* Botones animados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#proyectos" 
            className="bg-emerald-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
          >
            Ver Proyectos
          </a>
          <a 
            href="#contacto" 
            className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-xl font-bold hover:bg-emerald-500/10 transition-all"
          >
            Contactar
          </a>
        </motion.div>

        {/* Scroll indicator animado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center gap-2 text-emerald-400">
              <span className="text-sm">Scroll</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero