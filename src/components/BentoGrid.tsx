import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'

function BentoGrid() {
  return (
    <section id="bento" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                En Números
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Lo que nos define
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-6 gap-4 auto-rows-[140px]">
          
          {/* Experiencia - Grande */}
          <ScrollReveal direction="up" delay={0.1} className="col-span-6 md:col-span-3 row-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-6xl opacity-20">💼</div>
              <div className="text-6xl font-bold text-emerald-400 mb-2">3+</div>
              <div className="text-2xl font-bold text-white mb-2">Años de Experiencia</div>
              <p className="text-gray-400">Desarrollando soluciones para startups y empresas</p>
            </motion.div>
          </ScrollReveal>

          {/* Proyectos - Mediano */}
          <ScrollReveal direction="up" delay={0.2} className="col-span-3 md:col-span-2 row-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all flex flex-col justify-center"
            >
              <div className="text-4xl font-bold text-emerald-400 mb-1">10+</div>
              <div className="text-sm text-gray-400">Proyectos Completados</div>
            </motion.div>
          </ScrollReveal>

          {/* Satisfacción - Mediano */}
          <ScrollReveal direction="up" delay={0.3} className="col-span-3 md:col-span-1 row-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all flex flex-col justify-center items-center"
            >
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-emerald-400">100%</div>
              <div className="text-xs text-gray-400 text-center">Satisfacción</div>
            </motion.div>
          </ScrollReveal>

          {/* Costa Rica - Mediano ancho */}
          <ScrollReveal direction="up" delay={0.4} className="col-span-6 md:col-span-2 row-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full bg-gradient-to-r from-blue-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all flex items-center gap-4"
            >
              <div className="text-4xl">🇨🇷</div>
              <div>
                <div className="text-lg font-bold text-white">Hecho en Costa Rica</div>
                <div className="text-sm text-gray-400">Calidad Pura Vida</div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Respuesta rápida */}
          <ScrollReveal direction="up" delay={0.5} className="col-span-3 md:col-span-1 row-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all flex flex-col justify-center items-center"
            >
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-xl font-bold text-emerald-400">24h</div>
              <div className="text-xs text-gray-400 text-center">Respuesta</div>
            </motion.div>
          </ScrollReveal>

          {/* Metodología Ágil - Grande horizontal */}
          <ScrollReveal direction="up" delay={0.6} className="col-span-6 md:col-span-4 row-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all flex items-center justify-between"
            >
              <div>
                <div className="text-xl font-bold text-white mb-1">Metodología Ágil</div>
                <div className="text-sm text-gray-400">Entregas incrementales cada 2 semanas</div>
              </div>
              <div className="text-4xl">🚀</div>
            </motion.div>
          </ScrollReveal>

          {/* Tecnologías - Grande */}
          <ScrollReveal direction="up" delay={0.7} className="col-span-6 md:col-span-2 row-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all flex flex-col justify-center"
            >
              <div className="text-2xl font-bold text-white mb-4">Tech Stack Flexible</div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> React, Angular, Vue
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Node.js, .NET, Python
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Flutter, React Native
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> SQL, NoSQL, Cloud
                </div>
                <div className="text-emerald-400 font-semibold mt-3">+ Lo que tu proyecto necesite</div>
              </div>
            </motion.div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  )
}

export default BentoGrid