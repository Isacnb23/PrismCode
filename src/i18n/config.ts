import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Traducciones
const resources = {
  es: {
    translation: {
      nav: {
        services: 'Servicios',
        projects: 'Proyectos',
        about: 'Nosotros',
        contact: 'Contacto',
        cta: 'Hablemos'
      },
      hero: {
        available: 'Disponible para proyectos',
        title1: 'Construyendo el',
        title2: 'futuro digital',
        subtitle: 'Desarrollo web full-stack y aplicaciones móviles de alto rendimiento.',
        cta1: 'Ver Proyectos',
        cta2: 'Contactar',
        scroll: 'Scroll'
      },
      services: {
        title: 'Servicios',
        subtitle: 'Soluciones tecnológicas completas para llevar tu negocio al siguiente nivel',
        web: {
          title: 'Desarrollo Web Full-Stack',
          description: 'Aplicaciones web modernas y escalables con React, Angular y Node.js. Interfaces responsivas y experiencias de usuario excepcionales.'
        },
        mobile: {
          title: 'Aplicaciones Móviles',
          description: 'Apps nativas y multiplataforma con Flutter. Rendimiento óptimo en iOS y Android con una única base de código.'
        },
        backend: {
          title: 'Backend & Bases de Datos',
          description: 'Arquitecturas robustas y APIs RESTful. Diseño y optimización de bases de datos SQL y NoSQL para máximo rendimiento.'
        }
      },
      contact: {
        title: '¿Hablamos',
        titleHighlight: '?',
        subtitle: 'Cuéntame sobre tu proyecto y trabajemos juntos para hacerlo realidad',
        email: 'Email',
        whatsapp: 'WhatsApp',
        location: 'Ubicación',
        social: 'Sígueme en redes',
        available: 'Disponible para nuevos proyectos',
        namePlaceholder: 'Tu nombre *',
        emailPlaceholder: 'tu@email.com *',
        companyPlaceholder: 'Nombre de tu empresa (opcional)',
        messagePlaceholder: 'Cuéntame sobre tu proyecto... *',
        sending: 'Enviando...',
        send: 'Enviar Mensaje',
        success: '¡Mensaje enviado! Te contactaré pronto.',
        error: 'Error al enviar. Intenta de nuevo.'
      },
      footer: {
        description: 'Desarrollo de software personalizado con tecnologías modernas. Transformando ideas en soluciones digitales desde Costa Rica.',
        links: 'Enlaces',
        social: 'Redes Sociales',
        projects: 'Proyectos',
        copyright: 'Todos los derechos reservados.'
      }
    }
  },
  en: {
    translation: {
      nav: {
        services: 'Services',
        projects: 'Projects',
        about: 'About',
        contact: 'Contact',
        cta: "Let's Talk"
      },
      hero: {
        available: 'Available for projects',
        title1: 'Building the',
        title2: 'digital future',
        subtitle: 'Full-stack web development and high-performance mobile applications.',
        cta1: 'View Projects',
        cta2: 'Contact',
        scroll: 'Scroll'
      },
      services: {
        title: 'Services',
        subtitle: 'Complete technology solutions to take your business to the next level',
        web: {
          title: 'Full-Stack Web Development',
          description: 'Modern and scalable web applications with React, Angular, and Node.js. Responsive interfaces and exceptional user experiences.'
        },
        mobile: {
          title: 'Mobile Applications',
          description: 'Native and cross-platform apps with Flutter. Optimal performance on iOS and Android with a single codebase.'
        },
        backend: {
          title: 'Backend & Databases',
          description: 'Robust architectures and RESTful APIs. Design and optimization of SQL and NoSQL databases for maximum performance.'
        }
      },
      contact: {
        title: "Let's",
        titleHighlight: 'Talk?',
        subtitle: "Tell me about your project and let's work together to make it a reality",
        email: 'Email',
        whatsapp: 'WhatsApp',
        location: 'Location',
        social: 'Follow me on social media',
        available: 'Available for new projects',
        namePlaceholder: 'Your name *',
        emailPlaceholder: 'your@email.com *',
        companyPlaceholder: 'Your company name (optional)',
        messagePlaceholder: 'Tell me about your project... *',
        sending: 'Sending...',
        send: 'Send Message',
        success: 'Message sent! I will contact you soon.',
        error: 'Error sending. Try again.'
      },
      footer: {
        description: 'Custom software development with modern technologies. Transforming ideas into digital solutions from Costa Rica.',
        links: 'Links',
        social: 'Social Media',
        projects: 'Projects',
        copyright: 'All rights reserved.'
      }
    }
  }
}

i18n
  .use(LanguageDetector) // Detecta idioma del navegador
  .use(initReactI18next) // Integra con React
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto si no detecta
    interpolation: {
      escapeValue: false // React ya protege contra XSS
    },
    detection: {
      order: ['localStorage', 'navigator'], // Prioridad: localStorage > navegador
      caches: ['localStorage'] // Guarda preferencia en localStorage
    }
  })

export default i18n