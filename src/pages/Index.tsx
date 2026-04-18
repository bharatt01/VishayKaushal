import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, BookOpen, Award, Search, ClipboardCheck, Compass, Handshake, Star, ArrowRight, ChevronRight, Play, Ear } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import EarnWhileLearnSection from "@/components/EarnWhileLearnSection";
const stats = [
  { num: "5000+", label: "Students Guided" },
  { num: "200+", label: "Universities" },
  { num: "50+", label: "Programs" },
  { num: "98%", label: "Success Rate" },
];

const steps = [
  { icon: Search, title: "Discover Your Interest", desc: "Take our career assessment to find what suits you best.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop" },
  { icon: ClipboardCheck, title: "Shortlist Options", desc: "Get curated college and program recommendations.", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop" },
  { icon: Compass, title: "Expert Counselling", desc: "One-on-one sessions with experienced education counsellors.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=200&fit=crop" },
  { icon: Handshake, title: "Secure Admission", desc: "End-to-end support from application to enrollment.", img: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=400&h=200&fit=crop" },
];

const programs = [
  { name: "Engineering", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop", count: "120+ Colleges" },
  { name: "Medical", img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=250&fit=crop", count: "80+ Colleges" },
  { name: "Business", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop", count: "95+ Colleges" },
  { name: "Law", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop", count: "60+ Colleges" },
  { name: "Design", img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop", count: "45+ Colleges" },
  { name: "Computer Science", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop", count: "110+ Colleges" },
];

const universities = [
  { name: "IIT Delhi", city: "New Delhi", rank: "#1", img: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop" },
  { name: "IIT Bombay", city: "Mumbai", rank: "#2", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop" },
  { name: "AIIMS Delhi", city: "New Delhi", rank: "#1 Medical", img: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=250&fit=crop" },
  { name: "IIM Ahmedabad", city: "Ahmedabad", rank: "#1 MBA", img: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=400&h=250&fit=crop" },
];

const marqueeUniversities = ["IIT Delhi", "IIT Bombay", "BITS Pilani", "NIT Trichy", "AIIMS", "IIM Ahmedabad", "NLU Delhi", "NIFT", "IISc Bangalore", "VIT Vellore", "SRM Chennai", "Manipal University"];

const exams = [
  { name: "JEE Main", category: "Engineering", difficulty: "Hard", color: "bg-crimson" },
  { name: "NEET UG", category: "Medical", difficulty: "Hard", color: "bg-crimson" },
  { name: "CUET", category: "General", difficulty: "Medium", color: "bg-mustard" },
];

const testimonials = [
  { name: "Priya Sharma", uni: "IIT Delhi", quote: "VishayKaushal helped me navigate the complex admission process with ease. Their counsellors are truly dedicated!", rating: 5, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { name: "Rahul Verma", uni: "AIIMS Delhi", quote: "Without VishayKaushal's guidance, I wouldn't have cracked NEET. Their structured approach made all the difference.", rating: 5, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { name: "Ananya Gupta", uni: "IIM Bangalore", quote: "From CAT preparation to final admission, VishayKaushal was with me every step. Highly recommend!", rating: 5, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
  { name: "Vikram Singh", uni: "NLU Delhi", quote: "The personalized attention and expert advice helped me secure admission in my dream law school.", rating: 4, img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
  { name: "Sneha Patel", uni: "NIFT Mumbai", quote: "VishayKaushal's design aptitude preparation was exceptional. They truly understand every field!", rating: 5, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Index = () => (
  <div>
    {/* Hero — Fullscreen Video Background */}
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1600&q=60"
      >
        <source src="https://videos.pexels.com/video-files/3196005/3196005-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div {...fadeUp} className="max-w-2xl">
  <span className="inline-block px-4 py-1.5 bg-mustard/20 border border-mustard/40 text-mustard text-sm font-semibold rounded-full mb-6">
    🎓 Earn While You Learn Program
  </span>

  <h1 className="font-sora font-extrabold text-4xl md:text-5xl lg:text-[64px] leading-[1.1] tracking-[-1px] text-white mb-6">
    Earn While You Learn —{" "}
    <span className="text-gradient-red">
      Build Your Career Within 15 Days
    </span>
  </h1>

  <p className="text-white/80 text-lg mb-4 max-w-xl font-medium">
    Pursue industry-recognized degree programs in association with
  </p>

  <p className="text-mustard font-semibold text-base md:text-lg mb-6">
    GLA University | Amity University | Galgotias University
  </p>

  <p className="text-white/70 text-base mb-8 max-w-lg">
    Begin your professional journey while continuing your academic education.
    Gain real work experience, develop industry-relevant skills, and earn a
    monthly income from the early stages of your degree.
  </p>

  <div className="flex flex-wrap gap-4">
    <Link
      to="/apply"
      className="bg-crimson text-white font-bold px-8 py-3.5 rounded-full hover:bg-blood-red transition-all duration-200 hover:scale-[1.03]"
    >
      Apply Now
    </Link>

    <Link
      to="/brochure"
      className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-crimson transition-all duration-200"
    >
      Download Brochure
    </Link>

    <Link
      to="/contact"
      className="bg-mustard text-jet font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-all duration-200"
    >
      Speak to a Career Advisor
    </Link>
  </div>
</motion.div>
      </div>

         </section>
<motion.div
  {...fadeUp}
  transition={{ delay: 0.4 }}
className="relative -mt-16 z-20 px-4"
>
  <div className="container mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      
      {stats.map((s, i) => {
        const icons = [Users, BookOpen, Award, Star];
        const Icon = icons[i];

        return (
          <div
            key={i}
            className="group relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 text-center overflow-hidden transition-all duration-300 hover:scale-[1.06] hover:bg-white/20"
          >
            {/* Gradient Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-crimson/20 via-transparent to-mustard/20" />

            {/* Icon */}
            <div className="w-11 h-11 mx-auto mb-3 rounded-full gradient-red-black flex items-center justify-center shadow-lg shadow-black/30">
              <Icon size={18} className="text-white" />
            </div>

            {/* Number */}
            <div className="text-2xl md:text-3xl font-sora font-extrabold text-crimson">
              {s.num}
            </div>

            {/* Label */}
            <div className="text-xs md:text-sm text-crimson/70 mt-1">
              {s.label}
            </div>
          </div>
        );
      })}

    </div>
  </div>
</motion.div>
    {/* How It Works */}
    <section className="py-20 bg-warm-gray-bg">
      <div className="container mx-auto px-4">
        <SectionTitle title="How It Works" subtitle="Four simple steps to your dream career" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl border border-warm-border card-hover relative overflow-hidden">
              <div className="h-32 overflow-hidden img-hover-overlay">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-full gradient-red-black flex items-center justify-center mb-4 -mt-10 relative z-10 border-2 border-white">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <h3 className="font-sora font-bold text-lg text-jet mb-2">{step.title}</h3>
                <p className="text-dark-gray text-sm">{step.desc}</p>
              </div>
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 text-mustard z-10">
                  <ChevronRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
<ValuePropositionSection />
<EarnWhileLearnSection />
    {/* Programs Highlights */}
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Explore Programs" subtitle="Find the perfect program to launch your career" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }} className="bg-white rounded-2xl border border-warm-border overflow-hidden card-hover group">
              <div className="h-48 overflow-hidden relative">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore →</span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-0.5 bg-mustard/15 text-mustard text-xs font-semibold rounded-full mb-2">{p.count}</span>
                <h3 className="font-sora font-bold text-lg text-jet mb-3">{p.name}</h3>
                <Link to="/programs" className="text-crimson text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Know More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Parallax Banner 1 */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=60')" }} />
      <div className="absolute inset-0 bg-black/68" />
      <div className="relative z-10 text-center px-4">
        <motion.h2 {...fadeUp} className="font-sora font-extrabold text-3xl md:text-5xl text-white mb-6">Over 200 Universities. One Platform.</motion.h2>
        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
          <Link to="/universities" className="border-2 border-mustard text-mustard font-bold px-8 py-3 rounded-full hover:bg-mustard hover:text-jet transition-all">
            Explore Universities
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Universities Strip */}
    <section className="py-20 bg-warm-gray-bg">
      <div className="container mx-auto px-4">
        <SectionTitle title="Top Universities" subtitle="Partnered with India's best institutions" />
        {/* Marquee */}
        <div className="overflow-hidden mb-12">
          <div className="bg-jet rounded-xl py-3">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...marqueeUniversities, ...marqueeUniversities].map((u, i) => (
                <span key={i} className="mx-3 px-5 py-2 bg-white/10 rounded-full text-sm text-white font-medium inline-block">
                  {u}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {universities.map((u, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl border border-warm-border overflow-hidden card-hover group">
              <div className="h-40 overflow-hidden relative">
                <img src={u.img} alt={u.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute top-3 left-3 px-3 py-1 bg-crimson text-white text-xs font-bold rounded-full">{u.rank}</span>
              </div>
              <div className="p-5">
                <h3 className="font-sora font-bold text-jet mb-1">{u.name}</h3>
                <p className="text-medium-gray text-sm mb-4">{u.city}</p>
                <Link to="/universities" className="text-sm font-semibold text-mustard border border-mustard px-4 py-2 rounded-full hover:bg-mustard hover:text-jet transition-all inline-block">
                  Explore
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Counsellor Video Section */}
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-mustard rounded-full" />
              <h2 className="font-sora font-extrabold text-3xl md:text-[42px] text-jet">Meet Your Expert Counsellors</h2>
            </div>
            <p className="text-dark-gray mb-6 max-w-md">Our team of experienced education counsellors is ready to guide you through every step of your academic journey.</p>
            <Link to="/contact" className="bg-crimson text-white font-bold px-8 py-3 rounded-full hover:bg-blood-red transition-all inline-flex items-center gap-2">
              Book a Session <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="relative">
            <div className="rounded-2xl overflow-hidden border-[3px] border-crimson relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop" alt="Counsellor" className="w-full h-[320px] object-cover" />
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

    {/* Exam Highlights */}
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Entrance Exams" subtitle="Prepare for the right exam to unlock your future" />
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {exams.map((e, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 border-l-4 border-l-crimson border border-warm-border card-hover">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-sora font-bold text-jet">{e.name}</h3>
                <span className={`px-2 py-0.5 text-xs font-bold rounded-full text-white ${e.color}`}>{e.difficulty}</span>
              </div>
              <p className="text-medium-gray text-sm mb-4">{e.category}</p>
              <Link to="/entrance-tests" className="text-crimson text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Full Details <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/entrance-tests" className="bg-crimson text-white font-bold px-8 py-3 rounded-full hover:bg-blood-red transition-all">
            View All Exams
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-warm-gray-bg">
      <div className="container mx-auto px-4">
        <SectionTitle title="What Students Say" subtitle="Hear from our successful students" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 border border-warm-border" style={{ borderTop: "3px solid transparent", borderImage: "linear-gradient(135deg, #B71C1C, #D4820A) 1", borderImageSlice: "1 1 0 0" }}>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-mustard text-mustard" />
                ))}
              </div>
              <p className="text-dark-gray text-sm mb-4 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-sora font-bold text-jet text-sm">{t.name}</p>
                  <span className="inline-block mt-0.5 px-3 py-0.5 bg-mustard/15 text-mustard text-xs font-semibold rounded-full">{t.uni}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1600&q=60')" }} />
      <div className="absolute inset-0 bg-black/72" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/70 mb-6">Book a free counselling session and get personalized guidance from our experts.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Enter your email" className="px-5 py-3 rounded-full bg-white border border-warm-border flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-crimson" />
            <button className="bg-crimson text-white font-bold px-8 py-3 rounded-full hover:bg-blood-red transition-all">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
