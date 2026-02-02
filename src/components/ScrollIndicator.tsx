import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "" },
  { id: "skill-gaps", label: "Gaps" },
  { id: "failed-projects", label: "Failures" },
  { id: "bad-decisions", label: "Decisions" },
  { id: "under-pressure", label: "Pressure" },
  { id: "contact", label: "Contact" }
];

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate which section we're in based on scroll position
      const sectionIndex = Math.floor(
        (scrollPosition / documentHeight) * sections.length
      );
      
      setActiveSection(Math.min(sectionIndex, sections.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {sections.map((section, index) => (
        <div key={section.id} className="flex items-center gap-3 group">
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ 
              opacity: activeSection === index ? 1 : 0,
              x: activeSection === index ? 0 : 10
            }}
            transition={{ duration: 0.2 }}
            className="text-xs tracking-widest uppercase text-[#6B6B6B] select-none"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
          >
            {section.label}
          </motion.span>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === index 
                  ? 'bg-[#8C2F1C] scale-125' 
                  : 'bg-[#E0D9CC] hover:bg-[#6B6B6B]'
              }`}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}
