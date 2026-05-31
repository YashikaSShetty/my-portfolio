"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiPython,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiOpenai,
} from "react-icons/si";

const icons = [
  { Icon: SiReact, color: "#61DAFB", top: "15%", left: "8%", delay: 0 },
  { Icon: SiPython, color: "#3776AB", top: "25%", right: "10%", delay: 0.5 },
  { Icon: SiNodedotjs, color: "#339933", top: "60%", left: "5%", delay: 1 },
  { Icon: SiTypescript, color: "#3178C6", top: "70%", right: "8%", delay: 1.5 },
  { Icon: SiMongodb, color: "#47A248", top: "40%", left: "3%", delay: 2 },
  { Icon: SiOpenai, color: "#00E5FF", top: "50%", right: "5%", delay: 2.5 },
];

export function FloatingTechIcons() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-[4] hidden overflow-hidden lg:block" aria-hidden>
      {icons.map(({ Icon, color, top, left, right, delay }, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          style={{ top, left, right, color }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <Icon size={28} />
        </motion.div>
      ))}
    </div>
  );
}
