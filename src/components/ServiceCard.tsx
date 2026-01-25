"use client";

import { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
  onSelect?: (service: Service) => void;
  selected?: boolean;
}

// Iconos vintage para cada tipo de servicio
const getServiceIcon = (name: string) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('barba') || lowerName.includes('afeitado')) return '🪒';
  if (lowerName.includes('moderno') || lowerName.includes('fade')) return '✨';
  if (lowerName.includes('clásico')) return '✂️';
  return '💈';
};

export default function ServiceCard({
  service,
  onSelect,
  selected,
}: ServiceCardProps) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(service);
    }
  };

  return (
    <div
      onClick={onSelect ? handleClick : undefined}
      className={`group relative bg-gradient-to-b from-dark-lighter to-dark border-2 rounded-xl p-6 transition-all duration-300 overflow-hidden ${
        onSelect ? "cursor-pointer" : ""
      } ${
        selected 
          ? "border-red-barber bg-red-barber/10 shadow-xl shadow-red-barber/20" 
          : "border-cream/10 hover:border-red-barber/50 hover:shadow-lg hover:shadow-red-barber/10 hover:-translate-y-1"
      }`}
    >
      {/* Glow de fondo al hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-barber/5 via-transparent to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Esquina decorativa */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-red-barber/30 group-hover:border-red-barber transition-colors" />
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-blue-900/30 group-hover:border-blue-900 transition-colors" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icono con fondo decorativo */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-gradient-radial from-red-barber/20 to-transparent blur-xl scale-150 group-hover:scale-200 transition-transform" />
          <span className="relative text-4xl filter drop-shadow-lg">{getServiceIcon(service.name)}</span>
        </div>
        
        {/* Nombre del servicio */}
        <h3 className="font-serif text-xl text-cream mb-2 group-hover:text-red-barber transition-colors">
          {service.name}
        </h3>
        
        {/* Línea decorativa */}
        <div className="w-12 h-0.5 bg-gradient-to-r from-red-barber via-cream/50 to-blue-900 mb-3 group-hover:w-20 transition-all duration-300" />
        
        {/* Duración con estilo */}
        <div className="flex items-center gap-2 text-gray-barber text-sm mb-3">
          <span className="text-xs">⏱️</span>
          <span>{service.duration_min} minutos</span>
        </div>
        
        {/* Precio destacado */}
        {service.price && (
          <div className="mt-auto">
            <p className="text-cream font-bold text-2xl group-hover:text-red-barber transition-colors">
              ${service.price.toLocaleString("es-CL")}
            </p>
            <p className="text-gray-barber/50 text-xs mt-1">CLP</p>
          </div>
        )}
        
        {/* Indicador de selección */}
        {selected && (
          <div className="absolute top-3 left-3 w-6 h-6 bg-red-barber rounded-full flex items-center justify-center shadow-lg shadow-red-barber/50">
            <span className="text-cream text-xs">✓</span>
          </div>
        )}
      </div>
    </div>
  );
}
