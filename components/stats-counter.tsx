"use client";

import Stat from "./stats";
import { BicepsFlexed, Users, UsersRound } from "lucide-react";

export default function StatCounter() {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Yellow Accent Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-100 h-100 bg-yellow-400/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30">
            <span className="text-yellow-400 text-sm font-semibold">
              Our Impact
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Transforming <span className="text-yellow-400">Lives Daily</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Numbers that reflect our commitment to excellence, strength, and
            results. Join a growing community pushing limits every single day.
          </p>
        </div>

        {/* Stats */}
        <div
          className="
            flex flex-col sm:flex-row
            p-8
            justify-around
            items-center
            gap-10
            
          "
        >
          <Stat
            end={200}
            suffix="+"
            label="Active Members"
            image="/stats/active-members.jpg"
            icon={UsersRound}
          />
          <Stat
            end={10}
            suffix="K+"
            label="Clients Trained"
            image="/stats/active-members.jpg"
            icon={Users}
          />
          <Stat
            end={15}
            suffix="+"
            label="Professional Trainers"
            image="/stats/active-members.jpg"
            icon={BicepsFlexed}
          />
        </div>
      </div>
    </section>
  );
}
