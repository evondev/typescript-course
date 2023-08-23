import { Equal, Expect } from "@/type-utils";

type Immutable<T> = unknown;

// Test case
type ExampleType = { name: string; age: number };
type ImmutableExample = Expect<
  Equal<
    Immutable<ExampleType>,
    {
      readonly name: string;
      readonly age: number;
    }
  >
>;
