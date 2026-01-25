-- ============================================
-- RLS Policies para Peluquería Don Omar
-- ============================================

-- Habilitar RLS en todas las tablas
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

ALTER TABLE business_hours ENABLE ROW LEVEL SECURITY;

ALTER TABLE blocked_slots ENABLE ROW LEVEL SECURITY;

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- ============================================
-- SERVICES - Políticas
-- ============================================

-- Lectura pública: solo servicios activos
CREATE POLICY "Public can view active services" ON services FOR
SELECT TO public USING (active = true);

-- Admin puede hacer todo
CREATE POLICY "Admin can manage services" ON services FOR ALL TO authenticated USING (is_admin (auth.uid ()))
WITH
    CHECK (is_admin (auth.uid ()));

-- ============================================
-- APPOINTMENTS - Políticas
-- ============================================

-- Usuarios anónimos pueden crear reservas (solo campos permitidos)
CREATE POLICY "Anyone can create appointments" ON appointments FOR INSERT TO public
WITH
    CHECK (
        customer_name IS NOT NULL
        AND customer_phone IS NOT NULL
        AND date IS NOT NULL
        AND time IS NOT NULL
        AND service_id IS NOT NULL
        AND status = 'pending'
    );

-- Lectura pública limitada (solo para verificar disponibilidad - podría omitirse si usas API)
CREATE POLICY "Public can view non-canceled appointments for availability" ON appointments FOR
SELECT TO public USING (status != 'canceled');

-- Admin puede ver todas las reservas
CREATE POLICY "Admin can view all appointments" ON appointments FOR
SELECT TO authenticated USING (is_admin (auth.uid ()));

-- Admin puede actualizar reservas
CREATE POLICY "Admin can update appointments" ON appointments FOR
UPDATE TO authenticated USING (is_admin (auth.uid ()))
WITH
    CHECK (is_admin (auth.uid ()));

-- Admin puede eliminar reservas
CREATE POLICY "Admin can delete appointments" ON appointments FOR DELETE TO authenticated USING (is_admin (auth.uid ()));

-- ============================================
-- BUSINESS_HOURS - Políticas
-- ============================================

-- Lectura pública
CREATE POLICY "Public can view business hours" ON business_hours FOR
SELECT TO public USING (true);

-- Admin puede gestionar horarios
CREATE POLICY "Admin can manage business hours" ON business_hours FOR ALL TO authenticated USING (is_admin (auth.uid ()))
WITH
    CHECK (is_admin (auth.uid ()));

-- ============================================
-- BLOCKED_SLOTS - Políticas
-- ============================================

-- Lectura pública (para verificar disponibilidad)
CREATE POLICY "Public can view blocked slots" ON blocked_slots FOR
SELECT TO public USING (true);

-- Admin puede gestionar bloqueos
CREATE POLICY "Admin can manage blocked slots" ON blocked_slots FOR ALL TO authenticated USING (is_admin (auth.uid ()))
WITH
    CHECK (is_admin (auth.uid ()));

-- ============================================
-- ADMIN_USERS - Políticas
-- ============================================

-- Solo admin puede ver admin_users
CREATE POLICY "Admin can view admin users" ON admin_users FOR
SELECT TO authenticated USING (is_admin (auth.uid ()));

-- Solo admin puede crear otros admins
CREATE POLICY "Admin can create admin users" ON admin_users FOR INSERT TO authenticated
WITH
    CHECK (is_admin (auth.uid ()));