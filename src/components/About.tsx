import { ScrollReveal } from './ScrollReveal'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { Target, Rocket, Lightbulb, Handshake } from "lucide-react"


function About() {
  const { t } = useTranslation()

  const values = [
    {
      icon: Target,
      title: t('about.values.results.title'),
      description: t('about.values.results.description')
    },
    {
      icon: Rocket,
      title: t('about.values.adaptability.title'),
      description: t('about.values.adaptability.description')
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: Handshake,
      title: t('about.values.communication.title'),
      description: t('about.values.communication.description')
    }
  ]


  // -----------------------------
  // CAROUSEL STATE
  // -----------------------------
  const [index, setIndex] = useState(0)
  const [, setVisibleCount] = useState(4)

  // Detecta el tamaño real de pantalla (responsive real)
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 640) setVisibleCount(1)
      else if (w < 1024) setVisibleCount(2)
      else if (w < 1280) setVisibleCount(3)
      else setVisibleCount(4)
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % values.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [values.length])

  const next = () => setIndex((prev) => (prev + 1) % values.length)
  const prev = () => setIndex((prev) => (prev - 1 + values.length) % values.length)

  // // Valores visibles en pantalla (ventana)
  // const visibleValues = useMemo(() => {
  //   const result = []
  //   for (let i = 0; i < visibleCount; i++) {
  //     result.push(values[(index + i) % values.length])
  //   }
  //   return result
  // }, [values, index, visibleCount])

  return (
    <section id="nosotros" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/4 right-0"
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
        _attach_ =

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">{t('about.title')} </span>
              <span className="text-transparent bg-clip-text text-white">
                {t('about.titleHighlight')}
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              <span className="text-white font-semibold">PrismCode</span>{' '}
              {t('about.intro')}
              <span className="text-green-400">
                {' '}
                {t('about.introHighlight')}
              </span>
              .
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
                <span className="text-green-400 font-semibold">
                  {' '}
                  {t('about.approach.p1Highlight')}
                </span>
                {t('about.approach.p1End')}
              </p>

              <p className="text-gray-400 leading-relaxed">
                {t('about.approach.p2Start')}
                <span className="text-white font-semibold">
                  {' '}
                  {t('about.approach.text1')}
                </span>{' '}
                {t('about.approach.t1')}
                <span className="text-white font-semibold">
                  {' '}
                  {t('about.approach.text2')}
                </span>
                , {t('about.approach.t2')}
                <span className="text-white font-semibold">
                  {' '}
                  {t('about.approach.text3')}
                </span>{' '}
                {t('about.approach.t3')}
                <span className="text-white font-semibold">
                  {' '}
                  {t('about.approach.text4')}
                </span>
                {t('about.approach.p2End')}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    1+
                  </div>
                  <div className="text-sm text-gray-400">
                    {t('about.stats.years')}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    5+
                  </div>
                  <div className="text-sm text-gray-400">
                    {t('about.stats.projects')}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    100%
                  </div>
                  <div className="text-sm text-gray-400">
                    {t('about.stats.satisfaction')}
                  </div>
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
                <div className="text-9xl opacity-20 font-mono text-white">
                  {'</>'}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-green-700 text-white px-6 py-3 rounded-xl font-bold shadow-xl"
              >
                🇨🇷 {t('about.badge')}
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Values Spotlight Carousel */}

        <ScrollReveal>
          <h2 className="text-white text-center text-4xl md:text-5xl font-bold mb-4">
            {t('about.valuesTitle')}
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <div className="relative max-w-6xl mx-auto px-6">


            {/* Botón Izquierda */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 border border-gray-700 flex items-center justify-center text-white hover:border-green-500/60 transition"
            >
              ←
            </button>

            {/* Botón Derecha */}
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 border border-gray-700 flex items-center justify-center text-white hover:border-green-500/60 transition"
            >
              →
            </button>

            {/* Carrusel */}
            <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="popLayout">
                {values.map((value, i) => {
                  // distancia relativa al index actual
                  let offset = i - index

                  // wrap infinito
                  if (offset > values.length / 2) offset -= values.length
                  if (offset < -values.length / 2) offset += values.length

                  const isActive = offset === 0

                  return (
                    <motion.div
                      key={value.title}
                      className="absolute"
                      animate={{
                        x: offset * 340,
                        scale: isActive ? 1 : 0.85,
                        opacity: isActive ? 1 : 0.35,
                        filter: isActive ? "blur(0px)" : "blur(3px)"
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 22
                      }}
                      style={{
                        zIndex: isActive ? 20 : 10
                      }}
                    >
                      <motion.div
                        whileHover={isActive ? { y: -6 } : {}}
                        className={`mb-8w-[320px] md:w-[360px] h-[240px] rounded-2xl p-7   border transition-all backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.35)] 
                        ${isActive ? "bg-gradient-to-b from-gray-900/40 to-black/40 border-green-500/40"
                            : "bg-gray-900/30 border-gray-800"
                          }`}
                      >
                        <div className="flex justify-center mb-5">
                          <motion.div
                            animate={isActive ? { scale: 1 } : { scale: 0.92 }}
                            transition={{ duration: 0.25 }}
                            className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center border backdrop-blur-md ${isActive ? "bg-green-500/10 border-emerald-400/40" 
                                : "bg-white/5 border-white/10"
                              }`}
                          >
                            {/* Glow */}
                            <div
                              className={`absolute inset-0 rounded-2xl blur-xl opacity-0 transition-opacity duration-300 ${isActive ? "opacity-100 bg-green-500/20" : ""}`}
                            />

                            {/* Icon */}
                            <value.icon
                              className={`relative z-10 w-8 h-8 md:w-10 md:h-10 ${isActive ? "text-green-300" : "text-gray-400"}`}
                            />
                          </motion.div>
                        </div>


                        <h4 className="text-xl font-bold text-white mb-2">
                          {value.title}
                        </h4>

                        <p className="text-sm text-gray-400 leading-relaxed mb-8">
                          {value.description}
                        </p>

                      </motion.div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {values.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-emerald-400" : "w-2.5 bg-gray-700"
                    }`}
                />
              ))}
            </div>

          </div>
        </ScrollReveal>


      </div>
    </section>
  )
}

export default About
