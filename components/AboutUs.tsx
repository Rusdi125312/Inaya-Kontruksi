"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, CheckCircle, Clock, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="tentang" className="py-5 bg-black text-white overflow-hidden">
      {/* Container utama: flex-col untuk mobile, md:flex-row untuk desktop */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        
        {/* Gambar - Responsive width */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full md:w-1/2" 
        >
          <div className="overflow-hidden rounded-lg">
            <Image 
              src="/about-us2.jpeg" 
              alt="Tentang Inaya Konstruksi" 
              width={650} 
              height={450} 
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Konten - Center di mobile, Left di desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <span className="text-[#D4AF37] tracking-[0.2em] uppercase text-[10px] md:text-xs mb-3 block font-bold">Tentang Kami</span>
          
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4 md:mb-6 leading-tight">
            Mitra Terpercaya Untuk <br className="hidden md:block" /> 
            <span className="text-[#D4AF37]">Setiap Proyek Anda</span>
          </h2>
          
          <p className="text-xs md:text-base text-gray-400 mb-6 md:mb-8 leading-relaxed max-w-lg">
            Inaya Konstruksi adalah perusahaan yang bergerak di bidang jasa Desain Arsitektur, Kontruksi, Renovasi dan Pengembangan Bangunan dengan komitmen tinggi terhadap kualitas, ketepatan waktu dan kepuasan klien.
          </p>

          <div className="flex flex-row flex-wrap gap-3 justify-center md:justify-start">
            {[
              { label: 'Profesional', icon: <Award size={16} /> },
              { label: 'Berkualitas', icon: <CheckCircle size={16} /> },
              { label: 'Tepat Waktu', icon: <Clock size={16} /> },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-1.5 text-[10px] md:text-sm text-gray-200 bg-white/5 px-3 py-2 rounded-md border border-white/10">
                <span className="text-[#D4AF37]">{item.icon}</span> 
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a 
              href="/about" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold text-[10px] md:text-sm rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              Selengkapnya 
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}