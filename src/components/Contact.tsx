import { ScrollReveal } from './ScrollReveal'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        'service_zxph0tb',
        'template_vqwbh3e',
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'No especificada',
          message: formData.message,
        },
        'tM-P_y48f5R7eGrDK'
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })

      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // const contactInfo = [
  //   {
  //     icon: '📧',
  //     title: 'Email',
  //     value: 'inavarrobermudez13@gmail.com',
  //     link: 'mailto:inavarrobermudez13@gmail.com'
  //   },
  //   {
  //     icon: '💬',
  //     title: 'WhatsApp',
  //     value: '+506 8430 9207',
  //     link: 'https://wa.me/50684309207'
  //   },
  //   {
  //     icon: '📍',
  //     title: 'Ubicación',
  //     value: 'Cartago, Costa Rica',
  //     link: null
  //   }
  // ]

  return (
    <section id="contacto" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/4 left-1/4"
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
              <span className="text-white">¿Hablamos</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                ?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Cuéntame sobre tu proyecto y trabajemos juntos para hacerlo realidad
            </p>
          </div>
        </ScrollReveal>
        <div className=" ">
          <div className="grid grid-cols-1 gap-12 items-center ">


            {/* Left - Contact Info
          <ScrollReveal direction="left">
            <div className="space-y-8">
              
              {/* Info cards
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{info.icon}</div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-1">{info.title}</div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-white hover:text-emerald-400 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white font-medium">{info.value}</div>
                        )}
                      </div>
                      {info.link && (
                        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div> */}

            {/* Social links
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Sígueme en redes</h3>
                <div className="flex gap-4">
                  {[
                    { icon: '📷', label: 'Instagram', href: '#' },
                    { icon: '💼', label: 'LinkedIn', href: '#' },
                    { icon: '🐙', label: 'GitHub', href: '#' },
                    { icon: '𝕏', label: 'Twitter', href: '#' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-2xl hover:bg-emerald-500/20 transition-all border border-gray-800 hover:border-emerald-500/50"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div> */}

            {/* Availability badge */}
            {/* <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-3 text-emerald-400"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="font-semibold">Disponible para nuevos proyectos</span>
              </motion.div>

            </div>
          </ScrollReveal> */}

            {/* Right - Form */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="w-full max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div className="relative">
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-all"
                      placeholder="Tu nombre *"
                      animate={{
                        scale: focusedField === 'name' ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <AnimatePresence>
                      {focusedField === 'name' && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                          style={{ originX: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-all"
                      placeholder="tu@email.com *"
                      animate={{
                        scale: focusedField === 'email' ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <AnimatePresence>
                      {focusedField === 'email' && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                          style={{ originX: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <motion.input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-all"
                      placeholder="Nombre de tu empresa (opcional)"
                      animate={{
                        scale: focusedField === 'company' ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <AnimatePresence>
                      {focusedField === 'company' && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                          style={{ originX: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-all resize-none"
                      placeholder="Cuéntame sobre tu proyecto... *"
                      animate={{
                        scale: focusedField === 'message' ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <AnimatePresence>
                      {focusedField === 'message' && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                          style={{ originX: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Availability badge */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-3 text-emerald-400"
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="font-semibold">Disponible para nuevos proyectos</span>
                  </motion.div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-emerald-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                          />
                          Enviando...
                        </motion.div>
                      ) : (
                        <motion.span
                          key="text"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Enviar Mensaje
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  {/* Success/Error messages */}
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-emerald-500/20 border border-emerald-500 text-emerald-400 px-4 py-3 rounded-xl flex items-center gap-3"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>¡Mensaje enviado! Te contactaré pronto.</span>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-xl flex items-center gap-3"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span>Error al enviar. Intenta de nuevo.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </form>
              </div>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact