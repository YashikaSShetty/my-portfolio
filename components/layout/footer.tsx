"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
} as const;

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="section-container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © 2025 Yashika Shetty.
          </p>
          <p className="mt-1 text-xs text-muted-foreground/80">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks
            .filter((s) => s.name !== "Email")
            .map((social) => {
              const Icon =
                iconMap[social.name as keyof typeof iconMap] ?? FaGithub;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-cyan-accent focus-ring rounded"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
