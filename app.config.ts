// app.config.ts
import { defineConfig } from "@tanstack/start/config";
import { pigment } from "@pigment-css/vite-plugin";

export default defineConfig({vite: {plugins: () => [pigment({})]}});
