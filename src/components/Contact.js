import React from 'react';
import { MessageCircle, Mail, Facebook, Instagram } from 'lucide-react';

const Contact = ({ isVisible }) => (
    <section
        id="contact"
        className={`py-20 bg-gradient-to-br from-pink-600 via-rose-500 to-purple-600 text-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
    >
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-8">
                <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Contact & Réseaux</h2>
            <p className="text-xl mb-8 opacity-90">
                Tu veux en savoir plus ? On en parle sur WhatsApp ! 📲
            </p>

            {/* WhatsApp */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 mb-8">
                <a
                    href="https://wa.me/+22661645069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                >
                    <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        <MessageCircle className="inline w-5 h-5 mr-2" />
                        WhatsApp
                    </button>
                </a>
            </div>

            {/* Autres réseaux */}
            <div className="flex justify-center flex-wrap gap-4">
                <a
                    href="mailto:e47071012@gmail.com"
                    className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                    <Mail className="w-5 h-5" />
                    <span>Gmail</span>
                </a>

                <a
                    href="https://tiktok.com/@resona10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                    <span>🎵</span>
                    <span>TikTok</span>
                </a>

                <a
                    href="https://facebook.com/tonprofil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                </a>

                <a
                    href="https://instagram.com/tonprofil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                </a>
            </div>
        </div>
    </section>
);

export default Contact;
