import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { num: '50+', label: 'Projects Done' },
    { num: '30+', label: 'Happy Clients' },
    { num: '3+', label: 'Years Active' },
    { num: '100%', label: 'Commitment' },
  ];

  return (
    <section id="about" className="py-20 px-5 md:px-[5%] bg-brandBg-200 font-inter">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Mission Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          // Updated to pure white with a soft shadow for professional depth
          className="relative bg-brandBg-300 border border-brandText/5 rounded-3xl p-8 md:p-10 shadow-xl shadow-brandTeal/5 overflow-hidden"
        >
          {/* Top border gradient */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-brandTeal-light to-brandTeal"></div>
          
          {/* Replaced Emoji with a Professional Target SVG */}
          <div className="w-14 h-14 bg-brandTeal/10 rounded-2xl flex items-center justify-center mb-6 border border-brandTeal/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-brandTeal">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5m13.5 0V6A2.25 2.25 0 0 0 15 3.75h-1.5m-6 16.5H6A2.25 2.25 0 0 1 3.75 18v-1.5m13.5 0V18A2.25 2.25 0 0 1 15 20.25h-1.5m-3-12a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 0 4.5 4.5M12 3v3m0 12v3m9-9h-3M3 12h3" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-brandText font-plus-jakarta mb-3">Our Mission</h3>
          <p className="text-brandText-muted leading-relaxed text-base mb-8">
            Your growth is our priority. From strategy to execution — we handle everything.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                // Cleaned up the stat boxes
                className="bg-brandBg-200 border border-brandText/5 rounded-xl p-4 text-center hover:border-brandTeal/30 transition-colors"
              >
                <div className="text-3xl font-extrabold text-brandTeal font-plus-jakarta">{stat.num}</div>
                <div className="text-xs text-brandText-muted mt-1 tracking-wide uppercase font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <div>
            <div className="inline-block bg-brandTeal/10 text-brandTeal px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-4 border border-brandTeal/20">
              About Us
            </div>
            {/* Added explicitly `text-brandText` so it doesn't vanish */}
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-plus-jakarta mb-6 text-brandText">
              About <span className="text-brandTeal">EditVerse</span> Media
            </h2>
          </div>
          
          <div className="text-brandText-muted leading-relaxed text-lg flex flex-col gap-4 font-light">
            <p><strong className="text-brandText font-semibold">EditVerse Media</strong> is a creative digital agency focused on helping brands grow online.</p>
            <p>We specialize in social media management, high-converting ads, and premium content creation.</p>
            <p>Our goal is simple — <strong className="text-brandTeal font-semibold">your growth is our priority.</strong></p>
            <p>From strategy to execution, we handle everything so you can focus on your business.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;