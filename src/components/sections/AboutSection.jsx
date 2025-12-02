import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <SectionContainer id="nosotros" background="white">
            <div className="about">
                <div className="about__content">
                    <div className="about__text">
                        <h2 className="about__title">
                            Acerca de <span className="text-red">Nosotros</span>
                        </h2>
                        <p className="about__paragraph">
                            Desde 1995, Taller Rondinara se ha consolidado como un referente
                            en el servicio automotriz de excelencia. Nuestra pasión por los
                            vehículos y el compromiso con la satisfacción del cliente nos han
                            permitido crecer y evolucionar constantemente.
                        </p>
                        <p className="about__paragraph">
                            Contamos con un equipo de técnicos altamente capacitados y
                            certificados, equipados con la tecnología más avanzada para
                            diagnosticar y reparar todo tipo de vehículos.
                        </p>

                        <div className="about__values">
                            <div className="about__value">
                                <div className="about__value-icon">✓</div>
                                <div>
                                    <h4 className="about__value-title">Experiencia</h4>
                                    <p className="about__value-text">
                                        Más de 25 años en el sector automotriz
                                    </p>
                                </div>
                            </div>

                            <div className="about__value">
                                <div className="about__value-icon">✓</div>
                                <div>
                                    <h4 className="about__value-title">Calidad</h4>
                                    <p className="about__value-text">
                                        Repuestos originales y garantía en todos nuestros trabajos
                                    </p>
                                </div>
                            </div>

                            <div className="about__value">
                                <div className="about__value-icon">✓</div>
                                <div>
                                    <h4 className="about__value-title">Confianza</h4>
                                    <p className="about__value-text">
                                        Miles de clientes satisfechos nos respaldan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about__image">
                        <div className="about__image-placeholder">
                            <div className="about__stats">
                                <div className="about__stat">
                                    <div className="about__stat-number">25+</div>
                                    <div className="about__stat-label">Años de Experiencia</div>
                                </div>
                                <div className="about__stat">
                                    <div className="about__stat-number">10K+</div>
                                    <div className="about__stat-label">Clientes Satisfechos</div>
                                </div>
                                <div className="about__stat">
                                    <div className="about__stat-number">15+</div>
                                    <div className="about__stat-label">Técnicos Certificados</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default AboutSection;
