import React from 'react';
import styles from './buttonNormal.module.css';

type ButtonBackColor = 'primary' | 'secondary_deep' | 'secondary_light';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    backColor?: ButtonBackColor;
    className?: string;
    text: string;
    disable?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
}

export default function ButtonComponent({
    backColor,
    text,
    className = '',
    disable = false,
    onClick,
    icon,
    ...props
}: ButtonProps) {

    return (
        <button
            className={`${styles[`button-${backColor}`]} ${className}`}
            disabled={disable}
            onClick={onClick}
            {...props}
        >
            <span>{text}</span>
            {icon}
        </button>
    );
}