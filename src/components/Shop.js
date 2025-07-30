import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Shop = ({ isVisible }) => {
    const products = [
        {
            title: "Guide Marketing Digital",
            description: "Découvrez des stratégies simples pour lancer votre présence en ligne grâce au SEO, aux réseaux sociaux et à la publicité digitale.",
            price: "2000 Francs",
            paypalLink: "https://payhip.com/b/xeSWr",
            orangeMoneyLink: "https://wa.me/+22661645069?text=Bonjour%2C%20je%20veux%20payer%20par%20Orange%20Money%20pour%20le%20planning",
            image: "/assets/images/marketing.png"
        },
        {
            title: "LinkedIn pour Étudiants : 100% Pro",
            description: "Apprenez à optimiser votre profil, réseauter même sans expérience et publier des posts engageants pour booster votre visibilité professionnelle.",
            price: "1200 Francs",
            paypalLink: "https://payhip.com/b/sgdBr",
            orangeMoneyLink: "https://wa.me/+22661645069?text=Bonjour%2C%20je%20veux%20payer%20par%20Orange%20Money%20pour%20le%20planning",
            image: "/assets/images/linkedin.png"
        },
        {
            title: "Créer son Personal Branding en Ligne",
            description: "Construisez et valorisez votre image professionnelle sur Internet pour vous démarquer et attirer des opportunités.",
            price: "2000 Francs",
            paypalLink: "https://payhip.com/b/JQ6Vm",
            orangeMoneyLink: "https://wa.me/+22661645069?text=Bonjour%2C%20je%20veux%20payer%20par%20Orange%20Money%20pour%20le%20planning",
            image: "/assets/images/personal-branding.png"
        },
        {
            title: "Gérer son temps comme un CEO",
            description: "Maîtrisez votre organisation avec différentes méthodes pour planifier efficacement.",
            price: "1200 Francs",
            paypalLink: "https://payhip.com/b/BU5Yd",
            orangeMoneyLink: "https://wa.me/+22661645069?text=Bonjour%2C%20je%20veux%20payer%20par%20Orange%20Money%20pour%20l'%20ebook",
            image: "/assets/images/ceo.png"
        }
    ];

    return (
        <section
            id="boutique"
            className={`py-20 bg-gradient-to-br from-slate-50 to-slate-100 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
        >
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full mb-8 shadow-sm">
                        <ShoppingBag className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h2 className="text-4xl font-bold text-indigo-700 mb-4">
                        Boutique / Téléchargements
                    </h2>
                    <p className="text-lg text-gray-600">
                        Des ressources précieuses pour accompagner votre réussite
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-indigo-100"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover rounded-2xl mb-4"
                            />
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-indigo-600">{item.title}</h3>
                                <span className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-full font-bold">
                                    {item.price}
                                </span>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
                            <div className="space-y-3">
                                <a href={item.paypalLink} target="_blank" rel="noopener noreferrer" className="block">
                                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                                        💳 Payer avec PayPal
                                    </button>
                                </a>
                                <a href={item.orangeMoneyLink} target="_blank" rel="noopener noreferrer" className="block">
                                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                                        📱 Orange Money (WhatsApp)
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;
