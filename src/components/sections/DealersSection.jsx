import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import Card from '../ui/Card';
import './DealersSection.css';

const DealersSection = () => {
    const dealers = [
        {
            id: 1,
            name: 'Taller Rondinara - Centro',
            address: 'Av. Corrientes 1234, CABA',
            phone: '+54 11 1234-5678',
            email: 'centro@tallerrondinara.com',
            hours: 'Lun-Vie: 8:00-18:00, Sáb: 9:00-13:00',
        },
        {
            id: 2,
            name: 'Taller Rondinara - Norte',
            address: 'Av. del Libertador 5678, Vicente López',
            phone: '+54 11 2345-6789',
            email: 'norte@tallerrondinara.com',
            hours: 'Lun-Vie: 8:00-18:00, Sáb: 9:00-13:00',
        },
        {
            id: 3,
            name: 'Taller Rondinara - Sur',
            address: 'Av. Hipólito Yrigoyen 9012, Avellaneda',
            phone: '+54 11 3456-7890',
            email: 'sur@tallerrondinara.com',
            hours: 'Lun-Vie: 8:00-18:00, Sáb: 9:00-13:00',
        },
    ];

    return (
        <SectionContainer id="concesionarios" background="white">
            <div className="dealers">
                <div className="dealers__header">
                    <h2 className="dealers__title">Nuestros Concesionarios</h2>
                    <p className="dealers__subtitle">
                        Encuentra la sucursal más cercana a ti
                    </p>
                </div>

                <div className="dealers__grid">
                    {dealers.map(dealer => (
                        <Card key={dealer.id} className="dealer-card">
                            <div className="dealer-card__icon">📍</div>
                            <h3 className="dealer-card__name">{dealer.name}</h3>

                            <div className="dealer-card__info">
                                <div className="dealer-card__item">
                                    <span className="dealer-card__label">Dirección:</span>
                                    <span className="dealer-card__value">{dealer.address}</span>
                                </div>

                                <div className="dealer-card__item">
                                    <span className="dealer-card__label">Teléfono:</span>
                                    <a
                                        href={`tel:${dealer.phone}`}
                                        className="dealer-card__link"
                                    >
                                        {dealer.phone}
                                    </a>
                                </div>

                                <div className="dealer-card__item">
                                    <span className="dealer-card__label">Email:</span>
                                    <a
                                        href={`mailto:${dealer.email}`}
                                        className="dealer-card__link"
                                    >
                                        {dealer.email}
                                    </a>
                                </div>

                                <div className="dealer-card__item">
                                    <span className="dealer-card__label">Horario:</span>
                                    <span className="dealer-card__value">{dealer.hours}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default DealersSection;
