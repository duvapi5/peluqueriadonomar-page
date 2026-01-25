"use client";

import BarberPole from "./BarberPole";

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-dark via-dark-lighter/30 to-dark relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-40" />

      {/* Glows de fondo dramáticos */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-barber/10 via-red-barber/5 to-transparent blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-red-barber/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "5s", animationDelay: "2s" }}
      />

      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        {/* BarberPole con LEDs de fondo */}
        <div className="mb-10 relative inline-block">
          {/* LEDs de fondo */}
          <div className="absolute inset-0 -inset-12">
            {/* LED Rojo izquierda */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-red-barber/40 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: "3s" }}
            />
            {/* LED Azul derecha */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-blue-900/40 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            />
            {/* LED Rojo arriba */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-barber/30 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: "5s", animationDelay: "2s" }}
            />
            {/* LED Azul abajo */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-900/30 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: "4.5s", animationDelay: "0.5s" }}
            />
          </div>

          {/* BarberPole */}
          <div className="relative scale-125 z-10">
            <BarberPole />
          </div>
        </div>

        <h2
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream mb-4 sm:mb-6 px-4"
          style={{
            textShadow:
              "0 0 40px rgba(179, 18, 23, 0.4), 0 4px 24px rgba(0,0,0,0.6)",
          }}
        >
          ¿Listo para tu próximo corte?
        </h2>

        {/* Línea decorativa tricolor */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent to-red-barber rounded-full" />
          <div className="w-2 h-2 bg-cream rounded-full" />
          <div className="w-16 h-1 bg-gradient-to-l from-transparent to-blue-900 rounded-full" />
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-cream/80 mb-3 sm:mb-4 px-4">
          Contáctanos por{" "}
          <span className="text-red-barber font-bold">WhatsApp</span>
        </p>

        <p className="text-xs sm:text-sm text-gray-barber/70 mb-8 sm:mb-10 md:mb-12 flex items-center justify-center gap-3 sm:gap-4 flex-wrap px-4">
          <span className="flex items-center gap-2">
            <span className="text-green-500">✓</span> Respuesta inmediata
          </span>
          <span className="text-cream/20">|</span>
          <span className="flex items-center gap-2">
            <span className="text-green-500">✓</span> Atención personalizada
          </span>
        </p>

        {/* Botones CTA premium */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-10 sm:mb-12 md:mb-16 px-4">
          <a
            href="https://wa.me/56950915048?text=Buenas%2C%20estoy%20interesado%20en%20sus%20servicios%20tiene%20horas%20libres%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto text-center bg-gradient-to-r from-red-barber via-red-barber to-red-hover text-cream font-bold py-4 sm:py-5 px-10 sm:px-14 rounded-lg transition-all duration-300 text-base sm:text-lg shadow-xl sm:shadow-2xl shadow-red-barber/50 hover:shadow-red-barber/70 hover:scale-105 hover:-translate-y-1 overflow-hidden border border-red-barber/50"
          >
            {/* Efecto brillo animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative z-10">Reservar Ahora</span>
          </a>

          <a
            href="tel:+56950915048"
            className="w-full sm:w-auto text-center bg-transparent border-2 border-cream/30 hover:border-cream text-cream font-semibold py-4 sm:py-5 px-8 sm:px-10 rounded-lg transition-all duration-300 hover:bg-cream/5 hover:shadow-lg hover:shadow-cream/10"
          >
            Llamar
          </a>
        </div>

        {/* Info rápida con estilo vintage */}
        <div className="pt-8 sm:pt-10 md:pt-12 border-t border-cream/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-barber/20 to-transparent border border-red-barber/30 flex items-center justify-center group-hover:scale-110 group-hover:border-red-barber/50 transition-all">
                <span className="text-2xl">📍</span>
              </div>
              <p className="text-cream/70 font-semibold text-sm mb-1">
                Ubicación
              </p>
              <p className="text-gray-barber text-sm">
                Av. Libertad #161, Local C
              </p>
            </div>

            <div className="group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-barber/20 to-transparent border border-red-barber/30 flex items-center justify-center group-hover:scale-110 group-hover:border-red-barber/50 transition-all">
                <span className="text-2xl">📞</span>
              </div>
              <p className="text-cream/70 font-semibold text-sm mb-1">
                Teléfono
              </p>
              <p className="text-gray-barber text-sm">+56 9 5091 5048</p>
            </div>

            <div className="group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-barber/20 to-transparent border border-red-barber/30 flex items-center justify-center group-hover:scale-110 group-hover:border-red-barber/50 transition-all">
                <span className="text-2xl">🕐</span>
              </div>
              <p className="text-cream/70 font-semibold text-sm mb-1">
                Horario
              </p>
              <p className="text-gray-barber text-sm">
                Lun-Sáb: 10:00-13:30 / 16:00-19:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Líneas decorativas inferiores */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-900/30 to-transparent" />
    </section>
  );
}
