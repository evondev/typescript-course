const language: string = "Typescript";
type Language = unknown;
// expect type Language = string;

const isDeveloper: boolean = false;
type IsDeveloper = unknown;
// expect type IsDeveloper = boolean;

const age: number = 30;
type Age = unknown;
// expect type Age = number;

const complexObj = {
  javascript: {
    label: "Javascript",
  },
  typescript: {
    label: "Typescript",
  },
  reactjs: {
    label: "Reactjs",
  },
};
type ComplexObj = unknown;
// Expected: type ComplexObj = "javascript" | "typescript" | "reactjs"
export {};
