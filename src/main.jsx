import ReactDOM from "react-dom/client";
import Button from "./components/button";
import Typography from "./components/typography";
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
        >
            <Button>Click me</Button>
            <Typography variant="h1">Title text</Typography>
            <Typography variant="h2">Title text</Typography>
            <Typography variant="h3">Title text</Typography>
            <Typography variant="h4">Title text</Typography>
            <Typography variant="h5">Title text</Typography>
            <Typography variant="h6">Title text</Typography>
        </div>
    </SharedThemeProvider>,
);
