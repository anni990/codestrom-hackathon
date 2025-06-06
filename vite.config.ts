import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: "/codestrom-hackathon/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}));
