import React from 'react';

interface ButtonProps {
    text: string;
    color?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, color = 'blue', onClick }) => {
    const buttonStyle = {
        backgroundColor: color,
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;