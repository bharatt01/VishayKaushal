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
      </section>{/* ================= ABOUT MARG SOFTWARE ================= */}
<section className="py-28 bg-white relative overflow-hidden">
  {/* background glow */}
  <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-crimson/10 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-mustard/10 blur-3xl rounded-full" />

  <div className="container mx-auto px-4 max-w-6xl relative z-10">

    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        What is MARG Software?
      </h2>
      <p className="text-dark-gray text-lg leading-relaxed">
        MARG is a powerful business management and billing software widely used in 
        pharmaceutical, retail, and distribution industries. It helps businesses 
        automate daily operations like billing, inventory, GST filing, and reporting — 
        making it an essential tool for modern commerce.
      </p>
    </motion.div>

    {/* FEATURE GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          icon: "💊",
          title: "Pharma-Focused System",
          desc: "Specially designed for medical stores with batch tracking, expiry management, and drug-level control.",
        },
        {
          icon: "⚡",
          title: "Fast Billing Engine",
          desc: "Generate invoices in seconds with barcode support and real-time stock updates.",
        },
        {
          icon: "📊",
          title: "Smart Reports",
          desc: "Access profit reports, sales analysis, and business insights instantly.",
        },
        {
          icon: "📦",
          title: "Inventory Automation",
          desc: "Track stock levels, expiry alerts, and reorder management without manual effort.",
        },
        {
          icon: "🧾",
          title: "GST Ready",
          desc: "Fully compliant with GST norms including return filing and tax reports.",
        },
        {
          icon: "🔐",
          title: "Secure & Reliable",
          desc: "Role-based access and data protection ensure safe business operations.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          {...fadeUp}
          transition={{ delay: i * 0.1 }}
          className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-crimson to-mustard"
        >
          <div className="bg-white rounded-2xl p-6 h-full border border-warm-border group-hover:shadow-xl transition-all duration-300">

            <div className="text-3xl mb-4">{item.icon}</div>

            <h3 className="font-bold text-lg mb-2">{item.title}</h3>

            <p className="text-dark-gray text-sm leading-relaxed">
              {item.desc}
            </p>

          </div>
        </motion.div>
      ))}

    </div>
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
{/* ================= SALARY PACKAGES ================= */}
<section className="py-28 bg-black text-white relative overflow-hidden">

  {/* background glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-crimson/20 blur-[120px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-mustard/20 blur-[120px] rounded-full" />

  <div className="container mx-auto px-4 relative z-10 max-w-6xl">

    <motion.h2
      {...fadeUp}
     className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white"
    >
      Your Career Growth Potential
    </motion.h2>

    <motion.p
      {...fadeUp}
      transition={{ delay: 0.2 }}
      className="text-center text-white/70 max-w-2xl mx-auto mb-16"
    >
      With MARG software expertise, candidates unlock high-demand roles with competitive salary packages across industries.
    </motion.p>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Beginner Level",
          salary: "₹2.4 LPA",
          desc: "Start your career as a billing or accounts executive in retail & pharma sectors.",
        },
        {
          title: "Mid Level",
          salary: "₹3.6 LPA",
          desc: "Work as an inventory manager or MIS executive with real business handling.",
        },
        {
          title: "Advanced Level",
          salary: "₹5+ LPA",
          desc: "Grow into senior accountant or operations roles with strong domain expertise.",
        },
      ].map((pkg, i) => (
        <motion.div
          key={i}
          {...fadeUp}
          transition={{ delay: i * 0.15 }}
          className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-crimson to-mustard"
        >
          {/* inner card */}
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/10 group-hover:scale-[1.04] transition-all duration-300">

            {/* title */}
            <p className="text-white/60 text-sm mb-3">{pkg.title}</p>

            {/* salary */}
            <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-mustard to-crimson mb-4">
              {pkg.salary}
            </h3>

            {/* desc */}
            <p className="text-white/70 text-sm leading-relaxed">
              {pkg.desc}
            </p>

            {/* glow hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-crimson/10 via-transparent to-mustard/10 rounded-3xl" />

          </div>
        </motion.div>
      ))}

    </div>

  </div>
</section>
    </div>
  );
};

export default MargSoftwarePage;