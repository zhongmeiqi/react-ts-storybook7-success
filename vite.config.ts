import { ConfigEnv, UserConfigExport, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// 如果 vite版本在3.0以上，需要使用ES6的语法导入path
import path from "path";

import url from "@rollup/plugin-url";
// import svgr from "@svgr/rollup";

import svgr from "vite-plugin-svgr";

console.log("vite ---------vite");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ include: "**/*.svg?component" })],
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "src"),
      hippo: path.resolve(__dirname, "src/shared"),
    },
  },
});

