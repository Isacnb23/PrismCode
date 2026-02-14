import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'  // ⬅️ AGREGAR

function Services() {
  const { t } = useTranslation()  // ⬅️ AGREGAR

  const services = [
    {
      icon: '🌐',
      title: t('services.web.title'),  // ⬅️ CAMBIAR
      description: t('services.web.description'),  // ⬅️ CAMBIAR
      tags: ['React', 'Angular', 'Node.js', 'ASP.NET Core']
    },
    {
      icon: '📱',
      title: t('services.mobile.title'),  // ⬅️ CAMBIAR
      description: t('services.mobile.description'),  // ⬅️ CAMBIAR
      tags: ['Flutter', 'FlutterFlow', 'iOS', 'Android']
    },
    {
      icon: '⚙️',
      title: t('services.backend.title'),  // ⬅️ CAMBIAR
      description: t('services.backend.description'),  // ⬅️ CAMBIAR
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                {t('services.title')}  {/* ⬅️ CAMBIAR */}
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('services.subtitle')}  {/* ⬅️ CAMBIAR */}
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
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all relative overflow-hidden"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="text-6xl mb-6"
                >
                  {service.icon}
                </motion.div>

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
                      className="px-3 py-1 text-xs bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-300 pointer-events-none" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services