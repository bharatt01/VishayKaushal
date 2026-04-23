import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Earn While Learn", to: "/earn-while-learn" },
  { label: "Marg Software", to: "/marg-software" },
  { label: "Placement", to: "/placement" },
  { label: "Programs", to: "/programs" },
  { label: "Universities", to: "/universities" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <GraduationCap className="text-mustard" size={28} />
          <span className="font-sora font-bold text-xl text-crimson">
            VishayKaushal
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-all ${
                location.pathname === l.to
                  ? "text-crimson border-b-2 border-crimson pb-0.5"
                  : "text-dark-gray hover:text-crimson"
              }`}
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="bg-crimson text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-blood-red transition-all duration-200 hover:scale-[1.03]"
          >
            Get Started
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <motion.button
          className="lg:hidden text-jet"
          onClick={() => setMobileOpen(!mobileOpen)}
          animate={{ rotate: mobileOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* SOLID OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* SOLID DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm 
                         bg-white shadow-2xl z-50 border-l border-gray-200"
            >
              <div className="flex flex-col h-full px-6 py-8">

                {/* TOP BAR */}
                <div className="flex justify-between items-center mb-10">
                  <span className="font-bold text-lg text-crimson">
                    Menu
                  </span>
                  <button onClick={() => setMobileOpen(false)}>
                    <X size={26} />
                  </button>
                </div>

                {/* LINKS */}
                <div className="flex flex-col gap-6">
                  {navLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className={`text-lg font-medium transition-all ${
                        location.pathname === l.to
                          ? "text-crimson translate-x-2"
                          : "text-dark-gray hover:text-crimson hover:translate-x-2"
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    to="/contact"
                    className="block text-center bg-crimson text-white font-bold py-3 rounded-full hover:bg-blood-red transition-all"
                  >
                    Get Started
                  </Link>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;