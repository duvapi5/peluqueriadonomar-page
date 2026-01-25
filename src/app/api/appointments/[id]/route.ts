import { NextRequest, NextResponse } from 'next/server';

// =====================================================
// MODO DEMO - Funciona sin base de datos
// =====================================================

/**
 * PATCH /api/appointments/:id
 * Actualiza el estado de una reserva
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    if (!['pending', 'confirmed', 'canceled', 'rescheduled'].includes(status)) {
      return NextResponse.json({ error: 'Estado inválido' }, { status: 400 });
    }

    // En modo DEMO, simplemente retornamos éxito
    // Las reservas en memoria se actualizarían aquí en una implementación real
    console.log(`✅ DEMO: Reserva ${id} actualizada a estado: ${status}`);

    return NextResponse.json({ 
      success: true,
      appointment: { id, status, updated_at: new Date().toISOString() }
    });
  } catch (error) {
    console.error('Error in PATCH /api/appointments/:id:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
