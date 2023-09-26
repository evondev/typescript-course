import { Equal, Expect } from "@/type-utils";

type GetDataValue<T> = T extends { data: infer DataValue } ? DataValue : never;
// { data: "hello" }> -> "hello"
// { data: { name: "hello" } }> -> { name: "hello" }
// { data: { name: "hello"; age: 20 } } -> { name: "hello"; age: 20 }
type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: [1, 2, 3, 4, 5] }>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >
];
