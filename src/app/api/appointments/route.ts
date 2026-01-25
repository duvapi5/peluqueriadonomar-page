import { NextRequest, NextResponse } from 'next/server';
import { validatePhone } from '@/lib/utils';
import { addBookedSlot } from '../availability/route';

// =====================================================
// MODO DEMO - Funciona sin base de datos
// =====================================================

// Servicios demo
const DEMO_SERVICES: Record<string, { name: string; duration_min: number; price: number }> = {
  '1': { name: 'Corte Clásico', duration_min: 30, price: 8000 },
  '2': { name: 'Corte Moderno', duration_min: 45, price: 12000 },
  '3': { name: 'Afeitado Clásico', duration_min: 30, price: 8000 },
  '4': { name: 'Corte + Barba', duration_min: 60, price: 15000 },
  '5': { name: 'Arreglo de Barba', duration_min: 20, price: 5000 },
};

// Almacenamiento en memoria de reservas
const appointments: Array<{
  id: string;
  service_id: string;
  date: string;
  time: string;
  customer_name: string;
  customer_phone: string;
  notes: string | null;
  status: string;
  created_at: string;
  service: { name: string; duration_min: number; price: number };
}> = [];

/**
 * POST /api/appointments
 * Crea una nueva reserva
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { service_id, date, time, customer_name, customer_phone, notes } = body;

    // Validaciones
    if (!service_id || !date || !time || !customer_name || !customer_phone) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar teléfono
    if (!validatePhone(customer_phone)) {
      return NextResponse.json(
        { error: 'Formato de teléfono inválido. Usa formato: +56 9 1234 5678' },
        { status: 400 }
      );
    }

    // Validar formato de fecha
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json({ error: 'Formato de fecha inválido' }, { status: 400 });
    }

    // Validar formato de hora
    if (!/^\d{2}:\d{2}$/.test(time)) {
      return NextResponse.json({ error: 'Formato de hora inválido' }, { status: 400 });
    }

    // Verificar servicio
    const service = DEMO_SERVICES[service_id];
    if (!service) {
      return NextResponse.json({ error: 'Servicio no válido' }, { status: 400 });
    }

    // Crear la reserva demo
    const appointment = {
      id: `demo-${Date.now()}`,
      service_id,
      date,
      time,
      customer_name: customer_name.trim(),
      customer_phone: customer_phone.trim(),
      notes: notes?.trim() || null,
      status: 'pending',
      created_at: new Date().toISOString(),
      service: {
        name: service.name,
        duration_min: service.duration_min,
        price: service.price,
      },
    };

    // Guardar en memoria
    appointments.push(appointment);
    
    // Marcar slot como ocupado
    addBookedSlot(date, time);

    console.log('✅ DEMO: Reserva creada:', appointment);

    return NextResponse.json({ appointment }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/appointments:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/appointments?date=YYYY-MM-DD
 * Obtiene reservas (modo demo)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const date = searchParams.get('date');

    let filtered = appointments;
    
    if (date) {
      filtered = appointments.filter(apt => apt.date === date);
    }

    return NextResponse.json({ appointments: filtered });
  } catch (error) {
    console.error('Error in GET /api/appointments:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
