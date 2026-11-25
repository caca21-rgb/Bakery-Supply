"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCartStore } from "@/lib/store";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCartStore();
  const count = itemCount();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`editorial-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="editorial-nav-inner">
          <Link href="/" className="wordmark" aria-label="Bakery Supply, inicio">Bakery <span>Supply</span><small>REPÚBLICA DOMINICANA</small></Link>
          <nav className="desktop-nav" aria-label="Navegación principal">
            <Link href="/">Inicio</Link>
            <Link href="/catalogo">Catálogo</Link>
            <Link href="/#contacto">Contacto</Link>
          </nav>
          <div className="nav-actions">
            <button onClick={toggleCart} className="cart-trigger" aria-label={`Abrir pedido, ${count} productos`}><ShoppingBag size={19} strokeWidth={1.6} /><span>Pedido</span>{count > 0 && <b>{count}</b>}</button>
            <button className="mobile-menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </div>
      </header>
      {menuOpen && <div className="mobile-nav-panel"><Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link><Link href="/catalogo" onClick={() => setMenuOpen(false)}>Catálogo</Link><Link href="/#contacto" onClick={() => setMenuOpen(false)}>Contacto</Link><button onClick={() => { setMenuOpen(false); toggleCart(); }}>Ver mi pedido</button></div>}
    </>
  );
}
