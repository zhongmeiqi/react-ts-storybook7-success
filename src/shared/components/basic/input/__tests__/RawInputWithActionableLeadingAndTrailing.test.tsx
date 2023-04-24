import { vi, expect, describe, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import RawInputWithActionableLeadingAndTrailing from '../RawInputWithActionableLeadingAndTrailing';

describe('可清除输入框', () => {
    test('渲染', () => {
        render(<RawInputWithActionableLeadingAndTrailing />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('支持属性透传', () => {
        render(<RawInputWithActionableLeadingAndTrailing type="search" />);
        expect(screen.getByRole('searchbox')).toBeInTheDocument();
    });

    test('支持前置', () => {
        render(<RawInputWithActionableLeadingAndTrailing leading="123" />);
        expect(screen.getByText('123')).toBeInTheDocument();
    });

    test('支持后置', () => {
        const { rerender } = render(<RawInputWithActionableLeadingAndTrailing trailing="456" />);
        expect(screen.getByText('456')).toBeInTheDocument();
        rerender(<RawInputWithActionableLeadingAndTrailing trailing="789" value="some text" />);
        expect(screen.getByDisplayValue('some text')).toBeInTheDocument();
        expect(screen.getByText('789')).toBeInTheDocument();
    });

    test('支持受控清除', () => {
        const onClear = vi.fn();
        const { rerender } = render(<RawInputWithActionableLeadingAndTrailing trailing="666" value="" onClear={onClear} />);
        expect(screen.getByText('666')).toBeInTheDocument();

        expect(screen.queryByRole('button')).not.toBeInTheDocument();

        rerender(<RawInputWithActionableLeadingAndTrailing trailing="666" value="text" onClear={onClear} />);
        expect(screen.queryByText('666')).not.toBeInTheDocument();
        expect(screen.getByDisplayValue('text')).toBeInTheDocument();

        const clearButton = screen.getByRole('button');
        expect(clearButton).toBeInTheDocument();

        expect(onClear).not.toHaveBeenCalled();

        fireEvent.click(clearButton);

        expect(onClear).toHaveBeenCalled();
        expect(screen.getByRole('textbox')).toHaveFocus();
    });
});
