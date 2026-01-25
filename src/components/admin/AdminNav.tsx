import Link from "next/link";

// =====================================================
// MODO DEMO - Sin autenticación
// =====================================================

interface AdminNavProps {
  currentPath?: string;
}

export function AdminNav({ currentPath }: AdminNavProps) {
  return (
    <nav className="bg-dark-lighter border-b-2 border-red-barber/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-serif text-2xl text-cream">Panel Admin</h1>
            <p className="text-sm text-gray-barber">Peluquería Don Omar</p>
          </div>
          <Link
            href="/"
            className="text-cream/70 hover:text-cream text-sm flex items-center gap-2"
          >
            ← Volver al sitio
          </Link>
        </div>

        <div className="flex gap-2 overflow-x-auto">
          <Link
            href="/admin/hoy"
            className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
              currentPath === "/admin/hoy"
                ? "bg-red-barber text-cream shadow-lg shadow-red-barber/30"
                : "bg-dark-border text-gray-barber hover:text-cream hover:bg-dark-border/80"
            }`}
          >
            📅 Hoy
          </Link>
          <Link
            href="/admin/reservas"
            className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
              currentPath === "/admin/reservas"
                ? "bg-red-barber text-cream shadow-lg shadow-red-barber/30"
                : "bg-dark-border text-gray-barber hover:text-cream hover:bg-dark-border/80"
            }`}
          >
            📆 Calendario
          </Link>
          <Link
            href="/admin/servicios"
            className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
              currentPath === "/admin/servicios"
                ? "bg-red-barber text-cream shadow-lg shadow-red-barber/30"
                : "bg-dark-border text-gray-barber hover:text-cream hover:bg-dark-border/80"
            }`}
          >
            💈 Servicios
          </Link>
          <Link
            href="/admin/ajustes"
            className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
              currentPath === "/admin/ajustes"
                ? "bg-red-barber text-cream shadow-lg shadow-red-barber/30"
                : "bg-dark-border text-gray-barber hover:text-cream hover:bg-dark-border/80"
            }`}
          >
            ⚙️ Ajustes
          </Link>
        </div>
      </div>
    </nav>
  );
}
