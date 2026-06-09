"use client";
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    { title: "Desain Sederhana", price: "Rp 5jt" },
    { title: "Desain Lengkap", price: "Rp 15jt" },
    { title: "Kontraktor+", price: "Custom" },
  ];

  // Fungsi untuk handle klik WA
  const handleWhatsApp = (title: string, price: string) => {
    const phoneNumber = "628720937430"; // Ganti dengan nomor WA Anda (tanpa + atau 0)
    const message = `Halo Inaya Konstruksi, saya tertarik dengan paket ${title} seharga ${price}. Bisa bantu jelaskan lebih lanjut?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="harga" className="py-12 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-10">
          <h3 className="text-[#D4AF37] tracking-[0.3em] uppercase text-[10px] font-bold mb-2">Investasi</h3>
          <h2 className="text-3xl font-serif font-bold">Harga Layanan Kami</h2>
        </div>

        <div className="flex flex-row flex-nowrap items-stretch justify-center gap-6 w-full">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-none w-[280px] p-8 bg-[#111] border border-white/10 rounded-2xl hover:border-[#D4AF37] transition-all"
            >
              <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-2">{plan.title}</h4>
              <h2 className="text-3xl font-bold text-[#D4AF37] mb-6">{plan.price}</h2>
              
              {/* Tombol yang memanggil fungsi WhatsApp */}
              <button 
                onClick={() => handleWhatsApp(plan.title, plan.price)}
                className="w-full py-2 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all"
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