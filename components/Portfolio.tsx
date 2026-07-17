"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    { title: "Besar", image: "/proyek111.jpeg" },
    { title: "Kecil 1", image: "/proyek222.jpeg" },
    { title: "Kecil 2", image: "/proyek333.jpeg" },
    { title: "Kecil 3", image: "/proyek444.jpeg" },
    { title: "Kecil 4", image: "/proyek555.jpeg" },
  ];

  return (
    <section className="py-12 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Hasil Karya Kami</h2>
        </div>

        {/* Gunakan grid agar lebih mudah mengelola layout responsif */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Gambar Besar (Kiri) - Menggunakan aspect-video agar mengikuti rasio asli */}
          <motion.div 
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            <Image 
              src={projects[0].image} 
              alt={projects[0].title} 
              fill 
              className="object-cover" 
            />
          </motion.div>

          {/* Grid 4 Gambar Kecil (Kanan) */}
          <div className="grid grid-cols-2 gap-4">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={index}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-12">
        <a href="/portfolio" className="px-8 py-3 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 rounded-full font-bold text-sm">
          Lihat Semua Proyek
        </a>
      </div>
    </section>
  );
}