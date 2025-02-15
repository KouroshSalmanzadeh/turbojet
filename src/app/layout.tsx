import type { Metadata, Viewport } from "next";
import "./globals.css";
import HeaderComponent from "@/components/header/HeaderComponent";
import FooterComponent from "@/components/footer/FooterComponent";

export const metadata: Metadata = {
  title: "توربوجت",
  description: "طراحی سایت | سفارش طراحی سایت | خدمات طراحی وب سایت اختصاصی",
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
      <body>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}