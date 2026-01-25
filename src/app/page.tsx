import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  // Servicios destacados para mostrar en home
  const featuredServices = [
    {
      name: "Corte Tradicional",
      description: "Corte clásico con tijera y máquina, estilo tradicional",
      price: 6000,
      icon: "✂",
    },
    {
      name: "Degradado",
      description: "Corte moderno con degradado profesional",
      price: 7000,
      icon: "▦",
    },
    {
      name: "Barba",
      description: "Arreglo y diseño de barba con navaja",
      price: 3000,
      icon: "〰",
    },
    {
      name: "Cejas",
      description: "Perfilado de cejas con navaja tradicional",
      price: 2000,
      icon: "⎯",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Servicios Section - Vintage Barbershop Style */}
        <section
          id="servicios"
          className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-dark via-dark-lighter/50 to-dark relative overflow-hidden"
        >
          {/* Efectos de luz de fondo */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-barber/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-3xl" />

          {/* Líneas decorativas superiores */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-barber/30 to-transparent" />

          <div className="container mx-auto max-w-6xl relative z-10">
            {/* Header de sección con estilo vintage */}
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              {/* Decoración superior */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent to-red-barber" />
                <span className="text-2xl sm:text-3xl">✂️</span>
                <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-l from-transparent to-red-barber" />
              </div>

              <h2
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream mb-3 sm:mb-4"
                style={{
                  textShadow:
                    "0 0 30px rgba(179, 18, 23, 0.3), 0 4px 20px rgba(0,0,0,0.5)",
                }}
              >
                Nuestros Servicios
              </h2>

              {/* Línea decorativa con tricolor */}
              <div className="flex items-center justify-center gap-1 mb-6">
                <div className="w-12 h-1 bg-red-barber rounded-full" />
                <div className="w-8 h-1 bg-cream/80 rounded-full" />
                <div className="w-12 h-1 bg-blue-900 rounded-full" />
              </div>

              <p className="text-gray-barber max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
                Más de <span className="text-cream font-semibold">50 años</span>{" "}
                de experiencia en barbería clásica y moderna
              </p>
            </div>

            {/* Grid de servicios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-14 md:mb-16">
              {featuredServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-dark-lighter to-dark border-2 border-cream/10 hover:border-red-barber/60 rounded-lg sm:rounded-xl p-5 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-barber/30 overflow-hidden"
                >
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-barber/0 via-red-barber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Borde superior rojizo */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-red-barber rounded-t-xl" />

                  <div className="relative z-10 pt-2">
                    {/* Nombre del servicio */}
                    <h3 className="font-serif text-xl text-cream mb-3 group-hover:text-red-barber transition-colors duration-300">
                      {service.name}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-barber text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Separador decorativo */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cream/20" />
                      <div className="w-1 h-1 rounded-full bg-red-barber" />
                      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cream/20" />
                    </div>

                    {/* Precio */}
                    <div className="flex items-center justify-between">
                      <p className="text-cream font-bold text-3xl group-hover:text-red-barber transition-colors">
                        ${service.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Decoración de esquina */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r-2 border-b-2 border-red-barber/20 rounded-br-xl transform group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          {/* Líneas decorativas inferiores */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-900/30 to-transparent" />
        </section>

        {/* CTA Reservar Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
