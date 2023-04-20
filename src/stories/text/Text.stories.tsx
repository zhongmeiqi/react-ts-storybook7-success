/* eslint-disable storybook/prefer-pascal-case */
import Text from "@root/shared/components/basic/text/Text";
import { ComponentStory } from "@storybook/react";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "文字缩略",
  component: Text,
} as const;
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const 单行文字 = Template.bind({});
单行文字.args = {
  children: (ref) => (
    <div
      // @ts-ignore
      ref={ref}
      style={{
        maxWidth: "300px",
        overflow: "hidden",
        wordBreak: "keep-all",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      10月18日晚，苹果通过官网发布了新款iPad Pro和第十代iPad。其中，iPad
      Pro搭载了苹果自研的M2芯片，支持全新的Apple
      Pencil悬停体验，第十代iPad采用全面屏设计，屏幕增大至10.9英寸，两款新产品都将于10月26日在国内开始发售。
    </div>
  ),
  tooltip: {
    tooltipContent:
      "10月18日晚，苹果通过官网发布了新款iPad Pro和第十代iPad。其中，iPad Pro搭载了苹果自研的M2芯片，支持全新的Apple Pencil悬停体验，第十代iPad采用全面屏设计，屏幕增大至10.9英寸，两款新产品都将于10月26日在国内开始发售。",
  },
};

export const 多行文字 = Template.bind({});
多行文字.args = {
  children: (ref) => (
    <div
      // @ts-ignore
      ref={ref}
      style={{
        maxWidth: "300px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxHeight: "100px",
      }}
    >
      10月18日晚，苹果通过官网发布了新款iPad Pro和第十代iPad。其中，iPad
      Pro搭载了苹果自研的M2芯片，支持全新的Apple
      Pencil悬停体验，第十代iPad采用全面屏设计，屏幕增大至10.9英寸，两款新产品都将于10月26日在国内开始发售。
    </div>
  ),
  tooltip: {
    tooltipContent:
      "10月18日晚，苹果通过官网发布了新款iPad Pro和第十代iPad。其中，iPad Pro搭载了苹果自研的M2芯片，支持全新的Apple Pencil悬停体验，第十代iPad采用全面屏设计，屏幕增大至10.9英寸，两款新产品都将于10月26日在国内开始发售。",
  },
};

export const 多行文字2 = Template.bind({});
多行文字2.args = {
  children: (ref) => (
    <div
      // @ts-ignore
      ref={ref}
      style={{
        maxWidth: "300px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineClamp: 3,
        WebkitLineClamp: 3,
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
      }}
    >
      10月18日晚，苹果通过官网发布了新款iPad Pro和第十代iPad。其中，iPad
      Pro搭载了苹果自研的M2芯片，支持全新的Apple
      Pencil悬停体验，第十代iPad采用全面屏设计，屏幕增大至10.9英寸，两款新产品都将于10月26日在国内开始发售。
    </div>
  ),
  tooltip: {
    tooltipContent:
      "10月18日晚，苹果通过官网发布了新款iPad Pro和第十代iPad。其中，iPad Pro搭载了苹果自研的M2芯片，支持全新的Apple Pencil悬停体验，第十代iPad采用全面屏设计，屏幕增大至10.9英寸，两款新产品都将于10月26日在国内开始发售。",
  },
};

