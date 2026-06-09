"use client";
import { motion } from 'framer-motion';
import { Building2, Smile, CalendarDays, ShieldCheck } from 'lucide-react';

export default function Stats() {
  const stats = [
    { label: "Proyek Selesai", value: "150+", icon: <Building2 size={24} /> },
    { label: "Klien Puas", value: "100+", icon: <Smile size={24} /> },
    { label: "Tahun Pengalaman", value: "10+", icon: <CalendarDays size={24} /> },
    { label: "100% Komitmen", value: "100%", icon: <ShieldCheck size={24} /> },
  ];

  return (
    // py-8 (lebih ramping dari py-16)
    <section className="relative py-5 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/about-us.jpeg')" }}
      />
      <div className="absolute inset-0 z-0 bg-black/85 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* flex-row tanpa grid agar selalu berjejer ke samping */}
        <div className="flex flex-row items-center justify-between gap-6 overflow-x-auto pb-2 scrollbar-hide">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // flex-none memastikan elemen tidak mengecil di layar HP
              className="flex-none flex items-center gap-3 text-white"
            >
              <div className="text-right">
                {/* Ukuran font ditingkatkan agar lebih menonjol */}
                <h3 className="text-2xl md:text-4xl font-bold font-serif text-[#D4AF37]">
                  {stat.value}
                </h3>
                <p className="text-[10px] md:text-sm font-medium uppercase tracking-widest text-gray-200 whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
              <div className="text-[#D4AF37] opacity-90">
                {stat.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}