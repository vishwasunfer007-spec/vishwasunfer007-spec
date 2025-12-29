import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-900 text-white py-12 border-t-4 border-cyan-500">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Let's Connect</h3>
                        <p className="text-gray-400 mb-8 max-w-sm">
                            I am actively seeking entry-level opportunities in business administration and management.
                        </p>
                        <div className="space-y-4">
                            <a href="mailto:vishwasunfer007@gmail.com" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                                <Mail size={20} /> vishwasunfer007@gmail.com
                            </a>
                            <a href="tel:8531921017" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                                <Phone size={20} /> 85319-21017
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin size={20} /> Madurai, Tamil Nadu
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                        <h4 className="font-bold text-xl mb-4">Declaration</h4>
                        <p className="text-gray-300 italic mb-4">
                            "I hereby declare that the information furnished above is true and correct to the best of my knowledge and belief."
                        </p>
                        <div className="flex justify-between items-end mt-8">
                            <span className="text-sm text-gray-500">Place: Madurai</span>
                            <span className="font-heading font-bold text-lg">VISHWA S</span>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-600 text-sm pt-8 border-t border-gray-800">
                    &copy; {new Date().getFullYear()} Vishwa S. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
