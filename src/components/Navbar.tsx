import { useState, useEffect } from 'react'
// import logo from '../assets/logo.png'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const logo = '/Logo.png'
  const { t, i18n } = useTranslation()
  const [, setShowBadge] = useState(true)
  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Si baja, se oculta
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowBadge(false)
      }
      // Si sube, aparece
      else if (currentScrollY < lastScrollY) {
        setShowBadge(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')

    if (href && href.startsWith('#')) {
      e.preventDefault()
      closeMenu()

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

  return (
    <>
      {/* BADGE FLOTANTE (esquina superior derecha) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="fixed top-10 right-20 z-[60] hidden md:block"
      >
        <motion.div
          className="group relative inline-flex items-center bg-green-500/10 border border-green-500/30 rounded-full overflow-hidden cursor-default backdrop-blur-md"
          initial={false}
          whileHover="hover"
          animate="rest"
          variants={{
            rest: {
              gap: '0px',
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingTop: '8px',
              paddingBottom: '8px'
            },
            hover: {
              gap: '8px',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: '8px',
              paddingBottom: '8px'
            }
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Punto parpadeando */}
          <motion.span
            className="relative flex h-2 w-2 flex-shrink-0"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.2 }
            }}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </motion.span>

          {/* Texto con slide in HACIA LA IZQUIERDA */}
          <motion.span
            className="text-green-700 font-medium text-sm whitespace-nowrap"
            variants={{
              rest: {
                width: 0,
                opacity: 0,
                x: 10
              },
              hover: {
                width: 'auto',
                opacity: 1,
                x: 0
              }
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {t('hero.available')}
          </motion.span>

          {/* Background glow */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            variants={{
              rest: {
                background:
                  'radial-gradient(circle, rgba(16,185,129,0) 0%, rgba(16,185,129,0) 100%)'
              },
              hover: {
                background:
                  'radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0) 100%)'
              }
            }}
          />
        </motion.div>
      </motion.div>

      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-gray-800 px-6 py-4 shadow-2xl">
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <a
              href="#hero"
              onClick={handleNavClick}
              className="flex items-center gap-3 group"
            >
              <img
                src="/Logo.png" 
                alt="PrismCode Logo"
                className="w-10 h-10 transition-transform group-hover:rotate-180 duration-700"
              />

              <div className="text-2xl font-bold">
                <span className="text-white">Prism</span>
                <span className="bg-gradient-to-r from-green-950 via-green-500 to-green-900 bg-clip-text text-transparent">
                  Code
                </span>
              </div>
            </a>

            {/* LINKS DESKTOP (Animados al cambiar idioma) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={i18n.language}
                initial={{ opacity: 0, y: 6, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -6, filter: 'blur(6px)' }}
                transition={{ duration: 0.2 }}
                className="hidden md:flex space-x-8"
              >
                <a
                  href="#servicios"
                  onClick={handleNavClick}
                  className="text-gray-300 hover:text-green-500 transition-colors font-medium"
                >
                  {t('nav.services')}
                </a>

                <a
                  href="#proceso"
                  onClick={handleNavClick}
                  className="text-gray-300 hover:text-green-500 transition-colors font-medium"
                >
                  {t('nav.proceso')}
                </a>

                <a
                  href="#contacto"
                  onClick={handleNavClick}
                  className="text-gray-300 hover:text-green-500 transition-colors font-medium"
                >
                  {t('nav.contact')}
                </a>
              </motion.div>
            </AnimatePresence>

            {/* SWITCHER DESKTOP */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
            </div>

            {/* BOTÓN HAMBURGUESA */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0 rotate-0'
                    }`}
                />
                <span
                  className={`absolute left-0 top-2 w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <span
                  className={`absolute left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4 rotate-0'
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MENÚ MOBILE */}
      <div
        className={`fixed inset-0 bg-black/100 backdrop-blur-lg z-40 md:hidden transition-all duration-300 ${isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className={`flex flex-col items-center justify-center h-full gap-8 transform transition-all duration-500 ${isMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0'
            }`}
        >
          {/* Language Switcher Mobile */}
          <div className="pt-4 pb-4">
            <LanguageSwitcher />
          </div>

          {/* LINKS MOBILE (Animados al cambiar idioma) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={i18n.language}
              initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center gap-8"
            >
              <a
                href="#servicios"
                onClick={handleNavClick}
                className="text-3xl font-bold text-white hover:text-green-700 transition-colors"
              >
                {t('nav.services')}
              </a>

              <a
                href="#proceso"
                onClick={handleNavClick}
                className="text-3xl font-bold text-white hover:text-green-700 transition-colors"
              >
                {t('nav.proceso')}
              </a>

              <a
                href="#contacto"
                onClick={handleNavClick}
                className="text-3xl font-bold text-white hover:text-green-700 transition-colors"
              >
                {t('nav.contact')}
              </a>


            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default Navbar
