import logo from '../../assets/pngwing.com.png';
import { Link } from 'react-router-dom';

export interface LayoutComponentProps {
    children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }: LayoutComponentProps): JSX.Element => {
    return (
        <div>
            <header>
                <img src={logo} alt="logo" style={{ width: '40px', marginRight: '10px' }} />
                <span>Translator-App</span>
            </header>

            <nav>
                <Link to="/">Home page</Link>
                <Link to="/favorites">Favorites page</Link>
                <Link to="/history">History page</Link>
            </nav>

            {children}
        </div>
    );
};
