import { NextResponse } from 'next/server';

// =====================================================
// MODO DEMO - Funciona sin base de datos
// Para producción, descomentar la versión con Supabase
// =====================================================

const DEMO_SERVICES = [
  {
    id: "1",
    name: "Corte Clásico",
    description: "Corte tradicional con tijera y máquina, incluye lavado y secado",
    duration_min: 30,
    price: 8000,
    active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Corte Moderno",
    description: "Estilos actuales: fade, undercut, pompadour. Incluye acabado completo",
    duration_min: 45,
    price: 12000,
    active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Afeitado Clásico",
    description: "Afeitado con navaja tradicional, toalla caliente y productos premium",
    duration_min: 30,
    price: 8000,
    active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Corte + Barba",
    description: "Servicio completo: corte de cabello + arreglo o diseño de barba",
    duration_min: 60,
    price: 15000,
    active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "5",
    name: "Arreglo de Barba",
    description: "Perfilado y arreglo de barba con productos premium",
    duration_min: 20,
    price: 5000,
    active: true,
    created_at: new Date().toISOString(),
  },
];

export async function GET() {
  // Modo DEMO: retorna servicios hardcodeados
  return NextResponse.json({ services: DEMO_SERVICES });
}

/* 
// ===========================================
// VERSIÓN CON SUPABASE (para producción)
// ===========================================
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  try {
    const supabase = await createClient();
    
    const { data: services, error } = await supabase
      .from('services')
      .select('*')
      .eq('active', true)
      .order('duration_min');

    if (error) {
      console.error('Error fetching services:', error);
      return NextResponse.json({ error: 'Error al obtener servicios' }, { status: 500 });
    }

    return NextResponse.json({ services });
  } catch (error) {
    console.error('Error in GET /api/services:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
*/
