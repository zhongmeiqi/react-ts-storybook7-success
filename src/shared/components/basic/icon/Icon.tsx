import React, { ForwardedRef, forwardRef, SVGProps } from "react";
import styles from "@root/styles/components/icon.module.scss";
import classnames from "clsx";

interface IIconProps extends SVGProps<SVGSVGElement> {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  spin?: boolean;
}

const Icon = forwardRef(
  (props: IIconProps, ref: ForwardedRef<SVGSVGElement>) => {
    const { icon: Comp, spin: isSpin, className, ...rest } = props;
    return (
      <Comp
        ref={ref}
        className={classnames(className, isSpin && styles["icon--spin"])}
        {...rest}
      />
    );

    // return <div>1234</div>;
  }
);

export default Icon;

