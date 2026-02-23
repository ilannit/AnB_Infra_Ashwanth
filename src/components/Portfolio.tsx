import { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { MapPin, Maximize2 } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Residential', 'Apartment', 'Infrastructure'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-gold-600 font-medium tracking-widest text-xs uppercase mb-2 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">Featured Projects</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-stone-900 text-white' 
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={project.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-gold-400 text-xs font-medium uppercase tracking-wider mb-2">{project.category}</span>
                <h3 className="text-white text-2xl font-serif font-bold mb-2">{project.title}</h3>
                <p className="text-stone-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center gap-4 text-white/80 text-xs font-medium">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize2 size={14} />
                    {project.size}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
