import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallButton } from "@/components/MobileCallButton";
import { siteConfig } from "@/content/site";

const displayFont = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.urls.base),
  title: {
    default: "Gold Coast Northern Landscape Supplies",
    template: "%s | Gold Coast Northern Landscape Supplies",
  },
  description:
    "Premium decorative stone, sands, soils, gravels, mulches, pavers, and bagged cement with small to bulk delivery across the Gold Coast.",
  openGraph: {
    type: "website",
    title: "Gold Coast Northern Landscape Supplies",
    description:
      "Decorative stone, sands, soils, gravels, mulches, pavers, and bagged cement with same-day delivery available where possible.",
    url: siteConfig.urls.base,
    siteName: "Gold Coast Northern Landscape Supplies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        <Header />
        <main className="min-h-screen bg-[#f6f8f2] text-slate-900">
          {children}
        </main>
        <Footer />
        <MobileCallButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.name,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.region,
                postalCode: siteConfig.address.postalCode,
                addressCountry: siteConfig.address.country,
              },
              telephone: siteConfig.contact.phone,
              openingHours: [
                siteConfig.hours.weekday,
                siteConfig.hours.saturday,
                siteConfig.hours.sunday,
              ],
              url: siteConfig.urls.base,
              sameAs: siteConfig.sameAs,
              description: siteConfig.description,
            }),
          }}
        />
      </body>
    </html>
  );
}
