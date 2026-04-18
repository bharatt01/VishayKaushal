import { motion } from "framer-motion";
import { Megaphone, Landmark, Settings, Code } from "lucide-react";

type Industry = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

const industries: Industry[] = [
  {
    icon: Megaphone,
    title: "Marketing & Sales",
    desc: "Digital marketing, business development, and customer engagement roles.",
  },
  {
    icon: Landmark,
    title: "BFSI Sector",
    desc: "Banking operations, financial services, and insurance-related positions.",
  },
  {
    icon: Settings,
    title: "Operations & Processes",
    desc: "Administrative, coordination, and process management roles.",
  },
  {
    icon: Code,
    title: "Information Technology",
    desc: "IT support, development, and data-related roles.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const IndustryAlignmentSection: React.FC = () => {
  return (
    <section className="py-24 bg-warm-gray-bg">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-mustard/20 border border-mustard/40 text-mustard text-sm font-semibold rounded-full mb-6">
            Industry Alignment
          </span>

          <h2 className="font-sora font-extrabold text-3xl md:text-5xl text-jet mb-6">
            Career Opportunities Across{" "}
            <span className="text-gradient-red">Key Industries</span>
          </h2>

          <p className="text-dark-gray text-lg">
            We prepare students for real-world roles across multiple high-demand sectors.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {industries.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-warm-border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-red-black flex items-center justify-center shadow-md">
                  <Icon size={22} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="font-sora font-bold text-lg text-jet mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-dark-gray text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover Accent */}
                <div className="mt-4 h-[2px] w-0 group-hover:w-10 bg-gradient-to-r from-crimson to-mustard mx-auto transition-all duration-300" />
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default IndustryAlignmentSection;