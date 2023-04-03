import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// 如果 vite版本在3.0以上，需要使用ES6的语法导入path
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "src"),
      hippo: path.resolve(__dirname, "src/shared"),
    },
  },
});

