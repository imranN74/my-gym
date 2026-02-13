"use client";

import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-linear-to-b from-black to-gray-950 text-white pt-20 pb-10 border-t border-yellow-400/30"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo & Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-linear-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2">
                TheRockGym24
              </h3>
              <p className="text-gray-400 text-sm">
                Power. Strength. Elevation. <br />
                <span className="text-yellow-400/80">Dhanori, Pune</span>
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="tel:9730542555"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>9730542555</span>
              </a>

              <a
                href="tel:9730530555"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>9730530555</span>
              </a>
              <a
                href="mailto:therockgym24@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>therockgym24@gmail.com</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h5 className="text-yellow-400 text-sm font-semibold mb-3 uppercase tracking-wide">
                Follow Us
              </h5>

              <div className="flex gap-4">
                <a
                  title="instagram"
                  rel="noopener noreferrer"
                  href="https://instagram.com/"
                  target="_blank"
                  className="p-2 rounded-full bg-gray-900 hover:bg-yellow-400 text-gray-300 hover:text-black transition-all duration-300 shadow-md hover:shadow-yellow-400/40"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  title="facebook"
                  href="https://facebook.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="p-2 rounded-full bg-gray-900 hover:bg-yellow-400 text-gray-300 hover:text-black transition-all duration-300 shadow-md hover:shadow-yellow-400/40"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  title="youtube"
                  href="https://youtube.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="p-2 rounded-full bg-gray-900 hover:bg-yellow-400 text-gray-300 hover:text-black transition-all duration-300 shadow-md hover:shadow-yellow-400/40"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400 uppercase tracking-wide">
              Quick Links
            </h4>

            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/#about" },
                { label: "Services", href: "/services" },
                { label: "Membership", href: "/#membership" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 relative inline-block group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400 uppercase tracking-wide flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Our Location
            </h4>

            <div className="w-full h-56 rounded-xl overflow-hidden border-2 border-yellow-400/40 shadow-lg shadow-yellow-400/10 hover:border-yellow-400/60 transition-colors duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.449789396388!2d73.90941!3d18.598828299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70021eab96f%3A0xf93737537b096ba0!2sThe%20Rock%20gym%2024!5e0!3m2!1sen!2sin!4v1770925647093!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="TheRockGym24 Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-400/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
            <p>© {currentYear} TheRockGym24. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
