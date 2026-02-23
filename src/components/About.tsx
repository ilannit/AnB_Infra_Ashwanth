import { motion } from 'motion/react';
import { COMPANY_INFO } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const features = [
    "9+ Years of Experience",
    "End-to-End Execution",
    "Quality Assurance",
    "On-Time Delivery"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" 
                alt="Construction Site" 
                className="rounded-2xl h-80 w-full object-cover mt-12"
              />
              <img 
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=800&auto=format&fit=crop" 
                alt="Architectural Plan" 
                className="rounded-2xl h-80 w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white p-8 rounded-xl max-w-xs shadow-xl hidden md:block">
              <p className="text-4xl font-serif font-bold text-gold-400 mb-2">{COMPANY_INFO.experience}</p>
              <p className="text-sm font-medium uppercase tracking-wider text-stone-400">Years of Excellence in Residential Construction</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-600 font-medium tracking-widest text-xs uppercase mb-2 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
              Building Dreams with <span className="italic text-stone-500">Precision</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Led by {COMPANY_INFO.owner} ({COMPANY_INFO.qualification}), {COMPANY_INFO.name} brings over a decade of expertise in civil engineering and project management. 
              We specialize in transforming concepts into concrete realities, handling everything from piling and foundations to the final finishing touches of luxury villas and apartments.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Our approach combines technical rigor with aesthetic sensibility, ensuring every project stands the test of time while providing a beautiful living space.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold-500" size={20} />
                  <span className="text-stone-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="h-px bg-stone-200 flex-1"></div>
              <span className="font-serif italic text-stone-400">SP Ashwanth</span>
              <div className="h-px bg-stone-200 flex-1"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
