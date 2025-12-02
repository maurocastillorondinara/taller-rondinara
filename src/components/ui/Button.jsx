import React from 'react';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    type = 'button',
    disabled = false,
    className = '',
}) => {
    const buttonClasses = `button button--${variant} button--${size} ${className}`;

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
