"use client";
import { easeInOut, motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      className="
        w-full max-h-dvh
        bg-[url('/hero/rockgym24-hero.webp')]
        bg-cover bg-center bg-no-repeat
      "
    >
      <motion.div className="h-screen flex flex-col justify-center mx-3 sm:mx-0 sm:ml-16 gap-7 sm:gap-4">
        {/* Bottom Yellow Glow */}
        <div className="absolute bottom-0 left-0 w-full h-70 bg-linear-to-t from-yellow-400/40 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeInOut }}
          className="flex flex-col gap-2 text-5xl sm:text-7xl sm:gap-5 font-extrabold italic"
        >
          <span className="text-yellow-500">TRANSFORM</span>{" "}
          <span className="text-white">YOUR BODY</span>
          <span className="text-yellow-500">ELEVATE YOUR MIND</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 0.8, ease: easeInOut }}
          className="mt-4 max-w-xl text-lg text-gray-200 sm:text-xl leading-relaxed"
        >
          Join{" "}
          <span className="text-yellow-500 font-semibold">The Rock Gym 24</span>{" "}
          —
          <span className="font-semibold text-yellow-400">
            {" "}
            Dhanori’s Best 24×7 Fitness Hub!
          </span>
          <span className="block mt-2 font-semibold text-white">
            Get your <span className="text-yellow-500">FREE trial</span> now!
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easeInOut }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6"
        >
          <a
            href="/membership"
            className="inline-flex items-center justify-center px-6 sm:px-9 py-3 sm:py-4 bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-gray-900 font-black rounded-xl transition-all duration-300 uppercase text-xs sm:text-sm tracking-wider shadow-lg shadow-yellow-400/60 hover:shadow-yellow-400/80 hover:scale-110 active:scale-95 cursor-pointer relative overflow-hidden group"
          >
            <span className="relative z-10">Book Free Trial</span>
            <div className="absolute inset-0 bg-linear-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </a>
          <a
            href="/#membership"
            className="inline-flex items-center justify-center px-6 sm:px-9 py-3 sm:py-4 bg-gray-900/80 hover:bg-gray-800 border-2 border-yellow-400 text-yellow-400 font-black rounded-xl transition-all duration-300 uppercase text-xs sm:text-sm tracking-wider shadow-lg shadow-yellow-400/40 hover:shadow-yellow-400/60 hover:scale-110 active:scale-95 cursor-pointer group"
          >
            <span className="group-hover:text-yellow-300 transition-colors duration-300">
              Membership Plans
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
