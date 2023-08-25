type AppendArgument = unknown;
type SomeF = (a: number, b: string) => number;
type FinalF = AppendArgument<SomeF, boolean>;
// FinalF is (x: boolean, a: number, b: string) => number
