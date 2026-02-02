import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Left side - Logo/Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3"
        >
          <span
            className="text-sm tracking-[0.2em] uppercase text-[#1A1A1A]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
          >
            Anti-Portfolio
          </span>
          <span className="text-xs text-[#6B6B6B] italic" style={{ fontFamily: 'var(--font-body)' }}>
            (honest version)
          </span>
        </motion.div>
      </div>
    </motion.nav>
  );
}