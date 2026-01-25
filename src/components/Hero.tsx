"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark"
      suppressHydrationWarning
    >
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-60" />

      {/* Vignette effect más dramático */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark/60 to-dark" />

      {/* LED Glow ambiental - MÁS VISIBLE */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-barber/25 via-red-barber/10 to-transparent blur-3xl opacity-40 animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-blue-900/20 via-blue-900/5 to-transparent blur-3xl opacity-30 animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-12">
        {/* MOBILE LAYOUT: Vertical centrado */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-6 max-w-md mx-auto">
          {/* Badge EST. 1970 */}
          <div
            className={`inline-flex items-center gap-3 px-6 py-3 bg-dark/50 border border-cream/10 rounded-full transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <div className="w-2.5 h-2.5 bg-red-barber rounded-full animate-pulse" />
            <span className="text-cream/70 text-sm tracking-[0.2em] font-medium">
              EST. 1970
            </span>
            <div
              className="w-2.5 h-2.5 bg-blue-900 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          {/* Título */}
          <h1
            className={`font-serif text-5xl md:text-6xl text-cream tracking-tight leading-tight transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              textShadow:
                "0 0 40px rgba(179, 18, 23, 0.6), 0 0 20px rgba(179, 18, 23, 0.4), 0 4px 24px rgba(179, 18, 23, 0.3), 0 8px 48px rgba(0, 0, 0, 0.8)",
            }}
          >
            Peluquería
            <br />
            <span className="relative inline-block">
              <svg
                className="absolute -inset-4 w-[110%] h-[120%] -z-10 opacity-30"
                viewBox="0 0 300 100"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <defs>
                  <filter id="brushStrokeMobile">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.03"
                      numOctaves="4"
                    />
                    <feDisplacementMap in="SourceGraphic" scale="15" />
                  </filter>
                </defs>
                <path
                  d="M10,50 Q80,30 150,55 T290,50 L290,70 Q220,75 150,65 T10,70 Z"
                  fill="#b31217"
                  filter="url(#brushStrokeMobile)"
                />
              </svg>
              Don Omar
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            className={`text-xl text-cream/90 font-light tracking-wide transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Luis Soto – Peluquero
          </p>

          {/* Frase */}
          <p
            className={`text-base text-cream/70 transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Más de 50 años de tradición y excelencia
          </p>

          {/* Botones - Mobile más sutiles */}
          <div
            className={`w-full flex flex-col gap-3 transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="https://wa.me/56950915048?text=Buenas%2C%20estoy%20interesado%20en%20sus%20servicios%20tiene%20horas%20libres%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full bg-red-barber/80 hover:bg-red-barber text-cream font-semibold py-4 px-6 rounded-lg transition-all duration-300 text-base shadow-lg shadow-red-barber/20 hover:shadow-red-barber/40 overflow-hidden"
            >
              {/* Efecto de brillo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

              <span className="relative z-10 flex items-center justify-center gap-2">
                Reserva tu hora
              </span>
            </a>

            <a
              href="#servicios"
              className="w-full bg-transparent border border-cream/30 hover:border-cream/50 hover:bg-cream/5 text-cream/90 font-medium py-4 px-6 rounded-lg transition-all duration-300 text-base"
            >
              Ver Servicios
            </a>
          </div>

          {/* Micro-features */}
          <div
            className={`flex flex-col gap-4 items-center text-sm transition-all duration-700 delay-600 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2 text-gray-barber/60">
              <span className="text-base opacity-70">💬</span>
              <span className="font-medium text-xs">Por WhatsApp</span>
            </div>
            <div className="flex items-center gap-2 text-gray-barber/60">
              <span className="text-base opacity-70">⚡</span>
              <span className="font-medium text-xs">En 1 minuto</span>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT: 2 columnas */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* LEFT COLUMN: Textos + CTAs */}
          <div className="text-center lg:text-left">
            {/* Badge EST. 1970 */}
            <div
              className={`inline-flex items-center gap-3 mb-12 px-6 py-3 bg-dark/50 border border-cream/10 rounded-full transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <div className="w-2.5 h-2.5 bg-red-barber rounded-full animate-pulse" />
              <span className="text-cream/70 text-sm tracking-[0.2em] font-medium">
                EST. 1970
              </span>
              <div
                className="w-2.5 h-2.5 bg-blue-900 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>

            {/* Main Title with brush stroke behind "Don Omar" */}
            <h1
              className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream mb-4 tracking-tight leading-none transition-all duration-700 delay-200 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                textShadow:
                  "0 0 40px rgba(179, 18, 23, 0.6), 0 0 20px rgba(179, 18, 23, 0.4), 0 4px 24px rgba(179, 18, 23, 0.3), 0 8px 48px rgba(0, 0, 0, 0.8)",
              }}
            >
              Peluquería
              <br />
              <span className="relative inline-block">
                {/* Red brush stroke BEHIND the text */}
                <svg
                  className="absolute -inset-4 w-[110%] h-[120%] -z-10 opacity-30"
                  viewBox="0 0 300 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <filter id="brushStroke">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.03"
                        numOctaves="4"
                      />
                      <feDisplacementMap in="SourceGraphic" scale="15" />
                    </filter>
                  </defs>
                  <path
                    d="M10,50 Q80,30 150,55 T290,50 L290,70 Q220,75 150,65 T10,70 Z"
                    fill="#b31217"
                    filter="url(#brushStroke)"
                  />
                </svg>
                Don Omar
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-cream/90 font-light mb-3 sm:mb-4 md:mb-6 tracking-wide transition-all duration-700 delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Luis Soto – Peluquero
            </p>

            {/* Tagline */}
            <p
              className={`text-sm sm:text-base md:text-lg text-cream/75 mb-8 sm:mb-10 md:mb-14 transition-all duration-700 delay-400 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Más de 50 años de tradición y excelencia
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center mb-6 sm:mb-8 md:mb-10 transition-all duration-700 delay-500 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="https://wa.me/56950915048?text=Buenas%2C%20estoy%20interesado%20en%20sus%20servicios%20tiene%20horas%20libres%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto bg-gradient-to-r from-red-barber via-red-barber to-red-hover text-cream text-center font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-lg transition-all duration-300 text-base sm:text-lg shadow-xl sm:shadow-2xl shadow-red-barber/50 hover:shadow-red-barber/70 hover:scale-105 hover:-translate-y-1 active:scale-100 overflow-hidden"
              >
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

                <span className="relative z-10">Reserva tu hora</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-hover to-red-barber opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              </a>

              <a
                href="#servicios"
                className="w-full sm:w-auto text-center bg-transparent border-2 border-cream/40 hover:border-cream hover:bg-cream/10 text-cream font-semibold py-4 sm:py-5 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-cream/10 hover:scale-105 hover:-translate-y-1 active:scale-100"
              >
                Ver Servicios
              </a>
            </div>

            {/* Trust bullets - Simplificado a 2 */}
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center text-sm transition-all duration-700 delay-600 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-2 text-gray-barber/60 group hover:text-cream transition-colors">
                <span className="text-base opacity-70">💬</span>
                <span className="font-medium text-xs">Por WhatsApp</span>
              </div>

              <div className="flex items-center gap-2 text-gray-barber/60 group hover:text-cream transition-colors">
                <span className="text-base opacity-70">⚡</span>
                <span className="font-medium text-xs">En 1 minuto</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Info Card (Desktop) */}
          <div className="flex flex-col items-center justify-center mt-8 lg:mt-0">
            <div
              className={`w-full max-w-md bg-dark/40 backdrop-blur-sm border border-cream/20 rounded-lg p-5 sm:p-6 md:p-8 shadow-lg transition-all duration-700 delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Ubicación con botón */}
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-xl sm:text-2xl mt-0.5 sm:mt-1 flex-shrink-0">
                    📍
                  </span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 sm:gap-3 md:gap-4 mb-2">
                      <p className="text-xs sm:text-sm font-semibold text-gray-barber uppercase tracking-wide">
                        Ubicación
                      </p>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Av.+Libertad+161,+2940000+Rengo,+O'Higgins,+Chile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-red-barber hover:bg-red-barber/80 text-cream text-[10px] sm:text-xs font-medium rounded-md sm:rounded-lg transition-all shadow-md hover:shadow-lg flex-shrink-0"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          />
                        </svg>
                        Cómo llegar
                      </a>
                    </div>
                    <p className="text-sm sm:text-base text-cream leading-relaxed">
                      Av. Libertad 161, Local B, Rosario, Rengo
                    </p>
                  </div>
                </div>

                {/* Separador */}
                <div className="h-px bg-cream/20" />

                {/* Horario */}
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-xl sm:text-2xl mt-0.5 sm:mt-1 flex-shrink-0">
                    🕒
                  </span>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm font-semibold text-gray-barber mb-2 uppercase tracking-wide">
                      Horario
                    </p>
                    <p className="text-sm sm:text-base text-cream leading-relaxed">
                      <span className="font-medium">Lun–Sáb:</span> 10:00–13:30
                      / 16:00–19:00
                      <br />
                      <span className="text-cream/70 text-xs sm:text-sm">
                        Domingo cerrado
                      </span>
                    </p>
                  </div>
                </div>

                {/* Separador */}
                <div className="h-px bg-cream/20" />

                {/* Teléfono */}
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-xl sm:text-2xl mt-0.5 sm:mt-1 flex-shrink-0">
                    📞
                  </span>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm font-semibold text-gray-barber mb-2 uppercase tracking-wide">
                      Contacto
                    </p>
                    <a
                      href="tel:+56950915048"
                      className="text-sm sm:text-base text-cream hover:text-red-barber transition-colors font-medium"
                    >
                      +56 9 5091 5048
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
