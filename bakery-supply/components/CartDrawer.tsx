"use client";

import { useEffect, useRef } from "react";
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";
import Link from "next/link";
import { useCartStore } from "@/lib/store";
import { formatPrice, getWhatsAppUrl } from "@/lib/data";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart, total, itemCount } =
    useCartStore();
  const overlayRef = useRef<HTMLDivElement>(null);
  const count = itemCount();
  const cartTotal = total();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleSendWhatsApp = () => {
    if (items.length === 0) return;

    const lines = items.map(
      (item) =>
        `• ${item.product.name} × ${item.quantity} — ${formatPrice(item.product.price * item.quantity)}`
    );

    const message =
      `*PEDIDO — Bakery Supply*\n\n` +
      lines.join("\n") +
      `\n\n━━━━━━━━━━━━━━━━\n` +
      `*TOTAL: ${formatPrice(cartTotal)}*\n\n` +
      `Número de productos: ${count}\n\n` +
      `Por favor confirmar disponibilidad y coordinar entrega. ¡Gracias!`;

    const url = getWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-black/40 cart-overlay animate-fadeIn"
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl animate-slideInRight flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cream-dark">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-brown" />
            <div>
              <h2 className="font-display font-semibold text-lg text-brown-dark">Mi Pedido</h2>
              {count > 0 && (
                <p className="text-xs text-text-light">{count} {count === 1 ? "producto" : "productos"}</p>
              )}
            </div>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-cream rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-text-mid" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div>
                <p className="font-display font-semibold text-lg text-brown-dark">Tu pedido está vacío</p>
                <p className="text-sm text-text-light mt-1">Agrega productos del catálogo para comenzar</p>
              </div>
              <Link
                href="/catalogo"
                onClick={closeCart}
                className="btn-primary text-sm"
              >
                Ver Catálogo
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.product.id}
                  className="flex gap-4 bg-cream/50 rounded-2xl p-3"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-cream">
                    <SafeImage
                      src={item.product.image}
                      alt={item.product.name}
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-brown-dark line-clamp-2 leading-tight">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-caramel font-semibold mt-1">
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-6 h-6 bg-white border border-cream-dark rounded-full flex items-center justify-center hover:border-brown transition-colors"
                        >
                          <Minus className="w-3 h-3 text-text-mid" />
                        </button>
                        <span className="w-7 text-center text-sm font-semibold text-brown-dark">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 bg-white border border-cream-dark rounded-full flex items-center justify-center hover:border-brown transition-colors"
                        >
                          <Plus className="w-3 h-3 text-text-mid" />
                        </button>
                      </div>
                      {/* Subtotal + Delete */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-brown-dark">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="p-1 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-red-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-cream-dark px-6 py-5 space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-mid">Subtotal</span>
              <span className="font-bold text-lg text-brown-dark">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-xs text-text-light -mt-2">
              * El costo de envío se coordina por WhatsApp
            </p>

            {/* WhatsApp CTA */}
            <button
              onClick={handleSendWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar Pedido por WhatsApp
            </button>

            <button
              onClick={clearCart}
              className="w-full text-sm text-text-light hover:text-red-500 transition-colors py-1"
            >
              Limpiar pedido
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
