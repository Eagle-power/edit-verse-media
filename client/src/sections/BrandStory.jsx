import { motion } from 'framer-motion';

const BrandStory = () => {
  const features = [
    { icon: '🎬', title: 'Edit', titleColor: 'text-brandText', desc: 'Video Editing, Reels, Content Creation' },
    { icon: '🌐', title: 'Verse', titleColor: 'text-brandBlue', desc: 'Universe of Creativity & Digital World' },
    { icon: '👍', title: 'Media', titleColor: 'text-brandBlue', desc: 'Social Media, Branding, Ads, Growth' },
    { icon: '⭐', title: 'EditVerse Media', titleColor: 'text-brandBlue', desc: 'Editing aur Content Creation ki apni duniya' },
  ];

  return (
    <section className="py-24 px-5 md:px-[5%] bg-brandBg relative overflow-hidden font-outfit">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brandBlue/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto flex flex-col items-center relative z-10">

        {/* Center Logo Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <div className="text-5xl md:text-7xl font-extrabold font-syne tracking-tight drop-shadow-[0_0_25px_rgba(255,214,0,0.4)]">
            <span className="text-brandText">Edit</span><span className="text-brandBlue">Verse</span>
          </div>
          <div className="text-brandText tracking-[0.3em] font-semibold text-lg md:text-xl mt-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            MEDIA
          </div>
        </motion.div>

        {/* 4 Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 w-full mb-16">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col gap-2 ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} items-center text-center`}
            >
              <div className="text-4xl mb-2 filter drop-shadow-[0_0_8px_rgba(255,214,0,0.5)]">{item.icon}</div>
              <h3 className={`text-2xl font-bold font-syne ${item.titleColor} border-b border-white/20 pb-1 px-2`}>
                {item.title}
              </h3>
              <p className="text-brandText/80 text-sm md:text-base max-w-[250px] mt-2 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-brandBg-300 border border-brandBlue/30 rounded-2xl p-6 flex items-center gap-4 shadow-[0_0_30px_rgba(255,214,0,0.1)]"
        >
          <div className="text-3xl text-brandBlue">🎯</div>
          <p className="text-brandText md:text-lg font-medium">
            Hum banate hain <span className="text-brandBlue font-bold">Ideas</span> ko Reality,<br className="hidden md:block" /> aur <span className="text-brandBlue font-bold">Content</span> ko Impact.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default BrandStory;