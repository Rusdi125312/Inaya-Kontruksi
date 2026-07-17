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
        <img 
          src="/header22.png" 
          alt="Inaya Konstruksi Banner" 
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
}