"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, CheckCircle, Clock, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="tentang" className="py-10 bg-black text-white overflow-hidden">
      {/* flex-nowrap memastikan elemen tidak turun ke bawah meski layar kecil */}
      <div className="max-w-7xl mx-auto px-6 flex flex-row flex-nowrap gap-6 md:gap-12 items-center">
        
        {/* Gambar - Dibuat w-1/2 (setengah) secara permanen */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-1/2 h-full" 
        >
          <Image 
            src="/about-us.jpeg" 
            alt="Tentang Inaya Konstruksi" 
            width={650} 
            height={450} 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Konten - Dibuat w-1/2 (setengah) secara permanen */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-none w-1/2"
        >
          <span className="text-[#D4AF37] tracking-[0.2em] uppercase text-[8px] md:text-xs mb-3 block font-bold">Tentang Kami</span>
          <h2 className="text-xl md:text-4xl font-serif font-bold mb-4 md:mb-6 leading-tight">
            Mitra Terpercaya Untuk <br /> <span className="text-[#D4AF37]">Setiap Proyek Anda</span>
          </h2>
          <p className="text-[10px] md:text-base text-gray-400 mb-6 md:mb-8 leading-relaxed">
            Inaya Konstruksi adalah perusahaan yang bergerak di bidang jasa Desain Arsitektur, Kontruksi, Renovasi dan Pengembangan Bangunan dengan komitmen tinggi terhadap kualitas, ketepatan waktu dan kepuasan klien.
          </p>

         <div className="flex flex-row flex-wrap gap-x-4 gap-y-2 mt-8 justify-center md:justify-start">
            {[
              { label: 'Profesional', icon: <Award size={16} /> },
              { label: 'Berkualitas', icon: <CheckCircle size={16} /> },
              { label: 'Tepat Waktu', icon: <Clock size={16} /> },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-1.5 text-xs md:text-sm text-gray-200 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                <span className="text-[#D4AF37]">{item.icon}</span> 
                <span className="whitespace-nowrap font-medium">{item.label}</span>
              </div>
            ))}
          </div>

       <div className="mt-6 md:mt-10">
        <a 
          href="/about" // Sesuaikan dengan folder baru Anda (app/about/page.tsx)
          className="inline-flex items-center gap-2 px-3 md:px-8 py-2 md:py-3 border border-[#D4AF37] text-[#D4AF37] font-bold text-[9px] md:text-sm rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
        >
          Selengkapnya 
          <ArrowRight size={12} />
        </a>
      </div>
        </motion.div>
      </div>
    </section>
  );
}