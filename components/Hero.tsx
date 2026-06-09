"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col pt-16 overflow-hidden bg-black">
      
      {/* Background dengan Animasi Zoom-Out */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.5, ease: "easeOut" }} 
        className="absolute inset-0 z-0 bg-black"
      >
        <img 
          src="/hero-bg.jpeg" 
          alt="Inaya Konstruksi" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </motion.div>

      {/* Kontainer Utama */}
      {/* pt-20 menaikkan konten, md:pl-24 menggeser konten ke kanan di desktop */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-10 md:pt-0 md:justify-center md:pl-24"
      >
        {/* Konten Mobile: w-full untuk mencegah zoom-in paksa, max-w-[90%] agar tidak mentok kiri */}
        <div className="w-full max-w-[90%] sm:max-w-xl"> 
          
          <motion.span 
            className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs md:text-sm mb-3 block font-bold"
          >
            Inaya Konstruksi
          </motion.span>
        
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.05]"
          >
            Membangun Masa Depan <br /> 
            <span className="text-[#D4AF37]">Dengan Kualitas Terbaik</span>
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-xl text-gray-300 mb-10 max-w-sm md:max-w-lg leading-relaxed"
          >
            Solusi konstruksi profesional untuk hunian dan bangunan komersial dengan standar kualitas tinggi.
          </motion.p>
          
                    {/* Tombol: flex-row memastikan tetap berjejer ke samping di semua ukuran layar */}
       <motion.div 
  className="flex flex-row gap-3 w-full"
>
  {/* Gunakan max-w-[150px] agar tombol tidak melebar melebihi batas yang diinginkan */}
  <button className="flex-1 max-w-[150px] px-2 py-3 bg-[#D4AF37] text-black font-bold text-[11px] sm:text-sm rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap overflow-hidden text-ellipsis">
    Konsultasi Gratis
  </button>
  
  <button className="flex-1 max-w-[150px] px-2 py-3 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold text-[11px] sm:text-sm rounded-lg hover:bg-white/10 transition-all whitespace-nowrap overflow-hidden text-ellipsis">
    Lihat Proyek
  </button>
</motion.div>
        </div>
      </motion.div>
    </section>
  );
}