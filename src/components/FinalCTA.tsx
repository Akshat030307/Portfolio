import { motion } from "motion/react";
import { Mail, Phone, Linkedin, FileText } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-8 py-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        <motion.h2 
          className="text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight mb-8" 
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="block"
          >
            Still Here?
          </motion.span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-[#6B6B6B] mb-16 leading-relaxed" 
          style={{ fontFamily: 'var(--font-body)' }}
        >
          We probably think the same way.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          href="mailto:akshatchowdhary03@gmail.com"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-[#8C2F1C] text-[#F5F1EA] px-12 py-5 text-lg tracking-wide hover:bg-[#6d2416] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
        >
          Start a conversation
        </motion.a>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
          className="text-xs text-[#6B6B6B] mt-16 mb-20 tracking-widest uppercase" 
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
        >
          No sales pitch
        </motion.p>

        {/* Contact Block */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="border-t border-[#E0D9CC] pt-16 mt-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 max-w-4xl mx-auto">
            <motion.a
              href="mailto:akshatchowdhary03@gmail.com"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.7, ease: "easeOut" }}
              className="flex items-center gap-3 text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-300 group"
            >
              <Mail size={18} strokeWidth={1.5} className="text-[#E0D9CC] group-hover:text-[#8C2F1C] transition-colors duration-300" />
              <span className="text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                akshatchowdhary03@gmail.com
              </span>
            </motion.a>

            <motion.a
              href="tel:9971908048"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-300 group"
            >
              <Phone size={18} strokeWidth={1.5} className="text-[#E0D9CC] group-hover:text-[#8C2F1C] transition-colors duration-300" />
              <span className="text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                9971908048
              </span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/akshat-chowdhary"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.9, ease: "easeOut" }}
              className="flex items-center gap-3 text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-300 group"
            >
              <Linkedin size={18} strokeWidth={1.5} className="text-[#E0D9CC] group-hover:text-[#8C2F1C] transition-colors duration-300" />
              <span className="text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                LinkedIn
              </span>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1UOYAX1SLOxqjmYP-EaWdgdcjKYHvBtvP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.0, ease: "easeOut" }}
              className="flex items-center gap-3 text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-300 group"
            >
              <FileText size={18} strokeWidth={1.5} className="text-[#E0D9CC] group-hover:text-[#8C2F1C] transition-colors duration-300" />
              <span className="text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                Resume
              </span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}