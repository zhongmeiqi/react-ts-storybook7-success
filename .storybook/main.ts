import type { StorybookConfig } from "@storybook/react-vite";
const { mergeConfig } = require("vite");
import path from "path";
module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: { builder: "@storybook/builder-vite" },
  async viteFinal(config, { configType }) {
    const customConfig = {
      alias: {
        "@root": path.resolve(__dirname, "src"),
        // hippo: path.resolve("src/shared"),
      },
    };
    return { ...config, ...customConfig };
    // return mergeConfig(config, {
    //   resolve: {
    //     alias: {
    //       "@root": path.resolve("src"),
    //       // hippo: path.resolve("src/shared"),
    //     },
    //   },
    // });
  },
};

