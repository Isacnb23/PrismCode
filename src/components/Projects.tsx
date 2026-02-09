import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'

function Projects() {
  const projects = [
    {
      title: 'FA Autos',
      description: 'Catálogo web de vehículos con sistema de gestión completo. Plataforma para visualizar inventario, filtrar por características y gestionar publicaciones de autos.',
      image: '🚗',
      tags: ['React', 'Node.js', 'MongoDB', 'Vite'],
      link: 'https://faautos.com',
      status: 'live'
    },
    {
      title: 'Clínica Dental PCA',
      description: 'Sistema de gestión integral para clínica dental. Incluye agenda de citas, historiales clínicos, facturación y módulo de inventario de materiales.',
      image: '🦷',
      tags: ['ASP.NET Core', 'SQL Server', 'Angular', 'Entity Framework'],
      link: '#',
      status: 'development'
    },
    {
      title: 'PymeCo POS',
      description: 'Sistema punto de venta completo para pequeñas y medianas empresas. Gestión de ventas, inventario, reportes en tiempo real y control de usuarios.',
      image: '🛒',
      tags: ['ASP.NET Core', 'SQL Server', 'React', 'Chart.js'],
      link: '#',
      status: 'development'
    }
  ]

  return (
    <section id="proyectos" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal direction="down">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Proyectos </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Destacados
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Algunos de los proyectos en los que he trabajado
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 0.15}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-all"
              >
                {/* Status badge */}
                <div className="absolute top-4 right-4 z-10">
                  {project.status === 'live' ? (
                    <span className="px-3 py-1 text-xs bg-emerald-500 text-black rounded-full font-bold flex items-center gap-1">
                      <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                      En vivo
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-full font-bold border border-orange-500/30">
                      En desarrollo
                    </span>
                  )}
                </div>

                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.status === 'live' && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium group"
                    >
                      Ver proyecto 
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:via-emerald-500/5 group-hover:to-emerald-500/0 transition-all duration-500 pointer-events-none" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.5}>
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">¿Tienes un proyecto en mente?</p>
            <a 
              href="#contacto"
              className="inline-block bg-emerald-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30"
            >
              Trabajemos juntos
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

export default Projects