import { motion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#8C2F1C] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}