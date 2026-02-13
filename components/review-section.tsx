"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ReviewSection() {
  const reviews = [
    {
      name: "Amit Sharma",
      rating: 5,
      review:
        "Best gym in Dhanori! Equipment is top-notch and trainers are very supportive. Open 24/7 is a huge plus.",
      image: "/reviews/amit.webp",
    },
    {
      name: "Rahul Patil",
      rating: 4,
      review:
        "Spacious gym with great vibe. Personal training sessions really helped me improve my strength.",
      image: "/reviews/rahul.webp",
    },
    {
      name: "Sneha Kulkarni",
      rating: 5,
      review:
        "Clean, well-maintained and professional trainers. Totally worth the membership.",
      image: "/reviews/sneha.webp",
    },
    {
      name: "Vikas Deshmukh",
      rating: 5,
      review:
        "Amazing atmosphere and well maintained machines. Highly recommended.",
      image: "/reviews/vikas.webp",
    },
    {
      name: "Neha Joshi",
      rating: 4,
      review:
        "Trainers are very friendly and guide properly. Love the 24/7 access.",
      image: "/reviews/neha.webp",
    },
  ];

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Yellow Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-400/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16 text-center">
        <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Reviews
        </p>
        <h2 className="text-5xl font-extrabold">
          What Our <span className="text-yellow-400">Members Say</span>
        </h2>
      </div>

      {/* Motion Slider */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="w-[350px] bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400/40 transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                “{review.review}”
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-yellow-400/40"
                />
                <p className="font-semibold text-yellow-400">{review.name}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
