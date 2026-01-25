import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { generateWhatsAppURL } from "@/lib/utils";

export default function ContactoPage() {
  const mapURL = "https://maps.google.com/?q=Av.+Libertad+161+Local+C+Rosario";
  const contactMessage = "¡Hola! Quisiera consultar sobre sus servicios.";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">
              Contacto
            </h1>
            <div className="w-20 h-1 bg-red-barber mx-auto mb-6" />
            <p className="text-gray-barber text-lg">Estamos para servirte</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Información de Contacto */}
            <div className="card space-y-6">
              <div>
                <h3 className="font-serif text-2xl text-cream mb-4">
                  Información
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold text-cream">Dirección</p>
                      <p className="text-gray-barber">
                        Av. Libertad #161, Local C
                      </p>
                      <p className="text-gray-barber">Rosario</p>
                      <a
                        href={mapURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-barber hover:text-red-hover text-sm mt-1 inline-block"
                      >
                        Ver en mapa →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold text-cream">
                        Teléfono / WhatsApp
                      </p>
                      <a
                        href="tel:+56950915048"
                        className="text-gray-barber hover:text-cream transition-colors"
                      >
                        +56 9 5091 5048
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <p className="font-semibold text-cream">
                        Horario de Atención
                      </p>
                      <p className="text-gray-barber">Lunes a Sábado</p>
                      <p className="text-gray-barber">10:00 - 13:30</p>
                      <p className="text-gray-barber">16:00 - 20:00</p>
                      <p className="text-red-barber text-sm mt-2">
                        Cerrado domingos
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-dark-border">
                <WhatsAppButton
                  message={contactMessage}
                  className="btn-primary w-full"
                >
                  Contactar por WhatsApp
                </WhatsAppButton>
              </div>
            </div>

            {/* Mapa Placeholder */}
            <div className="card h-full min-h-[400px] flex flex-col">
              <h3 className="font-serif text-2xl text-cream mb-4">Ubicación</h3>
              <div className="flex-grow bg-dark-border rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl mb-3">📍</p>
                  <p className="text-gray-barber mb-4">Mapa de ubicación</p>
                  <a
                    href={mapURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-block"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Política de Cancelación */}
          <div className="card">
            <h3 className="font-serif text-2xl text-cream mb-4">
              ⚠️ Política de Cancelación
            </h3>
            <p className="text-gray-barber">
              Si necesitas cancelar o reprogramar tu cita, por favor avísanos
              con al menos 2 horas de anticipación. Esto nos permite ofrecer el
              horario a otros clientes. Gracias por tu comprensión.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
