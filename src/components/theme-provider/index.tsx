import { ReactNode } from "react";
import theme from "./theme";
import { ThemeProvider as MUIThemeProvider } from "@emotion/react";

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
