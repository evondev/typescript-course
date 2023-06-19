import { Equal, Expect } from "@/type-utils";

const cars = ["BMW", "Toyota", "Mercedes", "Bentley", "Lamborghini"] as const;

type Car = unknown;
type BmwOrToyota = unknown;

type tests = [
  Expect<Equal<Car, "BMW" | "Toyota" | "Mercedes" | "Bentley" | "Lamborghini">>,
  Expect<Equal<BmwOrToyota, "BMW" | "Toyota">>
];
