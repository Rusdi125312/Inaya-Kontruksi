"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // 1. Tambahkan AnimatePresence
import { Plus, X } from 'lucide-react'; // 2. Tambahkan ikon X
import { databases } from '@/lib/appwrite';
import { Query } from 'appwrite';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import Stats from "@/components/Stats";

export default function Portfolio() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // 3. State untuk lightbox

  useEffect(() => {
    databases.listDocuments('6a26e72000382e4d6a68', 'proyek', [
      Query.limit(6),
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
      <section id="proyek" className="py-12 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <motion.div className="text-center mb-10">
            <h3 className="text-[#D4AF37] tracking-[0.3em] uppercase text-[10px] font-bold mb-2">Portfolio</h3>
            <h2 className="text-2xl md:text-4xl font-serif font-bold">Karya Arsitektur Terbaru</h2>
          </motion.div>

          <div className="flex flex-row gap-5 overflow-x-auto pb-8 scrollbar-hide">
            {loading ? (
              <p className="text-gray-500 w-full text-center">Memuat proyek...</p>
            ) : projects.length > 0 ? (
              projects.map((project, index) => (
                <motion.div
                  key={project.$id}
                  onClick={() => setSelectedImage(project.gambar_id ? getImageUrl(project.gambar_id) : '/project1.jpg')} // 4. Klik untuk buka gambar
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -10 }}
                  className="flex-none w-[220px] md:w-[300px] h-[350px] relative overflow-hidden rounded-2xl border border-white/5 bg-[#111] group cursor-pointer"
                >
                  <div className="relative w-full h-[250px] overflow-hidden">
                    <img 
                      src={project.gambar_id ? getImageUrl(project.gambar_id) : '/project1.jpg'}
                      alt={project.nama_proyek}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 bg-[#D4AF37] p-2 rounded-full scale-0 group-hover:scale-100 transition-transform text-black">
                    <Plus size={16} strokeWidth={3} />
                  </div>
                  <div className="absolute bottom-0 left-0 p-5 w-full">
                    <h4 className="text-sm md:text-xl font-bold mt-1 text-white">{project.nama_proyek}</h4>
                    <p className="text-[10px] text-gray-400">{project.lokasi}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 w-full text-center">Belum ada proyek tersedia.</p>
            )}
          </div>
        </div>
      </section>


      {/* 5. Komponen Lightbox Full Screen */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-white" onClick={() => setSelectedImage(null)}>
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage} 
              alt="Full Preview" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Stats />
      <Footer />
    </main>
  );
}