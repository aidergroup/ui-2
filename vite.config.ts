import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

interface PreRenderedChunk {
    exports: string[];
    facadeModuleId: string | null;
    isDynamicEntry: boolean;
    isEntry: boolean;
    isImplicitEntry: boolean;
    moduleIds: string[];
    name: string;
    type: "chunk";
}
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    build: {
        lib: {
            entry: [
                path.resolve(__dirname, "src/index.ts"),
                path.resolve(__dirname, "src/assets/icons/index.ts"),
            ],
            name: "ui-2",
            fileName: format => `index.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: [
                {
                    entryFileNames: ({ facadeModuleId }) =>
                        facadeModuleId.includes("assets/icons") ? "icons.es.js" : "index.es.js",
                    globals: {
                        react: "React",
                        "react-dom": "ReactDOM",
                    },
                    format: "es",
                },
            ],
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [react(), dts()],
});
