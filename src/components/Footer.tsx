import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const programLinks = ["Engineering", "Medical", "Business", "Law", "Design", "CS/IT"];
const examLinks = ["JEE Main", "NEET", "CLAT", "CAT", "NID DAT", "CUET"];

const socials = ["Twitter", "LinkedIn", "Instagram", "YouTube"];

const Footer = () => (
  <footer>
    {/* Gradient accent strip */}
    <div className="h-1 gradient-red-mustard" />
    <div className="relative bg-jet pt-16 pb-8 overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=60')" }}
      />
      <div className="absolute inset-0 bg-black/88" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-mustard" size={24} />
              <span className="font-sora font-bold text-xl text-white">VishayKaushal</span>
            </div>
            <p className="text-medium-gray text-sm">
              Empowering students to make informed education decisions and achieve their career dreams.
            </p>
          </div>

          <div>
            <h4 className="font-sora font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-medium-gray hover:text-mustard transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sora font-bold text-white mb-4">Programs</h4>
            <ul className="space-y-2">
              {programLinks.map((item) => (
                <li key={item}>
                  <Link to="/programs" className="text-sm text-medium-gray hover:text-mustard transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sora font-bold text-white mb-4">Entrance Exams</h4>
            <ul className="space-y-2">
              {examLinks.map((item) => (
                <li key={item}>
                  <Link to="/entrance-tests" className="text-sm text-medium-gray hover:text-mustard transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-medium-gray">© 2025 VishayKaushal. All rights reserved.</p>
          <div className="flex gap-5">
            {socials.map((s) => (
              <a key={s} href="#" className="text-sm text-medium-gray hover:text-crimson transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
