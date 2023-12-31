import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { useCustomSelector } from '../hooks/redux';
interface Props {
    children: React.ReactNode;
}
const MuiThemeProvider: React.FC<Props> = ({ children }) => {
    const { themeMode } = useCustomSelector((state) => state.settings);
    const isLight = themeMode === 'light';

    const theme = createTheme({
        palette: {
            primary: {
                main: '#651fff'
            },
            mode: isLight ? 'light' : 'dark'
        }
    });
    return (
        <StyledEngineProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline>{children}</CssBaseline>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default MuiThemeProvider;
