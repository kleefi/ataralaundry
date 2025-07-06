"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShirt,
  faSoap,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const features = [
  {
    title: "Wash, Dry, and Fold",
    icon: faShirt,
  },
  {
    title: "Professional",
    icon: faSoap,
  },
  {
    title: "Efektif & Efisien",
    icon: faClock,
    noMobileBorder: true,
  },
  {
    title: "High Quality Service",
    icon: faStar,
    noMobileBorder: true,
  },
];

export default function WhyUs() {
  return (
    <section className="max-w-[1200px] mx-auto">
      <motion.div
        className="bg-white text-center py-8 px-6 mb-4 rounded-md grid md:grid-cols-4 grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`
              flex flex-col items-center justify-center
              md:pr-4 pb-4 md:pb-0
              ${idx !== 3 ? "md:border-r-3" : ""}
              ${!feature.noMobileBorder ? "border-b-4 md:border-b-0" : ""}
              border-yellow-200
            `}
          >
            <FontAwesomeIcon
              icon={feature.icon}
              className="text-blue-500 text-2xl mb-4"
            />
            <h2 className="text-md">{feature.title}</h2>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
