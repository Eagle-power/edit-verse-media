// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Portfolio = () => {
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [visibleCount, setVisibleCount] = useState(6);

//   // 1. Added State for Database Data
//   const [projects, setProjects] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // The filter categories
//   const filters = ['All', 'Thumbnails', 'Graphic Design', 'Reels', 'Branding'];

//   // 2. The Fetch Logic (Replacing the hardcoded array)
//   useEffect(() => {
//     const fetchProjects = async () => {
//       setIsLoading(true); // Trigger skeletons
//       try {
//         const response = await fetch('http://localhost:5000/api/projects');
//         const result = await response.json();

//         if (result.success) {
//           setProjects(result.data); // Save the MongoDB data to React
//         }
//       } catch (error) {
//         console.error("Failed to load projects from the database:", error);
//       } finally {
//         setIsLoading(false); // Remove skeletons once data is ready
//       }
//     };

//     fetchProjects();
//   }, []); // The empty array ensures it only fetches once when the page loads

//   // 3. Client-Side Filtering
//   const handleFilterChange = (filter) => {
//     if (activeFilter === filter) return; 
//     setActiveFilter(filter);
//     setVisibleCount(6); // Reset back to 6 items when switching categories
//   };

//   // Filter the projects, THEN slice them based on visibleCount
//   const filteredProjects = projects.filter(project => 
//     activeFilter === 'All' ? true : project.category === activeFilter
//   );

//   const visibleProjects = filteredProjects.slice(0, visibleCount);

//   const skeletonCount = visibleCount > filteredProjects.length && filteredProjects.length > 0 
//     ? filteredProjects.length 
//     : visibleCount;

//   return (
//     <section id="portfolio" className="py-20 px-5 md:px-[5%] bg-brandBg-200 font-outfit border-t border-white/5">

//       {/* Header */}
//       <div className="text-center max-w-[600px] mx-auto mb-10">
//         <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-4 border border-brandBlue/20">
//           Our Work
//         </div>
//         <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 font-syne text-brandText">
//           Portfolio <span className="text-brandBlue">Highlights</span>
//         </h2>
//       </div>

//       {/* Filter Buttons */}
//       <div className="flex flex-wrap justify-center gap-3 mb-12">
//         {filters.map((filter) => (
//           <button
//             key={filter}
//             onClick={() => handleFilterChange(filter)}
//             className={`px-6 py-2 rounded-full font-syne font-bold text-sm transition-all duration-300 ${
//               activeFilter === filter 
//                 ? 'bg-brandBlue text-brandBg shadow-[0_0_15px_rgba(255,214,0,0.4)]' 
//                 : 'bg-brandBg-300 text-brandText-muted border border-white/10 hover:border-brandBlue/50 hover:text-brandText'
//             }`}
//           >
//             {filter}
//           </button>
//         ))}
//       </div>

//       {/* Grid */}
//       <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto min-h-[400px]">
//         <AnimatePresence mode="popLayout">

//           {/* Show Skeletons if loading from Database */}
//           {isLoading ? (
//             [...Array(skeletonCount)].map((_, i) => (
//               <motion.div
//                 key={`skeleton-${i}`}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <SkeletonCard />
//               </motion.div>
//             ))
//           ) : (
//             /* Show Real Database Projects if not loading */
//             visibleProjects.map((project) => (
//               <motion.div 
//                 // We use project._id here to match MongoDB's unique ID format!
//                 key={project._id || project.id}
//                 layout 
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.4 }}
//                 className="bg-brandBg-300 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-brandBlue/30 shadow-lg group flex flex-col will-change-transform"
//               >
//                 {/* Media Container */}
//                 {project.type === 'image' ? (
//                   <div className="relative aspect-video overflow-hidden bg-[#0A0A0A]">
//                     <img 
//                       src={project.imgSrc} 
//                       alt={project.title}
//                       loading="lazy"
//                       decoding="async"
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-brandBg/90 via-transparent to-transparent opacity-80"></div>
//                     <div className="absolute bottom-0 left-0 right-0 p-3 text-brandBlue text-xs font-bold tracking-wider text-center z-10">
//                       {project.category}
//                     </div>
//                   </div>
//                 ) : (
//                   <div className={`aspect-video bg-gradient-to-br ${project.bgGradient} flex items-center justify-center text-5xl relative overflow-hidden`}>
//                     <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>{project.icon}</motion.div>
//                     <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent text-brandBlue text-xs font-bold tracking-wider text-center">
//                       {project.category}
//                     </div>
//                   </div>
//                 )}

//                 {/* Card Info */}
//                 <div className="p-6 flex-grow flex flex-col justify-between border-t border-white/5">
//                   <div>
//                     <h3 className="text-xl font-bold text-brandText mb-2 font-syne">{project.title}</h3>
//                     <p className="text-brandText-muted text-sm leading-relaxed">{project.desc}</p>
//                   </div>
//                 </div>

//               </motion.div>
//             ))
//           )}
//         </AnimatePresence>
//       </motion.div>

//       {/* Empty State */}
//       {!isLoading && filteredProjects.length === 0 && (
//         <div className="text-center text-brandText-muted mt-10">
//           More projects coming soon!
//         </div>
//       )}

