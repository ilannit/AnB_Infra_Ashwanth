import { COMPANY_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white/60 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-white font-serif text-xl font-bold tracking-tight mb-1">{COMPANY_INFO.name}</h4>
            <p className="text-xs uppercase tracking-widest text-gold-500">{COMPANY_INFO.tagline}</p>
          </div>
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
