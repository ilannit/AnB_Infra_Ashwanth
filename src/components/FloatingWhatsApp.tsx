import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../constants';

export default function FloatingWhatsApp() {
  const whatsappNumber = COMPANY_INFO.phone.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/91${whatsappNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={28} fill="white" className="text-white" />
    </motion.a>
  );
}
