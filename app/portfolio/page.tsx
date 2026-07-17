"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { databases } from '@/lib/appwrite';
import { Query } from 'appwrite';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import Stats from "@/components/Stats";

export default function Portfolio() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    databases.listDocuments('6a26e72000382e4d6a68', 'proyek', [
      Query.limit(20),
      Query.orderDesc('$createdAt')
    ])
    .then((response) => {
      setProjects(response.documents);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Gagal memuat proyek:", err);
      setLoading(false);
    });
  }, []);

  const getImageUrl = (fileId: string) => {
    return `https://sgp.cloud.appwrite.io/v1/storage/buckets/6a26ee780011c928a8a5/files/${fileId}/view?project=6a26e47900199ad9c2cb`;
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      
      <section id="proyek" className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-10">
            <h3 className="text-[#D4AF37] tracking-[0.3em] uppercase text-[10px] font-bold mb-2">Portfolio</h3>
            <h2 className="text-2xl md:text-4xl font-serif font-bold">Karya Arsitektur Terbaru</h2>
          </motion.div>

          {/* Galeri Grid - Dibuat lebih lebar dengan grid responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <p className="text-gray-500 w-full text-center col-span-full">Memuat proyek...</p>
            ) : projects.length > 0 ? (
              projects.map((project) => (
                <motion.div
                  key={project.$id}
                  onClick={() => setSelectedImage(project.gambar_id ? getImageUrl(project.gambar_id) : '/project1.jpg')}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  className="w-full aspect-[4/3] relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] cursor-pointer"
                >
                  {/* object-contain memastikan seluruh gambar terlihat tanpa terpotong */}
                  <img 
                    src={project.gambar_id ? getImageUrl(project.gambar_id) : '/project1.jpg'}
                    alt="proyek"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 w-full text-center col-span-full">Belum ada proyek tersedia.</p>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox - Fullscreen */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-2"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-5 right-5 z-[101] text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all" 
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage} 
              alt="Full Preview" 
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Stats />
      <Footer />
    </main>
  );
}