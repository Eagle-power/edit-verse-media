import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-5 pt-24 pb-16 relative overflow-hidden bg-brandBg">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(255,214,0,0.07)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,214,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,214,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-brandBlue/10 border border-brandBlue/25 text-brandBlue px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider mb-8">
          <span className="w-1.5 h-1.5 bg-brandBlue rounded-full animate-pulse"></span>
          Creative Digital Agency ✦ Results-Driven
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-extrabold leading-tight tracking-tighter mb-6">
          <span className="text-brandBlue">Grow Your Brand</span><br />
          <span className="text-brandText/85 block mt-2">with EditVerse Media</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-base md:text-lg text-brandText-muted max-w-[560px] leading-relaxed mb-10 font-light">
          We help businesses scale with powerful social media, ads, and creative content that converts.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 flex-wrap justify-center">
          <a href="#contact" className="bg-brandBlue text-brandBg font-syne px-8 py-3.5 rounded-full font-bold text-base transition-all hover:bg-brandBlue-light hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,214,0,0.3)]">
            Get Started →
          </a>
          <a href="#contact" className="border-[1.5px] border-white/20 text-brandText font-syne px-8 py-3.5 rounded-full font-semibold text-base transition-all hover:border-brandBlue hover:text-brandBlue hover:-translate-y-1">
            Contact Now
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-brandText-muted-200 text-xs"
      >
        <div className="w-[1px] h-[50px] bg-gradient-to-b from-brandBlue to-transparent animate-[scrollLine_1.5s_infinite]"></div>
        <span>Scroll Down</span>
      </motion.div>

      {/* Add this specific animation to your global css or tailwind config, but inline style works for one-offs */}
      <style>{`
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
};

export default Hero;