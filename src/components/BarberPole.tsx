export default function BarberPole() {
  return (
    <div className="relative inline-block">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute -inset-4 bg-blue-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Barber pole container */}
      <div className="relative w-16 h-24 sm:w-20 sm:h-28 mx-auto">
        {/* Top cap - Chrome */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-5 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-400 rounded-t-full border border-gray-400 shadow-lg z-10" />

        {/* Main pole with stripes */}
        <div className="relative w-full h-full overflow-hidden rounded-md border-2 border-gray-300 shadow-xl">
          {/* Fondo blanco del cilindro */}
          <div className="absolute inset-0 bg-white" />
          
          {/* Franjas animadas con CSS puro - ROJO, BLANCO, AZUL */}
          <div 
            className="absolute inset-0 animate-barber-spin"
            style={{
              background: `repeating-linear-gradient(
                -45deg,
                #DC2626 0px,
                #DC2626 8px,
                #FFFFFF 8px,
                #FFFFFF 16px,
                #2563EB 16px,
                #2563EB 24px,
                #FFFFFF 24px,
                #FFFFFF 32px
              )`,
              backgroundSize: '100% 200%',
            }}
          />

          {/* Efecto de brillo de vidrio */}
          <div className="absolute inset-y-0 left-1 w-3 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />
          <div className="absolute inset-y-0 right-2 w-2 bg-gradient-to-l from-black/10 to-transparent" />
        </div>

        {/* Bottom cap - Chrome */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-5 bg-gradient-to-t from-gray-100 via-gray-300 to-gray-400 rounded-b-full border border-gray-400 shadow-lg z-10" />
      </div>

      <style jsx>{`
        @keyframes barber-spin {
          from {
            background-position: 0% 0%;
          }
          to {
            background-position: 0% 100%;
          }
        }
        .animate-barber-spin {
          animation: barber-spin 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
