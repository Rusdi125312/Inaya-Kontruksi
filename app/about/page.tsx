"use client";
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import { Award, CheckCircle, Clock } from 'lucide-react';
import Stats from "@/components/Stats";

export default function AboutUs() {
  const isDetail = true;

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Container Section dibuat relative agar bisa menampung background absolute */}
      <section id="tentang" className={`relative py-16 ${isDetail ? 'pt-32' : ''}`}>
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <img 
              src="/hero-bg.jpeg" 
              alt="Inaya Konstruksi Background" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-black/80" /> {/* Overlay gelap untuk keterbacaan teks */}
          </motion.div>
        </div>

        {/* Content Layer (z-10 memastikan konten di atas background) */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col gap-8 items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center"
          >
            <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-[10px] md:text-xs mb-3 block font-bold">Tentang Kami</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6 leading-tight">
              Mitra Terpercaya Untuk <br /> <span className="text-[#D4AF37]">Setiap Proyek Anda</span>
            </h2>
            
            <p className="text-xs md:text-base text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Inaya Konstruksi adalah perusahaan yang bergerak di bidang jasa Desain Arsitektur, Kontruksi, Renovasi dan Pengembangan Bangunan dengan komitmen tinggi terhadap kualitas, ketepatan waktu dan kepuasan klien.
            </p>

            {/* Fitur */}
            <div className="flex flex-row flex-wrap gap-4 justify-center mb-10">
              {[
                { label: 'Profesional', icon: <Award size={16} /> },
                { label: 'Berkualitas', icon: <CheckCircle size={16} /> },
                { label: 'Tepat Waktu', icon: <Clock size={16} /> },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-xs md:text-sm text-gray-200 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                  <span className="text-[#D4AF37]">{item.icon}</span> 
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Visi Misi */}
            <div className="grid md:grid-cols-2 gap-8 w-full text-left">
              <div className="p-8 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md">
                <h4 className="text-[#D4AF37] font-bold mb-3">Visi Kami</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Menjadi mitra konstruksi terpercaya di Sukabumi dengan mengutamakan kualitas, ketepatan waktu, dan kepuasan klien di atas segalanya.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md">
                <h4 className="text-[#D4AF37] font-bold mb-3">Misi Kami</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Memberikan pelayanan desain hingga pembangunan dengan material premium dan tenaga kerja ahli yang berdedikasi tinggi.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Stats />
      <Footer />
    </main>
  );
}