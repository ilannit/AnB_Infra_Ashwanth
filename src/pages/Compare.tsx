import { motion } from 'motion/react';
import { Check, Minus } from 'lucide-react';
import React, { useEffect } from 'react';

const CATEGORIES = [
  {
    name: 'Structure & Foundation',
    items: [
      { feature: 'Steel Brand', basic: 'Any ISI brand', standard: 'ARS', premium: 'Isteel', luxury: 'Tata Tiscon / JSW' },
      { feature: 'Cement', basic: 'Any ISI brand', standard: 'Zuari / Chettinad', premium: 'Ramco / Dalmia', luxury: 'UltraTech / Ramco / Coromandel' },
      { feature: 'RCC Design Mix', basic: 'M20', standard: 'M20', premium: 'M20', luxury: 'M25' },
      { feature: 'Ceiling Height', basic: '9.5 ft', standard: '9.5 ft', premium: '10 ft', luxury: '10 ft' },
      { feature: 'Basement Height', basic: 'Upto 2 ft', standard: 'Upto 3 ft', premium: 'Upto 4 ft', luxury: 'Upto 4.5 ft' },
      { feature: 'Waterproofing', basic: false, standard: 'Dr. Fixit / Fosroc / Bostik', premium: 'Dr. Fixit / Fosroc / Bostik', luxury: 'Dr. Fixit / Fosroc / Bostik' },
    ],
  },
  {
    name: 'Flooring & Tiling',
    items: [
      { feature: 'Living & Dining', basic: "2'×2' Tiles (₹45/sqft)", standard: "4'×2' Tiles (₹50/sqft)", premium: "5'3\"×2'8\" Tiles (₹90/sqft)", luxury: "6'×4' Tiles (₹150/sqft)" },
      { feature: 'Rooms & Kitchen', basic: "Tiles (₹45/sqft)", standard: "Tiles (₹50/sqft)", premium: "Tiles (₹90/sqft)", luxury: "Tiles (₹150/sqft)" },
      { feature: 'Balcony & Open Area', basic: "1'×1' Tiles (₹35/sqft)", standard: "1'×1' Tiles (₹50/sqft)", premium: "2'×2' Tiles (₹60/sqft)", luxury: "3'4\"×8\" Tiles (₹80/sqft)" },
      { feature: 'Staircase', basic: '1×1 Anti-skid (₹35/sqft)', standard: '1×1 Anti-skid (₹50/sqft)', premium: 'Granite (₹130/sqft)', luxury: 'Granite (₹170/sqft)' },
      { feature: 'Parking', basic: '₹35/sqft', standard: '₹50/sqft', premium: '₹60/sqft', luxury: '₹70/sqft' },
    ],
  },
  {
    name: 'Kitchen & Bathroom',
    items: [
      { feature: 'Kitchen Wall Tiles', basic: '₹35/sqft (2 ft above slab)', standard: '₹50/sqft (2 ft above slab)', premium: '₹65/sqft (4 ft above slab)', luxury: '₹80/sqft (4 ft above slab)' },
      { feature: 'Kitchen Granite Slab', basic: '15 rft (₹90/sqft)', standard: 'Upto 15 rft (₹125/sqft)', premium: '20 rft (₹165/sqft)', luxury: '20 rft (₹200/sqft)' },
      { feature: 'Bathroom Wall Tiles', basic: '7 ft coverage (₹35/sqft)', standard: '7 ft coverage (₹50/sqft)', premium: '10 ft coverage (₹65/sqft)', luxury: '10 ft coverage (₹80/sqft)' },
      { feature: 'Sanitary & CP Fittings', basic: 'Any ISI brand (upto ₹8,000)', standard: 'Parryware (upto ₹18,000)', premium: 'Parryware (upto ₹30,000)', luxury: 'Jaquar (upto ₹45,000)' },
    ],
  },
  {
    name: 'Doors & Windows',
    items: [
      { feature: 'Main Door', basic: 'Basic Ready-made Teak (3.5\'×7\')', standard: 'Malaysian Teak (3.5\'×7\')', premium: 'First Quality Teak (3.5\'×7\')', luxury: "First Quality Teak (3.5'×8')" },
      { feature: 'Internal Doors', basic: 'Flush Door', standard: 'Flush Door', premium: 'Laminated Flush Door', luxury: 'LUXE Flush Door' },
      { feature: 'Windows', basic: 'Aluminium 2-track (3\'×4\')', standard: 'UPVC 2-track sliding (4\'×4\')', premium: 'UPVC 3-track + mesh (4\'×4\')', luxury: "UPVC 3-track + mesh (6'×4')" },
      { feature: 'Bathroom Doors', basic: 'PVC', standard: 'WPC', premium: 'Laminated WPC', luxury: 'LUXE WPC' },
    ],
  },
  {
    name: 'Painting',
    items: [
      { feature: 'Interior Putty', basic: 'Wall Only', standard: 'Wall Only', premium: 'Wall Only', luxury: 'Wall + Ceiling' },
      { feature: 'Interior Paint', basic: '2-coat ISI emulsion', standard: 'Asian Tractor Emulsion', premium: 'Asian Premium Emulsion', luxury: 'Asian Royal Matt Emulsion' },
      { feature: 'Exterior Paint', basic: 'ISI emulsion', standard: 'Asian Ace Emulsion', premium: 'Apex Emulsion weatherproof primer', luxury: 'Ultima Protek primer + white cement' },
    ],
  },
  {
    name: 'Electrical',
    items: [
      { feature: 'Switches', basic: 'Any ISI brand', standard: 'Anchor Roma', premium: 'Legrand', luxury: 'GM' },
      { feature: 'Wires', basic: 'Any ISI brand', standard: 'Orbit', premium: 'Finolex FR', luxury: 'Finolex FRLSH' },
    ],
  },
  {
    name: 'Inclusions',
    items: [
      { feature: 'Overhead Tank', basic: false, standard: '1000 L Sintex', premium: '2000 L Sintex', luxury: '3000L Readymade' },
      { feature: 'Staircase & Balcony Railing', basic: false, standard: 'MS Railing', premium: 'SS Railing', luxury: 'SS Glass Railing' },
      { feature: 'Rainwater Harvesting', basic: false, standard: true, premium: true, luxury: true },
      { feature: 'Soil Testing', basic: false, standard: false, premium: true, luxury: true },
    ],
  },
];

