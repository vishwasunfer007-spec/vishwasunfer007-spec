import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';

export default function Education() {
    const educationData = [
        {
            degree: "Bachelor of Business Administration (BBA)",
            institution: "The Gandhigram Rural Institute (Deemed to be University), Tamil Nadu",
            year: "2025 (Pursuing)",
            details: "Aggregate: 63.12% (last 5 semesters)",
            icon: <GraduationCap size={24} />
        },
        {
            degree: "Higher Secondary Course (PCMB)",
            institution: "Government Boys Higher Secondary School, T. Vadipatti",
            year: "March 2022",
            details: "Physics, Chemistry, Mathematics, Biology | Percentage: 47.6%",
            icon: <BookOpen size={24} />
        },
        {
            degree: "SSLC (10th Standard)",
            institution: "Government Boys Higher Secondary School, T. Vadipatti",
            year: "February 2020",
            details: "Percentage: 46.6%",
            icon: <School size={24} />
        }
    ];

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            {/* Decorative Faceoff Circle - Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[20px] border-red-500/5 rounded-full pointer-events-none -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-red-500/10 rounded-full pointer-events-none -z-10"></div>
            <div className="absolute top-0 right-0 w-full h-[2px] bg-blue-200/20 pointer-events-none"></div>

            <div className="container">
                <h2 className="section-title">Education & Objective</h2>

                <div className="mb-16 glass-card border-l-4 border-l-blue-600">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                        Career Objective
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Motivated Bachelor of Business Administration (BBA) student seeking an entry-level opportunity to apply my academic knowledge, leadership skills, and sports discipline in a professional environment. Eager to contribute to organizational growth while continuously learning and developing new skills.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card flex flex-col h-full bg-white/50"
                        >
                            <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg">
                                {edu.icon}
                            </div>
                            <span className="text-sm font-semibold text-blue-600 mb-2 block">{edu.year}</span>
                            <h3 className="text-xl font-bold mb-3">{edu.degree}</h3>
                            <p className="text-gray-600 font-medium mb-2">{edu.institution}</p>
                            <p className="text-gray-500 text-sm mt-auto border-t pt-4 border-gray-200">
                                {edu.details}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
