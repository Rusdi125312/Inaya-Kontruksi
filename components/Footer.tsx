"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="pt-12 pb-8 bg-[#050505] border-t border-[#D4AF37]/20">
      
      {/* Bagian Call to Action (Sesuai Gambar) */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-[#1a232e] p-8 rounded-2xl flex flex-row items-center justify-between">
          <div>
            <p className="text-white/70 text-xs uppercase tracking-widest mb-1">We Are Here To Assist You</p>
            <h3 className="text-xl md:text-3xl font-bold text-white">CONTACT US TODAY</h3>
          </div>
        <button 
            onClick={() => window.open("https://wa.me/6285720934430?text=Halo%20Inaya%20Konstruksi,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20konstruksi.", "_blank")}
            className="bg-[#D4AF37] text-black px-6 py-3 font-bold text-xs rounded hover:bg-white transition-all whitespace-nowrap"
          >
            Konsultasi Sekarang
      </button>
        </div>
      </div>

      {/* Footer Utama - Flex-nowrap agar tidak turun ke bawah */}
      <div className="max-w-7xl mx-auto px-6 flex flex-row flex-nowrap justify-between gap-12">
        
        {/* Kolom 1: Logo & Deskripsi */}
        <div className="flex-none w-[250px]">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo-inaya.png" alt="Logo" width={40} height={40} />
            <span className="font-serif font-bold text-[#D4AF37] text-lg tracking-wider">INAYA</span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Inaya Konstruksi adalah perusahaan konstruksi terkemuka yang menyediakan layanan desain rumah, renovasi, dan pembangunan rumah baru.
          </p>
        </div>

        {/* Kolom 2: Alamat */}
        <div className="flex-none w-[250px]">
          <h3 className="font-serif font-bold text-[#D4AF37] mb-4 uppercase tracking-widest text-sm">Alamat</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Kantor :<br/>
            Jl. Lebak siuh 2 RT 28/10, desa sukamaju Kec Kadudampit. Sukabumi, Jawa Barat 43153
          </p>
        </div>

        {/* Kolom 3: Kontak */}
        <div className="flex-none w-[200px]">
          <h3 className="font-serif font-bold text-[#D4AF37] mb-4 uppercase tracking-widest text-sm">Kontak</h3>
          <div className="text-gray-400 text-xs space-y-3">
            <p>📞 081384812919</p>
            <p>✉️ gunstravis14@gmail.com</p>
            <p>💬 085724964609</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 pt-6 border-t border-white/5 text-[10px] text-gray-700 uppercase tracking-widest">
        <p>© 2026 Inaya Konstruksi. All rights reserved.</p>
        <Link href="/admin/login" className="hover:text-gray-500" style={{ opacity: 0.05 }}>
          Admin Access
        </Link>
      </div>
    </footer>
  );
}
        
