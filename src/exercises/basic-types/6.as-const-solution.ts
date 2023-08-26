export const programingLanguages = {
  JAVASCRIPT: "javascript",
  REACTJS: "reactjs",
  PHP: "php",
  PYTHON: "python",
  VUE: "vue",
  RUBY: "ruby",
} as const;
// programingLanguages.PYTHON = "Something else";
export type PythonLanguage = (typeof programingLanguages)["PYTHON"]; // string
