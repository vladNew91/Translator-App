// import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Paper, Skeleton, Tabs, TextField } from '@mui/material';
import Tab from '@mui/material/Tab';
// import { selectThemeData } from '../../modules';

const sceletonText = (
    <>
        <Skeleton variant='text' />
        <Skeleton variant='text' />
        <Skeleton variant='text' width='80%' />
    </>
);

const TranslatedBox = styled(Box)(() => ({
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '1.4375em',
    letterSpacing: '0.00938em',
    color: 'rgba(0, 0, 0, 0.87)',
    margin: '33px 10px 4px',
    width: '97%',
    height: '92px',
    textAlign: 'left',
    position: 'relative',
}));

interface TranslatorComponentProps {
    text: string;
    loading: boolean;
    sameLanguages: boolean;
    translateDetectedLang?: string;
    lang: string;
    onKeyUp: () => void;
    onKeyDown: () => void;
    handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeLang: (event: React.SyntheticEvent, newValue: string) => void;
}

export const TranslatorComponent: React.FC<TranslatorComponentProps> = ({
    text,
    loading,
    sameLanguages,
    translateDetectedLang,
    lang,
    onKeyUp,
    onKeyDown,
    handleChangeValue,
    handleChangeLang
}: TranslatorComponentProps): JSX.Element => {
    // const lightTheme = useSelector(selectThemeData);

    return (
        <Paper sx={{
            // backgroundColor: '#fff',
            padding: '16px',
            textAlign: 'center',
            minWidth: '40%',
            m: '1rem',
        }}>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={lang}
                    onChange={handleChangeLang}
                >
                    <Tab label="English" value="en" />
                    <Tab label="Russian" value="ru" />
                </Tabs>
            </Box>

            {!loading ? (
                <TextField
                    margin='dense'
                    variant="standard"
                    multiline
                    rows={4}
                    value={text}
                    sx={{ width: '97%' }}
                    onChange={handleChangeValue}
                    label={sameLanguages ? " " : `Change keyboard layout, your language is ${translateDetectedLang}`}
                    color={sameLanguages ? undefined : 'error'}
                    onKeyUp={onKeyUp}
                    onKeyDown={onKeyDown}
                />) : (
                <TranslatedBox>
                    {sceletonText}
                </TranslatedBox>
            )}
        </Paper>
    );
};
