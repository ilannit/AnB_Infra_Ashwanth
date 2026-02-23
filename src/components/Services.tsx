import { motion } from 'motion/react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-medium tracking-widest text-xs uppercase mb-2 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Comprehensive Civil Solutions</h2>
          <p className="text-stone-600 text-lg">
            From the ground up, we provide a full spectrum of construction and consultation services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-stone-100"
            >
              <div className="w-14 h-14 bg-stone-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-50 transition-colors">
                <service.icon className="text-stone-900 group-hover:text-gold-600 transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
