"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  ClipboardCheck,
  ShieldCheck,
  Award,
  Wallet,
  FileCheck,
  HeartPulse,
  Building2,
} from "lucide-react";

export default function TrainingAndPayroll() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative z-10 py-32">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* ================= TRAINING & CERTIFICATION ================= */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-black/5 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.06)]"
            >
              <span className="block text-[11px] tracking-[0.4em] uppercase text-[#5f3b86] mb-4">
                Training & Certification
              </span>

              <h3 className="text-3xl font-light text-black leading-tight">
                Skills that employers trust.
                <span className="block font-normal text-[#5f3b86]">
                  Credentials workers carry.
                </span>
              </h3>

              <p className="mt-6 text-black/70 leading-relaxed max-w-md">
                Optivance delivers AI-optimized training programs tailored to
                each role, ensuring workers are prepared, tested, and job-ready.
              </p>

              <ul className="mt-8 space-y-4">
                <Item icon={<GraduationCap />} text="Hospitality & customer service" />
                <Item icon={<ShieldCheck />} text="Hygiene, safety, and compliance" />
                <Item icon={<ClipboardCheck />} text="Trade-specific technical skills" />
                <Item icon={<Award />} text="Workplace ethics and conduct" />
              </ul>

              <div className="mt-8 border-t border-black/10 pt-6 space-y-3">
                <p className="text-black/70 text-sm">
                  Workers earn verifiable digital certificates that:
                </p>
                <ul className="space-y-2 text-sm text-black/60">
                  <li>• Prove real competence</li>
                  <li>• Increase employability</li>
                  <li>• Travel with the worker across jobs</li>
                </ul>
              </div>
            </motion.div>

            {/* ================= PAYROLL, TAX & INSURANCE ================= */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-black/5 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.06)]"
            >
              <span className="block text-[11px] tracking-[0.4em] uppercase text-[#61abbb] mb-4">
                Payroll, Tax & Insurance
              </span>

              <h3 className="text-3xl font-light text-black leading-tight">
                We don’t stop at hiring.
                <span className="block font-normal text-[#61abbb]">
                  We manage employment end to end.
                </span>
              </h3>

              <p className="mt-6 text-black/70 leading-relaxed max-w-md">
                Optivance manages the full employment lifecycle — removing
                administrative burden from businesses and protecting workers.
              </p>

              <ul className="mt-8 space-y-4">
                <Item icon={<Wallet />} text="Salary payments" />
                <Item icon={<FileCheck />} text="PAYE and statutory tax deductions" />
                <Item icon={<Building2 />} text="Pension and compliance support" />
                <Item icon={<HeartPulse />} text="Health and accident insurance" />
              </ul>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-black">
                    Businesses stay compliant.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-black">
                    Workers stay protected.
                  </p>
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
   ITEM
------------------------------------- */
function Item({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-xl bg-black/5 text-black flex items-center justify-center">
        {icon}
      </div>
      <span className="text-black/80 text-sm leading-relaxed">{text}</span>
    </li>
  );
}
