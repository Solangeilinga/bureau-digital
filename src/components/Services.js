import React from 'react';
import { Star, Globe, Users, Palette, BookOpen } from 'lucide-react';

const Services = ({ isVisible }) => {
    const services = [
        {
            title: "Création de mini-sites professionnels",
            description: "Sites simples, modernes et adaptés à vos besoins (vitrine, CV digital, page de vente…).",
            icon: Globe,
            color: "from-pink-400 to-rose-400"
        },
        {
            title: "Gestion de communauté",
            description: "Animation de comptes Instagram, TikTok ou Facebook : réponse aux commentaires, planification, modération, stratégie de contenu.",
            icon: Users,
            color: "from-rose-400 to-pink-500"
        },
        {
            title: "Conception de supports visuels",
            description: "Affiches, flyers, visuels réseaux sociaux… Des designs qui captent l'attention et parlent à votre public.",
            icon: Palette,
            color: "from-pink-500 to-purple-500"
        },
        {
            title: "Mini-formations & contenus personnalisés",
            description: "Création de tutoriels, e-books, fiches pratiques, modèles et documents téléchargeables pour vous accompagner dans vos projets.",
            icon: BookOpen,
            color: "from-purple-400 to-pink-400"
        }
    ];

    return (
        <section id="services" className={`py-20 bg-gradient-to-br from-pink-50 to-purple-50 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full mb-8">
                        <Star className="w-8 h-8 text-pink-500" />
                    </div>
                    <h2 className="text-4xl font-bold text-pink-600 mb-4">Mes Services</h2>
                    <p className="text-lg text-gray-600">Des solutions créatives pour tous vos besoins digitaux</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-pink-100 hover:border-pink-300"
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-pink-600 mb-4 group-hover:text-pink-700 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;