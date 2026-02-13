"use client";
import { easeInOut, motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      className="
        w-full max-h-dvh
        bg-[url('/hero/rockgym24-hero.jpg')]
        bg-cover bg-center bg-no-repeat
      "
    >
      <motion.div className="h-screen flex flex-col justify-center ml-5 sm:ml-16 gap-7 sm:gap-4">
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
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 0.8, ease: easeInOut }}
          className="flex flex-col w-1/2 ml-4 sm:flex-row gap-5 sm:ml-24"
        >
          <a
            href="/membership"
            className="cursor-pointer px-6 py-3 mt-2 bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-black rounded-lg transition-all duration-300 uppercase text-sm tracking-wider shadow-lg shadow-yellow-400/40 text-center"
          >
            Book Now
          </a>
          <a
            href="/#membership"
            className="cursor-pointer px-6 py-3 mt-2 bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-black rounded-lg transition-all duration-300 uppercase text-sm tracking-wider shadow-lg shadow-yellow-400/40"
          >
            Membership Plans
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
