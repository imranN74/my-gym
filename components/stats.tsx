"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { LucideIcon } from "lucide-react";

export default function Stat({
  end,
  suffix,
  label,

  icon: Icon,
}: {
  end: number;
  suffix: string;
  label: string;
  image: string;
  icon: LucideIcon;
}) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className="
        group relative
        w-full max-w-xs
        rounded-2xl
        bg-black/50 backdrop-blur-md
        sm:border border-yellow-400/20
        p-10
        flex flex-col items-center
        text-center
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]
        sm:hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-yellow-400/10 blur-xl opacity-0 group-hover:opacity-100 transition" />

      {/* Image / Icon */}
      <div className="relative z-10 mb-4">
        <div className="w-16 h-16 rounded-xl  border-yellow-400/30 flex items-center justify-center">
          {/* <Image
            src={image}
            alt={label}
            width={36}
            height={36}
            className="object-contain"
          /> */}
          <Icon size={50} color="yellow" strokeWidth={1} />
        </div>
      </div>

      {/* Counter */}
      <div className="relative z-10">
        {inView && (
          <CountUp
            end={end}
            suffix={suffix}
            duration={2.5}
            className="block text-6xl font-extrabold text-yellow-400"
          />
        )}
      </div>

      {/* Divider */}
      <div className="relative z-10 my-3 h-1 w-10 rounded-full bg-yellow-400" />

      {/* Label */}
      <p className="relative z-10 text-yellow-300 text-sm font-semibold uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
