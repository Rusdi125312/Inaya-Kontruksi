"use client";
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    { name: "Budi Santoso", job: "Jakarta", text: "Hasil pekerjaan sangat memuaskan, tim profesional dan selalu tepat waktu." },
    { name: "Dewi Lestari", job: "Bandung", text: "Pelayanan terbaik dari Inaya Konstruksi. Hasil renovasi melebihi ekspektasi." },
    { name: "Fajar Nugroho", job: "Surabaya", text: "Proses pembangunan kantor kami sangat lancar dan hasilnya luar biasa." },
  ];

  return (
    <section className="py-24 bg-gray-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-white mb-16 text-center">Apa Kata Klien Kami</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-gray-950 border border-white/5"
            >
              <div className="text-gold mb-4 text-sm">★★★★★</div>
              <p className="text-gray-400 mb-6 italic">"{r.text}"</p>
              <div className="font-bold text-white">{r.name}</div>
              <div className="text-xs text-yellow-600 uppercase tracking-widest">{r.job}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}