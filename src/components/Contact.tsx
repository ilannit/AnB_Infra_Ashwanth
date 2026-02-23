import { COMPANY_INFO } from '../constants';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = COMPANY_INFO.phone.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/91${whatsappNumber}`;

  return (
    <section id="contact" className="py-24 bg-stone-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <span className="text-gold-500 font-medium tracking-widest text-xs uppercase mb-2 block">Get in Touch</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Let's Build Something <br /> Extraordinary</h2>
        <p className="text-stone-400 text-lg mb-12 max-w-2xl mx-auto">
          Ready to start your project? Connect with us directly on WhatsApp for a quick consultation, quote, or to answer any questions you may have.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#20bd5a] transition-colors mb-20 shadow-lg shadow-[#25D366]/20"
        >
          <MessageCircle size={24} />
          Chat on WhatsApp
        </a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-2">
              <Phone className="text-gold-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-stone-400 uppercase tracking-wider mb-2">Call Us</p>
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-xl font-serif hover:text-gold-400 transition-colors">
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-2">
              <Mail className="text-gold-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-stone-400 uppercase tracking-wider mb-2">Email Us</p>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-xl font-serif hover:text-gold-400 transition-colors break-all">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-2">
              <MapPin className="text-gold-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-stone-400 uppercase tracking-wider mb-2">Visit Us</p>
              <p className="text-xl font-serif max-w-xs mx-auto">
                {COMPANY_INFO.address}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
