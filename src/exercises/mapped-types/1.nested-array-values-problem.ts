import { Equal, Expect } from "@/type-utils";
// 🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯
type DeepFlat<T> = unknown;
type Deep = [["a"], ["b", "c"], [["d"]], [[[["e"]]]]];
type DeepTestResult = DeepFlat<Deep>;
type tests = [Expect<Equal<DeepTestResult, "a" | "b" | "c" | "d" | "e">>];
