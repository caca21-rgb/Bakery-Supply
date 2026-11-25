# Bakery Supply — demostración de catálogo digital

Proyecto de demostración comercial construido con Next.js, React, TypeScript, Tailwind CSS 4, Zustand y Lucide.

## Requisitos

- Node.js 20.9 o superior (recomendado para Next.js 16)
- npm

## Instalación

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre http://localhost:3000.

## Rutas

- `/` — página principal.
- `/catalogo` — catálogo con búsqueda, filtros, orden y detalle de productos.
- `/admin` — administración local de productos.

## WhatsApp

Configura `NEXT_PUBLIC_WHATSAPP_NUMBER` en `.env.local` con el número autorizado, en formato internacional y solo dígitos (por ejemplo, prefijo de país + número, sin `+`, espacios ni guiones). Si se deja vacío, los mensajes se preparan y WhatsApp se abre sin destinatario preseleccionado.

## Datos y limitaciones de esta demostración

- El carrito y los productos personalizados se guardan en `localStorage` mediante Zustand. Los datos solo existen en ese navegador y dispositivo; no es una base de datos compartida.
- Los pedidos se envían a WhatsApp. Esta versión no registra automáticamente pedidos en un panel ni sincroniza pedidos entre dispositivos.
- Los productos, precios, fotografías y textos de catálogo son datos ilustrativos; deben sustituirse por información aprobada por el negocio.
- La administración `/admin` no incluye autenticación. No debe publicarse como panel privado de producción sin añadir autenticación y autorización.
- La imagen local `public/images/product-placeholder.svg` se utiliza como respaldo cuando una imagen externa no carga.

## Comprobaciones

```bash
npm run lint
npm run build
```
