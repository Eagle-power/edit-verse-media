const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center select-none transition-transform duration-300 hover:scale-105">
      
      {/* Top: EditVerse */}
      {/* leading-[0.8] squashes the height, tracking-[-0.04em] pulls letters closer */}
      {/* <div className="font-plus-jakarta font-black italic text-3xl md:text-[2.2rem] tracking-[-0.04em] leading-[0.8] flex items-baseline drop-shadow-sm pb-1"> */}
        {/* Swapped white gradient for dark text so it's visible on a white header */}
        {/* <span className="text-brandText">
          Edit
        </span> */}
        {/* Swapped blue gradient for a sleek, professional yellow gradient */}
        {/* <span className="bg-gradient-to-b from-[#5EEAD4] via-[#14B8A6] to-[#0F766E] bg-clip-text text-transparent">
          Verse
        </span>
      </div> */}

      {/* Middle: MEDIA */}
      {/* Swapped text-white for text-brandText-muted (dark gray) with 90% opacity */}
      {/* <div className="font-inter font-bold tracking-[0.45em] text-brandText-muted opacity-90 text-[0.6rem] md:text-[0.7rem] leading-none mt-[-2px] ml-1 drop-shadow-sm">
        MEDIA
      </div> */}

      {/* Bottom: By Harsh */}
      {/* <div className="flex items-center w-full gap-2 mt-[-1px] opacity-90"> */}
        {/* Swapped yellow gradient lines to blue */}
        {/* <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-[#14B8A6]"></div> */}
        
        {/* Swapped yellow cursive text to blue */}
        {/* <div className="font-signature text-[#14B8A6] text-xl md:text-[1.35rem] font-normal tracking-wider whitespace-nowrap leading-none mt-1">
          By Harsh
        </div> */}
        
        {/* <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-[#14B8A6]"></div>
      </div> */}

      <img src="./public/logo.png" height={20} width={150} />



    </div>
  );
};

export default Logo;