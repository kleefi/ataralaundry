"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section className="flex items-center justify-center py-16 px-6 fade-up show min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20"
      >
        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/assets/images/hero2.png"
            alt="Laundry Illustration"
            width={380}
            height={380}
            className="w-72 md:w-150 drop-shadow-lg"
          />
        </motion.div>

        {/* LEFT SIDE */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-3xl font-extrabold text-blue-800 leading-tight">
            Laundry Kiloan Pickup Delivery di Jakarta Pusat
          </h2>

          <div className="border-l-4 border-yellow-500 pl-4">
            <p className="text-lg md:text-lg text-gray-700">
              Melayani laundry kiloan, satuan, sepatu, tas, stroller, karpet,
              dan lainnya dengan layanan antar-jemput via website atau WhatsApp
              di 0856-9482-1191. Solusi praktis, hemat, dan terpercaya untuk
              pakaian bersih, harum, tanpa risiko rusak atau tertukar.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
