import { MessageCircle } from "lucide-react";

const FloatingCTA = () => (
  <a
    href="https://wa.me/919999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-crimson flex items-center justify-center shadow-lg hover:scale-[1.08] transition-all duration-200 animate-glow-pulse"
    aria-label="Talk to Counsellor"
  >
    <MessageCircle size={26} className="text-white" />
  </a>
);

export default FloatingCTA;
