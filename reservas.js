// ============================================
// Sistema de Reservas - Peluquería Don Omar
// ============================================

// Configuración de horarios
const HORARIOS = {
  mañana: [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
  ],
  tarde: [
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ],
};

// Días cerrados (domingos)
const DIAS_CERRADOS = [0]; // 0 = Domingo

// Estado de la reserva
let reservaActual = {
  servicio: "",
  fecha: "",
  hora: "",
  nombre: "",
  telefono: "",
  email: "",
  comentarios: "",
};

// Base de datos simulada de reservas (en producción, esto sería un backend)
let reservasDB = JSON.parse(localStorage.getItem("reservas")) || [];

// ============================================
// Inicialización
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  inicializarSistemaReservas();
});

function inicializarSistemaReservas() {
  const fechaInput = document.getElementById("fecha");
  const bookingForm = document.getElementById("bookingForm");

  if (!fechaInput || !bookingForm) return;

  // Establecer fecha mínima (hoy)
  const hoy = new Date();
  fechaInput.min = formatDate(hoy);

  // Establecer fecha máxima (3 meses desde hoy)
  const maxFecha = new Date();
  maxFecha.setMonth(maxFecha.getMonth() + 3);
  fechaInput.max = formatDate(maxFecha);

  // Event Listeners
  fechaInput.addEventListener("change", generarHorariosDisponibles);

  // Listener para selección de servicio
  document.querySelectorAll('input[name="servicio"]').forEach((radio) => {
    radio.addEventListener("change", actualizarResumen);
  });

  // Submit del formulario
  bookingForm.addEventListener("submit", procesarReserva);

  // Inputs de datos personales
  ["nombre", "telefono", "email", "comentarios"].forEach((field) => {
    const input = document.getElementById(field);
    if (input) {
      input.addEventListener("blur", actualizarResumen);
    }
  });
}

// ============================================
// Generación de Horarios Disponibles
// ============================================
function generarHorariosDisponibles() {
  const fechaInput = document.getElementById("fecha");
  const timeSlotsContainer = document.getElementById("timeSlots");

  if (!fechaInput.value) return;

  const fechaSeleccionada = new Date(fechaInput.value + "T00:00:00");
  const diaSemana = fechaSeleccionada.getDay();

  // Verificar si es domingo
  if (DIAS_CERRADOS.includes(diaSemana)) {
    timeSlotsContainer.innerHTML =
      '<p class="select-date-first">❌ Cerrado los domingos</p>';
    return;
  }

  timeSlotsContainer.innerHTML = "";

  // Crear sección de mañana
  const mañanaSection = document.createElement("div");
  mañanaSection.innerHTML =
    '<h4 style="grid-column: 1/-1; margin: 1rem 0 0.5rem; font-family: var(--font-display); letter-spacing: 1px;">Mañana</h4>';
  timeSlotsContainer.appendChild(mañanaSection);

  // Generar slots de mañana
  HORARIOS.mañana.forEach((hora) => {
    const slot = crearSlotHorario(hora, fechaInput.value);
    timeSlotsContainer.appendChild(slot);
  });

  // Crear sección de tarde
  const tardeSection = document.createElement("div");
  tardeSection.innerHTML =
    '<h4 style="grid-column: 1/-1; margin: 1rem 0 0.5rem; font-family: var(--font-display); letter-spacing: 1px;">Tarde</h4>';
  timeSlotsContainer.appendChild(tardeSection);

  // Generar slots de tarde
  HORARIOS.tarde.forEach((hora) => {
    const slot = crearSlotHorario(hora, fechaInput.value);
    timeSlotsContainer.appendChild(slot);
  });

  actualizarResumen();
}

function crearSlotHorario(hora, fecha) {
  const slot = document.createElement("div");
  slot.className = "time-slot";
  slot.textContent = hora;
  slot.dataset.hora = hora;

  // Verificar si ya está reservado
  if (estaReservado(fecha, hora)) {
    slot.classList.add("disabled");
    slot.title = "No disponible";
  } else {
    slot.addEventListener("click", () => seleccionarHorario(slot));
  }

  return slot;
}

function seleccionarHorario(slotElement) {
  if (slotElement.classList.contains("disabled")) return;

  // Remover selección previa
  document.querySelectorAll(".time-slot").forEach((slot) => {
    slot.classList.remove("selected");
  });

  // Seleccionar nuevo horario
  slotElement.classList.add("selected");
  reservaActual.hora = slotElement.dataset.hora;

  actualizarResumen();
}

// ============================================
// Verificar disponibilidad
// ============================================
function estaReservado(fecha, hora) {
  return reservasDB.some(
    (reserva) =>
      reserva.fecha === fecha &&
      reserva.hora === hora &&
      reserva.estado !== "cancelada",
  );
}

