import React, { ForwardedRef, forwardRef, InputHTMLAttributes, MouseEventHandler, ReactNode, useRef, useState } from 'react';
import styles from '@root/styles/components/input.module.scss';
import classNames from 'clsx';
import { withClassNameOrStyle } from '@root/shared/utils/render';
import { 单色 } from '@root/shared/icons';

interface IRawInputProps extends InputHTMLAttributes<HTMLInputElement> {
    leading?: ReactNode | ((p: { className?: string }) => JSX.Element);
    trailing?: ReactNode | ((p: { className?: string }) => JSX.Element);
    inputTrailing?: ReactNode | ((p: { className?: string }) => JSX.Element);
    dense?: boolean;
    disabled?: boolean;
    // eslint-disable-next-line @rushstack/no-new-null
    inputRef?: (node: HTMLInputElement | null) => unknown;
    wrapperClassName?: string;
    onClear?: MouseEventHandler<SVGSVGElement>;
    value?: string;
}

const ClearIcon = 单色.错误;

const RawInputWithActionableLeadingAndTrailing = forwardRef(function (props: IRawInputProps, ref: ForwardedRef<HTMLDivElement>) {
    const {
        className,
        dense: isDense,
        leading,
        trailing,
        inputRef,
        wrapperClassName,
        onClear,
        value,
        onFocus,
        onBlur,
        inputTrailing,
        disabled,
        ...rest
    } = props;

    const innerRef = useRef<HTMLInputElement | null>(null);

    const [isFocused, setIsFocused] = useState(false);

    return (
        <div
            className={classNames(
                styles['input-with-actionable-leading-and-trailing'],
                wrapperClassName,
                disabled && styles['input-with-actionable-leading-and-trailing--disabled'],
                isDense && styles['input-with-actionable-leading-and-trailing--dense'],
                isFocused && styles['input-with-actionable-leading-and-trailing--focused'],
                leading != null && styles['input-with-actionable-leading-and-trailing--has-leading'],
                trailing != null && styles['input-with-actionable-leading-and-trailing--has-trailing'],
                inputTrailing != null && styles['input-with-actionable-leading-and-trailing--has-input-trailing']
            )}
            ref={ref}
        >
            {leading != null && withClassNameOrStyle(leading, styles['input-with-actionable-leading-and-trailing__leading'])}
            <input
                className={classNames(className, styles['input-with-actionable-leading-and-trailing__native-input'])}
                ref={node => {
                    inputRef?.(node);
                    innerRef.current = node;
                }}
                value={value}
                size={inputTrailing == null ? undefined : value?.length}
                onFocus={e => {
                    onFocus?.(e);
                    setIsFocused(true);
                }}
                disabled={disabled}
                onBlur={e => {
                    onBlur?.(e);
                    setIsFocused(false);
                }}
                {...rest}
            />
            {inputTrailing != null &&
                withClassNameOrStyle(inputTrailing, styles['input-with-actionable-leading-and-trailing__input-trailing'])}
            {onClear != null && (value ?? innerRef.current?.value) ? (
                <ClearIcon
                    className={classNames(
                        styles['input-with-actionable-leading-and-trailing__trailing'],
                        styles['input-with-actionable-leading-and-trailing__clear-button']
                    )}
                    role="button"
                    tabIndex={-1}
                    onClick={e => {
                        if (innerRef.current == null) {
                            return;
                        }
                        if (value == null) innerRef.current.value = '';
                        onClear(e);
                        innerRef.current.focus();
                    }}
                />
            ) : (
                trailing != null && withClassNameOrStyle(trailing, styles['input-with-actionable-leading-and-trailing__trailing'])
            )}
        </div>
    );
});

export default RawInputWithActionableLeadingAndTrailing;
