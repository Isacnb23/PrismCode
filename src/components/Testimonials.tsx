import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'

function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Rodríguez',
      role: 'CEO, FA Autos',
      image: '👨‍💼',
      text: 'El catálogo web superó nuestras expectativas. La plataforma es intuitiva y nos ha ayudado a aumentar nuestras ventas en línea significativamente.',
      rating: 5,
      project: 'Catálogo Web de Vehículos'
    },
    {
      name: 'Dra. María Pérez',
      role: 'Directora, Clínica Dental PCA',
      image: '👩‍⚕️',
      text: 'El sistema de gestión ha optimizado completamente nuestros procesos. Ahora tenemos control total sobre citas, historiales y facturación.',
      rating: 5,
      project: 'Sistema de Gestión Clínica'
    },
    {
      name: 'Juan Méndez',
      role: 'Gerente, PymeCo',
      image: '👨‍💻',
      text: 'La comunicación fue excelente durante todo el proyecto. Entregas puntuales y un sistema que realmente facilita nuestras operaciones diarias.',
      rating: 5,
      project: 'Sistema POS'
    }
  ]

  return (
    <section id="testimonios" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Lo que dicen </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                nuestros clientes
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Testimonios reales de proyectos completados
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de testimonios */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 0.2}
              direction="up"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all relative"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-5xl text-emerald-500/20 group-hover:text-emerald-500/30 transition-colors">
                  "
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Project tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs border border-emerald-500/30">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 rounded-2xl transition-all duration-300 pointer-events-none" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Nota para actualizar */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12 p-6 bg-gray-900/30 rounded-xl border border-gray-800">
            <p className="text-sm text-gray-500 italic">
              💡 Nota: Puedes actualizar estos testimonios con feedback real de tus clientes cuando los tengas
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

export default Testimonials