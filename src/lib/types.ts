export interface Service {
  id: string;
  name: string;
  description?: string;
  duration_min: number;
  duration?: number; // alias for compatibility
  price: number | null;
  active: boolean;
  is_active?: boolean; // alias for compatibility
  created_at: string;
}

export interface Appointment {
  id: string;
  service_id: string;
  date: string;
  time: string;
  customer_name: string;
  customer_phone: string;
  status: 'pending' | 'confirmed' | 'canceled' | 'rescheduled';
  notes: string | null;
  created_at: string;
  updated_at: string;
  service?: Service;
}

export interface BusinessHour {
  id: string;
  day_of_week: number;
  start_time: string;
  end_time: string;
  start_time_2: string | null;
  end_time_2: string | null;
  is_closed: boolean;
  created_at: string;
}

export interface BlockedSlot {
  id: string;
  date: string;
  time: string;
  reason: string | null;
  created_at: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
  reason?: string;
}
