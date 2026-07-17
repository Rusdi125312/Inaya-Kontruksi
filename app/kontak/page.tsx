import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen flex flex-col">
      
      {/* Navbar Fixed */}
      <Navbar />

      {/* 
        Hero Section Kontak
        pt-56 memberikan ruang kosong yang cukup di atas agar teks 
        terbebas dari Navbar yang melayang.
      */}
      <section className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center text-center px-6 overflow-hidden flex-grow">
        
        {/* Latar Belakang Gambar & Overlay (Hanya terbatas di dalam section ini) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/about-us2.jpeg" 
            alt="Background Kontak" 
            className="w-full h-full object-cover opacity-20" 
          />
          {/* Gradient agar transisi ke bawah menyatu dengan Footer yang hitam */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </div>

        {/* Konten Utama (Teks) */}
        <div className="relative z-10 mt-5">
          <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-bold mb-4 block">
            Hubungi Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Kontak Kami
          </h1>
          <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base leading-relaxed">
            Kami siap mewujudkan hunian impian Anda. Silakan hubungi tim kami untuk konsultasi lebih lanjut.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* Tombol Floating WhatsApp */}
      <a 
        href="https://wa.me/6285724964609" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
        aria-label="Hubungi via WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      
    </main>
  );
}