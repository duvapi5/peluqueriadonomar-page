import { generateWhatsAppURL } from "@/lib/utils";

interface WhatsAppButtonProps {
  message: string;
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({
  message,
  className = "",
  children,
}: WhatsAppButtonProps) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "56950915048";
  const whatsappURL = generateWhatsAppURL(phone, message);

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 ${className}`}
    >
      <span className="text-2xl">💬</span>
      {children || "Abrir WhatsApp"}
    </a>
  );
}
