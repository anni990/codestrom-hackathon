import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/codestrom-hackathon/",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
      }
    }
  }
});
