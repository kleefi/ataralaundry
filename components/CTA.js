"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-blue-500 text-white text-sm md:text-base">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-4 text-center"
      >
        <span className="font-medium">Butuh Laundry Cepat?</span>

        <motion.a
          href="https://wa.me/6285694821191"
          target="_blank"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold text-sm shadow transition"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Chat via WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}
