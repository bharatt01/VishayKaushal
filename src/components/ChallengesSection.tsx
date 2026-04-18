import { motion } from "framer-motion";
import { Briefcase, Wallet, AlertTriangle, BarChart, Clock } from "lucide-react";

type Challenge = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

const challenges: Challenge[] = [
  {
    icon: Briefcase,
    title: "Unemployment After Graduation",
    desc: "Many students face difficulty securing employment due to lack of experience.",
  },
  {
    icon: Wallet,
    title: "Financial Dependency",
    desc: "Delayed earning leads to prolonged dependence on family support.",
  },
  {
    icon: AlertTriangle,
    title: "Skill Gap",
    desc: "Academic curricula often lack practical and industry-relevant training.",
  },
  {
    icon: BarChart,
    title: "Experience Barrier",
    desc: "Employers expect experience, but students are not provided opportunities to gain it.",
  },
  {
    icon: Clock,
    title: "Inefficient Career Progression",
    desc: "Students lose valuable time before entering the workforce.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ChallengesSection: React.FC = () => {
  return (
    <section className="py-24 bg-off-white">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-crimson/10 border border-crimson/30 text-crimson text-sm font-semibold rounded-full mb-6">
            Key Challenges Addressed
          </span>

          <h2 className="font-sora font-extrabold text-3xl md:text-5xl text-jet mb-6">
            Problems Students Face{" "}
            <span className="text-gradient-red">Today</span>
          </h2>

          <p className="text-dark-gray text-lg">
            Traditional education systems often leave students unprepared for real-world careers.
            Here are the key challenges our model solves.
          </p>
        </motion.div>

        {/* TIMELINE FLOW */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-crimson/40 to-mustard/40" />

          <div className="space-y-10">
            {challenges.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Icon Circle */}
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-white border border-warm-border flex items-center justify-center shadow-sm">
                      <Icon size={18} className="text-crimson" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white border border-warm-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">

                    <h3 className="font-sora font-bold text-lg text-jet mb-2">
                      {item.title}
                    </h3>

                    <p className="text-dark-gray text-sm leading-relaxed">
                      {item.desc}
                    </p>

                    {/* subtle accent line */}
                    <div className="mt-4 h-[2px] w-12 bg-gradient-to-r from-crimson to-mustard rounded-full" />

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;