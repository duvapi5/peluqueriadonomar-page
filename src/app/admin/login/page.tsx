"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const supabase = createClient();

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
        return;
      }

      // Verificar si es admin
      const { data: adminData } = await supabase
        .from("admin_users")
        .select("is_admin")
        .eq("email", email)
        .single();

      if (!adminData || !adminData.is_admin) {
        await supabase.auth.signOut();
        setError("No tienes permisos de administrador");
        return;
      }

      router.push("/admin/hoy");
      router.refresh();
    } catch (err) {
      console.error("Login error:", err);
      setError("Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-dark">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">💈</div>
          <h1 className="font-serif text-3xl text-cream mb-2">Panel Admin</h1>
          <p className="text-gray-barber">Peluquería Don Omar</p>
        </div>

        <div className="card">
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-barber/20 border border-red-barber rounded text-cream text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-cream font-semibold mb-2">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="admin@ejemplo.com"
                required
              />
            </div>

            <div>
              <label className="block text-cream font-semibold mb-2">
                Contraseña:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
              disabled={loading}
            >
              {loading ? "Ingresando..." : "Ingresar"}
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <a href="/" className="text-gray-barber hover:text-cream text-sm">
            ← Volver al sitio
          </a>
        </div>
      </div>
    </div>
  );
}
