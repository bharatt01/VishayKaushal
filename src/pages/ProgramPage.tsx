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
      <section className="py-24 bg-gradient-to-br from-jet via-black to-jet text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h1 {...fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6">
            Earn While Learn Program
          </motion.h1>
          <motion.p {...fadeUp} className="text-white/80 text-lg">
            A structured framework that integrates academic education with real employment opportunities —
            helping students build careers while studying.
          </motion.p>
        </div>
      </section>

      {/* 15 DAY FRAMEWORK */}
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