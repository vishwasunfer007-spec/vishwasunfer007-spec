import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

export default function Skills() {
    const skills = [
        { name: "Leadership & Teamwork", desc: "University-level hockey player with strong coordination abilities." },
        { name: "Discipline & Work Ethic", desc: "Commitment, consistency, and perseverance from sports background." },
        { name: "Time Management", desc: "Effectively balances academics and sports commitments." },
        { name: "Problem Solving", desc: "Ability to analyze situations and take effective decisions." },
        { name: "Adaptability", desc: "Quick learner with the ability to adjust to new environments." },
        { name: "Communication Skills", desc: "Clear and effective interpersonal communication." }
    ];

    const strengths = [
        "Competitive mindset",
        "Ability to perform under pressure",
        "Positive attitude and willingness to learn",
        "Strong sense of responsibility"
    ];

    return (
        <section id="skills" className="py-20 relative bg-gray-50">
            <div className="container">
                <h2 className="section-title">Skills & Strengths</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-blue-800 flex items-center gap-2">
                            <Star className="fill-orange-400 text-orange-400" /> Key Skills
                        </h3>
                        <div className="space-y-4">
                            {skills.map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors"
                                >
                                    <h4 className="font-bold text-gray-800 mb-1">{skill.name}</h4>
                                    <p className="text-sm text-gray-500">{skill.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-blue-800 flex items-center gap-2">
                            <Star className="fill-cyan-400 text-cyan-400" /> Additional Strengths
                        </h3>
                        <div className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                            <div className="grid gap-6 relative z-10">
                                {strengths.map((str, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ x: 20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className="text-lg font-medium">{str}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
