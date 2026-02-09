function TechStack() {
  const technologies = [
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Angular", icon: "🅰️", color: "from-red-500 to-pink-500" },
    { name: "Node.js", icon: "📗", color: "from-green-500 to-emerald-600" },
    { name: "ASP.NET Core", icon: "🔷", color: "from-purple-500 to-indigo-500" },
    { name: "Flutter", icon: "🎯", color: "from-blue-400 to-cyan-500" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-teal-500" },
    { name: "SQL Server", icon: "🗃️", color: "from-red-600 to-orange-500" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-indigo-600" },
    { name: "TypeScript", icon: "📘", color: "from-blue-500 to-cyan-500" },
    { name: "Git", icon: "🔀", color: "from-orange-500 to-red-500" },
    { name: "Docker", icon: "🐳", color: "from-blue-500 to-cyan-600" },
    { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-blue-500" }
  ]

  return (
    <section id="tecnologias" className="py-24 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Stack Tecnológico
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tecnologías y herramientas con las que trabajo día a día
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>

              {/* Name */}
              <h3 className="text-white font-semibold text-sm group-hover:text-emerald-400 transition-colors">
                {tech.name}
              </h3>

              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-900 border border-gray-800 rounded-2xl px-8 py-6">
            <p className="text-gray-400 mb-2">
              Siempre aprendiendo y explorando nuevas tecnologías
            </p>
            <div className="flex items-center justify-center gap-2 text-emerald-400 font-semibold">
              <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              En constante evolución
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack