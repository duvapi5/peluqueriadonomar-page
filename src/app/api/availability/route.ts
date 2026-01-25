import { NextRequest, NextResponse } from 'next/server';
import { TimeSlot } from '@/lib/types';

// =====================================================
// MODO DEMO - Funciona sin base de datos
// =====================================================

// Horarios de atención de Don Omar
const BUSINESS_HOURS: Record<number, { morning: [string, string]; afternoon: [string, string] } | null> = {
  0: null, // Domingo cerrado
  1: { morning: ['10:00', '13:30'], afternoon: ['16:00', '20:00'] }, // Lunes
  2: { morning: ['10:00', '13:30'], afternoon: ['16:00', '20:00'] }, // Martes
  3: { morning: ['10:00', '13:30'], afternoon: ['16:00', '20:00'] }, // Miércoles
  4: { morning: ['10:00', '13:30'], afternoon: ['16:00', '20:00'] }, // Jueves
  5: { morning: ['10:00', '13:30'], afternoon: ['16:00', '20:00'] }, // Viernes
  6: { morning: ['10:00', '13:30'], afternoon: ['16:00', '20:00'] }, // Sábado
};

// Servicios con duración (para modo demo)
const SERVICE_DURATIONS: Record<string, number> = {
  '1': 30,
  '2': 45,
  '3': 30,
  '4': 60,
  '5': 20,
};

// Almacenamiento temporal de reservas (en memoria)
// En producción esto viene de Supabase
const bookedSlots: Set<string> = new Set();

export function getBookedSlots() {
  return bookedSlots;
}

export function addBookedSlot(date: string, time: string) {
  bookedSlots.add(`${date}_${time}`);
}

/**
 * GET /api/availability?date=YYYY-MM-DD&serviceId=uuid
 * Retorna los slots disponibles para una fecha y servicio específicos
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const date = searchParams.get('date');
    const serviceId = searchParams.get('serviceId');

    if (!date || !serviceId) {
      return NextResponse.json(
        { error: 'date y serviceId son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de fecha
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json({ error: 'Formato de fecha inválido' }, { status: 400 });
    }

    // Obtener día de la semana
    const dayOfWeek = new Date(date + 'T12:00:00').getDay();
    const businessHour = BUSINESS_HOURS[dayOfWeek];

    // Si es día cerrado
    if (!businessHour) {
      return NextResponse.json({ slots: [] });
    }

    // Duración del servicio
    const duration = SERVICE_DURATIONS[serviceId] || 30;

    // Generar slots
    const slots: TimeSlot[] = [];

    const generateSlots = (startTime: string, endTime: string) => {
      const start = timeToMinutes(startTime);
      const end = timeToMinutes(endTime);

      for (let minutes = start; minutes + duration <= end + duration; minutes += 30) {
        const time = minutesToTime(minutes);
        const isBooked = bookedSlots.has(`${date}_${time}`);
        
        // Simular algunos slots ocupados aleatoriamente para demo
        const randomBooked = Math.random() < 0.2; // 20% de probabilidad
        
        slots.push({
          time,
          available: !isBooked && !randomBooked,
          reason: isBooked ? 'Reservado' : randomBooked ? 'Ocupado' : undefined,
        });
      }
    };

    // Turno mañana
    generateSlots(businessHour.morning[0], businessHour.morning[1]);
    
    // Turno tarde
    generateSlots(businessHour.afternoon[0], businessHour.afternoon[1]);

    return NextResponse.json({ slots });
  } catch (error) {
    console.error('Error getting availability:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

// Helper functions
function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}
