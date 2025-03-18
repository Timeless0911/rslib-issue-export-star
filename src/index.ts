import { VectorElementType } from "./enum";

export const renderers = {
  [VectorElementType.Path]: 1,
  [VectorElementType.Rect]: 2,
  [VectorElementType.Circle]: 3,
};

export * from "./enum";
