import Link from "next/link";

export default function NotFound() {
  return <div className="min-h-screen bg-cream flex items-center justify-center px-6">
    <div className="max-w-md text-center">
      <p className="mb-5 text-xs uppercase tracking-[.25em] text-caramel">Bakery Supply</p>
      <p className="font-display text-7xl text-brown-dark">404</p>
      <h1 className="mt-5 font-display text-3xl text-brown-dark">Esta página no está disponible.</h1>
      <p className="mt-4 mb-8 text-sm leading-7 text-text-mid">La dirección que buscas no existe o pudo haber cambiado. Puedes volver al inicio o explorar el catálogo.</p>
      <div className="flex flex-wrap justify-center gap-3"><Link href="/" className="btn-primary">Volver al inicio</Link><Link href="/catalogo" className="btn-secondary">Ver catálogo</Link></div>
    </div>
  </div>;
}
