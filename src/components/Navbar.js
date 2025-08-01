import React, { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { label: "Accueil", href: "#header" },
        { label: "À propos", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Boutique", href: "#boutique" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <nav className="fixed top-0 w-full bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800 backdrop-blur-md z-50 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-indigo-400 rounded-full blur-md opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                        <img
                            src="logo.png"
                            alt="Logo"
                            className="relative w-10 h-10 rounded-full border-2 border-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                        />
                        <Sparkles className="absolute -top-2 -right-2 text-yellow-400 w-5 h-5 animate-ping" />
                    </div>
                    <span className="text-white font-extrabold text-xl tracking-wide">
                        Bureau Digital
                    </span>
                </div>

                {/* Menu Desktop */}
                <ul className="hidden md:flex space-x-8">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="text-white hover:text-indigo-200 transition-all duration-300 hover:scale-110 font-medium relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-300 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Mobile */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-indigo-800 bg-opacity-95 backdrop-blur-md px-6 py-4 space-y-4 text-center">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-white text-lg font-medium hover:text-indigo-200 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
