"use client";

import { useState } from "react";
import { SafeImage } from "@/components/SafeImage";
import { Product, formatPrice } from "@/lib/data";
import { useCartStore } from "@/lib/store";
import { ProductModal } from "./ProductModal";

type Props = { product: Product };

export function ProductCard({ product }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCartStore();
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : null;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.available) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return <>
    <article className="editorial-product" onClick={() => setModalOpen(true)}>
      <button className="product-photo" aria-label={`Ver ${product.name}`}>
        <SafeImage src={product.image} alt={product.name} width={800} height={900} className="h-full w-full object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
        {discount && <span className="product-sale">-{discount}%</span>}
        {!product.available && <span className="product-unavailable">Agotado</span>}
        <span className="product-view-label">Ver producto</span>
      </button>
      <div className="product-meta"><span>{product.category}</span>{product.featured && <span>Selección</span>}</div>
      <h3>{product.name}</h3>
      <div className="product-card-bottom"><div><strong>{formatPrice(product.price)}</strong>{product.originalPrice && <del>{formatPrice(product.originalPrice)}</del>}</div><button onClick={handleAdd} disabled={!product.available} className={`product-add ${added ? "is-added" : ""}`}>{added ? "Añadido" : product.available ? "+ Añadir" : "Agotado"}</button></div>
    </article>
    {modalOpen && <ProductModal product={product} onClose={() => setModalOpen(false)} />}
  </>;
}