//       {/* The "Show More" Button */}
//       {!isLoading && visibleCount < filteredProjects.length && (
//         <div className="mt-14 flex justify-center">
//           <button 
//             onClick={() => setVisibleCount(prev => prev + 6)}
//             className="border border-brandBlue/50 text-brandBlue font-syne font-bold px-8 py-3 rounded-full hover:bg-brandBlue hover:text-brandBg transition-all duration-300"
//           >
//             Show More Projects ↓
//           </button>
//         </div>
//       )}

//     </section>
//   );
// };

// const SkeletonCard = () => {
//   return (
//     <div className="bg-brandBg-300 border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full min-h-[320px]">
//       {/* Image Placeholder (Pulses) */}
//       <div className="w-full aspect-video bg-white/5 animate-pulse"></div>

//       {/* Content Placeholder */}
//       <div className="p-6 flex-grow flex flex-col justify-between border-t border-white/5">
//         <div className="flex flex-col gap-3">
//           {/* Title Placeholder */}
//           <div className="h-6 bg-white/10 rounded-md w-3/4 animate-pulse"></div>
//           {/* Description Placeholders */}
//           <div className="h-4 bg-white/5 rounded-md w-full animate-pulse mt-2"></div>
//           <div className="h-4 bg-white/5 rounded-md w-5/6 animate-pulse"></div>
//         </div>
//         {/* Tag Placeholder */}
//         <div className="mt-6">
//           <div className="h-6 w-24 bg-brandBlue/10 rounded-full animate-pulse"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;



import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // The filter categories matching your DB
  const filters = ['All', 'Thumbnails', 'Graphic Design', 'Reels'];

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const result = await response.json();

        if (result.success) {
          setProjects(result.data);
        }
      } catch (error) {
        console.error("Failed to load projects from the database:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleFilterChange = (filter) => {
    if (activeFilter === filter) return;
    setActiveFilter(filter);
    setVisibleCount(6);
  };

  const filteredProjects = projects.filter(project =>
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const skeletonCount = visibleCount > filteredProjects.length && filteredProjects.length > 0
    ? filteredProjects.length
    : visibleCount;

  return (
    <section id="portfolio" className="py-20 px-5 md:px-[5%] bg-brandBg-200 font-outfit border-t border-white/5">

      <div className="text-center max-w-[600px] mx-auto mb-10">
        <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-4 border border-brandBlue/20">
          Our Work
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 font-syne text-brandText">
          Portfolio <span className="text-brandBlue">Highlights</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={`px-6 py-2 rounded-full font-syne font-bold text-sm transition-all duration-300 ${activeFilter === filter
              ? 'bg-brandBlue text-brandBg shadow-[0_0_15px_rgba(255,214,0,0.4)]'
              : 'bg-brandBg-300 text-brandText-muted border border-white/10 hover:border-brandBlue/50 hover:text-brandText'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto min-h-[400px]">
        <AnimatePresence mode="popLayout">

          {isLoading ? (
            [...Array(skeletonCount)].map((_, i) => (
              <motion.div
                key={`skeleton-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SkeletonCard />
              </motion.div>
            ))
          ) : (
            visibleProjects.map((project) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="bg-brandBg-300 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-brandBlue/30 shadow-lg group flex flex-col will-change-transform"
              >
                {/* Media Container strictly mapped to MongoDB Fields */}
                {project.mediaType === 'image' ? (
                  <div className="relative aspect-video overflow-hidden bg-[#0A0A0A]">
                    <img
                      src={project.mediaUrl}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brandBg/90 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-brandBlue text-xs font-bold tracking-wider text-center z-10">
                      {project.category}
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
                    <video
                      src={project.mediaUrl}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => e.target.pause()}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                      <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center text-brandText backdrop-blur-sm border border-white/20">
                        ▶
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent text-brandBlue text-xs font-bold tracking-wider text-center z-10">
                      {project.category}
                    </div>
                  </div>
                )}

                {/* Card Info */}
                <div className="p-6 flex-grow flex flex-col justify-between border-t border-white/5">
                  <div>
                    <h3 className="text-xl font-bold text-brandText mb-2 font-syne">{project.title}</h3>
                    {/* Maps to project.description instead of project.desc */}
                    <p className="text-brandText-muted text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>

              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>

      {!isLoading && filteredProjects.length === 0 && (
        <div className="text-center text-brandText-muted mt-10">
          More projects coming soon!
        </div>
      )}

      {!isLoading && visibleCount < filteredProjects.length && (
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setVisibleCount(prev => prev + 6)}
            className="border border-brandBlue/50 text-brandBlue font-syne font-bold px-8 py-3 rounded-full hover:bg-brandBlue hover:text-brandBg transition-all duration-300"
          >
            Show More Projects ↓
          </button>
        </div>
      )}

    </section>
  );
};

const SkeletonCard = () => {
  return (
    <div className="bg-brandBg-300 border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full min-h-[320px]">
      <div className="w-full aspect-video bg-white/5 animate-pulse"></div>
      <div className="p-6 flex-grow flex flex-col justify-between border-t border-white/5">
        <div className="flex flex-col gap-3">
          <div className="h-6 bg-white/10 rounded-md w-3/4 animate-pulse"></div>
          <div className="h-4 bg-white/5 rounded-md w-full animate-pulse mt-2"></div>
          <div className="h-4 bg-white/5 rounded-md w-5/6 animate-pulse"></div>
        </div>
        <div className="mt-6">
          <div className="h-6 w-24 bg-brandBlue/10 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;