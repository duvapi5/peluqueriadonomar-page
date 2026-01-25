"use client";

import { Appointment } from "@/lib/types";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import WhatsAppButton from "../WhatsAppButton";
import {
  generateAdminConfirmationMessage,
  generateCancellationMessage,
  generateRescheduleMessage,
} from "@/lib/utils";

interface AppointmentCardProps {
  appointment: Appointment;
  onStatusChange: () => void;
}

export default function AppointmentCard({
  appointment,
  onStatusChange,
}: AppointmentCardProps) {
  const dateFormatted = format(
    new Date(appointment.date + "T00:00:00"),
    "EEEE d 'de' MMMM",
    { locale: es },
  );

  async function updateStatus(newStatus: string) {
    try {
      const res = await fetch(`/api/appointments/${appointment.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        onStatusChange();
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  }

  const getStatusBadge = () => {
    switch (appointment.status) {
      case "confirmed":
        return (
          <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
            ✓ Confirmada
          </span>
        );
      case "canceled":
        return (
          <span className="px-3 py-1 bg-red-barber text-white text-xs font-bold rounded-full">
            ✗ Cancelada
          </span>
        );
      case "rescheduled":
        return (
          <span className="px-3 py-1 bg-yellow-600 text-white text-xs font-bold rounded-full">
            ↻ Reprogramar
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 bg-gray-600 text-white text-xs font-bold rounded-full">
            ⏳ Pendiente
          </span>
        );
    }
  };

  const confirmMessage = generateAdminConfirmationMessage(
    appointment.customer_name,
    appointment.service?.name || "",
    dateFormatted,
    appointment.time,
  );

  const cancelMessage = generateCancellationMessage(
    appointment.customer_name,
    appointment.service?.name || "",
    dateFormatted,
    appointment.time,
  );

  const rescheduleMessage = generateRescheduleMessage(
    appointment.customer_name,
    appointment.service?.name || "",
    dateFormatted,
    appointment.time,
  );

  return (
    <div className="card border-l-4 border-red-barber">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-cream">
            {appointment.customer_name}
          </h3>
          <p className="text-gray-barber text-sm">
            {appointment.customer_phone}
          </p>
        </div>
        {getStatusBadge()}
      </div>

      <div className="space-y-2 mb-4">
        <p className="text-cream">
          <strong>💈 Servicio:</strong> {appointment.service?.name}
        </p>
        <p className="text-cream">
          <strong>🕐 Hora:</strong> {appointment.time}
        </p>
        {appointment.notes && (
          <p className="text-gray-barber text-sm">
            <strong>📝 Nota:</strong> {appointment.notes}
          </p>
        )}
      </div>

      {appointment.status === "pending" && (
        <div className="grid grid-cols-1 gap-2">
          <div className="flex gap-2">
            <button
              onClick={() => updateStatus("confirmed")}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              ✓ Confirmar
            </button>
            <WhatsAppButton
              message={confirmMessage}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              <span className="text-xl">💬</span>
            </WhatsAppButton>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => updateStatus("rescheduled")}
              className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              ↻ Reprogramar
            </button>
            <WhatsAppButton
              message={rescheduleMessage}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              <span className="text-xl">💬</span>
            </WhatsAppButton>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => updateStatus("canceled")}
              className="flex-1 bg-red-barber hover:bg-red-hover text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              ✗ Cancelar
            </button>
            <WhatsAppButton
              message={cancelMessage}
              className="bg-red-barber hover:bg-red-hover text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              <span className="text-xl">💬</span>
            </WhatsAppButton>
          </div>
        </div>
      )}

      {appointment.status === "confirmed" && (
        <div className="text-center text-green-600 font-semibold">
          ✓ Ya confirmada
        </div>
      )}

      {appointment.status === "canceled" && (
        <div className="text-center text-red-barber font-semibold">
          ✗ Cancelada
        </div>
      )}
    </div>
  );
}
