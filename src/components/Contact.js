import React from 'react';

function Contact() {
    return (
        <section className="section contact">
            <h2>Contact & Réseaux</h2>
            <p>Tu as une idée ou un projet ? Parlons-en sur WhatsApp !</p>
            <a href="https://wa.me/+22661645069" target="_blank" rel="noopener noreferrer">
                <button>Me contacter</button>
            </a>
            <div className="socials">
                <a href="https://instagram.com/tonprofil">Gmail</a> |
                <a href="https://tiktok.com/@resona10">TikTok</a>
            </div>
        </section>
    );
}

export default Contact;
