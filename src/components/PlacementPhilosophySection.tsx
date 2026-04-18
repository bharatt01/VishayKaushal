import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const PlacementPhilosophySection: React.FC = () => {
  return (
    <section className="py-28 bg-[#fafafa] relative overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute -top-24 left-0 w-[300px] h-[300px] bg-crimson/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-mustard/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE — BIG IMPACT TEXT */}
        <motion.div {...fadeUp}>
          <span className="text-crimson font-semibold text-sm tracking-wide uppercase">
            Placement Philosophy
          </span>

          <h2 className="font-sora text-4xl md:text-5xl font-extrabold text-jet leading-tight mt-4">
            We Focus on
            <span className="block text-gradient-red">
              Real Career Outcomes
            </span>
          </h2>

          <p className="text-dark-gray mt-6 max-w-md text-lg leading-relaxed">
            Not just training — we ensure students move confidently into real
            job roles with structured support and long-term guidance.
          </p>
        </motion.div>

        {/* RIGHT SIDE — GLASS PANEL */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-8 shadow-xl">

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-crimson flex items-center justify-center">
                <Briefcase className="text-white" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-jet mb-2">
                  Structured Placement Support
                </h3>

                <p className="text-dark-gray text-sm leading-relaxed">
                  Our system ensures every student receives continuous career
                  guidance, structured preparation, and real placement
                  opportunities aligned with industry demands.
                </p>
              </div>
            </div>

          </div>

          {/* soft glow behind card */}
          <div className="absolute inset-0 bg-gradient-to-br from-crimson/10 to-mustard/10 blur-2xl rounded-3xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
};

export default PlacementPhilosophySection;