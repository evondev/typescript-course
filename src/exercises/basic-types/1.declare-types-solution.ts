const language: string = "Typescript";
type Language = typeof language;

const isDeveloper: boolean = false;
type IsDeveloper = typeof isDeveloper;

const age: number = 30;
type Age = typeof age;

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
type ComplexObj = keyof typeof complexObj;
export {};
