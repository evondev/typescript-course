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
type ComplexObj = typeof complexObj;
type ComplexObjKeys = keyof ComplexObj;
// Expected: type ComplexObj = "javascript" | "typescript" | "reactjs"
export {};
