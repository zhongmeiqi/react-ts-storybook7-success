import React, { ButtonHTMLAttributes, SVGProps } from "react";
import styles from "@root/styles/components/button.module.scss";
import classnames from "clsx";

/**
 * 幽灵按钮，使用时推荐增加aria-label或者aria-labeledby或类似的aria标签以增加a11y
 * @param props
 * @returns
 */
function GhostButton(
  props: ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * icon图标，务必使用images/standardized的
     */
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  }
) {
  console.log(props);
  debugger;
  const { className, icon, ...rest } = props;
  const classNames = classnames(className, styles["ghost-button"]);
  delete rest.children;
  const Icon = icon;
  return (
    <button className={classNames} {...rest}>
      <Icon className={styles["ghost-button__icon"]} />
    </button>
  );
}

export default GhostButton;

