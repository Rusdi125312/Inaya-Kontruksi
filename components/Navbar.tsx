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
    { label: 'Kontak', href: '/#kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="grid grid-cols-[auto_1fr_auto] items-center px-4 h-16 gap-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-none">
          <Image src="/logo-inaya.png" alt="Inaya Logo" width={32} height={32} className="h-8 w-auto" />
          <div className="hidden sm:flex flex-col">
            <span className="text-[#D4AF37] font-serif font-bold text-sm leading-none">Inaya</span>
            <span className="text-[#D4AF37] font-serif font-bold text-sm leading-none">Konstruksi</span>
          </div>
        </Link>

        {/* Menu Navigasi */}
        <div className="flex items-center gap-x-4 md:gap-x-8 overflow-x-auto whitespace-nowrap scrollbar-hide justify-start md:justify-center px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.label} 
                href={item.href}
                className={`text-[10px] md:text-xs font-bold transition-colors duration-300 ${
                  isActive ? 'text-[#D4AF37] border-b border-[#D4AF37]' : 'text-gray-200 hover:text-[#D4AF37]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Tombol Konsultasi */}
        <a 
          href="https://wa.me/6285724964609" 
          className="flex-none border border-[#D4AF37] text-[#D4AF37] px-3 py-1.5 md:px-5 text-[10px] md:text-xs hover:bg-[#D4AF37] hover:text-black font-bold transition rounded shadow-lg"
        >
          Konsultasi
        </a>

      </div>
    </nav>
  );
}