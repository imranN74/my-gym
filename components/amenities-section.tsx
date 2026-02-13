"use client";
import { motion } from "motion/react";
import Image from "next/image";

const amenities = [
  {
    title: "Modern Equipment",
    desc: "State-of-the-art machines for strength & endurance.",
    image: "/amenities/equipment.webp",
  },
  {
    title: "Certified Trainers",
    desc: "Expert guidance for maximum results.",
    image: "/amenities/trainers.webp",
  },
  {
    title: "24×7 Access",
    desc: "Train anytime that fits your schedule.",
    image: "/amenities/24X7.webp",
  },
  {
    title: "Cardio Zone",
    desc: "High-energy cardio environment.",
    image: "/amenities/cardio.webp",
  },
  {
    title: "Zumba & Yoga Studio",
    desc: "Dedicated space for flexibility & fun.",
    image: "/amenities/zumba.webp",
  },
  {
    title: "Premium Locker Rooms",
    desc: "Clean, secure & fully equipped.",
    image: "/amenities/locker.webp",
  },
];

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Premium Gradient Glow */}
      <div className="absolute top-0 left-0 w-full h-48 bg-linear-to-b from-yellow-400/15 via-yellow-400/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30">
              <span className="text-yellow-400 text-sm font-semibold">
                World-Class Amenities
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-extrabold text-balance">
              Train with the{" "}
              <span className="text-yellow-400">Best Facilities</span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
              From state-of-the-art equipment to dedicated training zones, our
              gym is designed to give you everything you need to push limits,
              build strength, and achieve your fitness goals.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-96"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Enhanced Dark Overlay with Yellow Tint */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/20 group-hover:via-black/50 transition-all duration-500" />

              {/* Yellow accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-yellow-400/0 via-yellow-400 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-2 h-8 bg-yellow-400 rounded-full shrink-0" />
                  <h3 className="text-2xl font-bold text-yellow-500">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>

              {/* Premium Border Glow */}
              <div className="absolute inset-0 border-2 border-yellow-400/0 rounded-2xl group-hover:border-yellow-400/50 group-hover:shadow-[inset_0_0_30px_rgba(250,204,21,0.2),0_0_35px_rgba(250,204,21,0.3)] transition-all duration-500" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
