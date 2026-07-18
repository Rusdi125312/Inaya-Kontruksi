"use client";
import { motion } from 'framer-motion';

export default function BannerHeader() {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Gambar untuk Desktop (muncul di layar md ke atas) */}
        <img 
          src="/heade23.png" 
          alt="Inaya Konstruksi Banner" 
          className="hidden md:block w-full h-auto object-cover"
        />

        {/* Gambar untuk Mobile (muncul di layar di bawah md) */}
        <img 
          src="/heade23.png" 
          alt="Inaya Konstruksi Banner" 
          className="md:hidden w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
}