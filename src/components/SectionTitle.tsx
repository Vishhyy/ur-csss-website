'use client';

import { motion } from "framer-motion";

export default function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#00643f]">{children}</h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-40 h-1.5 bg-[#fdb927] mt-3 mx-auto origin-center"
            />
        </div>
    );
}