import styles from '../../styles/index.module.css';
import logo from '../../assets/pngwing.com.png';

export interface LayoutComponentProps {
    children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }: LayoutComponentProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img src={logo} alt="logo" style={{ width: '40px', marginRight: '10px' }} />
                <span>Translator-App</span>
            </header>

            {children}
        </div>
    );
};
