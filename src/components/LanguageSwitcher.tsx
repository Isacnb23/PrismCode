import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-1">
      <motion.button
        onClick={() => changeLanguage('es')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          i18n.language === 'es'
            ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        ES
      </motion.button>
      
      <motion.button
        onClick={() => changeLanguage('en')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          i18n.language === 'en'
            ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </motion.button>
    </div>
  )
}