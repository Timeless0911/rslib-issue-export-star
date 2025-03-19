import type { Foo } from "./foo";

export const bar = (foo: Foo): string => {
  return `${foo}-bar`;
};

export * from "./foo";
