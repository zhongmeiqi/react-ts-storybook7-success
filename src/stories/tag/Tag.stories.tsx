/* eslint-disable storybook/prefer-pascal-case */
import Tag from '@root/shared/components/basic/tag/Tag';
import { ComponentStory } from '@storybook/react';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: '标签',
    component: Tag,
} as const;
const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />;

export const 白名单 = Template.bind({});
白名单.args = {
    children: '白名单',
};

export const 未代销 = Template.bind({});
未代销.args = {
    children: '未代销',
};

export const 未签署 = Template.bind({});
未签署.args = {
    children: '未签署',
};

export const 未阅读 = Template.bind({});
未阅读.args = {
    children: '未阅读',
};
