import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import useProps, { IButtonProps } from "./hooks/useProps";

const Button = forwardRef(
  (
    props: ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const { className, children, rest } = useProps(props);
    return (
      <button ref={ref} className={className} {...rest}>
        {children}
      </button>
    );
  }
);

export default Button;

