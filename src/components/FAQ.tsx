import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'
import { useState } from 'react'

function FAQ() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '¿Cuánto tiempo toma desarrollar un proyecto?',
      answer: 'Depende del alcance, pero un proyecto web promedio toma entre 4-8 semanas. Un MVP móvil puede estar listo en 6-10 semanas. Siempre damos estimados realistas en la cotización inicial.',
      icon: '⏱️'
    },
    {
      question: '¿Trabajas con contratos o por hora?',
      answer: 'Ofrecemos ambas modalidades. Para proyectos definidos trabajamos con contrato fijo y entregas por sprints. Para soporte continuo o proyectos evolutivos, ofrecemos tarifas por hora.',
      icon: '📋'
    },
    {
      question: '¿Qué incluye el soporte post-entrega?',
      answer: 'Todo proyecto incluye 30 días de soporte para correcciones y ajustes menores. Después ofrecemos planes de mantenimiento mensual o soporte por incidentes según tus necesidades.',
      icon: '🛠️'
    },
    {
      question: '¿Puedo ver el progreso durante el desarrollo?',
      answer: 'Absolutamente. Trabajamos con metodología ágil, entregas cada 2 semanas y acceso a un ambiente de pruebas donde puedes ver los avances en tiempo real.',
      icon: '👀'
    },
    {
      question: '¿Qué pasa si necesito cambios después?',
      answer: 'El código es tuyo y está documentado. Puedes hacer cambios tú mismo o contratarnos para futuras mejoras. Diseñamos pensando en la escalabilidad y mantenibilidad.',
      icon: '🔄'
    },
    {
      question: '¿Trabajas solo o tienes equipo?',
      answer: 'Trabajo de forma independiente pero tengo una red de colaboradores especializados. Para proyectos grandes armo equipos según las necesidades específicas del cliente.',
      icon: '👥'
    }
  ]

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Preguntas </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Frecuentes
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Resuelve tus dudas sobre cómo trabajamos
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de FAQs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative h-64 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all cursor-pointer overflow-hidden"
              >
                {/* Front - Pregunta */}
                <motion.div
                  animate={{
                    opacity: hoveredIndex === index ? 0 : 1,
                    scale: hoveredIndex === index ? 0.9 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-6 flex flex-col justify-center"
                >
                  <div className="text-4xl mb-4">{faq.icon}</div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {faq.question}
                  </h3>
                </motion.div>

                {/* Back - Respuesta */}
                <motion.div
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.9
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-6 flex items-center"
                >
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </motion.div>

                {/* Hover glow */}
                <motion.div
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl pointer-events-none"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">¿Tienes otra pregunta?</p>
            <a 
              href="#contacto"
              className="inline-block border-2 border-emerald-500 text-emerald-400 px-8 py-3 rounded-xl font-bold hover:bg-emerald-500/10 transition-all"
            >
              Contáctanos directamente
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

export default FAQ