"use client";

import { SectionReveal } from "@/components/effects/section-reveal";
import { services } from "@/lib/site-data";
import { motion } from "framer-motion";
import { Bot, FileText, Layers, Plug } from "lucide-react";

const iconMap = {
  bot: Bot,
  layers: Layers,
  plug: Plug,
  file: FileText,
} as const;

export function Services() {
  return (
    <SectionReveal id="services" className="relative overflow-hidden">
      <div className="section-container">
        <div className="mb-10 max-w-2xl">
          <p className="section-title">Services</p>
          <p className="section-subtitle">
            End-to-end solutions that combine AI automation, full-stack
            development, API integration, and document processing.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Layers;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="glass-card neon-border flex gap-5 p-6 md:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-accent/10 text-cyan-accent shadow-[0_0_20px_rgba(0,229,255,0.12)]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
