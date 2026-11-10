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
      clientName: "Shailvi",
      brand: "Cake Villa Sasaram",
      // Cloudinary video URL
      videoSrc: "https://res.cloudinary.com/dww70ejnl/video/upload/v1780837153/editverse_portfolio/reels/n1p9086p8cmbrqk0s2au.mp4",
      // videoSrc: "https://res.cloudinary.com/dww70ejnl/video/upload/v1780837153/editverse_portfolio/reels/n1p9086p8cmbrqk0s2au.mp4",
    },
    {
      id: 2,
      clientName: "Surbhi",
      brand: "Surbhi Vlog",
      videoSrc: "https://res.cloudinary.com/dww70ejnl/video/upload/v1780837156/editverse_portfolio/reels/r2easfjrdkmaa72cbuk1.mp4",
      // videoSrc: "https://res.cloudinary.com/dww70ejnl/video/upload/v1780837156/editverse_portfolio/reels/r2easfjrdkmaa72cbuk1.mp4",
    },
    {
      id: 3,
      clientName: "Vishnu Ji",
      brand: "The Chaat Chaupal",
      videoSrc :"https://res.cloudinary.com/dww70ejnl/video/upload/v1793989158/AQNEHl_qF58Ud55HPh_kJ1ArJdwckbRDhDB3Hu9exDRKH-rN5nsyImi7ceae0ny5dZzq9TrSAs_cTlRpfNF7E1nHV3r9rSV9PWgobKA_lkxxrx.mp4"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-5 md:px-[5%] bg-brandBg-200 font-inter border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-[600px] mx-auto mb-14"
      >
        <div className="inline-block bg-brandTeal/10 text-brandTeal px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-4 border border-brandTeal/20">
          Client Feedback
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 font-plus-jakarta text-brandText">
          What Our <span className="text-brandTeal">Clients Say</span>
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
            className="bg-brandBg-300 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-brandTeal/30 transition-colors group"
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
                <h3 className="text-lg font-bold text-brandText font-plus-jakarta">{item.clientName}</h3>
                <p className="text-brandTeal text-sm font-medium">{item.brand}</p>
              </div>
              <div className="text-3xl filter ">
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