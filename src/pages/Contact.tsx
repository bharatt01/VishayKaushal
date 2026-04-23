import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, ChevronDown, ChevronUp, Send, ZoomIn } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "GGV Crossing Republic , Ghaziabad" },
  { icon: Phone, label: "Phone", value: "+91-7819991095" },
  { icon: Mail, label: "Email", value: "vkiassistance@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91-7819991095" },
];

const faqs = [
  { q: "What services does VishayKaushal offer?", a: "We offer career counselling, program selection guidance, university shortlisting, entrance exam preparation tips, and end-to-end admission support." },
  { q: "Is the initial consultation free?", a: "Yes! Your first 30-minute consultation is completely free. We'll assess your needs and recommend the best path forward." },
  { q: "How long does the counselling process take?", a: "Typically 2-4 weeks depending on complexity. We provide ongoing support until you secure admission." },
  { q: "Do you help with study abroad applications?", a: "Yes, we have dedicated consultants for US, UK, Canada, Australia, and European university applications." },
  { q: "Can I get help with scholarship applications?", a: "Absolutely! We help identify and apply for relevant scholarships to reduce your education costs." },
  { q: "What is the success rate of VishayKaushal?", a: "We maintain a 98% satisfaction rate with over 5,000 students successfully placed in their preferred institutions." },
  { q: "Do you offer online counselling?", a: "Yes, all our counselling services are available both in-person and online via video call." },
  { q: "How do I book an appointment?", a: "You can fill out the contact form on this page, call us, or send a WhatsApp message. We'll respond within 2 hours." },
  { q: "What streams do you cover?", a: "We cover Engineering, Law, Business, Design, Science, Arts, Agriculture, and more." },
  { q: "Is there a fee for your services?", a: "We have various packages starting from ₹2,999. The first consultation is always free to help you understand our approach." },
];

const officeImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=280&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=280&fit=crop",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=280&fit=crop",
];

const streams = ["Engineering", "Law", "Business", "Design", "Science", "Arts", "Other"];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", stream: "", qualification: "", city: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim() || form.phone.trim().length < 10) e.phone = "Valid phone required";
    if (!form.stream) e.stream = "Please select a stream";
    if (!form.qualification.trim()) e.qualification = "Qualification is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Thank you! We'll get back to you within 2 hours.");
      setForm({ name: "", email: "", phone: "", stream: "", qualification: "", city: "", message: "" });
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=60')" }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-mustard text-sm mb-2"><Link to="/" className="hover:text-white">Home</Link> &gt; Contact</p>
          <h1 className="font-sora font-extrabold text-4xl md:text-5xl text-white">Let's Find Your Path Together</h1>
          <p className="text-mustard mt-4 max-w-lg">Reach out to us and get started on your journey to the right education.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div {...fadeUp}>
              <h2 className="font-sora font-bold text-2xl text-jet mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-jet text-sm font-semibold mb-1 block">Your Name</label>
                  <input
                    type="text" placeholder="John Doe" value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-crimson bg-white"
                  />
                  {errors.name && <p className="text-crimson text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-jet text-sm font-semibold mb-1 block">Email Address</label>
                  <input
                    type="email" placeholder="john@example.com" value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-crimson bg-white"
                  />
                  {errors.email && <p className="text-crimson text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-jet text-sm font-semibold mb-1 block">Phone Number</label>
                  <input
                    type="tel" placeholder="+91 98765 43210" value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-crimson bg-white"
                  />
                  {errors.phone && <p className="text-crimson text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="text-jet text-sm font-semibold mb-1 block">Stream of Interest</label>
                  <select
                    value={form.stream}
                    onChange={e => setForm(f => ({ ...f, stream: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-crimson text-dark-gray bg-white"
                  >
                    <option value="">Select Stream</option>
                    {streams.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.stream && <p className="text-crimson text-xs mt-1">{errors.stream}</p>}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-jet text-sm font-semibold mb-1 block">Highest Qualification</label>
                    <input
                      type="text" placeholder="12th, Bachelors, etc." value={form.qualification}
                      onChange={e => setForm(f => ({ ...f, qualification: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-crimson bg-white"
                    />
                    {errors.qualification && <p className="text-crimson text-xs mt-1">{errors.qualification}</p>}
                  </div>
                  <div>
                    <label className="text-jet text-sm font-semibold mb-1 block">City</label>
                    <input
                      type="text" placeholder="Your City" value={form.city}
                      onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-crimson bg-white"
                    />
                    {errors.city && <p className="text-crimson text-xs mt-1">{errors.city}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-jet text-sm font-semibold mb-1 block">Your Message</label>
                  <textarea
                    placeholder="Tell us about your goals..." rows={4} value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-crimson resize-none bg-white"
                  />
                  {errors.message && <p className="text-crimson text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="bg-crimson text-white font-bold px-8 py-3 rounded-full hover:bg-blood-red transition-all flex items-center gap-2">
                  <Send size={16} /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <h2 className="font-sora font-bold text-2xl text-jet mb-6">Contact Information</h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map((c, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-warm-border flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-mustard/20 flex items-center justify-center shrink-0">
                      <c.icon size={18} className="text-mustard" />
                    </div>
                    <div>
                      <p className="text-medium-gray text-xs font-semibold uppercase">{c.label}</p>
                      <p className="text-jet text-sm font-medium">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-warm-gray-bg rounded-xl p-5 border-l-4 border-l-crimson">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-crimson" />
                  <h4 className="font-sora font-bold text-jet text-sm">Office Hours</h4>
                </div>
                <p className="text-dark-gray text-sm">Mon - Sat: 9:00 AM – 7:00 PM</p>
                <p className="text-dark-gray text-sm">Sunday: 10:00 AM – 2:00 PM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Photos */}
      <section className="bg-off-white pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-1">
            {officeImages.map((img, i) => (
              <div key={i} className="relative h-[280px] overflow-hidden group cursor-pointer">
                <img src={img} alt="Office" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/35 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {i < 2 && <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-crimson z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-warm-gray-bg">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle title="Frequently Asked Questions" subtitle="Find quick answers to common queries" />
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className={`bg-white rounded-xl border border-warm-border overflow-hidden ${openFaq === i ? "border-l-4 border-l-crimson" : "border-l-4 border-l-warm-border"}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-sora font-bold text-jet text-sm pr-4">{f.q}</span>
                  {openFaq === i ? <ChevronUp size={18} className="text-mustard shrink-0" /> : <ChevronDown size={18} className="text-medium-gray shrink-0" />}
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-dark-gray text-sm">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border-2 border-crimson h-[350px] flex items-center justify-center bg-white overflow-hidden">
            <div className="text-center">
              <MapPin size={48} className="text-crimson mx-auto mb-3 opacity-30" />
              <p className="text-medium-gray">Google Maps embed</p>
              <p className="text-medium-gray text-xs">123, Education Hub, Connaught Place, New Delhi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
