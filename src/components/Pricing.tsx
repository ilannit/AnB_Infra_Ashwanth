import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PACKAGES = [
  {
    name: 'Standard',
    price: '₹2,299',
    unit: '/ sq.ft',
    description: 'Upgraded materials and finishing for modern homes.',
    features: [
      'ARS Steel · Zuari / Chettinad cement · Upto 3 ft basement',
      'Dr. Fixit / Fosroc / Bostik waterproofing',
      "4'×2' floor tiles ₹50/sqft · Malaysian Teak main door",
      'UPVC 2-track sliding windows · Basic WPC bathroom door',
      'Asian Tractor Emulsion interior · Asian Ace exterior paint',
      'Anchor Roma switches · Orbit wires · 1000L Sintex tank · MS Railing',
      'Rainwater harvesting included',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '₹2,649',
    unit: '/ sq.ft',
    description: 'Premium quality with branded fittings and spacious feel.',
    features: [
      'Isteel · Ramco / Dalmia cement · M20 RCC mix · Upto 4 ft basement',
      'Dr. Fixit / Fosroc waterproofing · 10 ft ceiling height',
      '5\'×2\'8" tiles ₹90/sqft · Granite staircase ₹140/sqft',
      'First Quality Teak main door · UPVC 3-track + mesh windows',
      'Parryware fittings upto ₹30,000 · Legrand switches',
      'Finolex FRLS wires · Asian Premium Emulsion interior paint',
      '2000L Sintex tank · SS Railing · Soil testing included',
    ],
    highlighted: false,
  },
  {
    name: 'Luxury',
    price: '₹2,999',
    unit: '/ sq.ft',
    description: 'The ultimate luxury experience with top-tier brands.',
    features: [
      'Tata Tiscon / JSW steel · UltraTech / Ramco cement · M25 RCC',
      'Dr. Fixit / Fosroc waterproofing · 10 ft ceiling · Upto 4.5 ft basement',
      '6×4 tiles ₹150/sqft · Granite staircase ₹170/sqft',
      "First Quality Teak 3'5\"×8′ door · UPVC 3-track + mesh 6′×4′ windows",
      'Jaquar CP fittings upto ₹45,000 · GM switches · Finolex FRLSH wires',
      'Asian Royal Matt Emulsion interior · Ultima Protek exterior paint',
      '3000L RCC overhead tank · SS staircase & balcony glass railing',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-medium tracking-widest text-xs uppercase mb-2 block">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Construction Cost per sq ft</h2>
          <p className="text-stone-600 text-lg">
            Transparent pricing, top-grade materials, and zero hidden costs — choose a package that fits your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-stone-50 rounded-2xl p-8 border ${
                pkg.highlighted ? 'border-gold-500 shadow-xl shadow-gold-900/5' : 'border-stone-200 shadow-sm'
              } flex flex-col hover:shadow-xl transition-all duration-300`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">{pkg.name}</h3>
                <p className="text-stone-500 text-sm mb-4 h-10">{pkg.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-stone-900">{pkg.price}</span>
                  <span className="text-stone-500 font-medium">{pkg.unit}</span>
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`shrink-0 mt-0.5 ${pkg.highlighted ? 'text-gold-600' : 'text-stone-400'}`} size={18} />
                      <span className="text-stone-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/compare"
                className={`mt-auto w-full py-4 rounded-xl font-medium text-sm tracking-wider uppercase transition-all flex items-center justify-center ${
                  pkg.highlighted
                    ? 'bg-gold-500 text-white hover:bg-gold-600 shadow-md'
                    : 'bg-white text-stone-900 border border-stone-200 hover:border-gold-500 hover:text-gold-600'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
