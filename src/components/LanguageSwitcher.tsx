import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  const isES = i18n.language === "es"

  return (
    <div
      className="
        relative flex items-center gap-1
        bg-black/40 backdrop-blur-sm
        rounded-lg border border-white/10
        p-1
        shadow-lg shadow-green-500/20
        transition-all duration-300
        hover:shadow-green-500/40
      "
    >
      {/* Fondo animado */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="absolute top-1 bottom-1 w-[52px] rounded-md"
        style={{
          left: isES ? 4 : 60,
          background: "linear-gradient(90deg, #052e16, #089442, #052e16)"
        }}
      />

      {/* Botón ES */}
      <button
        onClick={() => changeLanguage("es")}
        className={`relative z-10 px-4 py-1.5 rounded-md text-sm font-bold transition-colors ${isES ? "text-black" : "text-gray-300 hover:text-white"
          }`}
      >
        ES
      </button>

      {/* Botón EN */}
      <button
        onClick={() => changeLanguage("en")}
        className={`relative z-10 px-4 py-1.5 rounded-md text-sm font-bold transition-colors ${!isES ? "text-black" : "text-gray-300 hover:text-white"
          }`}
      >
        EN
      </button>
    </div>
  )
}
