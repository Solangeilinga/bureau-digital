import React from 'react';
import './Services.css'; // On créera ce fichier pour un style propre

function Services() {
    const services = [
        {
            title: "🎨 Création de mini-sites professionnels ",
            description: " sites simples, modernes et adaptés à vos besoins (vitrine, CV digital, page de vente…).",
            image: "1.jpg", // à remplacer par ton image plus tard
        },
        {
            title: "📱 Gestion de communauté",
            description: "Animation de comptes Instagram, TikTok ou Facebook : réponse aux commentaires, planification, modération, stratégie de contenu.",
            image: "4.jpg",
        },
        {
            title: "🎥  Conception de supports visuels",
            description: "Affiches, flyers, visuels réseaux sociaux… Des designs qui captent l’attention et parlent à votre public",
            image: "3.png",
        },
        {
            title: "🎓 Mini-formations & contenus personnalisés",
            description: "Création de tutoriels, e-books, fiches pratiques, modèles et documents téléchargeables pour vous accompagner dans vos projets.",
            image: "4.png",
        },
    ];

    return (
        <section className="section services">
            <h2>Mes Services</h2>
            <div className="service-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <img
                            src={`/assets/images/${service.image}`}
                            alt={service.title}
                            className="service-image"
                        />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
