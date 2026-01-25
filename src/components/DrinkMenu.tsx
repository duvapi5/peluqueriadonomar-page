"use client";

import { useState } from "react";

export default function DrinkMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const drinks = [
    { name: "Lata Bebida", price: 1000 },
    { name: "Lata Energética", price: 2000 },
    { name: "Botella de Agua", price: 1000 },
  ];

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group bg-dark/70 backdrop-blur-sm text-cream/80 p-2.5 sm:p-3 rounded-lg shadow-md shadow-black/20 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-cream/10 hover:border-cream/20"
        aria-label="Ver lista de bebidas"
      >
        <div className="relative">
          {/* Efecto pulse blanco de fondo */}
          <div className="absolute inset-0 rounded-lg bg-white/20 animate-pulse"></div>
          
          {/* Glow blanco animado */}
          <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-pulse"></div>
          
          {/* Icono de refrigerador SVG negro */}
          <svg 
            className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cuerpo del refrigerador */}
            <rect x="6" y="3" width="12" height="18" rx="1" fill="#1a1a1a" stroke="#888" strokeWidth="1.2"/>
            {/* División */}
            <line x1="6" y1="9" x2="18" y2="9" stroke="#888" strokeWidth="1.2"/>
            {/* Manijas */}
            <line x1="16" y1="6" x2="16" y2="7" stroke="#888" strokeWidth="1.2" strokeLinecap="round"/>
            <line x1="16" y1="12" x2="16" y2="13" stroke="#888" strokeWidth="1.2" strokeLinecap="round"/>
            {/* Detalles de estantes */}
            <line x1="8" y1="6" x2="14" y2="6" stroke="#666" strokeWidth="0.5" opacity="0.5"/>
            <line x1="8" y1="15" x2="14" y2="15" stroke="#666" strokeWidth="0.5" opacity="0.5"/>
            <line x1="8" y1="17" x2="14" y2="17" stroke="#666" strokeWidth="0.5" opacity="0.5"/>
          </svg>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-gradient-to-br from-dark-lighter via-dark to-dark-lighter border-4 border-cream/30 rounded-xl max-w-md w-full shadow-2xl shadow-red-barber/30 relative overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decoración superior vintage */}
            <div className="h-2 w-full bg-gradient-to-r from-red-barber via-cream via-50% to-blue-900" />

            {/* Glow de fondo */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-red-barber/10 rounded-full blur-3xl" />

            {/* Contenido */}
            <div className="relative z-10 p-6 sm:p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-transparent to-cream/30 rounded-full" />
                  {/* Icono de refrigerador */}
                  <svg 
                    className="w-8 h-8 sm:w-10 sm:h-10" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="6" y="3" width="12" height="18" rx="1" fill="#1a1a1a" stroke="#888" strokeWidth="1.2"/>
                    <line x1="6" y1="9" x2="18" y2="9" stroke="#888" strokeWidth="1.2"/>
                    <line x1="16" y1="6" x2="16" y2="7" stroke="#888" strokeWidth="1.2" strokeLinecap="round"/>
                    <line x1="16" y1="12" x2="16" y2="13" stroke="#888" strokeWidth="1.2" strokeLinecap="round"/>
                    <line x1="8" y1="6" x2="14" y2="6" stroke="#666" strokeWidth="0.5" opacity="0.5"/>
                    <line x1="8" y1="15" x2="14" y2="15" stroke="#666" strokeWidth="0.5" opacity="0.5"/>
                  </svg>
                  <div className="w-8 sm:w-12 h-1 bg-gradient-to-l from-transparent to-cream/30 rounded-full" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-cream mb-3">
                  Bebidas Disponibles
                </h3>
                
                <p className="text-cream/70 text-sm mb-4 italic">
                  También te puedes tomar algo para el calor
                </p>

                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-0.5 bg-cream/30 rounded-full" />
                  <div className="w-2 h-2 bg-cream rounded-full" />
                  <div className="w-8 h-0.5 bg-cream/30 rounded-full" />
                </div>
              </div>

              {/* Lista de bebidas */}
              <div className="space-y-3 sm:space-y-4 mb-6">
                {drinks.map((drink, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-5 bg-dark/50 backdrop-blur-sm border border-cream/10 rounded-lg hover:border-red-barber/50 transition-all group"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform">
                        {drink.name.includes("Energética") ? "⚡" : drink.name.includes("Agua") ? "💧" : "🥤"}
                      </span>
                      <span className="text-cream font-medium text-base sm:text-lg">
                        {drink.name}
                      </span>
                    </div>
                    <span className="text-cream/90 font-bold text-lg sm:text-xl">
                      ${drink.price.toLocaleString("es-CL")}
                    </span>
                  </div>
                ))}
              </div>

              {/* Separador decorativo */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
                <span className="text-xl">💈</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
              </div>

              {/* Botón cerrar */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-transparent border-2 border-cream/30 hover:border-cream hover:bg-cream/5 text-cream font-semibold py-3 rounded-lg transition-all"
              >
                Cerrar
              </button>
            </div>

            {/* Decoración inferior */}
            <div className="h-2 w-full bg-gradient-to-r from-blue-900 via-cream via-50% to-red-barber" />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
