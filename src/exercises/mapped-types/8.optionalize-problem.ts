import { Equal, Expect } from "@/type-utils";

type Optionalize<T, K> = unknown;

// Test case
type ExampleType = { name: string; age: number; email: string };
type OptionalNameAndAge = Expect<
  Equal<
    Optionalize<ExampleType, "name" | "age">,
    {
      name: string;
      age: number;
      email: string | undefined;
    }
  >
>;
// type OptionalNameAndAge = {
//   name: string;
//   age: number;
//   email: string | undefined;
// }