export default function Compare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-600 font-medium tracking-widest text-xs uppercase mb-2 block">Compare Packages</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Detailed Specifications</h1>
          <p className="text-stone-600 text-lg">
            Review the exact materials, brands, and inclusions across our four construction packages.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-6 bg-stone-100 border-b border-r border-stone-200 text-stone-900 font-serif font-bold text-lg sticky left-0 z-10 w-1/4">
                    Feature Overview
                  </th>
                  <th className="p-6 bg-gold-50/50 border-b border-r border-gold-200 text-center relative w-1/4">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gold-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-b-md tracking-wider uppercase">
                      Most Popular
                    </div>
                    <div className="text-xl font-bold text-stone-900 mb-1 mt-2">Standard</div>
                    <div className="text-gold-600 font-medium">₹2,299/sq.ft</div>
                  </th>
                  <th className="p-6 bg-stone-50 border-b border-r border-stone-200 text-center w-1/4">
                    <div className="text-xl font-bold text-stone-900 mb-1">Premium</div>
                    <div className="text-gold-600 font-medium">₹2,649/sq.ft</div>
                  </th>
                  <th className="p-6 bg-stone-100 border-b border-stone-200 text-center w-1/4">
                    <div className="text-xl font-bold text-stone-900 mb-1">Luxury</div>
                    <div className="text-gold-600 font-medium">₹2,999/sq.ft</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {CATEGORIES.map((category, catIdx) => (
                  <React.Fragment key={catIdx}>
                    {/* Category Header */}
                    <tr>
                      <td colSpan={4} className="p-4 bg-stone-900 text-white font-medium uppercase tracking-wider text-sm sticky left-0 z-10">
                        {category.name}
                      </td>
                    </tr>
                    
                    {/* Category Items */}
                    {category.items.map((item, itemIdx) => (
                      <tr key={itemIdx} className="hover:bg-stone-50 transition-colors">
                        <td className="p-5 border-b border-r border-stone-200 font-medium text-stone-700 sticky left-0 bg-white z-10">
                          {item.feature}
                        </td>
                        <td className="p-5 border-b border-r border-gold-100 bg-gold-50/10 text-center text-stone-900 font-medium text-sm">
                          {typeof item.standard === 'boolean' ? (
                            item.standard ? <Check className="mx-auto text-gold-600" size={20} /> : <Minus className="mx-auto text-stone-300" size={20} />
                          ) : (
                            item.standard
                          )}
                        </td>
                        <td className="p-5 border-b border-r border-stone-200 text-center text-stone-600 text-sm">
                          {typeof item.premium === 'boolean' ? (
                            item.premium ? <Check className="mx-auto text-green-500" size={20} /> : <Minus className="mx-auto text-stone-300" size={20} />
                          ) : (
                            item.premium
                          )}
                        </td>
                        <td className="p-5 border-b border-stone-200 text-center text-stone-600 text-sm">
                          {typeof item.luxury === 'boolean' ? (
                            item.luxury ? <Check className="mx-auto text-green-500" size={20} /> : <Minus className="mx-auto text-stone-300" size={20} />
                          ) : (
                            item.luxury
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/#contact"
            className="inline-block bg-stone-900 text-white px-10 py-4 rounded-full font-medium text-sm tracking-wider uppercase hover:bg-gold-600 transition-all shadow-lg hover:shadow-xl"
          >
            Ready to Build? Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
