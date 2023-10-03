type AppendArgument<F extends (...args: any) => any, D> = F extends (
  ...args: infer Arguments
) => infer Return
  ? (x: D, ...args: Arguments) => Return
  : any;
// ...args: Arguments) => Return -> (a: number, b: string) => number;
type SomeF = (a: number, b: string) => [1, 2, 3];
type FinalF = AppendArgument<SomeF, boolean>;
// FinalF is (x: string, a: number, b: string) => number
// (x: [1,2,3]; a: number, b: string) => number;
export {};
