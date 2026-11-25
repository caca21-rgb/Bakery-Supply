import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Footer } from "@/components/Footer";
import { StoreHydration } from "@/components/StoreHydration";

export const metadata: Metadata = {
  title: "Bakery Supply — Todo para tu Repostería",
  description:
    "Encuentra los mejores ingredientes, moldes, utensilios y accesorios para repostería profesional. Envío a toda la República Dominicana.",
  keywords: [
    "repostería",
    "panadería",
    "moldes",
    "ingredientes",
    "utensilios",
    "República Dominicana",
  ],
  openGraph: {
    title: "Bakery Supply — Todo para tu Repostería",
    description:
      "Los mejores ingredientes, herramientas y accesorios para repostería en un solo lugar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-DO">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <StoreHydration />
        <Navbar />
        <CartDrawer />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
