"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Smartphone, ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fb]">
      {/* Subtle Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5f3b86]/10 via-transparent to-[#61abbb]/10" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl pt-32 pb-28">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* LEFT — COPY */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs tracking-wide uppercase text-[#5f3b86] shadow-sm">
              <Smartphone size={14} />
              AI-powered • WhatsApp-native
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-light leading-tight text-black">
              
              <span className="block mt-3 font-normal text-[#5f3b86]">
                The AI-Powered Workforce Platform for Blue-Collar Talent
              </span>
            </h1>

            {/* Description */}
            <p className="text-black/70 text-lg leading-relaxed max-w-xl">
              Hire, train, certify, and manage blue-collar workers seamlessly —
              powered by AI and delivered through WhatsApp.
            </p>


            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/hire"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#5f3b86] text-white text-sm tracking-wide uppercase transition hover:opacity-90"
              >
                Hire Workers
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/workers"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-black/20 text-black text-sm tracking-wide uppercase transition hover:bg-black hover:text-white"
              >
                Join as a Worker
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — SYSTEM OVERVIEW */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl bg-white p-10 shadow-[0_40px_120px_rgba(0,0,0,0.12)]">
              <div className="grid gap-6">
                <Feature
                  icon={<Users />}
                  title="Smart Recruitment"
                  text="AI-driven screening and matching for reliable blue-collar talent."
                />

                <Feature
                  icon={<ShieldCheck />}
                  title="Training & Certification"
                  text="Verified skills, testing, and certifications businesses can trust."
                />

                <Feature
                  icon={<Smartphone />}
                  title="WhatsApp-Based Platform"
                  text="Workers and employers interact easily — no apps, no friction."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------
   FEATURE BLOCK
------------------------------------- */
function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="h-10 w-10 rounded-xl bg-[#5f3b86]/10 text-[#5f3b86] flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-black">{title}</h3>
        <p className="text-sm text-black/60 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
