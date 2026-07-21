import type { Metadata, Viewport } from "next"; // Tambahkan Viewport di sini
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Pindahkan viewport ke objek tersendiri
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Penting: mencegah user zoom paksa
  userScalable: false,
};

// 2. Metadata hanya untuk konten SEO
export const metadata: Metadata = {
  title: "Inaya Konstruksi | Solusi Konstruksi Profesional",
  description: "Jasa konstruksi, arsitektur, dan renovasi terpercaya.",
  icons: {
    icon: "/icon.png",
    apple:"/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-black text-white min-h-screen w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}