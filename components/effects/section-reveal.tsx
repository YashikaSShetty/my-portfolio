"use client";

import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import * as React from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  id?: string;
}

export function SectionReveal({
  children,
  className,
  stagger = false,
  id,
}: SectionRevealProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger ? staggerVariants : defaultVariants}
      className={cn("py-20 md:py-28", className)}
    >
      {children}
    </motion.section>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={defaultVariants} className={className}>
      {children}
    </motion.div>
  );
}
