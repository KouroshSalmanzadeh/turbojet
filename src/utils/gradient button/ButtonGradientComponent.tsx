import styles from "./buttonGradient.module.css";

type ButtonColorText = 'primary' | 'secondary_deep' | 'secondary_light' | 'black' | 'white';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color: ButtonColorText;
    className?: string;
    text: string;
    disable?: boolean;
    colors?: string[];
    icon?: React.ReactNode;
    onClick?: () => void;
}

export default function ButtonGradientComponent({
    color,
    text,
    className = '',
    disable = false,
    colors = [],
    onClick,
    icon,
    ...props
}: ButtonProps) {
    const buttonClasses = `bg-gradient-to-l ${colors.join(' ')} text-${color}`;

  return (
    <button className={`${styles['gradient-button']} ${className} ${buttonClasses}`} onClick={onClick} disabled={disable && true} {...props}>
        <span>{text}</span>
        {icon}
    </button>
  )
}
