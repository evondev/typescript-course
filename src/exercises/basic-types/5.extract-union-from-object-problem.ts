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
