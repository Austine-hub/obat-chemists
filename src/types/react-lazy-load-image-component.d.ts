declare module "react-lazy-load-image-component" {
  import * as React from "react";

  interface LazyLoadImageProps
    extends React.ImgHTMLAttributes<HTMLImageElement> {
    effect?: "blur" | "opacity" | string;
    placeholderSrc?: string;
    threshold?: number | string;
    visibleByDefault?: boolean;
  }

  export class LazyLoadImage extends React.Component<LazyLoadImageProps> {}
}
