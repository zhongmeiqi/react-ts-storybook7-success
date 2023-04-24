import React, { AnchorHTMLAttributes } from 'react';
import useProps, { IButtonProps } from './hooks/useProps';

function LinkButton(props: AnchorHTMLAttributes<HTMLAnchorElement> & IButtonProps) {
    const { className, children, rest } = useProps(props);
    return (
        <a className={className} {...rest}>
            {children}
        </a>
    );
}

export default LinkButton;
