# 💈 Peluquería Don Omar - Sistema de Reservas

Sistema completo de reservas y gestión para barbería/peluquería con diseño oscuro y minimalista.

## 🎨 Stack Tecnológico

- **Frontend:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL + Auth)
- **WhatsApp:** Integración via wa.me

## 🚀 Instalación y Configuración

### 1. Clonar e instalar dependencias

```bash
cd barberia-system
npm install
```

### 2. Configurar Supabase

#### a) Crear proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com) y crea un nuevo proyecto
2. Guarda las credenciales: `URL` y `anon key`

#### b) Ejecutar SQL

En el **SQL Editor** de Supabase, ejecuta en orden:

1. `supabase/schema.sql` - Crea las tablas
2. `supabase/rls.sql` - Configura las políticas de seguridad
3. `supabase/seed.sql` - Datos iniciales (servicios y horarios)

### 3. Variables de Entorno

Crea `.env.local` desde `.env.example`:

```bash
cp .env.example .env.local
```

Completa con tus credenciales:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key

ADMIN_EMAILS=tu@email.com

NEXT_PUBLIC_WHATSAPP_PHONE=56950915048
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 👨‍💼 Crear Usuario Admin

### Opción 1: Via Supabase Dashboard

1. Ve a **Authentication** → **Users** → **Add user**
2. Crea un usuario con email y contraseña
3. Copia el `UUID` del usuario
4. En **SQL Editor**, ejecuta:

```sql
INSERT INTO admin_users (id, email, is_admin)
VALUES ('uuid-del-usuario', 'tu@email.com', true);
```

### Opción 2: Via Registro + SQL

1. Regístrate en `/admin/login`
2. Obtén tu `UUID` desde Authentication → Users
3. Ejecuta el INSERT del paso anterior

## 📱 Funcionalidades

### Web Pública

- **Home** (`/`) - Página principal con marca y CTA
- **Servicios** (`/servicios`) - Lista de servicios disponibles
- **Reservar** (`/reservar`) - Sistema de reservas en 4 pasos:
  1. Elegir servicio
  2. Elegir fecha y hora
  3. Ingresar datos
  4. Confirmación + WhatsApp
- **Contacto** (`/contacto`) - Información y ubicación

### Panel Admin (Próximamente)

- **Login** (`/admin/login`) - Autenticación
- **Hoy** (`/admin/hoy`) - Reservas del día actual
- **Calendario** (`/admin/reservas`) - Vista por fecha
- **Servicios** (`/admin/servicios`) - CRUD de servicios
- **Ajustes** (`/admin/ajustes`) - Horarios y bloqueos

## 🗄️ Estructura de Base de Datos

### Tablas

- **services** - Servicios ofrecidos (cortes, afeitados, etc.)
- **appointments** - Reservas de clientes
- **business_hours** - Horario de atención por día
- **blocked_slots** - Bloqueos de horarios específicos
- **admin_users** - Usuarios administradores

### RLS (Row Level Security)

- ✅ Lectura pública: servicios activos, horarios
- ✅ Inserción anónima: solo crear reservas con validación
- ✅ Admin: gestión completa con autenticación

## 🔐 Seguridad

- RLS habilitado en todas las tablas
- Validación de teléfono chileno (+56...)
- Verificación de slots disponibles antes de crear reserva
- Políticas de admin basadas en `admin_users`

## 🎨 Diseño

### Paleta de Colores

```css
--dark: #0b0b0b --dark-lighter: #111111 --cream: #f2e7d5 --red-barber: #b31217
  --gray-barber: #9aa0a6;
```

### Características UI

- ✅ Mobile-first responsive
- ✅ Botones grandes y táctiles
- ✅ Alto contraste
- ✅ Tipografía serif vintage para títulos
- ✅ Animaciones suaves

## 📦 Despliegue

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

1. Conecta tu repositorio
2. Agrega las variables de entorno en Vercel Dashboard
3. Deploy automático en cada push

### Variables de entorno en producción

Asegúrate de configurar en Vercel:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_EMAILS`
- `NEXT_PUBLIC_WHATSAPP_PHONE`
- `NEXT_PUBLIC_APP_URL`

## 🔧 Configuración de Negocio

### Modificar Horarios

Edita en Supabase (tabla `business_hours`) o via panel admin:

```sql
UPDATE business_hours
SET start_time = '09:00', end_time = '13:00'
WHERE day_of_week = 1; -- Lunes
```

### Agregar/Editar Servicios

Via panel admin o directamente en Supabase:

```sql
INSERT INTO services (name, duration_min, price, active)
VALUES ('Nuevo Servicio', 45, 20000, true);
```

### Bloquear Horarios

```sql
INSERT INTO blocked_slots (date, time, reason)
VALUES ('2025-01-30', '15:00', 'Evento especial');
```

## 📞 Integración WhatsApp

Los mensajes se generan automáticamente con:

- Nombre del cliente
- Servicio reservado
- Fecha y hora
- Teléfono de contacto

URL formato: `https://wa.me/56950915048?text=...`

## 🐛 Troubleshooting

### Error: "Invalid JWT"

- Verifica que las credenciales de Supabase sean correctas
- Regenera las keys si es necesario

### No se crean reservas

- Verifica RLS policies en Supabase
- Revisa que los servicios estén activos
- Comprueba que el horario no esté bloqueado

### Slots no se muestran

- Verifica que `business_hours` tenga datos para ese día
- Comprueba que no esté marcado como `is_closed`

## 📝 To-Do / Mejoras Futuras

- [ ] Panel admin completo
- [ ] Notificaciones por email
- [ ] Historial de reservas del cliente
- [ ] Sistema de recordatorios automáticos
- [ ] Estadísticas y reportes
- [ ] Multi-profesional (varios barberos)
- [ ] Sistema de pagos online

## 🤝 Contribuir

Este es un proyecto privado para Peluquería Don Omar.

## 📄 Licencia

© 2025 Peluquería Don Omar. Todos los derechos reservados.

---

**EST. 1970** | Luis Soto – Barber | +56 9 5091 5048
