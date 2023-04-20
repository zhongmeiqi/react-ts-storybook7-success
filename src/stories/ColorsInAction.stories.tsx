import Color, { options } from './Color';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Colors In Action',
    component: Color,
    argTypes: {
        text: {
            options,
            description: '文字颜色',
            control: { type: 'select' },
        },
        bg: {
            options,
            description: '背景颜色',
            control: { type: 'select' },
        },
        border: {
            options,
            description: '边框颜色',
            control: { type: 'select' },
        },
        children: {
            description: '文字内容',
            control: { type: 'text' },
        },
    },
} as const;

export const TextBackgroundAndBorder = Color.bind({});
