import Button from "@root/shared/components/basic/button/Button";
import { ComponentStory } from "@storybook/react";
import React from "react";
import { 单色 } from "../../shared/icons";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "按钮",
  component: Button,
  argTypes: {
    children: {
      name: "文字",
      type: { name: "string", required: true },
      defaultValue: "按钮",
      description: "按钮文字内容",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    leadingIcon: {
      control: { type: "select" },
      options: ["null", ...Object.keys(单色)],
      mapping: {
        null: null,
        ...单色,
      },
    },
  },
} as const;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = { children: "按钮" };

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "按钮",
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  children: "按钮",
};

export const Thirdary = Template.bind({});
Thirdary.args = {
  thirdary: true,
  children: "按钮",
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
  children: "按钮",
};

export const OutlinedRed = Template.bind({});
OutlinedRed.args = {
  outlinedRed: true,
  children: "按钮",
};

export const CallToAction = Template.bind({});
CallToAction.args = {
  callToAction: true,
  primary: true,
  children: "按钮",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "按钮",
};

export const Text = Template.bind({});
Text.args = {
  text: true,
  children: "按钮",
};

