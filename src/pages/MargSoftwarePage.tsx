import { motion } from "framer-motion";
import { CheckCircle, Briefcase, Layers, TrendingUp } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const skills = [
  "Billing and invoicing",
  "Inventory and stock management",
  "GST compliance",
  "Purchase and sales tracking",
  "Management reporting",
];

const careers = [
  "Pharma Billing Executive",
  "Medical Store Accountant",
  "Inventory Executive",
  "MIS Executive",
];

const industries = [
  "Pharmaceutical companies",
  "Medical stores and distributors",
  "Retail and wholesale businesses",
  "Accounting and GST environments",
];

const MargSoftwarePage = () => {
  return (
    <div className="bg-[#fafafa] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 overflow-hidden">

        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100" />
        <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-crimson/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-mustard/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* TEXT */}
          <motion.div {...fadeUp}>
            <h1 className="text-5xl md:text-6xl font-extrabold font-sora text-jet leading-tight mb-6">
              MARG Software
              <br />
              <span className="text-gradient-red">Training Program</span>
            </h1>

            <p className="text-dark-gray text-lg max-w-lg mb-8">
              Master one of the most widely used billing and accounting software
              in the pharmaceutical and retail industries.
            </p>

            <button className="bg-crimson text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
              Enroll Now
            </button>
          </motion.div>

          {/* SIDE CARD */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="bg-white border border-warm-border rounded-3xl p-8 shadow-xl"
          >
            <h3 className="font-bold text-lg mb-4">Why Learn MARG?</h3>

            <p className="text-dark-gray text-sm leading-relaxed">
              MARG Software is essential for billing, inventory management, and GST compliance.
              It is widely used across pharmaceutical businesses and retail sectors,
              making it a high-demand skill.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= INDUSTRY APPLICATION ================= */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">

          <motion.h2 {...fadeUp} className="text-4xl font-bold mb-16">
            Industry Applications
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-warm-border rounded-2xl bg-warm-gray-bg hover:shadow-md transition"
              >
                <Layers className="text-crimson mb-3" />
                <p className="text-dark-gray text-sm">{item}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="py-28 bg-warm-gray-bg">
        <div className="container mx-auto px-4 max-w-6xl">

          <motion.h2 {...fadeUp} className="text-4xl font-bold mb-16">
            Skills You Will Learn
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">

            {skills.map((skill, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white border border-warm-border rounded-2xl"
              >
                <CheckCircle className="text-crimson mt-1" />
                <p className="text-dark-gray">{skill}</p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CAREERS ================= */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">

          <motion.h2 {...fadeUp} className="text-4xl font-bold mb-16">
            Career Opportunities
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {careers.map((role, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-crimson to-blood-red text-white p-6 rounded-2xl"
              >
                <Briefcase className="mb-3" />
                <p className="font-semibold">{role}</p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= IMPORTANCE ================= */}
      <section className="py-28 bg-warm-gray-bg">
        <div className="container mx-auto px-4 max-w-5xl text-center">

          <motion.h2 {...fadeUp} className="text-4xl font-bold mb-10">
            Why MARG Training Matters
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark-gray leading-relaxed"
          >
            Professionals trained in MARG software are in high demand,
            especially in pharmaceutical and retail sectors. This training
            significantly enhances employability and accelerates placement
            opportunities by providing real-world, industry-relevant skills.
          </motion.p>

          {/* highlight */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.4 }}
            className="mt-10 inline-block px-6 py-3 bg-crimson text-white rounded-full font-semibold"
          >
            High Demand Skill 🚀
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default MargSoftwarePage;