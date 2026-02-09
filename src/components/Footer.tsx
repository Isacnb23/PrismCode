import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'

function Footer() {
  const currentYear = new Date().getFullYear()

  // Función de smooth scroll integrada
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    
    if (href && href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      
      if (element) {
        const navbarHeight = 100
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  const socialLinks = [
    { icon: '📷', label: 'Instagram', href: '#' },
    { icon: '𝕏', label: 'Twitter', href: '#' },
    { icon: '💼', label: 'LinkedIn', href: '#' },
    { icon: '🐙', label: 'GitHub', href: '#' }
  ]

  const navigationLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ]

  const socialNavLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'Twitter (X)', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'GitHub', href: '#' }
  ]

  return (
    <footer className="relative bg-black overflow-hidden pt-20 pb-8">
      {/* Ondas decorativas */}
      <div
        className="absolute bottom-0 left-0 opacity-20"
        style={{
          width: '1100px',
          height: '500px',
          background: 'radial-gradient(ellipse 800px 400px at 20% 80%, rgba(16,185,129,0.3), transparent)',
          transform: 'translateX(-15%) translateY(10%) rotate(-10deg)',
        }}
      />

      <div
        className="absolute top-0 right-0 opacity-15"
        style={{
          width: '950px',
          height: '650px',
          background: 'radial-gradient(ellipse 700px 500px at 70% 30%, rgba(5,150,105,0.3), transparent)',
          transform: 'translateX(15%) translateY(-5%) rotate(15deg)',
        }}
      />

      <div
        className="absolute bottom-0 right-0 opacity-20"
        style={{
          width: '900px',
          height: '500px',
          background: 'radial-gradient(ellipse 750px 350px at 80% 70%, rgba(20,184,166,0.3), transparent)',
          transform: 'translateX(20%) translateY(12%) rotate(5deg)',
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16 mb-16">
          
          {/* Brand */}
          <ScrollReveal direction="up">
            <div className="lg:max-w-sm">
              <div className="text-3xl font-bold mb-4">
                <span className="text-white">Prism</span>
                <span className="text-emerald-400">Code</span>
              </div>

              <p className="text-base text-gray-400 mb-4 leading-relaxed max-w-xs">
                Desarrollo de software personalizado con tecnologías modernas.
                Transformando ideas en soluciones digitales desde Costa Rica.
              </p>

              <a
                href="mailto:inavarrobermudez13@gmail.com"
                className="text-base text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
              >
                <span>inavarrobermudez13@gmail.com</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          {/* Columnas de enlaces */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-12 lg:gap-16">
            
            {/* Enlaces */}
            <ScrollReveal direction="up" delay={0.1}>
              <nav className="min-w-[140px]">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
                  Enlaces
                </h3>
                <ul className="space-y-3">
                  {navigationLinks.map((link, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href={link.href}
                        onClick={handleSmoothScroll}
                        className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                      >
                        <span className="w-0 group-hover:w-2 h-px bg-emerald-400 transition-all duration-300"></span>
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </ScrollReveal>

            {/* Redes */}
            <ScrollReveal direction="up" delay={0.2}>
              <nav className="min-w-[140px]">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
                  Redes Sociales
                </h3>
                <ul className="space-y-3">
                  {socialNavLinks.map((link, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                      >
                        <span className="w-0 group-hover:w-2 h-px bg-emerald-400 transition-all duration-300"></span>
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </ScrollReveal>

            {/* Proyectos */}
            <ScrollReveal direction="up" delay={0.3}>
              <nav className="min-w-[140px]">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
                  Proyectos
                </h3>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <a
                      href="https://faautos.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-emerald-400 transition-all duration-300"></span>
                      FA Autos
                    </a>
                  </motion.li>
                  <li>
                    <span className="text-sm text-gray-500">
                      Clínica Dental — Próximamente
                    </span>
                  </li>
                  <li>
                    <span className="text-sm text-gray-500">
                      PymeCo POS — Próximamente
                    </span>
                  </li>
                </ul>
              </nav>
            </ScrollReveal>

          </div>
        </div>

        {/* Separador animado */}
        <ScrollReveal>
          <motion.div 
            className="flex justify-start mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          </motion.div>
        </ScrollReveal>

        {/* Bottom */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <p className="text-base text-gray-400">
              © {currentYear} PrismCode. Todos los derechos reservados.
            </p>

            {/* Iconos sociales animados */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-emerald-500/20 transition-all border border-gray-800 hover:border-emerald-500/50 text-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </footer>
  )
}

export default Footer