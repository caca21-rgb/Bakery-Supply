export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount?: number;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  available: boolean;
  featured?: boolean;
  tags?: string[];
};

// Configure NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local with the authorized business number.
// Leave empty during the demo; WhatsApp will open with the prepared message but no recipient.
export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");

export function getWhatsAppUrl(message = "") {
  const recipient = WHATSAPP_NUMBER ? `/${WHATSAPP_NUMBER}` : "/";
  return `https://wa.me${recipient}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

export const CATEGORIES: Category[] = [
  {
    id: "cat-1",
    name: "Ingredientes",
    slug: "ingredientes",
    description: "Harinas, azúcares, levaduras y todo lo esencial para tus recetas.",
  },
  {
    id: "cat-2",
    name: "Moldes y Bandejas",
    slug: "moldes",
    description: "Moldes de todas las formas y tamaños para crear tortas y pasteles únicos.",
  },
  {
    id: "cat-3",
    name: "Utensilios",
    slug: "utensilios",
    description: "Espátulas, batidores, rodillos y herramientas para trabajar con precisión.",
  },
  {
    id: "cat-4",
    name: "Decoración",
    slug: "decoracion",
    description: "Fondant, sprinkles, figuras y todo para hacer tus postres únicos.",
  },
  {
    id: "cat-5",
    name: "Empaques",
    slug: "empaques",
    description: "Cajas, bolsas y empaques profesionales para presentar tus creaciones.",
  },
  {
    id: "cat-6",
    name: "Colorantes y Esencias",
    slug: "colorantes",
    description: "Colorantes gel, en polvo y esencias naturales de alta concentración.",
  },
  {
    id: "cat-7",
    name: "Herramientas Profesionales",
    slug: "herramientas",
    description: "Equipos y herramientas para reposteros y pastelerías profesionales.",
  },
];

export const PRODUCTS: Product[] = [
  // ── INGREDIENTES ──────────────────────────────────────────────────────────
  {
    id: "p-01",
    name: "Harina de Trigo Repostería Premium 1kg",
    slug: "harina-trigo-premium",
    category: "Ingredientes",
    categorySlug: "ingredientes",
    price: 220,
    description: "Harina especialmente formulada para repostería, con bajo contenido de gluten para una textura suave y esponjosa en tortas y bizcochos.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
    available: true,
    featured: true,
  },
  {
    id: "p-02",
    name: "Azúcar Blanca Refinada 2kg",
    slug: "azucar-blanca-refinada",
    category: "Ingredientes",
    categorySlug: "ingredientes",
    price: 180,
    description: "Azúcar blanca de grano fino, ideal para preparar bizcochos, cremas y merengues perfectos.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    available: true,
    featured: true,
  },
  {
    id: "p-03",
    name: "Cocoa en Polvo Sin Azúcar 250g",
    slug: "cocoa-polvo",
    category: "Ingredientes",
    categorySlug: "ingredientes",
    price: 320,
    originalPrice: 390,
    description: "Cocoa alcalizada de alta calidad con sabor intenso y profundo. Perfecta para tortas de chocolate, brownies y ganaches.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    available: true,
    featured: true,
  },
  {
    id: "p-04",
    name: "Levadura Instantánea Saf-Instant 500g",
    slug: "levadura-instantanea",
    category: "Ingredientes",
    categorySlug: "ingredientes",
    price: 450,
    description: "Levadura de acción rápida, ideal para panes artesanales, pizzas y masas fermentadas. Alta tasa de actividad.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    available: true,
  },
  {
    id: "p-05",
    name: "Vainilla Pura Extracto 120ml",
    slug: "vainilla-extracto",
    category: "Ingredientes",
    categorySlug: "ingredientes",
    price: 290,
    description: "Extracto de vainilla de Madagascar 100% natural, con aroma profundo y auténtico para elevar el sabor de tus preparaciones.",
    image: "https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=600&q=80",
    available: true,
  },
  {
    id: "p-06",
    name: "Mantequilla Sin Sal 400g",
    slug: "mantequilla-sin-sal",
    category: "Ingredientes",
    categorySlug: "ingredientes",
    price: 380,
    description: "Mantequilla de alta calidad para repostería profesional. Aporta cremosidad y sabor inigualable a tortas, galletas y cremas.",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&q=80",
    available: true,
    featured: true,
  },

  // ── MOLDES Y BANDEJAS ─────────────────────────────────────────────────────
  {
    id: "p-07",
    name: "Molde Redondo Desmontable 24cm",
    slug: "molde-redondo-24",
    category: "Moldes y Bandejas",
    categorySlug: "moldes",
    price: 850,
    description: "Molde de aluminio antiadherente con base removible, ideal para tartas, cheesecakes y tortas multicapas. Fácil desmolde garantizado.",
    image: "https://images.unsplash.com/photo-1620921568790-c1cf8983b80c?w=600&q=80",
    available: true,
    featured: true,
  },
  {
    id: "p-08",
    name: "Set Moldes Silicona Flores x6",
    slug: "molde-silicona-flores",
    category: "Moldes y Bandejas",
    categorySlug: "moldes",
    price: 650,
    description: "Set de 6 moldes de silicona premium con diseños florales únicos. Flexibles, antiadherentes y aptos para horno y congelador.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80",
    available: true,
  },
  {
    id: "p-09",
    name: "Bandeja para Cupcakes 12 cavidades",
    slug: "bandeja-cupcakes-12",
    category: "Moldes y Bandejas",
    categorySlug: "moldes",
    price: 720,
    originalPrice: 850,
    description: "Bandeja de aluminio reforzado para 12 cupcakes estándar. Distribución uniforme del calor para un horneado perfecto.",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80",
    available: true,
    featured: true,
  },
  {
    id: "p-10",
    name: "Molde Rectangular Brownie 33x23cm",
    slug: "molde-brownie",
    category: "Moldes y Bandejas",
    categorySlug: "moldes",
    price: 580,
    description: "Molde rectangular de acero al carbono para brownies, barras y postres horneados. Recubrimiento antiadherente profesional.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&q=80",
    available: true,
  },

  // ── UTENSILIOS ────────────────────────────────────────────────────────────
  {
    id: "p-11",
    name: "Set Espátulas Anguladas x3 Acero",
    slug: "espatulas-anguladas",
    category: "Utensilios",
    categorySlug: "utensilios",
    price: 490,
    description: "Set de 3 espátulas anguladas en diferentes tamaños para alisar ganaches, cremas y coberturas con acabado profesional.",
    image: "https://images.unsplash.com/photo-1556911220-dabc1f02913a?w=600&q=80",
    available: true,
    featured: true,
  },
  {
    id: "p-12",
    name: "Rodillo de Silicona con Guías",
    slug: "rodillo-silicona",
    category: "Utensilios",
    categorySlug: "utensilios",
    price: 420,
    description: "Rodillo de silicona antiadherente con anillos de guía para extender masas y fondant con grosor uniforme.",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
    available: true,
  },
  {
    id: "p-13",
    name: "Manga Pastelera Reutilizable + Boquillas x12",
    slug: "manga-pastelera-kit",
    category: "Utensilios",
    categorySlug: "utensilios",
    price: 680,
    originalPrice: 850,
    description: "Kit profesional con manga de silicona reutilizable y 12 boquillas de acero inoxidable para decorar con precisión.",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600&q=80",
    available: true,
    featured: true,
  },
  {
    id: "p-14",
    name: "Termómetro Digital de Cocina",
    slug: "termometro-digital",
    category: "Utensilios",
    categorySlug: "utensilios",
    price: 550,
    description: "Termómetro de lectura instantánea para controlar temperaturas de chocolate, caramelo, aceite y masas con exactitud.",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80",
    available: true,
  },

  // ── DECORACIÓN ────────────────────────────────────────────────────────────
  {
    id: "p-15",
    name: "Fondant Blanco 500g Wilton",
    slug: "fondant-blanco",
    category: "Decoración",
    categorySlug: "decoracion",
    price: 480,
    description: "Fondant extendido de alta calidad, fácil de trabajar, liso y brillante. Ideal para cubrir tortas y modelar figuras.",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&q=80",
    available: true,
    featured: true,
  },
  {
    id: "p-16",
    name: "Sprinkles Mix Colores Festivos 200g",
    slug: "sprinkles-colores",
    category: "Decoración",
    categorySlug: "decoracion",
    price: 280,
    description: "Mix de sprinkles coloridos en diferentes formas: estrellas, perlas, nonpareils y confeti. Perfectos para decorar cupcakes y galletas.",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&q=80",
    available: true,
  },
  {
    id: "p-17",
    name: "Lápiz Comestible Dorado Metalizado",
    slug: "lapiz-comestible-dorado",
    category: "Decoración",
    categorySlug: "decoracion",
    price: 390,
    description: "Lápiz alimenticio de tinta dorada metalizada para escribir y dibujar sobre fondant, chocolate y galletas. Acabado premium.",
    image: "https://images.unsplash.com/photo-1558636508-e0969431e88d?w=600&q=80",
    available: false,
  },
  {
    id: "p-18",
    name: "Flores de Azúcar Pre-elaboradas x24",
    slug: "flores-azucar",
    category: "Decoración",
    categorySlug: "decoracion",
    price: 620,
    description: "Set de 24 flores comestibles de azúcar artesanal en tonos pastel. Listas para usar en tortas, cupcakes y postres de alta pastelería.",
    image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=600&q=80",
    available: true,
    featured: true,
  },

  // ── EMPAQUES ──────────────────────────────────────────────────────────────
  {
    id: "p-19",
    name: "Cajas para Torta 25x25x15cm x10",
    slug: "cajas-torta-25",
    category: "Empaques",
    categorySlug: "empaques",
    price: 350,
    description: "Pack de 10 cajas de cartón blanco para tortas medianas. Resistentes, con ventana transparente opcional y base incluida.",
    image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=600&q=80",
    available: true,
    featured: true,
  },
  {
    id: "p-20",
    name: "Bolsas Kraft con Ventana x50",
    slug: "bolsas-kraft-ventana",
    category: "Empaques",
    categorySlug: "empaques",
    price: 420,
    description: "Bolsas de papel kraft ecológico con ventana transparente para galletas, alfajores y mini pasteles. Cierre plegable incluido.",
    image: "https://images.unsplash.com/photo-1627738668643-5375ae0fe79d?w=600&q=80",
    available: true,
  },
  {
    id: "p-21",
    name: "Cajas Individuales para Cupcakes x12",
    slug: "cajas-cupcakes-individuales",
    category: "Empaques",
    categorySlug: "empaques",
    price: 290,
    description: "Cajas transparentes de PET para cupcakes individuales. Presentación elegante para ventas al detal y eventos.",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80",
    available: true,
  },

  // ── COLORANTES Y ESENCIAS ─────────────────────────────────────────────────
  {
    id: "p-22",
    name: "Set Colorantes Gel x12 Colores",
    slug: "colorantes-gel-12",
    category: "Colorantes y Esencias",
    categorySlug: "colorantes",
    price: 980,
    originalPrice: 1200,
    description: "Set profesional de 12 colorantes en gel de alta concentración. No alteran la consistencia de cremas ni masas. Colores vivos y estables al horneado.",
    image: "https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?w=600&q=80",
    available: true,
    featured: true,
  },
  {
    id: "p-23",
    name: "Colorante en Polvo Metálico Oro",
    slug: "colorante-polvo-oro",
    category: "Colorantes y Esencias",
    categorySlug: "colorantes",
    price: 420,
    description: "Polvo metalizado comestible efecto dorado para pintar fondant, chocolate y decoraciones. Acabado lujoso y profesional.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    available: true,
  },
  {
    id: "p-24",
    name: "Esencias Concentradas Pack 6 Sabores",
    slug: "esencias-pack-6",
    category: "Colorantes y Esencias",
    categorySlug: "colorantes",
    price: 650,
    description: "Pack de 6 esencias concentradas: fresa, coco, limón, almendra, canela y bubblegum. Alta concentración — solo se necesitan gotas.",
    image: "https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=600&q=80",
    available: true,
    featured: true,
  },

  // ── HERRAMIENTAS PROFESIONALES ────────────────────────────────────────────
  {
    id: "p-25",
    name: "Batidora de Pie 5Qt KitchenPro",
    slug: "batidora-pie-5qt",
    category: "Herramientas Profesionales",
    categorySlug: "herramientas",
    price: 18500,
    description: "Batidora de pedestal 5 cuartos con motor de 325W. Incluye gancho, pala y globo. Ideal para volúmenes medianos en pastelerías y negocios.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    available: true,
    featured: true,
  },
  {
    id: "p-26",
    name: "Soplete de Cocina Profesional",
    slug: "soplete-cocina",
    category: "Herramientas Profesionales",
    categorySlug: "herramientas",
    price: 1250,
    description: "Soplete de gas butano ajustable para flamear merengues, crème brûlée y acabados caramelizados. Con válvula de seguridad.",
    image: "https://images.unsplash.com/photo-1582584650770-04773cf8a39d?w=600&q=80",
    available: true,
  },
  {
    id: "p-27",
    name: "Tanque de Nitrógeno Líquido 1L",
    slug: "nitrogeno-liquido",
    category: "Herramientas Profesionales",
    categorySlug: "herramientas",
    price: 2800,
    description: "Nitrógeno líquido alimenticio para técnicas de alta gastronomía: helados express, esferificaciones y acabados modernos.",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
    available: false,
  },
  {
    id: "p-28",
    name: "Mesa de Trabajo Acero Inox 120x60cm",
    slug: "mesa-trabajo-acero",
    category: "Herramientas Profesionales",
    categorySlug: "herramientas",
    price: 8900,
    description: "Mesa de trabajo de acero inoxidable grado alimentario, con repisa inferior. Higiénica, resistente y fácil de limpiar para uso diario.",
    image: "https://images.unsplash.com/photo-1556911220-dabc1f02913a?w=600&q=80",
    available: true,
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured);

export function getProductsByCategory(slug: string) {
  return PRODUCTS.filter((p) => p.categorySlug === slug);
}

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-DO", {
    style: "currency",
    currency: "DOP",
    minimumFractionDigits: 0,
  }).format(price);
}
