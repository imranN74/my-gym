"use client";

import Image from "next/image";

export default function WhatsAppFloat() {
  const phone = "919730542555"; // country code + number (no +, no spaces)

  const message = encodeURIComponent(
    "Hi, I am interested in your gym membership. Please share details.",
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-12 right-13 z-50"
    >
      <Image
        src="/logo/whatsapp.png"
        alt="Chat on WhatsApp"
        width={56}
        height={56}
        className="hover:scale-110 transition-transform duration-200"
        priority
      />
    </a>
  );
}
