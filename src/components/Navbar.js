import React from 'react';
import { Sparkles } from 'lucide-react';

const Navbar = () => (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 backdrop-blur-md bg-opacity-95 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
                {/* LOGO */}
                <div className="flex items-center space-x-3">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-pink-300 rounded-full blur-md opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                        <img
                            src="logo.jpg"
                            alt="Logo"
                            className="relative w-10 h-10 rounded-full border-2 border-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                        />
                        <Sparkles className="absolute -top-2 -right-2 text-yellow-300 w-5 h-5 animate-ping" />
                    </div>
                    <span className="text-white font-extrabold text-xl bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent tracking-wide">
                        Bureau Digital
                    </span>
                </div>

                {/* MENU */}
                <ul className="hidden md:flex space-x-8">
                    {['Accueil', 'À propos', 'Services', 'Boutique', 'Contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item === 'Accueil' ? 'header' : item.toLowerCase().replace('à propos', 'about')}`}
                                className="text-white hover:text-pink-100 transition-all duration-300 hover:scale-110 font-medium relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-200 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
