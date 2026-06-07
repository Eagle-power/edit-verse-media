import { useRef } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  // This ref array will hold the actual video DOM elements
  const videoRefs = useRef([]);

  // Function to pause all other videos when one starts playing
  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((video, index) => {
      // If the video exists and it's not the one currently playing, pause it
      if (video && index !== currentIndex) {
        video.pause();
      }
    });
  };

  const videos = [
    {
      id: 1,
      clientName: "Client Name 1",
      brand: "Brand/Company 1",
      // Cloudinary video URL
      videoSrc: "https://res.cloudinary.com/dww70ejnl/video/upload/v1780833453/video1_emda7c.mp4",
    },
    {
      id: 2,
      clientName: "Client Name 2",
      brand: "Brand/Company 2",
      videoSrc: "https://res.cloudinary.com/dww70ejnl/video/upload/v1780833410/video2_hbfvqi.mp4",
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-5 md:px-[5%] bg-brandBg-200 font-outfit border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-[600px] mx-auto mb-14"
      >
        <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-4 border border-brandBlue/20">
          Client Feedback
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 font-syne text-brandText">
          What Our <span className="text-brandBlue">Clients Say</span>
        </h2>
        <p className="text-brandText-muted text-base md:text-lg leading-relaxed">
          Don't just take our word for it. Hear from the brands we've helped grow.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
        {videos.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-brandBg-300 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-brandBlue/30 transition-colors group"
          >
            {/* Video Container */}
            <div className="relative aspect-[9/16] bg-black flex items-center justify-center">
              <video
                ref={(el) => (videoRefs.current[index] = el)} // Attach the video to our ref array
                onPlay={() => handlePlay(index)} // Trigger the pause logic for others
                onContextMenu={(e) => e.preventDefault()} // Disable right-click (Save Video As...)
                controlsList="nodownload" // Remove the download button from controls
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src={item.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Client Info */}
            <div className="p-6 border-t border-white/5 flex justify-between items-center bg-gradient-to-b from-transparent to-black/20">
              <div>
                <h3 className="text-lg font-bold text-brandText font-syne">{item.clientName}</h3>
                <p className="text-brandBlue text-sm font-medium">{item.brand}</p>
              </div>
              <div className="text-3xl filter drop-shadow-[0_0_5px_rgba(255,214,0,0.5)]">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;