import React, {
  cloneElement,
  HTMLAttributes,
  memo,
  ReactElement,
  ReactNode,
  useMemo,
  useRef,
} from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import styles from "@root/styles/components/tooltip.module.scss";
import classnames from "clsx";
import {
  arrow,
  FloatingPortal,
  offset,
  Placement,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  safePolygon,
  FloatingArrow,
  flip,
} from "@floating-ui/react";
import { mergeRefs } from "react-merge-refs";
import is from "@sindresorhus/is";
import { isPresent } from "ts-extras";

const ARROW_HEIGHT = 6;
const GAP = 4;
const ARROW_WIDTH = 10;

function roundByDPR(value: number) {
  const dpr = window.devicePixelRatio || 1;
  return Math.round(value * dpr) / dpr;
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  /* 是否需要箭头 */
  hasArrow?: boolean;
  /* 主题颜色 */
  theme?: "dark" | "light";
  children: ReactElement;
  /* tooltips的显示内容*/
  tooltipContent?: ReactNode;
  /* 控制显隐 */
  defaultVisible?: boolean;
  placement?: Placement;
  arrowClassName?: string;
  mouseMove?: boolean;
  shouldUseSafePolygon?: boolean;
  useHover?: Parameters<typeof useHover>[1] | false;
  useDismiss?: Parameters<typeof useDismiss>[1] | false;
  useRole?: Parameters<typeof useRole>[1] | false;
  useFocus?: Parameters<typeof useFocus>[1] | false;
  onOpenChange?: NonNullable<Parameters<typeof useFloating>[0]>["onOpenChange"];
  open?: NonNullable<Parameters<typeof useFloating>[0]>["open"];
  flip?: NonNullable<Parameters<typeof flip>[0]> | false;
}

function NewTooltip(props: IProps) {
  const {
    children,
    hasArrow = false,
    theme = "light",
    defaultVisible: isDefaultVisible = false,
    className,
    placement = "bottom",
    tooltipContent: title,
    arrowClassName,
    mouseMove: shouldUseMouseMove = true,
    shouldUseSafePolygon = true,
    style,
    useHover: _useHover = {
      handleClose: shouldUseSafePolygon
        ? safePolygon({
            restMs: 50,
          })
        : null,
      move: shouldUseMouseMove,
    },
    useFocus: _useFocus,
    useRole: _useRole = { role: "tooltip" },
    useDismiss: _useDismiss = { ancestorScroll: true },
    onOpenChange: _onOpenChange,
    open: isOpen1,
    flip: flipOptions = false,
  } = props;

  const [isOpen, onOpenChange] = useControllableState({
    prop: isOpen1,
    defaultProp: isDefaultVisible,
    onChange: _onOpenChange,
  });

  const arrowRef = useRef<SVGSVGElement | null>(null);

  const { x, y, reference, floating, strategy, context, refs } = useFloating({
    placement,
    open: isOpen,
    onOpenChange,
    middleware: [
      offset(ARROW_HEIGHT + GAP),
      arrow({ element: arrowRef }),
      flipOptions === false ? undefined : flip(flipOptions),
    ].filter(isPresent),
  });

  const { getReferenceProps, getFloatingProps } = useInteractions(
    [
      // eslint-disable-next-line react-hooks/rules-of-hooks
      _useHover === false ? undefined : useHover(context, _useHover),
      // eslint-disable-next-line react-hooks/rules-of-hooks
      _useFocus === false ? undefined : useFocus(context, _useFocus),
      // eslint-disable-next-line react-hooks/rules-of-hooks
      _useRole === false ? undefined : useRole(context, _useRole),
      // eslint-disable-next-line react-hooks/rules-of-hooks
      _useDismiss === false ? undefined : useDismiss(context, _useDismiss),
    ].filter(isPresent)
  );

  const content = useMemo(
    () => (is.function_(title) ? title() : title),
    [title]
  );

  // Preserve the consumer's ref
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useMemo(
    () => mergeRefs([reference, (children as any).ref]),
    [reference, children]
  );

  const referenceProps = useMemo(() => {
    return getReferenceProps({
      ref,
      ...children.props,
    });
  }, [children.props, getReferenceProps, ref]);

  return (
    <>
      {cloneElement(children, referenceProps)}
      <FloatingPortal>
        {isOpen && content != null && content !== "" && (
          <div
            className={classnames(
              styles[`tooltip--${theme}`],
              styles.tooltip,
              className
            )}
            ref={floating}
            style={{
              position: strategy,
              top: "0",
              left: "0",
              transform: `translate(${roundByDPR(x ?? 0)}px,${roundByDPR(
                y ?? 0
              )}px)`,
              minWidth: refs.floating.current?.offsetWidth,
              ...style,
            }}
            {...getFloatingProps()}
          >
            {content}
            {hasArrow && (
              <FloatingArrow
                fill={theme === "dark" ? "#111" : "#fff"}
                ref={arrowRef}
                context={context}
                className={arrowClassName}
                height={ARROW_HEIGHT}
                width={ARROW_WIDTH}
              />
            )}
          </div>
        )}
      </FloatingPortal>
    </>
  );
}

export default NewTooltip;

const MemoTooltip = memo(
  NewTooltip,
  (prev, next) =>
    prev.tooltipContent === next.tooltipContent &&
    prev.children === next.children
);

export { MemoTooltip };

