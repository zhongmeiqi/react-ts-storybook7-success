import React, { ComponentProps, HTMLAttributes } from 'react';
import Tooltip from '../tooltip/Tooltip';
import Tag from './Tag';

function TagGroup({
    tags,
    limit = 3,
    ...rest
}: {
    tags: Array<string | { tag: string; tooltip?: ComponentProps<typeof Tag>['tooltip'] }>;
    limit?: number;
} & HTMLAttributes<HTMLDivElement>): JSX.Element {
    return tags.length > 0 ? (
        <div {...rest}>
            {tags.slice(0, limit).map(t =>
                typeof t === 'string' ? (
                    <Tag key={t}>{t}</Tag>
                ) : (
                    <Tag tooltip={t.tooltip} key={t.tag}>
                        {t.tag}
                    </Tag>
                )
            )}
            {tags.length > limit && (
                <Tooltip
                    tooltipContent={tags.slice(limit).map(t =>
                        typeof t === 'string' ? (
                            <Tag key={t}>{t}</Tag>
                        ) : (
                            <Tag tooltip={t.tooltip} key={t.tag}>
                                {t.tag}
                            </Tag>
                        )
                    )}
                    placement="top"
                    hasArrow
                >
                    <span
                        style={{
                            color: '#cf7e34',
                        }}
                    >
                        更多...
                    </span>
                </Tooltip>
            )}
        </div>
    ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <></>
    );
}

export default TagGroup;
