// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-brandBg border-t border-brandText/5 py-12 px-5 md:px-[5%] font-outfit">
      
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand Side */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img
            src="https://res.cloudinary.com/dww70ejnl/image/upload/v1780837081/editverse_assets/hrzwqfecgygwmvgcsucp.webp"
            alt="EditVerse Media Logo"
            /* Increased height from h-10 to h-16 for a larger, more prominent logo */
            className="h-16 w-auto opacity-90"
          />
          <p className="text-brandText-muted text-sm text-center md:text-left max-w-sm">
            We specialize in social media management, high-converting ads, and premium content creation.
          </p>
        </div>

        {/* Copyright & Legal Side */}
        <div className="flex flex-col items-center md:items-end gap-2 text-brandText-muted text-xs">
          <p>© {new Date().getFullYear()} EditVerse Media by Harsh. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-brandBlue cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-brandBlue cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;