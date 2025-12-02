import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contacto" className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__section">
                        <h3 className="footer__title">Taller Rondinara</h3>
                        <p className="footer__description">
                            Servicio de excelencia en mantenimiento y reparación de vehículos
                            desde 1995.
                        </p>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__subtitle">Enlaces Rápidos</h4>
                        <ul className="footer__links">
                            <li>
                                <a href="#servicios">Servicios</a>
                            </li>
                            <li>
                                <a href="#nosotros">Nosotros</a>
                            </li>
                            <li>
                                <a href="#concesionarios">Concesionarios</a>
                            </li>
                            <li>
                                <a href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__subtitle">Contacto</h4>
                        <ul className="footer__contact">
                            <li>📞 +54 11 1234-5678</li>
                            <li>✉️ info@tallerrondinara.com</li>
                            <li>📍 Buenos Aires, Argentina</li>
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__subtitle">Síguenos</h4>
                        <div className="footer__social">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>
                        &copy; {currentYear} Taller Rondinara. Todos los derechos
                        reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
