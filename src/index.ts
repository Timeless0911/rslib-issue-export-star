import { foo } from "./foo";

export const bar = (): string => {
  return `${foo}-bar`;
};

export * from "./foo";
