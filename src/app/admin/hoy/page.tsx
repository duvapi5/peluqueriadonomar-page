"use client";

import { useEffect, useState } from "react";
import { AdminNav } from "@/components/admin/AdminNav";
import AppointmentCard from "@/components/admin/AppointmentCard";
import { Appointment } from "@/lib/types";

export default function AdminHoyPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodayAppointments();
  }, []);

  async function fetchTodayAppointments() {
    setLoading(true);
    try {
      const today = new Date().toISOString().split("T")[0];
      const res = await fetch(`/api/appointments?date=${today}`);
      const data = await res.json();
      setAppointments(data.appointments || []);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  }

  const pendingCount = appointments.filter(
    (a) => a.status === "pending",
  ).length;
  const confirmedCount = appointments.filter(
    (a) => a.status === "confirmed",
  ).length;

  return (
    <div className="min-h-screen bg-dark">
      <AdminNav currentPath="/admin/hoy" />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="font-serif text-3xl text-cream mb-2">
            Reservas de Hoy
          </h2>
          <p className="text-gray-barber">
            {new Date().toLocaleDateString("es-CL", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="card text-center">
            <p className="text-3xl font-bold text-cream">
              {appointments.length}
            </p>
            <p className="text-gray-barber text-sm">Total</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-bold text-yellow-500">{pendingCount}</p>
            <p className="text-gray-barber text-sm">Pendientes</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-bold text-green-500">
              {confirmedCount}
            </p>
            <p className="text-gray-barber text-sm">Confirmadas</p>
          </div>
          <div className="card text-center">
            <button
              onClick={fetchTodayAppointments}
              className="text-2xl"
              title="Actualizar"
            >
              🔄
            </button>
            <p className="text-gray-barber text-sm">Actualizar</p>
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
            <p className="text-cream mb-2">No hay reservas para hoy</p>
            <p className="text-gray-barber text-sm">
              Las reservas aparecerán aquí
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments
              .sort((a, b) => a.time.localeCompare(b.time))
              .map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  onStatusChange={fetchTodayAppointments}
                />
              ))}
          </div>
        )}
      </main>
    </div>
  );
}
