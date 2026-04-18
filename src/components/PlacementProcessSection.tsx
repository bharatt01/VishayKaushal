import { motion } from "framer-motion";

const steps = [
  "Career Assessment",
  "Skill Development",
  "Resume Preparation",
  "Interview Training",
  "Job Matching",
  "Placement",
];

const PlacementProcessSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#fafafa]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-crimson font-semibold text-sm uppercase tracking-wide">
            Placement Process
          </p>

          <h2 className="font-sora text-4xl md:text-5xl font-extrabold text-jet mt-3 leading-tight">
            A Clear Path From
            <span className="block text-gradient-red">
              Learning to Placement
            </span>
          </h2>
        </div>

        {/* Stepper */}
        <div className="bg-white border border-warm-border rounded-2xl p-8 shadow-sm">

          {/* Progress Line */}
          <div className="flex items-center justify-between relative mb-10">

            {/* line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-warm-border -translate-y-1/2" />

            {steps.map((_, i) => (
              <div
                key={i}
                className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-crimson text-crimson font-bold text-sm"
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Labels */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <p className="text-sm font-semibold text-jet leading-snug">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default PlacementProcessSection;