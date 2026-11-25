import Link from "next/link";
import { CATEGORIES, getWhatsAppUrl } from "@/lib/data";

export function Footer() {
  const whatsappHref = getWhatsAppUrl("Hola, quisiera información sobre Bakery Supply.");
  return <footer className="editorial-footer" id="contacto">
    <div className="section-shell footer-main">
      <div className="footer-brand"><Link href="/" className="footer-wordmark">Bakery <span>Supply</span></Link><p>Todo lo necesario para hacer de cada receta algo especial.</p><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="footer-contact-link">Conversar con la tienda ↗</a></div>
      <div><p className="footer-label">Explorar</p><ul><li><Link href="/">Inicio</Link></li><li><Link href="/catalogo">Catálogo completo</Link></li><li><Link href="/catalogo?destacados=true">Selección de la tienda</Link></li></ul></div>
      <div><p className="footer-label">Categorías</p><ul>{CATEGORIES.map((cat) => <li key={cat.id}><Link href={`/catalogo?categoria=${cat.slug}`}>{cat.name}</Link></li>)}</ul></div>
      <div><p className="footer-label">Contacto</p><ul><li><a href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp · número por confirmar</a></li><li>Ubicación por confirmar</li><li>Horario por confirmar</li></ul></div>
    </div>
    <div className="section-shell footer-bottom"><span>© {new Date().getFullYear()} Bakery Supply</span><span>Demostración comercial · Productos y precios ilustrativos</span></div>
  </footer>;
}
