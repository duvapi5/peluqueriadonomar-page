-- ============================================
-- Schema SQL para Peluquería Don Omar
-- ============================================

-- Extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- Tabla: services (Servicios ofrecidos)
-- ============================================
CREATE TABLE services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
    name VARCHAR(100) NOT NULL,
    duration_min INTEGER NOT NULL DEFAULT 30,
    price INTEGER,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP
    WITH
        TIME ZONE DEFAULT NOW ()
);

-- ============================================
-- Tabla: appointments (Reservas)
-- ============================================
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  service_id UUID NOT NULL REFERENCES services(id) ON DELETE RESTRICT,
  date DATE NOT NULL,
  time TIME NOT NULL,
  customer_name VARCHAR(100) NOT NULL,
  customer_phone VARCHAR(20) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'canceled', 'rescheduled')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

-- Índice único para evitar doble reserva en el mismo slot
UNIQUE(date, time) );

-- Índices para mejorar performance
CREATE INDEX idx_appointments_date ON appointments (date);

CREATE INDEX idx_appointments_status ON appointments (status);

CREATE INDEX idx_appointments_service ON appointments (service_id);

-- ============================================
-- Tabla: business_hours (Horario de atención)
-- ============================================
CREATE TABLE business_hours (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
    day_of_week INTEGER NOT NULL CHECK (
        day_of_week >= 0
        AND day_of_week <= 6
    ), -- 0=Domingo, 6=Sábado
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    start_time_2 TIME, -- Segundo turno (tarde)
    end_time_2 TIME,
    is_closed BOOLEAN DEFAULT false,
    created_at TIMESTAMP
    WITH
        TIME ZONE DEFAULT NOW (),
        UNIQUE (day_of_week)
);

-- ============================================
-- Tabla: blocked_slots (Bloqueos de horarios)
-- ============================================
CREATE TABLE blocked_slots (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
    date DATE NOT NULL,
    time TIME NOT NULL,
    reason VARCHAR(200),
    created_at TIMESTAMP
    WITH
        TIME ZONE DEFAULT NOW (),
        UNIQUE (date, time)
);

-- Índice para búsqueda rápida de bloqueos
CREATE INDEX idx_blocked_slots_date ON blocked_slots (date);

-- ============================================
-- Tabla: admin_users (Usuarios administradores)
-- ============================================
CREATE TABLE admin_users (
    id UUID PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL UNIQUE,
    is_admin BOOLEAN DEFAULT true,
    created_at TIMESTAMP
    WITH
        TIME ZONE DEFAULT NOW ()
);

-- ============================================
-- Función: actualizar updated_at automáticamente
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para appointments
CREATE TRIGGER update_appointments_updated_at
  BEFORE UPDATE ON appointments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Función auxiliar: verificar si usuario es admin
-- ============================================
CREATE OR REPLACE FUNCTION is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_users WHERE id = user_id AND is_admin = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;