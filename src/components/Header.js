import React from 'react';
import { Palette, Sparkles } from 'lucide-react';

const Header = ({ isVisible }) => (
    <section
        id="header"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"
    >
        {/* Overlay subtil */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/10 to-indigo-200/10"></div>

        {/* Contenu central */}
        <div
            className={`text-center z-10 px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
        >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-600 rounded-full mb-8 shadow-lg">
                <Palette className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-indigo-700 mb-6">
                Création digitale
            </h1>
            <h2 className="text-3xl md:text-4xl font-light text-indigo-500 mb-4">
                & gestion de communauté
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Avec une touche de magie locale ✨
            </p>
            <button className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="mr-2">Scrolles jusqu'en bas👇</span>
                <Sparkles className="inline w-5 h-5" />
            </button>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-indigo-400 rounded-full mt-2 animate-pulse"></div>
            </div>
        </div>
    </section>
);

export default Header;
