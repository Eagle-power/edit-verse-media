// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

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
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-3 px-5 md:px-[5%] bg-brandBg/90 backdrop-blur-md border-b border-white/5">
      <a href="#hero" className="flex items-center scale-90 md:scale-100 origin-left">
        <Logo />
      </a>

      <ul className="hidden md:flex gap-8 list-none items-center">
        {['about', 'services', 'portfolio', 'founder', 'contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={`text-[0.92rem] font-outfit font-medium capitalize transition-colors duration-200 hover:text-brandBlue ${activeSection === item ? 'text-brandBlue' : 'text-brandText-muted'
                }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="bg-brandBlue text-brandBg font-syne font-bold py-2.5 px-6 rounded-full text-sm transition-all duration-200 hover:bg-brandBlue-light hover:-translate-y-[1px]"
      >
        Get Started
      </a>
    </nav>
  );
};

export default Navbar;