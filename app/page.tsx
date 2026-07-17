import  Header  from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Price from "@/components/Price";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import { MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";



export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen flex flex-col space-y-0">
      <Header />
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Price />
      <Portfolio />
      <Stats />
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