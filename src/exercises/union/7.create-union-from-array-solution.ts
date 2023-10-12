import { Equal, Expect } from "@/type-utils";

const cars = ["BMW", "Toyota", "Mercedes", "Bentley", "Lamborghini"] as const;
console.log(cars[0]); // BMW
type Car = (typeof cars)[number]; // indexed access types
type BmwOrToyota = Extract<Car, "BMW" | "Toyota">;

type tests = [
  Expect<Equal<Car, "BMW" | "Toyota" | "Mercedes" | "Bentley" | "Lamborghini">>,
  Expect<Equal<BmwOrToyota, "BMW" | "Toyota">>
];
