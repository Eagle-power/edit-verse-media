import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import BrandStory from './sections/BrandStory';
import MarketingBanner from './sections/MarketingBanner';
import Portfolio from './sections/Portfolio';
import Founder from './sections/Founder';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Testimonials from './sections/Testimonials';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <MarketingBanner />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Founder />

        {/* Simple CTA Section mapped from your HTML */}
        <section className="bg-brandBlue py-20 px-5 text-center font-outfit">
          <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-brandBg tracking-tight mb-3">
            Let's Grow Your Business 🚀
          </h2>
          <p className="text-brandBg/60 text-lg mb-8 font-medium">
            Work with EditVerse Media Today
          </p>
          <a
            href="#contact"
            className="inline-block bg-brandBg text-brandBlue font-syne px-10 py-4 rounded-full font-bold text-lg transition-all hover:bg-[#1a1a1a] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)]"
          >
            Contact Now →
          </a>
        </section>

        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;