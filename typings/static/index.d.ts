declare module "*.scss" {
  const styles: Record<string, string>;
  export default styles;
}

declare module "*.css";
declare module "*.less";
declare module "*.png";
declare module "*.svg" {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare module "*.gif";
declare module "*.jpg";

declare module "*.xls";
declare module "*.xlsx";
declare module "*.csv";

