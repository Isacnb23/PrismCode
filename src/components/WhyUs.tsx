import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'
import { useState } from 'react'

function WhyUs() {
  const [activeIndex, setActiveIndex] = useState(0)

  const reasons = [
    {
      number: '01',
      title: 'Sin Límites Tecnológicos',
      description: 'No estamos casados con un stack específico. Si tu proyecto necesita una tecnología en particular, la aprendemos y la implementamos. Tu visión define las herramientas, no al revés.',
      icon: '🎯',
      color: 'emerald'
    },
    {
      number: '02',
      title: 'Comunicación Transparente',
      description: 'Actualizaciones constantes, sin sorpresas. Trabajamos con metodologías ágiles donde tú eres parte del proceso en cada sprint. Siempre sabrás en qué estamos trabajando.',
      icon: '💬',
      color: 'teal'
    },
    {
      number: '03',
      title: 'Código Limpio y Documentado',
      description: 'Escribimos código pensando en el futuro. Documentación clara, arquitectura escalable y buenas prácticas que facilitan el mantenimiento y las futuras mejoras.',
      icon: '📝',
      color: 'emerald'
    },
    {
      number: '04',
      title: 'Soporte Post-Entrega',
      description: 'No desaparecemos cuando el proyecto termina. Ofrecemos soporte continuo, correcciones y optimizaciones para que tu producto siga funcionando perfectamente.',
      icon: '🛠️',
      color: 'teal'
    },
    {
      number: '05',
      title: 'Orientado a Resultados',
      description: 'Nos importan los resultados reales: usuarios satisfechos, procesos optimizados, negocios que crecen. No solo escribimos código, resolvemos problemas.',
      icon: '📈',
      color: 'emerald'
    },
    {
      number: '06',
      title: 'Precios Justos y Claros',
      description: 'Cotizaciones transparentes sin costos ocultos. Trabajamos con presupuestos realistas y entregamos lo prometido. Tu inversión es respetada.',
      icon: '💰',
      color: 'teal'
    }
  ]

  return (
    <section id="porque-prismcode" className="py-20 relative overflow-hidden ">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-1/2 left-0"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">¿Por qué </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                PrismCode?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Más que un proveedor de servicios, somos tu aliado tecnológico para el éxito
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop: 2 columns layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div
                whileHover={{ scale: 1.02, x: index % 2 === 0 ? 5 : -5 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all cursor-pointer"
              >
                {/* Number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 text-black rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                  {reason.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 rounded-2xl transition-all duration-300 pointer-events-none" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: Accordion style */}
        <div className="md:hidden space-y-4">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{reason.icon}</div>
                    <div>
                      <div className="text-xs text-emerald-400 font-bold mb-1">{reason.number}</div>
                      <h3 className="text-lg font-bold text-white">{reason.title}</h3>
                    </div>
                  </div>
                  <motion.svg
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeIndex === index ? 'auto' : 0,
                    opacity: activeIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section
        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-12 border border-emerald-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Listo para comenzar tu proyecto?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Conversemos sobre tu idea y cómo podemos ayudarte a hacerla realidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contacto"
                className="inline-block bg-emerald-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30 hover:scale-105"
              >
                Iniciar Conversación
              </a>
              <a 
                href="#proyectos"
                className="inline-block border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-xl font-bold hover:bg-emerald-500/10 transition-all"
              >
                Ver Portafolio
              </a>
            </div>
          </div>
        </ScrollReveal> */}

      </div>
    </section>
  )
}

export default WhyUs