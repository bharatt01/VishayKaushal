import { motion } from "framer-motion";
import { Linkedin, Eye, Target, Play } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ChallengesSection from "@/components/ChallengesSection";
import IndustryAlignmentSection from "@/components/IndustryAlignmentSection";
import ComparisonSection from "@/components/ComparisonSection";

const stats = [
  { num: "5000+", label: "Students Counselled" },
  { num: "200+", label: "University Partners" },
  { num: "15+", label: "Years Experience" },
  { num: "98%", label: "Satisfaction Rate" },
];

const team = [
  { name: "Dr. Anita Rao", role: "Founder & Chief Counsellor", bio: "20+ years in education consulting with expertise in engineering.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" },
  { name: "Rajesh Kumar", role: "Senior Education Advisor", bio: "Former professor with deep knowledge of university rankings and program quality.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" },
  { name: "Meera Joshi", role: "Career Assessment Specialist", bio: "Certified career coach specializing in aptitude testing and personality mapping.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" },
  { name: "Arjun Nair", role: "Admissions Strategist", bio: "Helped 1000+ students gain admission to top-tier institutions across India.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
  { name: "Priyanka Desai", role: "Study Abroad Consultant", bio: "Expert in international admissions for US, UK, Canada, and Australia universities.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" },
  { name: "Vikash Singh", role: "Exam Preparation Lead", bio: "Former IIT topper who mentors students in JEE, NEET, and competitive exam preparation.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" },
];

const awards = ["NAAC Recognized Partner", "EdTech Innovation Award 2024", "Best Consultancy — India Education Forum", "ISO 9001:2015 Certified", "Google for Education Partner"];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=60')" }} />
      <div className="absolute inset-0 bg-black/65" />
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="font-sora font-extrabold text-4xl md:text-5xl text-white mb-4">
          We Help Students Choose Right,<br />Not Just Anywhere
        </h1>
        <p className="text-mustard max-w-lg">VishayKaushal is on a mission to democratize access to quality education guidance for every student in India.</p>
      </div>
    </section>

    {/* Our Story */}
    <section className="py-20 bg-warm-gray-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <span className="inline-block px-3 py-1 bg-crimson/10 text-crimson text-xs font-bold rounded-full mb-4">OUR STORY</span>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-1 h-16 bg-mustard rounded-full shrink-0 mt-1" />
              <h2 className="font-sora font-extrabold text-3xl text-jet">Building Futures Since 2008</h2>
            </div>
            <p className="text-dark-gray mb-4">Founded in XXXX, VishayKaushal started with a simple belief: every student deserves the right guidance to make informed education decisions. What began as a small counselling center has grown into India's most trusted education consultancy.</p>
            <p className="text-dark-gray mb-4">We've guided over 5,000 students across 200+ universities, helping them find not just any program, but the right one for their unique aspirations and abilities.</p>
            <p className="text-dark-gray">Today, our team of expert counsellors continues to transform lives through personalized guidance, honest advice, and unwavering commitment to student success.</p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="relative">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=350&h=280&fit=crop" alt="Counselling" className="rounded-2xl border-[3px] border-crimson w-3/4 relative z-20" />
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=250&h=200&fit=crop" alt="Students" className="rounded-2xl border-[3px] border-mustard w-1/2 absolute -bottom-6 right-0 z-10" />
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=150&fit=crop" alt="University" className="rounded-2xl w-1/3 absolute -top-4 right-8 z-0 rotate-3 opacity-80" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeUp} className="relative rounded-2xl overflow-hidden h-[300px]">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop" alt="Mission" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/65" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end border-t-[3px] border-crimson rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="font-sora font-bold text-2xl text-white mb-3">Our Mission</h3>
              <p className="text-white/80">To empower every student with data-driven, personalized education guidance that helps them discover their passion, choose the right path, and achieve academic excellence.</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="relative rounded-2xl overflow-hidden h-[300px]">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop" alt="Vision" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/65" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end border-t-[3px] border-mustard rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="font-sora font-bold text-2xl text-white mb-3">Our Vision</h3>
              <p className="text-white/80">To become India's most trusted education consultancy by making quality career guidance accessible, transparent, and impactful for millions of students nationwide.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
<ChallengesSection />
<IndustryAlignmentSection />
<ComparisonSection />
    {/* Team */}
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Meet Our Team" subtitle="Expert counsellors dedicated to your success" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((t, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }} className="bg-white rounded-2xl p-6 border border-warm-border card-hover text-center group">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-[3px] border-transparent group-hover:border-crimson transition-all">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-sora font-bold text-jet">{t.name}</h3>
              <p className="text-crimson text-sm font-semibold mb-2">{t.role}</p>
              <p className="text-dark-gray text-sm mb-3">{t.bio}</p>
              <a href="#" className="text-medium-gray hover:text-crimson transition-colors inline-block">
                <Linkedin size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats Parallax Strip */}
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=60')" }} />
      <div className="absolute inset-0 bg-black/72" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className={`text-center ${i < 3 ? "lg:border-r lg:border-white/20" : ""}`}>
              <div className="text-4xl md:text-5xl font-sora font-extrabold text-mustard">{s.num}</div>
              <p className="text-white mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


    {/* Awards */}
    <section className="py-16 bg-off-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Awards & Recognition" />
        <div className="flex flex-wrap justify-center gap-4">
          {awards.map((a, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }} className="bg-white px-6 py-3 rounded-full border border-warm-border text-sm text-dark-gray font-medium">
              🏆 {a}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
