import { motion } from "framer-motion";
import { CheckCircle, Briefcase, TrendingUp, Clock } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const timeline = [
  "Career assessment and goal identification",
  "Resume building and professional profile development",
  "Industry-specific training",
  "Interview preparation and communication training",
  "Participation in company interviews",
  "Offer letter and onboarding",
];

const roles = [
  {
    title: "Marketing & Sales",
    items: ["Business Development Executive", "Sales Associate", "Digital Marketing Executive"],
  },
  {
    title: "BFSI",
    items: ["Banking Executive", "Financial Advisor", "Relationship Manager"],
  },
  {
    title: "Operations",
    items: ["Process Executive", "Backend Operations Associate"],
  },
  {
    title: "Technical Roles",
    items: ["IT Support Executive", "Junior Developer"],
  },
];

const benefits = [
  {
    title: "Financial Independence",
    desc: "Students begin earning early, reducing financial burden.",
  },
  {
    title: "Work Experience",
    desc: "Participants gain significant experience before graduation.",
  },
  {
    title: "Skill Development",
    desc: "Focus on practical, job-relevant skills.",
  },
  {
    title: "Professional Exposure",
    desc: "Early exposure to workplace culture and expectations.",
  },
];

const ProgramPage: React.FC = () => {
  return (
    <div className="bg-off-white">

      {/* HERO */}
      <section className="relative py-32 bg-black overflow-hidden">

  {/* 🔴 Dynamic Background */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-600/20 blur-[180px] rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-500/20 blur-[150px] rounded-full"></div>
  </div>

  {/* Grid Pattern (subtle) */}
  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />

  <div className="relative container mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}
      <div className="relative z-10">

        {/* Tag */}
        <motion.div
          {...fadeUp}
          className="inline-block mb-6 px-4 py-1 text-xs tracking-widest uppercase text-red-400 border border-red-500/30 rounded-full"
        >
          Earn While Learn Program
        </motion.div>

        {/* Big Heading */}
        <motion.h1
          {...fadeUp}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-white"
        >
          Build Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-500">
            Career While
          </span>{" "}
          Studying
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeUp}
          className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed"
        >
          A powerful program that merges education with real-world work experience —
          helping you earn, grow, and stay ahead in your career journey from day one.
        </motion.p>

        {/* CTA */}
        <motion.div {...fadeUp} className="mt-10 flex gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition">
            Get Started
          </button>

          <button className="px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* RIGHT SIDE - VISUAL STACK */}
      <div className="relative flex justify-center items-center">

        {/* Main Card */}
        <motion.div
          {...fadeUp}
          className="relative w-[320px] h-[380px] bg-gradient-to-br from-red-600/20 to-rose-500/20 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl"
        >
          <h3 className="text-white text-xl font-semibold mb-4">
            Real Experience
          </h3>
          <p className="text-gray-400 text-sm">
            Work on live projects while studying and build a portfolio that stands out.
          </p>

          {/* Floating mini card */}
          <div className="absolute -top-10 -right-10 w-[140px] h-[140px] bg-black border border-red-500/20 rounded-2xl p-4 shadow-xl">
            <p className="text-red-400 text-xs">Monthly Earnings</p>
            <h4 className="text-white text-xl font-bold mt-2">₹10k+</h4>
          </div>

          {/* Floating mini card 2 */}
          <div className="absolute -bottom-10 -left-10 w-[140px] h-[140px] bg-black border border-white/10 rounded-2xl p-4 shadow-xl">
            <p className="text-gray-400 text-xs">Experience</p>
            <h4 className="text-white text-xl font-bold mt-2">2+ Years</h4>
          </div>
        </motion.div>

      </div>

    </div>
  </div>
</section>

      {/* 15 DAY FRAMEWORK */}
     
      {/* JOB ROLES */}
      <section className="py-24 bg-warm-gray-bg">
        <div className="container mx-auto px-4">

          <motion.h2 {...fadeUp} className="text-3xl font-bold text-center mb-16">
            Job Roles Available
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-warm-border"
              >
                <h3 className="font-bold text-lg text-crimson mb-4">{role.title}</h3>
                <ul className="space-y-2 text-sm text-dark-gray">
                  {role.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SALARY PROGRESSION */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">

          <motion.h2 {...fadeUp} className="text-3xl font-bold text-center mb-16">
            Salary Progression
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stage: "Initial Phase", value: "₹15,000 – ₹25,000 / month" },
              { stage: "After 1 Year", value: "₹3 – 5 LPA" },
              { stage: "Post Graduation", value: "₹6 – 10 LPA" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-warm-border text-center"
              >
                <TrendingUp className="mx-auto mb-4 text-crimson" />
                <h3 className="font-bold text-lg mb-2">{item.stage}</h3>
                <p className="text-crimson font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
 <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          <motion.h2 {...fadeUp} className="text-3xl font-bold text-center mb-16">
            15-Day Career Launch Framework
          </motion.h2>

          <div className="space-y-6">
            {timeline.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5 bg-white p-5 rounded-xl border border-warm-border"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-crimson text-white font-bold">
                  {i + 1}
                </div>
                <p className="text-dark-gray">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-warm-gray-bg">
        <div className="container mx-auto px-4">

          <motion.h2 {...fadeUp} className="text-3xl font-bold text-center mb-16">
            Program Benefits
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-warm-border"
              >
                <CheckCircle className="text-crimson mb-3" />
                <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-dark-gray text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default ProgramPage;