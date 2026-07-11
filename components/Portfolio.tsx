"use client";
import { motion } from 'framer-motion';
import Image from 'next/image'; // 1. Import Image

export default function Projects() {
  const projects = [
    // 2. Tambahkan property 'image' ke setiap objek
    { title: "Rumah Modern Minimalis", location: "Jakarta Selatan", size: "large", image: "/proyek1.jpeg" },
    { title: "Villa Bali Resort", location: "Bali", size: "small", image: "/proyek2.jpeg" },
    { title: "Ruko 3 Lantai", location: "Surabaya", size: "small", image: "/proyek3.jpeg" },
    { title: "Renovasi Rumah Classic", location: "Bandung", size: "small", image: "/proyek4.jpeg" },
    { title: "Kantor Modern", location: "Jakarta Pusat", size: "small", image: "/proyek5.jpeg" },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-medium mb-2">Proyek Unggulan</p>
          <h2 className="text-3xl md:text-4xl font-bold">Beberapa Hasil Karya Kami</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                project.size === "large" ? "md:col-span-2 md:row-span-2" : "md:col-span-2"
              }`}
            >
              {/* 3. Gunakan komponen Image */}
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              <div className="absolute bottom-6 left-6">
                <h4 className="text-xl font-bold">{project.title}</h4>
                <p className="text-gray-300 text-sm">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* ... bagian button tetap sama ... */}
    </section>
  );
}