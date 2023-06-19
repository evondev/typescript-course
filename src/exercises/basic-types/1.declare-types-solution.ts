const language: string = "Typescript";
type Language = typeof language;
// expect type Language = string;

const isdeveloper: boolean = false;
type IsDeveloper = typeof isdeveloper;
// expect type IsDeveloper = boolean;

const age: number = 30;
type Age = typeof age;
// expect type Age = number;
export {};
