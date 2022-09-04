import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from "react-redux";
import { selectThemeData } from '../../modules';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TranslateIcon from '@mui/icons-material/Translate';
import { ButtonGroup, IconButton, Menu, MenuItem, ThemeProvider } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import { SwitcherContainer } from '../../containers';
import { darkTheme } from '../../themes';

export interface LayoutComponentProps {
    children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }: LayoutComponentProps): JSX.Element => {
    const navigate = useNavigate();

    const lightTheme: boolean = useSelector(selectThemeData);

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

    const handleMobileMenuClose = useCallback(() => {
        setMobileMoreAnchorEl(null);
    }, []);

    const handleMobileMenuOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    }, []);

    const goToPage = useCallback((url: string) => {
        navigate(url);
        handleMobileMenuClose();
    }, [navigate, handleMobileMenuClose]);

    const isMobileMenuOpen: boolean = !!mobileMoreAnchorEl;

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Button onClick={() => goToPage("/")}>Home page</Button>
            </MenuItem>

            <MenuItem>
                <Button onClick={() => goToPage("/favorites")}>Favorites page</Button>
            </MenuItem>

            <MenuItem>
                <Button onClick={() => goToPage("/history")}>History page</Button>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="fixed" enableColorOnDark={lightTheme}>
                        <Toolbar>
                            <TranslateIcon sx={{ mr: 2 }} />

                            <Typography variant="h6" component="div">
                                Translator-App
                            </Typography>

                            <Box sx={{ ml: 3, flexGrow: 1 }}>
                                <SwitcherContainer />
                            </Box>


                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <ButtonGroup color='inherit' variant="text" aria-label="text button group">
                                    <Button onClick={() => goToPage("/")}>Home page</Button>
                                    <Button onClick={() => goToPage("/favorites")}>Favorites page</Button>
                                    <Button onClick={() => goToPage("/history")}>History page</Button>
                                </ButtonGroup>
                            </Box>

                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                            {renderMobileMenu}
                        </Toolbar>
                    </AppBar>
                </Box>
            </ThemeProvider>

            <Box
                sx={{
                    height: 'calc(100vh - 64px)',
                    background: lightTheme ? "#e5f5ff" : "#323638",
                    overflowY: 'auto',
                    paddingTop: '64px' 
                }}
            >
                {children}
            </Box>
        </>
    );
};
