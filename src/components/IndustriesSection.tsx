import { motion } from "framer-motion";
import { useState } from "react";

const industries = [
  {
    title: "Marketing & Sales",
    desc: "Digital marketing, business development, and customer engagement roles.",
  },
  {
    title: "BFSI",
    desc: "Banking operations, financial services, and insurance-related roles.",
  },
  {
    title: "Information Technology",
    desc: "IT support, development, and data-driven roles.",
  },
  {
    title: "Pharmaceutical Sector",
    desc: "Roles in pharma companies, medical stores, and distribution.",
  },
  {
    title: "Operations",
    desc: "Administrative, coordination, and business process roles.",
  },
];

const IndustriesSection: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="sticky top-24">
            <p className="text-crimson font-semibold text-sm uppercase tracking-wide">
              Industries Covered
            </p>

            <h2 className="font-sora text-4xl md:text-5xl font-extrabold text-jet mt-4 leading-tight">
              Career Paths Across
              <span className="block text-gradient-red">
                High-Growth Sectors
              </span>
            </h2>

            <p className="text-dark-gray mt-6 max-w-md">
              Explore multiple industries where you can build real experience,
              develop skills, and grow professionally from day one.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4">

            {industries.map((item, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setActive(i)}
                className={`cursor-pointer border rounded-2xl p-5 transition-all duration-300 
                  ${
                    active === i
                      ? "bg-crimson text-white shadow-xl scale-[1.02]"
                      : "bg-white border-warm-border hover:border-crimson"
                  }`}
              >

                {/* TOP ROW */}
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-sora font-bold text-lg ${
                      active === i ? "text-white" : "text-jet"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <div
                    className={`w-2 h-2 rounded-full ${
                      active === i ? "bg-white" : "bg-crimson"
                    }`}
                  />
                </div>

                {/* EXPAND CONTENT */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: active === i ? "auto" : 0,
                    opacity: active === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p
                    className={`text-sm mt-3 ${
                      active === i ? "text-white/90" : "text-dark-gray"
                    }`}
                  >
                    {item.desc}
                  </p>
                </motion.div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;