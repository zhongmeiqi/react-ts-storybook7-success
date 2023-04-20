function withPrefix(className: string): string;
function withPrefix(className: undefined): undefined;
function withPrefix(className?: string) {
  if (className == null) return;
  return `gtw-${className}`;
}

export { withPrefix };

export const textYellow = withPrefix("theme--text-yellow");
export const textRed = withPrefix("theme--text-red");
export const textGreen = withPrefix("theme--text-green");

