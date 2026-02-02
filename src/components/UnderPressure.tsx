import { motion } from "motion/react";
import { useState } from "react";
import profileImage from "figma:asset/982850ed74751bc105a4d975c5c883b594cdf097.png";

const principles = [
  "When everything breaks, I get quiet",
  "Write down what I know. Not what I assume.",
  "Work backward from the deadline",
  "Simple > elegant under pressure",
  "Stress makes people reach for complexity",
  "Best decision: do less",
  "Ask for help early. Ego is expensive.",
  "I don't thrive under pressure. I just don't fall apart."
];

export function UnderPressure() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="min-h-screen flex items-center px-8 py-32 bg-[#1A1A1A] text-[#F5F1EA]">
      <div className="max-w-5xl mx-auto w-full">
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
              How I Think
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="block"
            >
              Under Pressure
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2">
            {!isRevealed ? (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsRevealed(true)}
                className="text-left w-full group"
              >
                <p className="text-lg text-[#6B6B6B] mb-8 group-hover:text-[#E0D9CC] transition-colors duration-300" style={{ fontFamily: 'var(--font-body)' }}>
                  Click to reveal principles →
                </p>
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {principles.map((principle, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08, ease: "easeOut" }}
                    className={`text-lg leading-relaxed ${
                      index === principles.length - 1 
                        ? 'border-l-2 border-[#F5F1EA] pl-6 text-[#F5F1EA]' 
                        : 'text-[#E0D9CC]'
                    }`}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {principle}
                  </motion.p>
                ))}
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:sticky lg:top-32"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-full grayscale opacity-50 hover:opacity-70 transition-opacity duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}