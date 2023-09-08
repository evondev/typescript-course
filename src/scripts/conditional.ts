// Ternary operator
const number = 100;
const isTrue = number >= 100 ? true : false;
// type ConditionalType = SomeType extends OtherType ? TrueType : FalseType;
type Check<T> = T extends string ? "string" : "non-string";
export type IsString = Check<string>; // string
export type IsNonString = Check<number>; // non-string
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
function logObject(x: number) {}
type Z = Parameters<typeof logObject>;
type Extract<T, U> = T extends U ? T : never;
type X = Extract<string | string[], string[]>; // string[]
// "evondev" ["evondev"]
type Exclude<T, U> = T extends U ? never : T;
type Y = Exclude<string | string[], string[]>; // string
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer ReturnValue
  ? ReturnValue
  : any;
function sum(a: number, b: number): number {
  return a + b;
}
// (...args: any) => number
// (...args: any) => string
// (...args: any) => boolean
// (...args: any) => ReturnValue -> ReturnValue : any
function logMyName(): string {
  return "evondev";
}
// const number = 100;
type SumF = ReturnType<typeof sum>;
type LogMyNameF = ReturnType<typeof logMyName>;
