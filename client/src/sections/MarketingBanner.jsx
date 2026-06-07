import { motion } from 'framer-motion';

const MarketingBanner = () => {
  const pills = [
    "Graphic Design", "Social Media Management", 
    "Website Development", "App Development", 
    "Content Creation", "Meta Ads Expert"
  ];

  return (
    <section className="py-20 px-5 md:px-[5%] bg-brandBg-200 relative overflow-hidden font-outfit border-y border-brandText/5">
      {/* Subtle background wavy lines decoration - updated to blue */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwb2x5bGluZSBwb2ludHM9IjAsMTAwIDUwLDUwIDEwMCwxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgzNywgOTksIDIzNSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-40 pointer-events-none"></div>

      <div className="max-w-[900px] mx-auto flex flex-col items-center relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold font-syne text-brandText tracking-tight mb-4">
            Social Media<br/>Marketing
          </h2>
          <p className="text-brandBlue font-semibold text-lg md:text-xl tracking-wide">
            Let Us Grow Your Social Media!
          </p>
        </motion.div>

        {/* Services Pills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[800px] mb-16">
          {pills.map((pill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-r from-brandBlue-light to-brandBlue text-white font-bold text-center py-4 px-6 rounded-full text-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all cursor-default"
            >
              {pill}
            </motion.div>
          ))}
        </div>

        {/* CTA Footer inside Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between w-full max-w-[800px] gap-8"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-brandText mb-4">Let's Collaborate<br/>with Us!</h3>
            <a 
              href="tel:9162853736" 
              className="inline-flex items-center gap-3 bg-white border border-brandBlue/20 text-brandText font-bold py-3 px-6 rounded-full hover:border-brandBlue hover:text-brandBlue transition-colors shadow-sm"
            >
              <span className="w-8 h-8 bg-brandBlue text-white rounded-full flex items-center justify-center text-sm">i</span>
              More Information: 9162853736
            </a>
          </div>
          
          {/* Replaced emoji with a professional SVG Paper Plane icon */}
          <div className="text-brandBlue filter drop-shadow-[0_10px_20px_rgba(37,99,235,0.3)] transform hover:scale-110 hover:-translate-y-2 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-28 md:h-28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MarketingBanner;