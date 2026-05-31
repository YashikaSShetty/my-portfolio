"use client";

import { SectionReveal } from "@/components/effects/section-reveal";
import { education } from "@/lib/site-data";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <SectionReveal id="education" className="relative overflow-hidden">
      <div className="section-container">
        <div className="mb-10 max-w-2xl">
          <p className="section-title">Education</p>
          <p className="section-subtitle">
            Academic foundation in computer engineering paired with a strong focus
            on AI and application development.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="glass-card neon-border p-8 shadow-[0_0_40px_rgba(0,229,255,0.08)]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-accent/10 text-cyan-accent shadow-[0_0_20px_rgba(0,229,255,0.12)]">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-accent">
                {education.year}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {education.degree}
              </h3>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground">
              <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                University
              </p>
              <p className="mt-2 font-medium text-white">{education.university}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground">
              <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                CGPA
              </p>
              <p className="mt-2 font-medium text-white">{education.cgpa}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground">
              <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                Graduated
              </p>
              <p className="mt-2 font-medium text-white">{education.year}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
