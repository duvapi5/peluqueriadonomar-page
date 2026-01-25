"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TimeSlotPicker from "@/components/TimeSlotPicker";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Service, TimeSlot } from "@/lib/types";
import { validatePhone, generateBookingConfirmationMessage } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function ReservarPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Datos del formulario
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [notes, setNotes] = useState("");

  // Estado de confirmación
  const [confirmed, setConfirmed] = useState(false);
  const [appointmentData, setAppointmentData] = useState<any>(null);

  // Cargar servicios al montar
  useEffect(() => {
    fetchServices();
  }, []);

  // Cargar slots cuando cambia fecha o servicio
  useEffect(() => {
    if (selectedDate && selectedService) {
      fetchAvailability();
    }
  }, [selectedDate, selectedService]);

  async function fetchServices() {
    try {
      const res = await fetch("/api/services");
      const data = await res.json();
      setServices(data.services || []);
    } catch (err) {
      console.error("Error fetching services:", err);
    }
  }

  async function fetchAvailability() {
    if (!selectedDate || !selectedService) return;

    setLoading(true);
    setSelectedTime(null);
    try {
      const res = await fetch(
        `/api/availability?date=${selectedDate}&serviceId=${selectedService.id}`,
      );
      const data = await res.json();
      setSlots(data.slots || []);
    } catch (err) {
      console.error("Error fetching availability:", err);
      setSlots([]);
    } finally {
      setLoading(false);
    }
  }

  function handleServiceSelect(service: Service) {
    setSelectedService(service);
    setStep(2);
  }

  function handleDateSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedDate(e.target.value);
  }

  function handleTimeSelect(time: string) {
    setSelectedTime(time);
    setStep(3);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Validaciones
    if (!customerName.trim()) {
      setError("Por favor ingresa tu nombre");
      return;
    }

    if (!validatePhone(customerPhone)) {
      setError("Formato de teléfono inválido (ej: +56 9 1234 5678)");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: selectedService!.id,
          date: selectedDate,
          time: selectedTime,
          customer_name: customerName,
          customer_phone: customerPhone,
          notes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error al crear la reserva");
        return;
      }

      setAppointmentData(data.appointment);
      setConfirmed(true);
      setStep(4);
    } catch (err) {
      console.error("Error creating appointment:", err);
      setError("Error de conexión. Por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setStep(1);
    setSelectedService(null);
    setSelectedDate("");
    setSelectedTime(null);
    setCustomerName("");
    setCustomerPhone("");
    setNotes("");
    setError(null);
    setConfirmed(false);
    setAppointmentData(null);
  }

  // Obtener fecha mínima (hoy)
  const today = new Date().toISOString().split("T")[0];

  // Obtener fecha máxima (3 meses desde hoy)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  // Formato de fecha legible
  const formatDateReadable = (dateStr: string) => {
    try {
      return format(new Date(dateStr + "T00:00:00"), "EEEE d 'de' MMMM", {
        locale: es,
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl md:text-4xl text-cream mb-3">
              Reservar Hora
            </h1>
            <div className="w-20 h-1 bg-red-barber mx-auto mb-4" />
            <p className="text-gray-barber">Completa en 4 simples pasos</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= num
                        ? "bg-red-barber text-cream"
                        : "bg-dark-border text-gray-barber"
                    }`}
                  >
                    {num}
                  </div>
                  {num < 4 && <div className="w-8 h-0.5 bg-dark-border" />}
                </div>
              ))}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-barber/20 border border-red-barber rounded-lg text-cream">
              ⚠️ {error}
            </div>
          )}

          {/* Step 1: Seleccionar Servicio */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-cream text-center mb-6">
                1️⃣ Selecciona tu servicio
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                  >
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Seleccionar Fecha y Hora */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-cream text-center mb-6">
                2️⃣ Selecciona fecha y hora
              </h2>

              {/* Servicio seleccionado */}
              <div className="card bg-red-barber/10 border-red-barber">
                <p className="text-sm text-gray-barber mb-1">
                  Servicio seleccionado:
                </p>
                <p className="text-cream font-semibold">
                  {selectedService?.name}
                </p>
              </div>

              {/* Selector de fecha */}
              <div>
                <label className="block text-cream font-semibold mb-2">
                  Fecha:
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleDateSelect}
                  min={today}
                  max={maxDateStr}
                  className="input-field text-lg"
                  required
                />
              </div>

              {/* Slots disponibles */}
              {selectedDate && (
                <div>
                  <label className="block text-cream font-semibold mb-4">
                    Horarios disponibles - {formatDateReadable(selectedDate)}:
                  </label>
                  {loading ? (
                    <div className="text-center py-8 text-gray-barber">
                      Cargando horarios...
                    </div>
                  ) : (
                    <TimeSlotPicker
                      slots={slots}
                      selectedTime={selectedTime}
                      onSelectTime={handleTimeSelect}
                    />
                  )}
                </div>
              )}

              <button onClick={() => setStep(1)} className="btn-secondary">
                ← Cambiar servicio
              </button>
            </div>
          )}

          {/* Step 3: Datos del Cliente */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="font-serif text-2xl text-cream text-center mb-6">
                3️⃣ Tus datos
              </h2>

              {/* Resumen */}
              <div className="card bg-red-barber/10 border-red-barber">
                <p className="text-cream font-semibold mb-2">
                  Resumen de tu reserva:
                </p>
                <p className="text-gray-barber">💈 {selectedService?.name}</p>
                <p className="text-gray-barber">
                  📅 {formatDateReadable(selectedDate)}
                </p>
                <p className="text-gray-barber">🕐 {selectedTime}</p>
              </div>

              {/* Formulario */}
              <div>
                <label className="block text-cream font-semibold mb-2">
                  Nombre completo:
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="input-field"
                  placeholder="Juan Pérez"
                  required
                />
              </div>

              <div>
                <label className="block text-cream font-semibold mb-2">
                  Teléfono / WhatsApp:
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="input-field"
                  placeholder="+56 9 1234 5678"
                  required
                />
              </div>

              <div>
                <label className="block text-cream font-semibold mb-2">
                  Comentarios (opcional):
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="input-field"
                  rows={3}
                  placeholder="Alguna preferencia especial..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-secondary flex-1"
                  disabled={loading}
                >
                  ← Atrás
                </button>
                <button
                  type="submit"
                  className="btn-primary flex-1"
                  disabled={loading}
                >
                  {loading ? "Procesando..." : "Confirmar Reserva"}
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Confirmación */}
          {step === 4 && confirmed && appointmentData && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="font-serif text-3xl text-cream mb-3">
                  ¡Reserva Confirmada!
                </h2>
                <p className="text-gray-barber">
                  Tu hora ha sido agendada exitosamente
                </p>
              </div>

              {/* Detalles */}
              <div className="card space-y-3">
                <p className="text-cream">
                  <strong>👤 Nombre:</strong> {appointmentData.customer_name}
                </p>
                <p className="text-cream">
                  <strong>💈 Servicio:</strong> {appointmentData.service?.name}
                </p>
                <p className="text-cream">
                  <strong>📅 Fecha:</strong>{" "}
                  {formatDateReadable(appointmentData.date)}
                </p>
                <p className="text-cream">
                  <strong>🕐 Hora:</strong> {appointmentData.time}
                </p>
                <p className="text-cream">
                  <strong>📞 Teléfono:</strong> {appointmentData.customer_phone}
                </p>
              </div>

              {/* WhatsApp CTA */}
              <div className="card bg-red-barber/10 border-red-barber text-center">
                <p className="text-cream mb-4">
                  Te enviaremos la confirmación por WhatsApp
                </p>
                <WhatsAppButton
                  message={generateBookingConfirmationMessage(
                    appointmentData.customer_name,
                    appointmentData.service?.name || "",
                    formatDateReadable(appointmentData.date),
                    appointmentData.time,
                    appointmentData.customer_phone,
                  )}
                  className="btn-primary w-full"
                >
                  Enviar Confirmación por WhatsApp
                </WhatsAppButton>
              </div>

              {/* Ubicación */}
              <div className="card text-center">
                <p className="text-cream mb-2">
                  <strong>📍 Nos vemos en:</strong>
                </p>
                <p className="text-gray-barber">Av. Libertad #161, Local C</p>
                <p className="text-gray-barber">Rosario</p>
              </div>

              <div className="flex gap-3">
                <button onClick={resetForm} className="btn-secondary flex-1">
                  Nueva Reserva
                </button>
                <button
                  onClick={() => router.push("/")}
                  className="btn-primary flex-1"
                >
                  Ir al Inicio
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
