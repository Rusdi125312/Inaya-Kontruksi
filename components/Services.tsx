"use client";
import { motion } from 'framer-motion';
import { PenTool, Hammer, Home, Briefcase } from 'lucide-react';

export default function Services() {
  const services = [
    { title: "Desain Rumah", icon: <PenTool size={40} />, desc: "Desain kreatif dan fungsional, mencerminkan kepribadian Anda dengan kualitas terbaik dan pendekatan inovatif." },
    { title: "Renovasi Rumah", icon: <Hammer size={40} />, desc: "Pembaharuan rumah menyeluruh, meningkatkan nilai dan kenyamanan dengan pengerjaan tepat waktu dan material unggul." },
    { title: "Pembangunan Rumah Baru", icon: <Home size={40} />, desc: "Proses pembangunan dari awal, mencakup desain, perencanaan, hingga eksekusi, menjadikan rumah impian Anda kenyataan." },
    { title: "Layanan Kontraktor", icon: <Briefcase size={40} />, desc: "Manajemen proyek profesional, memastikan kualitas dan efisiensi dalam setiap tahap konstruksi, dari awal hingga selesai." },
  ];

  return (
    <section id="layanan" className="py-5 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs font-bold mb-3">Layanan Kami</h3>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Solusi Konstruksi Profesional</h2>
        </div>

        <div className="flex flex-row md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-6 md:pb-0 scrollbar-hide">
          {services.map((service, index) => (
            <motion.div
              key={index}
              /* Pengaturan Animasi */
              initial={{ opacity: 0, y: 50 }} // Muncul dari bawah
              whileInView={{ opacity: 1, y: 0 }} // Menuju posisi asli
              viewport={{ once: true, margin: "-100px" }} // Animasi mulai saat card 100px masuk layar
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15, // Delay bertahap tiap card
                ease: [0.22, 1, 0.36, 1] // Easing 'smooth' ala profesional
              }}
              className="flex-none w-[260px] md:w-full p-8 bg-[#1a1a1a] border border-white/10 rounded-2xl hover:border-[#D4AF37] transition-all group"
            >
              <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}