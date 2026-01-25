// =====================================================
// MODO DEMO - Sin autenticación
// Para producción, descomentar la versión con Supabase
// =====================================================

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Modo DEMO: acceso directo sin login
  return <>{children}</>;
}

/*
// ===========================================
// VERSIÓN CON SUPABASE (para producción)
// ===========================================
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Si no hay usuario autenticado, redirigir al login
  if (!user && children && !String(children).includes("login")) {
    redirect("/admin/login");
  }

  // Si hay usuario, verificar que sea admin
  if (user) {
    const { data: adminData } = await supabase
      .from("admin_users")
      .select("is_admin")
      .eq("id", user.id)
      .single();

    if (!adminData || !adminData.is_admin) {
      redirect("/");
    }
  }

  return <>{children}</>;
}
*/
