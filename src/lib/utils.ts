/**
 * Genera URL de WhatsApp con mensaje precargado
 */
export function generateWhatsAppURL(phone: string, message: string): string {
  // Limpiar el teléfono (remover espacios, guiones, +)
  const cleanPhone = phone.replace(/[\s\-+]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Genera mensaje de confirmación de reserva para WhatsApp
 */
export function generateBookingConfirmationMessage(
  customerName: string,
  service: string,
  date: string,
  time: string,
  customerPhone: string
): string {
  return `¡Hola! Quisiera confirmar mi cita:

👤 Nombre: ${customerName}
💈 Servicio: ${service}
📅 Fecha: ${date}
🕐 Hora: ${time}
📞 Teléfono: ${customerPhone}

Gracias!`;
}

/**
 * Genera mensaje de confirmación del admin al cliente
 */
export function generateAdminConfirmationMessage(
  customerName: string,
  service: string,
  date: string,
  time: string
): string {
  return `Hola ${customerName}! ✅

Tu reserva ha sido CONFIRMADA:

💈 Servicio: ${service}
📅 Fecha: ${date}
🕐 Hora: ${time}

📍 Av. Libertad #161, Local C, Rosario

Te esperamos!
Luis Soto - Barber
Peluquería Don Omar`;
}

/**
 * Genera mensaje de cancelación
 */
export function generateCancellationMessage(
  customerName: string,
  service: string,
  date: string,
  time: string
): string {
  return `Hola ${customerName},

Lamentablemente debemos CANCELAR tu reserva:

💈 Servicio: ${service}
📅 Fecha: ${date}
🕐 Hora: ${time}

Por favor contacta con nosotros para reprogramar.

Disculpa las molestias.
Peluquería Don Omar`;
}

/**
 * Genera mensaje para reprogramar
 */
export function generateRescheduleMessage(
  customerName: string,
  service: string,
  date: string,
  time: string
): string {
  return `Hola ${customerName},

Necesitamos REPROGRAMAR tu reserva:

💈 Servicio: ${service}
📅 Fecha original: ${date}
🕐 Hora original: ${time}

Por favor contacta con nosotros para agendar nueva fecha.

Gracias por tu comprensión.
Peluquería Don Omar`;
}

/**
 * Valida formato de teléfono chileno
 */
export function validatePhone(phone: string): boolean {
  // Acepta +56... o dígitos, largo 9-15
  const cleanPhone = phone.replace(/[\s\-+]/g, '');
  return /^\d{9,15}$/.test(cleanPhone);
}

/**
 * Formatea teléfono para mostrar
 */
export function formatPhone(phone: string): string {
  const clean = phone.replace(/[\s\-+]/g, '');
  if (clean.startsWith('56') && clean.length >= 11) {
    return `+56 ${clean.slice(2, 3)} ${clean.slice(3, 7)} ${clean.slice(7)}`;
  }
  if (clean.length === 9) {
    return `+56 9 ${clean.slice(0, 4)} ${clean.slice(4)}`;
  }
  return phone;
}
