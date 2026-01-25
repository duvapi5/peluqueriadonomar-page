import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export default function HomePage() {
  // Servicios destacados para mostrar en home
  const featuredServices = [
    {
      id: "1",
      name: "Corte Clásico",
      description:
        "Corte tradicional con tijera y máquina, incluye lavado y secado",
      duration_min: 30,
      price: 8000,
      active: true,
      created_at: new Date().toISOString(),
    },
    {
      id: "2",
      name: "Corte Moderno",
      description:
        "Estilos actuales: fade, undercut, pompadour. Incluye acabado completo",
      duration_min: 45,
      price: 12000,
      active: true,
      created_at: new Date().toISOString(),
    },
    {
      id: "3",
      name: "Afeitado Clásico",
      description:
        "Afeitado con navaja tradicional, toalla caliente y productos premium",
      duration_min: 30,
      price: 8000,
      active: true,
      created_at: new Date().toISOString(),
    },
    {
      id: "4",
      name: "Corte + Barba",
      description:
        "Servicio completo: corte de cabello + arreglo o diseño de barba",
      duration_min: 60,
      price: 15000,
      active: true,
      created_at: new Date().toISOString(),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Servicios Section - Vintage Barbershop Style */}
        <section className="py-24 px-4 bg-gradient-to-b from-dark via-dark-lighter/50 to-dark relative overflow-hidden">
          {/* Efectos de luz de fondo */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-barber/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-3xl" />
          
          {/* Líneas decorativas superiores */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-barber/30 to-transparent" />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            {/* Header de sección con estilo vintage */}
            <div className="text-center mb-16">
              {/* Decoración superior */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-red-barber" />
                <span className="text-3xl">✂️</span>
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-red-barber" />
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-4"
                  style={{ textShadow: '0 0 30px rgba(179, 18, 23, 0.3), 0 4px 20px rgba(0,0,0,0.5)' }}>
                Nuestros Servicios
              </h2>
              
              {/* Línea decorativa con tricolor */}
              <div className="flex items-center justify-center gap-1 mb-6">
                <div className="w-12 h-1 bg-red-barber rounded-full" />
                <div className="w-8 h-1 bg-cream/80 rounded-full" />
                <div className="w-12 h-1 bg-blue-900 rounded-full" />
              </div>
              
              <p className="text-gray-barber max-w-2xl mx-auto text-lg">
                Más de <span className="text-cream font-semibold">50 años</span> de experiencia en barbería clásica y moderna
              </p>
            </div>

            {/* Grid de servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* CTA con estilo vintage */}
            <div className="text-center">
              <Link
                href="/servicios"
                className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-cream/30 hover:border-red-barber text-cream font-semibold py-4 px-10 rounded-lg transition-all duration-300 hover:bg-red-barber/10 hover:shadow-lg hover:shadow-red-barber/20"
              >
                <span>Ver todos los servicios</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
          
          {/* Líneas decorativas inferiores */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-900/30 to-transparent" />
        </section>

        {/* CTA Reservar Section - Vintage Premium */}
        <section className="py-24 px-4 bg-gradient-to-b from-dark via-dark-lighter/30 to-dark relative overflow-hidden">
          {/* Texture overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-40" />
          
          {/* Glows de fondo dramáticos */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-barber/10 via-red-barber/5 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-red-barber/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />

          <div className="container mx-auto text-center relative z-10 max-w-4xl">
            {/* Icono central con glow */}
            <div className="mb-10 relative inline-block">
              <div className="absolute inset-0 bg-gradient-radial from-red-barber/30 to-transparent blur-2xl scale-150" />
              <span className="relative text-7xl md:text-8xl filter drop-shadow-2xl">💈</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6"
                style={{ textShadow: '0 0 40px rgba(179, 18, 23, 0.4), 0 4px 24px rgba(0,0,0,0.6)' }}>
              ¿Listo para tu próximo corte?
            </h2>

            {/* Línea decorativa tricolor */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent to-red-barber rounded-full" />
              <div className="w-2 h-2 bg-cream rounded-full" />
              <div className="w-16 h-1 bg-gradient-to-l from-transparent to-blue-900 rounded-full" />
            </div>

            <p className="text-xl md:text-2xl text-cream/80 mb-4">
              Reserva tu hora en menos de <span className="text-red-barber font-bold">1 minuto</span>
            </p>

            <p className="text-sm text-gray-barber/70 mb-12 flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Confirmación inmediata por WhatsApp
              </span>
              <span className="text-cream/20">|</span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Horarios en tiempo real
              </span>
            </p>

            {/* Botones CTA premium */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/reservar"
                className="group relative w-full sm:w-auto bg-gradient-to-r from-red-barber via-red-barber to-red-hover text-cream font-bold py-5 px-14 rounded-lg transition-all duration-300 text-lg shadow-2xl shadow-red-barber/50 hover:shadow-red-barber/70 hover:scale-105 hover:-translate-y-1 overflow-hidden border border-red-barber/50"
              >
                {/* Efecto brillo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-3">
                  Reservar Ahora
                  <span className="text-2xl group-hover:translate-x-1 group-hover:scale-110 transition-all">⚡</span>
                </span>
              </Link>

              <Link
                href="/contacto"
                className="w-full sm:w-auto bg-transparent border-2 border-cream/30 hover:border-cream text-cream font-semibold py-5 px-10 rounded-lg transition-all duration-300 hover:bg-cream/5 hover:shadow-lg hover:shadow-cream/10"
              >
                Contactar
              </Link>
            </div>

            {/* Info rápida con estilo vintage */}
            <div className="pt-12 border-t border-cream/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-barber/20 to-transparent border border-red-barber/30 flex items-center justify-center group-hover:scale-110 group-hover:border-red-barber/50 transition-all">
                    <span className="text-2xl">📍</span>
                  </div>
                  <p className="text-cream/70 font-semibold text-sm mb-1">Ubicación</p>
                  <p className="text-gray-barber text-sm">Av. Libertad #161, Local C</p>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-900/30 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-900/50 transition-all">
                    <span className="text-2xl">📞</span>
                  </div>
                  <p className="text-cream/70 font-semibold text-sm mb-1">Teléfono</p>
                  <a href="tel:+56950915048" className="text-gray-barber text-sm hover:text-cream transition-colors">
                    +56 9 5091 5048
                  </a>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cream/10 to-transparent border border-cream/20 flex items-center justify-center group-hover:scale-110 group-hover:border-cream/40 transition-all">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <p className="text-cream/70 font-semibold text-sm mb-1">Horario</p>
                  <p className="text-gray-barber text-sm">Lun-Sáb: 10:00-13:30 / 16:00-20:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
