import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()

  const values = [
    {
      icon: '🎯',
      title: t('about.values.results.title'),
      description: t('about.values.results.description')
    },
    {
      icon: '🚀',
      title: t('about.values.adaptability.title'),
      description: t('about.values.adaptability.description')
    },
    {
      icon: '💡',
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: '🤝',
      title: t('about.values.communication.title'),
      description: t('about.values.communication.description')
    }
  ]

  return (
    <section id="nosotros" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-1/4 right-0"
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
              <span className="text-white">{t('about.title')} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                {t('about.titleHighlight')}
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              <span className="text-white font-semibold">PrismCode</span> {t('about.intro')}
              <span className="text-emerald-400"> {t('about.introHighlight')}</span>.
            </p>
          </div>
        </ScrollReveal>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left - Text */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                {t('about.approach.title')}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t('about.approach.p1')}
                <span className="text-emerald-400 font-semibold"> {t('about.approach.p1Highlight')}</span>
                {t('about.approach.p1End')}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {t('about.approach.p2Start')}
                <span className="text-white font-semibold"> aplicaciones web full-stack</span> hasta 
                <span className="text-white font-semibold"> apps móviles multiplataforma</span>, 
                pasando por <span className="text-white font-semibold">APIs robustas</span> y 
                <span className="text-white font-semibold"> arquitecturas escalables</span>
                {t('about.approach.p2End')}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-1">3+</div>
                  <div className="text-sm text-gray-400">{t('about.stats.years')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-1">10+</div>
                  <div className="text-sm text-gray-400">{t('about.stats.projects')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-1">100%</div>
                  <div className="text-sm text-gray-400">{t('about.stats.satisfaction')}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Image/Visual */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/30 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNiwxODUsMTI5LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
                
                {/* Code symbol */}
                <div className="text-9xl opacity-20 font-mono text-emerald-400">
                  {'</>'}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-emerald-500 text-black px-6 py-3 rounded-xl font-bold shadow-xl"
              >
                🇨🇷 {t('about.badge')}
              </motion.div>
            </div>
          </ScrollReveal>

        </div>

        {/* Values Grid */}
        <ScrollReveal>
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            {t('about.valuesTitle')}
          </h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About