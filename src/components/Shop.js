import React from 'react';
import './Shop.css';

function Shop() {
    const products = [
        {
            title: "Ebook,L'amour, voyage au coeur des émotions ",
            description: "Cet ebook est un voyage à travers les hauts et les bas des relations, les mythes et réalités de l’amour, et les clés pour vivre l’amour dans sa forme la plus authentique et épanouissante.",
            paypalLink: "https://payhip.com/b/ciBa3",
            orangeMoneyLink: "https://wa.me/+22661645069?text=Bonjour%2C%20je%20veux%20payer%20par%20Orange%20Money%20pour%20l'%20ebook",
        },
        {
            title: "Planning de contenu (30 jours)",
            description: "Télécharge un template PDF prêt à l’emploi pour tes réseaux sociaux.",
            paypalLink: "https://payhip.com/b/ciBa3",
            orangeMoneyLink: "https://wa.me/+22661645069?text=Bonjour%2C%20je%20veux%20payer%20par%20Orange%20Money%20pour%20le%20planning",
        },
    ];

    return (
        <section className="section shop" id="shop">
            <h2>Boutique / Téléchargements</h2>
            <div className="shop-grid">
                {products.map((item, index) => (
                    <div className="product-card" key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="shop-buttons">
                            <a href={item.paypalLink} target="_blank" rel="noopener noreferrer">
                                <button className="btn-paypal">💳 Payer avec PayPal</button>
                            </a>
                            <a href={item.orangeMoneyLink} target="_blank" rel="noopener noreferrer">
                                <button className="btn-whatsapp">📱 Orange Money (WhatsApp)</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Shop;
