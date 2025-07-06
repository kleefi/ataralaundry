"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <section className="max-w-[1200px]  mx-auto  py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 items-center md:grid-cols-2 gap-10 mb-8 bg-white p-4 rounded-md"
      >
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d507722.4468668254!2d106.828735!3d-6.186704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42559a6644f%3A0x9ca8ca95003c50ea!2sJl.%20Jaksa%20No.44%2C%20RT.7%2FRW.5%2C%20Kb.%20Sirih%2C%20Kec.%20Menteng%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010340%2C%20Indonesia!5e0!3m2!1sid!2sus!4v1751731471827!5m2!1sid!2sus"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <h2 className="text-3xl md:text-3xl font-extrabold text-blue-800 leading-tight mb-4">
            Alamat Kami:
          </h2>
          <div className="border-l-4 border-yellow-500 pl-4 mb-4">
            <p className="text-lg">
              Jln Jaksa No.44, RT.7/RW.5, Kebon Sirih,
              <br /> Menteng, Central Jakarta City, Jakarta 10340
            </p>
          </div>

          <motion.a
            href="tel:+6285694821191"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block w-full md:w-1/2 mt-4 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg transition"
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="inline-block mr-2"
            >
              <FontAwesomeIcon icon={faPhone} />
            </motion.span>
            Call Us
          </motion.a>
          <motion.a
            href="https://wa.me/6285694821191"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block w-full md:w-1/2 mt-4 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg rounded-full shadow-lg transition"
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
      </motion.div>
    </section>
  );
}
