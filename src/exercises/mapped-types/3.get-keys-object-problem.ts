import { Equal, Expect } from "@/type-utils";

type Obj = {
  a: string;
  b: string;
  c: number;
  d: number;
};
type StringKeys<T> = unknown;
type StringKeysOfObj = StringKeys<Obj>;
type tests = [Expect<Equal<StringKeysOfObj, "a" | "b">>];
