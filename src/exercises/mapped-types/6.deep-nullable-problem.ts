import { Equal, Expect } from "@/type-utils";

type DeepNullable<T> = unknown;

type ExampleType = {
  name: string;
  age: number;
  isStudent: boolean;
};

type NullableExample = DeepNullable<ExampleType>;
type Tests = Expect<
  Equal<DeepNullable<ExampleType>, { name: null; age: null; isStudent: null }>
>;
