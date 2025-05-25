import { useState, useEffect } from 'react';
import { ArrowUpCircle } from 'lucide-react';

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
        aria-label="Scroll to top"
      >
        <ArrowUpCircle className="w-6 h-6" />
      </button>
    )
  );
}
