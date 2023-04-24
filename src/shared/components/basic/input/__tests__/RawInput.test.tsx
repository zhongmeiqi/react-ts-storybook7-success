import { vi, expect, describe, test, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import RawInput from '../RawInput';

describe('裸输入框', () => {
    test('渲染', () => {
        render(<RawInput />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('支持属性透传', () => {
        render(<RawInput type="search" />);
        expect(screen.getByRole('searchbox')).toBeInTheDocument();
    });

    test('支持前置', () => {
        render(<RawInput leading="123" />);
        expect(screen.getByText('123')).toBeInTheDocument();
    });

    test('支持后置', () => {
        const { rerender } = render(<RawInput trailing="456" />);
        expect(screen.getByText('456')).toBeInTheDocument();
        rerender(<RawInput trailing="789" value="some text" />);
        expect(screen.getByDisplayValue('some text')).toBeInTheDocument();
        expect(screen.getByText('789')).toBeInTheDocument();
    });
});
