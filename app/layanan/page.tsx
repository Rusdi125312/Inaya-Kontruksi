"use client";
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Price from "@/components/Price";

export default function LayananPage() {
  return (
    <main className="bg-black min-h-screen text-white relative">
      <Navbar />

      {/* Background Layer - Tetap Fixed */}
      <div className="fixed inset-0 z-0">
        <img src="/hero-bg.jpeg" alt="Background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>

      {/* Content Layer - Z-Index 10 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-32"
      >
        <div className="text-center mb-12 px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#D4AF37]">Layanan & Investasi</h1>
        </div>

        {/* Komponen tanpa gap (space-y-0) */}
        <div className="space-y-0">
          <Services />
          <Price />
          
          {/* Detail Harga Section */}
          <section className="max-w-4xl mx-auto px-6 py-12">
            <div className="p-8 md:p-12 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">Detail & Ketentuan Harga</h3>
              <ul className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
                <li className="flex items-start gap-3"><span>•</span> Harga adalah estimasi awal dan bisa berubah sesuai material.</li>
                <li className="flex items-start gap-3"><span>•</span> Konsultasi WhatsApp gratis.</li>
                <li className="flex items-start gap-3"><span>•</span> Pembayaran bertahap sesuai progres.</li>
                <li className="flex items-start gap-3"><span>•</span> Garansi pemeliharaan tersedia.</li>
              </ul>
            </div>
          </section>

          {/* Stats langsung menempel di bawah detail harga */}
          <Stats />
        </div>
      </motion.div>

      {/* Footer - Diberi background solid agar tidak tertutup gambar/transparansi */}
      <div className="relative z-20 bg-black border-t border-white/10">
        <Footer />
      </div>
    </main>
  );
}