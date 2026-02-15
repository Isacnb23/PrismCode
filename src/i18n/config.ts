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
        cta: 'Hablemos',
        proceso: 'Nuestro Proceso'
      },
      hero: {
        available: 'Disponible para proyectos',
        title1: 'Del concepto',
        title2: 'al lanzamiento',
        subtitle: 'Desarrollo web y móvil con enfoque en rendimiento, seguridad y escalabilidad.',
        cta1: 'Ver Proyectos',
        cta2: 'Trabajemos juntos',
        scroll: 'Scroll'
      },
      "services": {
        "title": "Servicios",
        "subtitle": "Soluciones diseñadas para ayudar a su negocio a crecer con software moderno, escalable y de alta calidad.",

        "web": {
          "title": "Desarrollo Web",
          "description": "Creo sitios rápidos, modernos y optimizados para convertir visitas en clientes.",
          "point1": "Landing pages y sitios corporativos",
          "point2": "Optimización de velocidad y SEO",
          "point3": "Integración con APIs y servicios"
        },
        "mobile": {
          "title": "Apps Móviles",
          "description": "Desarrollo apps fluidas y funcionales para Android y iOS, listas para crecer.",
          "point1": "Flutter / FlutterFlow",
          "point2": "Diseño UX moderno",
          "point3": "Publicación y soporte"
        },
        "backend": {
          "title": "Backend y APIs",
          "description": "Construyo sistemas sólidos, seguros y escalables para tu negocio.",
          "point1": "APIs REST seguras",
          "point2": "Bases de datos relacionales y NoSQL",
          "point3": "Arquitectura escalable"
        }
      }
      , about: {
        title: 'Quiénes',
        titleHighlight: 'Somos',
        intro: 'es un estudio de desarrollo de software enfocado en crear soluciones digitales personalizadas. No nos limitamos a tecnologías específicas -',
        introHighlight: 'nos adaptamos a lo que tu proyecto necesita',
        approach: {
          title: 'Enfoque de trabajo',
          p1: 'Cada proyecto es único y merece un enfoque personalizado. Trabajamos con',
          p1Highlight: 'metodologías ágiles',
          p1End: ', entregas incrementales y comunicación constante para garantizar que el resultado final supere tus expectativas.',
          p2Start: 'Desde',
          p2End: '- si tu proyecto lo necesita, lo aprendemos y lo implementamos.',
          t1: 'hasta',
          t2: 'pasan por',
          t3: 'y',
          text1: 'aplicaciones web full-stack',
          text2: 'apps móviles multiplataforma',
          text3: 'APIs robustas',
          text4: 'arquitecturas escalables'
        },
        stats: {
          years: 'Años de experiencia',
          projects: 'Proyectos completados',
          satisfaction: 'Satisfacción'
        },
        valuesTitle: 'Nuestros Valores',
        values: {
          results: {
            title: 'Enfoque en Resultados',
            description: 'No importa la tecnología, lo importante es entregar soluciones que funcionen y agreguen valor a tu negocio.'
          },
          adaptability: {
            title: 'Adaptabilidad',
            description: 'Me adapto a las necesidades específicas de cada proyecto, usando las herramientas que mejor se ajusten al contexto.'
          },
          innovation: {
            title: 'Innovación Constante',
            description: 'Siempre aprendiendo nuevas tecnologías y metodologías para ofrecer las mejores soluciones del mercado.'
          },
          communication: {
            title: 'Comunicación Clara',
            description: 'Trabajo codo a codo con mis clientes, manteniendo comunicación constante y transparente durante todo el proyecto.'
          }
        },
        badge: 'Hecho en Costa Rica'
      },

      whyUs: {
        title: '¿Por qué',
        titleHighlight: 'PrismCode?',
        subtitle: 'Más que un proveedor de servicios, somos tu aliado tecnológico para el éxito',
        reasons: [
          {
            title: 'Sin Límites Tecnológicos',
            description: 'No estamos casados con un stack específico. Si tu proyecto necesita una tecnología en particular, la aprendemos y la implementamos. Tu visión define las herramientas, no al revés.'
          },
          {
            title: 'Comunicación Transparente',
            description: 'Actualizaciones constantes, sin sorpresas. Trabajamos con metodologías ágiles donde tú eres parte del proceso en cada sprint. Siempre sabrás en qué estamos trabajando.'
          },
          {
            title: 'Código Limpio y Documentado',
            description: 'Escribimos código pensando en el futuro. Documentación clara, arquitectura escalable y buenas prácticas que facilitan el mantenimiento y las futuras mejoras.'
          },
          {
            title: 'Soporte Post-Entrega',
            description: 'No desaparecemos cuando el proyecto termina. Ofrecemos soporte continuo, correcciones y optimizaciones para que tu producto siga funcionando perfectamente.'
          },
          {
            title: 'Orientado a Resultados',
            description: 'Nos importan los resultados reales: usuarios satisfechos, procesos optimizados, negocios que crecen. No solo escribimos código, resolvemos problemas.'
          },
          {
            title: 'Precios Justos y Claros',
            description: 'Cotizaciones transparentes sin costos ocultos. Trabajamos con presupuestos realistas y entregamos lo prometido. Tu inversión es respetada.'
          }
        ],
        cta: {
          title: '¿Listo para comenzar tu proyecto?',
          subtitle: 'Conversemos sobre tu idea y cómo podemos ayudarte a hacerla realidad',
          button1: 'Iniciar Conversación',
          button2: 'Ver Portafolio'
        }
      },

      process: {
        title: 'Nuestro',
        titleHighlight: 'Proceso',
        subtitle: 'De la idea a la realidad en 5 pasos claros y organizados',
        steps: [
          {
            title: 'Descubrimiento',
            description: 'Conversamos sobre tu proyecto, objetivos y necesidades. Definimos alcance, tecnologías y cronograma.',
            duration: '1-2 días'
          },
          {
            title: 'Planificación',
            description: 'Creamos wireframes, arquitectura técnica y plan de sprints. Definimos entregables y milestones.',
            duration: '3-5 días'
          },
          {
            title: 'Desarrollo',
            description: 'Codificamos en sprints de 2 semanas con entregas incrementales. Acceso a ambiente de pruebas en tiempo real.',
            duration: '4-12 semanas'
          },
          {
            title: 'Testing & QA',
            description: 'Pruebas exhaustivas de funcionalidad, rendimiento y seguridad. Correcciones y optimizaciones.',
            duration: '1-2 semanas'
          },
          {
            title: 'Deploy & Soporte',
            description: 'Lanzamiento a producción, monitoreo y 30 días de soporte incluido. Documentación completa entregada.',
            duration: 'Continuo'
          }
        ],
        cta: {
          question: '¿Listo para comenzar?',
          button: 'Iniciar Proyecto'
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
        cta: "Let's Talk",
        proceso: "Our Process"
      },
      hero: {
        available: 'Available for projects',
        title1: 'From concept',
        title2: 'to launch',
        subtitle: 'Web and mobile development with a focus on performance, security, and scalability.',
        cta1: 'View Projects',
        cta2: 'lets work together',
        scroll: 'Scroll'
      },
      "services": {
        "title": "Services",
        "subtitle": "Solutions designed to help your business grow with modern, scalable and high-quality software.",
        "web": {
          "title": "Web Development",
          "description": "I build fast, modern websites optimized to turn visitors into real clients.",
          "point1": "Landing pages and business websites",
          "point2": "Speed and SEO optimization",
          "point3": "API and service integrations"
        },
        "mobile": {
          "title": "Mobile Apps",
          "description": "I develop smooth and functional mobile apps for Android and iOS, ready to scale.",
          "point1": "Flutter / FlutterFlow development",
          "point2": "Modern UX-focused design",
          "point3": "Publishing and ongoing support"
        },
        "backend": {
          "title": "Backend & APIs",
          "description": "I create secure, scalable and reliable systems to power your product or business.",
          "point1": "Secure REST API development",
          "point2": "Relational and NoSQL databases",
          "point3": "Scalable architecture"
        }
      }
      , about: {
        title: 'Who',
        titleHighlight: 'Are We?',
        intro: 'is a software development studio focused on creating custom digital solutions. We are not limited to specific technologies -',
        introHighlight: 'we adapt to what your project needs',
        approach: {
          title: 'Work approach',
          p1: 'Each project is unique and deserves a personalized approach. We work with',
          p1Highlight: 'agile methodologies',
          p1End: ', incremental deliveries and constant communication to ensure the final result exceeds your expectations.',
          p2Start: 'From',
          p2End: '- if your project needs it, we learn it and implement it.',
          t1: 'to',
          t2: 'Including',
          t3: 'and',
          text1: 'full-stack web applications',
          text2: 'cross-platform mobile apps',
          text3: 'robust APIs',
          text4: 'arquitecturas escalabscalable architecturesles'
        },
        stats: {
          years: 'Years of experience',
          projects: 'Completed projects',
          satisfaction: 'Satisfaction'
        },
        valuesTitle: 'Our Values',
        values: {
          results: {
            title: 'Results Focused',
            description: "Technology doesn't matter, what matters is delivering solutions that work and add value to your business."
          },
          adaptability: {
            title: 'Adaptability',
            description: 'I adapt to the specific needs of each project, using the tools that best fit the context.'
          },
          innovation: {
            title: 'Constant Innovation',
            description: 'Always learning new technologies and methodologies to offer the best market solutions.'
          },
          communication: {
            title: 'Clear Communication',
            description: 'I work side by side with my clients, maintaining constant and transparent communication throughout the project.'
          }
        },
        badge: 'Made in Costa Rica'
      },

      whyUs: {
        title: 'Why',
        titleHighlight: 'PrismCode?',
        subtitle: 'More than a service provider, we are your technology partner for success',
        reasons: [
          {
            title: 'No Technology Limits',
            description: "We're not married to a specific stack. If your project needs a particular technology, we learn it and implement it. Your vision defines the tools, not the other way around."
          },
          {
            title: 'Transparent Communication',
            description: 'Constant updates, no surprises. We work with agile methodologies where you are part of the process in each sprint. You will always know what we are working on.'
          },
          {
            title: 'Clean and Documented Code',
            description: 'We write code thinking about the future. Clear documentation, scalable architecture and good practices that facilitate maintenance and future improvements.'
          },
          {
            title: 'Post-Delivery Support',
            description: "We don't disappear when the project ends. We offer ongoing support, corrections and optimizations so your product continues to work perfectly."
          },
          {
            title: 'Results Oriented',
            description: "We care about real results: satisfied users, optimized processes, growing businesses. We don't just write code, we solve problems."
          },
          {
            title: 'Fair and Clear Pricing',
            description: 'Transparent quotes without hidden costs. We work with realistic budgets and deliver what is promised. Your investment is respected.'
          }
        ],
        cta: {
          title: 'Ready to start your project?',
          subtitle: "Let's talk about your idea and how we can help you make it a reality",
          button1: 'Start Conversation',
          button2: 'View Portfolio'
        }
      },

      process: {
        title: 'Our',
        titleHighlight: 'Process',
        subtitle: 'From idea to reality in 5 clear and organized steps',
        steps: [
          {
            title: 'Discovery',
            description: 'We discuss your project, objectives and needs. We define scope, technologies and timeline.',
            duration: '1-2 days'
          },
          {
            title: 'Planning',
            description: 'We create wireframes, technical architecture and sprint plan. We define deliverables and milestones.',
            duration: '3-5 days'
          },
          {
            title: 'Development',
            description: 'We code in 2-week sprints with incremental deliveries. Access to testing environment in real time.',
            duration: '4-12 weeks'
          },
          {
            title: 'Testing & QA',
            description: 'Comprehensive functionality, performance and security testing. Corrections and optimizations.',
            duration: '1-2 weeks'
          },
          {
            title: 'Deploy & Support',
            description: 'Production launch, monitoring and 30 days of included support. Complete documentation delivered.',
            duration: 'Continuous'
          }
        ],
        cta: {
          question: 'Ready to get started?',
          button: 'Start Project'
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