import styles from '../page.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const className = variant === 'primary' ? styles['primary-btn'] : styles['secondary-btn'];
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;