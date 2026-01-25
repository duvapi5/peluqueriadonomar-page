"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-dark via-dark/98 to-dark/95 backdrop-blur-xl border-b-2 border-red-barber/30 shadow-lg shadow-red-barber/10">
      {/* Línea decorativa superior - franjas de barbería */}
      <div className="h-1 w-full bg-gradient-to-r from-red-barber via-cream via-50% to-blue-900" />
      
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - Estilo vintage barbería */}
          <Link href="/" className="group flex items-center gap-3">
            {/* Mini BarberPole decorativo */}
            <div className="hidden sm:block w-2 h-8 rounded-full overflow-hidden shadow-lg shadow-red-barber/30">
              <div 
                className="w-full h-full animate-barber-stripe"
                style={{
                  background: `repeating-linear-gradient(
                    -45deg,
                    #DC2626 0px,
                    #DC2626 3px,
                    #FFFFFF 3px,
                    #FFFFFF 6px,
                    #2563EB 6px,
                    #2563EB 9px,
                    #FFFFFF 9px,
                    #FFFFFF 12px
                  )`
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-2xl text-cream tracking-wide transition-all group-hover:text-red-barber drop-shadow-lg">
                Don Omar
              </span>
              <span className="text-[10px] text-cream/40 tracking-[0.3em] uppercase font-medium -mt-1">
                Barbería
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Links vintage */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Separador decorativo */}
            <span className="text-cream/20 mx-2">✦</span>
            
            <Link
              href="/servicios"
              className="text-cream/70 hover:text-cream font-medium text-xs uppercase tracking-[0.2em] transition-all duration-300 relative group px-4 py-2 rounded hover:bg-cream/5"
            >
              <span>Servicios</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-barber to-blue-900 group-hover:w-3/4 transition-all duration-300 rounded-full" />
            </Link>
            
            <span className="text-cream/20">✦</span>
            
            <Link
              href="/contacto"
              className="text-cream/70 hover:text-cream font-medium text-xs uppercase tracking-[0.2em] transition-all duration-300 relative group px-4 py-2 rounded hover:bg-cream/5"
            >
              <span>Contacto</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-barber to-blue-900 group-hover:w-3/4 transition-all duration-300 rounded-full" />
            </Link>
            
            <span className="text-cream/20 mx-2">✦</span>
          </nav>

          {/* CTA - Botón vintage premium */}
          <Link
            href="/reservar"
            className="group relative bg-gradient-to-r from-red-barber to-red-hover text-cream font-bold py-2.5 px-5 md:py-3 md:px-7 rounded-lg transition-all duration-300 text-xs md:text-sm shadow-xl shadow-red-barber/40 hover:shadow-red-barber/60 hover:scale-105 active:scale-100 overflow-hidden border border-red-barber/50"
          >
            {/* Efecto brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative z-10 flex items-center gap-2">
              <span className="hidden md:inline">Reservar</span>
              <span className="md:hidden">💈</span>
              <span className="hidden md:inline">✂️</span>
            </span>
          </Link>
        </div>
      </div>
      
      {/* Línea decorativa inferior sutil */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cream/10 to-transparent" />
      
      <style jsx>{`
        @keyframes barber-stripe {
          from { background-position: 0 0; }
          to { background-position: 0 24px; }
        }
        .animate-barber-stripe {
          animation: barber-stripe 1s linear infinite;
        }
      `}</style>
    </header>
  );
}
