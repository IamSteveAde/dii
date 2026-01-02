"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Users,
  BookOpen,
  ClipboardCheck,
  BadgeCheck,
  Wallet,
  FileCheck,
  Shield,
  BarChart3,
} from "lucide-react";

export default function AIPlatform() {
  return (
    <section className="relative overflow-hidden">
      {/* PURPLE GRADIENT BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #2a123f 0%, #5f3b86 45%, #7b4db3 100%)",
        }}
      />

      {/* SOFT AI FLOW LINES */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-2/4 h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-3/4 h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

      <div className="relative z-10 py-32">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            {/* LEFT — EXPLANATION */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 space-y-8 text-white"
            >
              <div className="flex items-center gap-3 text-white/80">
                <Bot size={18} />
                <span className="text-[11px] tracking-[0.4em] uppercase">
                  AI-Powered Platform
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Our AI-Powered
                <span className="block font-normal">
                  WhatsApp Workforce Platform
                </span>
              </h2>

              <p className="text-white/80 leading-relaxed text-lg max-w-md">
                Optivance is building an AI-first workforce platform on WhatsApp,
                designed for accessibility, scale, and speed.
              </p>

              <p className="text-white/70 leading-relaxed max-w-md">
                Workers and employers interact with Optivance through an AI agent
                on WhatsApp — no apps, no complexity.
              </p>

              <p className="pt-6 text-white font-medium text-lg">
                If you can use WhatsApp, you can use Optivance.
              </p>
            </motion.div>

            {/* RIGHT — AI CAPABILITIES */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-10">
                <h3 className="text-sm tracking-[0.3em] uppercase text-white/80 mb-8">
                  What the AI Agent Does
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Capability icon={<Users />} text="Screens and recruits workers" />
                  <Capability icon={<BookOpen />} text="Delivers training and learning modules" />
                  <Capability icon={<ClipboardCheck />} text="Conducts skills tests and assessments" />
                  <Capability icon={<BadgeCheck />} text="Issues digital certifications" />
                  <Capability icon={<Wallet />} text="Manages payroll and pays salaries" />
                  <Capability icon={<FileCheck />} text="Handles tax deductions and compliance" />
                  <Capability icon={<Shield />} text="Provides insurance onboarding and coverage" />
                  <Capability icon={<BarChart3 />} text="Tracks deployment, attendance, and performance" />
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
   CAPABILITY ITEM
------------------------------------- */
function Capability({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-xl bg-white/15 text-white flex items-center justify-center">
        {icon}
      </div>
      <span className="text-white/85 text-sm leading-relaxed">{text}</span>
    </div>
  );
}
