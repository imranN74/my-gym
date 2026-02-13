"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Yellow Glow Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-yellow-400/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Centered Section Heading */}
        <div className="text-center mb-20">
          <p className="text-4xl font-extrabold text-yellow-400 tracking-wider uppercase mb-10">
            About Us
          </p>

          <h2 className="text-5xl font-extrabold">
            Where Strength Meets{" "}
            <span className="text-yellow-400">Discipline</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <Image
              src="/amenities/gym-bg.jpg"
              alt="The Rock Gym Interior"
              width={600}
              height={500}
              className="rounded-2xl object-cover shadow-xl"
            />

            {/* Experience Badge - Proper Positioned */}
            <div className="absolute bottom-6 left-6 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold shadow-lg">
              10+ Years Experience
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              At TheRockGym24, we believe fitness is more than just lifting
              weights — it's about building confidence, discipline, and a
              powerful mindset. Our state-of-the-art facility in Dhanori is
              designed for serious training, complete transformation, and
              long-term results.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Whether you're a beginner starting your fitness journey or an
              athlete pushing your limits, our expert trainers and premium
              equipment ensure you have everything needed to succeed.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="text-3xl font-bold text-yellow-400">200+</h3>
                <p className="text-sm text-gray-400">Active Members</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-yellow-400">15+</h3>
                <p className="text-sm text-gray-400">Certified Trainers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-yellow-400">24/7</h3>
                <p className="text-sm text-gray-400">Open Access</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:9730542555"
              className="inline-block px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg transition shadow-lg shadow-yellow-400/40"
            >
              Join The Movement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
