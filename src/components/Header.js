import React from 'react';
import { Palette, Sparkles } from 'lucide-react';

const Header = ({ isVisible }) => (
    <section id="header" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20"></div>
        <div className={`text-center z-10 px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mb-8 animate-pulse">
                <Palette className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in">
                Création digitale
            </h1>
            <h2 className="text-3xl md:text-4xl font-light text-pink-700 mb-4">
                & gestion de communauté
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Avec une touche de magie locale ✨
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="mr-2">Découvrir mes services</span>
                <Sparkles className="inline w-5 h-5" />
            </button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
            </div>
        </div>
    </section>
);

export default Header;