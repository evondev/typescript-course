import { Equal, Expect } from "@/type-utils";

type NonEmptyArray<T> = unknown;
const a: NonEmptyArray<string> = []; // should be compilation error 🛑
const b: NonEmptyArray<string> = ["Hi TS"];
