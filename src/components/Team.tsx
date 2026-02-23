import { motion } from 'motion/react';

const teamMembers = [
    {
        name: "Syed Affan Ahmed",
        role: "Lead Architect",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
        bio: "Visionary designer with 15+ years of experience in crafting modern, sustainable residential spaces.",
    },
    {
        name: "SP Ashwanth",
        role: "Founder & Business Owner",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bio: "Driving the strategic vision and ensuring unwavering commitment to absolute quality and client satisfaction.",
    },
    {
        name: "Kishen Patrick",
        role: "Lead Structural Consultant",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
        bio: "Expert in resilient structural design, ensuring every project stands the test of time and element.",
    }
];

export default function Team() {
    return (
        <section id="team" className="py-24 bg-stone-100 flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-stone-900 w-full relative z-10">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold-500 font-sans font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                            The Minds Behind the Masterpieces
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                            Meet Our Leadership
                        </h2>
                        <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative bg-white p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-100 flex flex-col h-full"
                        >
                            <div className="text-center flex-grow flex flex-col">
                                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2 group-hover:text-gold-600 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-gold-600 font-medium uppercase tracking-wider text-sm mb-6">
                                    {member.role}
                                </p>
                                <p className="text-stone-600 font-light leading-relaxed mb-8 flex-grow">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
