import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

type ComparisonItem = {
  aspect: string;
  traditional: string;
  modern: string;
};

const data: ComparisonItem[] = [
  { aspect: "Career Start", traditional: "After graduation", modern: "During education" },
  { aspect: "Income", traditional: "Delayed", modern: "Immediate" },
  { aspect: "Experience", traditional: "Limited", modern: "Extensive" },
  { aspect: "Confidence", traditional: "Moderate", modern: "High" },
  { aspect: "Career Growth", traditional: "Uncertain", modern: "Structured" },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-24 bg-off-white">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-crimson/10 border border-crimson/30 text-crimson text-sm font-semibold rounded-full mb-6">
            Comparison
          </span>

          <h2 className="font-sora font-extrabold text-3xl md:text-5xl text-jet mb-6">
            Traditional vs{" "}
            <span className="text-gradient-red">Integrated Model</span>
          </h2>

          <p className="text-dark-gray text-lg">
            See how our approach transforms education into a career-first journey.
          </p>
        </motion.div>

        {/* COMPARISON BOX */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-warm-border shadow-sm bg-white">

          {/* HEADERS */}
          <div className="grid grid-cols-1 md:grid-cols-3 text-center border-b border-warm-border">

            <div className="hidden md:block py-5 font-semibold text-dark-gray">
              Aspect
            </div>

            <div className="py-5 bg-gray-50 font-sora font-bold text-jet">
              Traditional Education
            </div>

            <div className="py-5 bg-gradient-to-r from-crimson to-blood-red text-white font-sora font-bold">
              Vishay Kaushal Model
            </div>

          </div>

          {/* ROWS */}
          {data.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 text-center border-b border-warm-border last:border-none"
            >

              {/* Aspect */}
              <div className="py-5 font-semibold text-jet bg-gray-50 md:bg-transparent">
                {item.aspect}
              </div>

              {/* Traditional */}
              <div className="py-5 flex items-center justify-center gap-2 text-dark-gray">
                <XCircle size={18} className="text-gray-400" />
                {item.traditional}
              </div>

              {/* Modern */}
              <div className="py-5 flex items-center justify-center gap-2 text-crimson font-semibold">
                <CheckCircle size={18} className="text-crimson" />
                {item.modern}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;