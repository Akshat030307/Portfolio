import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const gaps = [
  {
    skill: "Advanced System Design",
    hint: "Enterprise-scale distributed systems",
    context: "I can build scalable applications, but distributed systems architecture at enterprise scale is still developing.",
    action: "Designing Data-Intensive Applications + open-source contributions"
  },
  {
    skill: "Machine Learning Implementation",
    hint: "Integration ≠ production from scratch",
    context: "I understand ML concepts and can integrate existing models, but haven't built production ML systems from scratch.",
    action: "Stanford CS229 + building recommendation systems"
  },
  {
    skill: "Mobile-First Development",
    hint: "Web-focused background",
    context: "Most of my work has been web-focused. React Native and native mobile development experience is limited.",
    action: "Weekend project + platform-specific patterns"
  },
  {
    skill: "Legacy Code Modernization",
    hint: "Modern stacks only",
    context: "I've worked primarily with modern stacks. Experience refactoring decades-old codebases is minimal.",
    action: "Nonprofit volunteer work + migration strategies"
  }
];

export function SkillGaps() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="skill-gaps" className="min-h-screen flex items-center px-8 py-32">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-tight tracking-tight" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="block"
            >
              Things I Don't Know
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="block text-[#6B6B6B]"
            >
              (Yet)
            </motion.span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="w-20 h-[2px] bg-[#8C2F1C] mb-20 origin-left"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {gaps.map((gap, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="border border-[#E0D9CC] p-10 hover:border-[#1A1A1A] transition-colors duration-300 cursor-pointer"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h3 className="text-2xl tracking-tight flex-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                    {gap.skill}
                  </h3>
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex-shrink-0 text-[#6B6B6B]"
                  >
                    {isExpanded ? <Minus size={20} strokeWidth={2} /> : <Plus size={20} strokeWidth={2} />}
                  </motion.div>
                </div>

                <p className="text-[#6B6B6B] text-sm mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                  {gap.hint}
                </p>

                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6 pt-4 border-t border-[#E0D9CC]">
                    <p className="text-[#6B6B6B] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                      {gap.context}
                    </p>
                    <div className="border-l-2 border-[#1A1A1A] pl-6">
                      <p className="text-xs uppercase tracking-widest text-[#6B6B6B] mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                        Currently
                      </p>
                      <p className="leading-relaxed text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                        {gap.action}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}