// src/sections/Founder.jsx
import { motion } from 'framer-motion';

const Founder = () => {
  return (
    <section id="founder" className="py-24 px-5 md:px-[5%] bg-brandBg font-outfit">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

        {/* Left Side: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="w-[240px] h-[240px] mx-auto rounded-full overflow-hidden border-4 border-brandBlue/30 shadow-[0_0_60px_rgba(37,99,235,0.15)] mb-8 transition-transform duration-300 hover:scale-105 bg-brandBg-200">
            <img 
              src="https://res.cloudinary.com/dww70ejnl/image/upload/v1780840323/founder-portrait_uyhbus.webp"
              alt="Harsh - Founder, EditVerse Media"
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="font-syne text-xl font-bold text-brandBlue">Harsh</div>
          <div className="text-brandText-muted text-sm mt-1">Founder, EditVerse Media</div>

          <div className="flex justify-center mt-6">
            <a
              href="https://instagram.com/editverse__media"
              target="_blank"
              rel="noreferrer"
              // Added flex layout to align the SVG logo and text
              className="flex items-center gap-2 bg-brandBlue/10 border border-brandBlue/20 text-brandBlue px-5 py-2 rounded-full text-sm font-semibold transition-all hover:bg-brandBlue hover:text-white group"
            >
              {/* Professional Instagram SVG Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transition-transform group-hover:scale-110"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-4 border border-brandBlue/20">
            Meet the Founder
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne text-brandText mb-6 leading-tight">
            Hi, I'm <span className="text-brandBlue">Harsh</span> 👋
          </h2>

          <div className="text-brandText-muted leading-relaxed text-lg flex flex-col gap-4 font-light mb-8">
            <p>I'm the founder of EditVerse Media, a creative digital agency focused on helping brands grow online.</p>
            <p>I started this journey with a simple goal — to help businesses build a strong presence on social media and generate real results.</p>
            <p>From social media management to high-converting ads and content creation, I personally ensure that every project delivers quality and growth.</p>
          </div>

          <div className="text-xl font-semibold text-brandBlue border-l-[3px] border-brandBlue pl-5 py-1 font-syne mb-10 leading-relaxed shadow-[0_0_15px_rgba(37,99,235,0.05)]">
            Your brand's growth is my priority.
          </div>

          <a href="#contact" className="inline-block bg-brandBlue text-white font-syne px-10 py-4 rounded-full font-bold text-lg transition-all hover:bg-brandBlue-light hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(37,99,235,0.25)]">
            Let's Build Together 🚀
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Founder;