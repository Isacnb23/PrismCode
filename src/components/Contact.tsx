import { ScrollReveal } from './ScrollReveal'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'

import { User, Mail, Building2, MessageSquareText, Send } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zxph0tb',
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_vqwbh3e',
    {...},
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'tM-P_y48f5R7eGrDK'
  ) 
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

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-25">
        <div
          className="absolute top-1/4 left-1/4"
          style={{
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(16,185,129,0.20) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
        <div
          className="absolute bottom-0 right-1/4"
          style={{
            width: '520px',
            height: '520px',
            background: 'radial-gradient(circle, rgba(5,150,105,0.14) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">¿Hablamos?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Cuéntame sobre tu proyecto y trabajemos juntos para hacerlo realidad
            </p>
          </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="w-full max-w-2xl mx-auto">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="relative rounded-3xl p-[1px] overflow-hidden"
            >
              {/* Border gradient (más elegante y menos loco) */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-teal-500/20" />

              {/* Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-emerald-950/35 via-black/70 to-black/80 backdrop-blur-xl border border-emerald-500/10 p-8 md:p-10 shadow-2xl shadow-emerald-500/10">
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* INPUT BASE */}
                  {[
                    {
                      key: 'name',
                      type: 'text',
                      placeholder: 'Tu nombre *',
                      icon: <User className="w-5 h-5" />,
                      required: true
                    },
                    {
                      key: 'email',
                      type: 'email',
                      placeholder: 'tu@email.com *',
                      icon: <Mail className="w-5 h-5" />,
                      required: true
                    },
                    {
                      key: 'company',
                      type: 'text',
                      placeholder: 'Nombre de tu empresa (opcional)',
                      icon: <Building2 className="w-5 h-5" />,
                      required: false
                    }
                  ].map((field) => (
                    <div key={field.key} className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-300/50">
                        {field.icon}
                      </div>

                      <motion.input
                        type={field.type}
                        name={field.key}
                        value={(formData as any)[field.key]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.key)}
                        onBlur={() => setFocusedField(null)}
                        required={field.required}
                        className="
                          w-full rounded-2xl
                          bg-black/40 backdrop-blur-sm
                          border-2 border-emerald-500/10
                          pl-12 pr-4 py-4
                          text-white placeholder-gray-500
                          focus:border-emerald-400/50
                          focus:outline-none
                          transition-all
                        "
                        placeholder={field.placeholder}
                        animate={{ scale: focusedField === field.key ? 1.015 : 1 }}
                        transition={{ duration: 0.18 }}
                      />

                      <AnimatePresence>
                        {focusedField === field.key && (
                          <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            exit={{ opacity: 0, scaleX: 0 }}
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-teal-500"
                            style={{ originX: 0 }}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  {/* MESSAGE */}
                  <div className="relative">
                    <div className="absolute left-4 top-5 text-green-300/50">
                      <MessageSquareText className="w-5 h-5" />
                    </div>

                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="
                        w-full rounded-2xl
                        bg-black/40 backdrop-blur-sm
                        border-2 border-green-500/10
                        pl-12 pr-4 py-4
                        text-white placeholder-gray-500
                        focus:border-green-400/50
                        focus:outline-none
                        transition-all resize-none
                      "
                      placeholder="Cuéntame sobre tu proyecto... *"
                      animate={{ scale: focusedField === 'message' ? 1.015 : 1 }}
                      transition={{ duration: 0.18 }}
                    />

                    <AnimatePresence>
                      {focusedField === 'message' && (
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          exit={{ opacity: 0, scaleX: 0 }}
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                          style={{ originX: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </div>


                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      w-full rounded-2xl py-4 font-bold
                      text-white
                      bg-gradient-to-r from-green-700 to-teal-800
                      hover:from-green-600 hover:to-teal-800
                      transition-all
                      shadow-lg shadow-green-500/20
                      disabled:opacity-50 disabled:cursor-not-allowed
                      relative overflow-hidden
                    "
                  >
                    {/* Shimmer suave */}
                    <span className="absolute inset-0 opacity-0 hover:opacity-100 transition">
                      <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/25 rotate-12 blur-xl animate-[shimmer_1.3s_infinite]" />
                    </span>

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
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <Send className="w-5 h-5" />
                          Enviar Mensaje
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  {/* Messages */}
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-green-500/10 border border-green-500/30 text-green-300 px-4 py-3 rounded-2xl flex items-center gap-3"
                      >
                        <span className="font-semibold">¡Mensaje enviado! Te contactaré pronto.</span>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-2xl flex items-center gap-3"
                      >
                        <span className="font-semibold">❌ Error al enviar. Intenta de nuevo.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>

      {/* shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-120%) rotate(12deg); }
          100% { transform: translateX(220%) rotate(12deg); }
        }
      `}</style>
    </section>
  )
}

export default Contact
