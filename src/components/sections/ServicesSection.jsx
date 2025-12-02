import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import Card from '../ui/Card';
import './ServicesSection.css';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: 'Mantenimiento Preventivo',
            description:
                'Servicios programados para mantener tu vehículo en óptimas condiciones y prevenir fallas futuras.',
            icon: '🔧',
        },
        {
            id: 2,
            title: 'Reparación de Motor',
            description:
                'Diagnóstico y reparación especializada de motores con tecnología de última generación.',
            icon: '⚙️',
        },
        {
            id: 3,
            title: 'Sistema de Frenos',
            description:
                'Revisión, mantenimiento y reparación completa del sistema de frenos para tu seguridad.',
            icon: '🛑',
        },
        {
            id: 4,
            title: 'Suspensión y Dirección',
            description:
                'Ajuste y reparación de sistemas de suspensión y dirección para un manejo suave y seguro.',
            icon: '🚗',
        },
        {
            id: 5,
            title: 'Sistema Eléctrico',
            description:
                'Diagnóstico y reparación de sistemas eléctricos y electrónicos del vehículo.',
            icon: '⚡',
        },
        {
            id: 6,
            title: 'Aire Acondicionado',
            description:
                'Servicio completo de aire acondicionado: carga de gas, reparación y mantenimiento.',
            icon: '❄️',
        },
    ];

    return (
        <SectionContainer id="servicios" background="gray">
            <div className="services">
                <div className="services__header">
                    <h2 className="services__title">Nuestros Servicios</h2>
                    <p className="services__subtitle">
                        Soluciones integrales para el cuidado de tu vehículo
                    </p>
                </div>

                <div className="services__grid">
                    {services.map(service => (
                        <Card key={service.id} className="service-card">
                            <div className="service-card__icon">{service.icon}</div>
                            <h3 className="service-card__title">{service.title}</h3>
                            <p className="service-card__description">
                                {service.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default ServicesSection;
