import { useEffect, useState } from "react";

export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed right-8 z-50 rounded-full bg-elevated-bg shadow-lg text-primary-tx p-3 hover:bg-elevated-bg/80 
        transition-all duration-200
        ${
          isVisible
            ? "bottom-8 opacity-100 pointer-events-auto translate-y-0"
            : "-bottom-20 opacity-0 pointer-events-none translate-y-10"
        }
      `}
      style={{ fontSize: "1.6rem" }}
    >
      {/* Lucide ArrowUp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2em"
        height="1.2em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-up"
        aria-hidden="true"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
