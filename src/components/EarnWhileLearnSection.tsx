import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const advantages = [
  "Early income generation",
  "Real-world work experience",
  "Exposure to industry processes and systems",
  "Development of communication and professional skills",
  "Improved employability at the time of graduation",
];

const challenges = [
  "Delayed career start",
  "Lack of practical exposure",
  "Financial dependency on family",
  "Uncertainty after graduation",
];

const EarnWhileLearnSection: React.FC = () => {
  return (
    <section className="py-24 bg-warm-gray-bg">
      <div className="container mx-auto px-4">

        {/* TOP */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-mustard/20 border border-mustard/40 text-mustard text-sm font-semibold rounded-full mb-6">
            Earn While Learn
          </span>

          <h2 className="font-sora font-extrabold text-3xl md:text-5xl text-jet mb-6 leading-tight">
            Learn, Work &{" "}
            <span className="text-gradient-red">Earn Simultaneously</span>
          </h2>

          <p className="text-dark-gray text-lg leading-relaxed">
            The Earn While Learn model allows students to participate in real job roles
            while continuing their education, ensuring skill development, corporate exposure,
            and financial independence.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">

          {/* LEFT — ADVANTAGES */}
          <motion.div
            {...fadeUp}
            className="bg-white rounded-2xl border border-warm-border p-7 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-sora font-bold text-lg text-crimson mb-5">
              Key Advantages
            </h3>

            <ul className="space-y-4">
              {advantages.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-crimson mt-1" />
                  <span className="text-dark-gray text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CENTER — IMPROVED */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="w-full rounded-2xl bg-white border border-warm-border p-8 text-center shadow-md hover:shadow-lg transition">

              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-crimson text-white flex items-center justify-center text-2xl font-bold shadow">
                ₹
              </div>

              <h3 className="font-sora font-extrabold text-xl text-jet mb-3">
                Earn While You Learn
              </h3>

              <p className="text-dark-gray text-sm leading-relaxed max-w-xs mx-auto">
                Gain real-world experience, build skills, and earn income —
                all while completing your degree.
              </p>

            </div>
          </motion.div>

          {/* RIGHT — CHALLENGES (FIXED) */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl border border-warm-border p-7 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-sora font-bold text-lg text-mustard mb-5">
              Challenges Addressed
            </h3>

            <ul className="space-y-4">
              {challenges.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <AlertCircle size={18} className="text-mustard mt-1" />
                  <span className="text-dark-gray text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EarnWhileLearnSection;