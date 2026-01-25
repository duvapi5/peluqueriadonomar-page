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
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-60" />

      {/* Vignette effect más dramático */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark/60 to-dark" />
      
      {/* LED Glow ambiental - MÁS VISIBLE */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-barber/25 via-red-barber/10 to-transparent blur-3xl opacity-40 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-blue-900/20 via-blue-900/5 to-transparent blur-3xl opacity-30 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-12">
        {/* MOBILE LAYOUT: Vertical centrado */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-8 max-w-md mx-auto">
          {/* Ícono animado - Mobile */}
          <div
            className={`relative transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            {/* LEDs azules y rojos de fondo - SIN contenedor */}
            <div className="absolute inset-0 -inset-12">
              {/* LED Rojo izquierda */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-red-barber/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
              {/* LED Azul derecha */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-blue-900/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              {/* LED Rojo arriba */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-barber/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
              {/* LED Azul abajo */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-900/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }} />
            </div>
            
            {/* BarberPole sin contenedor */}
            <div className="relative scale-150 z-10">
              <BarberPole />
            </div>
          </div>

          {/* Badge EST. 1970 */}
          <div
            className={`inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-red-barber/25 via-red-barber/30 to-red-barber/25 border-2 border-red-barber/60 rounded-full backdrop-blur-md shadow-xl shadow-red-barber/30 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <div className="w-2.5 h-2.5 bg-red-barber rounded-full vintage-pulse shadow-xl shadow-red-barber/80 animate-pulse" style={{ animationDuration: '2s' }} />
            <span className="text-cream font-bold tracking-[0.35em] text-sm drop-shadow-lg">
              EST. 1970
            </span>
            <div className="w-2.5 h-2.5 bg-red-barber rounded-full vintage-pulse shadow-xl shadow-red-barber/80 animate-pulse" style={{ animationDuration: '2s', animationDelay: '1s' }} />
          </div>

          {/* Título */}
          <h1
            className={`font-serif text-4xl text-cream tracking-tight leading-tight transition-all duration-700 delay-200 ${
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
            Luis Soto – Barber
          </p>

          {/* Frase */}
          <p
            className={`text-base text-cream/70 transition-all duration-700 delay-400 ${
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
              className="group relative w-full bg-gradient-to-r from-red-barber via-red-barber to-red-hover text-cream font-bold py-6 px-8 rounded-lg transition-all duration-300 text-lg shadow-2xl shadow-red-barber/50 hover:shadow-red-barber/70 hover:scale-105 active:scale-100 overflow-hidden"
            >
              {/* Efecto de brillo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                Reserva tu hora
                <span className="text-2xl group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300">
                  ⚡
                </span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-hover to-red-barber opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            </Link>

            <Link
              href="/servicios"
              className="w-full bg-transparent border-2 border-cream/40 hover:border-cream hover:bg-cream/10 text-cream font-semibold py-5 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-cream/10 hover:scale-105 active:scale-100"
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
              className={`inline-flex items-center gap-3 mb-12 px-8 py-3.5 bg-gradient-to-r from-red-barber/25 via-red-barber/30 to-red-barber/25 border-2 border-red-barber/60 rounded-full backdrop-blur-md shadow-xl shadow-red-barber/30 transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <div className="w-2.5 h-2.5 bg-red-barber rounded-full vintage-pulse shadow-xl shadow-red-barber/80 animate-pulse" style={{ animationDuration: '2s' }} />
              <span className="text-cream font-bold tracking-[0.35em] text-base drop-shadow-lg">
                EST. 1970
              </span>
              <div className="w-2.5 h-2.5 bg-red-barber rounded-full vintage-pulse shadow-xl shadow-red-barber/80 animate-pulse" style={{ animationDuration: '2s', animationDelay: '1s' }} />
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
              className={`text-xl sm:text-2xl md:text-3xl text-cream/90 font-light mb-6 tracking-wide transition-all duration-700 delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Luis Soto – Barber
            </p>

            {/* Tagline */}
            <p
              className={`text-base sm:text-lg text-cream/75 mb-14 transition-all duration-700 delay-400 ${
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
                className="group relative w-full sm:w-auto bg-gradient-to-r from-red-barber via-red-barber to-red-hover text-cream font-bold py-5 px-10 rounded-lg transition-all duration-300 text-lg shadow-2xl shadow-red-barber/50 hover:shadow-red-barber/70 hover:scale-105 hover:-translate-y-1 active:scale-100 overflow-hidden"
              >
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                
                <span className="relative z-10">Reserva tu hora</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-hover to-red-barber opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300">
                  ⚡
                </span>
              </Link>

              <Link
                href="/servicios"
                className="w-full sm:w-auto bg-transparent border-2 border-cream/40 hover:border-cream hover:bg-cream/10 text-cream font-semibold py-5 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-cream/10 hover:scale-105 hover:-translate-y-1 active:scale-100"
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
            {/* Barber Pole - Sin contenedor, solo LEDs */}
            <div
              className={`relative transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              {/* LEDs azules y rojos de fondo - SIN contenedor */}
              <div className="absolute inset-0 -inset-12">
                {/* LED Rojo izquierda */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-40 bg-red-barber/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
                {/* LED Azul derecha */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 bg-blue-900/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                {/* LED Rojo arriba */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-red-barber/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
                {/* LED Azul abajo */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-900/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }} />
              </div>

              {/* BarberPole sin contenedor */}
              <div className="relative scale-125 z-10">
                <BarberPole />
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
