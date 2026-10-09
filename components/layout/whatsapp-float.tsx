import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { company } from "@/lib/site-data";

const WHATSAPP_TEXT = "Hi Innovexa Digital, I want to discuss a project for my business.";

export function WhatsAppFloat() {
  const phone = company.whatsapp.replace(/\D/g, "");
  const href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(WHATSAPP_TEXT);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Innovexa Digital on WhatsApp"
      className="group fixed right-4 bottom-24 z-50 flex items-center gap-2 rounded-full bg-[#25d366] py-3 pr-4 pl-3 text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.65)] transition hover:bg-[#1eb85a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25d366] md:right-6 md:bottom-6"
    >
      <FaWhatsapp className="text-2xl" aria-hidden />
      <span className="text-sm font-semibold">Chat with us</span>
    </Link>
  );
}
