import { Footer } from "@/components/layout/footer";
import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { HeroStats } from "@/components/sections/hero-stats";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroStats />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
