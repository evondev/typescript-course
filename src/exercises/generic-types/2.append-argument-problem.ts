import { Equal, Expect } from "@/type-utils";

type SomeF = (a: number, b: string) => number;
type AppendArgument<F, A> = unknown;

type FinalF = AppendArgument<SomeF, boolean>;
type tests = [
  Expect<Equal<FinalF, (x: boolean, a: number, b: string) => number>>
];
