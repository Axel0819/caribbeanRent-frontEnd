import { CircularProgress, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: "#3B7D7A"
        }
    }
});

export const LoadAuth = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="w-full h-screen flex justify-content-center align-items-center">
                <CircularProgress disableShrink size={90} />
            </div>
        </ThemeProvider>
    )
}
