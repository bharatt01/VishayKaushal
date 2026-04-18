import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Award, BookOpen, DollarSign, Users } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import EntranceTests from "@/components/EntranceTests";

const stateFilters = ["All", "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad"];
const typeFilters = ["All Types", "Government", "Private"];

const universities = [
  { name: "IIT Delhi", city: "New Delhi", state: "Delhi", type: "Government", rank: 1, courses: 45, fees: "₹2-3 Lakhs/yr", acceptance: "2%", img: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop" },
  { name: "IIT Bombay", city: "Mumbai", state: "Mumbai", type: "Government", rank: 2, courses: 50, fees: "₹2-3 Lakhs/yr", acceptance: "1.5%", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop" },
  { name: "IISc Bangalore", city: "Bangalore", state: "Bangalore", type: "Government", rank: 3, courses: 40, fees: "₹0.5-2 Lakhs/yr", acceptance: "3%", img: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=400&h=250&fit=crop" },
  { name: "BITS Pilani", city: "Pilani", state: "Delhi", type: "Private", rank: 8, courses: 30, fees: "₹5-7 Lakhs/yr", acceptance: "5%", img: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=250&fit=crop" },
  { name: "VIT Vellore", city: "Vellore", state: "Chennai", type: "Private", rank: 12, courses: 60, fees: "₹2-5 Lakhs/yr", acceptance: "15%", img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop" },
  { name: "SRM Chennai", city: "Chennai", state: "Chennai", type: "Private", rank: 15, courses: 55, fees: "₹2-6 Lakhs/yr", acceptance: "20%", img: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&h=250&fit=crop" },
  { name: "AIIMS Delhi", city: "New Delhi", state: "Delhi", type: "Government", rank: 1, courses: 20, fees: "₹0.1-1 Lakh/yr", acceptance: "0.1%", img: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=250&fit=crop" },
  { name: "NLU Delhi", city: "New Delhi", state: "Delhi", type: "Government", rank: 2, courses: 8, fees: "₹2-3 Lakhs/yr", acceptance: "3%", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop" },
  { name: "IIM Ahmedabad", city: "Ahmedabad", state: "Mumbai", type: "Government", rank: 1, courses: 12, fees: "₹10-23 Lakhs/yr", acceptance: "1%", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop" },
  { name: "NIFT Delhi", city: "New Delhi", state: "Delhi", type: "Government", rank: 1, courses: 15, fees: "₹1-3 Lakhs/yr", acceptance: "5%", img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop" },
  { name: "Manipal University", city: "Manipal", state: "Bangalore", type: "Private", rank: 10, courses: 70, fees: "₹3-8 Lakhs/yr", acceptance: "25%", img: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop" },
  { name: "Jadavpur University", city: "Kolkata", state: "Kolkata", type: "Government", rank: 5, courses: 35, fees: "₹0.2-1 Lakh/yr", acceptance: "8%", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop" },
];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const Universities = () => {
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [compare, setCompare] = useState<number[]>([]);

  const filtered = universities.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase());
    const matchState = stateFilter === "All" || u.state === stateFilter;
    const matchType = typeFilter === "All Types" || u.type === typeFilter;
    return matchSearch && matchState && matchType;
  });

  const toggleCompare = (i: number) => {
    setCompare(prev => prev.includes(i) ? prev.filter(x => x !== i) : prev.length < 2 ? [...prev, i] : prev);
  };

  return (
    <>
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=60')" }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-mustard text-sm mb-2"><Link to="/" className="hover:text-white">Home</Link> &gt; Universities</p>
          <h1 className="font-sora font-extrabold text-4xl md:text-5xl text-white">Find Your Perfect University</h1>
          <p className="text-white/80 mt-4 max-w-lg">Search, compare, and choose from 200+ universities across India.</p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-6 bg-off-white border-b border-warm-border sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-medium-gray" />
              <input
                type="text"
                placeholder="Search universities..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-crimson"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {stateFilters.map(s => (
                <button key={s} onClick={() => setStateFilter(s)} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${stateFilter === s ? "bg-crimson text-white" : "bg-white border border-warm-border text-dark-gray hover:border-mustard"}`}>
                  {s}
                </button>
              ))}
              <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} className="px-4 py-2 rounded-full border border-warm-border text-xs bg-white text-dark-gray">
                {typeFilters.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((u, i) => {
              const uIdx = universities.indexOf(u);
              return (
                <motion.div key={u.name} {...fadeUp} transition={{ delay: i * 0.05 }} className="bg-white rounded-2xl border border-warm-border overflow-hidden card-hover group">
                  <div className="h-40 overflow-hidden relative">
                    <img src={u.img} alt={u.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/35 transition-all duration-300" />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-badge-green text-white text-xs font-bold rounded-full">#{u.rank} NIRF</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-sora font-bold text-jet mb-1">{u.name}</h3>
                    <div className="flex items-center gap-1 text-medium-gray text-sm mb-3"><MapPin size={12} /> {u.city}</div>
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-dark-gray">
                      <div className="flex items-center gap-1"><BookOpen size={12} /> {u.courses} Courses</div>
                      <div className="flex items-center gap-1"><DollarSign size={12} /> {u.fees}</div>
                      <div className="flex items-center gap-1"><Users size={12} /> {u.acceptance} Accept</div>
                      <div className="flex items-center gap-1"><Award size={12} /> {u.type}</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 border border-crimson text-crimson font-bold py-2 rounded-full text-sm hover:bg-crimson hover:text-white transition-all">
                        View Details
                      </button>
                      <button
                        onClick={() => toggleCompare(uIdx)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${compare.includes(uIdx) ? "bg-mustard text-jet" : "bg-white border border-warm-border text-medium-gray hover:border-mustard"}`}
                      >
                        {compare.includes(uIdx) ? "✓" : "Compare"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {compare.length === 2 && (
        <section className="py-16 bg-warm-gray-bg">
          <div className="container mx-auto px-4">
            <SectionTitle title="University Comparison" />
            <div className="bg-white rounded-2xl border border-warm-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="gradient-red-black text-white">
                    <th className="p-4 text-left font-sora">Feature</th>
                    <th className="p-4 text-left font-sora">{universities[compare[0]].name}</th>
                    <th className="p-4 text-left font-sora">{universities[compare[1]].name}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["City", "city"],
                    ["Type", "type"],
                    ["NIRF Rank", "rank"],
                    ["Courses", "courses"],
                    ["Fees", "fees"],
                    ["Acceptance Rate", "acceptance"],
                  ].map(([label, key], i) => {
                    const v1 = String((universities[compare[0]] as any)[key]);
                    const v2 = String((universities[compare[1]] as any)[key]);
                    return (
                      <tr key={label} className={i % 2 === 0 ? "bg-off-white" : "bg-warm-gray-bg"}>
                        <td className="p-4 font-semibold text-jet">{label}</td>
                        <td className={`p-4 ${v1 !== v2 ? "text-crimson font-bold" : "text-dark-gray"}`}>{v1}</td>
                        <td className={`p-4 ${v1 !== v2 ? "text-crimson font-bold" : "text-dark-gray"}`}>{v2}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-4">
              <button onClick={() => setCompare([])} className="text-sm text-crimson font-semibold hover:underline">Clear Comparison</button>
            </div>
          </div>
        </section>
      )}

      {/* Parallax Strip */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1600&q=60')" }} />
        <div className="absolute inset-0 bg-black/68" />
        <div className="relative z-10 text-center px-4">
          <motion.h2 {...fadeUp} className="font-sora font-extrabold text-3xl md:text-4xl text-white mb-6">The right university changes everything.</motion.h2>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <Link to="/contact" className="border-2 border-mustard text-mustard font-bold px-8 py-3 rounded-full hover:bg-mustard hover:text-jet transition-all">
              Get Guidance
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    <EntranceTests />
    </>
  );
};

export default Universities;
