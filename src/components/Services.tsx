import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'

function Services() {
  const services = [
    {
      icon: '🌐',
      title: 'Desarrollo Web Full-Stack',
      description: 'Aplicaciones web modernas y escalables con React, Angular y Node.js. Interfaces responsivas y experiencias de usuario excepcionales.',
      tags: ['React', 'Angular', 'Node.js', 'ASP.NET Core']
    },
    {
      icon: '📱',
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas y multiplataforma con Flutter. Rendimiento óptimo en iOS y Android con una única base de código.',
      tags: ['Flutter', 'FlutterFlow', 'iOS', 'Android']
    },
    {
      icon: '🗄️',
      title: 'Backend & Bases de Datos',
      description: 'Arquitecturas robustas y APIs RESTful. Diseño y optimización de bases de datos SQL y NoSQL para máximo rendimiento.',
      tags: ['MongoDB', 'SQL Server', 'APIs REST', 'PostgreSQL']
    }
  ]

  return (
    <section id="servicios" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Servicios</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Soluciones tecnológicas completas para llevar tu negocio al siguiente nivel
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 0.2}
              direction="up"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all cursor-pointer"
              >
                {/* Glow effect en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 rounded-2xl transition-all duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services