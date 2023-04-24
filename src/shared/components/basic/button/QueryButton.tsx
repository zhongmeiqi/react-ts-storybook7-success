import React, { ComponentProps, useMemo } from 'react';
import { Popover } from 'antd';
import Button from '@root/shared/components/basic/button/Button';

interface IQueryButtonProps extends ComponentProps<typeof Button> {
    tips?: string;
}

const QueryButton = ({ tips, ...buttonProps }: IQueryButtonProps) => {
    const isShowTips = useMemo(() => {
        return !!(tips && tips.length > 0);
    }, [tips]);

    const { className: btnClass } = buttonProps;

    return isShowTips ? (
        <Popover
            content={tips}
            placement="bottom"
            trigger="click"
            getTooltipContainer={btnClass ? () => document.querySelectorAll(`.${btnClass}`)[0] as HTMLElement : undefined}
        >
            <Button primary type="submit" {...buttonProps}>
                查询
            </Button>
        </Popover>
    ) : (
        <Button primary type="submit" {...buttonProps}>
            查询
        </Button>
    );
};

export default QueryButton;
