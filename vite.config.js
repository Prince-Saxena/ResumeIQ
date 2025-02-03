import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],

	base: "/ResumeIQ",
	compilerOptions: {
		jsx: "react-jsx", // for React 17 and later
	},
	build: {
		jsx: "react-jsx", // Ensure this is set correctly
	},
});
