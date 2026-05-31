"use client";

import { SectionReveal } from "@/components/effects/section-reveal";
import { experience } from "@/lib/site-data";
import { motion } from "framer-motion";
import { Code2, Layers, RotateCcw, ServerCog, ShieldCheck, Zap } from "lucide-react";

const iconMap = {
  code: Code2,
  layers: Layers,
  api: ServerCog,
  workflow: RotateCcw,
  zap: Zap,
  shield: ShieldCheck,
} as const;

export function Experience() {
  return (
    <SectionReveal id="experience" className="relative overflow-hidden">
      <div className="section-container">
        <div className="mb-10 max-w-2xl">
          <p className="section-title">Experience</p>
          <p className="section-subtitle">
            A modern timeline of impactful fintech and automation work with
            measurable operational gains.
          </p>
        </div>

        <div className="relative border-l border-white/10 pl-8">
          <div className="absolute left-0 top-10 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-accent shadow-[0_0_20px_rgba(0,229,255,0.25)]" />
          <div className="glass-card neon-border p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-accent">
              {experience.company}
            </p>
            <h3 className="mt-2 text-3xl font-semibold text-white">
              {experience.role}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {experience.duration}
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {experience.achievements.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Code2;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="relative flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_30px_rgba(0,0,0,0.15)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#07101c] text-cyan-accent shadow-[0_0_20px_rgba(0,229,255,0.12)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                    {item.metric ? (
                      <span className="mt-3 inline-flex rounded-full bg-cyan-accent/10 px-3 py-1 text-xs font-medium text-cyan-accent">
                        {item.metric} impact
                      </span>
                    ) : null}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
