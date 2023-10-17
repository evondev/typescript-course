import { Equal, Expect } from "@/type-utils";

export const createSet = () => {
  return new Set();
};
const stringSet = createSet<string>();
const numberSet = createSet<number>();
const unknownSet = createSet();
type tests = [
  Expect<Equal<typeof stringSet, Set<string>>>,
  Expect<Equal<typeof numberSet, Set<number>>>,
  Expect<Equal<typeof unknownSet, Set<string>>>
];
