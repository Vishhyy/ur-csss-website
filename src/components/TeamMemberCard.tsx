'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export default function TeamMemberCard({ imageUrl, name, title, socials }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center group"
        >
            <div className="relative inline-block">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <Image src={imageUrl} alt={name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        {socials?.linkedin && (
                            <a href={socials.linkedin} target="_blank" className="text-white hover:text-[#fdb927]"><Linkedin size={32} /></a>
                        )}
                    </div>
                </div>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-[#00643f]">{name}</h3>
            <p className="text-lg text-gray-700">{title}</p>
        </motion.div>
    );
}