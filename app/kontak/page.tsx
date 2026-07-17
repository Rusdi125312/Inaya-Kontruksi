import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen flex flex-col space-y-0">

    <Navbar  />
    <div className="flex flex-col items-center justify-center text-center py-24 px-6">
  {/* Aksen emas di atas judul untuk memperkuat tema */}
  <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-bold mb-3">
    Hubungi Kami
  </span>
  <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
    Kontak Kami
  </h1>
</div>
    <Footer />
  <a 
  href="https://wa.me/6285724964609" 
  target="_blank" 
  className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
>
  <MessageCircle size={28} />
  </a>
  
    </main>
  );
}