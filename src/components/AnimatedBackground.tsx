function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradiente base */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Onda verde 1 - Arriba */}
      <div className="absolute -top-40 -left-40 w-[800px] h-[800px] opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      {/* Onda verde 2 - Medio */}
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      {/* Onda verde 3 - Abajo */}
      <div className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full blur-[110px] animate-pulse"></div>
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
    </div>
  )
}

export default AnimatedBackground