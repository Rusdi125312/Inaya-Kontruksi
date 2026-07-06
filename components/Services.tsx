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
    <section id="layanan" className="py-5 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs font-bold mb-3">Layanan Kami</h3>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Solusi Konstruksi Profesional</h2>
        </div>

        {/* PERUBAHAN UTAMA: 
           - Gunakan grid-cols-1 untuk mobile (stacking vertikal).
           - Gunakan sm:grid-cols-2 untuk tablet.
           - Gunakan md:grid-cols-4 untuk desktop.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="p-8 bg-[#1a1a1a] border border-white/10 rounded-2xl hover:border-[#D4AF37] transition-all group flex flex-col items-center text-center md:items-start md:text-left"
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