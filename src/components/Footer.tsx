import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-dark-lighter to-dark border-t-2 border-red-barber/30 mt-auto relative overflow-hidden">
      {/* Línea decorativa superior - franjas de barbería */}
      <div className="h-1.5 w-full bg-gradient-to-r from-red-barber via-cream via-50% to-blue-900" />
      
      {/* Glow sutil de fondo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-barber/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand - Con decoración vintage */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* Mini BarberPole */}
              <div className="w-3 h-12 rounded-full overflow-hidden shadow-lg shadow-red-barber/30">
                <div 
                  className="w-full h-full"
                  style={{
                    background: `repeating-linear-gradient(
                      -45deg,
                      #DC2626 0px,
                      #DC2626 4px,
                      #FFFFFF 4px,
                      #FFFFFF 8px,
                      #2563EB 8px,
                      #2563EB 12px,
                      #FFFFFF 12px,
                      #FFFFFF 16px
                    )`
                  }}
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-cream">
                  Don Omar
                </h3>
                <p className="text-red-barber font-bold text-xs tracking-[0.3em]">BARBERÍA</p>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark/50 border border-cream/10 rounded-full mt-2">
              <div className="w-2 h-2 bg-red-barber rounded-full animate-pulse" />
              <span className="text-cream/70 text-xs tracking-[0.2em] font-medium">EST. 1970</span>
              <div className="w-2 h-2 bg-blue-900 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <p className="text-gray-barber text-sm mt-4 italic">
              "Más de 50 años de tradición y excelencia"
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold text-cream mb-4 flex items-center gap-2">
              <span className="text-red-barber">✂️</span>
              Servicios
            </h4>
            <div className="space-y-3 text-sm">
              <Link href="/servicios" className="block text-gray-barber hover:text-cream hover:translate-x-1 transition-all">→ Corte Clásico</Link>
              <Link href="/servicios" className="block text-gray-barber hover:text-cream hover:translate-x-1 transition-all">→ Corte Moderno</Link>
              <Link href="/servicios" className="block text-gray-barber hover:text-cream hover:translate-x-1 transition-all">→ Afeitado Clásico</Link>
              <Link href="/servicios" className="block text-gray-barber hover:text-cream hover:translate-x-1 transition-all">→ Corte + Barba</Link>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-cream mb-4 flex items-center gap-2">
              <span className="text-blue-500">📍</span>
              Contacto
            </h4>
            <div className="space-y-3 text-sm text-gray-barber">
              <a href="tel:+56950915048" className="flex items-center gap-2 hover:text-cream transition-colors">
                <span className="text-lg">📞</span>
                <span>+56 9 5091 5048</span>
              </a>
              <p className="flex items-start gap-2">
                <span className="text-lg">🏠</span>
                <span>Av. Libertad #161, Local C<br/>Rosario</span>
              </p>
            </div>
          </div>

          {/* Horario */}
          <div>
            <h4 className="font-semibold text-cream mb-4 flex items-center gap-2">
              <span className="text-cream/70">🕐</span>
              Horario
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-cream/10">
                <span className="text-gray-barber">Lun - Sáb</span>
                <span className="text-cream font-medium">10:00 - 13:30</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-cream/10">
                <span className="text-gray-barber">Tarde</span>
                <span className="text-cream font-medium">16:00 - 20:00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-barber">Domingo</span>
                <span className="text-red-barber font-medium">Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separador decorativo */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
          <span className="text-2xl">💈</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-barber">
            &copy; {new Date().getFullYear()} Peluquería Don Omar. Todos los derechos reservados.
          </p>
          <p className="text-xs text-cream/30 mt-2">
            Tradición desde 1970 · Luis Soto, Barber
          </p>
        </div>
      </div>
      
      {/* Línea decorativa inferior */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-900 via-cream via-50% to-red-barber" />
    </footer>
  );
}
