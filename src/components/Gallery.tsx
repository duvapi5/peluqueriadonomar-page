"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const images = [
    {
      src: "/fotos/donomar.jpeg",
      alt: "Retrato de Don Omar en la barbería",
      title: "Don Omar",
    },
    {
      src: "/fotos/donluis.png",
      alt: "Retrato de Don Luis en la barbería",
      title: "Don Luis",
    },
    {
      src: "/fotos/local1.jpeg",
      alt: "Interior de la barbería Don Omar",
      title: "Nuestro Local",
    },
    {
      src: "/fotos/local2.jpeg",
      alt: "Otro ángulo del local de la barbería",
      title: "Ambiente Clásico",
    },
  ];

  const [activeImage, setActiveImage] = useState(0);
  const currentImage = images[activeImage];

  return (
    <section
      id="galeria"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-dark via-dark-lighter/30 to-dark relative overflow-hidden"
    >
      {/* Efectos de luz de fondo */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-red-barber/5 rounded-full blur-3xl" />

      {/* Líneas decorativas superiores */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-900/30 to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header de sección */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          {/* Decoración superior */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent to-blue-900" />
            <span className="text-2xl sm:text-3xl">📸</span>
            <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-l from-transparent to-blue-900" />
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream mb-3 sm:mb-4"
            style={{
              textShadow:
                "0 0 30px rgba(179, 18, 23, 0.3), 0 4px 20px rgba(0,0,0,0.5)",
            }}
          >
            Nuestra Galería
          </h2>

          {/* Línea decorativa con tricolor */}
          <div className="flex items-center justify-center gap-1 mb-6">
            <div className="w-12 h-1 bg-blue-900 rounded-full" />
            <div className="w-8 h-1 bg-cream/80 rounded-full" />
            <div className="w-12 h-1 bg-red-barber rounded-full" />
          </div>

          <p className="text-gray-barber max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Descubre nuestro trabajo y el ambiente único de{" "}
            <span className="text-cream font-semibold">Don Omar</span>
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.8fr)_320px] gap-5 sm:gap-6 md:gap-8 items-start xl:items-stretch xl:h-[600px]">
          <div className="group relative h-[320px] sm:h-[420px] md:h-[520px] xl:h-full overflow-hidden rounded-2xl border border-red-barber/40 bg-[radial-gradient(circle_at_top,rgba(179,18,23,0.14),transparent_45%),linear-gradient(180deg,rgba(15,15,15,0.92),rgba(8,8,8,0.98))] shadow-[0_24px_80px_rgba(179,18,23,0.22)]">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 70vw"
              className="object-contain object-center p-3 sm:p-4 md:p-5 transition-transform duration-700 group-hover:scale-[1.01]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-dark/5" />
            <div className="absolute inset-[12px] rounded-xl border border-cream/15" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-barber via-cream/50 to-blue-900" />

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 md:p-10">
              <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-cream/70 mb-2 sm:mb-3">
                Imagen destacada
              </p>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream mb-3 sm:mb-4">
                {currentImage.title}
              </h3>
              <div className="flex items-center gap-3 max-w-md">
                <div className="flex-1 h-px bg-cream/30" />
                <div className="w-2 h-2 rounded-full bg-red-barber" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 xl:h-full">
            {images.map((image, index) => {
              const isActive = index === activeImage;

              return (
                <button
                  key={image.src}
                  type="button"
                  className={[
                    "group relative h-[110px] sm:h-[120px] md:h-[132px] xl:h-auto xl:flex-1 overflow-hidden rounded-xl text-left transition-all duration-300",
                    isActive
                      ? "border border-red-barber/70 shadow-[0_12px_40px_rgba(179,18,23,0.22)]"
                      : "border border-cream/10 hover:border-cream/30",
                  ].join(" ")}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1280px) 100vw, 320px"
                    className={[
                      "object-cover transition-transform duration-500",
                      isActive ? "scale-105" : "group-hover:scale-110",
                    ].join(" ")}
                  />

                  <div
                    className={[
                      "absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/20 transition-opacity duration-300",
                      isActive
                        ? "opacity-100"
                        : "opacity-90 group-hover:opacity-100",
                    ].join(" ")}
                  />

                  <div className="relative z-10 h-full flex items-end p-4">
                    <div className="w-full">
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cream/60 mb-1">
                        {isActive ? "Vista actual" : "Seleccionar"}
                      </p>
                      <div className="flex items-center gap-3">
                        <h3 className="font-serif text-lg sm:text-xl text-cream">
                          {image.title}
                        </h3>
                        <div
                          className={[
                            "rounded-full transition-all duration-300",
                            isActive
                              ? "w-2.5 h-2.5 bg-red-barber"
                              : "w-2 h-2 bg-cream/50 group-hover:bg-red-barber",
                          ].join(" ")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-barber via-cream/50 to-blue-900" />
                </button>
              );
            })}
          </div>
        </div>

        <div className="h-[3px] w-full mt-2 sm:mt-3 bg-gradient-to-r from-transparent via-red-barber to-transparent shadow-[0_0_18px_rgba(179,18,23,0.45)]" />

        {/* Texto adicional */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <p className="text-gray-barber text-sm sm:text-base italic">
            Visítanos y descubre por qué somos la barbería de confianza desde{" "}
            <span className="text-red-barber font-semibold">1974</span>
          </p>
        </div>
      </div>
    </section>
  );
}
