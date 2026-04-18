import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Building, DollarSign, ChevronDown, ChevronUp, Play } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const filters = ["All", "Engineering", "Medical", "Business", "Law", "Design", "Science", "Arts"];

const programImages: Record<string, string> = {
  Engineering: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
  Medical: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=250&fit=crop",
  Business: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
  Law: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
  Design: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop",
  Science: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop",
  Arts: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=250&fit=crop",
};

const programs = [
  { name: "Computer Science Engineering", category: "Engineering", duration: "4 Years", colleges: 120, fees: "₹2-15 Lakhs/yr", careers: ["Software Engineer", "Data Scientist", "AI Engineer"] },
  { name: "Mechanical Engineering", category: "Engineering", duration: "4 Years", colleges: 95, fees: "₹1.5-10 Lakhs/yr", careers: ["Design Engineer", "Automotive", "Robotics"] },
  { name: "MBBS", category: "Medical", duration: "5.5 Years", colleges: 80, fees: "₹5-25 Lakhs/yr", careers: ["Doctor", "Surgeon", "Researcher"] },
  { name: "BDS", category: "Medical", duration: "5 Years", colleges: 45, fees: "₹3-15 Lakhs/yr", careers: ["Dentist", "Orthodontist", "Oral Surgeon"] },
  { name: "BBA", category: "Business", duration: "3 Years", colleges: 95, fees: "₹1-8 Lakhs/yr", careers: ["Manager", "Consultant", "Entrepreneur"] },
  { name: "MBA", category: "Business", duration: "2 Years", colleges: 110, fees: "₹5-25 Lakhs/yr", careers: ["CEO", "Strategy Lead", "Marketing Head"] },
  { name: "BA LLB", category: "Law", duration: "5 Years", colleges: 60, fees: "₹1-10 Lakhs/yr", careers: ["Advocate", "Legal Advisor", "Judge"] },
  { name: "B.Des", category: "Design", duration: "4 Years", colleges: 45, fees: "₹2-12 Lakhs/yr", careers: ["UI/UX Designer", "Product Designer", "Art Director"] },
  { name: "B.Sc Physics", category: "Science", duration: "3 Years", colleges: 70, fees: "₹0.5-5 Lakhs/yr", careers: ["Researcher", "Data Analyst", "Professor"] },
  { name: "B.Sc Chemistry", category: "Science", duration: "3 Years", colleges: 65, fees: "₹0.5-4 Lakhs/yr", careers: ["Chemist", "Pharma", "Lab Scientist"] },
  { name: "BA English", category: "Arts", duration: "3 Years", colleges: 80, fees: "₹0.3-3 Lakhs/yr", careers: ["Writer", "Journalist", "Editor"] },
  { name: "BA Psychology", category: "Arts", duration: "3 Years", colleges: 55, fees: "₹0.5-4 Lakhs/yr", careers: ["Psychologist", "HR", "Counsellor"] },
];

const faqs = [
  { q: "How do I choose between Engineering and Medical?", a: "Consider your interests, aptitude in math vs biology, career goals, and preparation timeline. Our counsellors can help with a detailed aptitude assessment." },
  { q: "What is the scope of Design programs?", a: "Design has exploded with opportunities in UI/UX, product design, fashion, and digital media. Top graduates earn competitive salaries." },
  { q: "Is MBA worth it after BBA?", a: "An MBA significantly boosts career prospects and earning potential, especially from top B-schools. 2-3 years of work experience before MBA is often recommended." },
  { q: "What are the best Law colleges in India?", a: "NLUs are the top law schools. NLSIU Bangalore, NLU Delhi, NALSAR Hyderabad, and WBNUJS Kolkata consistently rank highest." },
];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const Programs = () => {
  const [active, setActive] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const filtered = active === "All" ? programs : programs.filter(p => p.category === active);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=60')" }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-mustard text-sm mb-2"><Link to="/" className="hover:text-white">Home</Link> &gt; Programs</p>
          <h1 className="font-sora font-extrabold text-4xl md:text-5xl text-white">Explore Programs Across Every Field</h1>
          <p className="text-white/80 mt-4 max-w-lg">Find the right program that aligns with your passion and career goals.</p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-off-white border-b border-warm-border sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === f ? "bg-crimson text-white" : "bg-white border border-warm-border text-dark-gray hover:border-mustard hover:text-mustard"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div key={p.name} {...fadeUp} transition={{ delay: i * 0.05 }} className="bg-white rounded-2xl border border-warm-border overflow-hidden card-hover group">
                <div className="h-44 overflow-hidden relative">
                  <img src={programImages[p.category]} alt={p.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 h-full bg-crimson/0 group-hover:bg-crimson/40 transition-all duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">Learn More</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-0.5 bg-mustard/15 text-mustard text-xs font-semibold rounded-full mb-2">{p.category}</span>
                  <h3 className="font-sora font-bold text-lg text-jet mb-3">{p.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-dark-gray"><Clock size={14} /> {p.duration}</div>
                    <div className="flex items-center gap-2 text-sm text-dark-gray"><Building size={14} /> {p.colleges} Colleges</div>
                    <div className="flex items-center gap-2 text-sm text-dark-gray"><DollarSign size={14} /> {p.fees}</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.careers.map(c => (
                      <span key={c} className="px-2 py-0.5 bg-jet text-white text-xs font-medium rounded-full">{c}</span>
                    ))}
                  </div>
                  <button className="w-full bg-crimson text-white font-bold py-2.5 rounded-full hover:bg-blood-red transition-all text-sm">
                    Know More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Explainer Strip */}
      <section className="py-16 gradient-black-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-sora font-extrabold text-3xl text-white mb-8">Not Sure Which Program is Right for You?</h2>
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border-[3px] border-crimson relative group cursor-pointer mb-8">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop" alt="Video" className="w-full h-[300px] object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all">
              <div className="w-16 h-16 rounded-full bg-mustard flex items-center justify-center hover:scale-110 transition-transform">
                <Play size={28} className="text-jet ml-1" />
              </div>
            </div>
          </div>
          <Link to="/contact" className="bg-crimson text-white font-bold px-8 py-3 rounded-full hover:bg-blood-red transition-all inline-flex items-center gap-2">
            Talk to a Counsellor <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-warm-gray-bg">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle title="Common Questions" subtitle="Frequently asked questions about programs" />
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className={`bg-white rounded-xl border border-warm-border overflow-hidden ${openFaq === i ? "border-l-4 border-l-crimson" : "border-l-4 border-l-warm-border"}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-sora font-bold text-jet text-sm">{f.q}</span>
                  {openFaq === i ? <ChevronUp size={18} className="text-mustard" /> : <ChevronDown size={18} className="text-medium-gray" />}
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-dark-gray text-sm">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="gradient-mustard-red rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="font-sora font-extrabold text-3xl text-white mb-3">Need Help Choosing?</h2>
            <p className="text-white/80 mb-6">Our counsellors can guide you to the perfect program</p>
            <Link to="/contact" className="bg-jet text-white font-bold px-8 py-3 rounded-full hover:bg-charcoal transition-all inline-flex items-center gap-2">
              Book Free Session <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
