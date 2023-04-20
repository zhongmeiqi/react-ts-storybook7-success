import clsx from "clsx";
import React, {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
} from "react";
import { arrayIncludes, objectKeys } from "ts-extras";
import styles from "@root/styles/components/tag.module.scss";
import NewTooltip from "../tooltip/Tooltip";

const specials = {
  白名单: "white",
  养老基金: "not-available",
  未代销: "not-on-counter",
  不可购买: "not-available",
  不可赎回: "not-available",
  中登TA注册登记: "not-available",
  未签署: "nosign",
  已签署: "sign",
  已过期: "expired",
  机构份额: "orgsharelbl",
  固定: "feeCalc-type",
  浮动: "feeCalc-type",
  实时份额清算: "white",
  实时资金清算: "white",
} as const;

const Tag = forwardRef(
  (
    props: {
      children: string;
      tooltip?: Omit<ComponentProps<typeof NewTooltip>, "children">;
    } & HTMLAttributes<HTMLSpanElement>,
    ref: ForwardedRef<HTMLSpanElement>
  ) => {
    ``;
    const { children, className, tooltip, ...rest } = props;

    const span = (
      <span
        className={clsx(
          styles.tag,
          className,
          arrayIncludes(objectKeys(specials), children) &&
            styles[`tag--${specials[children]}`]
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </span>
    );

    if (tooltip != null) {
      return (
        <NewTooltip theme="dark" hasArrow placement="top" {...tooltip}>
          {span}
        </NewTooltip>
      );
    }

    return span;
  }
);

export default Tag;

