import { AdminNav } from "@/components/admin/AdminNav";

export default function AdminServiciosPage() {
  return (
    <div className="min-h-screen bg-dark">
      <AdminNav currentPath="/admin/servicios" />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="font-serif text-3xl text-cream mb-4">
            Gestión de Servicios
          </h2>
        </div>

        <div className="card text-center py-12">
          <p className="text-4xl mb-3">🚧</p>
          <p className="text-cream mb-2">Próximamente</p>
          <p className="text-gray-barber text-sm">
            CRUD de servicios en desarrollo
          </p>
        </div>
      </main>
    </div>
  );
}
