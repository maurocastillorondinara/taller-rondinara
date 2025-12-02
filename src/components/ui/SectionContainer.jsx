import React from 'react';
import './SectionContainer.css';

const SectionContainer = ({
    children,
    id,
    className = '',
    background = 'white',
}) => {
    const sectionClasses = `section-container section-container--${background} ${className}`;

    return (
        <section id={id} className={sectionClasses}>
            <div className="container">{children}</div>
        </section>
    );
};

export default SectionContainer;
