import Alert from "@root/shared/components/basic/alert";
import { ComponentStory } from "@storybook/react";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Alert",
  component: Alert,
  argTypes: {
    message: {
      name: "文字",
      type: { name: "string", required: true },
      defaultValue: "这是一段提示信息",
      description: "文字内容",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    type: {
      control: { type: "select" },
      options: ["info", "error", "warn", "success", "forbid"],
      defaultValue: "info",
    },
    size: {
      control: { type: "select" },
      options: ["normal", "mini"],
      defaultValue: "normal",
    },
    iconPlacement: {
      control: { type: "select" },
      options: ["left", "right"],
      defaultValue: "left",
    },
    noBackground: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    type: "error",
    message: "这是一段提示信息",
    showIcon: true,
    iconPlacement: "left",
  },
};

