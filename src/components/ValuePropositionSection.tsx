import { motion } from "framer-motion";
import { Users, Briefcase, TrendingUp, Award, LucideIcon } from "lucide-react";

type Metric = {
  icon: LucideIcon;
  value: string;
  label: string;
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const metrics: Metric[] = [
  {
    icon: Users,
    value: "5000+",
    label: "Students Enrolled",
  },
  {
    icon: Briefcase,
    value: "120+",
    label: "Hiring Partners",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Placement Assistance",
  },
  {
    icon: Award,
    value: "Multiple",
    label: "High-Growth Sectors",
  },
];

const ValuePropositionSection: React.FC = () => {
  return (
    <section className="py-24 bg-warm-gray-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div {...fadeUp}>
            <span className="inline-block px-4 py-1.5 bg-crimson/10 border border-crimson/30 text-crimson text-sm font-semibold rounded-full mb-6">
              Key Value Proposition
            </span>

            <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-jet mb-6 leading-tight">
              A Career-First Approach to{" "}
              <span className="text-gradient-red">Modern Education</span>
            </h2>

            <p className="text-dark-gray text-lg leading-relaxed mb-6">
              Vishay Kaushal India Pvt Ltd offers a career-first education model
              that enables students to transition directly into the workforce
              while pursuing their academic degrees.
            </p>

            <p className="text-dark-gray text-base leading-relaxed">
              Unlike conventional education pathways that delay employment until
              after graduation, our model integrates structured training,
              placement support, and real-world job exposure from the beginning.
            </p>
          </motion.div>

          {/* RIGHT METRICS */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {metrics.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group relative bg-white/70 backdrop-blur-lg border border-warm-border rounded-2xl p-6 text-center transition-all duration-300 hover:scale-[1.05] hover:shadow-xl"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-crimson/10 via-transparent to-mustard/20 rounded-2xl" />

                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full gradient-red-black flex items-center justify-center shadow-md">
                    <Icon size={20} className="text-white" />
                  </div>

                  {/* Value */}
                  <div className="text-2xl md:text-3xl font-sora font-extrabold text-crimson">
                    {item.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm text-dark-gray mt-1">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;