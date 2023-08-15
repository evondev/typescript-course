const language: string = "javascript";
console.log(language.split(""));
const score: number = 100;
// console.log(score.split());
const isAvailable: boolean = false;
// Ternary operator
const text: string = language === "javascript" ? "weird" : "awesome";
let keyboard: any;
keyboard = "Akko";
keyboard = 100;
keyboard = false;
let bottle: undefined = undefined;
let mouse: null = null;

let study: unknown;
study = "reactjs";
if (typeof study === "string") {
  study.split("");
}
function sum(a: unknown, b: unknown): number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return 0;
}
sum("5", "10"); // 0
sum(5, 10); // 15
function calculate(): never {
  // while (true) {
  //   console.log("infinite");
  // }
  throw new Error("some message");
}
