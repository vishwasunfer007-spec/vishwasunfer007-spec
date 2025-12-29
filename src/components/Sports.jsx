import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, Calendar, MapPin, Eye, X } from 'lucide-react';

export default function Sports() {
    const [showCert, setShowCert] = useState(false);

    return (
        <section id="sports" className="py-20 bg-blue-900 text-white relative overflow-hidden">
            {/* Ice Texture Overlay */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }}></div>

            <div className="container relative z-10">
                <h2 className="section-title text-white after:bg-cyan-400">Sports Achievements</h2>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 text-center"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-6 shadow-glow">
                            <Trophy size={40} className="text-white" />
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold mb-4">Inter-University Hockey Player</h3>
                        <p className="text-xl text-cyan-200 mb-8">Represented The Gandhigram Rural Institute (Deemed to be University)</p>

                        <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <Medal className="text-yellow-400 shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-lg">South Zone Tournament</h4>
                                    <p className="text-sm text-gray-300">Meritorious Sports Person eligible for Class III / IV Central Govt Employment</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <MapPin className="text-red-400 shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-lg">University of Madras, Chennai</h4>
                                    <p className="text-sm text-gray-300">Tournament Venue</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <Calendar className="text-blue-400 shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-lg">Jan 03 - 07, 2025</h4>
                                    <p className="text-sm text-gray-300">Academic Year: 2024–2025</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="font-bold text-cyan-400 text-xl border-2 border-cyan-400 rounded-full w-6 h-6 flex items-center justify-center text-xs">III</div>
                                <div>
                                    <h4 className="font-semibold text-lg">Form-III Certified</h4>
                                    <p className="text-sm text-gray-300">Issued by Ministry of Education, Govt. of India</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowCert(true)}
                            className="btn-primary bg-cyan-500 hover:bg-cyan-600 border-none text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 mx-auto"
                        >
                            <Eye size={20} /> View Certificate
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {showCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setShowCert(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="p-4 border-b flex justify-between items-center">
                                <h3 className="text-gray-900 font-bold text-xl">Form-III Certificate</h3>
                                <button onClick={() => setShowCert(false)} className="text-gray-500 hover:text-red-500">
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="p-2 overflow-auto bg-gray-100 flex items-center justify-center h-full">
                                <img src="/assets/certificate.jpeg" alt="Certificate" className="max-w-full h-auto shadow-md" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

