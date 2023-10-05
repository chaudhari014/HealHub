import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@stripe/react-stripe-js", "@stripe/stripe-js"],
  },
  build: {
    outDir: "build", // Output directory set to "build"
  },
});
