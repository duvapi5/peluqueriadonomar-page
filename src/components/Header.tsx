"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-dark via-dark/98 to-dark/95 backdrop-blur-xl border-b-2 border-red-barber/30 shadow-lg shadow-red-barber/10">
      {/* Línea decorativa superior - franjas de barbería */}
      <div className="h-1 w-full bg-gradient-to-r from-red-barber via-cream via-50% to-blue-900" />

      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo - Estilo vintage barbería */}
          <Link href="/" className="group flex items-center gap-2 sm:gap-3">
            {/* Mini BarberPole decorativo */}
            <div className="hidden sm:block w-2 h-6 sm:h-8 rounded-full overflow-hidden shadow-lg shadow-red-barber/30">
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
                  )`,
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl text-cream tracking-wide transition-all group-hover:text-red-barber drop-shadow-lg">
                Don Omar
              </span>
              <span className="text-[8px] sm:text-[10px] text-red-barber font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                PELUQUERÍA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Decoración vintage mejorada */}
          <nav className="hidden lg:flex items-center gap-4">
            {/* Decoración tipo letrero vintage con sombras LED */}
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-dark/80 via-dark-lighter/90 to-dark/80 rounded-lg border border-red-barber/30 shadow-lg shadow-red-barber/20">
              {/* LED Rojo izquierda */}
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-red-barber animate-pulse shadow-lg shadow-red-barber/80" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-red-barber/50 blur-sm" />
              </div>

              {/* Líneas decorativas con animación */}
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-0.5 bg-gradient-to-r from-red-barber/60 via-cream/40 to-transparent rounded-full" />
                <div className="w-1 h-1 rounded-full bg-cream/60" />
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cream/40 to-transparent rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 h-full w-6 bg-gradient-to-r from-transparent via-red-barber/70 to-transparent animate-led-smooth" />
                </div>
                <div className="w-1 h-1 rounded-full bg-cream/60" />
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-cream/40 to-red-barber/60 rounded-full" />
              </div>

              {/* LED Azul derecha */}
              <div className="relative">
                <div
                  className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/80"
                  style={{ animationDelay: "0.5s" }}
                />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-blue-500/50 blur-sm" />
              </div>
            </div>
          </nav>

          {/* CTA - Botón WhatsApp verde */}
          <a
            href="tel:+56950915048"
            className="group relative bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-7 rounded-md sm:rounded-lg transition-all duration-300 text-[11px] sm:text-xs md:text-sm shadow-lg sm:shadow-xl shadow-green-600/40 hover:shadow-green-600/60 hover:scale-105 active:scale-100 overflow-hidden border border-green-700/50"
          >
            {/* Efecto brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative z-10">Llámame</span>
          </a>
        </div>
      </div>

      {/* Línea decorativa inferior sutil */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cream/10 to-transparent" />

      <style jsx>{`
        @keyframes barber-stripe {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 24px;
          }
        }
        .animate-barber-stripe {
          animation: barber-stripe 1s linear infinite;
        }
        @keyframes led-smooth {
          0% {
            transform: translate3d(-100%, 0, 0);
          }
          100% {
            transform: translate3d(200%, 0, 0);
          }
        }
        .animate-led-smooth {
          animation: led-smooth 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}
