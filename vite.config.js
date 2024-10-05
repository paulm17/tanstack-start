import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { pigment } from "@pigment-css/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pigment(), TanStackRouterVite(), react()],
});
