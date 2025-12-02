import React from 'react';
import whatsappIcon from '../../assets/whatsapp-icon.png';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
    // Replace with the actual WhatsApp number (country code + number, no spaces or symbols)
    const phoneNumber = '5492236218244'; // Example: Argentina +54 9 11 1234-5678
    const message = 'Hola! Me gustaría solicitar información sobre sus servicios.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Contactar por WhatsApp"
        >
            <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="whatsapp-icon"
            />
        </a>
    );
};

export default WhatsAppFloat;
