import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

// ✅ ICONOS MODERNOS
import {
  Search,
  ClipboardList,
  Settings,
  FlaskConical,
  Rocket
} from 'lucide-react'

function Process() {
  const { t } = useTranslation()

  const icons = [
    Search,
    ClipboardList,
    Settings,
    FlaskConical,
    Rocket
  ]

  const steps = t('process.steps', { returnObjects: true }) as Array<{
    title: string
    description: string
    duration: string
  }>

  return (
    <section id="proceso" className="py-20 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/2 right-1/4"
          style={{
            width: '600px',
            height: '600px',
            background:
              'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">{t('process.title')} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-teal-900">
                {t('process.titleHighlight')}
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Línea conectora (desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-green-500 via-green-500/50 to-transparent transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = icons[index]

              return (
                <ScrollReveal
                  key={index}
                  delay={index * 0.2}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                >
                  <div
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0
                        ? 'md:flex-row'
                        : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        x: index % 2 === 0 ? 10 : -10
                      }}
                      transition={{ duration: 0.25 }}
                      className="flex-1 bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-green-500/50 transition-all relative overflow-hidden group"
                    >
                      {/* Glow hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-gradient-to-br from-green-500/10 via-transparent to-teal-500/10" />

                      <div className="flex items-start gap-4 relative z-10">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-green-400" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm font-bold text-green-400">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-2xl font-bold text-white">
                              {step.title}
                            </h3>
                          </div>

                          <p className="text-gray-400 leading-relaxed mb-3">
                            {step.description}
                          </p>

                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full text-sm text-green-400 border border-green-500/30">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {step.duration}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Center circle (desktop) */}
                    <div className="hidden md:flex w-16 h-16 rounded-full bg-green-500 items-center justify-center font-bold text-black text-xl shadow-lg shadow-green-500/50 relative z-10">
                      {index + 1}
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        {/* <ScrollReveal delay={0.6}>
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">{t('process.cta.question')}</p>
            <a
              href="#contacto"
              className="inline-block bg-emerald-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30 hover:scale-105"
            >
              {t('process.cta.button')}
            </a>
          </div>
        </ScrollReveal> */}
      </div>
    </section>
  )
}

export default Process
