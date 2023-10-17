const array = [
  {
    name: "John",
  },
  {
    name: "Steve",
  },
];

const obj = array.reduce((accum, item) => {
  accum[item.name] = item;
  return accum;
}, {});
