import { TimeSlot } from "@/lib/types";

interface TimeSlotPickerProps {
  slots: TimeSlot[];
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
}

export default function TimeSlotPicker({
  slots,
  selectedTime,
  onSelectTime,
}: TimeSlotPickerProps) {
  if (slots.length === 0) {
    return (
      <div className="text-center py-8 text-gray-barber">
        No hay horarios disponibles para este día
      </div>
    );
  }

  // Separar slots de mañana y tarde
  const morningSlots = slots.filter((slot) => {
    const hour = parseInt(slot.time.split(":")[0]);
    return hour < 14;
  });

  const afternoonSlots = slots.filter((slot) => {
    const hour = parseInt(slot.time.split(":")[0]);
    return hour >= 14;
  });

  const renderSlots = (slotList: TimeSlot[], label: string) => {
    if (slotList.length === 0) return null;

    return (
      <div className="mb-6">
        <h4 className="text-cream font-semibold mb-3">{label}</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {slotList.map((slot) => (
            <button
              key={slot.time}
              onClick={() => slot.available && onSelectTime(slot.time)}
              disabled={!slot.available}
              className={`py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                slot.time === selectedTime
                  ? "bg-red-barber text-cream"
                  : slot.available
                    ? "bg-dark-lighter text-cream border-2 border-dark-border hover:border-red-barber"
                    : "bg-dark-border text-gray-barber/50 cursor-not-allowed"
              }`}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderSlots(morningSlots, "🌅 Mañana")}
      {renderSlots(afternoonSlots, "🌆 Tarde")}
    </div>
  );
}
