import Icon from "@root/shared/components/basic/icon/Icon";
import { ComponentStory } from "@storybook/react";
import React from "react";
import { 单色, 双色, 其他 } from "../../shared/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "图标",
  component: Icon,
  argTypes: {
    icon: {
      control: { type: "select" },
      options: [
        "null",
        ...Object.keys(单色),
        ...Object.keys(双色),
        ...Object.keys(其他),
      ],
      defaultValue: 单色.保存,
      mapping: {
        null: null,
        ...单色,
        ...双色,
        ...其他,
      },
    },
  },
} as const;
const Template: ComponentStory<typeof Icon> = (args) => {
  return <Icon {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  style: {
    width: 100,
    height: 100,
    // @ts-ignore
    "--svg-fill--tone1": "red",
    "--svg-fill--tone2": "brown",
    "--svg-stroke--tone1": "blue",
    "--svg-stroke--tone2": "green",
  },
  icon: 单色.保存,
};

