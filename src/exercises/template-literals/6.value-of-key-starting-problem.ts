export type Obj = {
  a: "a";
  a2: "a2";
  a3: "a3";
  b: "b";
  b1: "b1";
  b2: "b2";
};

type ValuesOfKeysStartingWithA<Obj> = unknown;

type NewUnion = ValuesOfKeysStartingWithA<Obj>;
// type NewUnion = "a" | "a2" | "a3";
