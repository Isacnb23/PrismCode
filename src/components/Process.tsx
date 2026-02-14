import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'

function Process() {
  const steps = [
    {
      number: '01',
      title: 'Descubrimiento',
      description: 'Conversamos sobre tu proyecto, objetivos y necesidades. Definimos alcance, tecnologías y cronograma.',
      icon: '🔍',
      duration: '1-2 días'
    },
    {
      number: '02',
      title: 'Planificación',
      description: 'Creamos wireframes, arquitectura técnica y plan de sprints. Definimos entregables y milestones.',
      icon: '📋',
      duration: '3-5 días'
    },
    {
      number: '03',
      title: 'Desarrollo',
      description: 'Codificamos en sprints de 2 semanas con entregas incrementales. Acceso a ambiente de pruebas en tiempo real.',
      icon: '⚙️',
      duration: '4-12 semanas'
    },
    {
      number: '04',
      title: 'Testing & QA',
      description: 'Pruebas exhaustivas de funcionalidad, rendimiento y seguridad. Correcciones y optimizaciones.',
      icon: '🧪',
      duration: '1-2 semanas'
    },
    {
      number: '05',
      title: 'Deploy & Soporte',
      description: 'Lanzamiento a producción, monitoreo y 30 días de soporte incluido. Documentación completa entregada.',
      icon: '🚀',
      duration: 'Continuo'
    }
  ]

  return (
    <section id="proceso" className="py-20 relative overflow-hidden ">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-1/2 right-1/4"
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
              <span className="text-white">Nuestro </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Proceso
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              De la idea a la realidad en 5 pasos claros y organizados
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Línea conectora (desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <ScrollReveal 
                key={index} 
                delay={index * 0.2}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  
                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.05, x: index % 2 === 0 ? 10 : -10 }}
                    className="flex-1 bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{step.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-bold text-emerald-400">{step.number}</span>
                          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-3">
                          {step.description}
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full text-sm text-emerald-400 border border-emerald-500/30">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Center circle (desktop) */}
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-emerald-500 items-center justify-center font-bold text-black text-xl shadow-lg shadow-emerald-500/50 relative z-10">
                    {index + 1}
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        {/* <ScrollReveal delay={0.6}>
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">¿Listo para comenzar?</p>
            <a 
              href="#contacto"
              className="inline-block bg-emerald-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30 hover:scale-105"
            >
              Iniciar Proyecto
            </a>
          </div>
        </ScrollReveal> */}

      </div>
    </section>
  )
}

export default Process