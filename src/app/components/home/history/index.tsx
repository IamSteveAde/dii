"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cpu,
  BarChart3,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

export default function WhyOptivance() {
  return (
    <section className="relative overflow-hidden" id="why">
      {/* PURPLE GRADIENT BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #2a123f 0%, #5f3b86 45%, #7b4db3 100%)",
        }}
      />

      {/* SOFT FLOW LINES */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/3 h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-2/3 h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

      <div className="relative z-10 py-32">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          {/* SECTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mb-20 text-white"
          >
            <span className="block text-[11px] tracking-[0.4em] uppercase text-white/70 mb-4">
              Why Optivance
            </span>

            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              Built with context.
              <span className="block font-normal">
                Powered with intelligence.
              </span>
            </h2>
          </motion.div>

          {/* THREE PILLARS */}
          <div className="grid lg:grid-cols-3 gap-10">
            {/* BUILT FOR AFRICA */}
            <Pillar
              icon={<Globe />}
              title="Built for Africa"
              points={[
                "WhatsApp-first access",
                "Simple, mobile-friendly experience",
                "Scales across cities and countries",
              ]}
            />

            {/* POWERED BY TECHNOLOGY */}
            <Pillar
              icon={<Cpu />}
              title="Powered by Technology"
              points={[
                "AI-driven screening and matching",
                "Data-backed performance insights",
                "Continuous skill improvement",
              ]}
            />

            {/* HUMAN AT THE CORE */}
            <Pillar
              icon={<HeartHandshake />}
              title="Human at the Core"
              points={[
                "Worker dignity and protection",
                "Employer trust and reliability",
                "Long-term workforce development",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------
   PILLAR CARD
------------------------------------- */
function Pillar({
  icon,
  title,
  points,
}: {
  icon: React.ReactNode;
  title: string;
  points: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-10 text-white"
    >
      <div className="h-11 w-11 rounded-xl bg-white/15 flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-medium mb-6">{title}</h3>

      <ul className="space-y-3 text-sm text-white/85">
        {points.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
    </motion.div>
  );
}
