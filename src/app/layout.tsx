import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peluquería Don Omar | Luis Soto Barber",
  description:
    "Reserva tu hora en 1 minuto. Más de 50 años de tradición en barbería. Av. Libertad #161, Local C, Rosario.",
  keywords: ["barbería", "peluquería", "reservas", "Rosario", "Luis Soto"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
