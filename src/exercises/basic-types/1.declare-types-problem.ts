const language = "Typescript";
type Language = typeof language;
// expect type Language = string;

const isdeveloper = false;
type IsDeveloper = typeof isdeveloper;
// expect type IsDeveloper = boolean;

const age = 30;
type Age = typeof age;
// expect type Age = number;
export {};
