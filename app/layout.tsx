import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlantic Bureau · Aménagement d'espaces de travail à La Rochelle",
  description:
    "Bureau d'études et aménageur de bureaux à Aytré (17), près de La Rochelle. Conseil, mobilier sur mesure, plans 2D et 3D, installation par nos équipes. Devis gratuit sous 48h.",
  metadataBase: new URL("https://www.atlantic-bureau.com"),
  openGraph: {
    title: "Atlantic Bureau · Aménagement d'espaces de travail",
    description:
      "Conseil, mobilier sur mesure et installation. Showroom à Aytré, près de La Rochelle. Devis gratuit sous 48h.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Instrument+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
