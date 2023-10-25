const array = [
  {
    name: "John",
  },
  {
    name: "Steve",
  },
  {
    name: 100,
  },
];

const obj = array.reduce<Record<string, any>>((accum, item) => {
  accum[item.name] = item;
  return accum;
}, {});
console.log("file: 1.reduce-solution.ts:14 ~ obj ~ obj:", obj);
// const obj2 = {};
// obj2[1] = 10;
// console.log("file: 1.reduce-solution.ts:19 ~ obj2:", obj2);
export {};
