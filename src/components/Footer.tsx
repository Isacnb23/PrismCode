import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'

// ICONOS PRO
import { Instagram, Linkedin, Github, MessageCircle } from 'lucide-react'

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

  // ✅ SOLO REDES QUE QUERÉS
  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      href: 'https://instagram.com/'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      href: 'https://wa.me/50600000000'
    }
  ]

  const navigationLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ]

  const socialNavLinks = [
    { name: 'Instagram', href: 'https://instagram.com/' },
    { name: 'LinkedIn', href: 'https://linkedin.com/' },
    { name: 'GitHub', href: 'https://github.com/Isacnb23' },
    { name: 'WhatsApp', href: 'https://wa.me/50684309207' }
  ]

  return (
    <footer className="relative bg-black overflow-hidden pt-20 pb-10">
      {/* Ondas decorativas */}
      <div
        className="absolute bottom-0 left-0 opacity-20"
        style={{
          width: '1100px',
          height: '500px',
          background:
            'radial-gradient(ellipse 800px 400px at 20% 120%, rgba(16,185,129,0.3), transparent)',
          transform: 'translateX(-5%) translateY(10%) rotate(-10deg)'
        }}
      />

      <div
        className="absolute top-0 right-0 opacity-15"
        style={{
          width: '950px',
          height: '650px',
          background:
            'radial-gradient(ellipse 700px 500px at 70% 100%, rgba(5,150,105,0.3), transparent)',
          transform: 'translateX(15%) translateY(-5%) rotate(15deg)'
        }}
      />

      <div
        className="absolute bottom-0 right-0 opacity-20"
        style={{
          width: '900px',
          height: '500px',
          background:
            'radial-gradient(ellipse 750px 350px at 100% 100%, rgba(20,184,166,0.3), transparent)',
          transform: 'translateX(20%) translateY(12%) rotate(5deg)'
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16 mb-14">

          {/* Brand */}
          <ScrollReveal direction="up">
            <div className="lg:max-w-sm">
              {/* LOGO con brillo */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="inline-block relative"
              >
                {/* Glow */}
                <div
                  className="
                    absolute -inset-2 rounded-2xl
                    bg-gradient-to-r from-emerald-500/0 via-emerald-500/25 to-teal-500/0
                    blur-xl opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="group relative">
                  <div className="text-3xl font-bold mb-3">
                    <span className="text-white">Prism</span>
                    <span className="text-green-700">Code</span>
                  </div>

                  {/* Glow real al hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -top-2 left-0 w-28 h-10 bg-green-500/20 blur-2xl rounded-full" />
                    <div className="absolute -top-2 left-16 w-20 h-10 bg-teal-500/15 blur-2xl rounded-full" />
                  </div>
                </div>
              </motion.div>

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
                      PymeCo - Modelo
                    </span>
                  </li>
                </ul>
              </nav>
            </ScrollReveal>
          </div>
        </div>

        {/* Separador */}
        <ScrollReveal>
          <motion.div
            className="flex justify-start mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
          </motion.div>
        </ScrollReveal>

        {/* Bottom */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-sm md:text-base text-gray-400">
              © {currentYear} PrismCode. Todos los derechos reservados.
            </p>

            {/* Iconos sociales PRO + TOOLTIP */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    group relative
                    flex h-11 w-11 items-center justify-center
                    rounded-2xl
                    bg-black/40
                    border border-emerald-500/10
                    text-emerald-200/90
                    hover:text-white
                    hover:border-emerald-400/40
                    hover:bg-emerald-500/10
                    transition-all
                    backdrop-blur-md
                  "
                  aria-label={social.label}
                >
                  {/* Tooltip */}
                  <span
                    className="
                      pointer-events-none
                      absolute -top-11 left-1/2 -translate-x-1/2
                      whitespace-nowrap
                      rounded-xl
                      bg-black/80
                      border border-emerald-500/20
                      px-3 py-1.5
                      text-xs font-medium text-white
                      opacity-0 scale-95
                      transition-all duration-200
                      group-hover:opacity-100 group-hover:scale-100
                      backdrop-blur-md
                    "
                  >
                    {social.label}

                    {/* Flechita tooltip */}
                    <span
                      className="
                        absolute left-1/2 top-full -translate-x-1/2
                        w-2 h-2 rotate-45
                        bg-black/80
                        border-r border-b border-emerald-500/20
                      "
                    />
                  </span>

                  {/* Glow del icono */}
                  <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-2xl" />
                  </span>

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
