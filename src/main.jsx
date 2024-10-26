import ReactDOM from "react-dom/client";
import SharedThemeProvider from "./components/theme-provider";
import Button from "./components/button";

ReactDOM.createRoot(document.getElementById("root")).render(
    <SharedThemeProvider>
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <Button variant="contained">Button</Button>
        </div>
    </SharedThemeProvider>,
);
