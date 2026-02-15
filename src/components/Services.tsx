import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { Code2, Smartphone, Server } from "lucide-react"

function Services() {
  const { t } = useTranslation()

  const services = [
    {
      icon: <Code2 size={46} />,
      title: t('services.web.title'),
      description: t('services.web.description'),
      points: [
        t('services.web.point1'),
        t('services.web.point2'),
        t('services.web.point3')
      ],
      tags: ['React', 'Angular', 'Node.js', 'ASP.NET Core']
    },
    {
      icon: <Smartphone size={46} />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      points: [
        t('services.mobile.point1'),
        t('services.mobile.point2'),
        t('services.mobile.point3')
      ],
      tags: ['Flutter', 'FlutterFlow', 'iOS', 'Android']
    },
    {
      icon: <Server size={46} />,
      title: t('services.backend.title'),
      description: t('services.backend.description'),
      points: [
        t('services.backend.point1'),
        t('services.backend.point2'),
        t('services.backend.point3')
      ],
      tags: ['SQL Server', 'PostgreSQL', 'REST APIs', 'MongoDB']
    }
  ]

  return (
    <section id="servicios" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-white text-center text-4xl md:text-5xl font-bold mb-4">
              {t('services.title')}              
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              delay={0.15 + index * 0.15}
              direction="up"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="
                  group relative
                  bg-gray-900/20 backdrop-blur-md
                  rounded-2xl p-8
                  border border-gray-800
                  hover:border-green-500/40
                  transition-all overflow-hidden
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute -top-24 -right-24 w-56 h-56
                    bg-green-500/10 blur-3xl
                    opacity-0 group-hover:opacity-100
                    transition duration-500
                  "
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  className="text-green-700 mb-6 relative z-10"
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-600 transition-colors relative z-10">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Points */}
                <ul className="space-y-2 mb-6 relative z-10">
                  {service.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-emerald-400 mt-0.5">✔</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                {/* <div className="flex flex-wrap gap-2 relative z-10">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="
                        px-3 py-1 text-xs rounded-full
                        bg-emerald-500/10 text-emerald-300
                        border border-emerald-500/20
                        group-hover:border-emerald-500/40
                        transition
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}

                {/* Línea animada abajo */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-green-700 to-teal-800 group-hover:w-full transition-all duration-500" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
