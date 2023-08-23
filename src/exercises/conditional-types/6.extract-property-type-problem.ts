import { Equal, Expect } from "@/type-utils";

type PropertyType = unknown;

// Test cases
type ExampleType = { name: string; age: number; isStudent: boolean };
type NameType = Expect<Equal<PropertyType<ExampleType, "name">, string>>; // string
type AgeType = Expect<Equal<PropertyType<ExampleType, "age">, number>>; // number
