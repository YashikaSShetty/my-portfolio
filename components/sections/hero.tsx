"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  heroRoles,
  siteConfig,
  socialLinks,
} from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/use-typewriter";

const socialIconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
} as const;

function HexagonPortrait() {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="relative mx-auto flex h-[320px] w-[280px] items-center justify-center sm:h-[380px] sm:w-[320px]"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="absolute inset-0 animate-spin-slow rounded-full opacity-60"
        style={{
          background:
            "conic-gradient(from 0deg, #00E5FF, #7C3AED, #00E5FF, transparent, #00E5FF)",
          padding: "3px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        aria-hidden
      />
      <div
        className="relative flex h-[85%] w-[85%] items-center justify-center glow-cyan"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          background:
            "linear-gradient(135deg, rgba(0,229,255,0.2), rgba(124,58,237,0.2))",
        }}
      >
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          {!imgError ? (
            <Image
              src="/images/profile.jpg"
              alt="Yashika Shetty - Software Engineer"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 280px, 320px"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-cyan-accent/20 to-violet-accent/30">
              <span className="font-mono text-5xl font-bold text-gradient">
                YS
              </span>
              <span className="mt-2 text-xs text-muted-foreground">
                Add photo to /public/images/profile.jpg
              </span>
            </div>
          )}
        </div>
      </div>
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-accent"
          style={{
            top: `${20 + i * 12}%`,
            left: i % 2 === 0 ? "-4%" : "104%",
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          aria-hidden
        />
      ))}
    </motion.div>
  );
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { displayed } = useTypewriter(siteConfig.greeting, 70);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % heroRoles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />
      <div className="section-container grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-2 font-mono text-sm text-cyan-accent">
            {displayed}
            <span className="animate-pulse">|</span>
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{siteConfig.name}</span>
          </h1>
          <div className="mt-4 h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={heroRoles[roleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-xl font-medium text-muted-foreground sm:text-2xl"
              >
                {heroRoles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
            {siteConfig.bio}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href={siteConfig.resumeUrl} download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex gap-4">
            {socialLinks.map((social) => {
              const Icon =
                socialIconMap[social.name as keyof typeof socialIconMap];
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-cyan-accent/50 hover:text-cyan-accent focus-ring"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <HexagonPortrait />
        </motion.div>
      </div>
    </section>
  );
}
