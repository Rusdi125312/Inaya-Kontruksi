"use client";
import { useState } from 'react';
import { account } from '@/lib/appwrite';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Cek apakah ada sesi aktif
      try {
        const currentSession = await account.getSession('current');
        if (currentSession) {
          router.push('/admin/dashboard');
          return;
        }
      } catch (e) {
        // Jika getSession gagal, berarti memang belum login, lanjut ke login
      }

      await account.createEmailPasswordSession(email, password);
      router.push('/admin/dashboard');
    } catch (error: any) {
      console.error("Detail Error:", error);
      alert("Login gagal: " + (error.message || "Periksa kembali email dan password Anda."));
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-6">
      <form onSubmit={handleLogin} className="p-8 bg-[#111] border border-white/10 rounded-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Akses Admin</h2>
        
        <input 
          className="w-full p-3 mb-3 bg-gray-900 border border-white/10 rounded focus:border-[#D4AF37] outline-none" 
          placeholder="Email Admin" 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        
        <input 
          className="w-full p-3 mb-6 bg-gray-900 border border-white/10 rounded focus:border-[#D4AF37] outline-none" 
          placeholder="Password" 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        
        <button 
          disabled={loading}
          className="w-full py-3 bg-[#D4AF37] text-black font-bold rounded hover:bg-yellow-600 transition disabled:opacity-50"
        >
          {loading ? 'Memproses...' : 'Masuk ke Dashboard'}
        </button>

        <div className="mt-6 text-center">
          <Link href="/" className="text-xs text-gray-500 hover:text-[#D4AF37] transition underline underline-offset-4">
            Kembali ke Beranda
          </Link>
        </div>
      </form>
    </div>
  );
}