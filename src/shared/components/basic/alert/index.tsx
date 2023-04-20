import React, {
  ComponentType,
  CSSProperties,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  ReactNode,
} from "react";
import styles from "./index.module.scss";
import { 单色 } from "@root/shared/icons";
import clsx from "clsx";
const {
  提醒: Info,
  错误: ErrorIcon,
  成功: Success,
  禁止: Forbitten,
  警告: Warn,
} = 单色;

interface TipsProps {
  icon?: ComponentType<{ className: string }>;
  type?: "info" | "error" | "warn" | "success" | "forbid";
  showIcon?: boolean;
  message: ReactNode;
  msgContainerProps?: HTMLAttributes<HTMLDivElement>;
  className?: string;
  noBackground?: boolean;
  size?: "normal" | "mini";
  style?: CSSProperties;
  iconPlacement?: "left" | "right";
}

const Alert = forwardRef(
  (props: TipsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const getIcon = {
      info: Info,
      warn: Warn,
      success: Success,
      forbid: Forbitten,
      error: ErrorIcon,
    };
    const {
      icon,
      showIcon: isIconShow = true,
      message,
      msgContainerProps,
      style,
      iconPlacement = "left",
      type = "warn",
      className,
      size = "normal",
      noBackground: hasNobackground = true,
    } = props;

    const Icon = icon ?? getIcon[type];

    return (
      <div
        ref={ref}
        className={clsx(
          styles["alert"],
          styles[`alert--${size}`],
          styles[`alert--${type}`],
          styles[`alert--${iconPlacement}`],
          className,
          hasNobackground && styles["alert--no-background"]
        )}
        style={style}
        role="alert"
      >
        {iconPlacement === "left" && isIconShow && (
          <Icon className={styles["alert__icon"]} />
        )}
        <div {...msgContainerProps}>{message}</div>
        {iconPlacement === "right" && isIconShow && (
          <Icon className={styles["alert__icon"]} />
        )}
      </div>
    );
  }
);

export default Alert;

