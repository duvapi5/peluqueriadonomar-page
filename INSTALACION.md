# 🚀 Instalación Rápida - Peluquería Don Omar

## Paso 1: Instalar dependencias

```bash
cd barberia-system
npm install
```

## Paso 2: Configurar Supabase

### A) Crear proyecto

1. Ir a https://supabase.com
2. Crear nuevo proyecto
3. Anotar: **URL** y **anon key**

### B) Ejecutar SQL

En **SQL Editor** de Supabase, ejecutar en orden:

```sql
-- 1. Primero: supabase/schema.sql
-- 2. Segundo: supabase/rls.sql
-- 3. Tercero: supabase/seed.sql
```

## Paso 3: Variables de entorno

Crear `.env.local`:

```bash
cp .env.example .env.local
```

Editar `.env.local` con tus credenciales:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tuproyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key
ADMIN_EMAILS=tu@email.com
NEXT_PUBLIC_WHATSAPP_PHONE=56950915048
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Paso 4: Ejecutar

```bash
npm run dev
```

Abrir: http://localhost:3000

## Paso 5: Crear admin

1. Ir a http://localhost:3000/admin/login
2. (Primera vez) Crear cuenta en Supabase Dashboard:
   - **Authentication** → **Users** → **Add user**
   - Email: tu@email.com
   - Contraseña: (la que quieras)

3. Copiar UUID del usuario creado

4. En **SQL Editor**, ejecutar:

```sql
INSERT INTO admin_users (id, email, is_admin)
VALUES ('tu-uuid-aqui', 'tu@email.com', true);
```

5. Hacer login en http://localhost:3000/admin/login

## ✅ Listo!

- **Web pública:** http://localhost:3000
- **Reservar:** http://localhost:3000/reservar
- **Admin:** http://localhost:3000/admin/hoy

---

## 🐛 Problemas comunes

### "Invalid JWT"

- Verifica que las credenciales de Supabase sean correctas en `.env.local`

### "No hay servicios"

- Ejecuta `supabase/seed.sql` en SQL Editor

### No puedo hacer login como admin

- Verifica que ejecutaste el INSERT en `admin_users` con tu UUID correcto
- Consulta: `SELECT * FROM admin_users;`

---

## 📦 Deploy a producción

```bash
# Opción 1: Vercel
npm install -g vercel
vercel

# Opción 2: Docker
docker build -t barberia-app .
docker run -p 3000:3000 barberia-app
```

No olvides configurar las variables de entorno en tu plataforma de deploy.
