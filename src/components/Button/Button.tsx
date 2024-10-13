import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  animation?: 'none' | 'spin' | 'shake' | 'bounce';
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'kiwi';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  animation = 'none',
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  loading = false,
  className,
  ...props
}) => {
  const baseClass = 'kiwi-button';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    `${baseClass}--${animation}`,
    fullWidth ? `${baseClass}--full-width` : '',
    loading ? `${baseClass}--loading` : '',
    className
  ].filter(Boolean).join(' ');

  const iconElement = icon && (
    <span className={`${baseClass}__icon ${baseClass}__icon--${iconPosition}`}>
      {icon}
    </span>
  );

  return (
    <button className={classes} disabled={loading} {...props}>
      {loading && <span className={`${baseClass}__loader`} />}
      {iconPosition === 'left' && iconElement}
      <span className={`${baseClass}__label`}>{label}</span>
      {iconPosition === 'right' && iconElement}
    </button>
  );
};

export default Button;