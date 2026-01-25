"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BarberPole from "./BarberPole";

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
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-40" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark/50 to-dark" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-12">
        {/* MOBILE LAYOUT: Vertical centrado */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-8 max-w-md mx-auto">
          {/* Ícono animado - Mobile */}
          <div
            className={`transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative p-6 bg-gradient-to-b from-dark/40 to-dark/60 border border-red-barber/20 rounded-xl shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 vintage-led-base opacity-40" />
              <div className="absolute -inset-2 bg-gradient-to-br from-red-barber/8 via-transparent to-blue-900/5 rounded-xl blur-xl vintage-led-pulse" />
              <div className="relative scale-150 z-10">
                <BarberPole />
              </div>
            </div>
          </div>

          {/* Badge EST. 1970 */}
          <div
            className={`inline-flex items-center gap-2.5 px-7 py-3 bg-red-barber/15 border-2 border-red-barber/40 rounded-full backdrop-blur-sm transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <div className="w-2 h-2 bg-red-barber rounded-full vintage-pulse" />
            <span className="text-cream font-bold tracking-[0.3em] text-sm">
              EST. 1970
            </span>
            <div className="w-2 h-2 bg-red-barber rounded-full vintage-pulse" />
          </div>

          {/* Título */}
          <h1
            className={`font-serif text-4xl text-cream tracking-tight leading-tight transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              textShadow:
                "0 2px 20px rgba(179, 18, 23, 0.3), 0 0 40px rgba(0, 0, 0, 0.5)",
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
            className={`text-lg text-cream/80 font-light tracking-wide transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Luis Soto – Barber
          </p>

          {/* Frase */}
          <p
            className={`text-sm text-gray-barber/70 transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Más de 50 años de tradición y excelencia
          </p>

          {/* Botones - Mobile full width */}
          <div
            className={`w-full flex flex-col gap-4 transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="/reservar"
              className="group relative w-full bg-red-barber hover:bg-red-hover text-cream font-bold py-6 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg shadow-red-barber/30 active:scale-98"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Reserva tu hora
                <span className="text-2xl group-hover:translate-x-1 transition-transform">
                  ⚡
                </span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-barber to-red-hover opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            </Link>

            <Link
              href="/servicios"
              className="w-full bg-transparent border-2 border-cream/30 hover:border-cream text-cream font-semibold py-5 px-8 rounded-lg transition-all duration-300 hover:bg-cream/5 active:scale-98"
            >
              Ver Servicios
            </Link>
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
            {/* Badge EST. 1970 - Protagonista */}
            <div
              className={`inline-flex items-center gap-2.5 mb-12 px-7 py-3 bg-red-barber/15 border-2 border-red-barber/40 rounded-full backdrop-blur-sm transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <div className="w-2 h-2 bg-red-barber rounded-full vintage-pulse" />
              <span className="text-cream font-bold tracking-[0.3em] text-base">
                EST. 1970
              </span>
              <div className="w-2 h-2 bg-red-barber rounded-full vintage-pulse" />
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
                  "0 2px 20px rgba(179, 18, 23, 0.3), 0 0 40px rgba(0, 0, 0, 0.5)",
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
              className={`text-xl sm:text-2xl md:text-3xl text-cream/80 font-light mb-6 tracking-wide transition-all duration-700 delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Luis Soto – Barber
            </p>

            {/* Tagline */}
            <p
              className={`text-base sm:text-lg text-gray-barber/70 mb-14 transition-all duration-700 delay-400 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Más de 50 años de tradición y excelencia
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10 transition-all duration-700 delay-500 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Link
                href="/reservar"
                className="group relative w-full sm:w-auto bg-red-barber hover:bg-red-hover text-cream font-bold py-5 px-10 rounded-lg transition-all duration-300 text-lg shadow-lg shadow-red-barber/30 hover:shadow-xl hover:shadow-red-barber/40 hover:-translate-y-1"
              >
                <span className="relative z-10">Reserva tu hora</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-barber to-red-hover opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl group-hover:translate-x-1 transition-transform">
                  ⚡
                </span>
              </Link>

              <Link
                href="/servicios"
                className="w-full sm:w-auto bg-transparent border-2 border-cream/30 hover:border-cream text-cream font-semibold py-5 px-8 rounded-lg transition-all duration-300 hover:bg-cream/5 hover:-translate-y-1"
              >
                Ver Servicios
              </Link>
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

          {/* RIGHT COLUMN: BarberPole + InfoCard (Desktop) */}
          <div className="flex flex-col items-center gap-8">
            {/* Barber Pole - Integrado sutilmente */}
            <div
              className={`transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="relative p-8 bg-gradient-to-b from-dark/40 to-dark/60 border border-red-barber/20 rounded-lg shadow-2xl overflow-visible backdrop-blur-sm">
                {/* Glow muy sutil */}
                <div className="absolute inset-0 vintage-led-base opacity-50" />
                <div className="absolute -inset-2 bg-gradient-to-br from-red-barber/5 via-transparent to-blue-900/3 rounded-lg blur-xl vintage-led-pulse" />

                <div className="relative scale-125 z-10">
                  <BarberPole />
                </div>
              </div>
            </div>

            {/* Info Card - Oculta en mobile, sutil en desktop */}
            <div
              className={`hidden lg:block w-full max-w-md bg-dark/60 backdrop-blur-sm border border-dark-border/50 rounded-xl p-6 shadow-lg transition-all duration-700 delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-cream/70 font-semibold text-base mb-4 border-b border-red-barber/20 pb-2">
                Información
              </h3>

              <div className="space-y-4">
                {/* Ubicación */}
                <div className="flex items-start gap-3 text-cream/90 group hover:text-cream transition-colors">
                  <span className="text-xl mt-0.5 flex-shrink-0">📍</span>
                  <div>
                    <p className="font-medium text-sm text-gray-barber">
                      Ubicación
                    </p>
                    <p className="font-semibold">Av. Libertad #161, Local C</p>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start gap-3 text-cream/90 group hover:text-cream transition-colors">
                  <span className="text-xl mt-0.5 flex-shrink-0">🕒</span>
                  <div>
                    <p className="font-medium text-sm text-gray-barber">
                      Horario
                    </p>
                    <p className="font-semibold">
                      Lun–Sáb: 10:00–13:30 / 16:00–20:00
                    </p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-3 text-cream/90 group hover:text-cream transition-colors">
                  <span className="text-xl mt-0.5 flex-shrink-0">📞</span>
                  <div>
                    <p className="font-medium text-sm text-gray-barber">
                      Contacto
                    </p>
                    <a
                      href="tel:+56950915048"
                      className="font-semibold hover:text-red-barber transition-colors"
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
