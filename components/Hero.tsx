"use client";
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react'; // Import ikon yang dibutuhkan
import Portfolio from '@/components/Portfolio';

export default function Hero() {
  const handleScroll = () => {
    document.getElementById('proyek-kami')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative min-h-[85vh] w-full flex flex-col pt-20 pb-10 overflow-hidden bg-black">
      
      {/* Background */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
      </motion.div>

      {/* Kontainer Utama */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center h-full"
      >
        <div className="w-full max-w-2xl"> 
          
          <motion.span 
            className="text-[#D4AF37] tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-3 block font-bold"
          >
            Inaya Konstruksi
          </motion.span>
        
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-5 leading-[1.1]"
          >
            Membangun Masa Depan <br /> 
            <span className="text-[#D4AF37]">Dengan Kualitas Terbaik</span>
          </motion.h1>
          
          <motion.p 
            className="text-sm sm:text-base md:text-xl text-gray-300 mb-8 max-w-md leading-relaxed"
          >
            Solusi konstruksi profesional untuk hunian dan bangunan komersial dengan standar kualitas tinggi.
          </motion.p>
          
          {/* Tombol dengan Ikon */}
          <motion.div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            {/* Tombol Konsultasi dengan Icon WA */}
            <a 
          href="https://wa.me/6285724964609"  className="flex items-center justify-center gap-2 w-full sm:w-48 px-6 py-3 bg-[#D4AF37] text-black font-bold text-sm rounded-lg hover:bg-[#b8972f] transition-all">
              <MessageCircle size={18} />
              Konsultasi
            </a>
            
            {/* Tombol Lihat Proyek dengan Icon Panah */}
  <a href='/projek'
      
      className="flex items-center justify-center gap-2 w-full sm:w-48 px-6 py-3 bg-white/5 border border-white/20 text-white font-bold text-sm rounded-lg hover:bg-white/10 transition-all cursor-pointer"
    >
      Proyek Kami
      <ArrowRight size={18} />
    </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}