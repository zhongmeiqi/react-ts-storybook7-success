import React, {
  ComponentProps,
  ReactElement,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useIsomorphicLayoutEffect } from "react-use";
import NewTooltip from "../tooltip/Tooltip";

function Text<T extends Element = Element>({
  children,
  defaultIsOverflow,
  tooltip,
}: {
  children: (ref: RefObject<T>, isOverflow?: boolean) => ReactElement;
  defaultIsOverflow?: boolean;
  tooltip?: Omit<ComponentProps<typeof NewTooltip>, "children">;
}) {
  const ref = useRef<T>(null);
  const [isOverflow, setIsOverflow] = useState(defaultIsOverflow);

  const callback = useCallback(() => {
    if (!isOverflow) {
      if (
        (ref.current?.scrollWidth ?? 0) >
          (ref.current?.clientWidth ?? Number.MAX_SAFE_INTEGER) ||
        (ref.current?.scrollHeight ?? 0) >
          (ref.current?.clientHeight ?? Number.MAX_SAFE_INTEGER)
      ) {
        setIsOverflow(true);
      }
    } else if (
      (ref.current?.scrollWidth ?? 1) <= (ref.current?.clientWidth ?? 0) &&
      (ref.current?.scrollHeight ?? 1) <= (ref.current?.clientHeight ?? 0)
    ) {
      setIsOverflow(false);
    }
  }, [isOverflow]);

  const observer = useMemo(
    () =>
      new window.ResizeObserver((entries) => {
        const cur = ref.current;
        if (entries[0] && cur) {
          callback();
        }
      }),
    [callback]
  );

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref.current]);

  useEffect(() => {
    if (ref.current && isOverflow == null) callback();
  }, [callback, isOverflow]);

  const c = children(ref, isOverflow);

  return isOverflow ? (
    <NewTooltip theme="dark" tooltipContent={c} hasArrow {...tooltip}>
      {c}
    </NewTooltip>
  ) : (
    c
  );
}

export default Text;

