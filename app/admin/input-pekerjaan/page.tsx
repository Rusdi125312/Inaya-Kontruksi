"use client";
import { useState, useEffect } from 'react';
import { databases, storage } from '@/lib/appwrite';
import { ID, Query } from 'appwrite';

export default function InputPekerjaan() {
  const [pekerjaanList, setPekerjaanList] = useState<any[]>([]);
  const [namaPekerjaan, setNamaPekerjaan] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // READ: Ambil data dari koleksi 'pekerjaan'
  const fetchPekerjaan = async () => {
    try {
      const response = await databases.listDocuments('6a26e72000382e4d6a68', 'pekerjaan');
      setPekerjaanList(response.documents);
    } catch (err) { console.error(err); }
  };

  useEffect(() => { fetchPekerjaan(); }, []);

  // CREATE: Simpan data baru
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    try {
      const fileUpload = await storage.createFile('6a26ee780011c928a8a5', ID.unique(), file);
      await databases.createDocument('6a26e72000382e4d6a68', 'pekerjaan', ID.unique(), {
        nama_pekerjaan: namaPekerjaan,
        deskripsi: deskripsi,
        gambar_id: fileUpload.$id
      });
      alert("Berhasil!");
      fetchPekerjaan(); // Refresh list setelah simpan
      setNamaPekerjaan(''); setDeskripsi(''); setFile(null);
    } catch (error) { alert("Gagal menyimpan."); }
    finally { setLoading(false); }
  };

  // DELETE: Hapus data
  const handleDelete = async (id: string, fileId: string) => {
    try {
      await databases.deleteDocument('6a26e72000382e4d6a68', 'pekerjaan', id);
      await storage.deleteFile('6a26ee780011c928a8a5', fileId);
      fetchPekerjaan(); // Refresh list setelah hapus
    } catch (err) { alert("Gagal menghapus."); }
  };

  return (
    <div className="p-10 bg-black text-white min-h-screen">
      <form onSubmit={handleSubmit} className="mb-10 p-6 bg-gray-900 rounded-xl">
        <h1 className="text-2xl mb-4">Input Pekerjaan Baru</h1>
        <input className="block w-full mb-2 p-2 bg-gray-800 rounded" placeholder="Nama" value={namaPekerjaan} onChange={(e) => setNamaPekerjaan(e.target.value)} required />
        <textarea className="block w-full mb-2 p-2 bg-gray-800 rounded" placeholder="Deskripsi" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} required />
        <input type="file" className="mb-4" onChange={(e) => setFile(e.target.files?.[0] || null)} required />
        <button disabled={loading} className="px-4 py-2 bg-blue-600 rounded">{loading ? "..." : "Simpan"}</button>
      </form>

      {/* Tampilan List (Read) */}
      <div className="grid gap-4">
        {pekerjaanList.map((p) => (
          <div key={p.$id} className="p-4 bg-gray-800 rounded flex justify-between items-center">
            <div>
              <h3 className="font-bold">{p.nama_pekerjaan}</h3>
              <p className="text-sm">{p.deskripsi}</p>
            </div>
            <button onClick={() => handleDelete(p.$id, p.gambar_id)} className="bg-red-600 px-4 py-2 rounded">Hapus</button>
          </div>
        ))}
      </div>
    </div>
  );
}