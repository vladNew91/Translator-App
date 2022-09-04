import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from "react-redux";
import { selectThemeData } from '../../modules';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TranslateIcon from '@mui/icons-material/Translate';
import { ButtonGroup, ThemeProvider } from '@mui/material';
import { SwitcherContainer } from '../../containers';
import { darkTheme } from '../../themes';

export interface LayoutComponentProps {
    children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }: LayoutComponentProps): JSX.Element => {
    const navigate = useNavigate();

    const lightTheme: boolean = useSelector(selectThemeData);

    const goToPage = useCallback((url: string) => navigate(url), [navigate]);

    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" enableColorOnDark={lightTheme}>
                    <Toolbar>
                        <TranslateIcon sx={{ mr: 2 }} />

                        <Typography variant="h6" component="div">
                            Translator-App
                        </Typography>

                        <Box sx={{ ml: 3, flexGrow: 1 }}>
                            <SwitcherContainer />
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
