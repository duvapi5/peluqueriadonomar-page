import { AdminNav } from "@/components/admin/AdminNav";

export default function AdminAjustesPage() {
  return (
    <div className="min-h-screen bg-dark">
      <AdminNav currentPath="/admin/ajustes" />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="font-serif text-3xl text-cream mb-4">
            Ajustes del Negocio
          </h2>
        </div>

        <div className="card text-center py-12">
          <p className="text-4xl mb-3">🚧</p>
          <p className="text-cream mb-2">Próximamente</p>
          <p className="text-gray-barber text-sm">
            Gestión de horarios y bloqueos en desarrollo
          </p>
        </div>
      </main>
    </div>
  );
}
