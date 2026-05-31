"use client";

import { SectionReveal } from "@/components/effects/section-reveal";
import { skillCategories } from "@/lib/site-data";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <SectionReveal id="skills" className="relative overflow-hidden">
      <div className="section-container">
        <div className="mb-10 max-w-2xl">
          <p className="section-title">Skills</p>
          <p className="section-subtitle">
            Deep expertise across AI automation, frontend and backend systems,
            databases, and tooling for modern product delivery.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card neon-border p-6 shadow-[0_0_40px_rgba(0,229,255,0.08)]"
            >
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>
              <div className="mt-6 grid gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex max-w-fit rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted-foreground transition hover:border-cyan-accent/40 hover:text-cyan-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
