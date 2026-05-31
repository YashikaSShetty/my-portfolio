"use client";

import { SectionReveal } from "@/components/effects/section-reveal";
import { Button } from "@/components/ui/button";
import { certifications } from "@/lib/site-data";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  return (
    <SectionReveal id="certifications" className="relative overflow-hidden">
      <div className="section-container">
        <div className="mb-10 max-w-2xl">
          <p className="section-title">Certifications</p>
          <p className="section-subtitle">
            Verified credentials that highlight technical mastery across frontend,
            backend, and database engineering.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card neon-border flex flex-col gap-4 p-6 text-left"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-accent/10 text-cyan-accent shadow-[0_0_20px_rgba(0,229,255,0.12)]">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Official HackerRank certification badge.
                </p>
              </div>
              <Button asChild variant="secondary" size="sm">
                <a href={cert.verifyUrl} target="_blank" rel="noreferrer">
                  Verify Certificate
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
