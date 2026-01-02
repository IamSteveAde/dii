"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Top Hairline Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[70%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* ================= BRAND ================= */}
          <div className="lg:col-span-4 space-y-6">
            <span
              className="block text-sm tracking-[0.35em] uppercase text-white font-light"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.35)" }}
            >
              Optivance HR Africa
            </span>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Optivance HR Africa is an AI-powered workforce platform helping
              businesses hire, train, certify, and manage blue-collar workers —
              all through WhatsApp.
            </p>
          </div>

          {/* ================= PLATFORM ================= */}
          <div className="lg:col-span-4 space-y-6">
            <span className="block text-[11px] tracking-[0.3em] uppercase text-white/40">
              Platform
            </span>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#about" className="text-white/70 hover:text-white transition">
                  About Optivance
                </Link>
              </li>
              <li>
                <Link href="#why" className="text-white/70 hover:text-white transition">
                  Why Optivance
                </Link>
              </li>
              <li>
                <Link href="#industries" className="text-white/70 hover:text-white transition">
                  Industries
                </Link>
              </li>
              
            </ul>
          </div>

          {/* ================= TRUST & CONTACT ================= */}
          <div className="lg:col-span-4 space-y-6">
            <span className="block text-[11px] tracking-[0.3em] uppercase text-white/40">
              Trust & Support
            </span>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Built for compliance, reliability, and long-term workforce
              development. We work with employers, workers, and partners across
              Africa to build a safer, more dignified labour economy.
            </p>

            <div className="space-y-3 text-sm">
              <Link
                href="#contact"
                className="block text-white/70 hover:text-white transition"
              >
                Contact Us
              </Link>
              
            </div>
          </div>
        </div>

        {/* ================= BOTTOM LINE ================= */}
        <div className="mt-20 text-center text-white/40 text-xs tracking-wide">
          © {new Date().getFullYear()} Optivance HR Africa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
