import { withPrefix } from "@root/shared/utils/basic-classnames";
import React, { ReactNode } from "react";
import clsx from "clsx";

const options = [
  "button-text",
  "link-text",
  "active",
  "primary",
  "hover-bg",
  "thirdary-level-tab-bg",
  "dropdown",
  "secondary-level-btn",
  "title-text",
  "primary-text",
  "remark-text",
  "secondary-text",
  "tips-text",
  "inactive-text",
  "input-border",
  "split-line",
  "page-bg",
  "table-head-bg",
  "table-hover",
  "text-bg",
  "success",
  "error",
  "info",
  "green",
  "delete-line",
  "red",
  "yellow",
  "blue1",
  "blue3",
];

const bg = options.filter((o) => o.endsWith("bg"));
const text = options.filter((o) => o.endsWith("text"));
const line = options.filter((o) => o.endsWith("line"));
const btn = options.filter((o) => o.endsWith("btn"));
const alert = ["success", "error", "info"];
const colors = ["red", "green", "yellow", "blue1", "blue3"];
const others = options.filter(
  (o) =>
    !bg.includes(o) &&
    !text.includes(o) &&
    !line.includes(o) &&
    !btn.includes(o) &&
    !alert.includes(o) &&
    !colors.includes(o)
);

export { options, bg, text, line, btn, others, alert, colors };

function Color(props: {
  text?: string;
  bg?: string;
  border?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={clsx(
        withPrefix(`theme--text-${props.text ?? ""}`),
        withPrefix(`theme--bg-${props.bg ?? ""}`),
        withPrefix(`theme--border-${props.border ?? ""}`)
      )}
      style={{ width: 100, height: 100, borderWidth: 10, borderStyle: "solid" }}
    >
      {props.children}
    </div>
  );
}

export default Color;

