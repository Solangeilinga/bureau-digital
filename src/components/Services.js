import React from 'react';

const Services = ({ isVisible }) => {
    const services = [
        {
            title: "Création de mini-sites professionnels",
            description: "Sites simples, modernes et adaptés à vos besoins (vitrine, CV digital, page de vente…).",
            image: "/assets/images/minisite.png"
        },
        {
            title: "Gestion de communauté",
            description: "Animation de comptes Instagram, TikTok ou Facebook : réponse aux commentaires, planification, modération, stratégie de contenu.",
            image: "/assets/images/community.png"
        },
        {
            title: "Conception de supports visuels",
            description: "Affiches, flyers, visuels réseaux sociaux… Des designs qui captent l'attention et parlent à votre public.",
            image: "/assets/images/design.png"
        },
        {
            title: "Des e-books & contenus personnalisés",
            description: "Création de tutoriels, e-books, fiches pratiques, modèles et documents téléchargeables pour vous accompagner dans vos projets.",
            image: "/assets/images/ebook.png"
        }
    ];

    return (
        <section id="services" className={`py-20 bg-gradient-to-br from-pink-50 to-purple-50 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-pink-600 mb-4">Nos Services</h2>
                    <p className="text-lg text-gray-600">Des solutions créatives pour tous vos besoins digitaux</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-pink-100 hover:border-pink-300"
                        >
                            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-2xl mb-6" />
                            <h3 className="text-xl font-bold text-pink-600 mb-4 group-hover:text-pink-700 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
