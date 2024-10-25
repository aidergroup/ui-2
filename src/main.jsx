import ReactDOM from "react-dom/client";
import SharedThemeProvider from "./components/theme-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <SharedThemeProvider>
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        ></div>
    </SharedThemeProvider>,
);
