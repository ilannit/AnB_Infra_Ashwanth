/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Compare from './pages/Compare';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-gold-200 selection:text-stone-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
