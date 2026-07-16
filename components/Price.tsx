"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      title: "Desain Sederhana",
      price: "Rp 5jt",
      features: [
        "Denah 2D",
        "Tampak Depan 3D",
        "Revisi 2x",
      ],
    },
    {
      title: "Desain Lengkap",
      price: "Rp 15jt",
      features: [
        "Denah 2D & 3D",
        "Render Interior",
        "Gambar Kerja",
        "Revisi 5x",
      ],
    },
    {
      title: "Kontraktor+",
      price: "Custom",
      features: [
        "Manajemen Proyek",
        "Material Premium",
        "Laporan Harian",
        "Konsultasi 24/7",
      ],
    },
  ];

  const handleWhatsApp = (
    title: string,
    price: string
  ) => {
    const phoneNumber = "6281384812919";

    const message = `Halo Inaya Konstruksi, saya tertarik dengan paket ${title} seharga ${price}. Bisa bantu jelaskan lebih lanjut?`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <section
      id="harga"
      className="py-5 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-5">

        <div className="text-center mb-16">

          <p className="text-[#D4AF37] uppercase tracking-[5px] text-xs font-semibold">
            Investasi
          </p>

          <h2 className="text-3xl md:text-5xl font-serif mt-3 font-bold">
            Harga Layanan Kami
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {plans.map((plan, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
              bg-[#111]
              border
              border-white/10
              rounded-[28px]
              overflow-hidden
              hover:border-[#D4AF37]
              transition-all
              duration-500
              "
            >

              {/* MOBILE */}

              <div className="md:hidden p-5">

                <div className="flex justify-between items-center">

                  <div>

                    <p className="uppercase tracking-[3px] text-[11px] text-gray-400">
                      {plan.title}
                    </p>

                    <h2 className="text-3xl font-bold text-[#D4AF37] mt-2">
                      {plan.price}
                    </h2>

                  </div>

                  <ArrowRight
                    className="text-[#D4AF37]"
                  />

                </div>

                <div className="mt-6 space-y-3">

                  {plan.features.map((feature, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >

                      <div
                        className="
                        w-7
                        h-7
                        rounded-full
                        bg-[#D4AF37]/10
                        flex
                        items-center
                        justify-center
                        "
                      >

                        <Check
                          size={15}
                          className="text-[#D4AF37]"
                        />

                      </div>

                      <p className="text-sm text-gray-300">
                        {feature}
                      </p>

                    </div>

                  ))}

                </div>

                <button
                  onClick={() =>
                    handleWhatsApp(
                      plan.title,
                      plan.price
                    )
                  }
                  className="
                  mt-6
                  w-full
                  py-3
                  rounded-xl
                  bg-[#D4AF37]
                  text-black
                  font-semibold
                  "
                >
                  Pilih Paket
                </button>

              </div>

              {/* DESKTOP */}

              <div className="hidden md:flex flex-col p-8 h-full">

                <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  {plan.title}
                </h4>

                <h2 className="text-4xl font-bold text-[#D4AF37] mb-8">
                  {plan.price}
                </h2>

                <ul className="space-y-4 mb-8 flex-grow">

                  {plan.features.map((feature, i) => (

                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >

                      <Check
                        size={18}
                        className="text-[#D4AF37]"
                      />

                      {feature}

                    </li>

                  ))}

                </ul>

                <button
                  onClick={() =>
                    handleWhatsApp(
                      plan.title,
                      plan.price
                    )
                  }
                  className="
                  w-full
                  py-4
                  border
                  border-[#D4AF37]
                  text-[#D4AF37]
                  rounded-xl
                  font-bold
                  hover:bg-[#D4AF37]
                  hover:text-black
                  transition
                  "
                >
                  Pilih Paket
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}