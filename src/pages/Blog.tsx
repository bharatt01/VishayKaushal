import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const categories = ["All", "Exams", "Colleges", "Career", "Study Tips", "Scholarships"];

const featured = {
  title: "Complete Guide to Engineering Admissions 2025",
  excerpt: "Everything you need to know about engineering entrance exams, top colleges, and the admission process for the upcoming session.",
  author: "Dr. Anita Rao",
  date: "March 15, 2025",
  readTime: "12 min read",
  category: "Colleges",
  img: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&h=400&fit=crop",
};

const postImages = [
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=250&fit=crop",
];

const posts = [
  { title: "How to Choose Between JEE and NEET", excerpt: "A comprehensive comparison to help students decide their career path early.", category: "Exams", author: "Rajesh Kumar", date: "Mar 10, 2025", readTime: "8 min" },
  { title: "Top 10 Emerging Career Fields in 2025", excerpt: "Discover the most promising career paths that are shaping the future job market.", category: "Career", author: "Meera Joshi", date: "Mar 8, 2025", readTime: "6 min" },
  { title: "Scholarship Guide for Indian Students", excerpt: "Complete list of scholarships available for undergraduate and postgraduate programs.", category: "Scholarships", author: "Priyanka Desai", date: "Mar 5, 2025", readTime: "10 min" },
  { title: "Effective Study Techniques for Competitive Exams", excerpt: "Science-backed study methods to maximize retention and exam performance.", category: "Study Tips", author: "Vikash Singh", date: "Mar 3, 2025", readTime: "7 min" },
  { title: "IIT vs NIT vs BITS: Which is Right for You?", excerpt: "An honest comparison of India's top engineering institutions.", category: "Colleges", author: "Arjun Nair", date: "Feb 28, 2025", readTime: "9 min" },
  { title: "CLAT 2025: Preparation Strategy", excerpt: "Month-by-month preparation plan for CLAT aspirants.", category: "Exams", author: "Rajesh Kumar", date: "Feb 25, 2025", readTime: "8 min" },
  { title: "Is MBA Worth It After Engineering?", excerpt: "Analyzing the ROI of an MBA degree for engineering graduates.", category: "Career", author: "Dr. Anita Rao", date: "Feb 20, 2025", readTime: "7 min" },
  { title: "How to Write a Winning SOP", excerpt: "Step-by-step guide to crafting the perfect Statement of Purpose.", category: "Study Tips", author: "Priyanka Desai", date: "Feb 18, 2025", readTime: "6 min" },
  { title: "Government Scholarships You're Missing Out On", excerpt: "Lesser-known government scholarships with high award amounts.", category: "Scholarships", author: "Meera Joshi", date: "Feb 15, 2025", readTime: "5 min" },
];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const Blog = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter(p => p.category === active);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=60')" }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block px-3 py-1 bg-mustard/20 text-mustard text-xs font-bold rounded-full mb-3">BLOG</span>
          <h1 className="font-sora font-extrabold text-4xl md:text-5xl text-white">Insights, Tips & Guidance for Students</h1>
          <p className="text-white/80 mt-4 max-w-lg">Expert articles to help you make informed decisions about your education and career.</p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="rounded-3xl overflow-hidden relative group cursor-pointer">
            <img src={featured.img} alt={featured.title} className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <span className="absolute top-4 left-4 px-3 py-1 bg-crimson text-white text-xs font-bold rounded-full">Featured</span>
            <span className="absolute top-4 right-4 px-3 py-1 bg-mustard text-jet text-xs font-bold rounded-full">{featured.readTime}</span>
            <div className="absolute bottom-0 left-0 p-8 max-w-xl">
              <h2 className="font-sora font-extrabold text-2xl md:text-3xl text-white mb-3">{featured.title}</h2>
              <p className="text-white/80 mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <span className="flex items-center gap-1"><User size={14} /> {featured.author}</span>
                <span>{featured.date}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 bg-off-white border-b border-warm-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setActive(c)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${active === c ? "bg-crimson text-white" : "bg-white border border-warm-border text-dark-gray hover:border-mustard hover:text-mustard"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="bg-white rounded-2xl border border-warm-border overflow-hidden card-hover group">
                <div className="h-44 overflow-hidden relative">
                  <img src={postImages[i % postImages.length]} alt={p.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/30 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-0.5 bg-mustard/15 text-mustard text-xs font-semibold rounded-full mb-3">{p.category}</span>
                  <h3 className="font-sora font-bold text-jet mb-2">{p.title}</h3>
                  <p className="text-dark-gray text-sm mb-4 line-clamp-2">{p.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-medium-gray mb-3">
                    <span>{p.author}</span>
                    <span>{p.date}</span>
                    <span>{p.readTime}</span>
                  </div>
                  <button className="text-crimson text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="gradient-red-mustard rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-sora font-extrabold text-2xl md:text-3xl text-white mb-3">Stay Updated</h2>
            <p className="text-white/80 mb-6 max-w-md mx-auto">Subscribe to our newsletter for the latest education insights and exam updates.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-3 rounded-full text-sm focus:outline-none bg-white" />
              <button className="bg-jet text-white font-bold px-8 py-3 rounded-full hover:bg-charcoal transition-all text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
