"use client";

import { SectionReveal } from "@/components/effects/section-reveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/site-data";
import { motion } from "framer-motion";
import { ExternalLink, Github,Sparkles } from 'lucide-react'

export function Projects() {
  return (
    <SectionReveal id="projects" className="relative overflow-hidden">
      <div className="section-container">
        <div className="mb-10 max-w-2xl">
          <p className="section-title">Featured Projects</p>
          <p className="section-subtitle">
            Showcase of AI workflows, document processing, and SaaS-ready fintech
            products built with modern stacks.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card neon-border flex h-full flex-col justify-between p-6 shadow-[0_0_40px_rgba(0,229,255,0.08)]"
            >
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-cyan-accent">
                  <Sparkles className="h-4 w-4" />
                  Featured
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="secondary" size="sm">
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Live Demo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
