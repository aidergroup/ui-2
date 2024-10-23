import theme from "../../theme";
import { ThemeProvider } from "@emotion/react";

const SharedThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default SharedThemeProvider;
