"use client";
import { motion } from 'framer-motion';
import { Building2, Smile, CalendarDays, ShieldCheck } from 'lucide-react';

export default function Stats() {
  const stats = [
    { label: "Proyek", value: "150+", icon: <Building2 size={20} /> },
    { label: "Klien", value: "100+", icon: <Smile size={20} /> },
    { label: "Pengalaman", value: "10+", icon: <CalendarDays size={20} /> },
    { label: "Komitmen", value: "100%", icon: <ShieldCheck size={20} /> },
  ];

  return (
    <section className="relative py-8 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/about-us.jpeg')" }}
      />
      <div className="absolute inset-0 z-0 bg-black/85 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Menggunakan grid untuk layout yang lebih stabil di mobile dan desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 text-white text-center md:text-left"
            >
              {/* Icon di atas untuk mobile, di samping untuk desktop */}
              <div className="text-[#D4AF37] opacity-90">
                {stat.icon}
              </div>
              
              <div>
                <h3 className="text-xl md:text-3xl font-bold font-serif text-[#D4AF37]">
                  {stat.value}
                </h3>
                <p className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-gray-300">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}