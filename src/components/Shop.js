import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Shop = ({ isVisible }) => {
    const products = [
        {
            title: "Lancer son business en ligne",
            description: "Document pour les débutants sur comment démarrer une activité rentable sur internet( TikTok, WhatsApp...) sans budget.",
            price: "1000 Francs",
            paypalLink: "https://payhip.com/b/plbDu",
            orangeMoneyLink: "https://wa.me/+22661645069?text=Bonjour%2C%20je%20veux%20payer%20par%20Orange%20Money%20pour%20le%20planning"
        },

        {
            title: "Ebook: L'amour, voyage au cœur des émotions",
            description: "Cet ebook est un voyage à travers les hauts et les bas des relations, les mythes et réalités de l'amour, et les clés pour vivre l'amour dans sa forme la plus authentique et épanouissante.",
            price: "500 Francs",
            paypalLink: "https://payhip.com/b/ciBa3",
            orangeMoneyLink: "https://wa.me/+22661645069?text=Bonjour%2C%20je%20veux%20payer%20par%20Orange%20Money%20pour%20l'%20ebook"
        },
        {
            title: "10 idées de créations à vendre avec peu de moyens",
            description: "Tu veux te lancer dans une petite activité rentable sans gros budget ? Voici 10 idées créatives simples et économiques pour commencer tout de suite.",
            price: "500 Francs",
            paypalLink: "https://payhip.com/b/BCIQN",
            orangeMoneyLink: "https://wa.me/+22661645069?text=Bonjour%2C%20je%20veux%20payer%20par%20Orange%20Money%20pour%20le%20planning"
        },
    ];

    return (
        <section id="boutique" className={`py-20 bg-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full mb-8">
                        <ShoppingBag className="w-8 h-8 text-pink-500" />
                    </div>
                    <h2 className="text-4xl font-bold text-pink-600 mb-4">Boutique / Téléchargements</h2>
                    <p className="text-lg text-gray-600">Des ressources précieuses pour accompagner votre réussite</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-pink-100"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-pink-600">{item.title}</h3>
                                <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full font-bold">
                                    {item.price}
                                </span>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
                            <div className="space-y-3">
                                <a href={item.paypalLink} target="_blank" rel="noopener noreferrer" className="block">
                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
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