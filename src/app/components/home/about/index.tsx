"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Hotel,
  Brush,
  Wrench,
  HardHat,
  Warehouse,
  ShoppingBag,
} from "lucide-react";

export default function WhatWeDo() {
  return (
    <section className="relative bg-white overflow-hidden" id="about">
      {/* AI LINEAR GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 left-1/3 h-full w-[1px] bg-gradient-to-b from-transparent via-[#5f3b86]/20 to-transparent" />
        <div className="absolute top-0 left-2/3 h-full w-[1px] bg-gradient-to-b from-transparent via-[#61abbb]/20 to-transparent" />
      </div>

      <div className="relative z-10 py-32">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            {/* LEFT — EXPLANATION */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 space-y-8"
            >
              <span className="block text-[11px] tracking-[0.4em] uppercase text-[#5f3b86]">
                What We Do
              </span>

              <h2 className="text-4xl md:text-5xl font-light leading-tight text-black">
                Workforce infrastructure
                <span className="block text-[#5f3b86] font-normal">
                  for Africa’s service economy
                </span>
              </h2>

              <p className="text-black/70 leading-relaxed text-lg max-w-md">
                Optivance HR Africa is a blue-collar recruitment, training, and
                workforce management company built for Africa’s fast-growing
                service and industrial sectors.
              </p>

              <p className="text-black/60 leading-relaxed max-w-md">
                We support businesses that need dependable workers — and workers
                who want structured jobs, training, protection, and long-term
                opportunity.
              </p>
            </motion.div>

            {/* RIGHT — ROLES */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl border border-black/5 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.06)]">
                <h3 className="text-sm tracking-[0.3em] uppercase text-black/60 mb-8">
                  Roles We Cover
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Role icon={<Hotel />} text="Bartenders & Waitstaff" />
                  <Role icon={<Briefcase />} text="Hotel & Hospitality Staff" />
                  <Role icon={<Brush />} text="Cleaners & Facility Staff" />
                  <Role icon={<Wrench />} text="Electricians, Plumbers & Artisans" />
                  <Role icon={<HardHat />} text="Construction Workers" />
                  <Role icon={<Warehouse />} text="Warehouse & Logistics Staff" />
                  <Role icon={<ShoppingBag />} text="Retail Assistants" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------
   ROLE ITEM
------------------------------------- */
function Role({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 rounded-xl bg-[#5f3b86]/10 text-[#5f3b86] flex items-center justify-center">
        {icon}
      </div>
      <span className="text-black/80 text-sm">{text}</span>
    </div>
  );
}
