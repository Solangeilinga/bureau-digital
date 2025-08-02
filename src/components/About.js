import React from 'react';
import { Heart, Palette, Globe, Users } from 'lucide-react';

const About = ({ isVisible }) => (
    <section
        id="about"
        className={`py-20 bg-white relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
    >
        <div className="max-w-4xl mx-auto px-4 text-center">
            {/* Icône principale */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full mb-8 shadow-sm">
                <Heart className="w-8 h-8 text-indigo-600" />
            </div>

            {/* Titre */}
            <h2 className="text-4xl font-bold text-indigo-700 mb-8">À propos</h2>

            {/* Contenu */}
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-3xl p-8 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Bienvenue chez <span className="font-semibold text-indigo-600">Bureau Digital</span>, un espace créatif dédié à booster ta présence digitale et visuelle !
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Passionnés par la communication digitale, nous proposons :
                </p>

                {/* Cartes de services */}
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: Users, text: 'Des services personnalisés en community management' },
                        { icon: Palette, text: 'Stratégie & Planification Réseaux Sociaux' },
                        { icon: Globe, text: 'La création de sites web modernes, adaptés à vos besoins' }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            <item.icon className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <p className="text-lg text-indigo-600 font-semibold mt-8">
                    Notre mission ? T'accompagner dans ton projet — que tu sois entrepreneur, étudiant ou artiste — avec des outils simples, beaux et efficaces. ✨
                </p>
            </div>
        </div>
    </section>
);

export default About;
