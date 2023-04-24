import styles from '@root/styles/components/button.module.scss';
import classnames from 'clsx';
import React, { ReactNode, SVGProps, useMemo } from 'react';

export interface IButtonProps {
    primary?: boolean;
    secondary?: boolean;
    outlined?: boolean;
    outlinedRed?: boolean;
    thirdary?: boolean;
    dense?: boolean;
    text?: boolean;
    /**
     * 看起来是disabled，但其实可以点击并触发事件。
     */
    disabledOnAppearance?: boolean;
    callToAction?: boolean;
    /**
     * 前置icon图标，务必使用images/standardized的
     */
    leadingIcon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    /**
     * 按钮文字
     */
    children?: ReactNode;
    className?: string;
}

function useProps<T extends IButtonProps>(props: T) {
    const {
        className,
        children,
        primary: isPrimary,
        secondary: isSecondary,
        outlined: isOutlined,
        outlinedRed: isOutlinedRed,
        disabledOnAppearance,
        callToAction: isCallToAction,
        leadingIcon: icon,
        thirdary: isThirdary,
        dense: isDense,
        text: isText,
        ...rest
    } = props;

    const haveIcon =
        icon != null && (icon instanceof Function || (Object.prototype.toString.call(icon) === '[object Object]' && !('type' in icon)));

    const classNames = useMemo(() => {
        return classnames(className, styles.button, {
            [styles['button--primary']]: isPrimary,
            [styles['button--secondary']]: isSecondary,
            [styles['button--thirdary']]: isThirdary,
            [styles['button--outlined']]: isOutlined,
            [styles['button--text']]: isText,
            [styles['button--outlined-red']]: isOutlinedRed,
            [styles['button--disabled-on-appearance']]: disabledOnAppearance,
            [styles['button--call-to-action']]: isCallToAction,
            [styles['button--with-leading-icon']]: haveIcon,
            [styles['button--dense']]: isDense,
        });
    }, [
        className,
        disabledOnAppearance,
        haveIcon,
        isCallToAction,
        isDense,
        isOutlined,
        isOutlinedRed,
        isPrimary,
        isSecondary,
        isText,
        isThirdary,
    ]);

    const renderChildren = useMemo(() => {
        if (haveIcon) {
            const Icon = icon;
            return (
                <>
                    <Icon className={styles.button__icon} />
                    <span className={styles.button__text}>{children}</span>
                </>
            );
        } else return children;
    }, [children, icon, haveIcon]);

    return { className: classNames, rest, children: renderChildren };
}

export default useProps;
