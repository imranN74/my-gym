"use client";

import { useState } from "react";

type Duration = "1" | "3" | "6" | "12";
type PlanType = "single" | "couple";

export default function MembershipPlans() {
  const [type, setType] = useState<PlanType>("single");

  const pricing: Record<
    PlanType,
    Record<
      Duration,
      {
        withoutPT: number;
        withPT: {
          silver: number;
          gold: number;
        };
      }
    >
  > = {
    single: {
      "1": {
        withoutPT: 2999,
        withPT: { silver: 7999, gold: 9999 },
      },
      "3": {
        withoutPT: 6999,
        withPT: { silver: 20999, gold: 26999 },
      },
      "6": {
        withoutPT: 9999,
        withPT: { silver: 35999, gold: 47999 },
      },
      "12": {
        withoutPT: 11999,
        withPT: { silver: 55999, gold: 89999 },
      },
    },
    couple: {
      "1": {
        withoutPT: 4999,
        withPT: { silver: 13999, gold: 15999 },
      },
      "3": {
        withoutPT: 9999,
        withPT: { silver: 35999, gold: 47999 },
      },
      "6": {
        withoutPT: 14999,
        withPT: { silver: 62999, gold: 83999 },
      },
      "12": {
        withoutPT: 19999,
        withPT: { silver: 99999, gold: 169999 },
      },
    },
  };

  const durations: Duration[] = ["1", "3", "6", "12"];

  return (
    <section
      id="membership"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      {/* Yellow Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-yellow-400/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold">
            Choose Your <span className="text-yellow-400">Membership</span>
          </h2>
        </div>

        {/* Single Toggle */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-zinc-900 rounded-full p-1 border border-yellow-400/30">
            <button
              onClick={() => setType("single")}
              className={`px-6 py-2 rounded-full transition ${
                type === "single"
                  ? "bg-yellow-400 text-black font-semibold"
                  : "text-gray-400"
              }`}
            >
              Single
            </button>
            <button
              onClick={() => setType("couple")}
              className={`px-6 py-2 rounded-full transition ${
                type === "couple"
                  ? "bg-yellow-400 text-black font-semibold"
                  : "text-gray-400"
              }`}
            >
              Couple
            </button>
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-2xl font-semibold">
            For <span className="text-yellow-400 capitalize">{type}</span>
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Explore plans tailored specifically for {type} membership.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {durations.map((d) => {
            const data = pricing[type][d];
            const isRecommended = d === "6";

            return (
              <div
                key={d}
                className={`relative bg-zinc-900/60 backdrop-blur-xl rounded-2xl p-6 transition 
                ${
                  isRecommended
                    ? "border border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.25)] scale-105"
                    : "border border-zinc-800 hover:border-yellow-400/40"
                }`}
              >
                {/* Recommended Badge */}
                {isRecommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    RECOMMENDED
                  </div>
                )}

                <h3 className="text-xl font-bold mb-6 text-yellow-400 text-center">
                  {d} {d === "1" ? "Month" : "Months"}
                </h3>

                {/* Without PT */}
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-2">
                    Without Personal Trainer
                  </p>
                  <p className="text-2xl font-bold">₹{data.withoutPT}</p>
                </div>

                <div className="border-t border-zinc-800 my-6"></div>

                {/* With PT (Enhanced Section) */}
                <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-xl p-5">
                  <p className="text-yellow-400 text-sm font-semibold mb-4">
                    With Personal Trainer
                  </p>

                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-300 text-base">Silver</span>
                    <span className="text-xl font-semibold">
                      ₹{data.withPT.silver}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-yellow-400 font-semibold text-base">
                      Gold
                    </span>
                    <span className="text-2xl font-bold text-yellow-400">
                      ₹{data.withPT.gold}
                    </span>
                  </div>
                </div>

                <button className="mt-6 w-full py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:opacity-90 transition">
                  Join Now
                </button>
              </div>
            );
          })}
        </div>
        <div className="mt-5 text-center border-yellow-400/30 pt-10">
          <h3 className="text-2xl font-bold text-yellow-400 mb-3">
            Daily Pass
          </h3>
          <p className="text-xl font-semibold mb-3">
            Daily Access: ₹299 per visit
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Not ready for a full membership? Try our gym for a day and
            experience premium equipment, expert support, and 24/7 access
            without long-term commitment.
          </p>
        </div>
      </div>
    </section>
  );
}
