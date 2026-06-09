"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Wajib import ini
import { usePathname } from 'next/navigation'; // Wajib import ini

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Mendeteksi URL aktif

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Tentang', href: '/about' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Proyek', href: '/portfolio' }, // Tambahkan / agar konsisten
    { label: 'Galeri', href: '/#galeri' }, // Tambahkan / agar konsisten
    { label: 'Kontak', href: '/#kontak' }, // Tambahkan / agar konsisten
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 border-b border-white/10 py-2' : 'bg-transparent py-3'}`}>
      <div className="flex flex-nowrap items-center justify-between px-4 w-full">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-none">
          <Image src="/logo-inaya.png" alt="Inaya Konstruksi Logo" width={160} height={40} className="h-10 w-auto" />
          <div className="flex flex-col">
            <span className="text-[#D4AF37] font-serif font-bold text-sm leading-none">Inaya</span>
            <span className="text-[#D4AF37] font-serif font-bold text-sm leading-none">Konstruksi</span>
          </div>
        </Link>

        {/* Menu Navigasi */}
        <div className="flex flex-nowrap items-center gap-x-4 md:gap-x-8 text-[12px] font-bold text-gray-200 mx-4">
          {navItems.map((item) => {
            // Logika aktif: jika pathname cocok dengan href
            const isActive = pathname === item.href;

            return (
              <Link 
                key={item.label} 
                href={item.href}
                className={`whitespace-nowrap transition-colors duration-300 ${
                  isActive 
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' 
                  : 'hover:text-[#D4AF37]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Tombol Konsultasi */}
        <a href="https://wa.me/6285720937430" className="border border-[#D4AF37] text-[#D4AF37] px-4 py-2 text-[12px] hover:bg-[#D4AF37] hover:text-black font-bold transition rounded shadow-lg">
          Konsultasi
        </a>
      </div>
    </nav>
  );
}