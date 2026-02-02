import { motion } from "motion/react";
import { useState } from "react";

const failures = [
  {
    year: "2025",
    title: "Stock Predictor Without a Product",
    hint: "Model ready. UI missing",
    items: [
      {
        label: "Built",
        text: "ML model for predicting multiple Indian stocks",
      },
      {
        label: "Failed",
        text: "No usable frontend or clear user flow for predictions",
      },
      {
        label: "Assumed",
        text: "A good model is the hard part",
      },
      {
        label: "Learned",
        text: "Products fail at the interface, not the algorithm",
      },
    ],
  },
  {
    year: "2025",
    title: "ML Model That Never Shipped",
    hint: "High accuracy. No users.",
    items: [
      {
        label: "Built",
        text: "End-to-end ML model with strong offline metrics",
      },
      {
        label: "Failed",
        text: "Never integrated it into a real product or workflow",
      },
      {
        label: "Assumed",
        text: "Accuracy alone creates value",
      },
      {
        label: "Learned",
        text: "Impact comes from deployment, usability, and feedback loops",
      },
    ],
  },
  {
    year: "2024",
    title: "Freelance Client Gone Wrong",
    hint: "Vague requirements. Expensive lesson.",
    items: [
      {
        label: "Built",
        text: "Project with vague requirements",
      },
      {
        label: "Failed",
        text: "Endless revisions. Scope creep.",
      },
      {
        label: "Assumed",
        text: "Could figure it out while building",
      },
      { label: "Learned", text: "Ambiguity is expensive" },
    ],
  },
  {
    year: "2024",
    title: "Technical Decision That Cost Months",
    hint: "Trendy framework. Mid-project rebuild.",
    items: [
      {
        label: "Built",
        text: "Client project in trendy new framework",
      },
      {
        label: "Failed",
        text: "Hit limitations. Rebuilt mid-project.",
      },
      {
        label: "Assumed",
        text: "Cutting-edge > proven boring",
      },
      { label: "Learned", text: "Experiment on side projects" },
    ],
  },
];

export function FailedProjects() {
  const [expandedIndex, setExpandedIndex] = useState<
    number | null
  >(null);

  return (
    <section
      id="failed-projects"
      className="min-h-screen flex items-center px-8 py-32 bg-[#1A1A1A] text-[#F5F1EA]"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] leading-tight tracking-tight mb-4"
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
              Projects That Failed
            </motion.span>
          </motion.h2>
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

        <div className="space-y-12">
          {failures.map((failure, index) => {
            const isExpanded = expandedIndex === index;

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
                className="relative pl-12 border-l border-[#3A3A3A] pb-8 cursor-pointer hover:border-[#6B6B6B] transition-colors duration-300"
                onClick={() =>
                  setExpandedIndex(isExpanded ? null : index)
                }
              >
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-[#8C2F1C] to-transparent opacity-50" />
                <div className="absolute left-[-9px] top-0 w-[17px] h-[17px] rounded-full bg-[#8C2F1C]" />

                <p
                  className="text-xs uppercase tracking-widest text-[#6B6B6B] mb-4"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                  }}
                >
                  {failure.year}
                </p>
                <h3
                  className="text-2xl mb-3 tracking-tight"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                  }}
                >
                  {failure.title}
                </h3>
                <p
                  className="text-sm text-[#6B6B6B] mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {failure.hint}
                </p>

                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="overflow-hidden"
                >
                  <div
                    className="space-y-6 pt-6 border-t border-[#3A3A3A]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {failure.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: isExpanded ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: idx * 0.05,
                          ease: "easeOut",
                        }}
                        className="flex gap-8"
                      >
                        <p
                          className="text-xs uppercase tracking-widest text-[#6B6B6B] w-20 flex-shrink-0 pt-1"
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 600,
                          }}
                        >
                          {item.label}
                        </p>
                        <p className="text-[#E0D9CC] leading-relaxed">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
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