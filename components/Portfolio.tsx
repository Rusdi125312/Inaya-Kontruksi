"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  
  const categories = ["Semua", "Rumah", "Komersial", "Renovasi"];
  
  const projects = [
    { title: "Rumah Modern Minimalis", category: "Rumah", location: "Jakarta Selatan", size: "large" },
    { title: "Villa Bali Resort", category: "Komersial", location: "Bali", size: "small" },
    { title: "Ruko 3 Lantai", category: "Komersial", location: "Surabaya", size: "small" },
    { title: "Renovasi Rumah Classic", category: "Renovasi", location: "Bandung", size: "small" },
    { title: "Kantor Modern", category: "Komersial", location: "Jakarta Pusat", size: "small" },
  ];

  const filteredProjects = activeCategory === "Semua" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header & Filter */}
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-medium mb-2">Proyek Unggulan</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Beberapa Hasil Karya Kami</h2>
          
          <div className="flex justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full border text-sm transition-all ${
                  activeCategory === cat 
                  ? "bg-[#D4AF37] text-black border-[#D4AF37]" 
                  : "bg-transparent border-white/20 text-white hover:border-white/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                  project.size === "large" ? "md:col-span-2 md:row-span-2" : "md:col-span-2"
                }`}
              >
                <div className="absolute inset-0 bg-gray-800" /> {/* Placeholder Gambar */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-xl font-bold">{project.title}</h4>
                  <p className="text-gray-300 text-sm">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      {/* Tombol Lihat Lainnya */}
<div className="flex justify-center mt-12">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-3 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 rounded-full font-bold text-sm"
  >
    Lihat Semua Proyek
  </motion.button>
</div>
    </section>
  );
}