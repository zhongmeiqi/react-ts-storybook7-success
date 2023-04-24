import React, { ForwardedRef, forwardRef, InputHTMLAttributes, ReactNode, ComponentProps } from 'react';
import styles from '@root/styles/components/input.module.scss';
import clsx from 'clsx';
import RawInput from './RawInput';

type IRawInputProps = ComponentProps<typeof RawInput>;

interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>, IRawInputProps {
    // eslint-disable-next-line @rushstack/no-new-null
    label: Exclude<ReactNode, boolean | null | undefined>;
    hiddenLabel?: boolean;
    labelClassName?: string;
    labelTextClassName?: string;
}

const Input = forwardRef(function (props: IInputProps, ref: ForwardedRef<HTMLDivElement>) {
    const { label, hiddenLabel: isLabelHidden, labelClassName, labelTextClassName, ...rest } = props;
    return (
        <label className={clsx(isLabelHidden && styles['label--hidden'], styles.label, labelClassName)}>
            <span className={clsx(styles.label__text, labelTextClassName)}>{label}</span>
            <RawInput {...rest} ref={ref} />
        </label>
    );
});

export default Input;
