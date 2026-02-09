import { useState } from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-gray-800 px-6 py-4 shadow-2xl">
          <div className="flex justify-between items-center">
            
            <a href="#hero" onClick={handleNavClick} className="flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="PrismCode Logo" 
                className="w-10 h-10 transition-transform group-hover:rotate-180 duration-700"
              />
              <div className="text-2xl font-bold">
                <span className="text-white">Prism</span>
                <span className="text-emerald-400">Code</span>
              </div>
            </a>

            <div className="hidden md:flex space-x-8">
              <a href="#servicios" onClick={handleNavClick} className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                Servicios
              </a>
              <a href="#proyectos" onClick={handleNavClick} className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                Proyectos
              </a>
              <a href="#nosotros" onClick={handleNavClick} className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                Nosotros
              </a>
              <a href="#contacto" onClick={handleNavClick} className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                Contacto
              </a>
            </div>

            <a 
              href="#contacto" 
              onClick={handleNavClick}
              className="hidden md:block bg-emerald-500 text-black px-6 py-2 rounded-lg hover:bg-emerald-400 transition-all font-bold shadow-lg shadow-emerald-500/30"
            >
              Hablemos
            </a>

            <button
              onClick={toggleMenu}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span 
                  className={`absolute left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${
                    isMenuOpen ? 'top-2 rotate-45' : 'top-0 rotate-0'
                  }`}
                />
                <span 
                  className={`absolute left-0 top-2 w-full h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${
                    isMenuOpen ? 'top-2 -rotate-45' : 'top-4 rotate-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 md:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`flex flex-col items-center justify-center h-full gap-8 transform transition-all duration-500 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <a href="#servicios" onClick={handleNavClick} className="text-3xl font-bold text-white hover:text-emerald-400 transition-colors">
            Servicios
          </a>
          <a href="#proyectos" onClick={handleNavClick} className="text-3xl font-bold text-white hover:text-emerald-400 transition-colors">
            Proyectos
          </a>
          <a href="#nosotros" onClick={handleNavClick} className="text-3xl font-bold text-white hover:text-emerald-400 transition-colors">
            Nosotros
          </a>
          <a href="#contacto" onClick={handleNavClick} className="text-3xl font-bold text-white hover:text-emerald-400 transition-colors">
            Contacto
          </a>

          <a href="#contacto" onClick={handleNavClick} className="mt-8 bg-emerald-500 text-black px-10 py-4 rounded-xl font-bold text-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30">
            Hablemos
          </a>

          <div className="flex gap-6 mt-8">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-2xl">📷</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-2xl">𝕏</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-2xl">💼</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-2xl">🐙</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar