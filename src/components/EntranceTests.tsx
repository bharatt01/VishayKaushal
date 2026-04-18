import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Target, Clock, Lightbulb, Play } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const tabs = ["Engineering", "Medical", "Law", "Management", "Design", "Science", "Agriculture"];

type Exam = { name: string; short: string; body: string; eligibility: string; mode: string; month: string; difficulty: "Easy" | "Medium" | "Hard"; category: string };

const exams: Exam[] = [
  { name: "Joint Entrance Examination Main", short: "JEE Main", body: "NTA", eligibility: "10+2 with PCM", mode: "Online", month: "January / April", difficulty: "Hard", category: "Engineering" },
  { name: "JEE Advanced", short: "JEE Adv", body: "IITs", eligibility: "JEE Main qualified", mode: "Online", month: "June", difficulty: "Hard", category: "Engineering" },
  { name: "BITSAT", short: "BITSAT", body: "BITS Pilani", eligibility: "10+2 with PCM", mode: "Online", month: "May", difficulty: "Medium", category: "Engineering" },
  { name: "National Eligibility cum Entrance Test", short: "NEET UG", body: "NTA", eligibility: "10+2 with PCB", mode: "Offline", month: "May", difficulty: "Hard", category: "Medical" },
  { name: "AIIMS Nursing", short: "AIIMS", body: "AIIMS", eligibility: "10+2 with Science", mode: "Online", month: "June", difficulty: "Medium", category: "Medical" },
  { name: "Common Law Admission Test", short: "CLAT", body: "NLU Consortium", eligibility: "10+2 any stream", mode: "Online", month: "December", difficulty: "Medium", category: "Law" },
  { name: "AILET", short: "AILET", body: "NLU Delhi", eligibility: "10+2 any stream", mode: "Offline", month: "June", difficulty: "Hard", category: "Law" },
  { name: "Common Admission Test", short: "CAT", body: "IIMs", eligibility: "Bachelor's degree", mode: "Online", month: "November", difficulty: "Hard", category: "Management" },
  { name: "XAT", short: "XAT", body: "XLRI", eligibility: "Bachelor's degree", mode: "Online", month: "January", difficulty: "Hard", category: "Management" },
  { name: "NID Design Aptitude Test", short: "NID DAT", body: "NID", eligibility: "10+2 any stream", mode: "Offline", month: "January", difficulty: "Medium", category: "Design" },
  { name: "UCEED", short: "UCEED", body: "IIT Bombay", eligibility: "10+2 any stream", mode: "Online", month: "January", difficulty: "Medium", category: "Design" },
  { name: "CUET Science", short: "CUET", body: "NTA", eligibility: "10+2 with Science", mode: "Online", month: "May", difficulty: "Easy", category: "Science" },
  { name: "ICAR AIEEA", short: "ICAR", body: "ICAR", eligibility: "10+2 with PCB/PCM", mode: "Online", month: "June", difficulty: "Medium", category: "Agriculture" },
];

const calendarMonths = [
  { month: "January", exams: ["JEE Main", "XAT", "NID DAT", "UCEED"] },
  { month: "April", exams: ["JEE Main Session 2"] },
  { month: "May", exams: ["NEET UG", "BITSAT", "CUET"] },
  { month: "June", exams: ["JEE Advanced", "AIIMS", "AILET", "ICAR"] },
  { month: "November", exams: ["CAT"] },
  { month: "December", exams: ["CLAT"] },
];

const tips = [
  { icon: Target, title: "Set Clear Goals", text: "Define your target score and create a realistic study plan." },
  { icon: Clock, title: "Time Management", text: "Practice with timed mock tests to improve speed and accuracy." },
  { icon: BookOpen, title: "Strong Fundamentals", text: "Focus on NCERT and standard textbooks before advanced material." },
  { icon: Lightbulb, title: "Smart Revision", text: "Use spaced repetition and regular revision to retain concepts." },
];

const diffColor = { Easy: "bg-badge-green text-white", Medium: "bg-mustard text-jet", Hard: "bg-crimson text-white" };
const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const EntranceTests = () => {
  const [activeTab, setActiveTab] = useState("Engineering");
  const filtered = exams.filter(e => e.category === activeTab);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&q=60')" }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-mustard text-sm mb-2"><Link to="/" className="hover:text-white">Home</Link> &gt; Entrance Tests</p>
          <h1 className="font-sora font-extrabold text-4xl md:text-5xl text-white">Crack the Right Exam, Open Every Door</h1>
          <p className="text-white/80 mt-4 max-w-lg">Comprehensive information about entrance exams across every field.</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-4 bg-off-white border-b border-warm-border sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {tabs.map(t => (
              <button key={t} onClick={() => setActiveTab(t)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all relative ${activeTab === t ? "bg-crimson text-white" : "bg-white border border-warm-border text-dark-gray hover:border-crimson"}`}>
                {t}
                {activeTab === t && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-mustard rounded-full" />}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Cards */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((e, i) => (
              <motion.div key={e.short} {...fadeUp} transition={{ delay: i * 0.08 }} className="bg-white rounded-2xl p-6 border border-warm-border border-l-4 border-l-crimson card-hover">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-sora font-bold text-jet">{e.name}</h3>
                    <span className="inline-block mt-1 px-3 py-0.5 bg-mustard text-jet text-xs font-bold rounded-full">{e.short}</span>
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${diffColor[e.difficulty]}`}>{e.difficulty}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-dark-gray mb-4">
                  <div><span className="text-medium-gray">Body:</span> {e.body}</div>
                  <div><span className="text-medium-gray">Mode:</span> <span className="inline-block px-2 py-0.5 bg-jet text-white text-xs rounded-full">{e.mode}</span></div>
                  <div><span className="text-medium-gray">Eligibility:</span> {e.eligibility}</div>
                  <div><span className="text-medium-gray">Month:</span> {e.month}</div>
                </div>
                <button className="text-crimson text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all hover:underline">
                  Full Details <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-medium-gray py-12">No exams found in this category yet.</p>}
        </div>
      </section>

      {/* Exam Calendar */}
      <section className="py-16 bg-warm-gray-bg">
        <div className="container mx-auto px-4">
          <SectionTitle title="Exam Calendar" subtitle="Plan your preparation timeline" />
          <div className="max-w-3xl mx-auto space-y-6">
            {calendarMonths.map((m, i) => (
              <motion.div key={m.month} {...fadeUp} transition={{ delay: i * 0.08 }} className="flex gap-4 items-start">
                <div className="w-28 shrink-0 font-sora font-bold text-crimson text-sm pt-2">{m.month}</div>
                <div className="relative flex-1">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-warm-border" />
                  <div className="pl-6 flex flex-wrap gap-2">
                    {m.exams.map((e, j) => (
                      <span key={e} className={`px-4 py-1.5 rounded-full text-sm font-medium ${j % 2 === 0 ? "bg-crimson text-white" : "bg-mustard text-jet"}`}>{e}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tips Section */}
      <section className="py-20 bg-warm-gray-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h2 className="font-sora font-extrabold text-3xl text-jet mb-6">How to Crack Entrance Exams</h2>
              <div className="space-y-4 mb-8">
                {tips.map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-mustard/20 flex items-center justify-center shrink-0 mt-0.5">
                      <t.icon size={16} className="text-mustard" />
                    </div>
                    <div>
                      <h4 className="font-sora font-bold text-jet text-sm">{t.title}</h4>
                      <p className="text-dark-gray text-sm">{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="bg-crimson text-white font-bold px-8 py-3 rounded-full hover:bg-blood-red transition-all inline-flex items-center gap-2">
                Get Expert Tips <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <div className="rounded-2xl overflow-hidden border-[3px] border-crimson relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop" alt="Study" className="w-full h-[320px] object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all">
                  <div className="w-16 h-16 rounded-full bg-mustard flex items-center justify-center hover:scale-110 transition-transform">
                    <Play size={28} className="text-jet ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parallax Strip */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=60')" }} />
        <div className="absolute inset-0 bg-black/68" />
        <div className="relative z-10 text-center px-4">
          <motion.p {...fadeUp} className="font-sora font-bold text-2xl md:text-3xl text-white italic">"Every exam is a door. We help you find the key."</motion.p>
        </div>
      </section>
    </div>
  );
};

export default EntranceTests;
