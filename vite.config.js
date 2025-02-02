import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	esbuild: {
		loader: "jsx",
		include: /src\/.*\.js$/, // Apply the JSX loader to .js files in the src directory
	},
	base: "/ResumeIQ",
});
