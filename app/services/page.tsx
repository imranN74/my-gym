"use client";

import Image from "next/image";

export default function ServicesPage() {
  return (
    <section className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/amenities/gym-bg.jpg"
          alt="Gym Interior"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 font-semibold tracking-widest uppercase">
            Our Facilities
          </p>
          <h2 className="text-5xl font-extrabold mt-4">
            Train Without <span className="text-yellow-400">Limits</span>
          </h2>
        </div>

        {/* 24/7 Access Card */}
        <div className="mb-20 bg-yellow-400/10 border border-yellow-400/40 rounded-2xl p-8 text-center backdrop-blur-xl shadow-[0_0_40px_rgba(250,204,21,0.2)]">
          <h3 className="text-3xl font-bold text-yellow-400 mb-4">
            24/7 ACCESS
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Train anytime that fits your schedule. Our state-of-the-art security
            system ensures your safety even during late-night sessions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Strength Training */}
          <ServiceCard
            image="/amenities/strength.webp"
            title="Strength Training"
            features={[
              "Power Racks & Squat Stations",
              "Dumbbells (2kg - 50kg)",
              "Olympic Barbells & Plates",
              "Bench Press Stations",
              "Deadlift Platforms",
            ]}
          />

          {/* Cardio Zone */}
          <ServiceCard
            image="/amenities/cardio.webp"
            title="Cardio Zone"
            features={[
              "Premium Treadmills",
              "Elliptical Trainers",
              "Stationary Bikes",
              "Stair Climbers",
              "Heart Rate Monitoring",
            ]}
          />

          {/* Functional Training */}
          <ServiceCard
            image="/amenities/functional.webp"
            title="Functional Training"
            features={[
              "Battle Ropes",
              "TRX Suspension",
              "Kettlebells",
              "Plyometric Boxes",
              "Medicine Balls",
            ]}
          />
        </div>

        {/* Amenities Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/amenities/gym-bg.jpg"
              alt="Gym Amenities"
              width={600}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">
              Amenities
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>✔ Spacious Lockers & Showers</li>
              <li>✔ Free High-Speed WiFi</li>
              <li>✔ Supplement & Protein Counter</li>
              <li>✔ Towels Service</li>
              <li>✔ Water Refill Stations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  image,
  title,
  features,
}: {
  image: string;
  title: string;
  features: string[];
}) {
  return (
    <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-400/40 transition">
      <div className="relative h-56">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h4 className="text-xl font-bold text-yellow-400 mb-4">{title}</h4>

        <ul className="space-y-3 text-gray-300 text-sm">
          {features.map((item, index) => (
            <li key={index}>✔ {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
