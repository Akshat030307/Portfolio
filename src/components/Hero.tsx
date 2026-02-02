import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-5xl w-full"
      >
        <div className="overflow-hidden">
          <motion.h1 
            className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight mb-12" 
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="block"
            >
              Reasons You Probably
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.32, ease: "easeOut" }}
              className="block italic"
            >
              Shouldn't Hire Me
            </motion.span>
          </motion.h1>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
          className="text-[clamp(1.125rem,1.5vw,1.25rem)] leading-relaxed max-w-xl text-[#6B6B6B]" 
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Not the perfect candidate. An honest one.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-[#6B6B6B]" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}