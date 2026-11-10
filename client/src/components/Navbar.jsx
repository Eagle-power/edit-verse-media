// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  
  // Initialize theme from localStorage or default to dark
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // Apply theme class to document and save to localStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-3 px-5 md:px-[5%] bg-brandBg/90 backdrop-blur-md border-b border-white/5 transition-colors duration-300">
      <a href="#hero" className="flex items-center scale-90 md:scale-100 origin-left">
        {/* <Logo /> */}
        <Logo/>
      </a>

      <ul className="hidden md:flex gap-8 list-none items-center">
        {['about', 'services', 'portfolio', 'founder', 'contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={`text-[0.92rem] font-inter font-medium capitalize transition-colors duration-200 hover:text-brandTeal ${activeSection === item ? 'text-brandTeal' : 'text-brandText-muted'
                }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        {/* <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-brandBg-200 border border-brandText/10 text-brandText hover:border-brandTeal hover:text-brandTeal transition-all duration-300"
        >
          {theme === 'dark' ? (
            // Sun Icon for Dark Mode (to switch to Light)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          ) : (
            // Moon Icon for Light Mode (to switch to Dark)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          )}
        </button> */}

        <a
          href="#contact"
          className="bg-brandTeal text-brandBg font-plus-jakarta font-bold py-2.5 px-6 rounded-full text-sm transition-all duration-200 hover:bg-brandTeal-light hover:-translate-y-[1px]"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;