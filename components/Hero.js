"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex items-center justify-center py-16 px-6 fade-up show min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20"
      >
        {/* LEFT SIDE */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-3xl font-extrabold text-blue-800 leading-tight">
            ATARA LAUNDRY <br />
            <span className="text-blue-600 text-lg md:text-3xl inline-flex items-center gap-2">
              PICKUP • DELIVERY • EXPRESS
              <motion.span
                animate={{
                  y: [0, -5, 0], // bounce effect
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FontAwesomeIcon icon={faTruckFast} className="text-blue-600" />
              </motion.span>
            </span>
          </h1>

          <div className="border-l-4 border-yellow-500 pl-4">
            <p className="text-lg md:text-xl text-gray-700">
              Melayani <strong>laundry kiloan</strong> | <strong>satuan</strong>{" "}
              | <strong>sepatu</strong> | <strong>tas</strong> |{" "}
              <strong>baby stroller</strong> | <strong>karpet</strong> | dan
              lainnya.
            </p>
          </div>

          <motion.a
            href="https://wa.me/6285694821191"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg rounded-full shadow-lg transition"
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="inline-block mr-2"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </motion.span>
            Chat via WhatsApp
          </motion.a>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0], // Naik turun
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.4 },
            scale: { type: "spring", stiffness: 100, damping: 10 },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/assets/images/hero3.png"
            alt="Laundry Illustration"
            width={768}
            height={725}
            className="w-72 md:w-150 drop-shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
