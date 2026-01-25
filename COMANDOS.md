# 🛠️ Comandos Útiles - Desarrollo

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo (hot reload)
npm run dev

# Build de producción
npm run build

# Ejecutar build localmente
npm start

# Linting
npm run lint
```

## Supabase - Queries Útiles

### Ver todas las reservas

```sql
SELECT
  a.*,
  s.name as service_name
FROM appointments a
JOIN services s ON a.service_id = s.id
ORDER BY a.date DESC, a.time DESC
LIMIT 50;
```

### Ver reservas del día

```sql
SELECT
  a.*,
  s.name as service_name
FROM appointments a
JOIN services s ON a.service_id = s.id
WHERE a.date = CURRENT_DATE
ORDER BY a.time;
```

### Ver slots ocupados por fecha

```sql
SELECT date, time, customer_name, status
FROM appointments
WHERE date = '2025-01-30'
AND status != 'canceled'
ORDER BY time;
```

### Ver usuarios admin

```sql
SELECT * FROM admin_users;
```

### Agregar un admin

```sql
-- Primero crear usuario en Authentication, luego:
INSERT INTO admin_users (id, email, is_admin)
VALUES ('uuid-del-usuario-de-auth', 'nuevo@admin.com', true);
```

### Limpiar reservas de prueba

```sql
DELETE FROM appointments
WHERE customer_phone LIKE '%test%'
OR customer_name LIKE '%test%';
```

### Bloquear un horario

```sql
INSERT INTO blocked_slots (date, time, reason)
VALUES ('2025-02-01', '14:00', 'Evento especial');
```

### Ver horarios del negocio

```sql
SELECT
  CASE day_of_week
    WHEN 0 THEN 'Domingo'
    WHEN 1 THEN 'Lunes'
    WHEN 2 THEN 'Martes'
    WHEN 3 THEN 'Miércoles'
    WHEN 4 THEN 'Jueves'
    WHEN 5 THEN 'Viernes'
    WHEN 6 THEN 'Sábado'
  END as dia,
  start_time,
  end_time,
  start_time_2,
  end_time_2,
  is_closed
FROM business_hours
ORDER BY day_of_week;
```

## Testing Local

### Crear reserva de prueba

```bash
curl -X POST http://localhost:3000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "service_id": "uuid-del-servicio",
    "date": "2025-01-30",
    "time": "15:00",
    "customer_name": "Test User",
    "customer_phone": "+56912345678",
    "notes": "Reserva de prueba"
  }'
```

### Ver servicios disponibles

```bash
curl http://localhost:3000/api/services
```

### Ver disponibilidad

```bash
curl "http://localhost:3000/api/availability?date=2025-01-30&serviceId=uuid-del-servicio"
```

## Variables de Entorno

### Desarrollo (.env.local)

```env
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=local-anon-key
SUPABASE_SERVICE_ROLE_KEY=local-service-role-key
ADMIN_EMAILS=dev@test.com
NEXT_PUBLIC_WHATSAPP_PHONE=56950915048
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Producción (Vercel/Netlify)

```env
NEXT_PUBLIC_SUPABASE_URL=https://proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=prod-anon-key
SUPABASE_SERVICE_ROLE_KEY=prod-service-role-key
ADMIN_EMAILS=admin@peluqueriadonomar.cl,otro@admin.cl
NEXT_PUBLIC_WHATSAPP_PHONE=56950915048
NEXT_PUBLIC_APP_URL=https://peluqueriadonomar.com
```

## Deploy

### Vercel

```bash
# Instalar CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Git + Vercel Auto Deploy

```bash
# Inicializar repo
git init
git add .
git commit -m "Initial commit"

# Conectar a GitHub
git remote add origin https://github.com/tu-usuario/repo.git
git push -u origin main

# En Vercel: Import Project → conectar repo
```

## Troubleshooting

### Reset de base de datos local

```sql
-- Borrar todo y empezar de cero
DROP TABLE IF EXISTS blocked_slots CASCADE;
DROP TABLE IF EXISTS appointments CASCADE;
DROP TABLE IF EXISTS business_hours CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS admin_users CASCADE;

-- Luego ejecutar schema.sql + rls.sql + seed.sql
```

### Limpiar cache de Next.js

```bash
rm -rf .next
npm run dev
```

### Ver logs de Supabase

En Dashboard → Logs → seleccionar tipo (Database, API, Auth)

### Regenerar tipos TypeScript de Supabase

```bash
npx supabase gen types typescript --project-id "tu-project-id" > src/lib/database.types.ts
```

## Backups

### Exportar datos de Supabase

```sql
-- Servicios
COPY (SELECT * FROM services) TO '/tmp/services_backup.csv' CSV HEADER;

-- Reservas
COPY (SELECT * FROM appointments) TO '/tmp/appointments_backup.csv' CSV HEADER;

-- Horarios
COPY (SELECT * FROM business_hours) TO '/tmp/hours_backup.csv' CSV HEADER;
```

### Importar datos

```sql
COPY services FROM '/tmp/services_backup.csv' CSV HEADER;
COPY appointments FROM '/tmp/appointments_backup.csv' CSV HEADER;
COPY business_hours FROM '/tmp/hours_backup.csv' CSV HEADER;
```

## Performance

### Analizar bundle size

```bash
npm run build
# Revisar output en .next/analyze/
```

### Lighthouse audit

```bash
# Instalar
npm i -g lighthouse

# Correr
lighthouse http://localhost:3000 --view
```

## Seguridad

### Verificar RLS policies

```sql
-- Ver todas las policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies
WHERE schemaname = 'public';
```

### Test de autenticación

```bash
# Sin auth (debe fallar)
curl -X GET http://localhost:3000/api/appointments

# Con auth (obtener token de Supabase primero)
curl -X GET http://localhost:3000/api/appointments \
  -H "Authorization: Bearer tu-jwt-token"
```

---

💡 **Tip:** Mantén este archivo actualizado con comandos específicos de tu setup