// ============================================
// Actualizar Resumen
// ============================================
function actualizarResumen() {
  const summaryDiv = document.getElementById("bookingSummary");
  const summaryContent = document.getElementById("summaryContent");

  if (!summaryDiv || !summaryContent) return;

  // Obtener datos del formulario
  const servicioSeleccionado = document.querySelector(
    'input[name="servicio"]:checked',
  );
  const fechaInput = document.getElementById("fecha");
  const nombreInput = document.getElementById("nombre");
  const telefonoInput = document.getElementById("telefono");
  const horaSeleccionada = document.querySelector(".time-slot.selected");

  // Actualizar objeto de reserva
  if (servicioSeleccionado) reservaActual.servicio = servicioSeleccionado.value;
  if (fechaInput) reservaActual.fecha = fechaInput.value;
  if (nombreInput) reservaActual.nombre = nombreInput.value;
  if (telefonoInput) reservaActual.telefono = telefonoInput.value;
  if (horaSeleccionada) reservaActual.hora = horaSeleccionada.dataset.hora;

  // Mostrar resumen solo si hay datos mínimos
  if (reservaActual.servicio || reservaActual.fecha || reservaActual.hora) {
    summaryDiv.style.display = "block";

    let html = "";

    if (reservaActual.servicio) {
      const servicioTexto = obtenerNombreServicio(reservaActual.servicio);
      html += `<p><strong>Servicio:</strong> ${servicioTexto}</p>`;
    }

    if (reservaActual.fecha) {
      const fechaFormateada = formatearFecha(reservaActual.fecha);
      html += `<p><strong>Fecha:</strong> ${fechaFormateada}</p>`;
    }

    if (reservaActual.hora) {
      html += `<p><strong>Hora:</strong> ${reservaActual.hora}</p>`;
    }

    if (reservaActual.nombre) {
      html += `<p><strong>Nombre:</strong> ${reservaActual.nombre}</p>`;
    }

    if (reservaActual.telefono) {
      html += `<p><strong>Teléfono:</strong> ${reservaActual.telefono}</p>`;
    }

    summaryContent.innerHTML = html;
  } else {
    summaryDiv.style.display = "none";
  }
}

// ============================================
// Procesar Reserva
// ============================================
function procesarReserva(e) {
  e.preventDefault();

  // Validar que todos los campos requeridos estén completos
  if (!validarFormulario()) {
    return;
  }

  // Actualizar datos finales
  reservaActual.email = document.getElementById("email").value;
  reservaActual.comentarios = document.getElementById("comentarios").value;
  reservaActual.estado = "pendiente";
  reservaActual.id = Date.now();
  reservaActual.fechaCreacion = new Date().toISOString();

  // Guardar en "base de datos"
  reservasDB.push({ ...reservaActual });
  localStorage.setItem("reservas", JSON.stringify(reservasDB));

  // Mostrar modal de confirmación
  mostrarConfirmacion();

  // Limpiar formulario
  setTimeout(() => {
    resetForm();
  }, 500);
}

function validarFormulario() {
  const errores = [];

  if (!reservaActual.servicio) {
    errores.push("Debes seleccionar un servicio");
  }

  if (!reservaActual.fecha) {
    errores.push("Debes seleccionar una fecha");
  }

  if (!reservaActual.hora) {
    errores.push("Debes seleccionar un horario");
  }

  const nombreInput = document.getElementById("nombre");
  if (!nombreInput.value.trim()) {
    errores.push("Debes ingresar tu nombre");
  }

  const telefonoInput = document.getElementById("telefono");
  if (!telefonoInput.value.trim()) {
    errores.push("Debes ingresar tu teléfono");
  }

  if (errores.length > 0) {
    alert(
      "⚠️ Por favor completa los siguientes campos:\n\n" + errores.join("\n"),
    );
    return false;
  }

  return true;
}

// ============================================
// Modal de Confirmación
// ============================================
function mostrarConfirmacion() {
  const modal = document.getElementById("confirmationModal");
  const modalSummary = document.getElementById("modalSummary");

  if (!modal || !modalSummary) return;

  const servicioTexto = obtenerNombreServicio(reservaActual.servicio);
  const fechaFormateada = formatearFecha(reservaActual.fecha);

  modalSummary.innerHTML = `
        <p><strong>📋 Servicio:</strong> ${servicioTexto}</p>
        <p><strong>📅 Fecha:</strong> ${fechaFormateada}</p>
        <p><strong>🕐 Hora:</strong> ${reservaActual.hora}</p>
        <p><strong>👤 Nombre:</strong> ${reservaActual.nombre}</p>
        <p><strong>📞 Teléfono:</strong> ${reservaActual.telefono}</p>
    `;

  modal.classList.add("active");

  // Enviar mensaje de WhatsApp (simular)
  enviarWhatsApp();
}

function closeModal() {
  const modal = document.getElementById("confirmationModal");
  if (modal) {
    modal.classList.remove("active");
  }
}

