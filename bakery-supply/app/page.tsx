"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, FEATURED_PRODUCTS, getWhatsAppUrl } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { SafeImage } from "@/components/SafeImage";

export default function HomePage() {
  const whatsappHref = getWhatsAppUrl("Hola, me gustaría conocer más sobre los productos de Bakery Supply.");

  return (
    <div className="editorial-home">
      <section className="editorial-hero">
        <div className="editorial-hero-image">
          <SafeImage
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1800&q=88"
            alt="Selección de repostería artesanal"
            width={1800}
            height={1200}
            priority
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="editorial-hero-shade" />
        <div className="editorial-hero-content">
          <p className="eyebrow eyebrow-light">Insumos para quienes crean</p>
          <h1>Todo lo que necesitas para crear algo <em>extraordinario.</em></h1>
          <p className="hero-copy">Ingredientes, herramientas y pequeños detalles para llevar cada receta un poco más lejos.</p>
          <div className="hero-actions">
            <Link href="/catalogo" className="editorial-button editorial-button-light">Explorar catálogo <ArrowUpRight size={16} /></Link>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hero-text-link">Hablar con la tienda</a>
          </div>
          <div className="hero-caption"><span>BAKERY SUPPLY</span><span>SANTO DOMINGO · REPÚBLICA DOMINICANA</span></div>
        </div>
        <div className="hero-index">01 / 04</div>
      </section>

      <section className="intro-section section-shell">
        <div className="intro-kicker"><span>01</span><span>Una buena receta empieza aquí</span></div>
        <div className="intro-copy">
          <h2>Herramientas e ingredientes para hacer las cosas <em>bien.</em></h2>
          <p>Desde lo esencial de todos los días hasta ese utensilio que te faltaba. Reunimos productos para aficionados, reposteros y negocios que cuidan cada detalle.</p>
          <Link href="/catalogo" className="underlined-link">Conoce el catálogo <ArrowUpRight size={15} /></Link>
        </div>
        <div className="intro-image">
          <SafeImage src="https://images.unsplash.com/photo-1556911220-dabc1f02913a?w=1000&q=85" alt="Utensilios y preparación de repostería" width={1000} height={1200} sizes="(max-width: 900px) 100vw, 42vw" className="h-full w-full object-cover" />
          <span className="image-note">EL PLACER ESTÁ EN EL PROCESO</span>
        </div>
      </section>

      <section className="category-section">
        <div className="section-shell category-layout">
          <div className="category-heading">
            <p className="eyebrow">Encuentra lo que buscas</p>
            <h2>El oficio, por <em>partes.</em></h2>
            <p>Explora por categoría y encuentra justo lo que necesitas para tu próxima creación.</p>
          </div>
          <div className="category-list">
            {CATEGORIES.map((cat, index) => (
              <Link key={cat.id} href={`/catalogo?categoria=${cat.slug}`} className="category-row">
                <span className="category-number">0{index + 1}</span>
                <span className="category-name">{cat.name}</span>
                <span className="category-description">{cat.description}</span>
                <ArrowUpRight className="category-arrow" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section section-shell">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Una selección de la tienda</p>
            <h2>Para empezar <em>por aquí.</em></h2>
          </div>
          <Link href="/catalogo" className="underlined-link desktop-only">Ver todos los productos <ArrowUpRight size={15} /></Link>
        </div>
        <div className="editorial-product-grid">
          {FEATURED_PRODUCTS.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        <div className="mobile-catalog-link"><Link href="/catalogo" className="underlined-link">Ver catálogo completo <ArrowUpRight size={15} /></Link></div>
      </section>

      <section className="promise-section">
        <div className="section-shell promise-layout">
          <div className="promise-title"><p className="eyebrow eyebrow-light">Comprar sin complicaciones</p><h2>Lo que necesitas.<br /><em>Sin dar tantas vueltas.</em></h2></div>
          <div className="promise-list">
            <article><span>01</span><div><h3>Una selección útil</h3><p>Productos pensados para acompañar desde una receta en casa hasta el trabajo diario de una pastelería.</p></div></article>
            <article><span>02</span><div><h3>Atención directa</h3><p>Consulta disponibilidad, detalles y recomendaciones conversando con el equipo de la tienda.</p></div></article>
            <article><span>03</span><div><h3>Envíos a coordinar</h3><p>Pregunta por las opciones de entrega y coordina tu pedido directamente por WhatsApp.</p></div></article>
          </div>
        </div>
      </section>

      <section className="closing-section section-shell">
        <div className="closing-image"><SafeImage src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?w=1200&q=85" alt="Pastelería recién preparada" width={1200} height={900} sizes="(max-width: 900px) 100vw, 50vw" className="h-full w-full object-cover" /></div>
        <div className="closing-copy"><p className="eyebrow">Tu próxima creación comienza aquí</p><h2>¿Qué tienes pensado <em>preparar?</em></h2><p>Explora los productos o escríbenos si necesitas ayuda para encontrar algo específico.</p><div className="closing-actions"><Link href="/catalogo" className="editorial-button">Ver catálogo <ArrowUpRight size={16} /></Link><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="underlined-link">Consultar por WhatsApp</a></div></div>
      </section>
    </div>
  );
}
