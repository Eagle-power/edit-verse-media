import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  // 1. Setup Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Social Media Management', // Default dropdown value
    message: ''
  });

  // 2. Setup UI Status State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 3. The Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null); // Clear previous messages

    try {
      // Send the POST request to your backend
      const response = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success! Show message and clear the form
        setStatusMessage({ type: 'success', text: data.message });
        setFormData({ name: '', email: '', service: 'Social Media Management', message: '' });
      } else {
        // Backend validation failed
        setStatusMessage({ type: 'error', text: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatusMessage({ type: 'error', text: 'Unable to connect to the server. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-5 md:px-[5%] bg-brandBg font-outfit border-t border-white/5 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brandBlue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 relative z-10">

        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-6 border border-brandBlue/20">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-syne text-brandText mb-6 leading-tight">
            Ready to <span className="text-brandBlue">Scale?</span>
          </h2>
          <p className="text-brandText-muted text-lg leading-relaxed mb-10 max-w-[450px]">
            Drop us a message. We usually reply within 24 hours to discuss how we can elevate your brand.
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brandBg-300 border border-white/10 flex items-center justify-center text-brandBlue text-xl shadow-lg">
                ✉️
              </div>
              <div>
                <div className="text-brandText font-syne font-bold text-lg mb-1">Email Us</div>
                <a href="mailto:hello@editversemedia.com" className="text-brandText-muted hover:text-brandBlue transition-colors">
                  hello@editversemedia.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brandBg-300 border border-white/10 flex items-center justify-center text-brandBlue text-xl shadow-lg">
                📍
              </div>
              <div>
                <div className="text-brandText font-syne font-bold text-lg mb-1">Location</div>
                <div className="text-brandText-muted">
                  Available Worldwide 🌍
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-brandBg-300 border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative"
        >
          {/* Status Message Banner */}
          {statusMessage && (
            <div className={`mb-6 p-4 rounded-lg text-sm font-semibold border ${statusMessage.type === 'success'
              ? 'bg-green-500/10 border-green-500/30 text-green-400'
              : 'bg-red-500/10 border-red-500/30 text-red-400'
              }`}>
              {statusMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brandText-muted mb-2 ml-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-brandBg border border-white/10 rounded-xl px-5 py-4 text-brandText focus:outline-none focus:border-brandBlue/50 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brandText-muted mb-2 ml-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full bg-brandBg border border-white/10 rounded-xl px-5 py-4 text-brandText focus:outline-none focus:border-brandBlue/50 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-brandText-muted mb-2 ml-1">What do you need?</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-brandBg border border-white/10 rounded-xl px-5 py-4 text-brandText focus:outline-none focus:border-brandBlue/50 transition-colors appearance-none"
              >
                <option value="Social Media Management">Social Media Management</option>
                <option value="Video Editing / Reels">Video Editing / Reels</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Complete Branding">Complete Branding</option>
                <option value="Other">Other Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brandText-muted mb-2 ml-1">Tell us about your project</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="I want to grow my Instagram..."
                className="w-full bg-brandBg border border-white/10 rounded-xl px-5 py-4 text-brandText focus:outline-none focus:border-brandBlue/50 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 w-full font-syne font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(255,214,0,0.15)] flex justify-center items-center ${isSubmitting
                ? 'bg-brandBlue/50 text-brandBg/50 cursor-not-allowed'
                : 'bg-brandBlue text-brandBg hover:bg-brandBlue-light hover:-translate-y-1'
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-brandBg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message 🚀'
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;