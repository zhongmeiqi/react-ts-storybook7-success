import React, { ForwardedRef, forwardRef, InputHTMLAttributes, LegacyRef, ReactNode } from 'react';
import styles from '@root/styles/components/input.module.scss';
import classNames from 'clsx';
import { withClassNameOrStyle } from '@root/shared/utils/render';

interface IRawInputProps extends InputHTMLAttributes<HTMLInputElement> {
    leading?: ReactNode | ((p: { className?: string }) => JSX.Element);
    trailing?: ReactNode | ((p: { className?: string }) => JSX.Element);
    dense?: boolean;
    inputRef?: LegacyRef<HTMLInputElement>;
    wrapperClassName?: string;
    value?: string;
}

const RawInput = forwardRef(function (props: IRawInputProps, ref: ForwardedRef<HTMLDivElement>) {
    const { className, dense: isDense, leading, trailing, inputRef, wrapperClassName, value, ...rest } = props;

    return (
        <div className={classNames(styles['input-wrapper'], wrapperClassName)} ref={ref}>
            {(leading != null || trailing != null) && (
                <div className={styles['input-wrapper__positioner']}>
                    {leading != null && withClassNameOrStyle(leading, styles['input-wrapper__leading'])}
                    {trailing != null && withClassNameOrStyle(trailing, styles['input-wrapper__trailing'])}
                </div>
            )}
            <input
                className={classNames(
                    className,
                    styles.input,
                    isDense && styles['input--dense'],
                    leading != null && styles['input--has-leading'],
                    trailing != null && styles['input--has-trailing']
                )}
                ref={inputRef}
                value={value}
                {...rest}
            />
        </div>
    );
});

export default RawInput;
