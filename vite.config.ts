import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "ui-2",
            fileName: format => `index.${format}.js`,
        },
        rollupOptions: {
            input: "src/index.ts",
            external: ["react", "react-dom", "@emotion/react", "@emotion/styled", "@mui/material"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
                format: "es",
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [react(), dts()],
});
