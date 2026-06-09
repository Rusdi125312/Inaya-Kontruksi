"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { databases } from '@/lib/appwrite';
import { Query } from 'appwrite';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import Stats from "@/components/Stats";

export default function Portfolio() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  // Fungsi pembantu untuk membuat URL gambar yang FIX
  // Menggunakan endpoint sgp.cloud.appwrite.io sesuai dengan lib/appwrite.ts Anda
  const getImageUrl = (fileId: string) => {
    return `https://sgp.cloud.appwrite.io/v1/storage/buckets/6a26ee780011c928a8a5/files/${fileId}/view?project=6a26e47900199ad9c2cb`;
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section id="proyek" className="py-12 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="text-[#D4AF37] tracking-[0.3em] uppercase text-[10px] font-bold mb-2">Portfolio</h3>
            <h2 className="text-2xl md:text-4xl font-serif font-bold">Karya Arsitektur Terbaru</h2>
            <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-4"></div>
          </motion.div>

          <div className="flex flex-row gap-5 overflow-x-auto pb-8 scrollbar-hide">
            {loading ? (
              <p className="text-gray-500 w-full text-center">Memuat proyek...</p>
            ) : projects.length > 0 ? (
              projects.map((project, index) => (
                <motion.div
                  key={project.$id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="flex-none w-[220px] md:w-[300px] h-[350px] relative overflow-hidden rounded-2xl border border-white/5 bg-[#111] group"
                >
                  <div className="relative w-full h-[250px] overflow-hidden">
                    <img 
                      src={project.gambar_id ? getImageUrl(project.gambar_id) : '/project1.jpg'}
                      alt={project.nama_proyek}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        console.error("Gagal memuat gambar dengan ID:", project.gambar_id);
                        (e.target as HTMLImageElement).src = '/project1.jpg';
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  
                  <div className="absolute top-4 right-4 bg-[#D4AF37] p-2 rounded-full scale-0 group-hover:scale-100 transition-transform text-black">
                    <Plus size={16} strokeWidth={3} />
                  </div>

                  <div className="absolute bottom-0 left-0 p-5 w-full">
                    <span className="text-[#D4AF37] text-[9px] uppercase tracking-[0.2em] font-black">
                      PROYEK
                    </span>
                    <h4 className="text-sm md:text-xl font-bold mt-1 text-white group-hover:text-[#D4AF37] transition-colors">
                      {project.nama_proyek}
                    </h4>
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
      <Stats />
      <Footer />
    </main>
  );
}