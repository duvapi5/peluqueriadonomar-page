# 💈 Peluquería Don Omar - Sistema de Reservas

**Sistema profesional de gestión de reservas para barbería/peluquería**

---

## 🚀 Quick Start

```bash
# 1. Instalar
cd barberia-system
npm install

# 2. Configurar Supabase (ver INSTALACION.md)
# - Crear proyecto
# - Ejecutar SQL (schema → rls → seed)
# - Copiar credenciales

# 3. Variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales

# 4. Ejecutar
npm run dev
```

**Ver en:** http://localhost:3000

---

## 📚 Documentación

- **[README.md](README.md)** - Documentación completa del proyecto
- **[INSTALACION.md](INSTALACION.md)** - Guía paso a paso de instalación
- **[RESUMEN.md](RESUMEN.md)** - Resumen ejecutivo y arquitectura
- **[COMANDOS.md](COMANDOS.md)** - Comandos útiles para desarrollo

---

## ✨ Características Principales

### Para Clientes

- ✅ Reserva tu hora en 1 minuto (4 pasos simples)
- ✅ Selección inteligente de horarios disponibles
- ✅ Confirmación automática por WhatsApp
- ✅ Diseño mobile-first ultra simple

### Para Admin

- ✅ Panel de control desde el celular
- ✅ Vista del día con todas las reservas
- ✅ Acciones rápidas (confirmar/cancelar/reprogramar)
- ✅ Mensajes WhatsApp precargados
- ✅ Calendario filtrable

---

## 🛠️ Stack Tecnológico

- **Frontend:** Next.js 15 + TypeScript + Tailwind CSS
- **Backend:** Next.js API Routes + Server Actions
- **Database:** Supabase (PostgreSQL + RLS)
- **Auth:** Supabase Auth
- **Deploy:** Vercel-ready

---

## 📱 URLs del Sistema

| Función     | URL            |
| ----------- | -------------- |
| Home        | `/`            |
| Reservar    | `/reservar`    |
| Servicios   | `/servicios`   |
| Contacto    | `/contacto`    |
| Admin Login | `/admin/login` |
| Admin Panel | `/admin/hoy`   |

---

## 🎨 Diseño

Diseño fiel al branding de **Peluquería Don Omar**:

- Paleta oscura vintage (negro + rojo #b31217 + crema #f2e7d5)
- Estética retro años 70
- Tipografía serif elegante
- Mobile-first responsive
- Botones grandes y táctiles
- Alto contraste para accesibilidad

---

## 📊 Base de Datos

5 tablas principales:

- `services` - Servicios ofrecidos
- `appointments` - Reservas de clientes
- `business_hours` - Horarios de atención
- `blocked_slots` - Bloqueos específicos
- `admin_users` - Administradores

Con RLS habilitado para seguridad máxima.

---

## 🔐 Seguridad

- ✅ Row Level Security (RLS) en todas las tablas
- ✅ Autenticación Supabase
- ✅ Validación de inputs
- ✅ Prevención de doble reserva
- ✅ Políticas granulares (público vs admin)

---

## 🚢 Deploy a Producción

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Variables requeridas

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_EMAILS`
- `NEXT_PUBLIC_WHATSAPP_PHONE`
- `NEXT_PUBLIC_APP_URL`

---

## 📞 Soporte

Este sistema fue desarrollado específicamente para:

**Peluquería Don Omar**  
Luis Soto – Barber  
+56 9 5091 5048  
Av. Libertad #161, Local C, Rosario  
EST. 1970

---

## 📄 Licencia

© 2025 Peluquería Don Omar. Todos los derechos reservados.

---

**Ready to launch! 🚀**
