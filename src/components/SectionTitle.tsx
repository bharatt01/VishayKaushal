import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="font-sora font-extrabold text-3xl md:text-[42px] text-jet mb-3">{title}</h2>
    <div className="w-12 h-1 bg-mustard mx-auto mb-4 rounded-full" />
    {subtitle && <p className="text-dark-gray max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);

export default SectionTitle;