// Cerrar modal al hacer click fuera
window.addEventListener("click", (e) => {
  const modal = document.getElementById("confirmationModal");
  if (e.target === modal) {
    closeModal();
  }
});

// ============================================
// Enviar WhatsApp
// ============================================
function enviarWhatsApp() {
  const servicioTexto = obtenerNombreServicio(reservaActual.servicio);
  const fechaFormateada = formatearFecha(reservaActual.fecha);

  const mensaje =
    `¡Hola! Quisiera confirmar mi cita:\n\n` +
    `📋 Servicio: ${servicioTexto}\n` +
    `📅 Fecha: ${fechaFormateada}\n` +
    `🕐 Hora: ${reservaActual.hora}\n` +
    `👤 Nombre: ${reservaActual.nombre}\n` +
    `📞 Teléfono: ${reservaActual.telefono}`;

  const mensajeCodificado = encodeURIComponent(mensaje);
  const numeroWhatsApp = "56950915048"; // Sin el +
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

  // Abrir WhatsApp (descomentar en producción)
  // window.open(urlWhatsApp, '_blank');

  console.log("Mensaje WhatsApp:", mensaje);
  console.log("URL:", urlWhatsApp);
}

// ============================================
// Funciones Auxiliares
// ============================================
function resetForm() {
  const form = document.getElementById("bookingForm");
  if (form) {
    form.reset();
  }

  // Limpiar selección de horarios
  document.querySelectorAll(".time-slot").forEach((slot) => {
    slot.classList.remove("selected");
  });

  // Limpiar objeto de reserva
  reservaActual = {
    servicio: "",
    fecha: "",
    hora: "",
    nombre: "",
    telefono: "",
    email: "",
    comentarios: "",
  };

  // Ocultar resumen
  const summaryDiv = document.getElementById("bookingSummary");
  if (summaryDiv) {
    summaryDiv.style.display = "none";
  }

  // Limpiar horarios
  const timeSlotsContainer = document.getElementById("timeSlots");
  if (timeSlotsContainer) {
    timeSlotsContainer.innerHTML =
      '<p class="select-date-first">Selecciona primero una fecha</p>';
  }
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatearFecha(fechaStr) {
  const fecha = new Date(fechaStr + "T00:00:00");
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return fecha.toLocaleDateString("es-CL", opciones);
}

function obtenerNombreServicio(valor) {
  const servicios = {
    "corte-clasico": "💈 Corte Clásico",
    "corte-moderno": "✂️ Corte Moderno",
    afeitado: "🪒 Afeitado",
    barba: "👨 Barba",
    "corte-infantil": "👦 Corte Infantil",
    premium: "⭐ Servicio Premium",
  };
  return servicios[valor] || valor;
}

// ============================================
// Vista de Administración (Opcional)
// ============================================
function mostrarAgendaDelDia() {
  const adminSection = document.getElementById("adminSection");
  const appointmentsList = document.getElementById("appointmentsList");

  if (!adminSection || !appointmentsList) return;

  const hoy = formatDate(new Date());
  const citasHoy = reservasDB.filter(
    (reserva) => reserva.fecha === hoy && reserva.estado !== "cancelada",
  );

  if (citasHoy.length === 0) {
    appointmentsList.innerHTML =
      '<p style="text-align: center; color: #666;">No hay citas programadas para hoy</p>';
  } else {
    appointmentsList.innerHTML = citasHoy
      .map(
        (cita) => `
            <div class="appointment-item">
                <div class="appointment-info">
                    <h4>${cita.nombre}</h4>
                    <p><strong>Servicio:</strong> ${obtenerNombreServicio(cita.servicio)}</p>
                    <p><strong>Hora:</strong> ${cita.hora}</p>
                    <p><strong>Teléfono:</strong> ${cita.telefono}</p>
                </div>
                <div class="appointment-actions">
                    <button class="btn-confirm" onclick="confirmarCita(${cita.id})">✓ Confirmar</button>
                    <button class="btn-cancel" onclick="cancelarCita(${cita.id})">✗ Cancelar</button>
                </div>
            </div>
        `,
      )
      .join("");
  }

  adminSection.style.display = "block";
}

function confirmarCita(id) {
  const cita = reservasDB.find((r) => r.id === id);
  if (cita) {
    cita.estado = "confirmada";
    localStorage.setItem("reservas", JSON.stringify(reservasDB));
    mostrarAgendaDelDia();
    alert("✓ Cita confirmada");
  }
}

function cancelarCita(id) {
  if (confirm("¿Estás seguro de cancelar esta cita?")) {
    const cita = reservasDB.find((r) => r.id === id);
    if (cita) {
      cita.estado = "cancelada";
      localStorage.setItem("reservas", JSON.stringify(reservasDB));
      mostrarAgendaDelDia();
      alert("✗ Cita cancelada");
    }
  }
}

// Para activar la vista admin, agrega ?admin=true en la URL
if (window.location.search.includes("admin=true")) {
  mostrarAgendaDelDia();
}
