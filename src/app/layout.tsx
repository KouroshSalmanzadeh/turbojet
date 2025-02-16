import type { Metadata, Viewport } from "next";
import "./globals.css";
import HeaderComponent from "@/components/header/HeaderComponent";
import FooterComponent from "@/components/footer/FooterComponent";
import Script from "next/script";

export const metadata: Metadata = {
  title: "توربوجت | طراحی سایت حرفه‌ای و سریع",
  description: "توربوجت ارائه‌دهنده خدمات طراحی وب‌سایت با سرعت بالا، طراحی اختصاصی و بهینه برای سئو.",
  keywords: ["طراحی سایت", "سفارش طراحی سایت", "طراحی سایت اختصاصی", "سئو سایت", "برنامه نویسی وب"],
  alternates: {
    canonical: "https://turbojetweb.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Turbojet Team", url: "https://turbojetweb.vercel.app/" }],
  generator: "Next.js",
  applicationName: "Turbojet",
  creator: "Turbojet Team",
  publisher: "Turbojet",
  icons: "/favicon.ico",
  openGraph: {
    title: "توربوجت | طراحی سایت حرفه‌ای و سریع",
    description: "توربوجت ارائه‌دهنده خدمات طراحی وب‌سایت با سرعت بالا، طراحی اختصاصی و بهینه برای سئو.",
    url: "https://turbojetweb.vercel.app/",
    siteName: "Turbojet",
    images: [
      {
        url: "https://turbojetweb.vercel.app/",
        width: 1200,
        height: 630,
        alt: "توربوجت - طراحی سایت حرفه‌ای و سریع",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@turbojet",
    creator: "@turbojet",
    title: "توربوجت | طراحی سایت حرفه‌ای و سریع",
    description: "توربوجت ارائه‌دهنده خدمات طراحی وب‌سایت با سرعت بالا، طراحی اختصاصی و بهینه برای سئو.",
    images: ["https://turbojetweb.vercel.app/"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="LT0XIm_uNcuk2fmayhLorZJNVwdu5solXJ4VlD__OUo" />
        <meta charSet="UTF-8" />
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "توربوجت",
              "url": "https://turbojetweb.vercel.app/",
              "description": "طراحی سایت اختصاصی و سئو شده با توربوجت.",
              "publisher": {
                "@type": "Organization",
                "name": "Turbojet",
                "logo": "https://turbojetweb.vercel.app/"
              }
            })
          }}
        />
      </head>
      <body>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}