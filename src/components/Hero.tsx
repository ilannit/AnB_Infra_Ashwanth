import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
            Premium Construction Services
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight tracking-tight">
            <span className="font-sans font-medium text-white block mb-2 text-4xl md:text-6xl uppercase tracking-widest text-shadow">BUILD</span>
            <span className="font-serif font-bold text-gold-300 italic block">Above</span>
            <span className="font-serif font-bold text-gold-300 italic block">& Beyond</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 justify-center max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Elevating modern living through innovative residential construction, expert structural consultation, and precision engineering in Chennai.
            We don't just build homes; we craft enduring masterpieces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="group bg-gold-500 text-white px-8 py-4 rounded-full font-medium text-sm tracking-wider uppercase hover:bg-gold-600 transition-all flex items-center justify-center gap-2"
            >
              View Our Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-medium text-sm tracking-wider uppercase hover:bg-white hover:text-stone-900 transition-all"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
}
