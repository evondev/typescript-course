import { Equal, Expect } from "@/type-utils";

type X = {
  a: 1;
  b: number;
};
type Y = {
  a: 2;
  b: string;
  c: boolean;
};
type Merge<A, B> = unknown;
type XY = Merge<X, Y>;
type tests = [
  Expect<
    Equal<
      XY,
      {
        a: 2;
        b: string;
        c: boolean;
      }
    >
  >
];
