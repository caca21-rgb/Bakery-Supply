"use client";

import { useEffect, useRef, useState } from "react";
import { SafeImage } from "@/components/SafeImage";
import { X, ShoppingBag, MessageCircle, Star, Tag, CheckCircle2, XCircle } from "lucide-react";
import { Product, formatPrice, getWhatsAppUrl } from "@/lib/data";
import { useCartStore } from "@/lib/store";

type Props = {
  product: Product;
  onClose: () => void;
};

export function ProductModal({ product, onClose }: Props) {
  const { addItem } = useCartStore();
  const [added, setAdded] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleAdd = () => {
    if (!product.available) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsApp = () => {
    const msg = `¡Hola! Me interesa el producto:\n\n*${product.name}*\nPrecio: ${formatPrice(product.price)}\n\n¿Está disponible?`;
    window.open(getWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 cart-overlay animate-fadeIn"
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-fadeInUp">
        {/* Close */}
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center px-6 pt-5 pb-3 border-b border-cream-dark">
          <span className="flex items-center gap-1.5 text-xs text-text-light">
            <Tag className="w-3.5 h-3.5" />
            {product.category}
          </span>
          <button onClick={onClose} className="p-2 hover:bg-cream rounded-full transition-colors">
            <X className="w-5 h-5 text-text-mid" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Image */}
          <div className="relative w-full md:w-64 h-56 md:h-72 rounded-2xl overflow-hidden bg-cream flex-shrink-0">
            <SafeImage
              src={product.image}
              alt={product.name}
              width={800}
              height={900}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
            />
            {product.featured && (
              <span className="absolute top-3 left-3 bg-caramel text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3 fill-white" /> Destacado
              </span>
            )}
            {discount && (
              <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                -{discount}% OFF
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="font-display font-bold text-xl text-brown-dark leading-tight">
              {product.name}
            </h2>

            {/* Availability */}
            <div className="flex items-center gap-1.5 mt-2 mb-4">
              {product.available ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">Disponible</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span className="text-sm text-red-500 font-medium">Agotado temporalmente</span>
                </>
              )}
            </div>

            <p className="text-sm text-text-mid leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-brown">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-text-light line-through">{formatPrice(product.originalPrice)}</span>
                )}
              </div>
              <p className="text-xs text-text-light mt-1">Precio en pesos dominicanos (DOP)</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAdd}
                disabled={!product.available}
                className={`flex-1 flex items-center justify-center gap-2 font-semibold py-3 rounded-full transition-all duration-300 ${
                  added
                    ? "bg-green-500 text-white"
                    : product.available
                    ? "bg-brown hover:bg-brown-dark text-white hover:shadow-lg hover:-translate-y-0.5"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? "¡Agregado al pedido!" : "Agregar al pedido"}
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
