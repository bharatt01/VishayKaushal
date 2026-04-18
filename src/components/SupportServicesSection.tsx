import { motion } from "framer-motion";
import { FileText, Mic, Users, Briefcase } from "lucide-react";

const services = [
  {
    title: "Resume Development",
    desc: "Build strong, professional resumes that stand out to recruiters.",
    icon: FileText,
  },
  {
    title: "Mock Interviews",
    desc: "Practice real interview scenarios to boost confidence and performance.",
    icon: Mic,
  },
  {
    title: "Career Mentoring",
    desc: "Get guidance from experts to shape your career path effectively.",
    icon: Users,
  },
  {
    title: "Ongoing Job Assistance",
    desc: "Continuous support until you secure the right opportunity.",
    icon: Briefcase,
  },
];

const SupportServicesSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#fafafa]">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <p className="text-crimson font-semibold text-sm uppercase tracking-wide">
            Support Services
          </p>

          <h2 className="font-sora text-4xl md:text-5xl font-extrabold text-jet mt-3 leading-tight">
            Everything You Need to
            <span className="block text-gradient-red">
              Succeed Professionally
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="space-y-6">

          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center gap-6 bg-white border border-warm-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >

                {/* ICON BLOCK */}
                <div className="min-w-[60px] h-[60px] rounded-xl bg-crimson/10 flex items-center justify-center group-hover:bg-crimson transition">
                  <Icon
                    size={24}
                    className="text-crimson group-hover:text-white transition"
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-sora font-bold text-lg text-jet group-hover:text-crimson transition">
                    {item.title}
                  </h3>

                  <p className="text-dark-gray text-sm mt-1">
                    {item.desc}
                  </p>
                </div>

                {/* RIGHT STRIP */}
                <div className="ml-auto w-1 h-10 bg-crimson/20 group-hover:bg-crimson transition rounded-full" />

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default SupportServicesSection;