import React from 'react';
import Button from '../ui/Button';
import './HeroSection.css';

const HeroSection = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="inicio" className="hero">
            <div className="hero__overlay"></div>
            <div className="container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        Excelencia en Servicio
                        <br />
                        <span className="text-red">Automotriz</span>
                    </h1>
                    <p className="hero__subtitle">
                        Más de 25 años brindando soluciones profesionales en mantenimiento
                        y reparación de vehículos
                    </p>
                    <div className="hero__actions">
                        <Button variant="primary" size="large" onClick={scrollToContact}>
                            Solicitar Servicio
                        </Button>
                        <Button
                            variant="outline"
                            size="large"
                            onClick={() =>
                                document
                                    .getElementById('servicios')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Ver Servicios
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
