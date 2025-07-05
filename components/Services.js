"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Services() {
  const serviceData = [
    {
      title: "Laundry Stroller",
      description:
        "Kami membersihkan stroller bayi Anda dengan metode khusus agar tetap higienis dan aman untuk si kecil.",
      image: "/assets/images/services1.png",
    },
    {
      title: "Laundry Boneka",
      description:
        "Boneka kesayangan dibersihkan dengan hati-hati menggunakan bahan ramah anak dan teknik yang aman.",
      image: "/assets/images/services2.png",
    },
    {
      title: "Laundry Jaket",
      description:
        "Jaket berbahan tebal, kulit, atau waterproof kami cuci dengan teknik khusus agar awet dan bersih maksimal.",
      image: "/assets/images/services3.png",
    },
    {
      title: "Laundry Sepatu",
      description:
        "Sepatu Anda dicuci menggunakan teknik deep cleaning untuk menghilangkan noda dan bau tanpa merusak bahan.",
      image: "/assets/images/services4.png",
    },
    {
      title: "Laundry Tas",
      description:
        "Tas kerja, tas fashion, hingga ransel dibersihkan dengan teknik profesional agar kembali bersih dan segar.",
      image: "/assets/images/services5.png",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-[1200px] mx-auto py-16 px-4"
    >
      <h2 className="text-3xl text-center font-extrabold text-blue-800 leading-tight mb-12">
        OUR SERVICES
      </h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation
        loop
        autoplay={{ delay: 2500 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-12"
      >
        {serviceData.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row h-full">
              {/* Image */}
              <div className="md:w-1/2 w-full h-full md:h-auto">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full p-4 flex flex-col justify-center text-left">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
