"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Tentang', href: '/about' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Proyek', href: '/portfolio' },
    { label: 'Kontak', href: '/kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* Logo - Kiri */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-inaya.png" alt="Logo" width={40} height={40} className="w-10 h-10" />
          <div className="hidden md:block">
            <h1 className="text-[#D4AF37] font-bold text-lg leading-none tracking-wider">INAYA</h1>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase">Konstruksi</p>
          </div>
        </Link>

        {/* Menu Navigasi - Tengah */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                pathname === item.href ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Tombol Konsultasi - Kanan */}
        <a 
          href="https://wa.me/6285724964609" 
          className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all rounded-full"
        >
          Konsultasi
        </a>

      </div>
    </nav>
  );
}