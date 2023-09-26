import { Equal, Expect } from "@/type-utils";

type ReturnTypeOfFunction<T> = T extends (...args: any) => infer R ? R : never;

// Test cases
type tests = [
  Expect<Equal<ReturnTypeOfFunction<() => number>, number>>,
  Expect<Equal<ReturnTypeOfFunction<(x: string) => boolean>, boolean>>
];
