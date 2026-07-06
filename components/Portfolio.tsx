"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Plus } from 'lucide-react';

export default function Projects() {
  const projects = [
    { title: "Rumah Minimalis", category: "Arsitektur", image: "/project1.jpg" },
    { title: "Renovasi Villa", category: "Renovasi", image: "/project2.jpg" },
    { title: "Kantor Modern", category: "Konstruksi", image: "/project3.jpg" },
    { title: "Interior Klasik", category: "Interior", image: "/project4.jpg" },
  ];

  // Varian animasi untuk Container (Header & Tombol)
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="proyek" className="py-12 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header dengan Animasi Muncul */}
       <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp as any} // Pastikan variabel fadeInUp ada di atas
          className="text-center mb-10"
        >
          <h3 className="text-[#D4AF37] tracking-[0.3em] uppercase text-[10px] font-bold mb-2">Portfolio</h3>
          <h2 className="text-2xl md:text-4xl font-serif font-bold">Karya Arsitektur Terbaru</h2>
          <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-4"></div>
        </motion.div>

        {/* Horizontal Scroll Grid dengan Animasi Stagger */}
        <div className="flex flex-row gap-5 overflow-x-auto pb-8 scrollbar-hide">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15, // Muncul satu per satu
                ease: "backOut" 
              }}
              whileHover={{ y: -10 }} // Efek melayang saat hover
              className="flex-none w-[220px] md:w-[300px] h-[350px] relative overflow-hidden rounded-2xl border border-white/5 group bg-[#111]"
            >
              {/* Gambar dengan Efek Zoom & Filter */}
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Overlay Gradien lebih pekat saat hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Ikon Plus yang muncul saat hover (Eye Candy) */}
              <div className="absolute top-4 right-4 bg-[#D4AF37] p-2 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 text-black">
                <Plus size={16} strokeWidth={3} />
              </div>

              {/* Konten Teks dengan Animasi Slide Up */}
              <div className="absolute bottom-0 left-0 p-5 w-full transform transition-transform duration-500">
                <motion.span 
                  className="text-[#D4AF37] text-[9px] uppercase tracking-[0.2em] font-black"
                >
                  {project.category}
                </motion.span>
                <h4 className="text-sm md:text-xl font-bold mt-1 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                  {project.title}
                </h4>
                
                {/* Garis dekoratif yang memanjang saat hover */}
                <div className="w-0 group-hover:w-full h-[1px] bg-[#D4AF37]/50 mt-3 transition-all duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tombol Selengkapnya dengan Animasi Pulse */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp as any}
          className="flex justify-center mt-6"
        >
          <motion.a 
            href="/portfolio" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-3 bg-transparent border border-[#D4AF37] text-[#D4AF37] text-xs font-bold rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-500"
          >
            Jelajahi Semua Proyek 
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section> // Pastikan tidak ada penutup footer yang salah, ini tetap section
  );
}