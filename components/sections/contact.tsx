"use client";

import React, { useState } from "react";
import { SectionReveal } from "@/components/effects/section-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-data";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("success");
  };

  return (
    <SectionReveal id="contact" className="relative overflow-hidden">
      <div className="section-container">
        <div className="mb-10 max-w-2xl">
          <p className="section-title">Let&apos;s Build Something Amazing</p>
          <p className="section-subtitle">
            Reach out for AI automation, full-stack development, or fintech
            engineering collaborations.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
            className="glass-card neon-border space-y-6 p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" placeholder="Project inquiry" required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Tell me about your project..." required />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" size="lg">
                Send Message
                <Send className="h-4 w-4" />
              </Button>
              {status === "success" && (
                <p className="text-sm text-cyan-accent">Message sent successfully — I&apos;ll be in touch soon.</p>
              )}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass-card neon-border p-6 md:p-8">
              <div className="flex items-center gap-4 text-cyan-accent">
                <MapPin className="h-5 w-5" />
                <p className="font-semibold text-white">Kalyan, Maharashtra</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Available for remote and hybrid roles, with a focus on AI,
                automation, and fintech product engineering.
              </p>
            </div>
            <div className="glass-card neon-border p-6 md:p-8">
              <div className="flex items-center gap-4 text-cyan-accent">
                <Mail className="h-5 w-5" />
                <p className="font-semibold text-white">{siteConfig.email}</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Message me directly for consulting, collaborations, or portfolio
                reviews.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
}
