import React from 'react';
import { MessageCircle, Mail, Facebook, Instagram } from 'lucide-react';

const Contact = ({ isVisible }) => (
    <section
        id="contact"
        className={`py-20 bg-gradient-to-br from-indigo-700 via-blue-700 to-indigo-900 text-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
    >
        <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
            {/* Titre & intro */}
            <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
                    <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Contact & Réseaux</h2>
                <p className="text-xl opacity-90">
                    Tu veux en savoir plus ? On en parle sur WhatsApp ! 📲
                </p>
            </div>

            {/* Bouton WhatsApp */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-lg">
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

            {/* Réseaux sociaux */}
            <div className="space-y-6">
                <p className="text-lg opacity-90">
                    Retrouve-nous aussi sur tous nos réseaux 👇
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
                    <a
                        href="mailto:e47071012@gmail.com"
                        className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        <Mail className="w-5 h-5" />
                        <span>Gmail</span>
                    </a>
                    <a
                        href="https://tiktok.com/@bureaudigital"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        <span>🎵</span>
                        <span>TikTok</span>
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61575307012557"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        <Facebook className="w-5 h-5" />
                        <span>Facebook</span>
                    </a>
                    <a
                        href="https://www.instagram.com/sbureaudigital?igsh=cmd5amNwamhsczE1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        <Instagram className="w-5 h-5" />
                        <span>Instagram</span>
                    </a>
                </div>
            </div>

            {/* Footer */}
            <p className="text-sm opacity-70">&copy; 2025 Bureau Digital. Tous droits réservés.</p>
        </div>
    </section>
);

export default Contact;
