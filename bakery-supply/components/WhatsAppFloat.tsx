import { getWhatsAppUrl } from "@/lib/data";

export function WhatsAppFloat() {
  const href = getWhatsAppUrl("Hola, visité Bakery Supply y me gustaría obtener más información sobre sus productos.");
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25834b] px-5 py-3 text-xs font-medium tracking-wide text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#1d6d3e]">WhatsApp</a>;
}
