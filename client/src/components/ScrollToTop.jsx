import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Show button after 500px of scrolling down
      setIsVisible(window.scrollY > 500);

      // 2. Detect if the user has reached the footer
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // If the user is within 180 pixels of the absolute bottom of the page
      if (documentHeight - scrollPosition < 180) {
        setIsNearBottom(true);
      } else {
        setIsNearBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          // The magic happens in the className logic at the end here 👇
          className={`fixed right-6 md:right-10 z-[100] p-3 md:p-4 bg-brandBlue text-brandBg rounded-full shadow-[0_0_20px_rgba(255,214,0,0.3)] hover:bg-brandBlue-light focus:outline-none flex items-center justify-center transition-all duration-300 ease-in-out ${isNearBottom ? 'bottom-[180px] md:bottom-[130px]' : 'bottom-6 md:bottom-10'
            }`}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-7 md:w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;