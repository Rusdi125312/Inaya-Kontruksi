"use client";

import { motion } from "framer-motion";
import {
  PenTool,
  Hammer,
  Home,
  Briefcase,
  ArrowRight
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Desain Rumah",
      icon: <PenTool />,
      desc: "Desain kreatif dan fungsional untuk mewujudkan rumah impian Anda."
    },
    {
      title: "Renovasi Rumah",
      icon: <Hammer />,
      desc: "Renovasi berkualitas dengan pengerjaan rapi dan tepat waktu."
    },
    {
      title: "Pembangunan Rumah",
      icon: <Home />,
      desc: "Membangun rumah dari nol hingga siap dihuni dengan standar terbaik."
    },
    {
      title: "Layanan Kontraktor",
      icon: <Briefcase />,
      desc: "Manajemen proyek profesional dari awal hingga selesai."
    }
  ];

  return (
    <section
      id="layanan"
      className="py-20 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-14">

          <p className="text-[#D4AF37] uppercase tracking-[5px] text-xs font-semibold">
            Layanan Kami
          </p>

          <h2 className="text-3xl md:text-5xl font-serif mt-3">
            Solusi Konstruksi Profesional
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: .5,
                delay: index * .1
              }}
              className="

              bg-[#161616]
              border
              border-white/10
              rounded-[28px]
              overflow-hidden

              hover:border-[#D4AF37]
              hover:-translate-y-2
              transition-all
              duration-500

              "

            >

              {/* MOBILE */}

              <div className="flex items-center gap-5 p-5 md:hidden">

                <div
                  className="
                  w-16
                  h-16
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-[#D4AF37]
                  shrink-0
                  "
                >
                  {service.icon}
                </div>

                <div className="flex-1">

                  <h3 className="font-bold text-lg">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1 leading-6">
                    {service.desc}
                  </p>

                </div>

                <ArrowRight
                  size={22}
                  className="text-[#D4AF37]"
                />

              </div>

              {/* DESKTOP */}

              <div className="hidden md:flex flex-col p-8 h-full">

                <div
                  className="
                  w-20
                  h-20
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-[#D4AF37]
                  mb-8
                  "
                >

                  <div className="scale-125">
                    {service.icon}
                  </div>

                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-8 flex-1">
                  {service.desc}
                </p>

                <button
                  className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  text-[#D4AF37]
                  font-medium
                  group
                  "
                >

                  Selengkapnya

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition"
                  />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}