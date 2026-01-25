import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";
import ServiceCard from "@/components/ServiceCard";

export default async function ServiciosPage() {
  const supabase = await createClient();

  const { data: services } = await supabase
    .from("services")
    .select("*")
    .eq("active", true)
    .order("duration_min");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">
              Nuestros Servicios
            </h1>
            <div className="w-20 h-1 bg-red-barber mx-auto mb-6" />
            <p className="text-gray-barber text-lg">
              Calidad y tradición en cada corte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services?.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {(!services || services.length === 0) && (
            <div className="text-center py-12">
              <p className="text-gray-barber">
                No hay servicios disponibles en este momento
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
