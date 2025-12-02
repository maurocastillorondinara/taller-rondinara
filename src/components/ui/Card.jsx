import React from 'react';
import './Card.css';

const Card = ({ children, className = '', hover = true }) => {
    const cardClasses = `card ${hover ? 'card--hover' : ''} ${className}`;

    return <div className={cardClasses}>{children}</div>;
};

export default Card;
