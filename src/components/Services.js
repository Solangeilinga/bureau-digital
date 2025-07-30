import React from 'react';

const Services = ({ isVisible }) => {
    const services = [
        {
            title: "Création de sites web professionnels",
            description: "Sites modernes, responsives et adaptés à vos besoins (vitrine, CV digital).",
            image: "/assets/images/minisite.png"
        },
        {
            title: "Gestion et animation de communautés en ligne",
            description: "Modération, fidélisation sur les réseaux sociaux, planification, modération, stratégie de contenu.",
            image: "/assets/images/community.png"
        },
        {
            title: "Branding et communication digitale",
            description: "Développement de l’image de marque, et planification éditoriale.",
            image: "/assets/images/design.png"
        },
        {
            title: "Des e-books & contenus personnalisés",
            description: "Création de tutoriels, e-books, fiches pratiques, modèles et documents téléchargeables pour vous accompagner dans vos projets.",
            image: "/assets/images/ebook.png"
        }
    ];

    return (
        <section
            id="services"
            className={`py-20 bg-gradient-to-br from-slate-50 to-slate-100 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-indigo-700 mb-4">Nos Services</h2>
                    <p className="text-lg text-gray-600">Des solutions créatives pour tous vos besoins digitaux</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-indigo-100 hover:border-indigo-300"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover rounded-2xl mb-6"
                            />
                            <h3 className="text-xl font-bold text-indigo-600 mb-4 group-hover:text-indigo-700 transition-colors">
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
