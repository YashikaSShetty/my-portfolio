"use client";

import { Briefcase, Brain, GraduationCap } from "lucide-react";
import { aboutContent } from "@/lib/site-data";
import { SectionReveal, RevealItem } from "@/components/effects/section-reveal";

const timelineIcons = [Briefcase, Brain, GraduationCap];

export function About() {
  return (
    <SectionReveal id="about">
      <div className="section-container">
        <RevealItem>
          <h2 className="section-title">
            <span className="text-gradient">{aboutContent.title}</span>
          </h2>
        </RevealItem>

        <div className="grid gap-8 lg:grid-cols-2">
          <RevealItem>
            <div className="glass-card neon-border space-y-4 p-6 md:p-8">
              {aboutContent.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </RevealItem>

          <RevealItem>
            <div className="relative space-y-0">
              <div
                className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-cyan-accent to-violet-accent"
                aria-hidden
              />
              {aboutContent.timeline.map((item, i) => {
                const Icon = timelineIcons[i] ?? Briefcase;
                return (
                  <div key={item.year} className="relative flex gap-6 pb-8 last:pb-0">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-accent/30 bg-[#0B1020] glow-cyan">
                      <Icon className="h-5 w-5 text-cyan-accent" />
                    </div>
                    <div className="glass-card flex-1 p-4">
                      <span className="font-mono text-xs text-cyan-accent">
                        {item.year}
                      </span>
                      <h3 className="mt-1 font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </RevealItem>
        </div>
      </div>
    </SectionReveal>
  );
}
