import { Building2, Ruler, Hammer, HardHat, Home, Layers, CheckCircle2 } from 'lucide-react';

export const COMPANY_INFO = {
  name: "AnB INFRA",
  tagline: "Above & Beyond",
  owner: "SP Ashwanth",
  qualification: "B.Tech - CIVIL",
  phone: "8056298295",
  email: "aboveandbeyondinfra@gmail.com",
  address: "# 7/621, Mugapair West, Chennai - 600 037",
  experience: "9+",
};

export const SERVICES = [
  {
    title: "Planning & Design",
    description: "Comprehensive architectural planning and structural design services tailored to your vision.",
    icon: Ruler,
  },
  {
    title: "Construction",
    description: "End-to-end execution of residential projects, from individual houses to G+2 apartments.",
    icon: Hammer,
  },
  {
    title: "Piling & Foundation",
    description: "Expertise in cast-in-situ bored piles, auger piling, and robust foundation execution.",
    icon: Layers,
  },
  {
    title: "Structural Consultation",
    description: "Professional structural analysis and consultation to ensure safety and durability.",
    icon: Building2,
  },
  {
    title: "Renovation & Rehabilitation",
    description: "Transforming existing structures with modern upgrades and structural strengthening.",
    icon: Home,
  },
  {
    title: "Project Management",
    description: "Dedicated project management ensuring delivery within quality, time, and cost parameters.",
    icon: HardHat,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Kodungaiyur, Chennai",
    size: "1,500 sq.ft",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    description: "A contemporary individual house designed for modern living with premium finishes."
  },
  {
    id: 2,
    title: "G+2 Apartment Complex",
    location: "Velachery, Chennai",
    size: "4,264 sq.ft",
    category: "Apartment",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    description: "Multi-story residential complex featuring spacious units and robust structural design."
  },
  {
    id: 3,
    title: "Modern Residence",
    location: "Avadi, Chennai",
    size: "3,000 sq.ft",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    description: "Spacious family home with custom architectural details and efficient space planning."
  },
  {
    id: 4,
    title: "Compact Urban Home",
    location: "Kolathur, Chennai",
    size: "1,000 sq.ft",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    description: "Efficiently designed individual house maximizing space in an urban setting."
  },
  {
    id: 5,
    title: "Foundation Piling Project",
    location: "Guindy, Chennai",
    size: "200 Piles",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    description: "Large-scale piling foundation work ensuring structural stability for commercial development."
  },
];

export const TESTIMONIALS = [
  {
    text: "SP Ashwanth delivered our dream home with exceptional quality and attention to detail. The project was completed on time and within budget.",
    author: "Client",
    location: "Chennai"
  },
  {
    text: "Professional approach to structural challenges. The piling work was executed flawlessly.",
    author: "Project Partner",
    location: "Guindy"
  }
];
