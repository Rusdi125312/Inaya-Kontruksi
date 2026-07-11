"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Globe, MessageCircle, Music, Camera } from 'lucide-react';

export default function Footer() {
  const socials = [
    { name: "TIKTOK", value: "inaya_konstruksi_sukabu1", icon: <Music size={20} />, href: "#" },
    { name: "INSTAGRAM", value: "Gunstravis14", icon: <Camera size={20} />, href: "#" },
    { name: "WEBSITE", value: "www.inayakonstruksi.com", icon: <Globe size={20} />, href: "/" },
    { name: "WHATSAPP", value: "0857-2496-4609", icon: <MessageCircle size={20} />, href: "https://wa.me/6285724964609" },
  ];

  return (
    <footer className="pt-16 pb-8 bg-[#050505] border-t border-[#D4AF37]/20">
      
      {/* Social Bar - Dibuat Responsive */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* grid-cols-1 di mobile, grid-cols-2 di tablet, grid-cols-4 di desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-[#D4AF37]/30 divide-y sm:divide-y-0 sm:divide-x divide-[#D4AF37]/30">
          {socials.map((s, idx) => (
            <a 
              key={idx} 
              href={s.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 p-6 hover:bg-[#D4AF37]/5 transition-colors min-w-0"
            >
              <div className="text-[#D4AF37] flex-shrink-0">{s.icon}</div>
              <div className="min-w-0"> 
                <p className="text-[10px] text-[#D4AF37] tracking-[0.2em] font-bold uppercase">{s.name}</p>
                {/* truncate memastikan teks panjang tidak meluber ke luar */}
                <p className="text-xs text-white/80 truncate">{s.value}</p> 
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer Utama */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Konten Footer tetap sama ... */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image src="/logo-inaya.png" alt="Logo" width={40} height={40} />
            <span className="font-serif font-bold text-[#D4AF37] text-lg">INAYA</span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
            Inaya Konstruksi adalah mitra terpercaya untuk mewujudkan hunian impian Anda dengan standar kualitas tertinggi.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif font-bold text-[#D4AF37] uppercase tracking-widest text-sm">Alamat Kantor</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Jl. Lebak Siuh 2 RT 28/10, Desa Sukamaju, Kec. Kadudampit. Sukabumi, Jawa Barat 43153.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif font-bold text-[#D4AF37] uppercase tracking-widest text-sm">Informasi</h3>
          <div className="text-gray-400 text-xs space-y-2">
            <p>📞 081384812919</p>
            <p>✉️ gunstravis14@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 text-[10px] text-gray-700 uppercase tracking-widest">
        <p>© 2026 Inaya Konstruksi. All rights reserved.</p>
      </div>
    </footer>
  );
}