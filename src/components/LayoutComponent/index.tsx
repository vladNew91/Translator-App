import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TranslateIcon from '@mui/icons-material/Translate';
import { ButtonGroup, ThemeProvider } from '@mui/material';
import { SwitcherComponent } from '../../components';
import { darkTheme } from '../../themes';

export interface LayoutComponentProps {
    children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }: LayoutComponentProps): JSX.Element => {
    const navigate = useNavigate();
    const goToPage = useCallback((url: string) => navigate(url), [navigate]);

    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" enableColorOnDark>
                    <Toolbar>
                        <TranslateIcon sx={{ mr: 2 }} />

                        <Typography variant="h6" component="div">
                            Translator-App
                        </Typography>

                        <Box sx={{ ml: 3, flexGrow: 1 }}>
                            <SwitcherComponent />
                        </Box>

                        <ButtonGroup color='inherit' variant="text" aria-label="text button group">
                            <Button onClick={() => goToPage("/")}>Home page</Button>
                            <Button onClick={() => goToPage("/favorites")}>Favorites page</Button>
                            <Button onClick={() => goToPage("/history")}>History page</Button>
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>
            </Box>

            {children}
        </ThemeProvider>
    );
};
