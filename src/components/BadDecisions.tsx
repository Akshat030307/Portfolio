import { motion } from "motion/react";
import { useState } from "react";

const decisions = [
  {
    title: "Overengineered the First Version",
    hint: "Perfect design → zero users",
    insight:
      "Spent weeks designing an ideal architecture instead of shipping a scrappy MVP.By the time it was ready, motivation and relevance were gone. Learned to ship fast and iterate with real feedback.",
  },
  {
    title: "Switched Stacks Mid-Degree",
    hint: "MERN → Machine Learning",
    insight:
      "Left the comfort of MERN in my 3rd semester to dive into ML. Felt like discarding months of effort and starting from zero. Faced steep math, theory, and self-doubt. Learned that fundamentals compound—and the ability to relearn matters more than the stack itself.",
  },
  {
    title: "Built Solo, Burned Out",
    hint: "Independent grind → slow progress",
    insight:
      "Tried to do everything alone - backend, ML, frontend, infra. Progress stalled. Learned that collaboration and delegation scale faster than individual brilliance.",
  },
  {
    title: "Cleared NDA, Missed SSB",
    hint: "Written success → final rejection",
    insight:
      "Cleared the NDA written exam but failed at the SSB stage. Learned that preparation isn’t just knowledge. It's personality, mindset, and self-awareness. Rejection reshaped resilience and removed fear of high-stakes evaluations.",
  },
];

export function BadDecisions() {
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null);

  return (
    <section
      id="bad-decisions"
      className="min-h-screen flex items-center px-8 py-32"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] leading-tight tracking-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.4,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="block"
            >
              Bad Decisions I'm
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="block"
            >
              Glad I Made
            </motion.span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="w-20 h-[2px] bg-[#8C2F1C] mb-20 origin-left"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-24 lg:gap-y-20">
          {decisions.map((decision, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="cursor-pointer"
              >
                <h3
                  className="text-2xl mb-4 tracking-tight leading-tight transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                  }}
                >
                  {decision.title}
                </h3>
                <p
                  className="text-sm text-[#6B6B6B] mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {decision.hint}
                </p>

                <motion.div
                  initial={false}
                  animate={{
                    height: isHovered ? "auto" : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="overflow-hidden"
                >
                  <p
                    className="leading-relaxed text-[#6B6B6B] pt-4 border-t border-[#E0D9CC]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {decision.insight}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}