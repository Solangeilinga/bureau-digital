import React from 'react';
import { Heart, Palette, BookOpen, Users } from 'lucide-react';

const About = ({ isVisible }) => (
    <section id="about" className={`py-20 bg-white relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full mb-8">
                <Heart className="w-8 h-8 text-pink-500" />
            </div>
            <h2 className="text-4xl font-bold text-pink-600 mb-8">À propos</h2>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Bienvenue chez <span className="font-semibold text-pink-600">Bureau Digital</span>, un espace créatif dédié à booster ta présence digitale et visuelle !
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Passionnés par la communication digitale, nous proposons :
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: Users, text: "Des services personnalisés en community management" },
                        { icon: Palette, text: "Des visuels qui captent l'œil (flyers, affiches, visuels réseaux…)" },
                        { icon: BookOpen, text: "Des contenus utiles : tutoriels, e-books, fiches pratiques" }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <item.icon className="w-8 h-8 text-pink-500 mx-auto mb-4" />
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>
                <p className="text-lg text-pink-600 font-semibold mt-8">
                    Notre mission ? T'accompagner dans ton projet — que tu sois entrepreneur, étudiant ou artiste — avec des outils simples, beaux et efficaces. ✨
                </p>
            </div>
        </div>
    </section>
);

export default About;