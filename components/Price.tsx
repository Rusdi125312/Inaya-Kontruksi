"use client";
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    { 
      title: "Desain Sederhana", 
      price: "Rp 5jt", 
      features: ["Denah 2D", "Tampak Depan 3D", "Revisi 2x"] 
    },
    { 
      title: "Desain Lengkap", 
      price: "Rp 15jt", 
      features: ["Denah 2D & 3D", "Render Interior", "Gambar Kerja", "Revisi 5x"] 
    },
    { 
      title: "Kontraktor+", 
      price: "Custom", 
      features: ["Manajemen Proyek", "Material Premium", "Laporan Harian", "Konsultasi 24/7"] 
    },
  ];

  const handleWhatsApp = (title: string, price: string) => {
    const phoneNumber = "628720937430";
    const message = `Halo Inaya Konstruksi, saya tertarik dengan paket ${title} seharga ${price}. Bisa bantu jelaskan lebih lanjut?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="harga" className="py-5 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-bold mb-3">Investasi</h3>
          <h2 className="text-3xl md:text-5xl font-serif font-bold">Harga Layanan Kami</h2>
        </div>

        {/* Grid: 1 kolom di mobile, 3 kolom di desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }} // Efek melayang saat hover
              className="p-8 bg-[#111] border border-white/10 rounded-3xl hover:border-[#D4AF37] transition-all flex flex-col"
            >
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2">{plan.title}</h4>
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-8">{plan.price}</h2>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check size={18} className="text-[#D4AF37]" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleWhatsApp(plan.title, plan.price)}
                className="w-full py-4 border border-[#D4AF37] text-[#D4AF37] font-bold rounded-xl hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                Pilih Paket
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}