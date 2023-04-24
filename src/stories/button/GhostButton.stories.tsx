import GhostButton from "@root/shared/components/basic/button/GhostButton";
import { ComponentStory } from "@storybook/react";
import React from "react";
import { 单色 } from "../../shared/icons";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "幽灵按钮",
  component: GhostButton,
  argTypes: {
    icon: {
      control: { type: "select" },
      options: ["null", ...Object.keys(单色)],
      mapping: {
        null: null,
        ...单色,
      },
      defaultValue: 单色.下,
    },
  },
} as const;
const Template: ComponentStory<typeof GhostButton> = (args) => (
  <GhostButton {...args} />
);

export const BasicGhostButton = Template.bind({});
BasicGhostButton.args = { icon: 单色.保存 };

// import type { Meta, StoryObj } from "@storybook/react";
// import GhostButton from "@root/shared/components/basic/button/GhostButton";
// import { 单色 } from "../../shared/icons";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// const meta: Meta<typeof GhostButton> = {
//   title: "幽灵按钮",
//   component: GhostButton,
//   argTypes: {
//     icon: {
//       control: { type: "select" },
//       options: ["null", ...Object.keys(单色)],
//       mapping: {
//         null: null,
//         ...单色,
//       },
//       defaultValue: 单色.下,
//     },
//   },
// };
// export default meta;

// type Story = StoryObj<typeof GhostButton>;
// export const BasicGhostButton = {
//   args: {
//     icon: {
//       control: { type: "select" },
//       options: ["null", ...Object.keys(单色)],
//       mapping: {
//         null: null,
//         ...单色,
//       },
//       defaultValue: 单色.下,
//     },
//   },
// };

// export const BasicGhostButton: Story = {
//   // render: (...args) => {
//   //   const { icon } = args[1].argTypes;
//   //   debugger;
//   //   return <GhostButton icon={icon} />;
//   // },
//   render: () => {
//     return <GhostButton />;
//   },
// };

