import ReactDOM from "react-dom/client";
import SharedThemeProvider from "./components/theme-provider";
import Button from "./components/button";
import Input from "./components/input";
import { useForm } from "react-hook-form";

const Form = () => {
    const { control } = useForm({ defaultValues: { email: "" } });

    return (
        <form>
            <Input
                name="email"
                placeholder="Enter your email address"
                type="email"
                control={control}
            />
        </form>
    );
};

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
            <Form />
        </div>
    </SharedThemeProvider>,
);
