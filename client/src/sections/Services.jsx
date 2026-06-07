import { motion } from 'framer-motion';

const Services = () => {
  // Replaced emojis with professional, clean SVG icons
  const servicesData = [
    { 
      num: '01', 
      icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>, 
      title: 'Social Media Management', 
      desc: 'We handle your Instagram & social media with proper strategy, content planning, and growth techniques.' 
    },
    { 
      num: '02', 
      icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>, 
      title: 'Website Development', 
      desc: 'We create modern, responsive, and professional websites for your business that drive real results.' 
    },
    { 
      num: '03', 
      icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>, 
      title: 'App Development', 
      desc: 'Custom mobile apps designed to scale your business digitally and reach your audience anywhere.' 
    },
    { 
      num: '04', 
      icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" /></svg>, 
      title: 'Meta & Google Ads', 
      desc: 'Run high-converting ad campaigns that generate leads and sales with measurable ROI.' 
    },
    { 
      num: '05', 
      icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>, 
      title: 'Graphic Design', 
      desc: 'Creative posters, banners, and brand visuals that grab attention and make your brand unforgettable.' 
    },
    { 
      num: '06', 
      icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>, 
      title: 'Reels Shoot & Editing', 
      desc: 'High-quality reels that boost engagement and go viral — scripted, shot, and edited professionally.' 
    },
  ];

  return (
    <section id="services" className="py-20 px-5 md:px-[5%] bg-brandBg font-outfit">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-[600px] mx-auto mb-14"
      >
        <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-4 border border-brandBlue/20">
          What We Do
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-brandText">
          Our <span className="text-brandBlue">Services</span>
        </h2>
        <p className="text-brandText-muted text-base md:text-lg leading-relaxed">
          Everything your brand needs to scale — handled by experts.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
        {servicesData.map((service, index) => (
          <motion.div 
            key={service.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            // Changed to pure white cards, subtle borders, and soft blue shadow glow on hover
            className="group relative bg-white border border-brandText/5 rounded-3xl p-8 transition-all duration-300 hover:border-brandBlue/30 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)] overflow-hidden shadow-sm"
          >
            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brandBlue/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
            
            {/* Changed background number from nearly invisible 5% to a soft, visible gray/blue mix */}
            <div className="absolute top-6 right-6 text-4xl font-extrabold text-brandText/5 font-syne leading-none group-hover:text-brandBlue/10 transition-colors">
              {service.num}
            </div>
            
            <div className="w-[52px] h-[52px] bg-brandBlue/10 border border-brandBlue/15 text-brandBlue rounded-xl flex items-center justify-center mb-5">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-bold text-brandText mb-2.5 relative z-10">{service.title}</h3>
            <p className="text-brandText-muted text-sm leading-relaxed relative z-10">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;