"use client";
import { useState, useEffect } from 'react';
import { databases, storage } from '@/lib/appwrite';
import { ID, Query } from 'appwrite';
import Navbar from "@/components/Navbar";

export default function AdminDashboard() {
  const [proyek, setProyek] = useState<any[]>([]);
  const [nama, setNama] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // 1. Ambil data proyek
  const fetchProyek = async () => {
    const response = await databases.listDocuments('6a26e72000382e4d6a68', 'proyek');
    setProyek(response.documents);
  };

  useEffect(() => { fetchProyek(); }, []);

  // 2. Tambah Data
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let fileId = null;
      if (file) {
        const uploadedFile = await storage.createFile('6a26ee780011c928a8a5', ID.unique(), file);
        fileId = uploadedFile.$id;
      }

      await databases.createDocument('6a26e72000382e4d6a68', 'proyek', ID.unique(), {
        nama_proyek: nama, lokasi, deskripsi, gambar_id: fileId
      });
      
      alert('Berhasil!');
      fetchProyek();
      setNama(''); setLokasi(''); setDeskripsi('');
    } catch (err) { alert('Gagal'); }
    setLoading(false);
  };

  // 3. Hapus Data
  const handleDelete = async (id: string) => {
    await databases.deleteDocument('6a26e72000382e4d6a68', 'proyek', id);
    fetchProyek();
  };

  return (

    <div className="p-10 bg-gray-950 min-h-screen text-white">
      <Navbar  />
      <br></br>
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>
      
      {/* Form Tambah */}
      <form onSubmit={handleSubmit} className="mb-10 bg-[#111] p-6 rounded-xl border border-white/10">
        <input type="text" placeholder="Nama Proyek" className="w-full p-2 mb-2 bg-gray-900 rounded" onChange={(e) => setNama(e.target.value)} required />
        <input type="text" placeholder="Lokasi" className="w-full p-2 mb-2 bg-gray-900 rounded" onChange={(e) => setLokasi(e.target.value)} required />
        <textarea placeholder="Deskripsi" className="w-full p-2 mb-2 bg-gray-900 rounded" onChange={(e) => setDeskripsi(e.target.value)} required />
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="mb-4" />
        <button disabled={loading} className="w-full py-2 bg-[#D4AF37] text-black font-bold rounded">Tambah Proyek</button>
      </form>

      {/* List Proyek */}
      <div className="grid gap-4">
        {proyek.map((p) => (
          <div key={p.$id} className="flex justify-between items-center p-4 bg-gray-900 rounded">
            <div>
              <h3 className="font-bold">{p.nama_proyek}</h3>
              <p className="text-sm text-gray-400">{p.lokasi}</p>
            </div>
            <button onClick={() => handleDelete(p.$id)} className="bg-red-600 px-4 py-2 rounded">Hapus</button>
          </div>
        ))}
      </div>
    </div>
  );
}