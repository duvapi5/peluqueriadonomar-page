"use client";

import { useEffect, useState } from "react";
import { AdminNav } from "@/components/admin/AdminNav";
import AppointmentCard from "@/components/admin/AppointmentCard";
import { Appointment } from "@/lib/types";

export default function AdminReservasPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    // Inicializar con hoy
    const today = new Date().toISOString().split("T")[0];
    setSelectedDate(today);
  }, []);

  useEffect(() => {
    if (selectedDate) {
      fetchAppointments();
    }
  }, [selectedDate]);

  async function fetchAppointments() {
    if (!selectedDate) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/appointments?date=${selectedDate}`);
      const data = await res.json();
      setAppointments(data.appointments || []);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-dark">
      <AdminNav currentPath="/admin/reservas" />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="font-serif text-3xl text-cream mb-4">
            Calendario de Reservas
          </h2>

          {/* Date Picker */}
          <div className="card max-w-md">
            <label className="block text-cream font-semibold mb-2">
              Seleccionar fecha:
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={today}
              className="input-field"
            />
          </div>
        </div>

        {/* Appointments List */}
        {loading ? (
          <div className="text-center py-12 text-gray-barber">
            Cargando reservas...
          </div>
        ) : appointments.length === 0 ? (
          <div className="card text-center py-12">
            <p className="text-4xl mb-3">📅</p>
            <p className="text-cream mb-2">No hay reservas para esta fecha</p>
            <p className="text-gray-barber text-sm">
              {selectedDate &&
                new Date(selectedDate + "T00:00:00").toLocaleDateString(
                  "es-CL",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                )}
            </p>
          </div>
        ) : (
          <>
            <div className="mb-4 text-gray-barber">
              <p>
                {appointments.length} reserva
                {appointments.length !== 1 ? "s" : ""} para{" "}
                {new Date(selectedDate + "T00:00:00").toLocaleDateString(
                  "es-CL",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                )}
              </p>
            </div>
            <div className="space-y-4">
              {appointments
                .sort((a, b) => a.time.localeCompare(b.time))
                .map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                    onStatusChange={fetchAppointments}
                  />
                ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
