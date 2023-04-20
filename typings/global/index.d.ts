// declare const requestIdleCallback: Function;
declare module "*.svg?component" {
  const ReactComponent: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  export { ReactComponent };
}

