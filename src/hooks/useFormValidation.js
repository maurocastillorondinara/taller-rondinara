import { useState } from 'react';

const useFormValidation = initialValues => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const validateEmail = email => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = phone => {
        const phoneRegex = /^[\d\s\-+()]+$/;
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
    };

    const validateField = (name, value) => {
        let error = '';

        switch (name) {
            case 'name':
                if (!value.trim()) {
                    error = 'El nombre es requerido';
                } else if (value.trim().length < 2) {
                    error = 'El nombre debe tener al menos 2 caracteres';
                }
                break;

            case 'email':
                if (!value.trim()) {
                    error = 'El email es requerido';
                } else if (!validateEmail(value)) {
                    error = 'Email inválido';
                }
                break;

            case 'phone':
                if (!value.trim()) {
                    error = 'El teléfono es requerido';
                } else if (!validatePhone(value)) {
                    error = 'Teléfono inválido';
                }
                break;

            case 'message':
                if (!value.trim()) {
                    error = 'El mensaje es requerido';
                } else if (value.trim().length < 10) {
                    error = 'El mensaje debe tener al menos 10 caracteres';
                }
                break;

            default:
                break;
        }

        return error;
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    const handleBlur = event => {
        const { name, value } = event.target;
        const error = validateField(name, value);

        setErrors({
            ...errors,
            [name]: error,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        Object.keys(values).forEach(key => {
            const error = validateField(key, values[key]);
            if (error) {
                newErrors[key] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    };

    return {
        values,
        errors,
        handleChange,
        handleBlur,
        validateForm,
        resetForm,
    };
};

export default useFormValidation;
