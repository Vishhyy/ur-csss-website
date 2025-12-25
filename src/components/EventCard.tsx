'use client';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EventCard({ date, title, time, description, linkTo }: any) {
    const Content = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6 bg-white p-6 border border-gray-200 hover:shadow-xl hover:border-[#fdb927] transition-all rounded-lg h-full group"
        >
            <div className="flex-shrink-0 text-center bg-gray-50 border border-gray-300 rounded-md shadow-sm w-24 py-3">
                <p className="text-lg font-bold text-[#00643f]">{date.month}</p>
                <p className="text-4xl font-black text-gray-800">{date.day}</p>
            </div>
            <div className="flex-grow">
                <h3 className="text-xl font-bold text-[#00643f] group-hover:underline">{title}</h3>
                <p className="mt-1 text-gray-700">{description}</p>
                <p className="mt-2 font-semibold text-sm text-gray-600">{time}</p>
            </div>
            <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    );

    return linkTo ? <Link href={linkTo}>{Content}</Link> : Content;
}