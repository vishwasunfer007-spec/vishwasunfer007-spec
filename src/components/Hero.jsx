import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, FileText, X } from 'lucide-react';

export default function Hero() {
    const [showResume, setShowResume] = useState(false);

    return (
        <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50"></div>
            <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-cyan-200/30 rounded-full blur-3xl"></div>

            <div className="container grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold mb-4 text-sm tracking-wider">
                        BBA STUDENT & ATHLETE
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            VISHWA S
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-lg">
                        Motivated Business Administration student and University Hockey Player seeking to leverage leadership skills and sports discipline in the professional world.
                    </p>

                    <div className="flex flex-col gap-4 mb-8">
                        <div className="flex items-center gap-3 text-gray-700">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <MapPin size={20} />
                            </div>
                            <span>2/1.59/3, M.P. Nagar, T. Vadipatti, Madurai – 625 218</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <Phone size={20} />
                            </div>
                            <span>85319-21017</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <Mail size={20} />
                            </div>
                            <span>vishwasunfer007@gmail.com</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary"
                        >
                            Contact Me
                        </motion.a>

                        <motion.button
                            onClick={() => setShowResume(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors"
                        >
                            <FileText size={20} /> Resume
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Profile Image with Hockey Theme Frame */}
                    <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl transform rotate-6 opacity-30 blur-lg"></div>
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/40 shadow-2xl overflow-hidden transform -rotate-3 transition-transform hover:rotate-0 duration-500">
                            <img
                                src="/assets/profile.jpg"
                                alt="Vishwa S - Hockey Player"
                                className="w-full h-full object-cover object-top"
                            />

                            {/* Overlay Badge */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900/90 to-transparent pt-20">
                                <div className="text-white">
                                    <p className="text-xs font-bold tracking-widest text-cyan-400 mb-1">TEAM PLAYER</p>
                                    <p className="text-2xl font-black italic">#07 VISHWA</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse blur-xl"></div>
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-400 rounded-full opacity-20 blur-xl"></div>
                    </div>
                </motion.div>
            </div>

            {/* Resume Modal */}
            <AnimatePresence>
                {showResume && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setShowResume(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full h-[90vh] flex flex-col relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                                <h3 className="text-gray-900 font-bold text-xl flex items-center gap-2">
                                    <FileText className="text-blue-600" /> Resume
                                </h3>
                                <button onClick={() => setShowResume(false)} className="text-gray-500 hover:text-red-500 transition-colors bg-white rounded-full p-1 hover:bg-red-50">
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="p-4 overflow-auto bg-gray-100 flex items-start justify-center h-full">
                                <img src="/assets/resume.png" alt="Resume" className="max-w-full shadow-lg rounded-lg" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
