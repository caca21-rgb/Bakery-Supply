"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X, ChevronDown, Grid3X3, List } from "lucide-react";
import { PRODUCTS, CATEGORIES, formatPrice } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

type SortOption = "default" | "price-asc" | "price-desc" | "name";

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categoria") || "all";
  const initialFeatured = searchParams.get("destacados") === "true";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortOption>("default");
  const [filterOpen, setFilterOpen] = useState(false);
  const [availableOnly, setAvailableOnly] = useState(false);


  useEffect(() => {
    setCategory(searchParams.get("categoria") || "all");
  }, [searchParams]);

  const allProducts = useMemo(() => {
    return PRODUCTS;
  }, []);

  const filtered = useMemo(() => {
    let result = allProducts;

    if (initialFeatured) {
      result = result.filter((p) => p.featured);
    }

    if (category !== "all") {
      result = result.filter((p) => p.categorySlug === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (availableOnly) {
      result = result.filter((p) => p.available);
    }

    switch (sort) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "name":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [allProducts, category, search, sort, availableOnly, initialFeatured]);

  const activeCat = CATEGORIES.find((c) => c.slug === category);

  return (
    <div className="min-h-screen bg-warm-white pt-20">
      {/* Header */}
      <div className="bg-cream border-b border-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-semibold text-caramel uppercase tracking-widest mb-2">
            {initialFeatured ? "Colección" : "Todo el catálogo"}
          </p>
          <h1 className="font-display text-4xl font-bold text-brown-dark">
            {initialFeatured
              ? "Productos Destacados"
              : activeCat
              ? activeCat.name
              : "Catálogo Completo"}
          </h1>
          <p className="mt-2 text-text-mid">
            {filtered.length} {filtered.length === 1 ? "producto" : "productos"} encontrados
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar productos..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-cream-dark rounded-full text-sm text-brown-dark placeholder:text-text-light focus:outline-none focus:border-brown transition-colors shadow-sm"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-brown transition-colors"
              >
                <X className="w-4 h-4 text-text-light" />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="appearance-none bg-white border border-cream-dark rounded-full px-5 py-3 pr-10 text-sm text-brown-dark focus:outline-none focus:border-brown transition-colors shadow-sm cursor-pointer"
            >
              <option value="default">Ordenar: Relevancia</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="name">Nombre: A-Z</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light pointer-events-none" />
          </div>

          {/* Filter toggle */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className={`flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-medium transition-all shadow-sm ${
              filterOpen || category !== "all" || availableOnly
                ? "bg-brown text-white border-brown"
                : "bg-white border-cream-dark text-text-mid hover:border-brown"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filtros
            {(category !== "all" || availableOnly) && (
              <span className="bg-white text-brown text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {(category !== "all" ? 1 : 0) + (availableOnly ? 1 : 0)}
              </span>
            )}
          </button>
        </div>

        {/* Filter Panel */}
        {filterOpen && (
          <div className="bg-white border border-cream-dark rounded-2xl p-6 mb-8 animate-fadeInUp">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Categories */}
              <div className="flex-1">
                <p className="text-xs font-semibold text-text-light uppercase tracking-widest mb-3">Categoría</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setCategory("all")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      category === "all"
                        ? "bg-brown text-white"
                        : "bg-cream text-text-mid hover:bg-cream-dark"
                    }`}
                  >
                    Todas
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.slug)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        category === cat.slug
                          ? "bg-brown text-white"
                          : "bg-cream text-text-mid hover:bg-cream-dark"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="sm:border-l sm:border-cream-dark sm:pl-6">
                <p className="text-xs font-semibold text-text-light uppercase tracking-widest mb-3">Disponibilidad</p>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div
                    onClick={() => setAvailableOnly(!availableOnly)}
                    className={`w-10 h-5 rounded-full transition-colors relative ${
                      availableOnly ? "bg-brown" : "bg-cream-dark"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                        availableOnly ? "translate-x-5" : "translate-x-0.5"
                      }`}
                    />
                  </div>
                  <span className="text-sm text-text-mid">Solo disponibles</span>
                </label>
              </div>
            </div>

            {/* Clear filters */}
            {(category !== "all" || availableOnly) && (
              <button
                onClick={() => { setCategory("all"); setAvailableOnly(false); }}
                className="mt-4 text-xs text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Limpiar filtros
              </button>
            )}
          </div>
        )}

        {/* Category quick-nav pills */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setCategory("all")}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              category === "all" ? "bg-brown text-white shadow" : "bg-white border border-cream-dark text-text-mid hover:border-brown"
            }`}
          >
            Todos
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.slug)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                category === cat.slug ? "bg-brown text-white shadow" : "bg-white border border-cream-dark text-text-mid hover:border-brown"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-display text-xl font-semibold text-brown-dark mb-2">No encontramos productos</h3>
            <p className="text-text-light mb-6">Intenta con otros términos o ajusta los filtros.</p>
            <button
              onClick={() => { setSearch(""); setCategory("all"); setAvailableOnly(false); }}
              className="btn-secondary text-sm"
            >
              Limpiar búsqueda
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-warm-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-brown border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-text-mid">Cargando catálogo...</p>
        </div>
      </div>
    }>
      <CatalogContent />
    </Suspense>
  );
}
